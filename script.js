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

// ─── Liquid Glass Pill – Apple-style drag ─────────────────────────────────────
(function () {
    const pill = document.getElementById('liquid-pill');
    const nav  = document.getElementById('main-nav');
    if (!pill || !nav) return;

    // ── Physical state ────────────────────────────────────────────────────────
    // "display" values — what the pill actually shows right now
    let dispLeft  = 0, dispWidth = 0;
    // "target" values — where the pill wants to be
    let tgtLeft   = 0, tgtWidth  = 0;
    // Velocities for spring
    let velLeft   = 0, velWidth  = 0;

    // Drag state
    let dragging      = false;
    let dragConfirmed = false;
    let dragStartX    = 0, dragStartY = 0;
    let dragPillLeft0 = 0;            // pill left at drag start
    let dragPillW0    = 0;            // pill width at drag start
    let dragRawLeft   = 0;            // raw desired left during drag
    let dragRawWidth  = 0;            // raw desired width during drag
    let rafId         = null;

    // ── Turbulence ────────────────────────────────────────────────────────────
    const turbEl  = document.querySelector('#liquid-glass-filter feTurbulence');
    let turbPhase = 0, turbOn = false;
    function animTurb() {
        if (!turbOn) return;
        turbPhase += 0.022;
        if (turbEl) turbEl.setAttribute('baseFrequency',
            `${(0.015 + Math.sin(turbPhase) * 0.007).toFixed(4)} ` +
            `${(0.008 + Math.cos(turbPhase * 0.65) * 0.004).toFixed(4)}`);
        requestAnimationFrame(animTurb);
    }
    function turbStart() { if (!turbOn) { turbOn = true; animTurb(); } }
    function turbStop()  { turbOn = false; if (turbEl) turbEl.setAttribute('baseFrequency', '0.015 0.008'); }

    // ── Helpers ───────────────────────────────────────────────────────────────
    function navRect()     { return nav.getBoundingClientRect(); }
    function pillH()       { return Math.min(nav.offsetHeight - 6, 32); }

    function applyPill(left, width, morphT) {
        // morphT 0 = settled, 1 = full-drag stretch
        const h   = pillH();
        const br  = Math.round(h / 2);

        pill.style.left   = left  + 'px';
        pill.style.width  = width + 'px';
        pill.style.height = h     + 'px';

        // Liquid shape morphing: squish vertically + stretch border-radius on leading edge
        if (morphT > 0.01) {
            const isMovingRight = (tgtLeft + tgtWidth / 2) > (dispLeft + dispWidth / 2);
            const squeeze = 1 - morphT * 0.08;            // slight y-squish
            const brLead  = Math.round(br * (1 - morphT * 0.35)); // leading edge flattens
            const brTrail = Math.round(br * (1 + morphT * 0.25)); // trailing edge rounds more
            const [brL, brR] = isMovingRight
                ? [brTrail, brLead] : [brLead, brTrail];
            pill.style.borderRadius = `${brL}px ${brR}px ${brR}px ${brL}px`;
            pill.style.transform    = `translateY(-50%) scaleY(${squeeze})`;

            // Extra specular glow on leading edge
            const glowSide = isMovingRight ? 'right' : 'left';
            pill.style.boxShadow =
                `inset  2px  2px  6px rgba(255,255,255,0.65),` +
                `inset -2px -2px  8px rgba(200,230,255,0.22),` +
                `0 6px 28px rgba(0,0,0,0.12),` +
                `inset ${glowSide === 'right' ? '' : '-'}8px 0 14px rgba(255,255,255,0.25)`;
        } else {
            pill.style.borderRadius = br + 'px';
            pill.style.transform    = 'translateY(-50%)';
            pill.style.boxShadow    = '';  // revert to CSS class
        }
    }

    // ── Main animation RAF ────────────────────────────────────────────────────
    const STIFF = 0.20, DAMP = 0.70;

    function frame() {
        rafId = null;
        let needMore = false;

        if (dragging && dragConfirmed) {
            // Direct tracking: pill follows finger exactly this frame
            const dLeft  = dragRawLeft  - dispLeft;
            const dWidth = dragRawWidth - dispWidth;

            // Smooth follow with very high stiffness so it feels "glued"
            velLeft  = velLeft  * 0.55 + dLeft  * 0.45;
            velWidth = velWidth * 0.55 + dWidth * 0.45;

            dispLeft  += velLeft;
            dispWidth += velWidth;

            // morphT: 0→1 based on how far from settled width
            const morphT = Math.min(Math.abs(dispWidth - tgtWidth) / (tgtWidth * 0.5 + 1), 1);

            applyPill(dispLeft, dispWidth, morphT);

            // Highlight menu under pill
            const pillCenter = dispLeft + dispWidth / 2;
            const nr = navRect();
            nav.querySelectorAll('.nav-link').forEach(link => {
                const lr    = link.getBoundingClientRect();
                const lLeft = lr.left - nr.left;
                const over  = pillCenter >= lLeft && pillCenter <= lLeft + lr.width;
                link.style.opacity    = over ? '1'   : '0.40';
                link.style.fontWeight = over ? '700' : '500';
            });

            needMore = Math.abs(dLeft) > 0.2 || Math.abs(dWidth) > 0.2;
        } else if (!dragging) {
            // Spring back to target
            const dLeft  = tgtLeft  - dispLeft;
            const dWidth = tgtWidth - dispWidth;

            velLeft  = velLeft  * DAMP + dLeft  * STIFF;
            velWidth = velWidth * DAMP + dWidth * STIFF;

            dispLeft  += velLeft;
            dispWidth += velWidth;

            const morphT = Math.min(
                (Math.abs(velLeft) + Math.abs(velWidth)) / (tgtWidth * 0.08 + 0.5),
                1
            );

            applyPill(dispLeft, dispWidth, morphT);

            needMore = Math.abs(velLeft) > 0.06 || Math.abs(velWidth) > 0.06;
            if (!needMore) {
                dispLeft = tgtLeft; dispWidth = tgtWidth;
                velLeft  = 0;       velWidth  = 0;
                applyPill(dispLeft, dispWidth, 0);
                turbStop();
                // Settle jiggle
                pill.classList.add('settling');
                setTimeout(() => pill.classList.remove('settling'), 500);
            }
        }

        if (needMore || (dragging && dragConfirmed)) {
            rafId = requestAnimationFrame(frame);
        }
    }

    function kick() {
        if (!rafId) rafId = requestAnimationFrame(frame);
    }

    // ── Snap helpers ──────────────────────────────────────────────────────────
    function snapTo(link) {
        const nr = navRect(), lr = link.getBoundingClientRect();
        tgtLeft  = lr.left - nr.left;
        tgtWidth = lr.width;
    }

    function initPill() {
        const active = nav.querySelector('.nav-link.active');
        if (!active) return;
        snapTo(active);
        dispLeft  = tgtLeft;
        dispWidth = tgtWidth;
        applyPill(dispLeft, dispWidth, 0);
    }

    requestAnimationFrame(() => requestAnimationFrame(initPill));

    window.addEventListener('resize', () => {
        const a = nav.querySelector('.nav-link.active');
        if (a) { snapTo(a); kick(); }
    });

    // Nav link clicks
    nav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            snapTo(link);
            turbStart();
            kick();
        });
    });

    // ── Drag ─────────────────────────────────────────────────────────────────
    nav.style.position = 'relative';

    function onStart(e) {
        const cx = e.touches ? e.touches[0].clientX : e.clientX;
        const cy = e.touches ? e.touches[0].clientY : e.clientY;
        const nr = navRect();
        const px = cx - nr.left;
        const py = cy - nr.top;

        // Desktop: require hit on pill. Mobile: allow anywhere on nav row.
        if (window.innerWidth > 768) {
            const ph = pillH(), pt = (nav.offsetHeight - ph) / 2;
            const inX = px >= dispLeft - 12 && px <= dispLeft + dispWidth + 12;
            const inY = py >= pt - 6 && py <= pt + ph + 6;
            if (!inX || !inY) return;
        }

        dragging      = true;
        dragConfirmed = false;
        dragStartX    = cx;
        dragStartY    = cy;
        dragPillLeft0 = dispLeft;
        dragPillW0    = dispWidth;
        dragRawLeft   = dispLeft;
        dragRawWidth  = dispWidth;

        if (rafId) cancelAnimationFrame(rafId);
    }

    function onMove(e) {
        if (!dragging) return;

        const cx = e.touches ? e.touches[0].clientX : e.clientX;
        const cy = e.touches ? e.touches[0].clientY : e.clientY;
        const dx = cx - dragStartX;
        const dy = cy - dragStartY;

        if (!dragConfirmed) {
            if (Math.abs(dx) < 4 && Math.abs(dy) < 4) return;
            if (Math.abs(dy) > Math.abs(dx)) { dragging = false; return; }
            dragConfirmed = true;
            pill.classList.add('dragging');
            turbStart();
            velLeft = velWidth = 0;
            kick();
        }

        e.preventDefault();

        // Surface-tension elongation: pill stretches in direction of drag
        const maxStretch = Math.min(tgtWidth * 0.55, 28);
        const stretch    = Math.min(Math.abs(dx) * 0.28, maxStretch);
        // Leading edge trails slightly (inertia simulation)
        const lag        = dx * 0.12;

        dragRawWidth = dragPillW0 + stretch;
        dragRawLeft  = dragPillLeft0 + dx - stretch * 0.5 + lag * (dx < 0 ? 1 : -1);

        // Clamp within nav
        const nw = navRect().width;
        dragRawLeft = Math.max(-4, Math.min(nw - dragRawWidth + 4, dragRawLeft));
    }

    function onEnd(e) {
        if (!dragging) return;
        dragging = false;

        if (!dragConfirmed) return;

        pill.classList.remove('dragging');
        nav.querySelectorAll('.nav-link').forEach(l => {
            l.style.opacity = ''; l.style.fontWeight = '';
        });

        // Find closest link to current pill center
        const center = dispLeft + dispWidth / 2;
        const nr = navRect();
        let best = null, bestD = Infinity;
        nav.querySelectorAll('.nav-link').forEach(link => {
            const lr = link.getBoundingClientRect();
            const lc = (lr.left - nr.left) + lr.width / 2;
            const d  = Math.abs(center - lc);
            if (d < bestD) { bestD = d; best = link; }
        });

        if (best) { best.click(); snapTo(best); }
        kick();
    }

    // Attach events
    nav.addEventListener('mousedown',    onStart, { passive: true });
    window.addEventListener('mousemove', onMove,  { passive: false });
    window.addEventListener('mouseup',   onEnd);

    nav.addEventListener('touchstart',   onStart, { passive: true });
    window.addEventListener('touchmove', onMove,  { passive: false });
    window.addEventListener('touchend',  onEnd,   { passive: true });

})();
