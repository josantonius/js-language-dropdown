/**
 * Language dropdown flags for Materialize and Bootstrap framework.
 * 
 * @author     Josantonius - hello@josantonius.com
 * @copyright  Copyright (c) 2017
 * @license    https://opensource.org/licenses/MIT - The MIT License (MIT)
 * @link       https://github.com/Josantonius/JLang
 * @since      1.0.0
 */
class JLang {

	constructor(o) {

		if (typeof o.id             === 'undefined') { o.id             = 'languages'; }
		if (typeof o.framework      === 'undefined') { o.framework      = 'materialize'; }
		if (typeof o.cookieExp      === 'undefined') { o.cookieExp      = 30; }
		if (typeof o.cookieLangCode === 'undefined') { o.cookieLangCode = 'lcode'; }
		if (typeof o.cookieLangName === 'undefined') { o.cookieLangName = 'lname'; }
		if (typeof o.abbreviation 	 === 'undefined') { o.cookieLangName = true; }
		if (typeof o.reload         === 'undefined') { o.reload         = true; }
		if (typeof o.alignment      === 'undefined') { o.alignment      = 'left'; }
		if (typeof o.hover          === 'undefined') { o.hover          = true; }
		
		this.dropdownID     = o.id;
		this.framework      = o.framework;
		this.cookieExp      = o.cookieExp;
		this.cookieLangCode = o.cookieLangCode;
		this.cookieLangName = o.cookieLangName;
		this.abbreviation   = o.abbreviation;
		this.reloadPage     = o.reload;
		this.alignment      = o.alignment;
		this.hover          = o.hover;

		this.init();
	}

