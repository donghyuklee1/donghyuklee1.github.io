# Archive 포스트 작성법

## 새 글 추가 방법

1. **파일 생성**: `YYYY-MM-DD-slug.md` 형식으로 파일을 만듭니다.
   - 예: `2025-02-07-my-first-post.md`

2. **archive-data.js 등록**: `archive-data.js`의 `ARCHIVE_POSTS_MANIFEST` 배열에 추가합니다.
   ```js
   { file: '2025-02-07-my-first-post.md' },
   ```

3. **이미지 사용**: `images/posts/` 폴더에 이미지를 넣고, 마크다운에서 다음과 같이 참조합니다.
   ```markdown
   ![설명](images/posts/파일명.jpg)
   ```

## frontmatter 형식

파일 상단에 YAML frontmatter를 넣습니다:

```yaml
---
title: 포스트 제목
date: 2025-02-07
links:  # 선택
  - label: "링크 텍스트"
    url: "https://..."
---
```

이후 본문을 마크다운으로 작성합니다.
