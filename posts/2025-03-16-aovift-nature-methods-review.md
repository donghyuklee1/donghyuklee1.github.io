---
title: "[논문리뷰] Fourier-based three-dimensional multistage transformer for aberration correction in multicellular specimens (AOViFT, Nature Methods 2025)"
last_modified_at: 2025-03-16
categories: 논문리뷰
tags:
  - Adaptive Optics
  - Light Sheet Microscopy
  - Vision Transformer
  - Fourier Embedding
  - Microscopy
  - Nature Methods
excerpt: AOViFT—푸리에 도메인 3D 멀티스테이지 비전 트랜스포머 기반 적응형 광학 감지 프레임워크. 가이드 스타와 파면 센서 없이 이미지만으로 수차를 추론하고 회복한다.
use_ma: true
paper:
  conference: Nature Methods 2025
  links:
    paper: "https://doi.org/10.1038/s41592-025-02844-7"
    github: "https://github.com/cell-observatory/aovift"
  authors: Thayer Alshaabi, Daniel E. Milkie, Gaoxiang Liu, Srigokul Upadhyayula, Eric Betzig et al.
  affiliation: HHMI, UC Berkeley, Chan Zuckerberg Biohub
  date: 1 October 2025
---

## 1. 배경 및 동기

고해상도 조직 이미징은 샘플 유도 광학 수차(sample-induced optical aberrations) 때문에 해상도와 대비가 크게 떨어진다. 파면 센서 기반 적응형 광학(adaptive optics, AO)은 이런 수차를 측정할 수 있지만, 하드웨어 솔루션은 구현이 복잡하고 비용이 크며, 넓은 시야에서 공간적으로 변하는 수차를 직렬로 매핑할 때 느리다는 한계가 있다.

본 논문은 **AOViFT(adaptive optical vision Fourier transformer)**를 소개한다. 3차원 멀티스테이지 비전 트랜스포머가 **푸리에 도메인 임베딩** 위에서 동작하는 머신러닝 기반 수차 감지 프레임워크다. AOViFT는 점상(puncta) 표지 샘플에서 수차를 추론하고 회절 한계에 가까운 성능을 복원하며, 기존 아키텍처나 실공간 네트워크 대비 계산 비용·학습 시간·메모리 사용량을 크게 줄인다. 살아있는 유전자 편집 제브라피시 배아에서 검증되었고, 변형 거울(deformable mirror, DM) 또는 후처리 디컨볼루션으로 공간적으로 변하는 수차를 보정할 수 있음을 보였다. 가이드 스타와 파면 감지 하드웨어를 제거하고 실험 워크플로를 단순화함으로써, 다양한 생물학적 샘플에서 고해상도 체적 현미경의 기술적 진입 장벽을 낮춘다.

---

## 2. AO-LLSM와 ML-AO 요구사항

연구진은 실험실에서 Shack–Hartmann(SH) 센서로 2광자 여기(TPE) 형광 가이드 스타에 의해 샘플에 부과된 수차를 측정하는 방식을 널리 사용해 왔고, AO lattice light sheet microscopy(AO-LLSM)로 다세포 생체 내 4D 서브세포 동역학을 연구해 왔다. 최근에는 하드웨어 기반 파면 측정의 비용과 복잡도를 피하고, 현미경 이미지 자체에서 수차를 직접 추론하는 여러 ML-AO 방법이 제안되었다(Supplementary Table 1). 이 논문에서는 다양한 샘플 경험을 바탕으로 **AO-LLSM에 적합한 ML-AO 방법이 만족해야 할 조건**을 명시한다.

- **속도**: 볼륨 전체에 걸쳐 ML 모델이 수차를 추론하는 시간이 그 볼륨을 촬영하는 시간보다 짧아야 한다. LLSM에서는 보통 몇 초 안에 여러 세포를 아우르는 볼륨을 이미징한다.
- **강건성**: 실제로 마주치는 대부분의 수차를 정확히 예측해야 한다. 제브라피시 배아 AO-LLSM에서는 보통 최대 5λ peak-to-valley(P–V), λ는 자유공간 파장, 첫 15개 Zernike 모드(Z⁰₀~Z±⁴₄, Supplementary Fig. 1)의 임의 조합.
- **정확도**: 샘플 내 공간 주파수 분포와 관계없이 현미경의 이론적 3D 해상도 한계에 가깝게 복원할 수 있어야 한다.
- **비침습성**: 형광 광자 예산을 과도하게 쓰거나 생리적 상태를 크게 교란하지 않으면서 정확한 보정을 제공해야 한다.