	setCookie(cname, cvalue) {
	   var d = new Date();
	   d.setTime(d.getTime() + (this.cookieExp * 24 * 60 * 60 * 1000));
	   var expires = "expires="+d.toUTCString();
	   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	getCookie(cname) {
	   var name = cname + "=";
	   var ca = document.cookie.split(';');
	   for(var i = 0; i < ca.length; i++) {
	      var c = ca[i];
	      while (c.charAt(0) == ' ') {
	         c = c.substring(1);
	      }
	      if (c.indexOf(name) == 0) {
	         return c.substring(name.length, c.length);
	      }
	   }
	   return "";
	}

	checkCookie(cname, cvalue) {
	   var exists = this.getCookie(cname);
	   if (exists === "") {
	      this.setCookie(cname, cvalue, this.cookieExp);
	      return cvalue;
	   }
	   return exists;
	}

	init() {
		if (this.getLanguages()) {
			this.loadLanguages();
			if (this.framework === 'materialize') {
				this.dropdownInitialization();
			}
		}
	}

	getLanguages() {
		this.codes = [];
		this.languages = [];
		var jlang = document.getElementById("JLang");
		var elems = jlang.querySelectorAll("[data-lang-code]");
		var count = elems.length;
		if (count) {
			for (var i = 0; i < count; i++) {
				if(typeof elems[i] === "undefined") {
					break;
				}
				var languageName  = elems[i].innerHTML;
				var languageImage = elems[i].getAttribute('data-src');
				var languageCode  = elems[i].getAttribute('data-lang-code');
				if (i == 0) {
					this.defaultLang = elems[i].innerHTML;
					this.defaultCode = languageCode;
				}
				this.languages[languageName] = languageImage;
				this.codes[languageName] = languageCode;
				elems[i].remove;
			}
			return count;
		}
		return false;
	}

	loadLanguages() {
		this.actualLanguage = this.getActualLanguage();
		this.setContent();
		this.appendLanguagesList();
		this.setNewLanguage();
	}

	getActualLanguage() {
		this.checkCookie(
			this.cookieLangCode, 
			this.defaultCode, 
			this.cookieExp
		);
		return this.checkCookie(
			this.cookieLangName, 
			this.defaultLang, 
			this.cookieExp
		);
	}

	setContent() {
		if (this.framework === 'bootstrap3') {
	      var abbreviation = 
	      	'<span id="lanNavSel"></span>' +
	      	'<span class="caret"></span>';
	      var content = 
					'<ul class="nav navbar-nav navbar-right">' +
						'<li class="dropdown">';
	      var data = 'class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"';
	      var openTag = '<li>';
	      var closeTag = '</li>';
	      var startContent = '<ul id="languages-list" class="dropdown-menu">';
	      var endContent = '</ul></li></ul>';
	   } else if (this.framework === 'bootstrap4') {
	      var abbreviation = 
	      	'<span id="lanNavSel"></span>' +
	      	'<span class="caret"></span>';
	      var content = 
	      	'<ul class="navbar-nav">'+
	      		'<li class="nav-item dropdown">';
	      var data = 'class="nav-link dropdown-toggle" href="#!" id="languages-list" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"';
	      var openTag = '';
	      var closeTag = '';
	      var startContent = '<div id="languages-list" class="dropdown-menu" aria-labelledby="dropdown-list">';
	      var endContent = '</div></li></ul>';
		} else if (this.framework === 'materialize') {
	      var abbreviation = 
	      	'<span id="lanNavSel" class="white-text"></span>' +
	      	'<i class="material-icons white-text right">arrow_drop_down</i>';
	      var content = '';
			var data = 'class="dropdown-button btn-flat" data-activates="languages-list"';
	      var openTag = '<li>';
	      var closeTag = '</li>';
	      var startContent = '<ul id="languages-list" class="dropdown-content">';
	      var endContent = '</ul>';
	   }
	   abbreviation = (this.abbreviation) ? abbreviation : '';
		this.content = 
				content +
					'<a href="#" id="' + this.dropdownID + '"' + data + '>' +
					   '<img id="imgNavSel" src="" alt="" class="flag-icon">' +
					   abbreviation +
		         '</a>'+
         		startContent;
	   var key;
		var languages = this.languages;
		var languagesList = '';
		for (key in languages) {
		   if (languages.hasOwnProperty(key)) {
				var image = languages[key];
				languagesList += 
					openTag +
		            '<a id="nav' + key + '" href="#" class="language dropdown-item">'+
		               '<img id="imgNav' + key + '" src="' + image + '" alt="' + key + '" class="flag-icon">'+
		               '<span id="lanNav' + key + '"> ' + key + '</span>'+
		            '</a>'+
		         closeTag;
	    	}
		}
		this.languagesList = languagesList + endContent;
	}

	appendLanguagesList() {
      var JLang = document.getElementById('JLang');
	  	JLang.innerHTML = this.content;
	   var languagesList = document.getElementById('languages-list');
		languagesList.innerHTML = this.languagesList;
		var language = this.actualLanguage.toUpperCase();
		if (this.abbreviation) {
			var lanNavSel = document.getElementById('lanNavSel');
			lanNavSel.innerHTML = ' ' + language.substring(0,3);
		}
		var imgNavSel = document.getElementById('imgNavSel');
		var image = this.languages[this.actualLanguage];
		imgNavSel.setAttribute('src', image);
	}

	setNewLanguage() {
		var elems = document.getElementsByClassName('language');
		var count = elems.length;
		var obj = this;
		for (var i=count; i--;) {
		   elems[i].addEventListener('click', function() {
				var currentId = this.getAttribute('id');
				if (~currentId.indexOf('nav')) {
					var type = 'Nav';
					var language = currentId.replace('nav', '');
				}
				var img = document.getElementById('img' + type + 'Sel');
				var imgLink = this.childNodes[0];
				var imgLink = imgLink.getAttribute('src');
				img.setAttribute('src', imgLink);
				var upperLang = language.toUpperCase();

				if (obj.abbreviation) {
					var lanNavSel = document.getElementById('lanNavSel');
					lanNavSel.innerHTML = ' ' + upperLang.substring(0,3);
					lanNavSel.setAttribute('alt', language);
				}
				obj.setCookie(obj.cookieLangName, language, obj.cookieExp);
				obj.setCookie(obj.cookieLangCode, obj.codes[language], obj.cookieExp);
				if (obj.reloadPage) {
					location.reload();
				}
			}, false);
		}
	}

	dropdownInitialization() {
	  $('#' + this.dropdownID).dropdown({
	      inDuration: 300,
	      outDuration: 225,
	      constrainWidth: false,
	      hover: this.hover,
	      gutter: 0,
	      belowOrigin: false,
	      alignment: this.alignment,
	      stopPropagation: false
	    }
	  );
	}
}
