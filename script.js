* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.5;
    color: #1a1a1a;
    background-color: #ffffff;
    letter-spacing: -0.01em;
    position: relative;
    padding-top: 96px;
}

body.footer-fixed {
    padding-bottom: 100px;
}

body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #ffffff 0%, #fafafa 100%);
    z-index: -1;
    pointer-events: none;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* Header: 심플·세련 */
.header {
    background-color: #ffffff;
    padding: 16px 0;
    margin: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    width: 100%;
    border-bottom: 1px solid #eee;
}

.header-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    flex-wrap: wrap;
}

.header-name {
    font-size: 1.25rem;
    font-weight: 500;
    color: #1a1a1a;
    margin: 0;
    letter-spacing: 0.01em;
    line-height: 1.2;
}

.theme-toggle {
    position: absolute;
    top: 14px;
    right: 20px;
    background: none;
    border: none;
    width: 36px;
    height: 36px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.2s ease;
    z-index: 1001;
    color: #666;
}

.theme-toggle:hover {
    opacity: 0.8;
}

.theme-toggle i {
    font-size: 1rem;
    color: inherit;
}

.navigation {
    display: flex;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    position: relative;
    z-index: 2;
    background-color: transparent;
    border: none;
}

.nav-link {
    color: #1a1a1a;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    padding: 6px 12px;
    transition: all 0.2s ease;
    border-radius: 0;
    position: relative;
    letter-spacing: 0.01em;
}

.nav-link:hover {
    color: #000000;
    background-color: #f5f5f5;
}

.nav-link.active {
    color: #000000;
    font-weight: 600;
    background-color: #f0f0f0;
}

/* Main Content */
.main-content {
    margin-bottom: 24px;
    background-color: #ffffff;
    border-radius: 0;
    backdrop-filter: none;
    box-shadow: none;
}

.content-card {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 0;
    box-shadow: none;
    border: none;
    backdrop-filter: none;
}

.two-column-layout {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 40px;
}

/* Profile Image */
.left-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.profile-image-container {
    width: 100%;
    max-width: 300px;
    margin-bottom: 20px;
}

.profile-image {
    width: 100%;
    height: auto;
    border-radius: 0;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    transition: transform 0.3s ease;
}

.profile-image:hover {
    transform: scale(1.02);
}

.profile-social-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
}

.social-icon-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #333;
    color: #ffffff;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1.2rem;
}

.social-icon-link:hover {
    background-color: #000;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.social-icon-link i {
    color: #ffffff;
}

.profile-social-links {
    width: 100%;
    max-width: 300px;
    margin-top: 15px;
    text-align: center;
}

.profile-social-link {
    display: block;
    font-size: 0.85rem;
    color: #333;
    text-decoration: none;
    margin-bottom: 8px;
    padding: 6px 0;
    transition: color 0.3s ease;
}

.profile-social-link:hover {
    color: #0066cc;
}

.profile-social-link i {
    margin-right: 6px;
}

.profile-email {
    font-size: 0.85rem;
    color: #666;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #e0e0e0;
}

.profile-email i {
    margin-right: 6px;
}