기존 ML-AO 방법들은 위 조건을 모두 충족하지 못했고, 이에 AO-LLSM에 더 적합한 방법을 만들고자 했다.

---

## 3. 선행 지식(prior)과 점상(puncta) 가정

어떤 ML 접근에도 prior가 중요하다. 이 방법에서는 **각 등방성 패치(isoplanatic patch)**—즉, 더 큰 관심 볼륨 안에서 동일한 수차를 갖는 부분 볼륨—가 **진짜 서브회절 크기의 형광 점상 하나 이상을 포함한다**는 prior를 사용한다. 이를 위해 genome-edited 샘플에서 clathrin-coated pit(CCP)에 유비쿼터스하게 존재하는 adapter protein인 AP2를 형광 단백질과 융합해 발현시킨다. 이는 샘플 타입당 한 번의 선행 비용이 들지만, 비침습적으로 AO 보정에 쓸 수 있는 견고한 신호를 주며, 같은 형광 채널에서 다른 서브세포 타겟을 동시에 이미징하되 계산적으로 분리 가능하다면 배제하지 않는다.

---

## 4. AOViFT 아키텍처 개요

베이스라인 모델은 ablation study(Supplementary Note A, Supplementary Figs. 2–7)에서 선택되었으며, **패치 크기 32와 16 픽셀의 2단계 트랜스포머**로 구성된다(Fig. 1c).

### 4.1 워크플로(Fig. 1a)

- 수차가 있는 3D 볼륨을 전처리한 뒤 **푸리에 임베딩**으로 변환한다.
- 이 임베딩을 3D 비전 트랜스포머 모델에 넣어 **검출 파면(detection wavefront)**을 예측한다.
- DM에 보정 패턴을 적용해 보정된 볼륨을 촬영한다.

### 4.2 푸리에 임베딩(Fig. 1b)

대부분의 ML 비전 모델은 실공간 데이터를 쓰는데, 이는 이미지 크기나 특징 기술자에 대한 명확한 한계가 없다. 대신 **푸리에 도메인 임베딩**을 사용한다. 이는 현미경의 OTF(optical transfer function)에 의해 묶여 있다. 등방성 패치 내 수차는 그 패치 내 모든 광자에 전역적으로 작용하여, FFT 진폭과 위상에 학습 가능한 고유한 ‘지문’ 패턴을 만든다(Supplementary Note A.1, Supplementary Figs. 5–7).

**임베딩 정의**: 전처리된 3D 스택으로부터 ℰ ∈ ℝ^(ℓ×d×d), ℓ=6. **진폭 평면** α₁, α₂, α₃과 **위상 평면** φ₁, φ₂, φ₃ 각각 크기 d×d.  
- α₁: kz=0 주평면; α₂: 주평면부터 5개 평면 평균; α₃: kz=5부터 5개 평면 평균.  
- 위상은 여러 점상의 간섭을 제거한 뒤(PLM, NCC, 마스킹 등) τ = ℱ(V)/ℱ(𝒮𝒮)로 OTF를 얻고, 각 kz 평면의 unwrapped phase로 φ를 구한 뒤 동일하게 세 평면으로 집계한다.  
- 최종 입력: ℰ = {α₁, α₂, α₃, φ₁, φ₂, φ₃}.

개별 CCP 신호는 약하지만, 같은 등방성 영역의 점상들은 거의 동일한 공간 주파수 분포를 갖고 합쳐져서 추론에 충분한 SNR의 푸리에 임베딩을 만든다(Supplementary Fig. 6).

### 4.3 멀티스테이지 3D 비전 트랜스포머(Fig. 1c)

