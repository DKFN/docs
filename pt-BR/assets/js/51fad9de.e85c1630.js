"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7761],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),a=n(79443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(86010),s="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,u=39;var p=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,p=e.values,d=e.groupId,m=e.className,h=i(),f=h.tabGroupChoices,g=h.setTabGroupChoices,v=(0,r.useState)(a),k=v[0],y=v[1],w=r.Children.toArray(e.children),b=[];if(null!=d){var N=f[d];null!=N&&N!==k&&p.some((function(e){return e.value===N}))&&y(N)}var C=function(e){var t=e.currentTarget,n=b.indexOf(t),r=p[n].value;y(r),null!=d&&(g(d,r),setTimeout((function(){var e,n,r,a,i,o,s,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,s=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},S=function(e){var t,n;switch(e.keyCode){case u:var r=b.indexOf(e.target)+1;n=b[r]||b[0];break;case c:var a=b.indexOf(e.target)-1;n=b[a]||b[b.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":k===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:S,onFocus:C,onClick:C},n)}))),t?(0,r.cloneElement)(w.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},87469:function(e,t,n){n.d(t,{YS:function(){return o},SM:function(){return s},Yb:function(){return d},aj:function(){return m},rt:function(){return h},Ut:function(){return f},PZ:function(){return g}});n(87462),n(63366),n(67294);var r=n(3905),a=n(80907),i=function(){return(0,a.zu)().path},o=function(e){var t=e.title,n=e.description,a=e.href,o=e.image_src;return(0,r.kt)("a",{class:"card-link",href:a.startsWith("http")?a:i()+"/"+a},(0,r.kt)("img",{src:o||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,t),(0,r.kt)("p",null,n))},s=function(e){var t=e.children,n=e.href;return(0,r.kt)("a",{class:"reference-link",href:i()+"/"+n},t,(0,r.kt)("span",null,n))},l=function(e,t){return(0,r.kt)("a",{class:"authority-availability",href:i()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:t}))},c=function(e){return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},u=function(e,t){return(0,r.kt)("a",{href:i()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},p=function(e,t){return(0,r.kt)("a",{href:i()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},d=function(e){var t=e.children;return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/enums#"+t.toLowerCase()},t)},m={AuthorityOnly:function(){return l("/img/scripting/authority-only.svg","authority-only - you can only call this method on the side which spawned it!")},ServerOnly:function(){return l("/img/scripting/server-only.svg","server-only - you can only call this method on server side!")},ClientOnly:function(){return l("/img/scripting/client-only.svg","client-only - you can only call this method on client side!")}},h={Number:function(){return c("number")},String:function(){return c("string")},Boolean:function(){return c("boolean")},Table:function(){return c("table")},Iterator:function(){return c("iterator")},Any:function(){return c("any")},Function:function(){return c("function")},Nil:function(){return c("nil")}},f={Vector:function(){return u("Vector")},Rotator:function(){return u("Rotator")},Color:function(){return u("Color")},Quat:function(){return u("Quat","quaternion")},Vector2D:function(){return u("Vector2D","vectortwod")}},g={Actor:function(){return p("Actor","base-classes/actor")},Paintable:function(){return p("Paintable","base-classes/paintable")},Pickable:function(){return p("Pickable","base-classes/pickable")},Cable:function(){return p("Cable")},Character:function(){return p("Character")},File:function(){return p("File")},Grenade:function(){return p("Grenade")},Item:function(){return p("Item")},Light:function(){return p("Light")},Particle:function(){return p("Particle")},Player:function(){return p("Player")},Prop:function(){return p("Prop")},Sound:function(){return p("Sound")},StaticMesh:function(){return p("StaticMesh","static-mesh")},TextRender:function(){return p("TextRender","text-render")},Trigger:function(){return p("Trigger")},Vehicle:function(){return p("Vehicle")},Weapon:function(){return p("Weapon")},WebUI:function(){return p("WebUI")}}},74934:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return f}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(55064),s=n(58215),l=n(87469),c=["components"],u={description:"Start your Server and first Package in under 10 minutes!",sidebar_position:1,tags:["script"]},p="Quick Start",d={unversionedId:"getting-started/quick-start",id:"getting-started/quick-start",isDocsHomePage:!1,title:"Quick Start",description:"Start your Server and first Package in under 10 minutes!",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/getting-started/quick-start.mdx",sourceDirName:"getting-started",slug:"/getting-started/quick-start",permalink:"/pt-BR/docs/next/getting-started/quick-start",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/getting-started/quick-start.mdx",tags:[{label:"script",permalink:"/pt-BR/docs/next/tags/script"}],version:"current",sidebarPosition:1,frontMatter:{description:"Start your Server and first Package in under 10 minutes!",sidebar_position:1,tags:["script"]},sidebar:"main",previous:{title:"Contribuindo para a Docs",permalink:"/pt-BR/docs/next/contributing-to-the-docs"},next:{title:"\ud83d\udcd1 Lista Completa de Tutoriais",permalink:"/pt-BR/docs/next/getting-started/tutorials-and-examples/tutorials"}},m=[{value:"Step 1: Download the Server",id:"step-1-download-the-server",children:[]},{value:"Step 2: Creating a Basic Package",id:"step-2-creating-a-basic-package",children:[]},{value:"Step 3: Adding Script functionalities",id:"step-3-adding-script-functionalities",children:[]},{value:"Step 4: Join your server",id:"step-4-join-your-server",children:[]},{value:"Extra Step: Spawning a Character for the Player",id:"extra-step-spawning-a-character-for-the-player",children:[{value:"Finishing up: Destroying the Character when a player Leaves the Server",id:"finishing-up-destroying-the-character-when-a-player-leaves-the-server",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],h={toc:m};function f(e){var t=e.components,u=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quick-start"},"Quick Start"),(0,i.kt)("p",null,"Start your Server and first Package in under 10 minutes!"),(0,i.kt)("h2",{id:"step-1-download-the-server"},"Step 1: Download the Server"),(0,i.kt)("p",null,"Use the following command to download the latest nanos world version from our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-server/releases/"},"Github"),":"),(0,i.kt)(o.Z,{defaultValue:"powershell",values:[{label:"PowerShell",value:"powershell"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"powershell",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'Invoke-WebRequest -Uri "https://github.com/nanos-world/nanos-world-server/releases/latest/download/NanosWorldServer.exe" -OutFile NanosWorldServer.exe\n'))),(0,i.kt)(s.Z,{value:"linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'wget "https://github.com/nanos-world/nanos-world-server/releases/latest/download/NanosWorldServer"\nchmod +x NanosWorldServer\n')))),(0,i.kt)("p",null,"The server is as simple as one executable file ",(0,i.kt)("inlineCode",{parentName:"p"},"NanosWorldServer.exe"),". After downloaded it, run it once to generate the proper and initial folders ",(0,i.kt)("inlineCode",{parentName:"p"},"Assets"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Packages")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Config.toml")," file, keep your server open for following this guide!"),(0,i.kt)("h2",{id:"step-2-creating-a-basic-package"},"Step 2: Creating a Basic Package"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a folder inside ",(0,i.kt)("inlineCode",{parentName:"li"},"Packages/")," to be your Package, let's name it ",(0,i.kt)("inlineCode",{parentName:"li"},"my-package/"),"."),(0,i.kt)("li",{parentName:"ol"},"Inside ",(0,i.kt)("inlineCode",{parentName:"li"},"my-package/")," create a folder called ",(0,i.kt)("inlineCode",{parentName:"li"},"Server/")," and a file called ",(0,i.kt)("inlineCode",{parentName:"li"},"Index.lua")," inside ",(0,i.kt)("inlineCode",{parentName:"li"},"Server/"),"."),(0,i.kt)("li",{parentName:"ol"},"In your server console, type ",(0,i.kt)("inlineCode",{parentName:"li"},"package load my-package")," to load your new package and generate the configuration file ",(0,i.kt)("inlineCode",{parentName:"li"},"Package.toml"),". You can edit this file with proper customization later on.")),(0,i.kt)("h2",{id:"step-3-adding-script-functionalities"},"Step 3: Adding Script functionalities"),(0,i.kt)("p",null,"Open the file ",(0,i.kt)("inlineCode",{parentName:"p"},"Index.lua")," in your preferred editor ","(","we recommend using ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"vscode"),")",", and let's edit our first script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Packages/my-package/Server/Index.lua"',title:'"Packages/my-package/Server/Index.lua"'},'-- Let\'s print to Console a friendly message\nPackage.Log("Loading some Props =D")\n\n-- Let\'s spawn some props\nprop_table = Prop(Vector(200, 0, 0), Rotator(0, 0, 0), "nanos-world::SM_WoodenTable")\nprop_chair = Prop(Vector(400, 200, 0), Rotator(0, 0, 0), "nanos-world::SM_WoodenChair")\nprop_tire = Prop(Vector(600, 0, 0), Rotator(0, 0, 0), "nanos-world::SM_TireLarge")\n')),(0,i.kt)("p",null,"To apply your changes, run the command in the server console: ",(0,i.kt)("inlineCode",{parentName:"p"},"package reload all"),"."),(0,i.kt)("h2",{id:"step-4-join-your-server"},"Step 4: Join your server"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you join your server you can already see the results \ud83d\ude01"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(42360).Z})),(0,i.kt)("h2",{id:"extra-step-spawning-a-character-for-the-player"},"Extra Step: Spawning a Character for the Player"),(0,i.kt)("p",null,"You may have noticed you are just a wandering soul flying around, let\u2019s give you some flesh! For that, we will need to interact with some Events."),(0,i.kt)("p",null,"Let's append some code in your ",(0,i.kt)("inlineCode",{parentName:"p"},"Index.lua"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="my-package/Server/Index.lua"',title:'"my-package/Server/Index.lua"'},'-- Called when Players join the server (i.e. Spawn)\nPlayer.Subscribe("Spawn", function(new_player)\n    -- Spawns a Character at position 0, 0, 0 with default\'s constructor parameters\n    local new_character = Character(Vector(0, 0, 0))\n\n    -- Possess the new Character\n    new_player:Possess(new_character)\nend)\n')),(0,i.kt)("p",null,"To apply your changes, run the command in the server console: ",(0,i.kt)("inlineCode",{parentName:"p"},"package reload all"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Now if you join the server, you will spawn into a Character!"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2852).Z})),(0,i.kt)("h3",{id:"finishing-up-destroying-the-character-when-a-player-leaves-the-server"},"Finishing up: Destroying the Character when a player Leaves the Server"),(0,i.kt)("p",null,"Note that Characters aren't destroyed automatically if the Player disconnects. For that, we will need to Subscribe for when the Player leaves the server ","(",(0,i.kt)("inlineCode",{parentName:"p"},"Destroy"),")"," and manually destroying the Character:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="my-package/Server/Index.lua"',title:'"my-package/Server/Index.lua"'},'-- Called when Players join the server (i.e. Spawn)\nPlayer.Subscribe("Spawn", function(new_player)\n    -- Spawns a Character at position 0, 0, 0 with default\'s constructor parameters\n    local new_character = Character(Vector(0, 0, 0))\n\n    -- Possess the new Character\n    new_player:Possess(new_character)\nend)\n\n-- When Player leaves the server, destroy it\'s Character\nPlayer.Subscribe("Destroy", function(player)\n    local character = player:GetControlledCharacter()\n    if (character) then\n        character:Destroy()\n    end\nend)\n')),(0,i.kt)("p",null,"To apply your changes, run the command in the server console: ",(0,i.kt)("inlineCode",{parentName:"p"},"package reload all"),"."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Congratulations! You have finished your first basic Script and learned:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"How to setup your Server"),(0,i.kt)("li",{parentName:"ul"},"How to setup a simple Package"),(0,i.kt)("li",{parentName:"ul"},"Basic interact with entity Events"),(0,i.kt)("li",{parentName:"ul"},"Spawning Props"),(0,i.kt)("li",{parentName:"ul"},"Spawning & Destroying Characters")))),(0,i.kt)("h4",{id:"recommended-next-step"},"Recommended next step"),(0,i.kt)(l.SM,{href:"core-concepts/scripting/classes-guide",mdxType:"ReferenceLink"},"Classes Guide"))}f.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},42360:function(e,t,n){t.Z=n.p+"assets/images/quick-start-01-d39ffd8db99ec85a30e86d3850a52e39.jpg"},2852:function(e,t,n){t.Z=n.p+"assets/images/quick-start-02-435ca7f0b250f71d862f710dc00b6e13.jpg"}}]);