/* Right Column Content */
.right-column {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.professional-info .title {
    margin-bottom: 8px;
    font-size: 1.15rem;
    color: #2c3e50;
    line-height: 1.5;
}

.link {
    color: #000000;
    text-decoration: underline;
    text-decoration-color: #999;
    text-underline-offset: 2px;
    transition: all 0.2s ease;
}

.link:hover {
    color: #000000;
    text-decoration-color: #000000;
}

/* Social Icons */
.social-icons {
    display: flex;
    gap: 15px;
    margin: 10px 0;
}

/* Section Divider */
.section-divider {
    height: 1px;
    background-color: #ddd;
    margin: 30px 0;
    border: none;
}

.social-link {
    color: #3498db;
    font-size: 1.5rem;
    transition: color 0.3s ease, transform 0.2s ease;
}

.social-link:hover {
    color: #2980b9;
    transform: scale(1.1);
}

/* Text Sections */
.bio-section,
.research-section,
.hobby-section,
.awards-section,
.education-section,
.recruitment-section {
    line-height: 1.8;
}

.bio-section p,
.research-section p,
.hobby-section p,
.awards-section p,
.education-section p,
.recruitment-section p {
    margin-bottom: 15px;
    font-size: 1.05rem;
    line-height: 1.6;
    color: #444;
}

/* Research Overview Section */
.research-overview {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 0;
    backdrop-filter: none;
    box-shadow: none;
    border: none;
}

.section-title {
    font-size: 2rem;
    font-weight: 700;
    color: #000000;
    margin-bottom: 12px;
    letter-spacing: -0.03em;
    text-align: left;
    text-transform: uppercase;
    font-size: 1.5rem;
    letter-spacing: 0.05em;
}

.section-intro {
    font-size: 0.95rem;
    margin-bottom: 32px;
    color: #666;
    text-align: left;
    font-weight: 400;
    line-height: 1.6;
}

.research-areas {
    display: block;
    gap: 20px;
    margin-top: 30px;
}

.research-area {
    padding: 0;
    background-color: transparent;
    border-radius: 0;
    border-left: none;
    margin-bottom: 20px;
}

.research-area h3 {
    font-size: 1.1rem;
    color: #333;
    margin-bottom: 8px;
    letter-spacing: -0.01em;
    font-weight: 600;
}

.research-area p {
    color: #666;
    line-height: 1.6;
    font-size: 0.95rem;
    margin-bottom: 0;
}

/* Footer */
.footer {
    background-color: #2c2c2c;
    padding: 40px 0 20px 0;
    margin-top: 60px;
    box-shadow: none;
}

.footer.fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    margin-top: 0;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
}

.footer-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
}

.footer-left {
    margin-bottom: 0;
}

.footer-right {
    margin-bottom: 0;
}

.contact-details {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.contact-detail {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #ffffff;
    font-size: 0.8rem;
}

.contact-detail i {
    font-size: 0.7rem;
    width: 12px;
}

.logo-section {
    display: flex;
    align-items: center;
    gap: 20px;
}

.kaist-logo {
    height: 40px;
    width: auto;
    filter: brightness(0) invert(1);
}

.institution-info {
    display: flex;
    flex-direction: column;
}

.institution-name {
    color: #ffffff;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 1.3;
}

.footer-bottom {
    border-top: 1px solid #444;
    padding-top: 20px;
}

.copyright {
    color: #ffffff;
    font-size: 0.85rem;
    text-align: center;
}

/* CV Page Styles */
.cv-section {
    text-align: center;
}

.cv-section h2 {
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 30px;
}

.pdf-container {
    max-width: 800px;
    margin: 0 auto;
}

.pdf-loading {
    border: 2px solid #3498db;
    border-radius: 10px;
    padding: 60px 20px;
    background-color: #f8f9fa;
}

.loading-content {
    text-align: center;
}

.loading-icon {
    font-size: 3rem;
    color: #3498db;
    margin-bottom: 20px;
}

.loading-content p {
    color: #6c757d;
    font-size: 1.1rem;
}

.pdf-error {
    border: 2px solid #e74c3c;
    border-radius: 10px;
    padding: 60px 20px;
    background-color: #fdf2f2;
}

.error-content {
    text-align: center;
}

.error-icon {
    font-size: 3rem;
    color: #e74c3c;
    margin-bottom: 20px;
}

.error-content h3 {
    font-size: 1.5rem;
    color: #2c3e50;
    margin-bottom: 10px;
}

.error-content p {
    color: #6c757d;
}

.pdf-viewer {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.pdf-controls {
    background-color: #f8f9fa;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e9ecef;
}

.control-btn {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.3s ease;
}

.control-btn:hover {
    background-color: #2980b9;
}

.control-btn:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
}

#pdfCanvas {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
}

#pageInfo {
    font-weight: 500;
    color: #2c3e50;
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .pdf-controls {
        flex-direction: column;
        gap: 10px;
    }
    
    .control-btn {
        width: 100%;
        margin: 2px 0;
    }
    
    .cv-section h2 {
        font-size: 1.5rem;
    }
    
    .loading-icon {
        font-size: 2rem;
    }
    
    .error-icon {
        font-size: 2rem;
    }
    
    .error-content h3 {
        font-size: 1.2rem;
    }
    
    .pdf-loading, .pdf-error {
        padding: 40px 15px;
    }
}

