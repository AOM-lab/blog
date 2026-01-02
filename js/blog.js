/* =============================================
   BLOG AOM-LAB - JavaScript v3.0
   Tabs, búsqueda y toggle de ramas
   ============================================= */

(function() {
  'use strict';

  // =============================================
  // INIT
  // =============================================
  function init() {
    setupCategoryTabs();
    setupBranchToggle();
    setupSearch();
    setupSmoothScroll();
  }

  // =============================================
  // CATEGORY TABS
  // =============================================
  function setupCategoryTabs() {
    const tabs = document.querySelectorAll('.category-tab');
    const panels = document.querySelectorAll('.schema-panel');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const category = tab.dataset.category;

        // Update active tab
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Show corresponding panel
        panels.forEach(panel => {
          panel.classList.remove('active');
          if (panel.id === `panel-${category}`) {
            panel.classList.add('active');
          }
        });
      });
    });
  }

  // =============================================
  // BRANCH TOGGLE (expand/collapse)
  // =============================================
  function setupBranchToggle() {
    const branchHeaders = document.querySelectorAll('.branch-header');

    branchHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const arrow = header.querySelector('.branch-arrow');
        const isExpanded = header.dataset.expanded === 'true';

        if (isExpanded) {
          // Collapse
          content.hidden = true;
          header.dataset.expanded = 'false';
          arrow.classList.remove('fa-chevron-down');
          arrow.classList.add('fa-chevron-right');
        } else {
          // Expand
          content.hidden = false;
          header.dataset.expanded = 'true';
          arrow.classList.remove('fa-chevron-right');
          arrow.classList.add('fa-chevron-down');
        }
      });
    });
  }

  // =============================================
  // SEARCH
  // =============================================
  function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    let debounceTimer;

    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const query = e.target.value.toLowerCase().trim();
        filterArticles(query);
      }, 300);
    });
  }

  function filterArticles(query) {
    const articles = document.querySelectorAll('.article-list li');
    let visibleCount = 0;

    articles.forEach(article => {
      const text = article.textContent.toLowerCase();
      const match = !query || text.includes(query);
      
      article.style.display = match ? '' : 'none';
      if (match) visibleCount++;
    });

    // Update search hint
    const hint = document.querySelector('.search-hint');
    if (hint) {
      if (query) {
        hint.textContent = `${visibleCount} resultados`;
      } else {
        hint.textContent = '119 artículos disponibles';
      }
    }

    // Auto-expand branches with matches when searching
    if (query) {
      document.querySelectorAll('.tree-branch').forEach(branch => {
        const hasVisibleArticles = branch.querySelectorAll('.article-list li[style=""]').length > 0 ||
                                   branch.querySelectorAll('.article-list li:not([style])').length > 0;
        
        const header = branch.querySelector('.branch-header');
        const content = branch.querySelector('.branch-content');
        const arrow = header.querySelector('.branch-arrow');

        if (hasVisibleArticles && header.dataset.expanded === 'false') {
          content.hidden = false;
          header.dataset.expanded = 'true';
          arrow.classList.remove('fa-chevron-right');
          arrow.classList.add('fa-chevron-down');
        }
      });
    }
  }

  // =============================================
  // SMOOTH SCROLL
  // =============================================
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offset = 80;
          const position = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: position, behavior: 'smooth' });
        }
      });
    });
  }

  // =============================================
  // RUN
  // =============================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
