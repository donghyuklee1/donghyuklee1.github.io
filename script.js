// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const mainContent = document.querySelector('.main-content');
    const archiveSection = document.getElementById('archive');
    const cvSection = document.getElementById('cv');
    const photosSection = document.getElementById('photos');
    const insightsSection = document.getElementById('insights');
    const contactSection = document.getElementById('contact');
    
    // Function to hide all sections
    function hideAllSections() {
        if (mainContent) mainContent.style.display = 'none';
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
    
    // Show only home section initially (main-content)
    if (mainContent) mainContent.style.display = 'block';
    
    // Check if mobile
    function isMobile() {
        return window.innerWidth <= 768;
    }
    
    // Navigation click handler
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            console.log('Navigation clicked:', targetId);
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            // Hide all sections first
            hideAllSections();
            
            // Handle home navigation
            if (targetId === 'home') {
                if (mainContent) mainContent.style.display = 'block';
            } 
            // Handle CV section
            else if (targetId === 'cv') {
                // On mobile, open PDF in new window
                if (isMobile()) {
                    window.open('CV.pdf', '_blank');
                    // Restore home view
                    if (mainContent) mainContent.style.display = 'block';
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

    if (header) {
        if (currentScroll > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
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
    
    if (!themeToggle || !themeIcon) {
        console.error('Theme toggle elements not found');
        return;
    }
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    themeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Theme toggle clicked');
        // Toggle dark-mode on html element
        document.documentElement.classList.toggle('dark-mode');

        const isDark = document.documentElement.classList.contains('dark-mode');

        if (isDark) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
            console.log('Dark mode enabled');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
            console.log('Light mode enabled');
        }
    });
});

// Archive: MD 기반 글 목록 및 상세 보기
document.addEventListener('DOMContentLoaded', function() {
    const listEl = document.getElementById('archive-list');
    const detailEl = document.getElementById('archive-post-detail');
    const bodyEl = document.getElementById('archive-post-body');
    const backBtn = document.getElementById('archive-back-btn');

    if (!listEl || !detailEl || !bodyEl || !backBtn) return;

    const manifest = typeof ARCHIVE_POSTS_MANIFEST !== 'undefined' ? ARCHIVE_POSTS_MANIFEST : [];
    // GitHub Pages 프로젝트 사이트(예: user.github.io/repo-name/) 대응
    let base = window.location.pathname;
    if (!base.endsWith('/')) base = base.replace(/\/[^/]*$/, '/') || '/';
    const baseUrl = base + 'posts/';

    function parseFrontmatter(raw) {
        const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
        if (!match) return { body: raw, title: '', date: '', links: [] };
        const fm = match[1];
        const body = match[2];
        let title = '', date = '', links = [];
        const titleM = fm.match(/title:\s*["']?([^"'\n]+)["']?/);
        const dateM = fm.match(/date:\s*(\d{4}-\d{2}-\d{2})/);
        if (titleM) title = titleM[1].trim();
        if (dateM) date = dateM[1];
        const linksBlock = fm.match(/links:\s*\n([\s\S]*?)(?=\n[a-z]|\n---|$)/i);
        if (linksBlock) {
            const ls = [];
            const block = linksBlock[1];
            const re = /-\s*label:\s*["']?([^"'\n]+)["']?\s*\n\s*url:\s*["']([^"']+)["']/g;
            let m;
            while ((m = re.exec(block)) !== null) ls.push({ label: m[1].trim(), url: m[2] });
            if (ls.length) links = ls;
        }
        return { body, title, date, links };
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function getPostsForList() {
        const fromFile = (f) => f.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '').replace(/-/g, ' ');
        const dateFromFile = (f) => (f.match(/^(\d{4}-\d{2}-\d{2})/) || [])[1] || '';
        return manifest.map((m, i) => ({
            id: String(i),
            file: m.file,
            title: m.title || fromFile(m.file),
            date: m.date || dateFromFile(m.file),
        })).sort((a, b) => (b.date || '').localeCompare(a.date || ''));
    }

    function renderArchiveList() {
        const posts = getPostsForList();
        listEl.innerHTML = posts.length === 0
            ? '<p class="archive-empty">아직 글이 없습니다. <code>posts/</code>에 .md 파일을 추가하고 <code>archive-data.js</code>의 매니페스트에 등록해 보세요.</p>'
            : posts.map(p => `
                <article class="archive-card" data-id="${escapeHtml(p.id)}" data-file="${escapeHtml(p.file)}">
                    <span class="archive-date">${escapeHtml(p.date)}</span>
                    <h3 class="archive-card-title">${escapeHtml(p.title)}</h3>
                </article>
            `).join('');

        listEl.querySelectorAll('.archive-card').forEach(card => {
            card.addEventListener('click', function() {
                showPost(this.getAttribute('data-id'), this.getAttribute('data-file'));
            });
        });
    }

    function showPost(id, file) {
        const url = baseUrl + file;
        listEl.style.display = 'none';
        detailEl.style.display = 'block';
        bodyEl.innerHTML = '<p class="archive-loading">로딩 중...</p>';
        fetch(url)
            .then(r => r.ok ? r.text() : Promise.reject(new Error('Not found')))
            .then(raw => {
                const { body, title, date, links } = parseFrontmatter(raw);
                if (typeof marked !== 'undefined') {
                    const renderer = new marked.Renderer();
                    const origLink = renderer.link.bind(renderer);
                    renderer.link = function(href, title, text) {
                        const out = origLink(href, title, text);
                        return href.startsWith('http') ? out.replace('<a ', '<a target="_blank" rel="noopener noreferrer" ') : out;
                    };
                    marked.setOptions({ gfm: true, breaks: true, renderer });
                }
                const html = typeof marked !== 'undefined' ? marked.parse(body) : body.replace(/\n/g, '<br>');
                const linksHtml = (links && links.length > 0)
                    ? `<aside class="archive-links"><h4 class="archive-links-title">관련 링크</h4><ul class="archive-links-list">${links.map(l => `<li><a href="${escapeHtml(l.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(l.label)}</a></li>`).join('')}</ul></aside>`
                    : '';
                const post = getPostsForList().find(p => p.id === id);
                const finalTitle = title || (post && post.title) || file;
                const finalDate = date || (post && post.date) || '';
                bodyEl.innerHTML = `
                    <header class="archive-post-header">
                        <time datetime="${escapeHtml(finalDate)}">${escapeHtml(finalDate)}</time>
                        <h2 class="archive-post-title">${escapeHtml(finalTitle)}</h2>
                    </header>
                    <div class="archive-post-content">${html}</div>
                    ${linksHtml}
                `;
            })
            .catch(() => {
                bodyEl.innerHTML = '<p class="archive-error">글을 불러올 수 없습니다.</p>';
            });
    }

    backBtn.addEventListener('click', function() {
        detailEl.style.display = 'none';
        listEl.style.display = '';
    });

    window.renderArchiveList = renderArchiveList;
});