- **멀티스테이지**: 각 스테이지에서 서로 다른 **패치 크기**(p₁=32, p₂=16)를 사용하고, 공간 해상도를 다운샘플링하지 않는다. 스테이지마다 임베딩 차원을 패치 내 voxel 수(p²ᵢ)로 고정한다.
- **패치 인코딩**: ℰ를 비중첩 2D 타일(각 pᵢ×pᵢ)로 나누어 flatten → xₚ ∈ ℝ^(ℓ×kᵢ×p²ᵢ).
- **위치 인코딩**: Cartesian 대신 **극좌표 (r, θ)** 기반 radial positional encoding. Zernike 다항식의 방사 대칭과 NeRF·RoFormer 등에서의 효율성에 동기.
- **트랜스포머 블록**: 각 스테이지에 n개 레이어, 각 레이어는 h개 multi-head attention(MHA)과 MLP. Layer norm과 residual 연결 사용. 스테이지 입출력 사이에도 skip connection. Dropout 0.1, stochastic depth 0.1.
- **출력**: 마지막 스테이지 패치를 global average pooling한 뒤 fully connected로 **z개의 Zernike 계수** 출력.

---

## 5. 벤치마크: AOViFT vs 다른 아키텍처

레이어·헤드 수를 바꾼 AOViFT 5종과, 3D 버전 ViT·ConvNeXt(각각 3·4가지 크기)를 같은 2×10⁶ 합성 볼륨으로 학습하고, 10⁴ 단일 점상 테스트 세트와 10⁵ 한계 테스트 세트로 평가했다(Fig. 2, Supplementary Figs. 8–9, Supplementary Table 3).

- **정확도**: 가장 작은 ConvNeXt를 제외한 모든 모델이 1회 반복에서 median residual error를 회절 한계 미만으로 줄였지만, **AOViFT가 계산 자원을 가장 절약**했다. 학습 시간(8×H100), 학습 FLOPs, 메모리 사용량(Supplementary Fig. 8c,f), 그리고 **추론 속도(이미지/초)·단일 샷 지연시간**에서 AOViFT가 우수했다(Fig. 2a–d).
- **멀티스테이지 효과**: 여러 스케일에서 특징을 학습해 수렴이 빠르고, 상대적으로 작은 모델 크기로도 정확한 예측, 최고 추론률, 최단 지연시간을 보였다.
- **주요 모델 선택**: 크기와 지연이 작은 **AOViFT Small**을 이후 실험의 기본 모델로 사용했다.

---

## 6. In silico 평가

- **회절 한계 정의**: wavefront 왜곡이 약 0.075λ RMS 또는 λ/4 P–V 이하(Strehl 0.8, Rayleigh quarter-wave 기준).
- **단일 반복**: 초기 수차 <0.30λ RMS, 적분 신호 >5×10⁴ photons인 경우 거의 모든 시험에서 1회 반복만으로 회절 한계 성능 복원(Fig. 2e).
- **반복 증가**: 2~5회 반복으로 회절 한계 복원 범위가 각각 0.40, 0.50, 0.55, 0.60λ RMS까지 넓어지며, 필요한 신호 하한은 ~5×10⁴ photons 유지(Fig. 2f, Supplementary Fig. 10). 이는 SH 파면 감지에 필요한 신호와 비슷하고, PhaseRetrieval보다 최소 3배 낮다.
- **PhaseNet·PhaseRetrieval 비교**: 동일 테스트에서 PhaseNet·PhaseRetrieval은 1회 반복으로 회절 한계 범위가 초기 수차 <0.15λ RMS 정도로만 넓어지고, 반복을 늘려도 AOViFT만큼 개선되지 않음(Supplementary Fig. 11a,b, 12a–f). PhaseRetrieval은 1회 반복으로 더 넓은 초기 수차 범위에서 residual을 줄이지만 회절 한계까지는 못 미치며, fiducial bead가 FOV 중앙에 없으면 이점이 사라지고, PhaseNet은 그 경우 예측력을 완전히 잃는다(이미지 클리핑). PhaseRetrieval·PhaseNet은 단일 bead를 가정하는 반면, AOViFT는 FOV 내 1~5개 점상으로 학습하고, 정규화 단계로 여러 점상의 위상 프린지를 제거해(Supplementary Fig. 24dd) 최대 150개 점상까지 평균 최근접 이웃 거리 >400 nm이면 단일 점상과 비슷한 정확도로 추론한다(Fig. 2g,h, Supplementary Fig. 13). 즉 AOViFT는 CCP처럼 여러 개의 작고 흐린 서브회절 생물학적 구조의 합성 신호로 정확한 추론을 한다.

