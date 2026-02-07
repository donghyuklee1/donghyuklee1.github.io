// Archive 글 목록
// 새 글을 추가하려면 아래 배열에 객체를 추가하세요.
// { id: '고유한-id', title: '제목', date: 'YYYY-MM-DD', content: '본문 (HTML 가능)' }
// links(선택): [{ label: '논문', url: 'https://...' }, ...] — 논문 링크 등 관련 링크
//
// 본문 중간에 사진 추가하기:
// <img src="images/파일명.jpg" alt="설명" class="archive-inline-image">
// 캡션과 함께: <figure><img src="images/파일명.jpg" alt="설명" class="archive-inline-image"><figcaption class="archive-image-caption">캡션 텍스트</figcaption></figure>
//
// 아래 예시 글들은 MIT Technology Review AI 섹션 기사들을 참고하여 작성되었습니다.
// https://www.technologyreview.com/topic/artificial-intelligence/

const ARCHIVE_POSTS = [
  {
    id: 'ai-materials-discovery-real-world',
    title: 'AI 소재 발견: 시뮬레이션에서 실제 실험으로',
    date: '2025-02-07',
    links: [
      { label: 'AI materials discovery now needs to move into the real world', url: 'https://www.technologyreview.com/2025/12/15/1129210/ai-materials-science-discovery-startups-investment/' },
      { label: 'DeepMind millions of new materials', url: 'https://deepmind.google/blog/millions-of-new-materials-discovered-with-deep-learning/' },
      { label: 'The race to find new materials with AI needs more data', url: 'https://www.technologyreview.com/2024/10/18/1105880/the-race-to-find-new-materials-with-ai-needs-more-data-meta-is-giving-massive-amounts-away-for-free/' }
    ],
    content: '<p>캠브리지의 Lila Sciences 연구실을 소개하는 MIT Technology Review 기사가 인상적이었습니다. 진공 챔버 안에서 여러 원소를 스퍼터링해 박막을 만들고, AI 에이전트가 실험 설계와 최적화를 담당하는 장면이 묘사돼 있죠. 알루미늄팬에 다양한 잠재적 촉매를 담은 샘플들이 만들어지고, 다른 AI 에이전트가 이를 스캔·해석해 다음 실험 라운드를 제안합니다. 아직은 인간 과학자가 최종 승인을 내리지만, 이 회사는 이 시스템이 과학적 초지능(scientific superintelligence)으로 가는 첫걸음이라고 확신하고 있습니다.</p><p>더 나은 전극, 이산화탄소 흡수 물질, 청정 수소 생산용 촉매, 고온 초전도체—우리는 이런 소재들이 절실히 필요합니다. 그런데 소재 과학은 지난 수십 년간 상업적 성공 사례가 거의 없었어요. 복잡성과 낮은 성공률 탓에 생물학·신약 개발에 가려져 혁신의 변방으로 밀려났죠.</p><img src="images/kaist 전경.jpeg" alt="연구 환경" class="archive-inline-image"><p>2020년 DeepMind의 AlphaFold2가 단백질 3D 구조 예측에 성공한 뒤, 2022년 ChatGPT가 등장하며 생성형 AI로 과학을 가속하겠다는 기대가 급증했습니다. 2023년에는 “수백만 개의 신규 소재를 발견했다”는 AI 모델 소식이 나왔고, 투자금이 쏟아졌습니다. 하지만 아직까지 ChatGPT 같은 돌파구는 없었습니다. 새로운 기적의 소재どころか, 조금이라도 더 나은 소재도 실험적으로 입증되지 않았어요.</p><p>Lila Sciences의 John Gregoire는 핵심을 짚습니다. “시뮬레이션은 어떤 걸 실험할 가치가 있는지 이해하는 데 강력하다. 하지만 시뮬레이션만으로는 현실 문제를 해결할 수 없다.” 소재 발견에서 가장 오래 걸리고 비싼 단계는 새 구조를 상상하는 게 아니라, 실제로 만드는 것입니다. 합성하기 전에는 만들 수 있는지, 안정한지 알 수 없고, 많은 특성은 실험을 해봐야 비로소 알게 됩니다.</p><p>DeepMind의 2023년 논문은 “38만 개의 결정체가 가장 안정적”이라고 했지만, UC Santa Barbara 연구진은 “신규성·신뢰성·유용성을 모두 갖춘 화합물에 대한 근거가 거의 없다”고 반박했습니다. 일부는 이미 알려진 것의 사소한 변형에 불과했고, 절대영도에서 시뮬레이션한 결과는 상온 실험 조건과 맞지 않는 경우가 많았죠.</p><p>그럼에도 시뮬레이션과 실험의 경계는 서서히 좁아지고 있습니다. Periodic Labs처럼 DeepMind 출신과 ChatGPT 공동 창업자가 만난 스타트업은 계산 모델링 배경에도 불구하고 자동화된 실험실에서의 합성에 전략의 상당 부분을 두고 있어요. LLM이 화합물 제조 레시피와 조건을 제안하고, 실험 데이터를 해석해 추가 제안을 하는 구조입니다. 궁극적 목표 중 하나는 수십 년간 실패해온 상온 초전도체—전기 저항 없이 흐르는, 실온에서 동작하는 소재를 찾는 것입니다. 이 방향의 연구가 앞으로 더 본격화될 것 같습니다.</p>'
  },
  {
    id: 'what-even-is-the-ai-bubble',
    title: 'AI 버블인가? 모두가 동의하지만 정의는 각각 다르다',
    date: '2025-02-06',
    links: [
      { label: 'What even is the AI bubble?', url: 'https://www.technologyreview.com/2025/12/15/1129183/what-even-is-the-ai-bubble/' },
      { label: 'The great AI hype correction of 2025', url: 'https://www.technologyreview.com/2025/12/15/1129174/the-great-ai-hype-correction-of-2025/' }
    ],
    content: '<p>7월 MIT 연구에서 생성형 AI에 투자한 조직의 95%가 “제로 수익”을 보고 있다고 발표되자, 테크 주가가 일시적으로 급락했습니다. 연구 자체는 헤드라인보다 뉘앙스가 있었지만, 회의론자들이 수개월간 속삭이던 말—“AI 하이프가 현실보다 앞서가고 있다”—을 뒷받침하는 첫 데이터처럼 받아들여졌어요. 그다음 8월, OpenAI CEO 샘 알트만이 기자 만찬에서 모든 사람이 속으로 생각하던 말을 꺼냈습니다. “AI에 대한 투자자들의 전반적인 과잉 열기가 있는 단계인가? 제 생각엔 그렇습니다.” 그는 이를 닷컴 버블에 비유했죠. “버블이 일어나면, 똑똑한 사람들이 진실의 핵심에 대해 과도하게 흥분한다. 테크는 정말 중요했고, 인터넷은 정말 큰 일이었다. 사람들이 지나치게 흥분한 것이다.”</p><p>문제는 누가, 무엇이 과대평가되어 있냐에 대해 의견이 갈린다는 점입니다. 메타 CEO 마크 저커버그는 철도, 인터넷 광케이블, 닷컴 붐의 역사적 유추를 들며 “인프라가 구축되고, 사람들이 과도한 부채를 짊어지고, 그다음 어떤 충격이 오면 많은 회사가 도산한다”고 말했습니다. 하지만 그의 결론은 브레이크를 밟는 게 아니라 계속 투자하는 것이었어요. “몇천억 달러를 잘못 써도 불행하겠지만, 그 반대 쪽 위험이 더 크다.” OpenAI 이사회 의장이자 Sierra CEO 브렛 테일러는 90년대 후반과의 유사성을 강조합니다. 당시 모두 이커머스가 커질 거라고 알았지만, Buy.com과 아마존 사이에는 엄청난 차이가 있었죠. 그는 지금이 그 시절과 비슷하다고 보며, 본인들을 “오늘의 아마존”에 가깝게 포지셔닝하려 합니다.</p><p>반면 구글 CEO 순다 피차이는 BBC 인터뷰에서 현재 붐에 “어떤 비이성”이 있다고 했고, 구글도 버블 붕괴에서 면제되지 않을 수 있다고 경고했어요. Anthropic CEO 다리오 아모데이는 뉴욕타임스 DealBook 서밋에서 “경제 측면에서는 우려가 있다. 기술이 모든 약속을 지켜도, 타이밍을 조금만 잘못 맞추면 나쁜 일이 일어날 수 있는 플레이어들이 있다”며, 이름을 짚지 않았지만 OpenAI를 암시했습니다. “YOLO하는 플레이어들이 있다”는 식으로요.</p><p>버블이 터질 가능성이 가장 높은 시나리오는 과잉 자금을 받은 스타트업이 수익을 내지 못하거나, 거대한 밸류에이션을 실현하지 못할 때입니다. OpenAI는 2029년까지 1,400억 달러를 소진할 것으로, Anthropic은 2027년까지 200억 달러를 태울 것으로 예상됩니다. 베인 컨설팅은 AI 인프라 투자를 정당화하려면 2030년까지 연간 2조 달러의 AI 매출이 필요하다고 추정했는데, 이는 아마존·애플·알파벳·마이크로소프트·메타·엔비디아의 2024년 매출 합계보다 많습니다. 테일러의 말이 요약합니다. “AI가 경제를 변혁할 것이라는 것과, 우리가 버블 속에 있고 많은 사람이 많은 돈을 잃을 것이라는 것, 둘 다 동시에 참이다.”</p>'
  },
  {
    id: 'great-ai-hype-correction-2025',
    title: '2025 AI 하이프 시정: 기대 조정의 해',
    date: '2025-02-05',
    links: [
      { label: 'The great AI hype correction of 2025', url: 'https://www.technologyreview.com/2025/12/15/1129174/the-great-ai-hype-correction-of-2025/' },
      { label: 'What is AI? (MIT Tech Review)', url: 'https://www.technologyreview.com/2024/07/10/1094475/what-is-artificial-intelligence-ai-definitive-guide/' }
    ],
    content: '<p>ChatGPT가 2022년 말 등장한 이후 산업과 여러 국가 경제의 방향이 바뀌었습니다. 수백만 명이 컴퓨터와 대화하기 시작했고, 컴퓨터가 응답했죠. 우리는 매료됐고, 더 많은 것을 기대했습니다. 테크 기업들은 앞서가려 애썼고, 음성·이미지·비디오를 넘나들며 서로를 앞지르는 제품을 쏟아냈어요. 각 신제품이 주요 돌파구처럼 포장되며, 이 기술이 계속 나아질 것이라는 널리 퍼진 믿음이 굳어졌습니다. 그런데 2025년은 일종의 심판의 해가 되었어요.</p><p>상위 AI 기업 CEO들은 지키지 못한 약속을 남겼습니다. 생성형 AI가 화이트칼라 노동력을 대체하고, 풍요의 시대를 열며, 과학적 발견을 하고, 질병 치료제를 찾을 것이라고 했죠. FOMO에 휩쓸린 CEO들이 플레이북을 찢어버리고 AI에 뛰어들었어요. 그때부터 광택이 바래기 시작했습니다. 유럽연합 통계청, 스탠퍼드 대학 등 다양한 출처의 조사에 따르면 기업의 AI 도구 채택이 정체되고 있고, 많은 프로젝트가 파일럿 단계에 머물러 있어요. 넓은 경제 전반에서의 확산 없이는 대형 AI 기업이 이미 쏟아부은 엄청난 비용을 회수할 경로가 불분명합니다.</p><p>동시에 핵심 기술 업데이트도 예전만큼의 도약이 아니에요. 가장 화제가 됐던 건 8월 GPT-5 런칭이었습니다. “어떤 분야든 박사급 전문가”라고 알트만이 호언했고, Death Star 이미지를 올려 기대를 부채질했죠. 그런데 나온 건—비슷한 것의 연속? “경계를 넘나드는 진보의 시대는 끝났다. AGI는 오지 않는다. 우리는 LLM의 삼성 갤럭시 시대에 있는 것 같다.” AI 연구자이자 유튜버 얀닉 킬처의 말이요. 스마트폰 비유가 적절해 보입니다. 한동안 스마트폰이 가장 흥미로운 소비자 테크였지만, 지금은 애플이나 삼성의 신제품에 큰 화제가 없죠. 생성형 AI도 그렇게 되는 걸까요?</p><img src="images/IMG_8492.jpeg" alt="AI 밋업" class="archive-inline-image"><p>MIT Technology Review는 2025 말 AI의 상태를 생각하는 네 가지 관점을 제시합니다. 첫째, LLM은 모든 것이 아니다. LLM이 AGI로 가는 관문이 아니라는 게 점점 분명해졌어요. OpenAI 전 수석 과학자 일리아 서츠케버도 LLM의 한계를 강조합니다. 많은 구체적 과제를 수행하는 법은 배우지만, 그 과제들背后的 원리를 배우는 것 같지는 않다는 거예요. 둘째, AI는 모든 문제의 빠른 해결책이 아니다. 7월 MIT 연구의 95% 수치는 “6개월 후에도 파일럿 단계를 넘지 못한 맞춤형 AI 도입 시도”를 기준으로 한 좁은 성공 정의를 반영합니다. Andrej Karpathy가 말하듯, 챗봇은 많은 일에서 평균적인 인간보다 낫지만 전문가보다는 못해요. 그래서 개인 사용자에게는 유용하지만, 경제를 뒤집기에는 아직 부족한 거죠.</p><p>셋째, 버블이라면 어떤 종류인가. 2008 서브프라임처럼 붕괴 시 아무것도 남기지 않는 건가, 2000 닷컴처럼 많은 회사는 죽었지만 인터넷 인프라와 아마존·구글이 남은 건가. 아직 LLM의 킬러 앱이나 사업 모델이 뭔지 모르는 상황이에요. 넷째, ChatGPT는 시작도 끝도 아니다. 딥러닝은 80년대에 싹이 텄고, AI 연구는 50년대로 거슬러 올라갑니다. 그 기준으로 보면 생성형 AI는 이제 막 출발한 셈이죠. 하이프 시정은 오래 전부터 필요했지만, AI가 사라지지는 않을 것입니다.</p>'
  },
  {
    id: 'whats-next-ai-2025-five-trends',
    title: '2025 AI 트렌드 5가지: 에이전트와 SLM 넘어서',
    date: '2025-02-04',
    links: [
      { label: 'What\'s next for AI in 2025', url: 'https://www.technologyreview.com/2025/01/08/1109188/whats-next-for-ai-in-2025/' },
      { label: 'What are AI agents?', url: 'https://www.technologyreview.com/2024/07/05/1094711/what-are-ai-agents/' },
      { label: 'Genie 2 (Google DeepMind)', url: 'https://deepmind.google/discover/blog/genie-2-a-large-scale-foundation-world-model/' }
    ],
    content: '<p>MIT Technology Review는 2025 AI 전망에서 에이전트와 소형 언어 모델(SLM)은 당연한 트렌드로 두고, 그 밖에 주목할 다섯 가지를 꼽았습니다.</p><p><strong>1. 생성형 가상 세계(Generative Virtual Playgrounds)</strong> 2023년이 생성형 이미지의 해였다면, 2024년은 생성형 비디오의 해였어요. 다음은 생성형 가상 세계, 즉 비디오 게임처럼 상호작용 가능한 환경입니다. 2월 구글 DeepMind가 정지 이미지를 2D 횡스크롤 게임으로 바꾸는 Genie를 공개했고, 12월에는 Genie 2로 한 단계 올라서 starter 이미지에서 전체 가상 세계를 생성할 수 있게 됐죠. 10월에는 Decart와 Etched가 Minecraft 해킹을 보여줬는데, 플레이하는 매 프레임이 실시간으로 생성되는 형태였어요. Fei-Fei Li가 공동 창업한 World Labs는 large world models(LWM)을 만들고 있습니다. 게임 디자인뿐 아니라 로봇 학습용 시뮬레이션 데이터로도 쓰일 수 있어요.</p><p><strong>2. “추론”하는 대형 언어 모델</strong> 9월 OpenAI의 o1, 이어 11월 o3는 LLM이 어떻게 작동하는지에 대한 새로운 패러다임을 제시했습니다. 대부분의 모델은 첫 번째 응답을 그대로 내보내는데, o 시리즈는 단계별로 풀어가며 접근이 막히면 다른 경로를 시도합니다. 12월 구글 DeepMind의 웹 브라우징 에이전트 Mariner 데모에서, 에이전트가 쿠키 레시피를 찾아 온라인 장바구니에 재료를 담다가 밀가루 종류에서 막혔어요. 그런데 “브라우저 뒤로가기 버튼을 눌러 레시피로 돌아가겠다”고 설명하며 스스로 복구했죠. 무의식적인 봇에게는 로켓 과학에 가까운 행동입니다.</p><p><strong>3. AI in Science 붐</strong> 2024년 10월 AlphaFold와 단백질 설계 도구에 노벨 화학상이 수여된 것은 AI 과학 도구의 정당성을 보여줬어요. 2025년에는 단백질 다음 타깃을 찾는 경쟁이 이어질 겁니다. Meta는 소재 발견용 대규모 데이터셋과 모델을 공개했고, Hugging Face와 Entalpic은 LeMaterial이라는 오픈소스 프로젝트를 시작했어요. Anthropic 다리오 아모데이는 10월 매니페스토에서 “생물학자가 하는 모든 일을 수행하는 가상 생물학자” 가능성을 언급했습니다.</p><p><strong>4. AI 기업과 국가안보의 결합</strong> 국경 감시, 정보 수집, 군사 용도에 AI를 제공하는 데 막대한 돈이 걸려 있습니다. 미국 군은 Replicator 프로그램(우크라이나 전쟁에 자극받아 소형 드론에 10억 달러), AI Rapid Capabilities Cell 등을 통해 AI를 전장 의사결정·물류에 통합하고 있어요. 12월 OpenAI는 군사 관련 계약을 하지 않던 정책에서 벗어나 Anduril과 드론 요격 프로그램 파트너십을 발표했습니다.</p><p><strong>5. 엔비디아에 드디어 경쟁자</strong> 아마존, 브로드컴, AMD 등이 새 칩에 막대 투자를 하고 있고, inference에서는 엔비디아 우위가 덜 확실해요. Groq 같은 스타트업은 엔비디아를 따라하는 게 아니라 완전히 다른 칩 아키텍처에 걸고 있습니다. 지리정치적 칩 전쟁도 계속되며, CHIPS 법의 국내 생산 지원 효과가 2025년에 본격 나타날 수 있습니다.</p>'
  },
  {
    id: 'reasoning-llms-o1-o3-mariner',
    title: '추론 LLM의 등장: o1, o3, 그리고 Mariner 에이전트',
    date: '2025-02-03',
    links: [
      { label: 'Why OpenAI\'s new model is such a big deal (o1)', url: 'https://www.technologyreview.com/2024/09/17/1104004/why-openais-new-model-is-such-a-big-deal/' },
      { label: 'Gemini 2.0 Flash Thinking', url: 'https://x.com/sundarpichai/status/1869792088356991253' }
    ],
    content: '<p>대부분의 LLM—GPT-4를 포함해—은 첫 번째로 떠오른 답을 그대로 출력합니다. 가끔 맞고, 가끔 틀리죠. OpenAI의 o1, o3는 다르게 작동합니다. 답을 단계별로 풀어가고, 막히면 다른 접근을 시도하는 훈련을 받았어요. 이 기법은 “추론(reasoning)”이라 불리는데—이 용어가 얼마나 논쟁적인지는 알지만—수학, 물리, 논리 문제에서 정확도를 크게 높입니다. 에이전트에 있어서도 핵심이에요.</p><p>MIT Technology Review가 본 구글 DeepMind의 Mariner 에이전트 데모가 그 예입니다. 제품 매니저 메가 고엘이 사진에 나온 것처럼 생긴 크리스마스 쿠키 레시피를 찾아달라고 했어요. Mariner는 웹에서 레시피를 찾아 고엘의 온라인 장바구니에 재료를 담기 시작했습니다. 그런데 밀가루 종류에서 막혔어요. 어떤 밀가루를 골라야 할지 모르는 거죠. 그 순간 Mariner는 채팅 창에 “레시피로 돌아가기 위해 브라우저 뒤로가기 버튼을 사용하겠다”고 설명했습니다. 단순해 보이지만, 목적이 막혔을 때 작업을 세분화하고 뒤로 돌아가는 전략을 선택한 거예요. Mariner는 레시피로 돌아가 밀가루 종류를 확인한 뒤 장바구니 채우기를 이어갔습니다.</p><img src="images/IMG_5311.jpeg" alt="AI 밋업" class="archive-inline-image"><p>이건 LLM이 “생각”하는 방식을 보여주는 좋은 사례입니다. 기존 모델이라면 막히는 순간 잘못된 것을 시도하거나 포기했을 가능성이 높아요. o1, o3 계열은 문제를 더 작은 부분으로 나누고, 한 경로가 통하지 않으면 대안을 시도하도록 학습했습니다. 구글은 Gemini 2.0의 실험 버전인 “Gemini 2.0 Flash Thinking”에서도 이 단계별 문제해결 방식을 적용하고 있어요.</p><p>OpenAI와 구글만이 아닙니다. 여러 회사가 비슷한 추론 기법을 쓰는 LLM을 만들고 있고, 요리부터 코딩까지 다양한 작업에서 성능이 올라가고 있어요. 2025년에는 “reasoning”에 대한 이야기가 훨씬 늘어날 겁니다. 다만 아직 이 기술이 왜, 어떻게 효과적인지에 대한 이해는 부족하고, 추론 단계가 길어질수록 토큰 비용과 지연 시간이 커지는 문제도 남아있어요. 그럼에도 o1, o3, Mariner 같은 데모는 LLM이 단순한 다음 토큰 예측기를 넘어, 다단계 계획과 적응이 가능한 시스템으로 변하고 있음을 보여줍니다.</p>'
  }
];
