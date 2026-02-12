# 📐 Estructura del Proyecto LatinFinder

## 🏗️ Arquitectura General

```
LatinFinder/
├── src/
│   ├── App.tsx                          # Componente raíz de la aplicación
│   ├── App.css                          # Estilos globales del App
│   ├── main.tsx                         # Punto de entrada React
│   ├── index.css                        # Estilos globales (Tailwind)
│   ├── assets/                          # Recursos estáticos (imágenes, iconos, etc)
│   ├── core/                            # 🔧 NÚCLEO - Funcionalidades compartidas
│   │   ├── components/                  # Componentes reutilizables
│   │   │   ├── Button.tsx               # Botón componente base
│   │   │   └── index.ts                 # Exports limpios
│   │   ├── routes/                      # Configuración de rutas
│   │   │   ├── routes.tsx               # Definición principal de rutas
│   │   │   ├── layout.route.tsx         # Layout wrapper
│   │   │   └── imports.tsx              # Imports centralizados
│   │   ├── hooks/                       # Custom hooks reutilizables
│   │   ├── services/                    # Servicios (APIs, utilities)
│   │   ├── themes/                      # Configuración de temas
│   │   ├── types/                       # Tipos TypeScript globales
│   │   └── utils/                       # Utilidades helpers
│   ├── modules/                         # 📦 FEATURE MODULES - Funcionalidades específicas
│   │   ├── stores/                      # Estado global (Zustand, Pinia, etc)
│   │   └── users/                       # Módulo de Usuarios
│   │       ├── components/              # Componentes del módulo
│   │       ├── containers/              # Contenedores (Smart Components)
│   │       │   └── UserContainer.tsx
│   │       ├── hooks/                   # Hooks específicos del módulo
│   │       ├── modules/                 # Submódulos
│   │       │   └── roles/               # Roles de usuarios
│   │       ├── services/                # Servicios específicos del módulo
│   │       └── types/                   # Tipos específicos del módulo
│   └── pages/                           # 🎯 PÁGINAS - Vistas principales
│       ├── Home.tsx                     # Página de inicio
│       └── Users.tsx                    # Página de usuarios
├── public/                              # Archivos públicos estáticos
├── index.html                           # HTML principal
├── vite.config.ts                       # Configuración Vite
├── tailwind.config.js                   # Configuración Tailwind CSS
├── postcss.config.js                    # Configuración PostCSS
├── tsconfig.json                        # Configuración TypeScript raíz
├── tsconfig.app.json                    # Configuración TypeScript para app
├── tsconfig.node.json                   # Configuración TypeScript para herramientas
├── eslint.config.js                     # Configuración ESLint
├── package.json                         # Dependencias y scripts
└── README.md                            # Documentación principal
```

---

## 🛠️ Tecnologías y Librerías

### Core Framework
| Tecnología | Versión | Propósito |
|------------|---------|----------|
| **React** | ^19.2.0 | Library UI |
| **React DOM** | ^19.2.0 | Renderizado en DOM |
| **TypeScript** | ~5.9.3 | Tipado estático |

### Routing
| Tecnología | Versión | Propósito |
|------------|---------|----------|
| **React Router DOM** | ^7.13.0 | Navegación y rutas |

### Estilos y CSS
| Tecnología | Versión | Propósito |
|------------|---------|----------|
| **Tailwind CSS** | ^4.1.18 | Utility-first CSS framework |
| **PostCSS** | ^8.5.6 | Procesador CSS |
| **Autoprefixer** | ^10.4.24 | Añade prefijos de navegadores |

### Build & Development
| Tecnología | Versión | Propósito |
|------------|---------|----------|
| **Vite** | ^7.2.4 | Build tool y dev server |
| **@vitejs/plugin-react** | ^5.1.1 | Plugin React para Vite |