---

## 7. 비드 실험: 인위적 수차 보정

AO-LLSM 설정(Supplementary Fig. 14)에서 100 nm 형광 비드를 촬영하며, DM에 첫 15개 Zernike(피스톤·팁/틸트·디포커스 제외) 중 1개 또는 2개 조합, 각 0.2λ RMS로 66가지 실험을 수행했다. 각 경우 (1) 수차 부여 → (2) 촬영 → (3) AOViFT 예측 → (4) DM 보정 → (5) 반복을 최대 5회 진행(Fig. 3).

- 45건에서 **2회 반복**으로 회절 한계 복원, 11건은 **5회 반복**으로 복원(Supplementary Fig. 15). 나머지 10건은 5회 반복 후에도 수차가 최소 50% 감소했다.
- 단일 모드부터 2개 모드 조합(O-Astig+H-Coma, O-Quadrafoil+P-Spherical, V-Astig+V-Trefoil, V-Coma+O-Astig2 등)까지 다양한 조합에 대한 residual 열지도(Fig. 3m)로 정량화했다.

---

## 8. 배양 세포: 제한된 신호·조밀한 점상·움직임

SUM159 인간 유방암 유래 세포를 AP2-eGFP로 gene editing해 CCP에 다양한 단계의 AP2를 내인성 수준으로 표지했다. DM에 2.9λ P–V(horizontal coma + oblique trefoil, Z¹₃+Z³₃) 또는 3.1λ P–V(horizontal coma + primary spherical, Z¹₃+Z⁰₄) 수차를 부여한 뒤 AOViFT로 보정했다(Fig. 4).

- **2회 반복**으로 거의 회절 한계 성능 복원(Supplementary Table 4).
- CCP 피크 신호가 보정 후 2~4배 증가했고, 3D FFT를 통한 공간 주파수 내용이 매 반복마다 증가했다(Fig. 4 인셋).
- 단일 모드 1λ P–V 보정 예시(Supplementary Fig. 16), 2모드 보정 추가 예시(Supplementary Fig. 17)도 제시되었다.

---

## 9. 제브라피시 배아 in vivo: 자연 수차 보정

투명 척추동물인 제브라피시는 이미징에 널리 쓰이지만, 다세포 생체 내 이질적인 굴절률과 표면에서의 불연속으로 **공간에 따라 변하는 수차**가 발생한다(Fig. 5a).

- **한 영역(~2λ P–V)**: 72 hpf AP2-mNeonGreen transgenic 배아의 notochord 근처에서, AOViFT 보정(Fig. 5b 하단)이 SH 보정(중간)과 비슷한 수준의 공간 주파수 복원(FFT)을 보였다.
- **이중 채널**: AP2-mNeonGreen(CCP)과 mChilada-Cox8a(미토콘드리아) 발현 배아에서, mNeonGreen으로 ~1.5λ P–V 수차를 추론·보정한 뒤 같은 보정을 두 채널에 적용(Fig. 5c). 이상적 PSF로 디컨볼루션만 하면 수차 있는 이미지에서 고주파 아티팩트만 증폭되지만, AOViFT로 보정한 볼륨을 OMW(OTF masked Wiener) 디컨볼루션하면 고주파 감쇠를 보상해 샘플 구조를 더 정확히 표현했다.

---

## 10. 공간적으로 변하는 수차: 타일맵과 후처리 디컨볼루션

