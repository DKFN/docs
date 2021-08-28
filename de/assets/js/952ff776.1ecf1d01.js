"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1471],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),a=n(79443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(86010),s="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,d=39;var u=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,u=e.values,p=e.groupId,m=e.className,h=i(),g=h.tabGroupChoices,v=h.setTabGroupChoices,f=(0,r.useState)(a),k=f[0],y=f[1],w=r.Children.toArray(e.children),b=[];if(null!=p){var N=g[p];null!=N&&N!==k&&u.some((function(e){return e.value===N}))&&y(N)}var C=function(e){var t=e.currentTarget,n=b.indexOf(t),r=u[n].value;y(r),null!=p&&(v(p,r),setTimeout((function(){var e,n,r,a,i,o,s,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,s=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},S=function(e){var t,n;switch(e.keyCode){case d:var r=b.indexOf(e.target)+1;n=b[r]||b[0];break;case c:var a=b.indexOf(e.target)-1;n=b[a]||b[b.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":k===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:S,onFocus:C,onClick:C},n)}))),t?(0,r.cloneElement)(w.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},18801:function(e,t,n){n.d(t,{SM:function(){return a}});n(87462),n(63366),n(67294);var r=n(3905),a=function(e){var t=e.children,n=e.href;return(0,r.kt)("a",{class:"reference-link",href:n},t,(0,r.kt)("span",null,n.replace("/docs/","/")))}},10949:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return g}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(55064),s=n(58215),l=n(18801),c=["components"],d={description:"Starte deinen Server und dein erstes Package in unter 10 Minuten!",sidebar_position:1,tags:["scripting"]},u="Schnellstart",p={unversionedId:"getting-started/quick-start",id:"getting-started/quick-start",isDocsHomePage:!1,title:"Schnellstart",description:"Starte deinen Server und dein erstes Package in unter 10 Minuten!",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/getting-started/quick-start.mdx",sourceDirName:"getting-started",slug:"/getting-started/quick-start",permalink:"/de/docs/next/getting-started/quick-start",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/getting-started/quick-start.mdx",tags:[{label:"scripting",permalink:"/de/docs/next/tags/scripting"}],version:"current",sidebarPosition:1,frontMatter:{description:"Starte deinen Server und dein erstes Package in unter 10 Minuten!",sidebar_position:1,tags:["scripting"]},sidebar:"tutorialSidebar",previous:{title:"Contributing to the Docs",permalink:"/de/docs/next/contributing-to-the-docs"},next:{title:"\ud83d\udcd1 Complete Tutorials List",permalink:"/de/docs/next/getting-started/tutorials-and-examples/tutorials"}},m=[{value:"Schritt 1: Server herunterladen",id:"schritt-1-server-herunterladen",children:[]},{value:"Step 2: Creating a Basic Package",id:"step-2-creating-a-basic-package",children:[]},{value:"Step 3: Adding Script functionalities",id:"step-3-adding-script-functionalities",children:[]},{value:"Step 4: Join your server",id:"step-4-join-your-server",children:[{value:"Finishing up: Destroying the Character when a player Leaves the Server",id:"finishing-up-destroying-the-character-when-a-player-leaves-the-server",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],h={toc:m};function g(e){var t=e.components,d=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},h,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"schnellstart"},"Schnellstart"),(0,i.kt)("p",null,"Starte deinen Server und dein erstes Package in unter 10 Minuten!"),(0,i.kt)("h2",{id:"schritt-1-server-herunterladen"},"Schritt 1: Server herunterladen"),(0,i.kt)("p",null,"Use the following command to download the latest nanos world version from our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-server/releases/"},"Github"),":"),(0,i.kt)(o.Z,{defaultValue:"powershell",values:[{label:"PowerShell",value:"powershell"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"powershell",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'Invoke-WebRequest -Uri "https://github.com/nanos-world/nanos-world-server/releases/latest/download/NanosWorldServer.exe" -OutFile NanosWorldServer.exe\n'))),(0,i.kt)(s.Z,{value:"linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'wget "https://github.com/nanos-world/nanos-world-server/releases/latest/download/NanosWorldServer"\nchmod +x NanosWorldServer\n')))),(0,i.kt)("p",null,"Um den Server zu starten, muss nur die ",(0,i.kt)("inlineCode",{parentName:"p"},"NanosWorldServer.exe")," ausgef\xfchrt werden. After downloaded it, run it once to generate the proper and initial folders ",(0,i.kt)("inlineCode",{parentName:"p"},"Assets"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Packages")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Config.toml")," file, keep your server open for following this guide!"),(0,i.kt)("h2",{id:"step-2-creating-a-basic-package"},"Step 2: Creating a Basic Package"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a folder inside ",(0,i.kt)("inlineCode",{parentName:"li"},"Packages/")," to be your Package, let's name it ",(0,i.kt)("inlineCode",{parentName:"li"},"my-package/"),"."),(0,i.kt)("li",{parentName:"ol"},"Inside ",(0,i.kt)("inlineCode",{parentName:"li"},"my-package/")," create a folder called ",(0,i.kt)("inlineCode",{parentName:"li"},"Server/")," and a file called ",(0,i.kt)("inlineCode",{parentName:"li"},"Index.lua")," inside ",(0,i.kt)("inlineCode",{parentName:"li"},"Server/"),"."),(0,i.kt)("li",{parentName:"ol"},"In your server console, type ",(0,i.kt)("inlineCode",{parentName:"li"},"package load my-package")," to load your new package and generate the configuration file ",(0,i.kt)("inlineCode",{parentName:"li"},"Package.toml"),". You can edit this file with proper customization later on.")),(0,i.kt)("h2",{id:"step-3-adding-script-functionalities"},"Step 3: Adding Script functionalities"),(0,i.kt)("p",null,"Open the file ",(0,i.kt)("inlineCode",{parentName:"p"},"Index.lua")," in your preferred editor ","(","we recommend using ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"vscode"),")",", and let's edit our first script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Packages/my-package/Server/Index.lua"',title:'"Packages/my-package/Server/Index.lua"'},'-- Let\'s print to Console a friendly message\nPackage.Log("Loading some Props =D")\n\n-- Let\'s spawn some props\nprop_table = Prop(Vector(200, 0, 0), Rotator(0, 0, 0), "nanos-world::SM_WoodenTable")\nprop_chair = Prop(Vector(400, 200, 0), Rotator(0, 0, 0), "nanos-world::SM_WoodenChair")\nprop_tire = Prop(Vector(600, 0, 0), Rotator(0, 0, 0), "nanos-world::SM_TireLarge")\n')),(0,i.kt)("p",null,"To apply your changes, run the command in the server console: ",(0,i.kt)("inlineCode",{parentName:"p"},"package reload all"),"."),(0,i.kt)("h2",{id:"step-4-join-your-server"},"Step 4: Join your server"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"If you join your server you can already see the results \ud83d\ude01 :::")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("img",{src:n(42360).Z})),(0,i.kt)("h2",{parentName:"div",id:"extra-step-spawning-a-character-for-the-player"},"Extra Step: Spawning a Character for the Player"),(0,i.kt)("p",{parentName:"div"},"You may have noticed you are just a wandering soul flying around, let\u2019s give you some flesh! For that, we will need to interact with some Events."),(0,i.kt)("p",{parentName:"div"},"Let's append some code in your ",(0,i.kt)("inlineCode",{parentName:"p"},"Index.lua"),":"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="my-package/Server/Index.lua"',title:'"my-package/Server/Index.lua"'},'-- Called when Players join the server (i.e. Spawn)\nPlayer.Subscribe("Spawn", function(new_player)\n    -- Spawns a Character at position 0, 0, 0 with default\'s constructor parameters\n    local new_character = Character(Vector(0, 0, 0))\n\n    -- Possess the new Character\n    new_player:Possess(new_character)\nend)\n')),(0,i.kt)("p",{parentName:"div"},"To apply your changes, run the command in the server console: ",(0,i.kt)("inlineCode",{parentName:"p"},"package reload all"),"."))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2852).Z})),(0,i.kt)("h3",{id:"finishing-up-destroying-the-character-when-a-player-leaves-the-server"},"Finishing up: Destroying the Character when a player Leaves the Server"),(0,i.kt)("p",null,"Note that Characters aren't destroyed automatically if the Player disconnects. For that, we will need to Subscribe for when the Player leaves the server ","(",(0,i.kt)("inlineCode",{parentName:"p"},"Destroy"),")"," and manually destroying the Character:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="my-package/Server/Index.lua"',title:'"my-package/Server/Index.lua"'},'-- Called when Players join the server (i.e. Spawn)\nPlayer.Subscribe("Spawn", function(new_player)\n    -- Spawns a Character at position 0, 0, 0 with default\'s constructor parameters\n    local new_character = Character(Vector(0, 0, 0))\n\n    -- Possess the new Character\n    new_player:Possess(new_character)\nend)\n\n-- When Player leaves the server, destroy it\'s Character\nPlayer.Subscribe("Destroy", function(player)\n    local character = player:GetControlledCharacter()\n    if (character) then\n        character:Destroy()\n    end\nend)\n')),(0,i.kt)("p",null,"To apply your changes, run the command in the server console: ",(0,i.kt)("inlineCode",{parentName:"p"},"package reload all"),"."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Congratulations! You have finished your first basic Script and learned:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"How to setup your Server"),(0,i.kt)("li",{parentName:"ul"},"How to setup a simple Package"),(0,i.kt)("li",{parentName:"ul"},"Basic interact with entity Events"),(0,i.kt)("li",{parentName:"ul"},"Spawning Props"),(0,i.kt)("li",{parentName:"ul"},"Spawning & Destroying Characters :::")),(0,i.kt)("h4",{parentName:"div",id:"recommended-next-step"},"Recommended next step"),(0,i.kt)(l.SM,{href:"/docs/core-concepts/scripting/classes-guide",mdxType:"ReferenceLink"},"Classes Guide"))))}g.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},42360:function(e,t,n){t.Z=n.p+"assets/images/quick-start-01-d39ffd8db99ec85a30e86d3850a52e39.jpg"},2852:function(e,t,n){t.Z=n.p+"assets/images/quick-start-02-435ca7f0b250f71d862f710dc00b6e13.jpg"}}]);