/* CV Section Styles */
.cv-section {
    padding: 24px 40px;
    margin: 0;
    min-height: 100vh;
    height: auto;
    display: none;
    align-items: flex-start;
    justify-content: center;
    background-color: #ffffff;
    border-radius: 0;
    backdrop-filter: none;
    box-shadow: none;
    border: none;
}

.cv-content {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
}

.cv-preview {
    width: 100%;
    height: 100vh;
    min-height: 800px;
    background-color: white;
    border-radius: 0;
    box-shadow: none;
    overflow: hidden;
}

/* Photos Section Styles */
.photos-section {
    padding: 16px 40px 32px 40px;
    display: none;
    background-color: #ffffff;
    border-radius: 0;
    backdrop-filter: none;
    box-shadow: none;
    border: none;
}

.photo-gallery {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 30px;
}

.photo-item {
    background-color: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 0;
    overflow: hidden;
    transition: all 0.3s ease;
}

.photo-item:hover {
    border-color: #000000;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.gallery-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.photo-caption {
    padding: 15px;
    text-align: center;
}

.photo-title {
    font-weight: 600;
    color: #000000;
    margin-bottom: 6px;
    font-size: 0.95rem;
    letter-spacing: 0.01em;
}

.photo-date {
    font-size: 0.85rem;
    color: #666;
    font-weight: 400;
}

.photo-placeholder {
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f8f9fa;
    color: #6c757d;
}

.photo-placeholder i {
    font-size: 3rem;
    margin-bottom: 15px;
    color: #bdc3c7;
}

/* Insights Section Styles */
.insights-section {
    padding: 16px 40px 32px 40px;
    background-color: #ffffff;
    border-radius: 0;
    backdrop-filter: none;
    box-shadow: none;
    border: none;
    display: none;
}

/* Category Filter */
.category-filter {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
    margin: 30px auto;
    padding: 0 20px;
    max-width: 900px;
}

.filter-btn {
    padding: 8px 20px;
    background-color: #ffffff;
    border: 1px solid #000000;
    border-radius: 0;
    font-size: 0.9rem;
    font-weight: 500;
    color: #000000;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: inherit;
    letter-spacing: 0.02em;
    text-transform: uppercase;
}

.filter-btn:hover {
    background-color: #000000;
    color: #ffffff;
}

.filter-btn.active {
    background-color: #000000;
    border-color: #000000;
    color: #ffffff;
}

.papers-list {
    max-width: 950px;
    margin: 30px auto 0;
    padding: 0 20px;
}

.paper-item {
    display: flex;
    align-items: flex-start;
    gap: 24px;
    padding: 24px;
    margin-bottom: 16px;
    background-color: #ffffff;
    border: 1px solid #e5e5e5;
    border-left: 3px solid #000000;
    border-radius: 0;
    transition: all 0.2s ease;
    position: relative;
}

.paper-item:hover {
    border-left-color: #000000;
    border-color: #000000;
    background-color: #fafafa;
}

.paper-number {
    font-size: 1.2rem;
    font-weight: 700;
    color: #000000;
    background-color: #ffffff;
    min-width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #000000;
    border-radius: 0;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
}

.paper-content {
    flex: 1;
    position: relative;
    z-index: 1;
}

.paper-link {
    text-decoration: none;
    display: block;
}

.paper-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    flex-wrap: wrap;
    gap: 10px;
}

.paper-category {
    display: inline-block;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.paper-category.ml {
    background-color: #000000;
    color: #ffffff;
    border: 1px solid #000000;
}

.paper-category.cv {
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #000000;
}

.paper-category.nlp {
    background-color: #333333;
    color: #ffffff;
    border: 1px solid #333333;
}

.paper-category.robotics {
    background-color: #666666;
    color: #ffffff;
    border: 1px solid #666666;
}

.paper-date {
    font-size: 0.85rem;
    color: #666;
    font-weight: 500;
}

.paper-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #000000;
    margin-bottom: 8px;
    transition: color 0.2s ease;
    letter-spacing: -0.01em;
}

.paper-link:hover .paper-title {
    color: #333;
}