GS 조명 SH 센서는 단일 등방성 영역에 한해 측정이 정확하다. 관심 볼륨보다 등방성 영역이 훨씬 작고 경계를 사전에 알 수 없어, 많은 작은 타일로 직렬 SH 측정을 해야 하고 타일 크기는 경험에 의존한다. AOViFT는 **단일 큰 3D 이미지 볼륨**에서 204개 수차 맵을 6.3 μm 간격으로 37×211×12.8 μm³ 영역(48 hpf 살아있는 제브라피시 배아)에서 **4×A100 GPU 1노드로 약 1.5분** 안에 생성했다(Fig. 6a,b,d).

단일 pupil conjugate DM으로는 공간적으로 변하는 수차를 전 FOV에 동시에 보정할 수 없다. 선택지는 (1) 수차별로 타일을 하나씩(또는 비슷한 수차끼리 묶어서) 촬영하는 것—느리지만 현미경이 가진 정보를 최대한 복원—과 (2) **각 raw 타일을 해당 타일 전용 aberrated PSF로 디컨볼루션**하는 것이다. (2)는 완전한 회절 한계 복원은 아니지만, 수차 유도 아티팩트를 억제하고 샘플 구조를 더 충실히 표현한다(Fig. 6c,e,f–h). 디컨볼루션 시 타일 경계 아티팩트를 줄이기 위해 타일을 PSF 폭의 절반(32 픽셀)만큼 확장하고, 디컨볼루션 후 오버랩을 제거해 코어 영역만 이어 붙였다(OMW, MATLAB).

---

## 11. 합성 데이터·전처리·학습 요약

- **수차 모델**: 11개 Zernike(첫 15개 중 피스톤·팁/틸트·디포커스 제외), n≤4. 전기장 E_abb(kx,ky), PSF_det_abb, light sheet PSF_exc(z)와 결합한 overall PSF로 합성 볼륨 생성. Zernike 분포는 single mode, bimodal, powerlaw(Lomax), Dirichlet 네 가지를 골고루 사용(Supplementary Fig. 21).
- **학습 데이터**: 2×10⁶ 볼륨, 64×64×64 voxel, 8×8×12.8 μm³, 125×125×200 nm³/voxel. 1~5개 점상, Gaussian FWHM ∈ {100,200,300,400} nm, 1~200,000 photons/점상, 0~0.5λ RMS. 카메라 계수는 QE·포아송 노이즈·독노이즈 반영(식 (1)–(10)).
- **테스트**: 10⁵ 볼륨, 수차 최대 1.0λ RMS, 최대 500,000 photons, 한 볼륨당 최대 150개 객체로 한계 테스트.
- **Fourier embedding 전처리**: Gaussian high-pass, NA 한계 low-pass(σ=3 voxel), Tukey 윈도우(xy만), kz=0 근처에서 aberration 정보가 최대이므로 축방향은 윈도우 없음. 이상 PSF 대비 진폭 비율로 α, 간섭 제거 후 τ의 unwrapped phase로 φ 계산.

---

## 12. 토론 및 한계

