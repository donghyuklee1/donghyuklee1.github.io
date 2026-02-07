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
    const rawBase = typeof ARCHIVE_RAW_BASE !== 'undefined' ? ARCHIVE_RAW_BASE : '';
    // GitHub Pages 프로젝트 사이트(예: user.github.io/repo-name/) 대응
    let base = window.location.pathname;
    if (!base.endsWith('/')) base = base.replace(/\/[^/]*$/, '/') || '/';
    const baseUrl = base + 'posts/';

    function parseFrontmatter(raw) {
        const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
        if (!match) return { body: raw, title: '', date: '', links: [], tags: [], categories: '', excerpt: '', paper: null };
        const fm = match[1];
        const body = match[2];
        let title = '', date = '', links = [], tags = [], categories = '', excerpt = '', paper = null;
        const trim = (s) => (s || '').trim().replace(/^["']|["']$/g, '');
        const titleM = fm.match(/title:\s*["']?([\s\S]*?)["']?\s*(?=\n|$)/);
        if (titleM) title = trim(titleM[1]).replace(/\n\s*/g, ' ');
        const dateM = fm.match(/(?:last_modified_at|date):\s*(\d{4}-\d{2}-\d{2})/);
        if (dateM) date = dateM[1];
        const catM = fm.match(/categories:\s*["']?([^"'\n]+)["']?/);
        if (catM) categories = trim(catM[1]);
        const exM = fm.match(/excerpt:\s*["']?([\s\S]*?)["']?\s*(?=\n[a-z_]|\n---|$)/i);
        if (exM) excerpt = trim(exM[1]).replace(/\n\s*/g, ' ');
        const tagsBlock = fm.match(/tags:\s*\n([\s\S]*?)(?=\n[a-z_]|\n---|$)/i);
        if (tagsBlock) {
            const items = tagsBlock[1].match(/-\s*["']?([^"'\n-]+)["']?/g);
            if (items) tags = items.map(t => trim(t.replace(/^-\s*/, '')));
        }
        const linksBlock = fm.match(/links:\s*\n([\s\S]*?)(?=\n[a-z_]|\n---|$)/i);
        if (linksBlock) {
            const block = linksBlock[1];
            const re = /-\s*label:\s*["']?([^"'\n]+)["']?\s*\n\s*url:\s*["']([^"']+)["']/g;
            let m;
            while ((m = re.exec(block)) !== null) links.push({ label: m[1].trim(), url: m[2] });
        }
        const paperBlock = fm.match(/paper:\s*\n([\s\S]*?)(?=\n[a-z_][a-z_]*:\s|\n---|$)/i);
        if (paperBlock) {
            const pb = paperBlock[1];
            paper = {};
            const confM = pb.match(/conference:\s*["']?([^"'\n]+)["']?/);
            if (confM) paper.conference = trim(confM[1]);
            const authM = pb.match(/authors:\s*["']?([^"'\n]+)["']?/);
            if (authM) paper.authors = trim(authM[1]);
            const affM = pb.match(/affiliation:\s*["']?([^"'\n]+)["']?/);
            if (affM) paper.affiliation = trim(affM[1]);
            const datePM = pb.match(/date:\s*["']?([^"'\n]+)["']?/);
            if (datePM) paper.date = trim(datePM[1]);
            const imgM = pb.match(/image:\s*["']?([^"'\n]+)["']?/);
            if (imgM) paper.image = trim(imgM[1]);
            const lnBlock = pb.match(/links:\s*\n([\s\S]*?)(?=\n\w|\n---|$)/);
            if (lnBlock) {
                paper.links = {};
                ['paper','page','github','code'].forEach(k => {
                    const km = lnBlock[1].match(new RegExp(k + ':\\s*["\']([^"\']+)["\']'));
                    if (km) paper.links[k] = km[1];
                });
            }
        }
        if (links.length === 0 && paper && paper.links) {
            links = Object.entries(paper.links).map(([k, v]) => ({ label: k.charAt(0).toUpperCase() + k.slice(1), url: v }));
        }
        return { body, title, date, links, tags, categories, excerpt, paper };
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

    function fetchPost(url) {
        return fetch(url).then(r => {
            if (r.ok) return r.text();
            return Promise.reject(new Error('Not found'));
        });
    }

    function showPost(id, file) {
        const pageUrl = baseUrl + file;
        const cdnUrl = rawBase ? rawBase + file : null;
        listEl.style.display = 'none';
        detailEl.style.display = 'block';
        bodyEl.innerHTML = '<p class="archive-loading">로딩 중...</p>';
        const load = () => (cdnUrl ? fetchPost(cdnUrl) : fetchPost(pageUrl)).catch(() => cdnUrl && fetchPost(pageUrl).catch(() => Promise.reject()));
        load()
            .then(raw => {
                const { body, title, date, links, tags, categories, excerpt, paper } = parseFrontmatter(raw);
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
                const post = getPostsForList().find(p => p.id === id);
                const finalTitle = title || (post && post.title) || file;
                const finalDate = date || (post && post.date) || '';
                const tagsHtml = (tags && tags.length > 0) ? tags.map(t => `<span class="archive-tag">${escapeHtml(t)}</span>`).join('') : '';
                let metaRows = [];
                if (finalTitle) metaRows.push(`<tr><th>title</th><td>${escapeHtml(finalTitle)}</td></tr>`);
                if (finalDate) metaRows.push(`<tr><th>last_modified_at</th><td>${escapeHtml(finalDate)}</td></tr>`);
                if (categories) metaRows.push(`<tr><th>categories</th><td>${escapeHtml(categories)}</td></tr>`);
                if (tagsHtml) metaRows.push(`<tr><th>tags</th><td><div class="archive-tags">${tagsHtml}</div></td></tr>`);
                if (excerpt) metaRows.push(`<tr><th>excerpt</th><td>${escapeHtml(excerpt)}</td></tr>`);
                const metaTable = metaRows.length ? `<table class="archive-meta-table"><tbody>${metaRows.join('')}</tbody></table>` : '';
                let paperHtml = '';
                if (paper) {
                    const ln = (paper.links && Object.keys(paper.links).length) ? Object.entries(paper.links).map(([k, v]) => `<a href="${escapeHtml(v)}" target="_blank" rel="noopener noreferrer">[${k.charAt(0).toUpperCase() + k.slice(1)}]</a>`).join(' ') : (links && links.length) ? links.map(l => `<a href="${escapeHtml(l.url)}" target="_blank" rel="noopener noreferrer">[${escapeHtml(l.label)}]</a>`).join(' ') : '';
                    paperHtml = `<div class="archive-paper-info">
                        ${paper.conference ? `<span>${escapeHtml(paper.conference)}.</span> ` : ''}
                        ${ln ? ln + '<br>' : ''}
                        ${paper.authors ? `Authors: ${escapeHtml(paper.authors)}<br>` : ''}
                        ${paper.affiliation ? `Affiliation: ${escapeHtml(paper.affiliation)}<br>` : ''}
                        ${paper.date ? escapeHtml(paper.date) : ''}
                        ${paper.image ? `<br><img src="${escapeHtml(paper.image)}" alt="" class="archive-paper-image">` : ''}
                    </div>`;
                } else if (links && links.length > 0) {
                    paperHtml = `<aside class="archive-links"><h4 class="archive-links-title">관련 링크</h4><ul class="archive-links-list">${links.map(l => `<li><a href="${escapeHtml(l.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(l.label)}</a></li>`).join('')}</ul></aside>`;
                }
                bodyEl.innerHTML = `
                    <header class="archive-post-header">
                        ${metaTable}
                        ${paperHtml}
                    </header>
                    <div class="archive-post-content">${html}</div>
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
