"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6262],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(n),g=a,u=m["".concat(l,".").concat(g)]||m[g]||p[g]||i;return n?r.createElement(u,s(s({ref:t},c),{},{components:n})):r.createElement(u,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2174:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],o={description:"Benutzerdefinierter Ladebildschirm f\xfcr Ihren Server",sidebar_position:1,tags:["scripting","ui"]},l="Ladebildschirm",d={unversionedId:"core-concepts/packages/loading-screen",id:"core-concepts/packages/loading-screen",isDocsHomePage:!1,title:"Ladebildschirm",description:"Benutzerdefinierter Ladebildschirm f\xfcr Ihren Server",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/core-concepts/packages/loading-screen.md",sourceDirName:"core-concepts/packages",slug:"/core-concepts/packages/loading-screen",permalink:"/de/docs/next/core-concepts/packages/loading-screen",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/packages/loading-screen.md",tags:[{label:"scripting",permalink:"/de/docs/next/tags/scripting"},{label:"ui",permalink:"/de/docs/next/tags/ui"}],version:"current",sidebarPosition:1,frontMatter:{description:"Benutzerdefinierter Ladebildschirm f\xfcr Ihren Server",sidebar_position:1,tags:["scripting","ui"]},sidebar:"tutorialSidebar",previous:{title:"Paketleitfaden",permalink:"/de/docs/next/core-concepts/packages/packages"},next:{title:"Classes Guide",permalink:"/de/docs/next/core-concepts/scripting/classes-guide"}},c=[{value:"Ladebildschirm erstellen",id:"ladebildschirm-erstellen",children:[{value:"Abrufen des Lade- und Herunterladen-Prozess",id:"abrufen-des-lade--und-herunterladen-prozess",children:[]}]},{value:"Konfigurieren Ihres Servers f\xfcr die Nutzung des Ladebildschirms",id:"konfigurieren-ihres-servers-f\xfcr-die-nutzung-des-ladebildschirms",children:[]}],p={toc:c};function m(e){var t=e.components,o=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ladebildschirm"},"Ladebildschirm"),(0,i.kt)("p",null,"In nanos world ist es mittels ",(0,i.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/webui"},"WebUI")," m\xf6glich, einen benutzerdefinierten und dynamischen Ladebildschirm zu deinem Server hinzuzuf\xfcgen."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(10635).Z})),(0,i.kt)("h2",{id:"ladebildschirm-erstellen"},"Ladebildschirm erstellen"),(0,i.kt)("p",null,"Dazu m\xfcssen Sie ein neues Paket vom Typ ",(0,i.kt)("a",{parentName:"p",href:"#package-types"},"loading-screen")," erstellen und die HTML/CSS/JS-Dateien in das Package Wurzelverzeichnis ","(","Root-Ordner",")"," einf\xfcgen. Ihre prim\xe4re HTML-Datei sollte ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," hei\xdfen. Beispielsweise k\xf6nnte dies wie folgt aussehen:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Packages/\n|   my-loading-screen/\n|   |   Package.toml\n|   |   index.html\n|   |   style.css\n|   |   ...\n")),(0,i.kt)("h3",{id:"abrufen-des-lade--und-herunterladen-prozess"},"Abrufen des Lade- und Herunterladen-Prozess"),(0,i.kt)("p",null,"Um dynamische Informationen auf dem Bildschirm anzeigen zu k\xf6nnen, k\xf6nnen Sie auf das Ereignis ",(0,i.kt)("inlineCode",{parentName:"p"},"UpdateScreen")," reagieren. ","(","Das Ereignis wird alle paar Millisekunden ausgef\xfchrt",")",":"),(0,i.kt)("h4",{id:"ereignis-codes-des-updatescreen"},"Ereignis-Codes des ",(0,i.kt)("inlineCode",{parentName:"h4"},"UpdateScreen")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"message"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Aktuellen Status anzeigen ","(","laden, validieren, herunterladen...",")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"message_secondary"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Zeigt das aktuelle Asset oder die aktuelle Datei, welche geladen oder heruntergeladen wird")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"progress_small"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Aktueller kleiner Fortschritt")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"progress_small_total"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Maximaler kleiner Fortschritt")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"progress"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Aktueller Fortschritt")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"progress_total"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Maximaler Fortschrittswert")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"current_stage"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Die aktuelle Ladephase ","(","laden ","(",(0,i.kt)("inlineCode",{parentName:"td"},"loading"),")",", herunterladen ","(",(0,i.kt)("inlineCode",{parentName:"td"},"downloading"),")",")")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"TIP"),": You can use ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"progress"))," and ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"progress_total"))," for filling up the main loading bar, and ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"progress_small"))," for a small/sub loading bar."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Always use ",(0,i.kt)("inlineCode",{parentName:"p"},"progress / progress_total")," for getting the current ",(0,i.kt)("inlineCode",{parentName:"p"},"%")," percentage, as progress","_","total can represent the total amount of files being downloaded for example."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Packages/my-loading-screen/index.js"',title:'"Packages/my-loading-screen/index.js"'},'Events.Subscribe("UpdateScreen", function(message, message_secondary, progress_small, progress_small_total, progress, progress_total, current_stage) {\n    // HTML-Aktualisierung hier...\n});\n')),(0,i.kt)("p",null,"Also, it is possible to fetch Player\u2019s information by accessing a global variable called LoadingScreen:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"var LoadingScreen = {\n  server_ip,\n  server_port,\n  server_http_port,\n  player_nanos_id,\n  player_nanos_username\n};\n")),(0,i.kt)("h2",{id:"konfigurieren-ihres-servers-f\xfcr-die-nutzung-des-ladebildschirms"},"Konfigurieren Ihres Servers f\xfcr die Nutzung des Ladebildschirms"),(0,i.kt)("p",null,"After creating your loading-screen package, you will need to configure your server to load it in your ",(0,i.kt)("a",{parentName:"p",href:"/docs/core-concepts/server-manual/server-configuration#server-configuration-file"},"Config.toml"),". Just set the setting ",(0,i.kt)("inlineCode",{parentName:"p"},"loading_screen")," to your Package's folder name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'# Ladebildschirm-Paket (der Ladebildschirm wird angezeigt, wenn die Spieler Ihrem Server beitreten)\nloading_screen = "my-loading-screen"\n')))}m.isMDXComponent=!0},10635:function(e,t,n){t.Z=n.p+"assets/images/loading-screen-cc9d3a28eb7260f15a2a9cad43506482.jpg"}}]);