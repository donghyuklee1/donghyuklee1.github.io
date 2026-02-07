# Archive 포스트 작성법

## 새 글 추가 방법

1. **파일 생성**: `YYYY-MM-DD-slug.md` 형식으로 파일을 만듭니다.
2. **archive-data.js 등록**: `ARCHIVE_POSTS_MANIFEST` 배열에 `{ file: 'YYYY-MM-DD-slug.md' }` 추가
3. **이미지**: `images/posts/` 폴더에 저장 후 `![](images/posts/파일명.jpg)` 로 참조

## frontmatter 양식

```yaml
---
title: "[논문리뷰] 포스트 제목"
last_modified_at: 2026-02-07
categories: 논문리뷰
tags:
  - Diffusion
  - Image Generation
  - Computer Vision
excerpt: 포스트 요약 한 줄
use_ma: true
# 논문 포스트일 경우 (선택)
paper:
  conference: ICCV 2025
  links:
    paper: "https://arxiv.org/..."
    page: "https://..."
    github: "https://github.com/..."
  authors: Author1, Author2
  affiliation: Affiliation
  date: 10 Mar 2025
  image: "images/posts/teaser.png"
# 일반 포스트는 links만
links:
  - label: "링크"
    url: "https://..."
---
```

이후 본문을 마크다운으로 작성합니다.
