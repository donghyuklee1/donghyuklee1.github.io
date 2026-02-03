// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const mainContent = document.querySelector('.main-content');
    const homeSection = document.getElementById('home');
    const archiveSection = document.getElementById('archive');
    const cvSection = document.getElementById('cv');
    const photosSection = document.getElementById('photos');
    const insightsSection = document.getElementById('insights');
    const contactSection = document.getElementById('contact');
    
           // Function to hide all sections
           function hideAllSections() {
               if (mainContent) mainContent.style.display = 'none';
               if (homeSection) homeSection.style.display = 'none';
               if (archiveSection) archiveSection.style.display = 'none';
               if (cvSection) cvSection.style.display = 'none';
               if (photosSection) photosSection.style.display = 'none';
               if (insightsSection) insightsSection.style.display = 'none';
               if (contactSection) contactSection.style.display = 'none';
               
               // Remove footer fixed class for all sections except contact
               const footer = document.querySelector('.footer');
               const body = document.querySelector('body');
               if (footer) footer.classList.remove('fixed');
               if (body) body.classList.remove('footer-fixed');
           }
    
    // Initially hide all sections except home
    if (cvSection) cvSection.style.display = 'none';
    if (photosSection) photosSection.style.display = 'none';
    if (insightsSection) insightsSection.style.display = 'none';
    if (contactSection) contactSection.style.display = 'none';
    if (archiveSection) archiveSection.style.display = 'none';
    
    // Show only home section initially (main-content + Research Overview)
    if (mainContent) mainContent.style.display = 'block';
    if (homeSection) homeSection.style.display = 'block';
    
    // Check if mobile
    function isMobile() {
        return window.innerWidth <= 768;
    }
    
    // Navigation click handler
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            // Hide all sections first
            hideAllSections();
            
            // Handle home navigation
            if (targetId === 'home') {
                if (mainContent) mainContent.style.display = 'block';
                if (homeSection) homeSection.style.display = 'block';
            } 
            // Handle CV section
            else if (targetId === 'cv') {
                // On mobile, open PDF in new window
                if (isMobile()) {
                    window.open('CV.pdf', '_blank');
                    // Restore home view
                    if (mainContent) mainContent.style.display = 'block';
                    if (homeSection) homeSection.style.display = 'block';
                    navLinks.forEach(l => {
                        if (l.getAttribute('href') === '#home') {
                            l.classList.add('active');
                        } else {
                            l.classList.remove('active');
                        }
                    });
                } else {
                    // On desktop, show CV section
                    if (cvSection) cvSection.style.display = 'flex';
                }
            }
            // Handle Photos section
            else if (targetId === 'photos') {
                if (photosSection) photosSection.style.display = 'block';
            }
            // Handle Insights section
            else if (targetId === 'insights') {
                if (insightsSection) insightsSection.style.display = 'block';
            }
            // Handle Archive section
            else if (targetId === 'archive') {
                if (archiveSection) {
                    archiveSection.style.display = 'block';
                    if (typeof renderArchiveList === 'function') renderArchiveList();
                }
            }
                   // Handle Contact section
                   else if (targetId === 'contact') {
                       if (contactSection) contactSection.style.display = 'block';
                       // Fix footer for contact section
                       const footer = document.querySelector('.footer');
                       const body = document.querySelector('body');
                       if (footer) footer.classList.add('fixed');
                       if (body) body.classList.add('footer-fixed');
                   }
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animations to various elements
document.addEventListener('DOMContentLoaded', () => {
    // Research areas
    const researchAreas = document.querySelectorAll('.research-area');
    researchAreas.forEach(area => {
        area.style.opacity = '0';
        area.style.transform = 'translateY(20px)';
        area.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(area);
    });
    
    // Photo items
    const photoItems = document.querySelectorAll('.photo-item');
    photoItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
    
    // Paper items (Insights section)
    const paperItems = document.querySelectorAll('.paper-item');
    paperItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
    
    // Contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });

    // Category filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const category = this.getAttribute('data-category');

            paperItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (category === 'all' || itemCategory === category) {
                    item.style.display = 'flex';
                    // Re-trigger animation
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});

// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    
    if (!themeToggle || !themeIcon) {
        console.error('Theme toggle elements not found');
        return;
    }
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
});

