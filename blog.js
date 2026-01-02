/* =============================================
   BLOG AOM-LAB - JavaScript v1.0
   Gestión de artículos, filtros y búsqueda
   ============================================= */

(function() {
  'use strict';

  // =============================================
  // DATOS DE ARTÍCULOS
  // =============================================
  const ARTICLES = [
    
    // === TEORÍA Y CONCEPTOS ===
    {
      id: 1,
      category: 'teoria',
      title: 'Fundamentos del análisis forense digital',
      excerpt: 'Principios básicos, cadena de custodia y metodologías estándar para investigaciones forenses.',
      date: '2025-01-15',
      url: 'articulos/teoria/forense-fundamentos.html'
    },
    {
      id: 2,
      category: 'teoria',
      title: 'SIEM: Arquitectura y correlación de eventos',
      excerpt: 'Cómo funcionan los sistemas SIEM, arquitectura de componentes y reglas de correlación.',
      date: '2025-01-10',
      url: 'articulos/teoria/siem-arquitectura.html'
    },
    {
      id: 3,
      category: 'teoria',
      title: 'Hardening en sistemas Linux',
      excerpt: 'Configuraciones de seguridad, permisos, SELinux y bastionado de servicios.',
      date: '2025-01-05',
      url: 'articulos/teoria/hardening-linux.html'
    },
    {
      id: 4,
      category: 'teoria',
      title: 'Modelo OSI y TCP/IP en profundidad',
      excerpt: 'Análisis detallado de las capas de red y cómo afectan a la seguridad.',
      date: '2024-12-20',
      url: 'articulos/teoria/osi-tcpip.html'
    },
    {
      id: 5,
      category: 'teoria',
      title: 'Docker: Fundamentos y arquitectura',
      excerpt: 'Contenedores, imágenes, volúmenes y networking en Docker.',
      date: '2024-12-15',
      url: 'articulos/teoria/docker-fundamentos.html'
    },
    
    // === PORTAFOLIO ===
    {
      id: 10,
      category: 'portafolio',
      title: 'Despliegue de SIEM con ELK Stack',
      excerpt: 'Implementación completa de un sistema SIEM usando Elasticsearch, Logstash y Kibana.',
      date: '2025-01-12',
      url: 'articulos/portafolio/siem-elk.html'
    },
    {
      id: 11,
      category: 'portafolio',
      title: 'Cluster Proxmox con alta disponibilidad',
      excerpt: 'Configuración de un cluster de virtualización con HA, migración en vivo y Ceph.',
      date: '2025-01-08',
      url: 'articulos/portafolio/proxmox-ha.html'
    },
    {
      id: 12,
      category: 'portafolio',
      title: 'Infraestructura completa con Docker Compose',
      excerpt: 'Stack de servicios containerizados para entorno de desarrollo y producción.',
      date: '2024-12-28',
      url: 'articulos/portafolio/docker-compose-infra.html'
    },
    {
      id: 13,
      category: 'portafolio',
      title: 'VPN Site-to-Site con WireGuard',
      excerpt: 'Conexión segura entre dos sedes usando WireGuard sobre pfSense.',
      date: '2024-12-18',
      url: 'articulos/portafolio/vpn-wireguard.html'
    },
    
    // === LABORATORIO ===
    {
      id: 20,
      category: 'laboratorio',
      title: 'Laboratorio de pentesting con Kali Linux',
      excerpt: 'Montaje de un entorno de pruebas para practicar técnicas de hacking ético.',
      date: '2025-01-14',
      url: 'articulos/laboratorio/lab-pentesting.html'
    },
    {
      id: 21,
      category: 'laboratorio',
      title: 'Honeypot con T-Pot: Capturando atacantes',
      excerpt: 'Despliegue de honeypots para analizar técnicas de ataque reales.',
      date: '2025-01-02',
      url: 'articulos/laboratorio/honeypot-tpot.html'
    },
    {
      id: 22,
      category: 'laboratorio',
      title: 'Análisis de malware en sandbox',
      excerpt: 'Técnicas de análisis dinámico de malware en entorno aislado.',
      date: '2024-12-22',
      url: 'articulos/laboratorio/malware-sandbox.html'
    },
    
    // === CASOS REALES ===
    {
      id: 30,
      category: 'casos',
      title: 'CrowdStrike 2024: Análisis del incidente',
      excerpt: 'Desglose técnico de la actualización que paralizó sistemas en todo el mundo.',
      date: '2025-01-11',
      url: 'articulos/casos/crowdstrike-2024.html'
    },
    {
      id: 31,
      category: 'casos',
      title: 'GitLab 2017: El rm -rf que borró producción',
      excerpt: 'Cómo un comando mal ejecutado borró 300GB de datos y las lecciones aprendidas.',
      date: '2024-12-30',
      url: 'articulos/casos/gitlab-2017.html'
    },
    {
      id: 32,
      category: 'casos',
      title: 'Facebook 2021: 6 horas de caída global',
      excerpt: 'Análisis del cambio BGP que dejó sin servicio a millones de usuarios.',
      date: '2024-12-10',
      url: 'articulos/casos/facebook-2021.html'
    },
    
    // === PROYECTOS PERSONALES ===
    {
      id: 40,
      category: 'proyectos',
      title: 'Script de auditoría de seguridad en Bash',
      excerpt: 'Herramienta automatizada para verificar configuraciones de seguridad en Linux.',
      date: '2025-01-13',
      url: 'articulos/proyectos/audit-script.html'
    },
    {
      id: 41,
      category: 'proyectos',
      title: 'Dashboard de monitorización con Grafana',
      excerpt: 'Panel personalizado para visualizar métricas de infraestructura.',
      date: '2024-12-25',
      url: 'articulos/proyectos/grafana-dashboard.html'
    },
    {
      id: 42,
      category: 'proyectos',
      title: 'Bot de alertas en Telegram con Python',
      excerpt: 'Sistema de notificaciones para eventos de seguridad y monitorización.',
      date: '2024-12-05',
      url: 'articulos/proyectos/telegram-bot.html'
    }
  ];

  // =============================================
  // NOMBRES DE CATEGORÍAS
  // =============================================
  const CATEGORY_NAMES = {
    teoria: 'Teoría',
    portafolio: 'Portafolio',
    laboratorio: 'Laboratorio',
    casos: 'Casos Reales',
    proyectos: 'Proyectos'
  };

  const CATEGORY_ICONS = {
    teoria: 'fa-book',
    portafolio: 'fa-briefcase',
    laboratorio: 'fa-flask',
    casos: 'fa-triangle-exclamation',
    proyectos: 'fa-rocket'
  };

  // =============================================
  // ESTADO
  // =============================================
  let currentFilter = 'all';
  let searchQuery = '';

  // =============================================
  // INICIALIZACIÓN
  // =============================================
  function init() {
    updateStats();
    renderRecentArticles();
    renderAllArticles();
    setupFilters();
    setupSearch();
  }

  // =============================================
  // ESTADÍSTICAS
  // =============================================
  function updateStats() {
    // Total
    const totalEl = document.getElementById('stat-total');
    if (totalEl) totalEl.textContent = ARTICLES.length;

    // Por categoría
    const categories = ['teoria', 'portafolio', 'laboratorio', 'casos', 'proyectos'];
    categories.forEach(cat => {
      const countEl = document.getElementById(`count-${cat}`);
      if (countEl) {
        const count = ARTICLES.filter(a => a.category === cat).length;
        countEl.textContent = count;
      }
    });
  }

  // =============================================
  // ARTÍCULOS RECIENTES
  // =============================================
  function renderRecentArticles() {
    const container = document.getElementById('recent-articles');
    if (!container) return;

    // Ordenar por fecha y tomar los 6 más recientes
    const recent = [...ARTICLES]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 6);

    container.innerHTML = recent.map(article => `
      <a href="${article.url}" class="blog-article-card" data-category="${article.category}">
        <div class="blog-article-badge">
          <i class="fas ${CATEGORY_ICONS[article.category]}"></i>
          ${CATEGORY_NAMES[article.category]}
        </div>
        <h3 class="blog-article-title">${article.title}</h3>
        <p class="blog-article-excerpt">${article.excerpt}</p>
        <div class="blog-article-meta">
          <span class="blog-article-date">${formatDate(article.date)}</span>
          <span class="blog-article-read">Leer <i class="fas fa-arrow-right"></i></span>
        </div>
      </a>
    `).join('');
  }

  // =============================================
  // TODOS LOS ARTÍCULOS
  // =============================================
  function renderAllArticles() {
    const container = document.getElementById('all-articles');
    const emptyState = document.getElementById('blog-empty');
    if (!container) return;

    // Filtrar
    let filtered = ARTICLES;
    
    if (currentFilter !== 'all') {
      filtered = filtered.filter(a => a.category === currentFilter);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(a => 
        a.title.toLowerCase().includes(query) ||
        a.excerpt.toLowerCase().includes(query)
      );
    }

    // Ordenar por fecha
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Mostrar/ocultar estado vacío
    if (filtered.length === 0) {
      container.innerHTML = '';
      emptyState?.classList.add('show');
      return;
    }
    
    emptyState?.classList.remove('show');

    // Renderizar
    container.innerHTML = filtered.map(article => `
      <a href="${article.url}" class="blog-article-row" data-category="${article.category}">
        <span class="blog-article-row-badge">${CATEGORY_NAMES[article.category]}</span>
        <div class="blog-article-row-content">
          <h3 class="blog-article-row-title">${article.title}</h3>
          <p class="blog-article-row-excerpt">${article.excerpt}</p>
        </div>
        <span class="blog-article-row-date">${formatDate(article.date)}</span>
        <i class="fas fa-chevron-right blog-article-row-arrow"></i>
      </a>
    `).join('');
  }

  // =============================================
  // FILTROS
  // =============================================
  function setupFilters() {
    const filterBtns = document.querySelectorAll('.blog-filter-btn');
    
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Actualizar botón activo
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Actualizar filtro y renderizar
        currentFilter = btn.dataset.filter;
        renderAllArticles();
      });
    });
  }

  // =============================================
  // BÚSQUEDA
  // =============================================
  function setupSearch() {
    const searchInput = document.getElementById('blog-search-input');
    if (!searchInput) return;

    let debounceTimer;
    
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        searchQuery = e.target.value.trim();
        renderAllArticles();
      }, 300);
    });
  }

  // =============================================
  // UTILIDADES
  // =============================================
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  }

  // =============================================
  // INICIAR
  // =============================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
