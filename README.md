## HTML,CSS and JS CV
 
¡Currículum simple en HTML, CSS y JS!

Este es un proyecto de currículum simple creado utilizando HTML, CSS y JavaScript. Incluye un icono de Feather que te permite descargar el currículum en formato PDF.

## Uso del icono de Feather

Hemos añadido un icono de Feather en el currículum que te permite descargar el CV en formato PDF. Simplemente haz clic en el icono de descarga para obtener una copia del currículum.

El evento de clic en el icono se gestiona mediante JavaScript para activar la descarga del archivo PDF.

```html
<a id="downloadLink">
    <span class = "DL">Download Resume</span>
    <i class="downloadBtn" data-feather="download" width="18" height="14"></i>
</a>
```
- Codigo JS para el boton Download
```js
document.querySelector('.downloadBtn').addEventListener('click', function() {
    var downloadLink = document.createElement('a');
    downloadLink.href = './assets/cv.pdf';
    downloadLink.download = 'Miguel_Ardila_CV.pdf';
    downloadLink.click();
});
```
---
### Hecho con ❤️ por [Miguel Ardila][projects]

## Otros proyectos

📚 [Todos mis proyectos][Repository]


## Feedback
Si tiene algun comentario, ponte en contacto conmigo en [Linkedin][wc-lk-group]



Happy Coding! ✨🚀

[projects]: https://github.com/miguel-ardila
[wc-lk-group]: https://www.linkedin.com/in/miguel-ardila-bbb725210/
[Repository]: https://github.com/miguel-ardila?tab=repositories