.paper-description {
    font-size: 0.9rem;
    color: #666;
    line-height: 1.6;
    margin: 0;
}

.paper-meta {
    font-size: 0.95rem;
    color: #6c757d;
    margin: 0;
}

/* Publications Section Styles */
.publications-section {
    padding: 40px 0;
}

.publications-content {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
}

.publication-item {
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    margin-bottom: 30px;
}

.publication-item h3 {
    color: #2c3e50;
    margin-bottom: 15px;
    font-size: 1.3rem;
}

.publication-item ul {
    margin: 15px 0;
    padding-left: 20px;
}

.publication-item li {
    margin-bottom: 8px;
    color: #555;
}

.publication-placeholder {
    text-align: center;
    padding: 40px;
    background-color: #f8f9fa;
    border-radius: 8px;
    color: #6c757d;
    font-style: italic;
}

/* Archive Section Styles */
.archive-section {
    padding: 16px 40px 32px 40px;
    display: none;
    background-color: #ffffff;
    border-radius: 0;
    max-width: 720px;
    margin: 0 auto;
}

.archive-list {
    margin-top: 24px;
}

.archive-empty {
    color: #6c757d;
    font-size: 1rem;
    margin-top: 20px;
}

.archive-empty code {
    background: #f1f3f4;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9em;
}

.archive-card {
    display: block;
    padding: 20px 0;
    border-bottom: 1px solid #e5e5e5;
    cursor: pointer;
    transition: all 0.2s ease;
    text-decoration: none;
    color: inherit;
}

.archive-card:hover {
    border-bottom-color: #000000;
    padding-left: 8px;
}

.archive-date {
    display: block;
    font-size: 0.8rem;
    color: #666;
    margin-bottom: 8px;
    font-weight: 500;
    letter-spacing: 0.02em;
    text-transform: uppercase;
}

.archive-card-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #000000;
    margin: 0;
    letter-spacing: -0.01em;
    line-height: 1.4;
}

.archive-card:hover .archive-card-title {
    color: #000000;
}

.archive-post-detail {
    margin-top: 0;
}

.archive-post-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid #e5e5e5;
}

.archive-back-btn {
    display: inline-flex;
    align-items: center;
    padding: 8px 0;
    background: none;
    border: none;
    font-size: 0.9rem;
    color: #000000;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.2s ease;
    font-weight: 500;
}

.archive-back-btn:hover {
    color: #666;
}

.archive-delete-btn {
    display: inline-flex;
    align-items: center;
    padding: 6px 16px;
    background: #ffffff;
    border: 1px solid #000000;
    font-size: 0.85rem;
    color: #000000;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.2s ease;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.02em;
}

.archive-delete-btn:hover {
    background: #000000;
    color: #ffffff;
}

.archive-post-body {
    margin-bottom: 40px;
}

.archive-post-header {
    margin-bottom: 24px;
}

.archive-post-header time {
    display: block;
    font-size: 0.9rem;
    color: #6c757d;
    margin-bottom: 8px;
}

.archive-post-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #000000;
    margin: 0;
    letter-spacing: -0.02em;
    line-height: 1.3;
}

.archive-post-content {
    font-size: 1rem;
    line-height: 1.75;
    color: #1a1a1a;
}

.archive-post-content p {
    margin-bottom: 1em;
}

.archive-post-content p:last-child {
    margin-bottom: 0;
}

.archive-post-content a {
    color: #000000;
    text-decoration: underline;
    text-decoration-color: #999;
    text-underline-offset: 2px;
}

.archive-post-content a:hover {
    text-decoration-color: #000000;
}

.archive-post-content code {
    background: #f5f5f5;
    padding: 2px 6px;
    border: 1px solid #e5e5e5;
    border-radius: 0;
    font-size: 0.9em;
    color: #000000;
}

.archive-write-toggle {
    display: inline-block;
    margin-bottom: 20px;
    padding: 10px 20px;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 0;
    font-size: 0.9rem;
    font-weight: 500;
    color: #000000;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.2s ease;
    text-transform: uppercase;
    letter-spacing: 0.02em;
}

.archive-write-toggle:hover {
    background: #000000;
    color: #ffffff;
}

