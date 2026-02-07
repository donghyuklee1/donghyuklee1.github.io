// Archive 글 목록
// 새 글을 추가하려면 아래 배열에 객체를 추가하세요.
// { id: '고유한-id', title: '제목', date: 'YYYY-MM-DD', content: '본문 (HTML 가능)' }
//
// 본문 중간에 사진 추가하기:
// <img src="images/파일명.jpg" alt="설명" class="archive-inline-image">
// 캡션과 함께: <figure><img src="images/파일명.jpg" alt="설명" class="archive-inline-image"><figcaption class="archive-image-caption">캡션 텍스트</figcaption></figure>

const ARCHIVE_POSTS = [
  {
    id: 'welcome',
    title: '제 Archive에 오신 것을 환영합니다',
    date: '2025-02-03',
    content: '<p>개발 관련 글을 올린 지 꽤 오래됐네요. 새로운 것들을 시도해보고 여러 소프트웨어를 탐색하느라 바빴는데, 제가 작업하고 있는 내용에 대해 깊이 이해하고 있다는 생각은 별로 들지 않았어요. 제가 스스로를 과소평가하는 걸지도 모르지만, 제 느낌은 그랬습니다.</p><p>이번에 새롭게 archive를 오픈하게 되었고, 앞으로 주기적으로 글을 작성해보려고 합니다.</p><p>제가 글을 쓰는 목적은 제 성장 과정을 돌아보고, 다시 돌아와 제게 동기부여를 하기 위함입니다.</p><p>많은 관심 부탁드립니다. 감사합니다!</p>'
  },
  {
    id: 'gpt5-reasoning-llm-2025',
    title: 'GPT-5와 Reasoning LLM의 시대',
    date: '2025-02-05',
    content: '<p>2025년 OpenAI가 공개한 GPT-5는 이전 세대 대비 추론(reasoning) 능력이 크게 향상되었습니다. 특히 o1 시리즈로 대표되는 reasoning 모델들은 chain-of-thought, tree-of-thought 등 inference-time reasoning 전략을 통해 수학, 코딩, 논리 추론 과제에서 놀라운 성능을 보여주고 있어요.</p><img src="images/IMG_8492.jpeg" alt="BlendED AI+X 밋업" class="archive-inline-image"><p>최근 Include 동아리에서 열린 BlendED AI+X 밋업에서도 이 트렌드에 대한 많은 논의가 오갔습니다. 논문들을 읽어보니 diffusion-based language model, reinforcement learning from human feedback (RLHF)의 진화, 그리고 Mixture of Experts (MoE) 아키텍처가 핵심 키워드로 자주 등장하네요.</p><p>앞으로 reasoning 모델의 효율적인 학습 방법과 inference 비용 절감이 주요 연구 과제로 남아있을 것 같습니다. State of LLMs 2025 리뷰 논문도 꼭 읽어봐야겠어요.</p>'
  },
  {
    id: 'sora-video-generation-2025',
    title: 'Sora와 멀티모달 비디오 생성의 최전선',
    date: '2025-02-04',
    content: '<p>OpenAI의 Sora가 공개된 이후, 비디오 생성 AI 분야는 급격히 성장하고 있습니다. 텍스트나 이미지를 입력으로 받아 최대 분 단위의 고품질 비디오를 생성하는 모델들이 등장했죠. Kling, Veo, Runway 등 다양한 경쟁 모델들도 흥미로운 결과물을 보여주고 있어요.</p><img src="images/kaist 전경.jpeg" alt="연구 환경" class="archive-inline-image"><p>이러한 모델들의 핵심은 대규모 비디오-텍스트 데이터로 학습된 diffusion transformer와 spacetime attention 메커니즘입니다. 특히 물리적으로 일관된 동작, 자연스러운 카메라 움직임, 그리고 긴 컨텍스트 유지가 주요 도전 과제로 남아있네요.</p><p>학부 연구로 이 분야에 기여할 수 있는 방향을 고민해보고 있습니다. KAIST 캠퍼스에서 아이디어를 정리하는 시간이 유익했어요.</p>'
  },
  {
    id: 'sam2-segment-anything',
    title: 'SAM 2: Segment Anything의 다음 단계',
    date: '2025-02-02',
    content: '<p>Meta AI의 Segment Anything Model (SAM) 2가 2024년 말 공개되면서 컴퓨터 비전의 segmentation 태스크가 한 단계 더 발전했습니다. SAM 2는 이미지뿐 아니라 비디오에서도 객체를 추적·분할할 수 있는 unified framework를 제시했어요.</p><img src="images/IMG_0486.jpeg" alt="Yoon Lab pre-URP" class="archive-inline-image"><p>Image encoder, prompt encoder, mask decoder로 구성된 아키텍처는 promptable segmentation의 강력함을 보여줍니다. Point, box, mask 중 어떤 형태의 prompt를 줘도 해당 객체를 정확히 분리해내는 능력이 인상적이었습니다. Yoon Lab에서 confocal imaging을 했던 경험이 있어서, 생물 의료 이미지 분석에 SAM 2를 적용하는 연구가 매우 기대되네요.</p><p>Zero-shot generalization, few-shot adaptation, 그리고 실시간 비디오 분할이 향후 연구 주제로 유망해 보입니다.</p>'
  },
  {
    id: 'vision-transformers-dino-2025',
    title: 'Vision Transformers와 Self-Supervised Learning',
    date: '2025-01-30',
    content: '<p>DINO, DINOv2, MAE 등 self-supervised vision model들의 성능이 지속적으로 향상되고 있습니다. 대규모 unsupervised 데이터로 학습된 이러한 모델들은 이미지 분류, 세그멘테이션, depth estimation 등 다양한 downstream task에서 supervised pre-training을 능가하는 경우가 많아요.</p><img src="images/IMG_5311.jpeg" alt="DNA 2023" class="archive-inline-image"><p>DNA 2023에 참가했을 때 computer vision 트랙에서 Vision Transformer (ViT)와 self-supervised learning에 대한 발표들을 많이 들었습니다. 특히 knowledge distillation과 contrastive learning의 결합이 흥미로웠어요. 레이블 없이 학습하면서도 semantic한 representation을 학습할 수 있다는 점이 놀랍습니다.</p><p>최근에는 multimodal (vision-language) pre-training과 결합된 연구들이 활발합니다. CLIP, LLaVA, Qwen-VL 등이 대표적인데, 이 방향의 최신 논문들을 더 깊이 파보고 싶네요.</p>'
  },
  {
    id: 'diffusion-models-image-synthesis',
    title: 'Diffusion Models: 이미지 생성의 새로운 패러다임',
    date: '2025-01-28',
    content: '<p>Stable Diffusion, DALL·E 3, Midjourney, Imagen—최근 고품질 이미지 생성 AI들은 대부분 diffusion model 기반입니다. 잡음(noise)을 점진적으로 제거해 이미지를 생성하는 이 방식은 GAN보다 학습이 안정적이고 다양성이 뛰어나다는 평가를 받고 있어요.</p><p>Latent diffusion model (LDM)은 VAE의 latent space에서 diffusion을 수행해 연산 효율을 크게 높였습니다. classifier-free guidance, LoRA fine-tuning 등 사용자 제어 기법도 빠르게 발전하고 있죠. 텍스트-to-이미지 뿐 아니라 image-to-image, inpainting, super-resolution 등 다양한 응용이 가능합니다.</p><p>생물 정보학 연구에 diffusion model을 적용한 논문들(GAN 기반에서 diffusion으로 전환되는 트렌드)도 눈에 띄었습니다. 단백질 구조 예측, 의료 이미지 합성 등에서 전망이 밝아 보여요. 이 분야의 최신 논문들을 정리해볼 예정입니다.</p>'
  }
];
