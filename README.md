# JLang JavaScript Plugin

[![GitHub tag](https://img.shields.io/badge/version-1.0.2-blue.svg)](https://github.com/josantonius/js-language-dropdown/tree/1.0.2)
[![Packagist](https://img.shields.io/cocoapods/l/AFNetworking.svg)](https://github.com/josantonius/js-language-dropdown/blob/master/LICENSE)

[Versión en español](README-ES.md)

Language dropdown flags for Materialize and Bootstrap framework.

---

- [Installation](#installation)
- [Requirements](#requirements)
- [Materialize](#materialize)
- [Bootstrap3](#bootstrap3)
- [Bootstrap4](#bootstrap4)
- [Options](#options)
- [Captures](#captures)
- [Usage](#usage)
- [Sponsor](#Sponsor)
- [License](#license)

---

![image](docs/captures/header.png)

---

## Installation

You can download this plugin with [Bower](https://bower.io/).

    bower install jlang --save

The previous command will only install the necessary files, if you prefer to download the entire source code including the demo content you can use:

    git clone https://github.com/josantonius/js-language-dropdown.git

## Requirements

This JavaScript plugin should be used together with the Materialize or Bootstrap framework.

## Materialize

[Live demo](https://josantonius.github.io/js-language-dropdown/materialize.html)

### HTML Structure

```html
<div id="JLang" class="right">
  <div data-lang-code="es-ES" data-src="languages/32/Spain.png">Español</div>
  <div data-lang-code="it-IT" data-src="languages/32/Italy.png">Italian</div>
  <div data-lang-code="en-GB" data-src="languages/32/United-Kingdom.png">English</div>
  <div data-lang-code="de-DE" data-src="languages/32/Germany.png">Deutsche</div>
  <div data-lang-code="fr-FR" data-src="languages/32/France.png">French</div>
</div>
```

### CSS Styles

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

### JavaScript Inicialization

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

[Live demo](https://josantonius.github.io/js-language-dropdown/bootstrap-3.x.html)

### HTML Structure

```html
<div id="JLang">
  <div data-lang-code="es-ES" data-src="languages/32/Spain.png">Español</div>
  <div data-lang-code="it-IT" data-src="languages/32/Italy.png">Italian</div>
  <div data-lang-code="en-GB" data-src="languages/32/United-Kingdom.png">English</div>
  <div data-lang-code="de-DE" data-src="languages/32/Germany.png">Deutsche</div>
  <div data-lang-code="fr-FR" data-src="languages/32/France.png">French</div>
</div>
```

### CSS Styles

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

### JavaScript Inicialization

```js
<script src="jlang.js"></script>
<script>
new JLang({framework: 'bootstrap3'});
</script>
```

### JLang Demo

```js
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

[Live demo](https://josantonius.github.io/js-language-dropdown/bootstrap-4.x.html)

### HTML Structure

```html
<div id="JLang">
  <div data-lang-code="es-ES" data-src="languages/32/Spain.png">Español</div>
  <div data-lang-code="it-IT" data-src="languages/32/Italy.png">Italian</div>
  <div data-lang-code="en-GB" data-src="languages/32/United-Kingdom.png">English</div>
  <div data-lang-code="de-DE" data-src="languages/32/Germany.png">Deutsche</div>
  <div data-lang-code="fr-FR" data-src="languages/32/France.png">French</div>
</div>
```html

### CSS Styles

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

### JavaScript Initialization

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

## Options

| Option Name | Description |
| --- | --- |
| id | Dropdown id name. (Default: 'languages') |
| framework | Framework name. (Default: 'materialize') |
| cookieExp | Cookie expiration time in days. (Default: 30) |
| cookieLangName |  Cookie name for save the selected language name. (Default: 'lname') |
| cookieLangCode | Cookie name for save the selected language code. (Default: 'lcode') |
| abbreviation | Display abbreviation and caret. (Default: true) |
| reload | Reload page when selecting language. (Default: true) |
| alignment | Dropdown id name. (Default: 'languages') |
| hover | Dropdown aligned to the left or right of button. (Default: 'left') |

## Captures

[Materialize](docs/captures/materialize-en.md)

[Bootstrap3](docs/captures/bootstrap3-en.md)

[Bootstrap4](docs/captures/bootstrap4-en.md)

## Sponsor

If this project helps you to reduce your development time,
[you can sponsor me](https://github.com/josantonius#sponsor) to support my open source work :blush:

## License

This repository is licensed under the [MIT License](LICENSE).

Copyright © 2017-2022, [Josantonius](https://github.com/josantonius#contact)