.archive-write-form {
    margin-bottom: 28px;
    padding: 24px;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 0;
}

.archive-write-form label {
    display: block;
    font-size: 0.9rem;
    font-weight: 500;
    color: #333;
    margin-bottom: 6px;
}

.archive-write-input,
.archive-write-textarea {
    width: 100%;
    padding: 10px 12px;
    margin-bottom: 16px;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    font-size: 1rem;
    font-family: inherit;
}

.archive-write-textarea {
    min-height: 160px;
    resize: vertical;
}

.archive-write-actions {
    display: flex;
    gap: 12px;
}

.archive-write-submit,
.archive-write-cancel {
    padding: 10px 20px;
    border-radius: 6px;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    font-family: inherit;
}

.archive-write-submit {
    background: #000000;
    color: #ffffff;
    border: 1px solid #000000;
}

.archive-write-submit:hover {
    background: #333333;
    border-color: #333333;
}

.archive-write-cancel {
    background: #ffffff;
    border: 1px solid #000000;
    color: #000000;
}

.archive-write-cancel:hover {
    background: #f5f5f5;
}

body.dark-mode .archive-write-toggle {
    background: #ffffff;
    border-color: #ffffff;
    color: #000000;
}

body.dark-mode .archive-write-toggle:hover {
    background: #000000;
    border-color: #ffffff;
    color: #ffffff;
}

body.dark-mode .archive-write-form {
    background: #1a1a1a;
    border-color: #ffffff;
}

body.dark-mode .archive-write-form label {
    color: #e0e0e0;
}

body.dark-mode .archive-write-input,
body.dark-mode .archive-write-textarea {
    background: #222;
    border-color: #444;
    color: #fff;
}

body.dark-mode .archive-write-submit {
    background: #ffffff;
    color: #000000;
    border-color: #ffffff;
}

body.dark-mode .archive-write-submit:hover {
    background: #333333;
    border-color: #333333;
    color: #ffffff;
}

body.dark-mode .archive-write-cancel {
    border-color: #ffffff;
    color: #ffffff;
    background: #1a1a1a;
}

body.dark-mode .archive-write-cancel:hover {
    background: #2a2a2a;
}

/* Contact Section Styles */
.contact-section {
    padding: 32px 40px;
    display: none;
    background-color: #ffffff;
    border-radius: 0;
    backdrop-filter: none;
    box-shadow: none;
    border: none;
}

.contact-content {
    max-width: 900px;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 25px;
    max-width: 800px;
    margin: 0 auto;
}

.contact-item {
    display: flex;
    align-items: flex-start;
    padding: 0;
    margin: 0;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 20px;
}

.contact-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
}

.contact-item i {
    font-size: 1rem;
    color: #000000;
    margin-right: 16px;
    width: 20px;
    text-align: center;
    flex-shrink: 0;
    margin-top: 2px;
}

.contact-item span {
    color: #1a1a1a;
    font-weight: 400;
    font-size: 0.95rem;
    line-height: 1.7;
}

.contact-item:last-child span {
    font-style: italic;
    color: #666;
}

.contact-social {
    border-top: 1px solid #e9ecef;
    padding-top: 40px;
}

.social-links {
    display: flex;
    flex-direction: row;
    gap: 15px;
    flex-wrap: wrap;
}

.social-link {
    display: inline-flex;
    align-items: center;
    padding: 12px 24px;
    background-color: transparent;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: all 0.3s ease;
}

.social-link:hover {
    background-color: #f8f9fa;
    border-color: #333;
    color: #333;
    transform: translateY(-2px);
}

