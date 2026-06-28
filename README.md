# Abbssweets 🧁

Landing page para Abbssweets, repostería artesanal. Página estática, responsive, sin dependencias ni build.

## Cómo verla

Abre `src/index.html` directamente en el navegador, o sirve la carpeta con un servidor local:

```bash
npx serve .
# luego entra a http://localhost:3000/src/index.html
```

## Secciones

- **Hero** con imagen de fondo y llamados a la acción.
- **Productos**: 22 productos (todas las imágenes de `assets/`) con filtros por categoría (Queques, Tortas, Cheesecakes, Otros). Solo se muestra el título.
- **Nosotros**: razones para elegirnos + historia.
- **Información Importante**: métodos de pago, pedidos personalizados y "también contamos con".
- **Contacto**: formulario (redirige a WhatsApp) + WhatsApp/Instagram + política de anticipación.
- **Footer** y botón flotante de WhatsApp.

## Personalización rápida

- **Productos**: arreglo `PRODUCTS` en `src/index.js`. El título de cada producto es el nombre de su archivo de imagen. Para cambiar un título, renombra el archivo en `assets/`.
- **WhatsApp / Instagram**: constantes `WHATSAPP_URL` e `INSTAGRAM_URL` en `src/index.js` (y los enlaces en `src/index.html`).
- **Colores**: variables CSS en `:root` dentro de `src/index.css` (`--pink`, `--magenta`, etc.).
- **Métodos de pago / información**: editar la sección `#informacion` en `src/index.html`.
