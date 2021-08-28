"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7737],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(v,i(i({ref:t},c),{},{components:r})):n.createElement(v,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(e,t,r){var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(67294),a=r(79443);var o=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,c=39;var p=function(e){var t=e.lazy,r=e.block,a=e.defaultValue,p=e.values,d=e.groupId,m=e.className,v=o(),g=v.tabGroupChoices,f=v.setTabGroupChoices,h=(0,n.useState)(a),k=h[0],N=h[1],y=n.Children.toArray(e.children),b=[];if(null!=d){var w=g[d];null!=w&&w!==k&&p.some((function(e){return e.value===w}))&&N(w)}var C=function(e){var t=e.currentTarget,r=b.indexOf(t),n=p[r].value;N(n),null!=d&&(f(d,n),setTimeout((function(){var e,r,n,a,o,i,l,u;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,u=i.innerWidth,r>=0&&o<=u&&a<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,r;switch(e.keyCode){case c:var n=b.indexOf(e.target)+1;r=b[n]||b[0];break;case u:var a=b.indexOf(e.target)-1;r=b[a]||b[b.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},m)},p.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:x,onFocus:C,onClick:C},r)}))),t?(0,n.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,r){var n=(0,r(67294).createContext)(void 0);t.Z=n},18801:function(e,t,r){r.d(t,{SM:function(){return a}});r(87462),r(63366),r(67294);var n=r(3905),a=function(e){var t=e.children,r=e.href;return(0,n.kt)("a",{class:"reference-link",href:r},t,(0,n.kt)("span",null,r.replace("/docs/","/")))}},36305:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return g}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=r(55064),l=r(58215),s=r(18801),u=["components"],c={description:"D\xe9marrez votre serveur et votre premier Paquet en moins de 10 minutes!",sidebar_position:1,tags:["scripting"]},p="D\xe9marrage rapide",d={unversionedId:"getting-started/quick-start",id:"getting-started/quick-start",isDocsHomePage:!1,title:"D\xe9marrage rapide",description:"D\xe9marrez votre serveur et votre premier Paquet en moins de 10 minutes!",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/getting-started/quick-start.mdx",sourceDirName:"getting-started",slug:"/getting-started/quick-start",permalink:"/fr/docs/next/getting-started/quick-start",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/getting-started/quick-start.mdx",tags:[{label:"scripting",permalink:"/fr/docs/next/tags/scripting"}],version:"current",sidebarPosition:1,frontMatter:{description:"D\xe9marrez votre serveur et votre premier Paquet en moins de 10 minutes!",sidebar_position:1,tags:["scripting"]},sidebar:"tutorialSidebar",previous:{title:"Contribuer \xe0 la documentation",permalink:"/fr/docs/next/contributing-to-the-docs"},next:{title:"\ud83d\udcd1 Complete Tutorials List",permalink:"/fr/docs/next/getting-started/tutorials-and-examples/tutorials"}},m=[{value:"\xc9tape 1 : T\xe9l\xe9charger le serveur",id:"\xe9tape-1--t\xe9l\xe9charger-le-serveur",children:[]},{value:"\xc9tape 2 : Cr\xe9er un package basique",id:"\xe9tape-2--cr\xe9er-un-package-basique",children:[]},{value:"\xc9tape 3 : Ajout de fonctionnalit\xe9s de script",id:"\xe9tape-3--ajout-de-fonctionnalit\xe9s-de-script",children:[]},{value:"\xc9tape 4 : Rejoignez votre serveur",id:"\xe9tape-4--rejoignez-votre-serveur",children:[]},{value:"\xc9tape facultative : Apparition d&#39;un personnage pour le joueur",id:"\xe9tape-facultative--apparition-dun-personnage-pour-le-joueur",children:[{value:"Finalisation : D\xe9truire le personnage lorsqu&#39;un joueur quitte le serveur",id:"finalisation--d\xe9truire-le-personnage-lorsquun-joueur-quitte-le-serveur",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],v={toc:m};function g(e){var t=e.components,c=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},v,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"d\xe9marrage-rapide"},"D\xe9marrage rapide"),(0,o.kt)("p",null,"D\xe9marrez votre serveur et votre premier Paquet en moins de 10 minutes!"),(0,o.kt)("h2",{id:"\xe9tape-1--t\xe9l\xe9charger-le-serveur"},"\xc9tape 1 : T\xe9l\xe9charger le serveur"),(0,o.kt)("p",null,"Utilisez la commande suivante pour t\xe9l\xe9charger la derni\xe8re version de nanos world depuis notre ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-server/releases/"},"Github"),":"),(0,o.kt)(i.Z,{defaultValue:"powershell",values:[{label:"PowerShell",value:"powershell"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"powershell",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'Invoke-WebRequest -Uri "https://github.com/nanos-world/nanos-world-server/releases/latest/download/NanosWorldServer.exe" -OutFile NanosWorldServer.exe\n'))),(0,o.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'wget "https://github.com/nanos-world/nanos-world-server/releases/latest/download/NanosWorldServer"\nchmod +x NanosWorldServer\n')))),(0,o.kt)("p",null,"Le serveur est aussi simple qu'un seul fichier ex\xe9cutable ",(0,o.kt)("inlineCode",{parentName:"p"},"NanosWorldServer.exe"),". Apr\xe8s l'avoir t\xe9l\xe9charg\xe9, ex\xe9cutez-le une fois pour g\xe9n\xe9rer les dossiers appropri\xe9s et initiaux ",(0,o.kt)("inlineCode",{parentName:"p"},"Assets"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Packages")," et le fichier ",(0,o.kt)("inlineCode",{parentName:"p"},"Config.toml")," , gardez votre serveur ouvert pour suivre ce guide !"),(0,o.kt)("h2",{id:"\xe9tape-2--cr\xe9er-un-package-basique"},"\xc9tape 2 : Cr\xe9er un package basique"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Cr\xe9ez un dossier dans ",(0,o.kt)("inlineCode",{parentName:"li"},"Packages/")," pour \xeatre votre Package, nommons-le ",(0,o.kt)("inlineCode",{parentName:"li"},"mon-package/"),"."),(0,o.kt)("li",{parentName:"ol"},"\xc0 l'int\xe9rieur de ",(0,o.kt)("inlineCode",{parentName:"li"},"mon-package/")," cr\xe9ez un dossier appel\xe9 ",(0,o.kt)("inlineCode",{parentName:"li"},"Serveur/")," et un fichier appel\xe9 ",(0,o.kt)("inlineCode",{parentName:"li"},"Index.lua")," dans ",(0,o.kt)("inlineCode",{parentName:"li"},"Serveur/"),"."),(0,o.kt)("li",{parentName:"ol"},"Dans la console de votre serveur, tapez ",(0,o.kt)("inlineCode",{parentName:"li"},"package load mon-package")," pour charger votre nouveau package et g\xe9n\xe9rer le fichier de configuration ",(0,o.kt)("inlineCode",{parentName:"li"},"Package.toml"),". Vous pouvez \xe9diter ce fichier avec une personnalisation appropri\xe9e plus tard.")),(0,o.kt)("h2",{id:"\xe9tape-3--ajout-de-fonctionnalit\xe9s-de-script"},"\xc9tape 3 : Ajout de fonctionnalit\xe9s de script"),(0,o.kt)("p",null,"Ouvrez le fichier ",(0,o.kt)("inlineCode",{parentName:"p"},"Index.lua")," dans votre \xe9diteur ","(","nous vous recommandons d'utiliser ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"vscode"),")",", et \xe9ditons notre premier script :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Packages/my-package/Server/Index.lua"',title:'"Packages/my-package/Server/Index.lua"'},'-- Affichons un message dans la console\nPackage.Log("Chargement de quelques Props =D")\n\n-- Faisons appara\xeetre quelques Props\nprop_table = Prop(Vector(200, 0, 0), Rotator(0, 0, 0), "nanos-world::SM_WoodenTable")\nprop_chair = Prop(Vector(400, 200, 0), Rotator(0, 0, 0), "nanos-world::SM_WoodenChair")\nprop_tire = Prop(Vector(600, 0, 0), Rotator(0, 0, 0), "nanos-world::SM_TireLarge")\n')),(0,o.kt)("p",null,"Pour appliquer vos modifications, ex\xe9cutez la commande dans la console du serveur : ",(0,o.kt)("inlineCode",{parentName:"p"},"package reload all"),"."),(0,o.kt)("h2",{id:"\xe9tape-4--rejoignez-votre-serveur"},"\xc9tape 4 : Rejoignez votre serveur"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you join your server you can already see the results \ud83d\ude01"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(42360).Z})),(0,o.kt)("h2",{id:"\xe9tape-facultative--apparition-dun-personnage-pour-le-joueur"},"\xc9tape facultative : Apparition d'un personnage pour le joueur"),(0,o.kt)("p",null,"You may have noticed you are just a wandering soul flying around, let\u2019s give you some flesh! For that, we will need to interact with some Events."),(0,o.kt)("p",null,"Let's append some code in your ",(0,o.kt)("inlineCode",{parentName:"p"},"Index.lua"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="my-package/Server/Index.lua"',title:'"my-package/Server/Index.lua"'},'-- Appel\xe9 quand les joueurs rejoignent le serveur (exemple: Spawn)\nPlayer.Subscribe("Spawn", function(new_player)\n    -- Fait appara\xeetre un personnage \xe0 la position 0, 0, 0 avec les param\xe8tres du constructeur par d\xe9faut\n    local new_character = Character(Vector(0, 0, 0))\n\n    -- Poss\xe9der le nouveau personnage\n    new_player:Possess(new_character)\nend)\n')),(0,o.kt)("p",null,"Pour appliquer vos modifications, ex\xe9cutez la commande dans la console du serveur : ",(0,o.kt)("inlineCode",{parentName:"p"},"package reload all"),"."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Now if you join the server, you will spawn into a Character!"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(2852).Z})),(0,o.kt)("h3",{id:"finalisation--d\xe9truire-le-personnage-lorsquun-joueur-quitte-le-serveur"},"Finalisation : D\xe9truire le personnage lorsqu'un joueur quitte le serveur"),(0,o.kt)("p",null,"Note that Characters aren't destroyed automatically if the Player disconnects. For that, we will need to Subscribe for when the Player leaves the server ","(",(0,o.kt)("inlineCode",{parentName:"p"},"Destroy"),")"," and manually destroying the Character:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="my-package/Server/Index.lua"',title:'"my-package/Server/Index.lua"'},'-- Appel\xe9 quand les joueurs rejoignent le serveur (exemple: Spawn)\nPlayer.Subscribe("Spawn", function(new_player)\n    -- Fait appara\xeetre un personnage \xe0 la position 0, 0, 0 avec les param\xe8tres du constructeur par d\xe9faut\n    local new_character = Character(Vector(0, 0, 0))\n\n    -- Poss\xe9der le nouveau personnage\n    new_player:Possess(new_character)\nend)\n\n-- Quand le joueur quitte le serveur, d\xe9truire son personnage\nPlayer.Subscribe("Destroy", function(player)\n    local character = player:GetControlledCharacter()\n    if (character) then\n        character:Destroy()\n    end\nend)\n')),(0,o.kt)("p",null,"Pour appliquer vos modifications, ex\xe9cutez la commande dans la console du serveur : ",(0,o.kt)("inlineCode",{parentName:"p"},"package reload all"),"."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Congratulations! You have finished your first basic Script and learned:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Comment installer votre serveur"),(0,o.kt)("li",{parentName:"ul"},"Comment configurer un package simple"),(0,o.kt)("li",{parentName:"ul"},"Interaction basique avec les \xe9v\xe9nements d'entit\xe9"),(0,o.kt)("li",{parentName:"ul"},"Faire appara\xeetre des Props"),(0,o.kt)("li",{parentName:"ul"},"Spawning & Destroying Characters")))),(0,o.kt)("h4",{id:"\xe9tape-suivante-recommand\xe9e"},"\xc9tape suivante recommand\xe9e"),(0,o.kt)(s.SM,{href:"/docs/core-concepts/scripting/classes-guide",mdxType:"ReferenceLink"},"Guide des classes"))}g.isMDXComponent=!0},86010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})},42360:function(e,t,r){t.Z=r.p+"assets/images/quick-start-01-d39ffd8db99ec85a30e86d3850a52e39.jpg"},2852:function(e,t,r){t.Z=r.p+"assets/images/quick-start-02-435ca7f0b250f71d862f710dc00b6e13.jpg"}}]);