.social-link i {
    margin-right: 8px;
    color: #666;
    font-size: 1.1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        padding: 10px;
    }

    .two-column-layout {
        grid-template-columns: 1fr;
        gap: 25px;
    }

    .name {
        font-size: 2rem;
    }

    .content-card {
        padding: 25px 15px 15px 15px;
        border-radius: 0;
        margin-bottom: 15px;
    }
    
    .main-content {
        margin-bottom: 15px;
    }

    .professional-info,
    .bio-section,
    .research-section,
    .hobby-section {
        font-size: 0.9rem;
        line-height: 1.7;
        margin-bottom: 20px;
    }
    
    .professional-info {
        margin-bottom: 18px;
    }
    
    .bio-section {
        margin-bottom: 18px;
    }
    
    .research-section {
        margin-bottom: 18px;
    }
    
    .hobby-section {
        margin-bottom: 0;
    }

    .professional-info p,
    .bio-section p,
    .research-section p {
        margin-bottom: 10px;
    }
    
    .hobby-section p {
        margin-bottom: 0;
    }
    
    .professional-info strong {
        font-size: 1rem;
    }

    .research-overview {
        padding: 20px 15px;
    }

    .section-title {
        font-size: 1.5rem;
        margin-bottom: 15px;
    }

    .section-intro {
        font-size: 0.9rem;
        margin-bottom: 20px;
    }

    .research-areas {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .research-area {
        padding: 20px;
    }

    .research-area h3 {
        font-size: 1.1rem;
        margin-bottom: 10px;
    }

    .research-area p {
        font-size: 0.9rem;
        line-height: 1.6;
    }

    .cv-section {
        min-height: auto;
        height: auto;
        padding: 80px 0 20px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
    
    .cv-preview {
        width: 100%;
        height: calc(100vh - 120px);
        min-height: 500px;
        max-height: 800px;
    }
    
    .cv-content {
        padding: 0 15px;
        width: 100%;
        max-width: 100%;
    }
    
    .cv-content iframe {
        min-height: 500px;
        height: calc(100vh - 120px);
        max-height: 800px;
    }
    
    .cv-content,
    .photo-gallery {
        padding: 0 10px;
    }

    .photos-section {
        padding: 20px 15px;
    }

    .photo-grid {
        grid-template-columns: 1fr;
        gap: 15px;
        margin-top: 20px;
    }

    .photo-item {
        border-radius: 8px;
    }

    .photo-caption {
        padding: 12px;
    }

    .photo-title {
        font-size: 0.95rem;
        margin-bottom: 5px;
    }

    .photo-date {
        font-size: 0.8rem;
    }

    .archive-section {
        padding: 20px 16px 40px;
    }

    .archive-card {
        padding: 16px 0;
    }

    .archive-card-title {
        font-size: 1.05rem;
    }

    .archive-post-title {
        font-size: 1.4rem;
    }

    .insights-section {
        padding: 20px 15px;
    }

    .papers-list {
        padding: 0 10px;
        margin-top: 20px;
    }

    .footer {
        padding: 20px 0;
        margin-top: 40px;
    }

    .footer-content {
        padding: 0 15px;
    }

    .footer-top {
        flex-direction: column;
        gap: 20px;
        margin-bottom: 20px;
    }

    .footer-left {
        margin-bottom: 0;
    }

    .footer-right {
        margin-bottom: 0;
    }

    .footer-bottom {
        padding-top: 15px;
        margin-top: 15px;
        border-top: 1px solid #444;
    }

    .copyright {
        text-align: center;
    }
}

/* Mobile Header Optimization */
@media (max-width: 768px) {
    .header {
        padding: 12px 0;
    }
    
    .header-inner {
        padding: 0 12px;
        gap: 12px;
    }
    
    .header-name {
        font-size: 1.1rem;
    }
    
    .navigation {
        gap: 6px;
        flex-wrap: nowrap;
        overflow-x: auto;
        padding: 0 4px;
        justify-content: flex-end;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
    }
    
    .navigation::-webkit-scrollbar {
        display: none;
    }
    
    .nav-link {
        font-size: 0.75rem;
        padding: 6px 10px;
        white-space: nowrap;
        flex-shrink: 0;
        font-weight: 500;
    }
    
    .theme-toggle {
        width: 32px;
        height: 32px;
        top: 10px;
        right: 12px;
    }
    
    .theme-toggle i {
        font-size: 0.9rem;
    }
    
    body {
        padding-top: 64px;
    }
    
    .footer-right {
        display: none;
    }
    
    /* Insights Section Mobile Optimization */
    .paper-item {
        padding: 15px;
        gap: 12px;
        margin-bottom: 15px;
    }
    
    .paper-number {
        min-width: 40px;
        height: 40px;
        font-size: 0.9rem;
        border-radius: 8px;
    }
    
    .paper-title {
        font-size: 0.95rem;
        line-height: 1.3;
        margin-bottom: 5px;
    }
    
    .paper-description {
        font-size: 0.85rem;
        line-height: 1.4;
    }
    
    .paper-category {
        font-size: 0.75rem;
        padding: 3px 8px;
    }
    
    .paper-date {
        font-size: 0.75rem;
    }
    
    .category-filter {
        gap: 6px;
        margin: 15px auto;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .filter-btn {
        padding: 6px 12px;
        font-size: 0.75rem;
    }
    
    /* Contact Section Mobile Optimization */
    .contact-section {
        padding: 40px 20px 100px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        min-height: auto;
    }
    
    .contact-content {
        gap: 0;
        padding: 0;
        align-items: stretch;
        justify-content: flex-start;
        width: 100%;
        max-width: 100%;
    }
    
    .contact-info {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
    }
    
    .contact-item {
        padding-bottom: 18px;
        font-size: 0.95rem;
        border-bottom: 1px solid #e9ecef;
        align-items: flex-start;
    }
    
    .contact-item:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }
    
    .contact-item i {
        font-size: 1.1rem;
        margin-right: 15px;
        margin-top: 2px;
        width: 22px;
        flex-shrink: 0;
        color: #666;
    }
    
    .contact-item span {
        line-height: 1.6;
        word-break: break-word;
    }
    
    .contact-item:last-child span {
        font-size: 0.9rem;
        line-height: 1.7;
    }
    
    /* Profile Image Mobile Optimization */
    .profile-image-container {
        max-width: 220px;
        margin-bottom: 20px;
    }
    
    .profile-social-icons {
        gap: 18px;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    
    .social-icon-link {
        width: 38px;
        height: 38px;
        font-size: 1.1rem;
    }
    
    .two-column-layout {
        gap: 25px;
    }
    
    .left-column {
        align-items: center;
    }
    
    /* Hide email address if it appears in home section on mobile */
    .profile-email {
        display: none !important;
    }
    
    /* Ensure main-content doesn't show contact info */
    .main-content .contact-item,
    .main-content .contact-info {
        display: none !important;
    }
    
    /* Hide CV and Contact sections by default on mobile */
    #cv.cv-section,
    #contact.contact-section {
        display: none !important;
    }
    
    /* Only show when explicitly set by JavaScript with inline style */
    #cv.cv-section[style*="flex"] {
        display: flex !important;
    }
    
    #contact.contact-section[style*="block"] {
        display: block !important;
    }
}

