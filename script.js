// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const mainContent = document.querySelector('.main-content');
    const archiveSection = document.getElementById('archive');
    const cvSection = document.getElementById('cv');
    const photosSection = document.getElementById('photos');
    const publicationsSection = document.getElementById('publications');
    const contactSection = document.getElementById('contact');
    
    // Function to hide all sections
    function hideAllSections() {
        if (mainContent) mainContent.style.display = 'none';
        if (archiveSection) archiveSection.style.display = 'none';
        if (cvSection) cvSection.style.display = 'none';
        if (photosSection) photosSection.style.display = 'none';
        if (publicationsSection) publicationsSection.style.display = 'none';
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
    if (publicationsSection) publicationsSection.style.display = 'none';
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
            // Handle Publications section
            else if (targetId === 'publications') {
                if (publicationsSection) publicationsSection.style.display = 'block';
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
    
    // Paper items (Publications section)
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

    // Photo modal functionality
    const photoModal = document.getElementById('photo-modal');
    const photoModalImg = document.getElementById('photo-modal-img');
    const photoModalCaption = document.getElementById('photo-modal-caption');
    const photoModalClose = document.getElementById('photo-modal-close');

    if (photoModal && photoModalImg && photoModalCaption && photoModalClose) {
        document.querySelectorAll('.photo-item').forEach(item => {
            item.addEventListener('click', function() {
                const img = this.querySelector('.gallery-image');
                const caption = this.querySelector('.photo-caption');
                
                if (img) photoModalImg.src = img.src;
                if (caption) photoModalCaption.innerHTML = caption.innerHTML;
                
                photoModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });

        photoModalClose.addEventListener('click', function() {
            photoModal.style.display = 'none';
            document.body.style.overflow = '';
        });

        photoModal.addEventListener('click', function(e) {
            if (e.target === photoModal) {
                photoModal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }
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
    const baseUrl = 'archives/';

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
        return manifest.map((m, i) => {
            const date = m.date || dateFromFile(m.file);
            const formattedDate = date ? new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '';
            return {
                id: String(i),
                file: m.file,
                title: m.title || fromFile(m.file),
                date: formattedDate,
                rawDate: date,
                categories: m.categories || 'Uncategorized',
                excerpt: m.excerpt || '',
                author: m.author || 'Theme Admin'
            };
        }).sort((a, b) => (b.rawDate || '').localeCompare(a.rawDate || ''));
    }

    function renderArchiveList() {
        const posts = getPostsForList();
        listEl.innerHTML = posts.length === 0
            ? '<p class="archive-empty">Not yet! 👾</p>'
            : posts.map(p => {
                const cats = p.categories.split(',').map(c => `<span class="archive-card-cat">${escapeHtml(c.trim())}</span>`).join('');
                return `
                <article class="archive-card" data-id="${escapeHtml(p.id)}" data-file="${escapeHtml(p.file)}">
                    <div class="archive-card-cat-container">${cats}</div>
                    <h3 class="archive-card-title">${escapeHtml(p.title)}</h3>
                    <p class="archive-card-excerpt">${escapeHtml(p.excerpt)}</p>
                    <hr class="archive-card-divider">
                    <div class="archive-card-meta">
                        <span><i class="fas fa-feather-alt"></i> ${escapeHtml(p.author)}</span>
                        <span>&bull;</span>
                        <span><i class="far fa-calendar-alt"></i> ${escapeHtml(p.date)}</span>
                    </div>
                </article>
            `}).join('');

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
        bodyEl.innerHTML = '<p class="archive-loading">Loading..</p>';
        const load = () => (cdnUrl ? fetchPost(cdnUrl) : fetchPost(pageUrl)).catch(() => cdnUrl && fetchPost(pageUrl).catch(() => Promise.reject()));
        load()
            .then(raw => {
                const { body, title, date, links, tags, categories, excerpt, paper } = parseFrontmatter(raw);
                let html = '';
                if (typeof marked !== 'undefined') {
                    // Use marked.js Extension API to protect LaTeX from markdown parsing.
                    // Extensions tokenize BEFORE markdown, so LaTeX is never mangled.
                    const mathBlockExt = {
                        name: 'mathBlock',
                        level: 'block',
                        start: function(src) { return src.indexOf('$$'); },
                        tokenizer: function(src) {
                            const match = src.match(/^\$\$([\s\S]*?)\$\$/);
                            if (match) {
                                return { type: 'mathBlock', raw: match[0], text: match[1] };
                            }
                        },
                        renderer: function(token) {
                            return '<div class="math-display">$$' + token.text + '$$</div>';
                        }
                    };
                    const mathInlineExt = {
                        name: 'mathInline',
                        level: 'inline',
                        start: function(src) { return src.indexOf('$'); },
                        tokenizer: function(src) {
                            const match = src.match(/^\$([^\$\n]+?)\$/);
                            if (match) {
                                return { type: 'mathInline', raw: match[0], text: match[1] };
                            }
                        },
                        renderer: function(token) {
                            return '$' + token.text + '$';
                        }
                    };

                    const instance = new marked.Marked();
                    const renderer = new marked.Renderer();
                    const origLink = renderer.link.bind(renderer);
                    renderer.link = function(token) {
                        const out = origLink(token);
                        const h = (typeof token === 'object') ? token.href : token;
                        return (typeof h === 'string' && h.startsWith('http')) ? out.replace('<a ', '<a target="_blank" rel="noopener noreferrer" ') : out;
                    };
                    instance.use({ extensions: [mathBlockExt, mathInlineExt] });
                    instance.setOptions({ gfm: true, breaks: true, renderer });
                    html = instance.parse(body);
                } else {
                    html = body.replace(/\n/g, '<br>');
                }
                const post = getPostsForList().find(p => p.id === id);
                const finalTitle = title || (post && post.title) || file;
                const tagsHtml = (tags && tags.length > 0) ? tags.map(t => `<span class="archive-tag">${escapeHtml(t)}</span>`).join('') : '';
                let paperHtml = '';
                if (paper) {
                    const ln = (paper.links && Object.keys(paper.links).length) ? Object.entries(paper.links).map(([k, v]) => `<a href="${escapeHtml(v)}" target="_blank" rel="noopener noreferrer">[${k.charAt(0).toUpperCase() + k.slice(1)}]</a>`).join(' ') : (links && links.length) ? links.map(l => `<a href="${escapeHtml(l.url)}" target="_blank" rel="noopener noreferrer">[${escapeHtml(l.label)}]</a>`).join(' ') : '';
                    paperHtml = `<div class="archive-paper-info">
                        ${paper.conference ? `${escapeHtml(paper.conference)}. ` : ''}
                        ${ln || ''}
                        ${paper.authors ? `<br>Authors: ${escapeHtml(paper.authors)}` : ''}
                        ${paper.affiliation ? `<br>Affiliation: ${escapeHtml(paper.affiliation)}` : ''}
                        ${paper.date ? `<br>${escapeHtml(paper.date)}` : ''}
                        ${paper.image ? `<br><img src="${escapeHtml(paper.image)}" alt="" class="archive-paper-image">` : ''}
                    </div>`;
                } else if (links && links.length > 0) {
                    paperHtml = `<div class="archive-paper-info">${links.map(l => `<a href="${escapeHtml(l.url)}" target="_blank" rel="noopener noreferrer">[${escapeHtml(l.label)}]</a>`).join(' ')}</div>`;
                }
                const metaSub = [date, categories, excerpt].filter(Boolean).join(' · ');
                bodyEl.innerHTML = `
                    <header class="archive-post-header">
                        <h1 class="archive-post-title">${escapeHtml(finalTitle)}</h1>
                        ${tagsHtml ? `<div class="archive-tags">${tagsHtml}</div>` : ''}
                        ${paperHtml}
                        ${metaSub ? `<div class="archive-meta-sub">${escapeHtml(metaSub)}</div>` : ''}
                    </header>
                    <div class="archive-post-content">${html}</div>
                `;
                if (typeof MathJax !== 'undefined' && typeof MathJax.typesetPromise === 'function') {
                    MathJax.typesetPromise([bodyEl]).catch(function (err) {
                        console.error('MathJax rendering failed: ' + err.message);
                    });
                }
            })
            .catch((err) => {
                console.error('Archive post load error:', err);
                bodyEl.innerHTML = '<p class="archive-error">Loading Failed 😨</p>';
            });
    }

    backBtn.addEventListener('click', function() {
        detailEl.style.display = 'none';
        listEl.style.display = '';
    });

    window.renderArchiveList = renderArchiveList;
});

// ─── Liquid Glass Pill Physics ────────────────────────────────────────────────
(function() {
    const pill = document.getElementById('liquid-pill');
    const nav  = document.getElementById('main-nav');
    if (!pill || !nav) return;

    // ── State ────────────────────────────────────────────────────────────────
    let targetLeft  = 0;
    let targetWidth = 0;
    let currentLeft  = 0;
    let currentWidth = 0;
    let isDragging   = false;
    let dragStartX   = 0;
    let dragStartY   = 0;
    let dragPillLeft = 0;
    let dragConfirmed = false;  // only confirm horizontal drag, not vertical scroll
    let rafId        = null;
    let settled      = false;

    // Spring constants
    const SPRING_STIFFNESS = 0.18;
    const SPRING_DAMPING   = 0.72;
    let velLeft  = 0;
    let velWidth = 0;

    // ── SVG turbulence animation ─────────────────────────────────────────────
    const turbulence = document.querySelector('#liquid-glass-filter feTurbulence');
    let turbPhase = 0;
    let turbActive = false;

    function animateTurbulence() {
        if (!turbActive) return;
        turbPhase += 0.018;
        const bf  = 0.015 + Math.sin(turbPhase) * 0.006;
        const bf2 = 0.008 + Math.cos(turbPhase * 0.7) * 0.003;
        if (turbulence) turbulence.setAttribute('baseFrequency', `${bf.toFixed(4)} ${bf2.toFixed(4)}`);
        requestAnimationFrame(animateTurbulence);
    }
    function startTurbulence() {
        if (turbActive) return;
        turbActive = true;
        animateTurbulence();
    }
    function stopTurbulence() {
        turbActive = false;
        if (turbulence) turbulence.setAttribute('baseFrequency', '0.015 0.008');
    }

    // ── Helpers ───────────────────────────────────────────────────────────────
    function getPillHeight() {
        // Use actual nav height minus 6px padding, capped at 32px
        return Math.min(nav.offsetHeight - 6, 32);
    }

    function getNavRect() { return nav.getBoundingClientRect(); }

    function snapToLink(link) {
        const navR  = getNavRect();
        const linkR = link.getBoundingClientRect();
        targetLeft  = linkR.left - navR.left;
        targetWidth = linkR.width;
    }

    function positionPill(left, width) {
        pill.style.left  = left  + 'px';
        pill.style.width = width + 'px';
        // Keep pill height synced with nav
        const h = getPillHeight();
        pill.style.height = h + 'px';
        pill.style.borderRadius = Math.round(h / 2) + 'px';
    }

    // ── Spring physics loop ───────────────────────────────────────────────────
    function springLoop() {
        if (isDragging) { rafId = null; return; }

        const dLeft  = targetLeft  - currentLeft;
        const dWidth = targetWidth - currentWidth;

        velLeft  = velLeft  * SPRING_DAMPING + dLeft  * SPRING_STIFFNESS;
        velWidth = velWidth * SPRING_DAMPING + dWidth * SPRING_STIFFNESS;

        currentLeft  += velLeft;
        currentWidth += velWidth;

        positionPill(currentLeft, currentWidth);

        if (Math.abs(velLeft) > 0.08 || Math.abs(velWidth) > 0.08) {
            rafId = requestAnimationFrame(springLoop);
        } else {
            currentLeft  = targetLeft;
            currentWidth = targetWidth;
            positionPill(currentLeft, currentWidth);
            velLeft = velWidth = 0;
            stopTurbulence();
            if (!settled) {
                settled = true;
                pill.classList.add('settling');
                setTimeout(() => pill.classList.remove('settling'), 550);
            }
            rafId = null;
        }
    }

    function startSpring() {
        settled = false;
        startTurbulence();
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(springLoop);
    }

    // ── Init pill position ────────────────────────────────────────────────────
    function initPill() {
        const active = nav.querySelector('.nav-link.active');
        if (active) {
            const navR  = getNavRect();
            const linkR = active.getBoundingClientRect();
            currentLeft  = targetLeft  = linkR.left - navR.left;
            currentWidth = targetWidth = linkR.width;
            positionPill(currentLeft, currentWidth);
        }
    }

    requestAnimationFrame(() => requestAnimationFrame(initPill));

    window.addEventListener('resize', () => {
        const active = nav.querySelector('.nav-link.active');
        if (active) snapToLink(active);
        if (!rafId) startSpring();
    });

    // ── Nav link click → move pill ───────────────────────────────────────────
    nav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            snapToLink(link);
            startSpring();
        });
    });

    // ── Drag interaction ──────────────────────────────────────────────────────
    nav.style.position = 'relative';

    // Highlight link under pill center during drag
    function highlightUnderPill(pillCenter) {
        const navR = getNavRect();
        nav.querySelectorAll('.nav-link').forEach(link => {
            const lR   = link.getBoundingClientRect();
            const lLeft = lR.left - navR.left;
            const isOver = pillCenter >= lLeft && pillCenter <= lLeft + lR.width;
            link.style.opacity = isOver ? '1' : '0.45';
            link.style.fontWeight = isOver ? '700' : '';
        });
    }

    function resetLinkStyles() {
        nav.querySelectorAll('.nav-link').forEach(l => {
            l.style.opacity = '';
            l.style.fontWeight = '';
        });
    }

    // Snap to the link closest to pillCenter
    function snapToClosest(pillCenter) {
        const navR = getNavRect();
        let closest = null, minDist = Infinity;
        nav.querySelectorAll('.nav-link').forEach(link => {
            const lR = link.getBoundingClientRect();
            const lCenter = (lR.left - navR.left) + lR.width / 2;
            const dist = Math.abs(pillCenter - lCenter);
            if (dist < minDist) { minDist = dist; closest = link; }
        });
        return closest;
    }

    function onDragStart(e) {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const navR    = getNavRect();
        const clickX  = clientX - navR.left;
        const clickY  = clientY - navR.top;

        // Accept touch start anywhere on the nav row (not just the pill)
        const isMobile = window.innerWidth <= 768;
        const pillH = getPillHeight();
        const pillTop = (nav.offsetHeight - pillH) / 2;
        const pillBot = pillTop + pillH;

        const inPillX = clickX >= currentLeft - 12 && clickX <= currentLeft + currentWidth + 12;
        const inPillY = clickY >= pillTop - 6 && clickY <= pillBot + 6;

        // On mobile allow drag from anywhere in nav; on desktop require pill hit
        if (!isMobile && (!inPillX || !inPillY)) return;

        isDragging    = true;
        dragConfirmed = false;  // wait to confirm direction
        dragStartX    = clientX;
        dragStartY    = clientY;
        dragPillLeft  = currentLeft;

        if (rafId) cancelAnimationFrame(rafId);
        // Don't preventDefault yet — wait for direction confirm
    }

    function onDragMove(e) {
        if (!isDragging) return;

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const dx = clientX - dragStartX;
        const dy = clientY - dragStartY;

        if (!dragConfirmed) {
            // Confirm direction after 4px of movement
            if (Math.abs(dx) < 4 && Math.abs(dy) < 4) return;
            if (Math.abs(dy) > Math.abs(dx)) {
                // Vertical scroll intent — cancel drag
                isDragging = false;
                return;
            }
            dragConfirmed = true;
            pill.classList.add('dragging');
            startTurbulence();
        }

        e.preventDefault();  // block page scroll only after horizontal confirmed

        // Surface-tension stretch effect
        const stretch = Math.min(Math.abs(dx) * 0.22, 18);
        const newWidth = targetWidth + stretch;
        const newLeft  = dragPillLeft + dx - stretch / 2;

        const navW = getNavRect().width;
        const clampedLeft = Math.max(-4, Math.min(navW - newWidth + 4, newLeft));

        // Update currentLeft so dragEnd can read it
        currentLeft = clampedLeft;

        positionPill(clampedLeft, newWidth);
        highlightUnderPill(clampedLeft + newWidth / 2);
    }

    function onDragEnd(e) {
        if (!isDragging) return;
        isDragging = false;

        if (!dragConfirmed) return;  // Was a tap, not a drag

        pill.classList.remove('dragging');
        resetLinkStyles();

        const pillCenter = currentLeft + (targetWidth / 2);  // center-ish
        const closest = snapToClosest(pillCenter);
        if (closest) {
            closest.click();     // triggers navigation + active class
            snapToLink(closest);
        }
        startSpring();
    }

    // Mouse
    nav.addEventListener('mousedown',    onDragStart, { passive: true });
    window.addEventListener('mousemove', onDragMove,  { passive: false });
    window.addEventListener('mouseup',   onDragEnd);

    // Touch — touchstart passive so initial scroll is not blocked
    nav.addEventListener('touchstart',    onDragStart, { passive: true });
    window.addEventListener('touchmove',  onDragMove,  { passive: false });
    window.addEventListener('touchend',   onDragEnd,   { passive: true });

})();




