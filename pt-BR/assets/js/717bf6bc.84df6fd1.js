"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6971],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25587:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={description:"Como usar trilhas & Raycasting para coletar informa\xe7\xf5es do mundo em tempo de execu\xe7\xe3o",sidebar_position:7,tags:["script"]},c="Tra\xe7os & Raycasting",l={unversionedId:"core-concepts/scripting/traces-and-raycasting",id:"version-latest/core-concepts/scripting/traces-and-raycasting",isDocsHomePage:!1,title:"Tra\xe7os & Raycasting",description:"Como usar trilhas & Raycasting para coletar informa\xe7\xf5es do mundo em tempo de execu\xe7\xe3o",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-latest/core-concepts/scripting/traces-and-raycasting.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/traces-and-raycasting",permalink:"/pt-BR/docs/core-concepts/scripting/traces-and-raycasting",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/scripting/traces-and-raycasting.md",tags:[{label:"script",permalink:"/pt-BR/docs/tags/script"}],version:"latest",sidebarPosition:7,frontMatter:{description:"Como usar trilhas & Raycasting para coletar informa\xe7\xf5es do mundo em tempo de execu\xe7\xe3o",sidebar_position:7,tags:["script"]},sidebar:"version-latest/main",previous:{title:"Intelig\xeancia Artificial",permalink:"/pt-BR/docs/core-concepts/scripting/artificial-intelligence"},next:{title:"Integra\xe7\xe3o do Discord",permalink:"/pt-BR/docs/core-concepts/scripting/discord-integration"}},p=[],u={toc:p};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tra\xe7os--raycasting"},"Tra\xe7os & Raycasting"),(0,a.kt)("p",null," Como usar trilhas & Raycasting para coletar informa\xe7\xf5es do mundo em tempo de execu\xe7\xe3o."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Traces")," oferecem um m\xe9todo para alcan\xe7ar seus mapas e obter feedback sobre o que est\xe1 presente ao longo de um segmento de linha. Voc\xea os usa fornecendo dois pontos de extremidade ","(","um local de in\xedcio e fim",")",' e o sistema de f\xedsica "trilhas" um segmento de linha entre esses pontos, relatar qualquer Ator que for atingido. As trilhas s\xe3o essencialmente as mesmas que ',(0,a.kt)("strong",{parentName:"p"},"Raycasts")," ou ",(0,a.kt)("strong",{parentName:"p"},"Raytraces")," em outros pacotes de software."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(33458).Z})),(0,a.kt)("p",null,"O exemplo a seguir mostrar\xe1 como obter o qu\xea e para onde o jogador est\xe1 olhando."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Trilhas em cada 100ms\nTemporizador. Intervalo(function()\n    -- Obt\xe9m o meio da tela\n    viewport_2D_center local \n Render. etViewportSize() / 2\n\n    -- Deprojects para obter o Local 3D para o meio da tela\n    viewport_3D local da tela = Render. eproject(viewport_2D_center)\n\n    -- Faz um rastro com o local 3D e sua dire\xe7\xe3o multiplicada por 5000\n    -- Significa que ele ir\xe1 rastrear 5000 unidades naquela dire\xe7\xe3o\n    local trace_max_distance = 5000\n\n    local de in\xedcio = viewport_3D. osition\n    end_location local = viewport_3D.Position + viewport_3D. irection * trace_max_distance\n\n    -- \xdaltimo par\xe2metro como verdadeiro significa que ele desenhar\xe1 uma Linha de Depura\xe7\xe3o no segmento rastreado\n    local trace_result = Cliente. race(inicial_localiza\xe7\xe3o_final, CollisionChannel. orldEst\xe1tica \u251cCollisionChannel. hysicsBody, falso, true, false, true)\n\n    -- Se clicar em algo desenha um Ponto de Depura\xe7\xe3o no local\n    if (trace_result. acesso) ent\xe3o\n\n        -- Faz o ponto vermelho ou verde se atingir um ator\n        cor local = Cor(1, 0, 0) -- Vermelho\n\n        if (trace_result. ntity) depois\n            cores = Cor(0, 1, 0) -- Verde\n\n            -- Aqui voc\xea pode verificar qual ator atingiu como\n            -- if (trace_result. ntity:GetType() == "Caracteres") ent\xe3o ...\n        fim\n\n        -- Desenha um Ponto de Depura\xe7\xe3o no local de acerto por 5 segundos com o tamanho 10\n        Cliente. rawDebugPoint(trace_result.Location, cor, 5, 10)\n    fim\nfinal, 100)\n')),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"As you could see, we can pass bit-wise operators to Trace for more than one ",(0,a.kt)("a",{parentName:"p",href:"/pt-BR/docs/scripting-reference/glossary/enums#collisionchannel"},"CollisionChannel")," at once! Use ",(0,a.kt)("inlineCode",{parentName:"p"},"\u27b2")," entre os ",(0,a.kt)("strong",{parentName:"p"},"CollisionChannels")," para conseguir isso."))))}d.isMDXComponent=!0},33458:function(e,t,n){t.Z=n.p+"assets/images/traces-raycasting-9efb35a67eb78f33062bb0a4a88372e7.jpg"}}]);