// Archive: 글 목록 및 상세 보기, 댓글(Utterances)
document.addEventListener('DOMContentLoaded', function() {
    const listEl = document.getElementById('archive-list');
    const detailEl = document.getElementById('archive-post-detail');
    const bodyEl = document.getElementById('archive-post-body');
    const backBtn = document.getElementById('archive-back-btn');
    const utterancesContainer = document.getElementById('archive-comments');

    if (!listEl || !detailEl || !bodyEl || !backBtn) return;

    function getPosts() {
        const fromStorage = localStorage.getItem('archive_posts');
        const stored = fromStorage ? JSON.parse(fromStorage) : [];
        const fromData = typeof ARCHIVE_POSTS !== 'undefined' ? ARCHIVE_POSTS : [];
        const byId = {};
        fromData.forEach(p => { byId[p.id] = p; });
        stored.forEach(p => { byId[p.id] = p; });
        return Object.values(byId).sort((a, b) => (b.date || '').localeCompare(a.date || ''));
    }

    function renderArchiveList() {
        const posts = getPosts();
        listEl.innerHTML = posts.length === 0
            ? '<p class="archive-empty">아직 글이 없습니다. <code>archive-data.js</code>에 글을 추가해 보세요.</p>'
            : posts.map(p => `
                <article class="archive-card" data-id="${p.id}">
                    <time class="archive-date" datetime="${p.date}">${p.date}</time>
                    <h3 class="archive-card-title">${escapeHtml(p.title)}</h3>
                </article>
            `).join('');

        listEl.querySelectorAll('.archive-card').forEach(card => {
            card.addEventListener('click', function() {
                const id = this.getAttribute('data-id');
                showPost(id);
            });
        });
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    var writeToggle = document.getElementById('archive-write-toggle');
    var writeForm = document.getElementById('archive-write-form');
    function showPost(id) {
        const posts = getPosts();
        const post = posts.find(p => p.id === id);
        if (!post) return;
        listEl.style.display = 'none';
        if (writeToggle) writeToggle.style.display = 'none';
        if (writeForm) writeForm.style.display = 'none';
        detailEl.style.display = 'block';
        bodyEl.innerHTML = `
            <header class="archive-post-header">
                <time datetime="${post.date}">${post.date}</time>
                <h2 class="archive-post-title">${escapeHtml(post.title)}</h2>
            </header>
            <div class="archive-post-content">${post.content}</div>
        `;
        loadUtterances(id);
    }

    function loadUtterances(issueTerm) {
        const container = document.getElementById('utterances-container');
        if (!container) return;
        container.innerHTML = '';
        var s = document.createElement('script');
        s.src = 'https://utteranc.es/client.js';
        // 댓글용 GitHub 저장소: 공개 repo를 만들고 아래에 'username/repo' 형태로 설정하세요.
        s.setAttribute('data-repo', (window.UTTERANCES_REPO || 'donghyuklee1/archive-comments').trim());
        s.setAttribute('data-issue-term', issueTerm);
        s.setAttribute('data-theme', document.body.classList.contains('dark-mode') ? 'github-dark' : 'github-light');
        s.setAttribute('crossorigin', 'anonymous');
        s.setAttribute('async', '');
        container.appendChild(s);
    }

    backBtn.addEventListener('click', function() {
        detailEl.style.display = 'none';
        listEl.style.display = '';
        if (writeToggle) writeToggle.style.display = '';
        document.getElementById('utterances-container').innerHTML = '';
    });

    var writeCancel = document.getElementById('archive-write-cancel');
    if (writeToggle && writeForm) {
        writeToggle.addEventListener('click', function() {
            var visible = writeForm.style.display !== 'none';
            writeForm.style.display = visible ? 'none' : 'block';
            writeToggle.textContent = visible ? '+ 새 글 쓰기' : '− 글쓰기 닫기';
            if (!visible) {
                var dateInput = document.getElementById('archive-write-date');
                if (dateInput && !dateInput.value) {
                    var today = new Date().toISOString().slice(0, 10);
                    dateInput.value = today;
                }
            }
        });
    }
    if (writeCancel && writeForm) {
        writeCancel.addEventListener('click', function() {
            writeForm.style.display = 'none';
            if (writeToggle) writeToggle.textContent = '+ 새 글 쓰기';
        });
    }
    if (writeForm) {
        writeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var title = document.getElementById('archive-write-title');
            var date = document.getElementById('archive-write-date');
            var content = document.getElementById('archive-write-content');
            if (!title || !date || !content) return;
            var id = 'post-' + Date.now();
            var post = { id: id, title: title.value.trim(), date: date.value, content: '<p>' + content.value.trim().replace(/\n/g, '</p><p>') + '</p>' };
            var stored = localStorage.getItem('archive_posts');
            var arr = stored ? JSON.parse(stored) : [];
            arr.push(post);
            localStorage.setItem('archive_posts', JSON.stringify(arr));
            title.value = '';
            date.value = '';
            content.value = '';
            writeForm.style.display = 'none';
            if (writeToggle) writeToggle.textContent = '+ 새 글 쓰기';
            renderArchiveList();
        });
    }

    window.renderArchiveList = renderArchiveList;
});