### Code Quality
| Tecnología | Versión | Propósito |
|------------|---------|----------|
| **ESLint** | ^9.39.1 | Linter de código |
| **typescript-eslint** | ^8.46.4 | Support TypeScript en ESLint |
| **eslint-plugin-react-hooks** | ^7.0.1 | Validar React Hooks |
| **eslint-plugin-react-refresh** | ^0.4.24 | Validar React Fast Refresh |

### Type Definitions
| Tecnología | Versión | Propósito |
|------------|---------|----------|
| **@types/react** | ^19.2.5 | Tipos para React |
| **@types/react-dom** | ^19.2.3 | Tipos para React DOM |
| **@types/node** | ^24.10.1 | Tipos para Node.js |
| **globals** | ^16.5.0 | Tipos globales |

---

## 📋 Scripts Disponibles

```json
{
  "dev": "vite",                          // Inicia servidor desarrollo
  "build": "tsc -b && vite build",       // Compila TypeScript y Vite
  "lint": "eslint .",                     // Valida código con ESLint
  "preview": "vite preview"               // Preview de build producción
}
```

---

## 🎨 Sistema de Estilos

### CSS Framework: Tailwind

**Configuración:**
- **Archivo config:** `tailwind.config.js`
- **Variables CSS:** Definidas en `index.css`
- **Aplicación:** Clases utilidad en componentes

**Puntos de entrada CSS:**
1. `index.css` - Estilos globales + directivas Tailwind
2. `App.css` - Estilos específicos de App
3. Clases Tailwind inline en componentes

---

## 🧩 Patrones de Arquitectura

### 1. **Core Module** (`src/core/`)
- Componentes, hooks, servicios compartidos
- No depende de features específicas
- Reutilizable en toda la app

### 2. **Feature Modules** (`src/modules/`)
- Pueden estar desacoplados
- Cada módulo tiene su propia estructura
- Posible extracción a paquetes independientes

### 3. **Pages** (`src/pages/`)
- Componentes de página (layout)
- Enrutan componentes de módulos
- Conectan datos con presentación

### 4. **Separation of Concerns**
- **Components:** Presentación (UI)
- **Containers:** Lógica + presentación
- **Services:** Llamadas API y utilidades
- **Hooks:** Lógica reutilizable
- **Types:** Definiciones de tipos

---

## 📊 Propósito de Cada Carpeta

| Carpeta | Propósito | Ejemplo |
|---------|----------|---------|
| `components/` | Componentes puros (presentación) | Button, Card, Modal |
| `containers/` | Smart components (lógica + UI) | UserContainer |
| `hooks/` | Custom hooks reutilizables | useAuth, useForm |
| `services/` | Lógica de negocio, APIs | apiClient, auth service |
| `types/` | Definiciones TypeScript | interfaces, types |
| `themes/` | Configuración de temas | colores, tipografía |
| `utils/` | Funciones utilidad | helpers, formatters |
| `stores/` | Estado global | Zustand, Redux |
| `assets/` | Recursos estáticos | imágenes, fonts, iconos |

---

## 🔗 Paths Disponibles

Si configuras path aliases en `tsconfig.app.json`, puedes usar:

```typescript
// Ejemplo de rutas recomendadas:
import { Button } from '@/core/components';
import { useCustomHook } from '@/core/hooks';
import { userService } from '@/modules/users/services';
import HomePage from '@/pages/Home';
```

---

---
## 📑 Resumen para procesamiento por IA

Proporciono a continuación una representación estructurada y concisa del proyecto para que sistemas automatizados puedan extraer fácilmente la información principal.

```json
{
  "name": "LatinFinder",
  "root": "src/",
  "folders": ["core","modules","pages","assets"],
  "core_subfolders": ["components","routes","hooks","services","themes","types","utils"],
  "modules_sample": {
    "users": ["components","containers","hooks","services","types"]
  },
  "pages": ["Home.tsx","Users.tsx"],
  "css_framework": "Tailwind CSS",
  "routing": "react-router-dom",
  "build_tool": "vite",
  "language": "TypeScript"
}
```

---

*Última actualización: 9 de febrero de 2026*