- **속도**: 단일 관심 영역만 보면 SH가 더 빠를 수 있지만, 큰 FOV에 걸쳐 여러 영역을 매핑할 때는 **AOViFT의 병렬화 가능한 추론**이 전체적으로 시간 이득을 준다(Supplementary Table 5). TensorRT·다중 노드 분산 GPU로 추론을 더 가속할 수 있다.
- **SH 대비**: SH는 각 등방성 영역 내 형광 분포에 무관(agnostic)하지만, TPE 레이저·갈바노·SH 센서 등 추가 하드웨어가 필요하고, 등방성 영역을 사전에 모르므로 초기 측정 그리드를 촘촘히 해야 해서 시간과 광자 비용이 든다. AOViFT는 **단일 큰 3D 볼륨**에서 수차 맵을 얻으므로, 타일 크기나 위치를 in silico로 반복 조정해 맵이 수렴할 때까지 할 수 있다.
- **일반화**: 특정 LLS 타입(Supplementary Table 6)으로 학습했지만, 다른 light sheet에 대해 in silico에서도 예측 능력이 유지되었다(Supplementary Fig. 20). 다른 light sheet용으로 학습하면 범위가 더 넓어질 수 있으나, 합성 학습 데이터에 detection 초점면에서 축방 오프셋된 light sheet를 넣어 현재 필요한 closed-loop 하드웨어 보정을 대체하는 편이 유용할 수 있다. 앞으로는 plasma membrane·세포소기관 같은 보편적 마커를 쓰되, 수차 추론에 충분한 고주파 정보가 있으면 puncta 대신 활용할 수 있다. 일반화와 좁은 시나리오 과적합 감소를 위해 light sheet·샘플·표지 전략의 다양성을 넓히는 것이 좋다.
- **3D 트랜스포머 개발 난이도**: 설계·학습·테스트마다 전용 합성 데이터 파이프라인, 대규모 GPU, 하이퍼파라미터 튜닝이 필요해 개발 주기가 길다. **자연 이미지처럼 3D 체적 이미징용 대규모 사전학습 “foundation model”이 부재**하다는 점이 병목이며, AO뿐 아니라 다른 응용에도 공통이다. 특정 조건(예: AO-LLSM)에 맞춘 솔루션은 가능하지만, 새 샘플·현미경 기하·수차 범위로 넓히려면 상당한 재학습과 데이터 큐레이션이 필요하다. 논문은 AOViFT를 **대규모 체적 현미경 데이터로 사전학습된 4D foundation model**을 향한 디딤돌로 보고, 그러한 모델이 분자부터 개체, 확률적 분자 동역학부터 발생까지 시공간·시간 스케일의 태스크에 fine-tuning될 수 있음을 제안한다. 이를 위해서는 페타바이트급 4D 데이터와 대규모 연산 자원이 필요하지만, 성공 시 개발 주기 단축·일반화 향상·다양한 실험·현미경 설정에 대한 맞춤 학습 부담을 줄일 수 있다.

---

## 13. 방법 요약(실험·윤리·코드·데이터)

- **AO-LLS 현미경**: 488/560 nm 레이저, AOTF, Powell lens·실린더 렌즈, SLM으로 light sheet 패턴, 갈바노 스캔, ×20 1.0 NA detection, pupil conjugate DM(ALPAO DM69), 2대 ORCA Fusion. SH는 lenslet 배열과 카메라로 파면 재구성.
- **AOViFT 통합**: 인텔 Xeon, 512 GB RAM, NVIDIA A6000 48 GB, Windows 11; TensorFlow NGC Docker(Ubuntu)에서 추론. 파일 시스템으로 이미지·CLI 인자 전달, 출력 텍스트로 DM 액추에이터 값. 대량 타일은 4노드×4×A100 80GB SLURM 클러스터로 병렬 추론.
- **비드·세포·제브라피시**: 25 mm 커버슬립, poly-d-lysine 등 처리, FluoSpheres/Tetraspeck 0.2 μm 비드, SUM159-AP2-eGFP 배양·촬영 조건, ap2s1:ap2s1-mNeonGreen 제브라피시, cox8-mChilada mRNA 주입, volcano-shaped agarose 마운트, α-bungarotoxin 나노주입. UC Berkeley IACUC 승인.
- **데이터·코드**: 데모 데이터·학습/평가 코드·사전학습 모델은 https://github.com/cell-observatory/aovift, Docker 이미지 동일 레포. 합성 데이터 생성기는 https://github.com/cell-observatory/beads_simulator. 디컨볼루션은 PetaKit5D. 전체 학습/테스트 데이터는 규모 때문에 요청 시 공유.

---

## 14. 정리

AOViFT는 **푸리에 도메인 3D 멀티스테이지 비전 트랜스포머**를 사용해, 서브회절 점상(puncta)이 있는 샘플에서 **가이드 스타와 파면 센서 없이** 이미지만으로 수차를 추론하고 DM 또는 후처리 디컨볼루션으로 보정한다. 속도·강건성·정확도·비침습성 요구를 AO-LLSM 맥락에서 충족하며, 비드·배양 세포·제브라피시 배아에서 검증되었고, 공간적으로 변하는 수차의 빠른 타일맵 생성과 타일별 디컨볼루션으로 대형 FOV 보정을 실용화했다. 3D 체적 현미경용 foundation model 부재라는 한계를 짚으며, 향후 대규모 4D 사전학습 모델로의 확장 가능성을 제시한 점이 인상적이다.