/* Dark Mode Styles */
body.dark-mode {
    background-color: #000000;
    color: #ffffff;
}

body.dark-mode::before {
    background-color: rgba(0, 0, 0, 0.85);
}

body.dark-mode .header {
    background-color: #000000;
    border-bottom: 1px solid #333;
}

body.dark-mode .header-name {
    color: #ffffff;
}

body.dark-mode .nav-link {
    color: #ffffff;
}

body.dark-mode .nav-link:hover {
    color: #ffffff;
    background-color: #1a1a1a;
}

body.dark-mode .nav-link.active {
    color: #ffffff;
    background-color: #2a2a2a;
}

body.dark-mode .main-content,
body.dark-mode .content-card,
body.dark-mode .research-overview,
body.dark-mode .cv-section,
body.dark-mode .photos-section,
body.dark-mode .insights-section,
body.dark-mode .archive-section,
body.dark-mode .contact-section {
    background-color: #000000;
    color: #ffffff;
}

body.dark-mode .section-title {
    color: #ffffff;
}

body.dark-mode .archive-section .archive-empty,
body.dark-mode .archive-section .archive-empty code {
    color: #999;
    background: #222;
}

body.dark-mode .archive-card {
    border-bottom-color: #333;
}

body.dark-mode .archive-card:hover {
    background-color: #1a1a1a;
}

body.dark-mode .archive-date {
    color: #999;
}

body.dark-mode .archive-card-title {
    color: #ffffff;
}

body.dark-mode .archive-card:hover .archive-card-title {
    color: #ffffff;
}

body.dark-mode .archive-back-btn {
    color: #ffffff;
}

