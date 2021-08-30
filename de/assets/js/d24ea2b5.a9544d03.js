"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1415],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(k,d(d({ref:t},s),{},{components:n})):a.createElement(k,d({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,d=new Array(i);d[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,d[1]=o;for(var p=2;p<i;p++)d[p]=n[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2565:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),d=["components"],o={description:"Wie man Sonne und Licht integriert und kommuniziert",tags:["scripting"]},l="Interacting with the Sun",p={unversionedId:"core-concepts/scripting/interacting-with-the-sun",id:"version-latest/core-concepts/scripting/interacting-with-the-sun",isDocsHomePage:!1,title:"Interacting with the Sun",description:"Wie man Sonne und Licht integriert und kommuniziert",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/core-concepts/scripting/interacting-with-the-sun.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/interacting-with-the-sun",permalink:"/de/docs/core-concepts/scripting/interacting-with-the-sun",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/scripting/interacting-with-the-sun.md",tags:[{label:"scripting",permalink:"/de/docs/tags/scripting"}],version:"latest",frontMatter:{description:"Wie man Sonne und Licht integriert und kommuniziert",tags:["scripting"]},sidebar:"version-latest/main",previous:{title:"Discord Integration",permalink:"/de/docs/core-concepts/scripting/discord-integration"},next:{title:"Persistente Daten",permalink:"/de/docs/core-concepts/scripting/persistent-data"}},s=[{value:"Spawnen der Standardsonne",id:"spawnen-der-standardsonne",children:[]},{value:"Interacting with the Sun",id:"interacting-with-the-sun-1",children:[{value:"Wetter",id:"wetter",children:[]},{value:"Wetterarten",id:"wetterarten",children:[]}]}],m={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interacting-with-the-sun"},"Interacting with the Sun"),(0,i.kt)("p",null,"Wie man sich integriert und mit der Sonne und dem Licht kommuniziert."),(0,i.kt)("p",null,"In der nanos Welt erlauben wir die gr\xf6\xdftm\xf6gliche Anpassung an Ihre Server und Pakete. Und um es noch einfacher zu machen, haben wir einige eingebaute Funktionen in das Spiel integriert, die bei der Integration und Anpassung Ihrer Server helfen."),(0,i.kt)("p",null,"Ein sehr wichtiges Konzept in der Nano-Welt ist die ",(0,i.kt)("strong",{parentName:"p"},"Sun"),". We provide some methods on ",(0,i.kt)("a",{parentName:"p",href:"/de/docs/scripting-reference/static-classes/world"},"World")," class which allows the scripters to, in few lines of codes, modify the current ",(0,i.kt)("strong",{parentName:"p"},"Time of Day"),", ",(0,i.kt)("strong",{parentName:"p"},"Sun Speed"),", ",(0,i.kt)("strong",{parentName:"p"},"Environment Colors")," and even change the ",(0,i.kt)("strong",{parentName:"p"},"Weather")," and ",(0,i.kt)("strong",{parentName:"p"},"Fog"),"."),(0,i.kt)("p",null,"For the methods of interaction with the Sun exposed in the ",(0,i.kt)("a",{parentName:"p",href:"/de/docs/scripting-reference/static-classes/world"},"World")," to work, it is necessary that your Map is loaded with a sun that our API can identify it, and for that to be possible, we created the method ",(0,i.kt)("inlineCode",{parentName:"p"},"World.SpawnDefaultSun()"),"."),(0,i.kt)("h2",{id:"spawnen-der-standardsonne"},"Spawnen der Standardsonne"),(0,i.kt)("p",null,"Sobald du die Methode ",(0,i.kt)("inlineCode",{parentName:"p"},"Welt ausgef\xfchrt hast. pawnDefaultSun()"),", das Spiel zerst\xf6rt alle ","(","Unreal",")"," Akteure mit dem Tag ",(0,i.kt)("inlineCode",{parentName:"p"},"Sun")," und spawnt einen brandneuen Akteur, der ein ",(0,i.kt)("inlineCode",{parentName:"p"},"Directional Light"),"enth\xe4lt ",(0,i.kt)("inlineCode",{parentName:"p"},"Himmelslicht"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Nebel"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Clouds")," und einige andere Komponenten, die Sie mit ",(0,i.kt)("strong",{parentName:"p"},"Welt")," Methoden steuern k\xf6nnen."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Because of that it is important to set all your ",(0,i.kt)("a",{parentName:"p",href:"/de/docs/assets-modding/creating-assets/maps-and-levels/importing-maps#rules-for-creating-a-map-level-for-nanos-world"},"Actors with ",(0,i.kt)("inlineCode",{parentName:"a"},"Sun")," tag when creating Maps"),"!"))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Manchmal verwendet man ",(0,i.kt)("inlineCode",{parentName:"p"},"SpawnDefaultSun()")," in einigen Karten, du bemerkst, dass du am Ende mit ",(0,i.kt)("strong",{parentName:"p"},"zwei")," Richtungs- oder Himmelslichter kommst, das bedeutet, dass die Karte nicht mit den ",(0,i.kt)("inlineCode",{parentName:"p"},"Sun")," Tags konfiguriert wurde."))),(0,i.kt)("h2",{id:"interacting-with-the-sun-1"},"Interacting with the Sun"),(0,i.kt)("p",null,"Es ist m\xf6glich, mehrere Aspekte und Einstellungen von der Sonne zu \xe4ndern."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"All methods available for customizing the Sun are listed in ",(0,i.kt)("a",{parentName:"p",href:"/de/docs/scripting-reference/static-classes/world"},"World")," Static Class page."))),(0,i.kt)("p",null,"Einige Beispiele f\xfcr Methoden sind ",(0,i.kt)("inlineCode",{parentName:"p"},"World.SetTime(Stunden, Minuten)")," oder ",(0,i.kt)("inlineCode",{parentName:"p"},"World.SetFogDensity(Dichte)")," , was die aktuelle Zeit und den Nebel ver\xe4ndern wird."),(0,i.kt)("h3",{id:"wetter"},"Wetter"),(0,i.kt)("p",null,"Wir bieten einige grundlegende Methoden, um das Wetter der Welt zu \xe4ndern. You can use the method ",(0,i.kt)("inlineCode",{parentName:"p"},"World.SetWeather()")," to select from a predefined selection of Weathers, or create your own Weather using all the methods the ",(0,i.kt)("a",{parentName:"p",href:"/de/docs/scripting-reference/static-classes/world"},"World")," provides."),(0,i.kt)("h3",{id:"wetterarten"},"Wetterarten"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Wetterart"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Sonnenintensit\xe4t"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Zweite Nebeldichte"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Nebelh\xf6he"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Sonnenlicht Farbe"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Sky Rayleigh Scattering"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Sonnentempo. Mehrfach."),(0,i.kt)("th",{parentName:"tr",align:"left"},"Himmellicht-Intensit\xe4t"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Wind"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Leeren")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"150")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.005")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.2")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Farbe (1.0, 0.9, 0.8)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Farbe (0.17, 0.41, 1.0)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.25"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Regen")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"10")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.025")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.03")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Farbe (0.82, 0.9, 1.0)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Farbe (0.73, 0.8, 1.0)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"2.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.3")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"bew\xf6lkt")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"10")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.1")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.01")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Farbe (1.0, 0.9, 0.8)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Farbe (0.73, 0.8, 1.0)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1.25")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.2")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.3"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Gewitter")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"5")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.5")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.025")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Farbe (0.82, 0.9, 1.0)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Farbe (0.73, 0.8, 1.0)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"2.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.25")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"3.0"))))))}c.isMDXComponent=!0}}]);