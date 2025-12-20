# AppNexo - Sitio Personal 🚀

Sitio web personal de desarrollador independiente con diseño moderno y profesional, alojado en GitHub Pages.

## 🌐 URL del sitio

El sitio está disponible en:
- `https://appnexo.github.io/win-coin.com/`

## 📁 Estructura del proyecto

```
appnexo.com/
├── index.html          # Página principal
├── styles.css          # Estilos CSS modernos
├── script.js           # Lógica JavaScript
├── app-ads.txt         # Configuración de ads
└── README.md           # Este archivo
```

## ✨ Características

- **Diseño Moderno**: Gradientes animados y efectos visuales profesionales
- **Totalmente Responsive**: Adaptado para móviles, tablets y escritorio
- **Animaciones Suaves**: Transiciones fluidas y efectos hover interactivos
- **Tipografía Premium**: Fuente Inter de Google Fonts para mejor legibilidad
- **UI Profesional**: Cards flotantes con efectos glassmorphism
- **Efectos de Fondo**: Blobs animados para un diseño dinámico
- **Gradientes Animados**: Colores púrpura, azul y rosa en movimiento
- **Iconos Interactivos**: Efectos de escala y color al hacer hover
- **Scroll Suave**: Navegación fluida entre secciones
- **Fácil de Personalizar**: Código limpio y bien estructurado

## 🔐 App-ads.txt

El archivo `app-ads.txt` está en la raíz para verificar la propiedad de aplicaciones con redes publicitarias (AdMob, Unity Ads, etc.).

### Configuración:

1. Obtén tu Publisher ID de la red publicitaria
2. Edita `app-ads.txt`
3. Reemplaza los IDs de ejemplo con tus IDs reales
4. Guarda y sube los cambios

## 🚀 Actualizar el sitio

```bash
# Agregar cambios
git add .

# Crear commit
git commit -m "Actualización del sitio"

# Subir a GitHub
git push origin main
```

Los cambios se reflejarán en GitHub Pages automáticamente en 1-2 minutos.

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Animaciones, gradientes y efectos modernos
- **JavaScript**: Interactividad y funcionalidad dinámica
- **Tailwind CSS**: Framework CSS vía CDN
- **Google Fonts**: Tipografía Inter
- **GitHub Pages**: Hosting gratuito

## 🎨 Personalización

### Paleta de Colores
El sitio utiliza una paleta de gradientes moderna:
- **Gradiente Principal**: `#667eea` → `#764ba2` → `#f093fb`
- **Fondo**: `#f8fafc` → `#ffffff`
- **Texto**: `#1e293b`
- **Acentos**: Azul `#667eea`, Púrpura `#764ba2`, Rosa `#f093fb`

Edita los colores en `styles.css` buscando las variables de gradiente:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
```

### Contenido
Modifica el texto directamente en `index.html`:
- **Nombre**: Cambia "AppNexo" en el `<h1>`
- **Descripción**: Actualiza el `<p id="tagline">`
- **Bio**: Edita el contenido en `<p id="bio">`
- **Intereses**: Personaliza las 4 cards de intereses
- **Email**: Actualiza el `href` en el botón de contacto

### Tipografía
La fuente principal es **Inter** de Google Fonts. Para cambiarla:
1. Visita [Google Fonts](https://fonts.google.com)
2. Selecciona tu fuente preferida
3. Reemplaza el `<link>` en el `<head>` de `index.html`
4. Actualiza `font-family` en `styles.css`

## 📝 Licencia

Proyecto personal - Uso libre