body.dark-mode .archive-back-btn:hover {
    color: #999;
}

body.dark-mode .archive-delete-btn {
    background: #ffffff;
    border-color: #ffffff;
    color: #000000;
}

body.dark-mode .archive-delete-btn:hover {
    background: #000000;
    border-color: #ffffff;
    color: #ffffff;
}

body.dark-mode .archive-post-actions {
    border-bottom-color: #333;
}

body.dark-mode .archive-post-title {
    color: #ffffff;
}

body.dark-mode .archive-post-content,
body.dark-mode .archive-post-content p {
    color: #e0e0e0;
}

body.dark-mode .archive-post-content a {
    color: #ffffff;
    text-decoration-color: #666;
}

body.dark-mode .archive-post-content a:hover {
    text-decoration-color: #ffffff;
}

body.dark-mode .archive-post-content code {
    background: #222;
    color: #e0e0e0;
}

body.dark-mode .archive-post-header time {
    color: #999;
}

body.dark-mode .section-intro {
    color: #ffffff;
}

body.dark-mode .research-area h3 {
    color: #ffffff;
}

body.dark-mode .research-area p {
    color: #ffffff;
}

body.dark-mode .professional-info,
body.dark-mode .professional-info p,
body.dark-mode .bio-section,
body.dark-mode .bio-section *,
body.dark-mode .bio-section p,
body.dark-mode .bio-section strong,
body.dark-mode .research-section,
body.dark-mode .research-section *,
body.dark-mode .research-section p,
body.dark-mode .hobby-section,
body.dark-mode .hobby-section *,
body.dark-mode .hobby-section p {
    color: #ffffff;
}

body.dark-mode .profile-social-link {
    color: #ffffff;
}

body.dark-mode .profile-social-link:hover {
    color: #4a9eff;
}

body.dark-mode .profile-email {
    color: #ffffff;
    border-top-color: #333;
}

body.dark-mode .social-icon-link {
    background-color: #333;
    color: #ffffff;
}

body.dark-mode .social-icon-link:hover {
    background-color: #555;
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
}

body.dark-mode .social-icon-link i {
    color: #ffffff;
}

body.dark-mode .theme-toggle {
    border-color: #333;
    background-color: #000000;
}

body.dark-mode .theme-toggle:hover {
    background-color: #1a1a1a;
    border-color: #555;
}

body.dark-mode .theme-toggle i {
    color: #ffffff;
}

body.dark-mode .link {
    color: #4a9eff;
}

body.dark-mode .link:hover {
    color: #6bb4ff;
}

body.dark-mode .photo-item {
    background-color: #808080;
}

body.dark-mode .photo-title,
body.dark-mode .photo-date {
    color: #ffffff;
}

body.dark-mode .paper-item {
    background-color: #1a1a1a;
    border-color: #333;
    border-left-color: #ffffff;
}

body.dark-mode .paper-item:hover {
    background-color: #2a2a2a;
    border-color: #ffffff;
    border-left-color: #ffffff;
}

body.dark-mode .paper-title,
body.dark-mode .paper-description {
    color: #ffffff;
}

body.dark-mode .paper-category,
body.dark-mode .paper-date {
    color: #ffffff;
}

body.dark-mode .contact-item {
    color: #ffffff;
    border-bottom-color: #333;
}

body.dark-mode .contact-item i {
    color: #999;
}

body.dark-mode .contact-item span {
    color: #ffffff;
}

body.dark-mode .contact-social {
    border-top-color: #333;
}

body.dark-mode .social-link {
    color: #ffffff;
    border-color: #444;
    background-color: #1a1a1a;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

body.dark-mode .social-link:hover,
body.dark-mode .social-link:active {
    color: #ffffff;
    background-color: #2a2a2a;
    border-color: #666;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

body.dark-mode .social-link i {
    color: #cccccc;
}

body.dark-mode .footer {
    background-color: #2c2c2c;
    border-top-color: #444;
    color: #ffffff;
}

body.dark-mode .footer .institution-name,
body.dark-mode .footer .contact-detail,
body.dark-mode .footer .copyright {
    color: #ffffff;
}

body.dark-mode .footer .kaist-logo {
    filter: brightness(0) invert(1);
}
