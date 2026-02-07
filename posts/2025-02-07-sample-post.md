---
title: 샘플 포스트 (Sample Post)
last_modified_at: 2025-02-07
categories: 일반
tags:
  - Sample
  - Markdown
excerpt: 마크다운 포스트 작성 예시
links:
  - label: "GitHub"
    url: "https://github.com"
---

# 안녕하세요

이것은 **마크다운**으로 작성된 첫 포스트입니다.

## 이미지 사용법

포스트에 들어가는 사진은 `images/posts/` 폴더에 저장하고, 아래처럼 사용하세요:

```markdown
![설명](images/posts/파일명.jpg)
```

`images/posts/` 폴더에 이미지를 넣은 후 위 형식으로 참조하면 됩니다.

## 코드 블록

```javascript
console.log('마크다운으로 코드도 예쁘게!');
```

## 링크

[Google](https://google.com) 링크 예시입니다.

---

새 포스트를 추가하려면:
1. `posts/` 폴더에 `YYYY-MM-DD-slug.md` 형식으로 파일 생성
2. `archive-data.js`의 `ARCHIVE_POSTS_MANIFEST`에 항목 추가
3. 사진은 `images/posts/` 폴더에 저장 후 `![](images/posts/파일명.jpg)` 형식으로 참조
