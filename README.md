# Portafolio Digital — Arq. Edson Everaldo Pastor

Portafolio digital del arquitecto **Edson Everaldo Pastor** (Totonicapán, Guatemala).
Sitio estático y de alto rendimiento generado con Astro, que presenta los servicios,
proyectos, testimonios y un formulario de contacto.

## Stack utilizado

- **Astro 7** — framework estático (11ty-style island architecture, sin JS innecesario)
- **Tailwind CSS v4** con el plugin `@tailwindcss/vite`
- **Google Fonts**: DM Sans (display), Lora (body), JetBrains Mono (mono)
- **Web3Forms** — envío del formulario de contacto (sin backend propio)

## Desarrollo local

Requisito: Node.js ≥ 22.12 y npm.

```bash
npm install       # instala dependencias
npm run dev       # servidor de desarrollo en http://localhost:4321
```

## Build y preview

```bash
npm run build     # genera el sitio estático en ./dist
npm run preview   # sirve ./dist en local para verificar antes de publicar
```

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

| Variable         | Obligatoria | Descripción                                                  |
| ---------------- | ----------- | ------------------------------------------------------------ |
| `WEB3FORMS_KEY`  | Solo en prod | Access Key de Web3Forms para el envío del formulario. |

La clave se lee en `FormularioContacto.astro` desde `import.meta.env.WEB3FORMS_KEY`.
Si no está definida, el formulario usará un placeholder y el envío fallará de forma
controlada (muestra el estado de error).

Pasos para activarlo:

1. Regístrate en <https://web3forms.com>
2. Crea un formulario y copia tu **Access Key**
3. Añade `WEB3FORMS_KEY=tu_key` a tu `.env`
4. En el panel de Web3Forms configura el email donde quieres recibir los mensajes

> Los teléfonos/emails de contacto se centralizan en `src/consts.ts` (`CONTACT`).
> Reemplaza los placeholders (`+502 XXXX XXXX`, `contacto@edsonpastor.com`) con los
> datos reales antes de publicar.

## Estructura de carpetas

```
├── public/                 # favicon, archivos estáticos
├── src/
│   ├── components/
│   │   ├── atoms/          # Logo, Button, Skeleton, Hamburger
│   │   ├── Hero.astro
│   │   ├── Header.astro    # navegación desktop + menú móvil
│   │   ├── Footer.astro
│   │   ├── Servicios.astro
│   │   ├── SobreMi.astro
│   │   ├── Testimonios.astro
│   │   ├── FormularioContacto.astro
│   │   ├── MapaUbicacion.astro
│   │   ├── FiltroCategorias.astro
│   │   ├── GridProyectos.astro      # carga infinita + skeletons
│   │   ├── CardProyecto.astro
│   │   └── CardProyectoSkeleton.astro
│   ├── data/
│   │   └── proyectos.js     # catálogo de proyectos
│   ├── layouts/
│   │   └── BaseLayout.astro # SEO, fuentes, Header/Footer, transiciones
│   ├── pages/
│   │   ├── index.astro
│   │   ├── proyectos.astro
│   │   └── proyectos/[id].astro
│   ├── styles/global.css    # Tailwind, container, accesibilidad
│   └── consts.ts            # datos globales y de contacto
├── astro.config.mjs
├── tailwind.config.mjs
└── wrangler.toml
```

## Créditos

- Proyecto desarrollado con **Astro** y **Tailwind CSS**.
- Maple y emoji favicon generados localmente (sin librerías externas de iconos).
- Iconos SVG inline propios.