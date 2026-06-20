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
// categories: "Category"
// excerpt: "Brief description..."
// ---

// 마크다운 fetch URL (CORS 정상 동작, repo/branch에 맞게 수정)
// jsDelivr CDN 사용 (raw.githubusercontent.com은 CORS 제한 있음)
const ARCHIVE_RAW_BASE = 'https://cdn.jsdelivr.net/gh/donghyuklee1/donghyuklee1.github.io@main/posts/';

const ARCHIVE_POSTS_MANIFEST = [
  { 
    file: '2026-06-20-worth-a-thousand-words.md', 
    title: 'Worth A Thousand Words', 
    date: '2008-10-17',
    categories: 'Uncategorized',
    excerpt: 'Boat.',
    author: 'Theme Admin'
  },
  { 
    file: '2026-06-20-elements.md', 
    title: 'Elements', 
    date: '2008-09-05',
    categories: 'Uncategorized',
    excerpt: 'The purpose of this HTML is ...',
    author: 'Theme Admin'
  },
  { 
    file: '2026-06-20-more-tags.md', 
    title: 'More Tags', 
    date: '2008-06-21',
    categories: 'Uncategorized',
    excerpt: 'More of these posts need tags.',
    author: 'Theme Admin'
  },
  { 
    file: '2026-06-20-html.md', 
    title: 'HTML', 
    date: '2008-06-21',
    categories: 'Uncategorized',
    excerpt: 'What HTML tags would you like ...',
    author: 'Theme Admin'
  },
  { 
    file: '2026-06-20-links.md', 
    title: 'Links', 
    date: '2008-06-20',
    categories: 'Uncategorized',
    excerpt: 'A few well known WordPress links: ...',
    author: 'Theme Admin'
  },
  { 
    file: '2026-06-20-category-hierarchy.md', 
    title: 'Category Hierarchy', 
    date: '2008-06-20',
    categories: 'First Child Category, One Grandchild Category, Parent, Second Child Category',
    excerpt: 'This post has 4 categories, part ...',
    author: 'Theme Admin'
  }
];
