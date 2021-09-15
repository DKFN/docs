"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6709],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87469:function(e,t,n){n.d(t,{YS:function(){return o},SM:function(){return c},Yb:function(){return d},aj:function(){return m},rt:function(){return f},Ut:function(){return g},PZ:function(){return b}});n(87462),n(63366),n(67294);var r=n(3905),a=n(80907),i=function(){return(0,a.zu)().path},o=function(e){var t=e.title,n=e.description,a=e.href,o=e.image_src;return(0,r.kt)("a",{class:"card-link",href:a.startsWith("http")?a:i()+"/"+a},(0,r.kt)("img",{src:o||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,t),(0,r.kt)("p",null,n))},c=function(e){var t=e.children,n=e.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:i()+"/"+n},t,(0,r.kt)("span",null,n))},s=function(e,t){return(0,r.kt)("a",{class:"authority-availability",href:i()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:t}))},u=function(e){return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},l=function(e,t){return(0,r.kt)("a",{href:i()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},p=function(e,t){return(0,r.kt)("a",{href:i()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},d=function(e){var t=e.children;return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/enums#"+t.toLowerCase()},t)},m={AuthorityOnly:function(){return s("/img/scripting/authority-only.svg","authority-only - you can only call this method on the side which spawned it!")},ServerOnly:function(){return s("/img/scripting/server-only.svg","server-only - you can only call this method on server side!")},ClientOnly:function(){return s("/img/scripting/client-only.svg","client-only - you can only call this method on client side!")}},f={Number:function(){return u("number")},String:function(){return u("string")},Boolean:function(){return u("boolean")},Table:function(){return u("table")},Iterator:function(){return u("iterator")},Any:function(){return u("any")},Function:function(){return u("function")},Nil:function(){return u("nil")}},g={Vector:function(){return l("Vector")},Rotator:function(){return l("Rotator")},Color:function(){return l("Color")},Quat:function(){return l("Quat","quaternion")},Vector2D:function(){return l("Vector2D","vectortwod")}},b={Actor:function(){return p("Actor","base-classes/actor")},Paintable:function(){return p("Paintable","base-classes/paintable")},Pickable:function(){return p("Pickable","base-classes/pickable")},Cable:function(){return p("Cable")},Character:function(){return p("Character")},File:function(){return p("File")},Grenade:function(){return p("Grenade")},Item:function(){return p("Item")},Light:function(){return p("Light")},Particle:function(){return p("Particle")},Player:function(){return p("Player")},Prop:function(){return p("Prop")},Sound:function(){return p("Sound")},StaticMesh:function(){return p("StaticMesh","static-mesh")},TextRender:function(){return p("TextRender","text-render")},Trigger:function(){return p("Trigger")},Vehicle:function(){return p("Vehicle")},Weapon:function(){return p("Weapon")},WebUI:function(){return p("WebUI")}}},95277:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(87469),c=["components"],s={description:"Como exibir informa\xe7\xf5es na tela do reprodutor",sidebar_position:5,tags:["script","ui"]},u="User Interface",l={unversionedId:"core-concepts/scripting/user-interface",id:"version-latest/core-concepts/scripting/user-interface",isDocsHomePage:!1,title:"User Interface",description:"Como exibir informa\xe7\xf5es na tela do reprodutor",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-latest/core-concepts/scripting/user-interface.mdx",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/user-interface",permalink:"/pt-BR/docs/core-concepts/scripting/user-interface",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/scripting/user-interface.mdx",tags:[{label:"script",permalink:"/pt-BR/docs/tags/script"},{label:"ui",permalink:"/pt-BR/docs/tags/ui"}],version:"latest",sidebarPosition:5,frontMatter:{description:"Como exibir informa\xe7\xf5es na tela do reprodutor",sidebar_position:5,tags:["script","ui"]},sidebar:"version-latest/main",previous:{title:"Valores da entidade",permalink:"/pt-BR/docs/core-concepts/scripting/entity-values"},next:{title:"Intelig\xeancia Artificial",permalink:"/pt-BR/docs/core-concepts/scripting/artificial-intelligence"}},p=[{value:"WebUI",id:"webui",children:[{value:"Configura\xe7\xe3o b\xe1sica do WebUI",id:"configura\xe7\xe3o-b\xe1sica-do-webui",children:[]}]},{value:"Tela",id:"tela",children:[]}],d={toc:p};function m(e){var t=e.components,s=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"user-interface"},"User Interface"),(0,i.kt)("p",null,"Como exibir informa\xe7\xf5es na tela do jogador."),(0,i.kt)("p",null,"No mundo do nanos existem duas maneiras oficiais de plotar dados de tela: ",(0,i.kt)("strong",{parentName:"p"},"WebUI")," e Render ",(0,i.kt)("strong",{parentName:"p"},"Canvas"),"."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Embora seja altamente recomend\xe1vel usar ",(0,i.kt)("strong",{parentName:"p"},"WebUI"),", usar Render Canvas ainda \xe9 suportado, mas n\xe3o deve mais ser usado."))),(0,i.kt)("h2",{id:"webui"},"WebUI"),(0,i.kt)("p",null,"Com a WebUI voc\xea pode carregar p\xe1ginas HTML que se integram aos seus pacotes em Lua usando eventos."),(0,i.kt)("h3",{id:"configura\xe7\xe3o-b\xe1sica-do-webui"},"Configura\xe7\xe3o b\xe1sica do WebUI"),(0,i.kt)("p",null,"Este exemplo de c\xf3digo mostra como adicionar uma p\xe1gina b\xe1sica usando HTML+JavaScript com a classe WebUI."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Nota:")," Todo c\xf3digo da WebUI roda no lado do cliente!"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Gera uma WebUI com o arquivo HTML que voc\xea acabou de criar\nMyUI = WebUI("Minha UI", "file:///UI/index. tml")\n\n-- Quando o HTML estiver pronto, aciona um evento l\xe1\nMeuUI:Subscribe("Pronto", function()\n    MeuUI:CallEvent("MyAwesomeEvent", "Ol\xe1! Voc\xea est\xe1 pronto!")\nend)\n\nMyUI:Subscribe("MyAwesomeAnswer", function(param1)\n    Package.Log("Recebeu uma resposta! Mensagem: " .. param1)\nfim)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Client/UI/index.html"',title:'"Client/UI/index.html"'},'<html>\n    <head>\n        <script src="index.js"><\/script>\n    </head>\n    <body>\n        Ol\xe1 Mundo!\n    </body>\n</html>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Client/UI/index.js"',title:'"Client/UI/index.js"'},'// Registre-se em "MyAwesomeEvent" de Lua\nEvents.Subscribe("MyAwesomeEvent", function(param1) {\n    console.log("Triggered! " + param1);\n\n    // Dispara "MeuAwesomeAnswer" em Lua\n    Events.Call("MyAwesomeAnswer", "Ol\xe1 l\xe1!");\n})\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Resultados da WebUI",src:n(36864).Z})),(0,i.kt)("p",null,"Isto ir\xe1 sair:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"[WebUI]  disparado! Ol\xe1! Voc\xea est\xe1 pronto!\n[Script] Recebeu uma resposta! Mensagem: Ol\xe1!\n")),(0,i.kt)(o.SM,{href:"getting-started/tutorials-and-examples/basic-hud-html",mdxType:"ReferenceLink"},"HUD b\xe1sica (HTML)"),(0,i.kt)("h2",{id:"tela"},"Tela"),(0,i.kt)(o.SM,{href:"getting-started/tutorials-and-examples/basic-hud-canvas",mdxType:"ReferenceLink"},"HUD B\xe1sica (Canvas)"))}m.isMDXComponent=!0},36864:function(e,t,n){t.Z=n.p+"assets/images/user-interface-7e95b34bf99d9b0891c7fd3a8d9fc278.jpg"}}]);