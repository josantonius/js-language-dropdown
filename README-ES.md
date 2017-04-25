# JLang JavaScrip Plugin

[![GitHub tag](https://img.shields.io/badge/version-1.0.2-blue.svg)](https://github.com/Josantonius/BASH-Reposgit/tree/1.0.2) [![Packagist](https://img.shields.io/cocoapods/l/AFNetworking.svg)](https://github.com/Josantonius/JLang/blob/master/LICENSE) 

[English version](README.md)

Banderas desplegables para seleccion de idioma los frameworks Materialize y Bootstrap.

---

- [Instalación](#instalación)
- [Requerimentos.](#requerimentos)
- [Materialize](#materialize)
- [Bootstrap3](#bootstrap3)
- [Bootstrap4](#bootstrap4)
- [Opciones](#opciones)
- [Capturas](#capturas)
- [Contribuir](#contribuir)
- [Licencia](#licencia)
- [Copyright](#copyright)

---

## Instalación

Puedes descargar este complemento con [Bower](https://bower.io/).

    $ bower install jlang --save

El comando anterior sólo instalará los archivos necesarios, si prefieres descargar todo el código fuente incluyendo el contenido de demostración puedes utilizar:

    $ git clone https://github.com/Josantonius/JLang.git

## Requerimentos.

Este plugin de JavaScript debe utilizarse junto con el framework Materialize o Bootstrap.

## Materialize

### HTML - Estructura

```html
<div id="JLang" class="right">
  <div data-lang-code="es-ES" data-src="languages/32/spain.png">Español</div>
  <div data-lang-code="it-IT" data-src="languages/32/Italy.png">Italian</div>
  <div data-lang-code="en-GB" data-src="languages/32/United-Kingdom.png">English</div>
  <div data-lang-code="de-DE" data-src="languages/32/Germany.png">Deutsch</div>
  <div data-lang-code="fr-FR" data-src="languages/32/France.png">French</div>
</div>
```

### CSS - Estilos

```css
.language {
  display: -webkit-flex !important;
  display: -ms-flexbox !important;
  display: flex !important;
  -webkit-align-items: center !important;
  -ms-flex-align: center !important;
  align-items: center !important;
}

.language img {
  margin-right: 10px;
}

#lanNavSel {
  position: relative;
  top: -8px;
  left: 8px;
}
```

### Inicialización con JavaScript

```js
<script src="jlang.js"></script>
<script>
new JLang();
</script>
```

### JLang Demo

```js
new JLang({
    id: 'languages',
    framework: 'materialize',
    cookieExp: 30,
    cookieLangName: 'lname',
    cookieLangCode: 'lcode',
    abbreviation: true,
    reload: true,
    alignment: 'left',
    hover: true
  }
);
```

## Bootstrap3

### HTML - Estructura

```html
<div id="JLang">
  <div data-lang-code="es-ES" data-src="languages/32/spain.png">Español</div>
  <div data-lang-code="it-IT" data-src="languages/32/Italy.png">Italian</div>
  <div data-lang-code="en-GB" data-src="languages/32/United-Kingdom.png">English</div>
  <div data-lang-code="de-DE" data-src="languages/32/Germany.png">Deutsch</div>
  <div data-lang-code="fr-FR" data-src="languages/32/France.png">French</div>
</div>
```

### CSS - Estilos

```css
.language img {
  margin-right: 10px;
}

#lanNavSel {
  position: relative;
  top: -8px;
  left: 8px;
}
```

### Inicialización con JavaScript

```js
<script src="jlang.js"></script>
<script>
new JLang({framework: 'bootstrap3'});
</script>
```js

### JLang Demo

```
new JLang({
    id: 'languages',
    framework: 'bootstrap3',
    cookieExp: 30,
    cookieLangName: 'lname',
    cookieLangCode: 'lcode',
    abbreviation: true,
    reload: true,
    alignment: 'left',
    hover: true
  }
);
```

## Bootstrap4

### HTML - Estructura

```html
<div id="JLang">
  <div data-lang-code="es-ES" data-src="languages/32/spain.png">Español</div>
  <div data-lang-code="it-IT" data-src="languages/32/Italy.png">Italian</div>
  <div data-lang-code="en-GB" data-src="languages/32/United-Kingdom.png">English</div>
  <div data-lang-code="de-DE" data-src="languages/32/Germany.png">Deutsch</div>
  <div data-lang-code="fr-FR" data-src="languages/32/France.png">French</div>
</div>
```

### CSS - Estilos

```css
.language img {
  margin-right: 10px;
}

#lanNavSel {
  margin-left: 8px;
  margin-right: 8px;
}

#imgNavSel {
  margin-top: -1px;
}

#languages {
  padding: 5px;
}

#languages:hover {
  background-color: rgba(255, 255, 255, 0.15);
}
```

### Inicialización con JavaScript

```js
<script src="jlang.js"></script>
<script>
new JLang({framework: 'bootstrap4'});
</script>
```

### JLang Demo

```js
new JLang({
    id: 'languages',
    framework: 'bootstrap4',
    cookieExp: 30,
    cookieLangName: 'lname',
    cookieLangCode: 'lcode',
    abbreviation: true,
    reload: true,
    alignment: 'left',
    hover: true
  }
);
```

## Opciones

| Opción | Descripción |
| --- | --- |
| id | Dropdown id name. (Default: 'languages') |
| framework | Framework name. (Default: 'materialize') |
| cookieExp | Cookie expiration time in days. (Default: 30) |
| cookieLangName | 	Cookie name for save the selected language name. (Default: 'lname') |
| cookieLangCode | Cookie name for save the selected language code. (Default: 'lcode') |
| abbreviation | Display abbreviation and caret. (Default: true) |
| reload | Reload page when selecting language. (Default: true) |
| alignment | Dropdown id name. (Default: 'languages') |
| hover | Dropdown aligned to the left or right of button. (Default: 'left') |

## Capturas

[Materialize](demo/captures/materialize-es.md)

[Bootstrap3](demo/captures/bootstrap3-es.md)

[Bootstrap4](demo/captures/bootstrap4-es.md)

### Contribuir
1. Comprobar si hay incidencias abiertas o abrir una nueva para iniciar una discusión en torno a un fallo o función.
1. Bifurca la rama del repositorio en GitHub para iniciar la operación de ajuste.
1. Escribe una o más pruebas para la nueva característica o expón el error.
1. Haz cambios en el código para implementar la característica o reparar el fallo.
1. Envía pull request para fusionar los cambios y que sean publicados.

Esto está pensado para proyectos grandes y de larga duración.

### Licencia

Este proyecto está licenciado bajo **licencia MIT**. Consulta el archivo [LICENSE](LICENSE) para más información.

### Copyright

2017 Josantonius, [josantonius.com](https://josantonius.com/)

Si te ha resultado útil, házmelo saber :wink:

Puedes contactarme en [Twitter](https://twitter.com/Josantonius) o a través de mi [correo electrónico](mailto:hello@josantonius.com).