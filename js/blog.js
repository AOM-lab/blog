/* =============================================
   BLOG AOM-LAB - JavaScript v2.0
   Interactividad del esquema y navegación
   ============================================= */

(function() {
  'use strict';

  // =============================================
  // INIT
  // =============================================
  function init() {
    setupSchemaToggle();
    setupBranchToggle();
    setupSmoothScroll();
  }

  // =============================================
  // TOGGLE TEORÍA / PORTAFOLIO
  // =============================================
  function setupSchemaToggle() {
    const toggleBtns = document.querySelectorAll('.schema-toggle-btn');
    const schemaTeoria = document.getElementById('schema-teoria');
    const schemaPortafolio = document.getElementById('schema-portafolio');

    if (!toggleBtns.length) return;

    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.schema;

        // Update buttons
        toggleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Show/hide schemas
        if (target === 'teoria') {
          schemaTeoria.style.display = 'block';
          schemaPortafolio.style.display = 'none';
        } else {
          schemaTeoria.style.display = 'none';
          schemaPortafolio.style.display = 'block';
        }
      });
    });
  }

  // =============================================
  // EXPAND/COLLAPSE BRANCHES
  // =============================================
  function setupBranchToggle() {
    const branchHeaders = document.querySelectorAll('.branch-header');

    branchHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('i:first-child');
        const isExpanded = header.dataset.expanded === 'true';

        if (isExpanded) {
          // Collapse
          content.style.display = 'none';
          header.dataset.expanded = 'false';
          icon.classList.remove('fa-chevron-down');
          icon.classList.add('fa-chevron-right');
        } else {
          // Expand
          content.style.display = 'block';
          header.dataset.expanded = 'true';
          icon.classList.remove('fa-chevron-right');
          icon.classList.add('fa-chevron-down');
        }
      });
    });
  }

  // =============================================
  // SMOOTH SCROLL
  // =============================================
  function setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // =============================================
  // CATEGORY BUTTONS (future: filter articles)
  // =============================================
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.dataset.target;
      
      // Scroll to schema section
      const schemaSection = document.getElementById('esquema');
      if (schemaSection) {
        schemaSection.scrollIntoView({ behavior: 'smooth' });
        
        // Expand corresponding branch after scroll
        setTimeout(() => {
          // Map category to branch color
          const categoryMap = {
            'ciberseguridad': '#ef4444',
            'bbdd': '#22c55e',
            'sysadmin': '#3b82f6',
            'redes': '#06b6d4',
            'cloud': '#a855f7'
          };
          
          const color = categoryMap[target];
          if (color) {
            const branches = document.querySelectorAll('.tree-branch');
            branches.forEach(branch => {
              const icon = branch.querySelector('.branch-icon');
              if (icon && icon.style.getPropertyValue('--branch-color') === color) {
                const header = branch.querySelector('.branch-header');
                if (header && header.dataset.expanded === 'false') {
                  header.click();
                }
              }
            });
          }
        }, 600);
      }
    });
  });

  // =============================================
  // RUN
  // =============================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
