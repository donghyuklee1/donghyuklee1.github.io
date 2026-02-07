// Archive 포스트 매니페스트 (MD 기반)
// 새 글을 추가하려면:
// 1. posts/ 폴더에 YYYY-MM-DD-slug.md 파일 생성 (마크다운 + frontmatter)
// 2. 아래 ARCHIVE_POSTS_MANIFEST 배열에 항목 추가
// 3. 포스트 이미지는 images/posts/ 폴더에 저장 후 ![](images/posts/파일명.jpg) 로 참조
//
// frontmatter 예시:
// ---
// title: 포스트 제목
// date: 2025-02-07
// links:  # 선택
//   - label: "링크 텍스트"
//     url: "https://..."
// ---

// 마크다운 fetch URL (CORS 정상 동작, repo/branch에 맞게 수정)
// jsDelivr CDN 사용 (raw.githubusercontent.com은 CORS 제한 있음)
const ARCHIVE_RAW_BASE = 'https://cdn.jsdelivr.net/gh/donghyuklee1/donghyuklee1.github.io@main/posts/';

const ARCHIVE_POSTS_MANIFEST = [
  { file: '2026-02-07-pladis-review.md' },
  { file: '2025-02-07-sample-post.md' },
  // 새 포스트: { file: 'YYYY-MM-DD-slug.md' }
  // title, date는 .md frontmatter에서 자동 파싱되며, 여기서 지정하면 우선 사용
];
