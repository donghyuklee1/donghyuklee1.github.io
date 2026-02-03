// Archive 글 목록
// 새 글을 추가하려면 아래 배열에 객체를 추가하세요.
// { id: '고유한-id', title: '제목', date: 'YYYY-MM-DD', content: '본문 (HTML 가능)' }

const ARCHIVE_POSTS = [
  {
    id: 'welcome',
    title: 'Archive에 오신 것을 환영합니다',
    date: '2025-02-03',
    content: '<p>여기에 글을 써 보세요. <code>archive-data.js</code> 파일을 열어 새 객체를 <code>ARCHIVE_POSTS</code> 배열에 추가하면 글이 목록에 나타납니다.</p><p>본문에는 간단한 HTML을 사용할 수 있습니다: <strong>굵게</strong>, <em>기울임</em>, <a href="#">링크</a> 등.</p>'
  }
];
