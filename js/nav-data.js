/* =========================================
   NAV DATA v7.0 - ESQUEMA COMPLETO
   Teoría + Portafolio - Todos los artículos
   ========================================= */

const NAV_TREE = [
  // ═══════════════════════════════════════════════════════════════
  // TEORÍA Y CONCEPTOS
  // ═══════════════════════════════════════════════════════════════
  {
    label: "Teoría y Conceptos",
    type: "mega",
    icon: "book",
    searchable: true,
    sections: [
      // ─────────────────────────────────────
      // CIBERSEGURIDAD
      // ─────────────────────────────────────
      {
        title: "Ciberseguridad",
        items: [
          {
            label: "Análisis Forense",
            icon: "search",
            color: "red",
            desc: "Metodología y herramientas forenses",
            href: "#t-forense",
            keywords: ["forense", "evidencia", "cadena custodia", "pericial", "investigación"],
            subitems: [
              { label: "Fundamentos y metodología", href: "#t-forense-fundamentos", keywords: ["metodología", "análisis", "investigación"] },
              { label: "Forense en móviles", href: "#t-forense-movil", keywords: ["android", "iOS", "smartphone", "cellebrite", "móvil"] },
              { label: "Forense en IoT", href: "#t-forense-iot", keywords: ["IoT", "dispositivos", "firmware", "sensores"] },
              { label: "Forense en equipos (PC)", href: "#t-forense-pc", keywords: ["PC", "disco", "Windows", "Linux", "artefactos"] },
              { label: "Análisis y documentación", href: "#t-forense-documentacion", keywords: ["documentación", "informe", "evidencia", "análisis"] },
              { label: "Herramientas especializadas", href: "#t-forense-herramientas", keywords: ["autopsy", "volatility", "FTK", "EnCase", "herramientas"] }
            ]
          },
          {
            label: "Hardening de Sistemas",
            icon: "lock",
            color: "green",
            desc: "Bastionado y configuración segura",
            href: "#t-hardening",
            keywords: ["hardening", "bastionado", "seguridad", "configuración"],
            subitems: [
              { label: "Fundamentos y superficie de ataque", href: "#t-hard-fundamentos", keywords: ["superficie", "ataque", "fundamentos", "riesgo"] },
              { label: "Hardening en Linux", href: "#t-hard-linux", keywords: ["linux", "ubuntu", "centos", "SELinux", "AppArmor", "iptables"] },
              { label: "Hardening en Windows Server", href: "#t-hard-windows", keywords: ["windows", "server", "GPO", "políticas", "defender"] },
              { label: "CIS Benchmarks y cumplimiento", href: "#t-hard-cis", keywords: ["CIS", "benchmark", "compliance", "auditoría", "NIST"] },
              { label: "Auditoría y verificación", href: "#t-hard-auditoria", keywords: ["auditoría", "verificación", "compliance", "checklist"] }
            ]
          },
          {
            label: "Hacking Ético",
            icon: "target",
            color: "orange",
            desc: "Pentesting y metodología ofensiva",
            href: "#t-hacking",
            keywords: ["pentesting", "hacking", "ético", "ofensivo", "vulnerabilidad"],
            subitems: [
              { label: "Fundamentos y metodología", href: "#t-hack-fundamentos", keywords: ["metodología", "PTES", "OSSTMM", "fases"] },
              { label: "Reconocimiento y OSINT", href: "#t-hack-recon", keywords: ["OSINT", "reconocimiento", "shodan", "maltego", "theHarvester"] },
              { label: "Ataques sobre servidores", href: "#t-hack-servidores", keywords: ["servidores", "exploits", "servicios", "vulnerabilidades"] },
              { label: "Ataques sobre aplicaciones web", href: "#t-hack-web", keywords: ["web", "OWASP", "SQLi", "XSS", "CSRF", "burpsuite"] },
              { label: "Post-explotación y escalada", href: "#t-hack-post", keywords: ["post-explotación", "escalada", "privilegios", "persistencia"] },
              { label: "Documentación y reporting", href: "#t-hack-reporting", keywords: ["informe", "reporting", "documentación", "evidencias"] }
            ]
          },
          {
            label: "Gestión de Incidentes",
            icon: "activity",
            color: "pink",
            desc: "Respuesta y contención",
            href: "#t-incidentes",
            keywords: ["incidentes", "respuesta", "contención", "CSIRT"],
            subitems: [
              { label: "Ciclo de vida de un incidente", href: "#t-inc-ciclo", keywords: ["ciclo", "fases", "proceso", "gestión"] },
              { label: "Detección y clasificación", href: "#t-inc-deteccion", keywords: ["detección", "clasificación", "triaje", "alertas"] },
              { label: "Respuesta y contención", href: "#t-inc-respuesta", keywords: ["respuesta", "contención", "erradicación", "mitigación"] },
              { label: "Lecciones aprendidas", href: "#t-inc-lecciones", keywords: ["lecciones", "mejora", "post-mortem", "retrospectiva"] }
            ]
          },
          {
            label: "Blue Team / Defensa",
            icon: "shield",
            color: "indigo",
            desc: "Defensa activa y monitorización",
            href: "#t-blueteam",
            keywords: ["blue team", "defensa", "SOC", "monitorización"],
            subitems: [
              { label: "Fundamentos de defensa", href: "#t-blue-fundamentos", keywords: ["defensa", "monitorización", "fundamentos", "SOC"] },
              { label: "SIEM: arquitectura y correlación", href: "#t-blue-siem", keywords: ["SIEM", "correlación", "eventos", "arquitectura", "ELK", "Splunk"] },
              { label: "Análisis de logs y anomalías", href: "#t-blue-logs", keywords: ["logs", "anomalías", "detección", "parsing", "análisis"] },
              { label: "Threat Hunting proactivo", href: "#t-blue-hunting", keywords: ["threat hunting", "proactivo", "IOC", "MITRE", "hipótesis"] },
              { label: "Playbooks de respuesta", href: "#t-blue-playbooks", keywords: ["playbooks", "automatización", "SOAR", "respuesta", "runbooks"] }
            ]
          }
        ]
      },
      // ─────────────────────────────────────
      // BASES DE DATOS
      // ─────────────────────────────────────
      {
        title: "Bases de Datos",
        items: [
          {
            label: "Fundamentos de BBDD",
            icon: "database",
            color: "blue",
            desc: "Arquitectura y diseño",
            href: "#t-bbdd-fund",
            keywords: ["base de datos", "fundamentos", "arquitectura", "diseño"],
            subitems: [
              { label: "Componentes y arquitectura", href: "#t-bbdd-arquitectura", keywords: ["arquitectura", "componentes", "motor", "almacenamiento"] },
              { label: "Relacional vs No relacional", href: "#t-bbdd-modelos", keywords: ["relacional", "NoSQL", "comparativa", "modelos"] },
              { label: "Diseño y normalización", href: "#t-bbdd-normalizacion", keywords: ["normalización", "1FN", "2FN", "3FN", "diseño", "esquema"] },
              { label: "Casos de uso y elección", href: "#t-bbdd-eleccion", keywords: ["casos de uso", "elección", "criterios", "decisión"] }
            ]
          },
          {
            label: "BBDD Relacionales",
            icon: "database",
            color: "green",
            desc: "SQL, motores y optimización",
            href: "#t-sql",
            keywords: ["SQL", "relacional", "MySQL", "PostgreSQL"],
            subitems: [
              { label: "Tipos y motores", href: "#t-sql-motores", keywords: ["MySQL", "PostgreSQL", "MariaDB", "Oracle", "SQL Server", "motores"] },
              { label: "SQL avanzado", href: "#t-sql-avanzado", keywords: ["joins", "subconsultas", "vistas", "SQL", "queries"] },
              { label: "PL/SQL: procedimientos y triggers", href: "#t-sql-plsql", keywords: ["PL/SQL", "procedimientos", "funciones", "triggers", "stored"] },
              { label: "Estrategias de backup", href: "#t-sql-backup", keywords: ["backup", "restauración", "dump", "recovery", "automatización"] },
              { label: "Alta disponibilidad y replicación", href: "#t-sql-ha", keywords: ["replicación", "HA", "cluster", "master-slave", "failover"] },
              { label: "Disaster recovery", href: "#t-sql-dr", keywords: ["disaster recovery", "DR", "RTO", "RPO", "contingencia"] }
            ]
          },
          {
            label: "BBDD No Relacionales",
            icon: "layers",
            color: "purple",
            desc: "NoSQL, documentos y caché",
            href: "#t-nosql",
            keywords: ["NoSQL", "MongoDB", "Redis", "documentos"],
            subitems: [
              { label: "Tipos y motores NoSQL", href: "#t-nosql-tipos", keywords: ["documentos", "clave-valor", "grafos", "columnar", "tipos"] },
              { label: "MongoDB: documentos y CRUD", href: "#t-nosql-mongodb", keywords: ["MongoDB", "documentos", "CRUD", "aggregation", "índices"] },
              { label: "Redis: caché y memoria", href: "#t-nosql-redis", keywords: ["Redis", "caché", "memoria", "pub/sub", "keys"] },
              { label: "Cuándo elegir NoSQL vs SQL", href: "#t-nosql-eleccion", keywords: ["elección", "criterios", "SQL", "NoSQL", "comparativa"] }
            ]
          }
        ]
      },
      // ─────────────────────────────────────
      // ADMINISTRACIÓN DE SISTEMAS
      // ─────────────────────────────────────
      {
        title: "Administración de Sistemas",
        items: [
          {
            label: "Linux",
            icon: "server",
            color: "orange",
            desc: "Administración y scripting",
            href: "#t-linux",
            keywords: ["linux", "bash", "sysadmin", "servidor"],
            subitems: [
              { label: "Fundamentos y estructura", href: "#t-linux-fundamentos", keywords: ["filesystem", "estructura", "FHS", "directorios"] },
              { label: "Usuarios, grupos y permisos", href: "#t-linux-usuarios", keywords: ["usuarios", "grupos", "permisos", "chmod", "chown", "ACL"] },
              { label: "Administración de servicios", href: "#t-linux-servicios", keywords: ["systemd", "servicios", "systemctl", "units", "daemons"] },
              { label: "Shell scripting (Bash)", href: "#t-linux-bash", keywords: ["bash", "scripting", "shell", "automatización", "scripts"] },
              { label: "Gestión de paquetes", href: "#t-linux-paquetes", keywords: ["apt", "yum", "dnf", "paquetes", "repositorios", "actualizaciones"] }
            ]
          },
          {
            label: "Windows Server",
            icon: "server",
            color: "blue",
            desc: "Active Directory y GPOs",
            href: "#t-windows",
            keywords: ["windows", "server", "AD", "GPO"],
            subitems: [
              { label: "Fundamentos y roles", href: "#t-win-fundamentos", keywords: ["roles", "características", "servidor", "instalación"] },
              { label: "Active Directory: usuarios y OUs", href: "#t-win-ad", keywords: ["Active Directory", "AD", "usuarios", "grupos", "OUs", "dominio"] },
              { label: "GPOs: creación y aplicación", href: "#t-win-gpo", keywords: ["GPO", "políticas", "GPMC", "aplicación", "herencia"] },
              { label: "PowerShell para administración", href: "#t-win-powershell", keywords: ["PowerShell", "cmdlets", "scripts", "automatización"] },
              { label: "Servicios esenciales", href: "#t-win-servicios", keywords: ["DNS", "DHCP", "WSUS", "servicios", "roles"] }
            ]
          }
        ]
      },
      // ─────────────────────────────────────
      // REDES E INTERNET
      // ─────────────────────────────────────
      {
        title: "Redes e Internet",
        items: [
          {
            label: "Fundamentos de Redes",
            icon: "network",
            color: "cyan",
            desc: "OSI, TCP/IP y protocolos",
            href: "#t-redes-fund",
            keywords: ["redes", "TCP/IP", "OSI", "protocolos"],
            subitems: [
              { label: "Modelo OSI y TCP/IP", href: "#t-red-osi", keywords: ["OSI", "TCP/IP", "capas", "modelo", "encapsulación"] },
              { label: "Direccionamiento IP y subnetting", href: "#t-red-ip", keywords: ["IP", "subnetting", "CIDR", "máscara", "direccionamiento"] },
              { label: "Protocolos esenciales", href: "#t-red-protocolos", keywords: ["DNS", "DHCP", "HTTP", "HTTPS", "SSH", "protocolos"] }
            ]
          },
          {
            label: "Seguridad en Redes",
            icon: "shield",
            color: "red",
            desc: "Firewalls, IDS/IPS y VPN",
            href: "#t-redes-seg",
            keywords: ["firewall", "IDS", "IPS", "seguridad", "red"],
            subitems: [
              { label: "Firewalls: tipos y configuración", href: "#t-red-firewall", keywords: ["firewall", "iptables", "nftables", "reglas", "filtrado"] },
              { label: "IDS/IPS: detección y prevención", href: "#t-red-ids", keywords: ["IDS", "IPS", "Snort", "Suricata", "detección", "alertas"] },
              { label: "Arquitectura DMZ y segmentación", href: "#t-red-dmz", keywords: ["DMZ", "segmentación", "zonas", "arquitectura", "VLAN"] },
              { label: "VPN: Site-to-Site y remoto", href: "#t-red-vpn", keywords: ["VPN", "IPsec", "OpenVPN", "WireGuard", "túnel", "cifrado"] }
            ]
          },
          {
            label: "Alta Disponibilidad",
            icon: "activity",
            color: "green",
            desc: "Balanceo y redundancia",
            href: "#t-redes-ha",
            keywords: ["HA", "balanceo", "redundancia", "failover"],
            subitems: [
              { label: "Balanceo de carga", href: "#t-red-balanceo", keywords: ["balanceo", "HAProxy", "Nginx", "load balancer", "round robin"] },
              { label: "Redundancia y failover", href: "#t-red-failover", keywords: ["redundancia", "failover", "VRRP", "HSRP", "keepalived"] },
              { label: "Monitorización de red", href: "#t-red-monitorizacion", keywords: ["Zabbix", "Nagios", "SNMP", "monitorización", "alertas"] }
            ]
          }
        ]
      },
      // ─────────────────────────────────────
      // CLOUD Y VIRTUALIZACIÓN
      // ─────────────────────────────────────
      {
        title: "Cloud y Virtualización",
        items: [
          {
            label: "Virtualización",
            icon: "layers",
            color: "purple",
            desc: "Hipervisores y VMs",
            href: "#t-virt",
            keywords: ["virtualización", "VM", "hipervisor", "Proxmox", "VMware"],
            subitems: [
              { label: "Fundamentos e hipervisores", href: "#t-virt-fundamentos", keywords: ["hipervisor", "tipo 1", "tipo 2", "virtualización", "fundamentos"] },
              { label: "Proxmox: instalación y gestión", href: "#t-virt-proxmox", keywords: ["Proxmox", "VE", "instalación", "gestión", "KVM", "LXC"] },
              { label: "VMware vSphere básico", href: "#t-virt-vmware", keywords: ["VMware", "vSphere", "ESXi", "vCenter", "datastore"] },
              { label: "Alta disponibilidad virtualizada", href: "#t-virt-ha", keywords: ["HA", "vMotion", "cluster", "migración", "DRS"] }
            ]
          },
          {
            label: "Contenedores",
            icon: "cloud",
            color: "cyan",
            desc: "Docker y orquestación",
            href: "#t-docker",
            keywords: ["Docker", "contenedores", "imagen", "compose"],
            subitems: [
              { label: "Docker: fundamentos y arquitectura", href: "#t-docker-fundamentos", keywords: ["Docker", "arquitectura", "daemon", "engine", "fundamentos"] },
              { label: "Imágenes, contenedores y volúmenes", href: "#t-docker-conceptos", keywords: ["imágenes", "contenedores", "volúmenes", "Dockerfile", "build"] },
              { label: "Docker Compose: orquestación", href: "#t-docker-compose", keywords: ["compose", "orquestación", "multi-contenedor", "yaml", "servicios"] },
              { label: "Buenas prácticas y seguridad", href: "#t-docker-seguridad", keywords: ["seguridad", "buenas prácticas", "rootless", "secrets", "hardening"] }
            ]
          },
          {
            label: "Cloud Computing",
            icon: "cloud",
            color: "blue",
            desc: "AWS, Azure y conceptos",
            href: "#t-cloud",
            keywords: ["cloud", "AWS", "Azure", "IaaS", "PaaS"],
            subitems: [
              { label: "Fundamentos de cloud", href: "#t-cloud-fundamentos", keywords: ["cloud", "IaaS", "PaaS", "SaaS", "modelos", "fundamentos"] },
              { label: "AWS: servicios esenciales", href: "#t-cloud-aws", keywords: ["AWS", "EC2", "S3", "RDS", "VPC", "IAM"] },
              { label: "Azure: conceptos y servicios", href: "#t-cloud-azure", keywords: ["Azure", "VM", "blob", "AD", "servicios", "Microsoft"] }
            ]
          }
        ]
      }
    ],
    sidebar: {
      title: "Acceso rápido",
      links: [
        { label: "Ver todo", icon: "layers", href: "#teoria" },
        { label: "Artículos recientes", icon: "fileText", href: "#articulos" },
        { label: "Buscar", icon: "search", href: "#buscar" }
      ]
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // PORTAFOLIO - EXPERIENCIA TÉCNICA
  // ═══════════════════════════════════════════════════════════════
  {
    label: "Portafolio",
    type: "mega",
    icon: "folder",
    searchable: true,
    sections: [
      // ─────────────────────────────────────
      // CIBERSEGURIDAD
      // ─────────────────────────────────────
      {
        title: "Ciberseguridad",
        items: [
          {
            label: "Blue Team / Defensa",
            icon: "shield",
            color: "indigo",
            desc: "SIEM, alertas y honeypots",
            href: "#p-blueteam",
            keywords: ["SIEM", "ELK", "alertas", "honeypot", "defensa", "SOC"],
            subitems: [
              { label: "SIEM con ELK Stack", href: "#p-blue-siem", keywords: ["ELK", "Elasticsearch", "Logstash", "Kibana", "SIEM", "detección"] },
              { label: "Sistema de alertas automatizado", href: "#p-blue-alertas", keywords: ["alertas", "automatización", "notificaciones", "respuesta"] },
              { label: "Playbook respuesta ransomware", href: "#p-blue-playbook", keywords: ["ransomware", "playbook", "respuesta", "contención", "SOAR"] },
              { label: "Honeypot: despliegue y análisis", href: "#p-blue-honeypot", keywords: ["honeypot", "T-Pot", "ataques", "análisis", "trampa"] }
            ]
          },
          {
            label: "Análisis Forense",
            icon: "search",
            color: "pink",
            desc: "Volatility e informes periciales",
            href: "#p-forense",
            keywords: ["forense", "volatility", "memoria", "pericial", "evidencia"],
            subitems: [
              { label: "Caso: equipo comprometido", href: "#p-forense-caso", keywords: ["caso práctico", "comprometido", "malware", "investigación"] },
              { label: "Análisis RAM con Volatility", href: "#p-forense-memoria", keywords: ["volatility", "RAM", "memoria", "procesos", "dump"] },
              { label: "Informe pericial: fuga de datos", href: "#p-forense-informe", keywords: ["pericial", "informe", "fuga", "datos", "legal"] }
            ]
          },
          {
            label: "Hardening",
            icon: "lock",
            color: "green",
            desc: "Bastionado CIS y auditorías",
            href: "#p-hardening",
            keywords: ["hardening", "bastionado", "CIS", "auditoría", "seguridad"],
            subitems: [
              { label: "Bastionado Linux en producción", href: "#p-hard-linux", keywords: ["linux", "producción", "servidor", "bastionado", "CIS"] },
              { label: "Hardening Windows Server CIS", href: "#p-hard-windows", keywords: ["windows", "CIS", "benchmark", "GPO", "servidor"] },
              { label: "Automatización auditorías scripts", href: "#p-hard-scripts", keywords: ["scripts", "automatización", "auditoría", "bash", "powershell"] }
            ]
          },
          {
            label: "Red Team",
            icon: "target",
            color: "orange",
            desc: "Pentesting y explotación",
            href: "#p-redteam",
            keywords: ["pentesting", "red team", "explotación", "vulnerabilidades"],
            subitems: [
              { label: "Auditoría entorno corporativo", href: "#p-red-auditoria", keywords: ["auditoría", "corporativo", "vulnerabilidades", "pentest"] },
              { label: "Escalada de privilegios en lab", href: "#p-red-escalada", keywords: ["escalada", "privilegios", "laboratorio", "exploits"] },
              { label: "Test intrusión web: SQLi y XSS", href: "#p-red-web", keywords: ["web", "SQLi", "XSS", "intrusión", "OWASP", "burpsuite"] }
            ]
          }
        ]
      },
      // ─────────────────────────────────────
      // BASES DE DATOS
      // ─────────────────────────────────────
      {
        title: "Bases de Datos",
        items: [
          {
            label: "Alta Disponibilidad",
            icon: "database",
            color: "blue",
            desc: "Clusters y replicación",
            href: "#p-bbdd-ha",
            keywords: ["cluster", "replicación", "HA", "failover", "MySQL", "PostgreSQL"],
            subitems: [
              { label: "MySQL Master-Slave", href: "#p-bbdd-mysql-cluster", keywords: ["MySQL", "master", "slave", "replicación", "binlog"] },
              { label: "PostgreSQL failover automático", href: "#p-bbdd-postgres-failover", keywords: ["PostgreSQL", "Patroni", "failover", "streaming"] },
              { label: "MySQL InnoDB Cluster", href: "#p-bbdd-innodb", keywords: ["InnoDB", "cluster", "group replication", "MySQL Router"] }
            ]
          },
          {
            label: "Backup y Disaster Recovery",
            icon: "database",
            color: "green",
            desc: "Backups y recuperación",
            href: "#p-bbdd-backup",
            keywords: ["backup", "disaster recovery", "DR", "restauración", "RTO"],
            subitems: [
              { label: "Backups con recuperación PITR", href: "#p-bbdd-backup-auto", keywords: ["backup", "PITR", "point in time", "automatizado", "recovery"] },
              { label: "Plan DR con RTO < 1 hora", href: "#p-bbdd-dr-plan", keywords: ["DR", "RTO", "RPO", "plan", "contingencia"] },
              { label: "Simulacro de restauración", href: "#p-bbdd-simulacro", keywords: ["simulacro", "restauración", "desastre", "pruebas", "documentado"] }
            ]
          },
          {
            label: "Optimización",
            icon: "chart",
            color: "purple",
            desc: "Tuning y migraciones",
            href: "#p-bbdd-opt",
            keywords: ["optimización", "tuning", "rendimiento", "migración"],
            subitems: [
              { label: "Tuning BBDD +1M registros", href: "#p-bbdd-tuning", keywords: ["tuning", "rendimiento", "índices", "queries", "optimización"] },
              { label: "Migración sin downtime", href: "#p-bbdd-migracion", keywords: ["migración", "downtime", "zero downtime", "cutover"] }
            ]
          }
        ]
      },
      // ─────────────────────────────────────
      // ADMINISTRACIÓN DE SISTEMAS
      // ─────────────────────────────────────
      {
        title: "Administración de Sistemas",
        items: [
          {
            label: "Infraestructura",
            icon: "server",
            color: "blue",
            desc: "AD, Ansible y logs",
            href: "#p-infra",
            keywords: ["infraestructura", "Active Directory", "Ansible", "logs"],
            subitems: [
              { label: "Active Directory híbrido", href: "#p-sys-ad-hibrido", keywords: ["AD", "híbrido", "Windows", "Linux", "LDAP", "Samba"] },
              { label: "Automatización con Ansible", href: "#p-sys-ansible", keywords: ["Ansible", "playbooks", "automatización", "despliegue", "IaC"] },
              { label: "Logs centralizados rsyslog + ELK", href: "#p-sys-logs", keywords: ["rsyslog", "ELK", "logs", "centralizado", "parsing"] }
            ]
          },
          {
            label: "Monitorización",
            icon: "chart",
            color: "green",
            desc: "Zabbix, Grafana y alertas",
            href: "#p-monitoring",
            keywords: ["Zabbix", "Grafana", "monitorización", "alertas", "métricas"],
            subitems: [
              { label: "Zabbix para +50 hosts", href: "#p-sys-zabbix", keywords: ["Zabbix", "agentes", "templates", "triggers", "hosts"] },
              { label: "Dashboard métricas Grafana", href: "#p-sys-grafana", keywords: ["Grafana", "dashboard", "métricas", "visualización", "Prometheus"] },
              { label: "Alertas multicanal", href: "#p-sys-alertas", keywords: ["alertas", "Telegram", "email", "SMS", "notificaciones"] }
            ]
          },
          {
            label: "Automatización",
            icon: "code",
            color: "orange",
            desc: "Scripts y gestión de configuración",
            href: "#p-auto",
            keywords: ["automatización", "scripts", "bash", "powershell", "Ansible"],
            subitems: [
              { label: "Scripts Bash y PowerShell", href: "#p-sys-scripts", keywords: ["bash", "powershell", "scripts", "administración", "automatización"] },
              { label: "Tareas con cron y Task Scheduler", href: "#p-sys-cron", keywords: ["cron", "Task Scheduler", "programación", "tareas", "jobs"] },
              { label: "Gestión configuración Ansible", href: "#p-sys-config", keywords: ["Ansible", "configuración", "roles", "inventory", "gestión"] }
            ]
          }
        ]
      },
      // ─────────────────────────────────────
      // REDES E INTERNET
      // ─────────────────────────────────────
      {
        title: "Redes e Internet",
        items: [
          {
            label: "Arquitectura Segura",
            icon: "network",
            color: "cyan",
            desc: "DMZ, VLANs y firewalls",
            href: "#p-redes-arq",
            keywords: ["DMZ", "VLAN", "firewall", "arquitectura", "segmentación"],
            subitems: [
              { label: "Red con DMZ", href: "#p-red-dmz", keywords: ["DMZ", "segmentación", "zonas", "firewall", "arquitectura"] },
              { label: "Segmentación VLAN empresarial", href: "#p-red-vlan", keywords: ["VLAN", "trunking", "802.1Q", "segmentación", "switches"] },
              { label: "pfSense en HA", href: "#p-red-pfsense", keywords: ["pfSense", "HA", "CARP", "firewall", "failover"] }
            ]
          },
          {
            label: "Conectividad",
            icon: "network",
            color: "purple",
            desc: "VPN y Zero Trust",
            href: "#p-redes-con",
            keywords: ["VPN", "WireGuard", "Zero Trust", "conectividad"],
            subitems: [
              { label: "VPN Site-to-Site entre sedes", href: "#p-red-vpn-s2s", keywords: ["VPN", "site-to-site", "IPsec", "túnel", "sedes"] },
              { label: "VPN remoto con WireGuard", href: "#p-red-wireguard", keywords: ["WireGuard", "VPN", "remoto", "túnel", "peers"] },
              { label: "Zero Trust Network Access", href: "#p-red-ztna", keywords: ["ZTNA", "Zero Trust", "acceso", "identidad", "microsegmentación"] }
            ]
          },
          {
            label: "Servicios de Red",
            icon: "server",
            color: "green",
            desc: "DNS, DHCP y proxy",
            href: "#p-redes-srv",
            keywords: ["DNS", "DHCP", "proxy", "Nginx", "BIND"],
            subitems: [
              { label: "DNS autoritativo con BIND", href: "#p-red-dns", keywords: ["DNS", "BIND", "autoritativo", "zonas", "registros"] },
              { label: "DHCP failover con ISC", href: "#p-red-dhcp", keywords: ["DHCP", "ISC", "failover", "pools", "reservas"] },
              { label: "Proxy inverso Nginx + SSL", href: "#p-red-nginx", keywords: ["Nginx", "proxy", "inverso", "SSL", "Let's Encrypt", "certificados"] }
            ]
          }
        ]
      },
      // ─────────────────────────────────────
      // CLOUD Y VIRTUALIZACIÓN
      // ─────────────────────────────────────
      {
        title: "Cloud y Virtualización",
        items: [
          {
            label: "Virtualización",
            icon: "layers",
            color: "purple",
            desc: "Proxmox y migraciones",
            href: "#p-virt",
            keywords: ["Proxmox", "virtualización", "P2V", "backup", "cluster"],
            subitems: [
              { label: "Cluster Proxmox HA", href: "#p-virt-proxmox", keywords: ["Proxmox", "cluster", "HA", "Ceph", "corosync"] },
              { label: "Migración P2V servidores", href: "#p-virt-p2v", keywords: ["P2V", "migración", "físico", "virtual", "conversión"] },
              { label: "Backup con Proxmox Backup Server", href: "#p-virt-backup", keywords: ["PBS", "backup", "Proxmox", "deduplicación", "restore"] }
            ]
          },
          {
            label: "Contenedores",
            icon: "cloud",
            color: "cyan",
            desc: "Docker, CI/CD y registry",
            href: "#p-containers",
            keywords: ["Docker", "CI/CD", "Jenkins", "registry", "contenedores"],
            subitems: [
              { label: "Infraestructura Docker Compose", href: "#p-docker-compose", keywords: ["Docker", "compose", "infraestructura", "servicios", "stack"] },
              { label: "CI/CD con Jenkins y Docker", href: "#p-docker-cicd", keywords: ["CI/CD", "Jenkins", "pipeline", "Docker", "automatización"] },
              { label: "Registry privado de imágenes", href: "#p-docker-registry", keywords: ["registry", "Harbor", "imágenes", "privado", "Docker"] }
            ]
          },
          {
            label: "Cloud",
            icon: "cloud",
            color: "blue",
            desc: "AWS, Terraform y serverless",
            href: "#p-cloud",
            keywords: ["AWS", "Terraform", "serverless", "Lambda", "IaC"],
            subitems: [
              { label: "AWS con Terraform", href: "#p-cloud-terraform", keywords: ["Terraform", "AWS", "IaC", "EC2", "VPC", "infraestructura"] },
              { label: "Arquitectura serverless Lambda", href: "#p-cloud-serverless", keywords: ["Lambda", "serverless", "API Gateway", "DynamoDB", "eventos"] },
              { label: "Migración on-premise a AWS", href: "#p-cloud-migracion", keywords: ["migración", "on-premise", "AWS", "lift and shift", "cloud"] }
            ]
          }
        ]
      }
    ],
    sidebar: {
      title: "Proyectos",
      links: [
        { label: "Ver todos", icon: "folder", href: "#portafolio" },
        { label: "GitHub", icon: "github", href: "https://github.com" },
        { label: "Actividad reciente", icon: "activity", href: "#actividad" }
      ]
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // LINKS SIMPLES
  // ═══════════════════════════════════════════════════════════════
  {
    label: "Investigación",
    type: "link",
    href: "#investigacion",
    icon: "lightbulb"
  },
  {
    label: "Contacto",
    type: "link",
    href: "#contacto",
    icon: "mail"
  }
];
