// Archive 글 목록
// 새 글을 추가하려면 아래 배열에 객체를 추가하세요.
// { id: '고유한-id', title: '제목', date: 'YYYY-MM-DD', content: '본문 (HTML 가능)' }
// links(선택): [{ label: '논문', url: 'https://...' }, ...] — 논문 링크 등 관련 링크
//
// 본문 중간에 사진 추가하기:
// <img src="images/파일명.jpg" alt="설명" class="archive-inline-image">
// 캡션과 함께: <figure><img src="images/파일명.jpg" alt="설명" class="archive-inline-image"><figcaption class="archive-image-caption">캡션 텍스트</figcaption></figure>

const ARCHIVE_POSTS = [
  {
    id: 'welcome',
    title: '제 Archive에 오신 것을 환영합니다',
    date: '2025-02-03',
    content: '<p>개발 관련 글을 올린 지 꽤 오래됐네요. 새로운 것들을 시도해보고 여러 소프트웨어를 탐색하느라 바빴는데, 제가 작업하고 있는 내용에 대해 깊이 이해하고 있다는 생각은 별로 들지 않았어요. 제가 스스로를 과소평가하는 걸지도 모르지만, 제 느낌은 그랬습니다.</p><p>이번에 새롭게 archive를 오픈하게 되었고, 앞으로 주기적으로 글을 작성해보려고 합니다. 글의 주제는 주로 AI, 머신러닝, 컴퓨터 비전, 그리고 제가 관심 있는 연구 분야들이 될 예정이에요. 가끔은 일상적인 생각이나 회고록 같은 것들도 올려볼까 고민 중입니다.</p><p>제가 글을 쓰는 목적은 제 성장 과정을 돌아보고, 다시 돌아와 제게 동기부여를 하기 위함입니다. 공부한 내용을 정리하고 나누는 과정에서 더 깊이 이해하게 되는 경험이 많았거든요. 그래서 이 공간이 제 학습의 기록이자, 동시에 누군가에게는 도움이 될 수 있는 자료가 되길 바랍니다.</p><p>글마다 참고한 논문이나 유용한 링크가 있으면 함께 정리해두겠습니다. 읽어주셔서 감사하고, 많은 관심 부탁드립니다!</p>'
  },
  {
    id: 'gpt5-reasoning-llm-2025',
    title: 'GPT-5와 Reasoning LLM의 시대',
    date: '2025-02-05',
    links: [
      { label: 'State of GPT (Andrej Karpathy)', url: 'https://www.youtube.com/watch?v=bZQun8Y4L2A' },
      { label: 'Chain-of-Thought Prompting (Wei et al.)', url: 'https://arxiv.org/abs/2201.11903' },
      { label: 'Tree of Thoughts (Yao et al.)', url: 'https://arxiv.org/abs/2305.10601' }
    ],
    content: '<p>2025년 OpenAI가 공개한 GPT-5는 이전 세대 대비 추론(reasoning) 능력이 크게 향상되었습니다. 특히 o1 시리즈로 대표되는 reasoning 모델들은 chain-of-thought, tree-of-thought 등 inference-time reasoning 전략을 통해 수학, 코딩, 논리 추론 과제에서 놀라운 성능을 보여주고 있어요.</p><img src="images/IMG_8492.jpeg" alt="BlendED AI+X 밋업" class="archive-inline-image"><p>최근 Include 동아리에서 열린 BlendED AI+X 밋업에서도 이 트렌드에 대한 많은 논의가 오갔습니다. 참가자들과 GPT-5의 reasoning 능력이 단순한 다음 토큰 예측을 넘어 실제 사고 과정을 시뮬레이션하는 것에 가까워지고 있다는 의견을 나누었어요. 특히 수학 Olympiad나 코딩 대회 문제처럼 multi-step reasoning이 필요한 과제에서의 성능 향상이 인상적이었습니다.</p><p>논문들을 읽어보니 diffusion-based language model, reinforcement learning from human feedback (RLHF)의 진화, 그리고 Mixture of Experts (MoE) 아키텍처가 핵심 키워드로 자주 등장하네요. RLHF에서 RL from AI Feedback (RLAIF)나 process reward model로의 전환이 reasoning 품질 향상에 큰 역할을 한 것으로 보입니다.</p><p>앞으로 reasoning 모델의 효율적인 학습 방법과 inference 비용 절감이 주요 연구 과제로 남아있을 것 같습니다. 긴 chain-of-thought를 생성하는 데 들어가는 토큰 비용이 만만치 않기 때문이에요. State of LLMs 2025 리뷰 논문도 꼭 읽어봐야겠어요.</p>'
  },
  {
    id: 'sora-video-generation-2025',
    title: 'Sora와 멀티모달 비디오 생성의 최전선',
    date: '2025-02-04',
    links: [
      { label: 'Sora (OpenAI)', url: 'https://openai.com/sora' },
      { label: 'Video diffusion models (Ho et al.)', url: 'https://arxiv.org/abs/2204.03458' },
      { label: 'Stable Video Diffusion', url: 'https://stability.ai/stable-video' }
    ],
    content: '<p>OpenAI의 Sora가 공개된 이후, 비디오 생성 AI 분야는 급격히 성장하고 있습니다. 텍스트나 이미지를 입력으로 받아 최대 분 단위의 고품질 비디오를 생성하는 모델들이 등장했죠. Kling, Veo, Runway 등 다양한 경쟁 모델들도 흥미로운 결과물을 보여주고 있어요.</p><img src="images/kaist 전경.jpeg" alt="연구 환경" class="archive-inline-image"><p>이러한 모델들의 핵심은 대규모 비디오-텍스트 데이터로 학습된 diffusion transformer와 spacetime attention 메커니즘입니다. 기존 이미지 diffusion이 2D 공간에서만 동작했다면, 비디오 모델은 시간 축을 추가한 3D (또는 4D) patch에서 attention을 수행합니다. 이 과정에서 물리적으로 일관된 동작, 자연스러운 카메라 움직임, 그리고 긴 컨텍스트 유지가 주요 도전 과제로 남아있네요.</p><p>특히 temporal consistency가 중요한데, 프레임 간 급격한 변화나 flickering을 방지하는 것이 쉽지 않습니다. 다양한 연구진들이 causal attention, temporal patch embedding, 또는 latent video representation 같은 방법으로 이 문제를 해결하려 하고 있어요.</p><p>학부 연구로 이 분야에 기여할 수 있는 방향을 고민해보고 있습니다. KAIST 캠퍼스에서 아이디어를 정리하는 시간이 유익했어요. 비디오 생성의 evaluation metric이나 controllability 측면에서 흥미로운 주제가 있을 것 같습니다.</p>'
  },
  {
    id: 'sam2-segment-anything',
    title: 'SAM 2: Segment Anything의 다음 단계',
    date: '2025-02-02',
    links: [
      { label: 'SAM 2 (Meta AI)', url: 'https://ai.meta.com/sam2/' },
      { label: 'Segment Anything (Kirillov et al.)', url: 'https://arxiv.org/abs/2304.02643' }
    ],
    content: '<p>Meta AI의 Segment Anything Model (SAM) 2가 2024년 말 공개되면서 컴퓨터 비전의 segmentation 태스크가 한 단계 더 발전했습니다. SAM 2는 이미지뿐 아니라 비디오에서도 객체를 추적·분할할 수 있는 unified framework를 제시했어요. 기존 SAM이 단일 이미지에 집중했다면, SAM 2는 temporal consistency를 유지하며 비디오 전체에 걸쳐 마스크를 일관되게 유지하는 능력을 갖추었습니다.</p><img src="images/IMG_0486.jpeg" alt="Yoon Lab pre-URP" class="archive-inline-image"><p>Image encoder, prompt encoder, mask decoder로 구성된 아키텍처는 promptable segmentation의 강력함을 보여줍니다. Point, box, mask 중 어떤 형태의 prompt를 줘도 해당 객체를 정확히 분리해내는 능력이 인상적이었습니다. 하나의 점만으로도 사용자가 의도한 객체를 거의 항상 잘 찾아내는 모습이 놀라웠어요.</p><p>Yoon Lab에서 confocal imaging을 했던 경험이 있어서, 생물 의료 이미지 분석에 SAM 2를 적용하는 연구가 매우 기대되네요. 현미경 이미지에서 세포나 조직을 자동으로 분할하는 것은 아직도 많은 수작업이 필요한데, SAM 2의 few-shot adaptation 능력이 이를 크게 개선할 수 있을 것 같습니다.</p><p>Zero-shot generalization, few-shot adaptation, 그리고 실시간 비디오 분할이 향후 연구 주제로 유망해 보입니다. 제가 관심 있는 multimodal medical imaging과의 결합도 흥미로운 방향이에요.</p>'
  },
  {
    id: 'vision-transformers-dino-2025',
    title: 'Vision Transformers와 Self-Supervised Learning',
    date: '2025-01-30',
    links: [
      { label: 'DINO (Caron et al.)', url: 'https://arxiv.org/abs/2104.14294' },
      { label: 'DINOv2 (Oquab et al.)', url: 'https://arxiv.org/abs/2304.07193' },
      { label: 'MAE (He et al.)', url: 'https://arxiv.org/abs/2111.06377' }
    ],
    content: '<p>DINO, DINOv2, MAE 등 self-supervised vision model들의 성능이 지속적으로 향상되고 있습니다. 대규모 unsupervised 데이터로 학습된 이러한 모델들은 이미지 분류, 세그멘테이션, depth estimation 등 다양한 downstream task에서 supervised pre-training을 능가하는 경우가 많아요. 레이블 없이 학습한다는 것은 데이터 확보의 벽을 크게 낮춰주며, 도메인 특화 데이터로 fine-tuning할 때도 강력한 initialization을 제공합니다.</p><img src="images/IMG_5311.jpeg" alt="DNA 2023" class="archive-inline-image"><p>DNA 2023에 참가했을 때 computer vision 트랙에서 Vision Transformer (ViT)와 self-supervised learning에 대한 발표들을 많이 들었습니다. 특히 knowledge distillation과 contrastive learning의 결합이 흥미로웠어요. DINO의 teacher-student 구조에서 teacher는 student의 exponential moving average로 업데이트되는데, 이 과정에서 collapse 없이 semantic한 representation이 자연스럽게 학습된다는 점이 놀랍습니다. 레이블 없이 학습하면서도 object boundary나 part segmentation에 활용 가능한 feature를 얻을 수 있다는 것이 마법처럼 느껴졌습니다.</p><p>최근에는 multimodal (vision-language) pre-training과 결합된 연구들이 활발합니다. CLIP, LLaVA, Qwen-VL 등이 대표적인데, 단순 vision이 아닌 vision과 language의 공동 representation learning이 더 풍부한 semantic을 제공한다는 것이 실험적으로 입증되고 있어요. 이 방향의 최신 논문들을 더 깊이 파보고 싶네요.</p>'
  },
  {
    id: 'diffusion-models-image-synthesis',
    title: 'Diffusion Models: 이미지 생성의 새로운 패러다임',
    date: '2025-01-28',
    links: [
      { label: 'DDPM (Ho et al.)', url: 'https://arxiv.org/abs/2006.11239' },
      { label: 'Stable Diffusion (Rombach et al.)', url: 'https://arxiv.org/abs/2112.10752' },
      { label: 'Classifier-Free Guidance', url: 'https://arxiv.org/abs/2207.12598' }
    ],
    content: '<p>Stable Diffusion, DALL·E 3, Midjourney, Imagen—최근 고품질 이미지 생성 AI들은 대부분 diffusion model 기반입니다. 잡음(noise)을 점진적으로 제거해 이미지를 생성하는 이 방식은 GAN보다 학습이 안정적이고 다양성이 뛰어나다는 평가를 받고 있어요. GAN은 mode collapse나 training instability 문제가 있었던 반면, diffusion은 비교적 예측 가능한 학습 곡선을 보여줍니다.</p><p>Denoising Diffusion Probabilistic Models (DDPM)에서 시작해 최근에는 few-step sampling, consistency models, rectified flow 등 inference 효율을 높이는 연구가 계속되고 있습니다. 50~1000 step에서 4~8 step으로 줄이면서도 품질을 유지하는 방법들이 활발히 제안되고 있어요.</p><p>Latent diffusion model (LDM)은 VAE의 latent space에서 diffusion을 수행해 연산 효율을 크게 높였습니다. 픽셀 공간 대신 압축된 latent에서 작업함으로써 고해상도 이미지 생성이 실용적인 시간 내에 가능해졌죠. classifier-free guidance, LoRA fine-tuning 등 사용자 제어 기법도 빠르게 발전하고 있습니다. 텍스트-to-이미지 뿐 아니라 image-to-image, inpainting, super-resolution 등 다양한 응용이 가능해요.</p><p>생물 정보학 연구에 diffusion model을 적용한 논문들(GAN 기반에서 diffusion으로 전환되는 트렌드)도 눈에 띄었습니다. 단백질 구조 예측, 의료 이미지 합성, 유전체 데이터 생성 등에서 전망이 밝아 보여요. 이 분야의 최신 논문들을 정리해볼 예정입니다.</p>'
  }
];
