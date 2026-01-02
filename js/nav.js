/* =========================================
   NAV.JS v8.1 - Mega Menu Dos Columnas
   Diseño profesional Stripe/Vercel
   CORREGIDO: Hover estable
   ========================================= */

(function() {
  'use strict';

  // ═══════════════════════════════════════
  // ICONOS SVG
  // ═══════════════════════════════════════
  const ICONS = {
    book: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    folder: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    database: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    server: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
    network: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="6"/><rect x="16" y="16" width="6" height="6"/><rect x="2" y="16" width="6" height="6"/><path d="M5 16v-4h14v4"/><line x1="12" y1="12" x2="12" y2="8"/></svg>',
    cloud: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
    layers: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    activity: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
    chevronDown: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 15 12 9 18 15"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    lightbulb: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    fileText: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
    searchX: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="8" x2="14" y2="14"/><line x1="14" y1="8" x2="8" y2="14"/></svg>'
  };

  // ═══════════════════════════════════════
  // COLORES POR CATEGORÍA
  // ═══════════════════════════════════════
  const CATEGORY_COLORS = {
    'Ciberseguridad': 'red',
    'Bases de Datos': 'green',
    'Administración de Sistemas': 'blue',
    'Redes e Internet': 'cyan',
    'Cloud y Virtualización': 'purple'
  };

  const CATEGORY_ICONS = {
    'Ciberseguridad': 'shield',
    'Bases de Datos': 'database',
    'Administración de Sistemas': 'server',
    'Redes e Internet': 'network',
    'Cloud y Virtualización': 'cloud'
  };

  // ═══════════════════════════════════════
  // ÍNDICE DE BÚSQUEDA
  // ═══════════════════════════════════════
  let searchIndex = [];

  function buildSearchIndex() {
    searchIndex = [];
    
    NAV_TREE.forEach(menu => {
      if (menu.type !== 'mega' || !menu.sections) return;
      
      menu.sections.forEach(section => {
        section.items.forEach(item => {
          searchIndex.push({
            label: item.label,
            desc: item.desc || '',
            href: item.href,
            icon: item.icon,
            color: item.color,
            category: section.title,
            menu: menu.label,
            keywords: item.keywords || [],
            type: 'subcategory'
          });
          
          if (item.subitems) {
            item.subitems.forEach(sub => {
              searchIndex.push({
                label: sub.label,
                href: sub.href,
                category: section.title,
                subcategory: item.label,
                menu: menu.label,
                keywords: sub.keywords || [],
                type: 'article'
              });
            });
          }
        });
      });
    });
  }

  function searchByKeywords(query, menuLabel) {
    if (!query || query.length < 2) return [];
    
    const terms = query.toLowerCase().split(/\s+/);
    
    let results = searchIndex.filter(item => {
      if (menuLabel && item.menu !== menuLabel) return false;
      
      const labelMatch = terms.some(t => item.label.toLowerCase().includes(t));
      const keywordMatch = item.keywords.some(kw => 
        terms.some(t => kw.toLowerCase().includes(t))
      );
      const descMatch = item.desc && terms.some(t => 
        item.desc.toLowerCase().includes(t)
      );
      
      return labelMatch || keywordMatch || descMatch;
    });
    
    results.sort((a, b) => {
      const aLabel = terms.some(t => a.label.toLowerCase().includes(t)) ? 2 : 0;
      const bLabel = terms.some(t => b.label.toLowerCase().includes(t)) ? 2 : 0;
      return bLabel - aLabel;
    });
    
    return results.slice(0, 10);
  }

  // ═══════════════════════════════════════
  // RENDER MEGA MENU
  // ═══════════════════════════════════════
  function renderMegaMenu(menu) {
    const sections = menu.sections || [];
    
    let categoriesHTML = '';
    let panelsHTML = '';
    
    sections.forEach((section, idx) => {
      const color = CATEGORY_COLORS[section.title] || 'blue';
      const icon = CATEGORY_ICONS[section.title] || 'folder';
      const articleCount = section.items.reduce((sum, item) => 
        sum + (item.subitems ? item.subitems.length : 0), 0
      );
      
      categoriesHTML += `
        <div class="mega-category ${idx === 0 ? 'active' : ''}" 
             data-category="${idx}" tabindex="0">
          <div class="mega-category-icon ${color}">
            ${ICONS[icon]}
          </div>
          <div class="mega-category-text">
            <span class="mega-category-name">${section.title}</span>
            <span class="mega-category-count">${articleCount} artículos</span>
          </div>
        </div>
      `;
      
      let panelContent = '';
      section.items.forEach(item => {
        const articleCount = item.subitems ? item.subitems.length : 0;
        
        panelContent += `
          <div class="mega-subcategory">
            <div class="mega-subcategory-header">
              <div class="mega-subcategory-left">
                <div class="mega-subcategory-icon">
                  ${ICONS[item.icon] || ICONS.fileText}
                </div>
                <span class="mega-subcategory-name">${item.label}</span>
              </div>
              <span class="mega-subcategory-count">${articleCount}</span>
            </div>
            <div class="mega-articles">
        `;
        
        if (item.subitems) {
          item.subitems.forEach(sub => {
            panelContent += `
              <a href="${sub.href}" class="mega-article">${sub.label}</a>
            `;
          });
        }
        
        panelContent += `
            </div>
          </div>
        `;
      });
      
      panelsHTML += `
        <div class="mega-panel ${idx === 0 ? 'active' : ''}" data-panel="${idx}">
          ${panelContent}
        </div>
      `;
    });
    
    return `
      <div class="mega-menu">
        <div class="mega-content">
          <div class="mega-body">
            <div class="mega-categories">
              ${categoriesHTML}
            </div>
            <div class="mega-detail">
              <div class="mega-detail-search">
                <div class="mega-search">
                  <span class="mega-search-icon">${ICONS.search}</span>
                  <input type="text" 
                         class="mega-search-input" 
                         placeholder="Buscar..."
                         data-menu="${menu.label}">
                </div>
              </div>
              <div class="mega-detail-content">
                ${panelsHTML}
              </div>
              <div class="mega-search-results"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ═══════════════════════════════════════
  // RENDER SEARCH RESULTS
  // ═══════════════════════════════════════
  function renderSearchResults(results, container) {
    if (results.length === 0) {
      container.innerHTML = `
        <div class="mega-search-empty">
          <div class="mega-search-empty-icon">${ICONS.searchX}</div>
          <span>Sin resultados</span>
        </div>
      `;
      return;
    }
    
    let html = '';
    results.forEach(item => {
      const path = item.subcategory 
        ? `${item.category} → ${item.subcategory}`
        : item.category;
      
      html += `
        <a href="${item.href}" class="mega-search-result">
          <div class="mega-search-result-icon">
            ${ICONS[item.icon] || ICONS.fileText}
          </div>
          <div class="mega-search-result-content">
            <div class="mega-search-result-title">${item.label}</div>
            <div class="mega-search-result-path">${path}</div>
          </div>
        </a>
      `;
    });
    
    container.innerHTML = html;
  }

  // ═══════════════════════════════════════
  // RENDER NAV COMPLETA
  // ═══════════════════════════════════════
  function renderNav() {
    const nav = document.getElementById('nav');
    if (!nav || typeof NAV_TREE === 'undefined') return;

    let leftHTML = '';
    
    NAV_TREE.forEach((item, index) => {
      if (item.type === 'mega') {
        leftHTML += `
          <div class="nav-item" data-index="${index}">
            <button class="nav-trigger" aria-expanded="false">
              <span class="nav-icon">${ICONS[item.icon] || ''}</span>
              <span>${item.label}</span>
              <span class="nav-chevron">${ICONS.chevronDown}</span>
            </button>
            ${renderMegaMenu(item)}
          </div>
        `;
      } else {
        leftHTML += `
          <a href="${item.href}" class="nav-link">
            <span class="nav-icon">${ICONS[item.icon] || ''}</span>
            <span>${item.label}</span>
          </a>
        `;
      }
    });

    nav.innerHTML = `
      <div class="menu-left">${leftHTML}</div>
      <div class="menu-right">
        <a href="#cv" class="btn-cv">
          Descargar CV
          <span class="btn-cv-icon">${ICONS.download}</span>
        </a>
      </div>
    `;

    if (!document.querySelector('.nav-backdrop')) {
      const backdrop = document.createElement('div');
      backdrop.className = 'nav-backdrop';
      document.body.appendChild(backdrop);
    }

    bindEvents();
    buildSearchIndex();
  }

  // ═══════════════════════════════════════
  // EVENTOS - VERSIÓN ESTABLE
  // ═══════════════════════════════════════
  function bindEvents() {
    const navItems = document.querySelectorAll('.nav-item');
    const backdrop = document.querySelector('.nav-backdrop');
    
    // Variable global para el timeout
    let globalCloseTimeout = null;
    
    navItems.forEach(item => {
      const trigger = item.querySelector('.nav-trigger');
      const megaMenu = item.querySelector('.mega-menu');
      
      // Función para abrir este menú
      function openMenu() {
        // Cancelar cualquier cierre pendiente
        if (globalCloseTimeout) {
          clearTimeout(globalCloseTimeout);
          globalCloseTimeout = null;
        }
        
        // Cerrar otros menús primero
        navItems.forEach(n => {
          if (n !== item && n.classList.contains('open')) {
            n.classList.remove('open');
            n.querySelector('.nav-trigger')?.setAttribute('aria-expanded', 'false');
          }
        });
        
        // Abrir este menú
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
        backdrop.classList.add('active');
        document.body.classList.add('menu-open');
      }
      
      // Función para cerrar menú con delay
      function scheduleClose() {
        globalCloseTimeout = setTimeout(() => {
          item.classList.remove('open');
          trigger.setAttribute('aria-expanded', 'false');
          
          const anyOpen = document.querySelector('.nav-item.open');
          if (!anyOpen) {
            backdrop.classList.remove('active');
            document.body.classList.remove('menu-open');
          }
          
          // Reset búsqueda
          const input = item.querySelector('.mega-search-input');
          const megaDetail = item.querySelector('.mega-detail');
          if (input) input.value = '';
          if (megaDetail) {
            const detailContent = megaDetail.querySelector('.mega-detail-content');
            const resultsContainer = megaDetail.querySelector('.mega-search-results');
            if (detailContent) detailContent.style.display = 'flex';
            if (resultsContainer) resultsContainer.classList.remove('active');
          }
        }, 300); // Delay más largo para estabilidad
      }
      
      // Bloquear scroll dentro del mega menu
      if (megaMenu) {
        megaMenu.addEventListener('wheel', (e) => {
          const detail = megaMenu.querySelector('.mega-detail-content');
          if (!detail) return;
          
          const isScrollingDown = e.deltaY > 0;
          const isScrollingUp = e.deltaY < 0;
          const isAtTop = detail.scrollTop === 0;
          const isAtBottom = detail.scrollTop + detail.clientHeight >= detail.scrollHeight - 1;
          
          if ((isScrollingDown && isAtBottom) || (isScrollingUp && isAtTop)) {
            e.preventDefault();
            e.stopPropagation();
          }
        }, { passive: false });
        
        // Mantener abierto mientras el mouse está en el mega menu
        megaMenu.addEventListener('mouseenter', () => {
          if (globalCloseTimeout) {
            clearTimeout(globalCloseTimeout);
            globalCloseTimeout = null;
          }
        });
        
        megaMenu.addEventListener('mouseleave', () => {
          scheduleClose();
        });
      }
      
      // Hover en el trigger
      trigger.addEventListener('mouseenter', () => {
        openMenu();
      });
      
      // Salir del trigger
      trigger.addEventListener('mouseleave', (e) => {
        // No cerrar si vamos hacia el mega menu
        const relatedTarget = e.relatedTarget;
        if (megaMenu && megaMenu.contains(relatedTarget)) {
          return;
        }
        scheduleClose();
      });
      
      // Click en trigger (para móviles y accesibilidad)
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        if (item.classList.contains('open')) {
          item.classList.remove('open');
          trigger.setAttribute('aria-expanded', 'false');
          backdrop.classList.remove('active');
          document.body.classList.remove('menu-open');
        } else {
          openMenu();
        }
      });
    });
    
    // Click en backdrop
    backdrop?.addEventListener('click', closeAll);
    
    // Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAll();
    });
    
    // Hover en categorías
    document.querySelectorAll('.mega-category').forEach(cat => {
      cat.addEventListener('mouseenter', () => {
        const idx = cat.dataset.category;
        const parent = cat.closest('.mega-content');
        
        parent.querySelectorAll('.mega-category').forEach(c => c.classList.remove('active'));
        cat.classList.add('active');
        
        parent.querySelectorAll('.mega-panel').forEach(p => p.classList.remove('active'));
        parent.querySelector(`.mega-panel[data-panel="${idx}"]`)?.classList.add('active');
      });
      
      cat.addEventListener('focus', () => cat.dispatchEvent(new Event('mouseenter')));
    });
    
    // Búsqueda
    document.querySelectorAll('.mega-search-input').forEach(input => {
      let timeout;
      
      input.addEventListener('input', (e) => {
        clearTimeout(timeout);
        const query = e.target.value.trim();
        const menuLabel = input.dataset.menu;
        const megaDetail = input.closest('.mega-detail');
        const detailContent = megaDetail.querySelector('.mega-detail-content');
        const resultsContainer = megaDetail.querySelector('.mega-search-results');
        
        timeout = setTimeout(() => {
          if (query.length >= 2) {
            detailContent.style.display = 'none';
            resultsContainer.classList.add('active');
            const results = searchByKeywords(query, menuLabel);
            renderSearchResults(results, resultsContainer);
          } else {
            detailContent.style.display = 'flex';
            resultsContainer.classList.remove('active');
          }
        }, 150);
      });
    });
    
    // Hide on scroll
    let lastScroll = 0;
    const topbar = document.querySelector('.topbar');
    
    window.addEventListener('scroll', () => {
      if (document.body.classList.contains('menu-open')) {
        return;
      }
      
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > lastScroll && currentScroll > 100) {
        topbar.classList.add('hidden');
        closeAll();
      } else {
        topbar.classList.remove('hidden');
      }
      
      lastScroll = currentScroll;
    }, { passive: true });
  }
  
  function closeAll() {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('open');
      item.querySelector('.nav-trigger')?.setAttribute('aria-expanded', 'false');
      
      const input = item.querySelector('.mega-search-input');
      const megaDetail = item.querySelector('.mega-detail');
      if (input) input.value = '';
      if (megaDetail) {
        const detailContent = megaDetail.querySelector('.mega-detail-content');
        const resultsContainer = megaDetail.querySelector('.mega-search-results');
        if (detailContent) detailContent.style.display = 'flex';
        if (resultsContainer) resultsContainer.classList.remove('active');
      }
    });
    document.querySelector('.nav-backdrop')?.classList.remove('active');
    document.body.classList.remove('menu-open');
  }

  // ═══════════════════════════════════════
  // INIT
  // ═══════════════════════════════════════
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderNav);
  } else {
    renderNav();
  }

})();
