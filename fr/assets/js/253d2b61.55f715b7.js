"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7737],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),a=n(79443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),u="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,c=39;var p=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,p=e.values,d=e.groupId,m=e.className,v=o(),f=v.tabGroupChoices,g=v.setTabGroupChoices,h=(0,r.useState)(a),k=h[0],b=h[1],y=r.Children.toArray(e.children),N=[];if(null!=d){var w=f[d];null!=w&&w!==k&&p.some((function(e){return e.value===w}))&&b(w)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),r=p[n].value;b(r),null!=d&&(g(d,r),setTimeout((function(){var e,n,r,a,o,i,u,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,u=i.innerHeight,l=i.innerWidth,n>=0&&o<=l&&a<=u&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case c:var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case l:var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",u,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:C,onClick:C},n)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},87469:function(e,t,n){n.d(t,{YS:function(){return i},SM:function(){return u},Yb:function(){return d},aj:function(){return m},rt:function(){return v},Ut:function(){return f},PZ:function(){return g}});n(87462),n(63366),n(67294);var r=n(3905),a=n(80907),o=function(){return(0,a.zu)().path},i=function(e){var t=e.title,n=e.description,a=e.href,i=e.image_src;return(0,r.kt)("a",{class:"card-link",href:a.startsWith("http")?a:o()+"/"+a},(0,r.kt)("img",{src:i||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,t),(0,r.kt)("p",null,n))},u=function(e){var t=e.children,n=e.href;return(0,r.kt)("a",{class:"reference-link",href:o()+"/"+n},t,(0,r.kt)("span",null,n))},s=function(e,t){return(0,r.kt)("a",{class:"authority-availability",href:o()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:t}))},l=function(e){return(0,r.kt)("a",{href:o()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},c=function(e,t){return(0,r.kt)("a",{href:o()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},p=function(e,t){return(0,r.kt)("a",{href:o()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},d=function(e){var t=e.children;return(0,r.kt)("a",{href:o()+"/scripting-reference/glossary/enums#"+t.toLowerCase()},t)},m={AuthorityOnly:function(){return s("/img/scripting/authority-only.svg","authority-only - you can only call this method on the side which spawned it!")},ServerOnly:function(){return s("/img/scripting/server-only.svg","server-only - you can only call this method on server side!")},ClientOnly:function(){return s("/img/scripting/client-only.svg","client-only - you can only call this method on client side!")}},v={Number:function(){return l("number")},String:function(){return l("string")},Boolean:function(){return l("boolean")},Table:function(){return l("table")},Iterator:function(){return l("iterator")},Any:function(){return l("any")},Function:function(){return l("function")},Nil:function(){return l("nil")}},f={Vector:function(){return c("Vector")},Rotator:function(){return c("Rotator")},Color:function(){return c("Color")},Quat:function(){return c("Quat","quaternion")},Vector2D:function(){return c("Vector2D","vectortwod")}},g={Actor:function(){return p("Actor","base-classes/actor")},Paintable:function(){return p("Paintable","base-classes/paintable")},Pickable:function(){return p("Pickable","base-classes/pickable")},Cable:function(){return p("Cable")},Character:function(){return p("Character")},File:function(){return p("File")},Grenade:function(){return p("Grenade")},Item:function(){return p("Item")},Light:function(){return p("Light")},Particle:function(){return p("Particle")},Player:function(){return p("Player")},Prop:function(){return p("Prop")},Sound:function(){return p("Sound")},StaticMesh:function(){return p("StaticMesh","static-mesh")},TextRender:function(){return p("TextRender","text-render")},Trigger:function(){return p("Trigger")},Vehicle:function(){return p("Vehicle")},Weapon:function(){return p("Weapon")},WebUI:function(){return p("WebUI")}}},36305:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(55064),u=n(58215),s=n(87469),l=["components"],c={description:"D\xe9marrez votre serveur et votre premier Paquet en moins de 10 minutes!",sidebar_position:1,tags:["scripting"]},p="D\xe9marrage rapide",d={unversionedId:"getting-started/quick-start",id:"getting-started/quick-start",isDocsHomePage:!1,title:"D\xe9marrage rapide",description:"D\xe9marrez votre serveur et votre premier Paquet en moins de 10 minutes!",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/getting-started/quick-start.mdx",sourceDirName:"getting-started",slug:"/getting-started/quick-start",permalink:"/fr/docs/next/getting-started/quick-start",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/getting-started/quick-start.mdx",tags:[{label:"scripting",permalink:"/fr/docs/next/tags/scripting"}],version:"current",sidebarPosition:1,frontMatter:{description:"D\xe9marrez votre serveur et votre premier Paquet en moins de 10 minutes!",sidebar_position:1,tags:["scripting"]},sidebar:"main",previous:{title:"Contribuer \xe0 la documentation",permalink:"/fr/docs/next/contributing-to-the-docs"},next:{title:"\ud83d\udcd1 Complete Tutorials List",permalink:"/fr/docs/next/getting-started/tutorials-and-examples/tutorials"}},m=[{value:"\xc9tape 1 : T\xe9l\xe9charger le serveur",id:"\xe9tape-1--t\xe9l\xe9charger-le-serveur",children:[]},{value:"\xc9tape 2 : Cr\xe9er un package basique",id:"\xe9tape-2--cr\xe9er-un-package-basique",children:[]},{value:"\xc9tape 3 : Ajout de fonctionnalit\xe9s de script",id:"\xe9tape-3--ajout-de-fonctionnalit\xe9s-de-script",children:[]},{value:"\xc9tape 4 : Rejoignez votre serveur",id:"\xe9tape-4--rejoignez-votre-serveur",children:[]},{value:"\xc9tape facultative : Apparition d&#39;un personnage pour le joueur",id:"\xe9tape-facultative--apparition-dun-personnage-pour-le-joueur",children:[{value:"Finalisation : D\xe9truire le personnage lorsqu&#39;un joueur quitte le serveur",id:"finalisation--d\xe9truire-le-personnage-lorsquun-joueur-quitte-le-serveur",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],v={toc:m};function f(e){var t=e.components,c=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},v,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"d\xe9marrage-rapide"},"D\xe9marrage rapide"),(0,o.kt)("p",null,"D\xe9marrez votre serveur et votre premier Paquet en moins de 10 minutes!"),(0,o.kt)("h2",{id:"\xe9tape-1--t\xe9l\xe9charger-le-serveur"},"\xc9tape 1 : T\xe9l\xe9charger le serveur"),(0,o.kt)("p",null,"Utilisez la commande suivante pour t\xe9l\xe9charger la derni\xe8re version de nanos world depuis notre ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-server/releases/"},"Github"),":"),(0,o.kt)(i.Z,{defaultValue:"powershell",values:[{label:"PowerShell",value:"powershell"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"powershell",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'Invoke-WebRequest -Uri "https://github.com/nanos-world/nanos-world-server/releases/latest/download/NanosWorldServer.exe" -OutFile NanosWorldServer.exe\n'))),(0,o.kt)(u.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'wget "https://github.com/nanos-world/nanos-world-server/releases/latest/download/NanosWorldServer"\nchmod +x NanosWorldServer\n')))),(0,o.kt)("p",null,"Le serveur est aussi simple qu'un seul fichier ex\xe9cutable ",(0,o.kt)("inlineCode",{parentName:"p"},"NanosWorldServer.exe"),". Apr\xe8s l'avoir t\xe9l\xe9charg\xe9, ex\xe9cutez-le une fois pour g\xe9n\xe9rer les dossiers appropri\xe9s et initiaux ",(0,o.kt)("inlineCode",{parentName:"p"},"Assets"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Packages")," et le fichier ",(0,o.kt)("inlineCode",{parentName:"p"},"Config.toml")," , gardez votre serveur ouvert pour suivre ce guide !"),(0,o.kt)("h2",{id:"\xe9tape-2--cr\xe9er-un-package-basique"},"\xc9tape 2 : Cr\xe9er un package basique"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Cr\xe9ez un dossier dans ",(0,o.kt)("inlineCode",{parentName:"li"},"Packages/")," pour \xeatre votre Package, nommons-le ",(0,o.kt)("inlineCode",{parentName:"li"},"mon-package/"),"."),(0,o.kt)("li",{parentName:"ol"},"\xc0 l'int\xe9rieur de ",(0,o.kt)("inlineCode",{parentName:"li"},"mon-package/")," cr\xe9ez un dossier appel\xe9 ",(0,o.kt)("inlineCode",{parentName:"li"},"Serveur/")," et un fichier appel\xe9 ",(0,o.kt)("inlineCode",{parentName:"li"},"Index.lua")," dans ",(0,o.kt)("inlineCode",{parentName:"li"},"Serveur/"),"."),(0,o.kt)("li",{parentName:"ol"},"Dans la console de votre serveur, tapez ",(0,o.kt)("inlineCode",{parentName:"li"},"package load mon-package")," pour charger votre nouveau package et g\xe9n\xe9rer le fichier de configuration ",(0,o.kt)("inlineCode",{parentName:"li"},"Package.toml"),". Vous pouvez \xe9diter ce fichier avec une personnalisation appropri\xe9e plus tard.")),(0,o.kt)("h2",{id:"\xe9tape-3--ajout-de-fonctionnalit\xe9s-de-script"},"\xc9tape 3 : Ajout de fonctionnalit\xe9s de script"),(0,o.kt)("p",null,"Ouvrez le fichier ",(0,o.kt)("inlineCode",{parentName:"p"},"Index.lua")," dans votre \xe9diteur ","(","nous vous recommandons d'utiliser ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"vscode"),")",", et \xe9ditons notre premier script :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Packages/my-package/Server/Index.lua"',title:'"Packages/my-package/Server/Index.lua"'},'-- Affichons un message dans la console\nPackage.Log("Chargement de quelques Props =D")\n\n-- Faisons appara\xeetre quelques Props\nprop_table = Prop(Vector(200, 0, 0), Rotator(0, 0, 0), "nanos-world::SM_WoodenTable")\nprop_chair = Prop(Vector(400, 200, 0), Rotator(0, 0, 0), "nanos-world::SM_WoodenChair")\nprop_tire = Prop(Vector(600, 0, 0), Rotator(0, 0, 0), "nanos-world::SM_TireLarge")\n')),(0,o.kt)("p",null,"Pour appliquer vos modifications, ex\xe9cutez la commande dans la console du serveur : ",(0,o.kt)("inlineCode",{parentName:"p"},"package reload all"),"."),(0,o.kt)("h2",{id:"\xe9tape-4--rejoignez-votre-serveur"},"\xc9tape 4 : Rejoignez votre serveur"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Si vous rejoignez votre serveur, vous pouvez d\xe9j\xe0 voir le r\xe9sultat \ud83d\ude01"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(42360).Z})),(0,o.kt)("h2",{id:"\xe9tape-facultative--apparition-dun-personnage-pour-le-joueur"},"\xc9tape facultative : Apparition d'un personnage pour le joueur"),(0,o.kt)("p",null,"Vous avez peut-\xeatre remarqu\xe9 que vous n\u2019\xeates qu\u2019une \xe2me errante qui vole, donnez vous de la chair ! Pour cela, nous devrons interagir avec certains Events."),(0,o.kt)("p",null,"Ajoutons du code dans votre ",(0,o.kt)("inlineCode",{parentName:"p"},"Index.lua"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="my-package/Server/Index.lua"',title:'"my-package/Server/Index.lua"'},'-- Appel\xe9 quand les joueurs rejoignent le serveur (exemple: Spawn)\nPlayer.Subscribe("Spawn", function(new_player)\n    -- Fait appara\xeetre un personnage \xe0 la position 0, 0, 0 avec les param\xe8tres du constructeur par d\xe9faut\n    local new_character = Character(Vector(0, 0, 0))\n\n    -- Poss\xe9der le nouveau personnage\n    new_player:Possess(new_character)\nend)\n')),(0,o.kt)("p",null,"Pour appliquer vos modifications, ex\xe9cutez la commande dans la console du serveur : ",(0,o.kt)("inlineCode",{parentName:"p"},"package reload all"),"."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Maintenant si vous rejoignez le serveur, vous allez appara\xeetre dans un personnage !"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2852).Z})),(0,o.kt)("h3",{id:"finalisation--d\xe9truire-le-personnage-lorsquun-joueur-quitte-le-serveur"},"Finalisation : D\xe9truire le personnage lorsqu'un joueur quitte le serveur"),(0,o.kt)("p",null,"Notez que les personnages ne sont pas automatiquement d\xe9truits si le joueur se d\xe9connecte. Pour cela, nous devrons nous abonner lorsque le Joueur quittera le serveur ","(",(0,o.kt)("inlineCode",{parentName:"p"},"Destroy"),")"," et d\xe9truire manuellement le Personnage :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="my-package/Server/Index.lua"',title:'"my-package/Server/Index.lua"'},'-- Appel\xe9 quand les joueurs rejoignent le serveur (exemple: Spawn)\nPlayer.Subscribe("Spawn", function(new_player)\n    -- Fait appara\xeetre un personnage \xe0 la position 0, 0, 0 avec les param\xe8tres du constructeur par d\xe9faut\n    local new_character = Character(Vector(0, 0, 0))\n\n    -- Poss\xe9der le nouveau personnage\n    new_player:Possess(new_character)\nend)\n\n-- Quand le joueur quitte le serveur, d\xe9truire son personnage\nPlayer.Subscribe("Destroy", function(player)\n    local character = player:GetControlledCharacter()\n    if (character) then\n        character:Destroy()\n    end\nend)\n')),(0,o.kt)("p",null,"Pour appliquer vos modifications, ex\xe9cutez la commande dans la console du serveur : ",(0,o.kt)("inlineCode",{parentName:"p"},"package reload all"),"."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"F\xe9licitations ! Vous avez termin\xe9 votre premier script basique et appris:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Comment installer votre serveur"),(0,o.kt)("li",{parentName:"ul"},"Comment configurer un package simple"),(0,o.kt)("li",{parentName:"ul"},"Interaction basique avec les \xe9v\xe9nements d'entit\xe9"),(0,o.kt)("li",{parentName:"ul"},"Faire appara\xeetre des Props"),(0,o.kt)("li",{parentName:"ul"},"Apparition & Destruction des personnages")))),(0,o.kt)("h4",{id:"\xe9tape-suivante-recommand\xe9e"},"\xc9tape suivante recommand\xe9e"),(0,o.kt)(s.SM,{href:"core-concepts/scripting/classes-guide",mdxType:"ReferenceLink"},"Guide des classes"))}f.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},42360:function(e,t,n){t.Z=n.p+"assets/images/quick-start-01-d39ffd8db99ec85a30e86d3850a52e39.jpg"},2852:function(e,t,n){t.Z=n.p+"assets/images/quick-start-02-435ca7f0b250f71d862f710dc00b6e13.jpg"}}]);