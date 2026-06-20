// Archive 포스트 매니페스트 (MD 기반)
// 새 글을 추가하려면:
// 1. archives/ 폴더에 YYYY-MM-DD-slug.md 파일 생성 (마크다운 + frontmatter)
// 2. 아래 ARCHIVE_POSTS_MANIFEST 배열에 항목 추가
// 3. 포스트 이미지는 images/archives/ 폴더에 저장 후 ![](images/archives/파일명.jpg) 로 참조
//
// frontmatter 예시:
// ---
// title: 포스트 제목
// date: 2025-02-07
// links:  # 선택
//   - label: "링크 텍스트"
//     url: "https://..."
// categories: "Category"
// excerpt: "Brief description..."
// ---

// 마크다운 fetch URL (CORS 정상 동작, repo/branch에 맞게 수정)
// jsDelivr CDN 사용 (raw.githubusercontent.com은 CORS 제한 있음)
const ARCHIVE_RAW_BASE = ''; // 로컬 테스트를 위해 비워둡니다. (GitHub 배포 전에는 jsdelivr에서 파일을 찾을 수 없습니다)

const ARCHIVE_POSTS_MANIFEST = [
  { 
    file: '2026-06-22-vit-inr-3d-correction.md', 
    title: 'ViT-INR based 3D abb. correction', 
    date: '2026-06-22',
    categories: 'Project',
    excerpt: 'Implicit Neural Representations for 3D LSFM Distortion Correction via Axial Vision Transformers',
    author: 'Donghyuk Lee'
  },
  { 
    file: '2026-06-21-starting-the-archiving.md', 
    title: 'Starting the archiving..', 
    date: '2026-06-21',
    categories: 'Talk, Daily',
    excerpt: 'Started archiving my projects and research here.',
    author: 'Donghyuk Lee'
  }
];
