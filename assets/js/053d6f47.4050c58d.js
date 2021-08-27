"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6083],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(67294),r=a(79443);var i=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=a(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,d=39;var p=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,p=e.values,u=e.groupId,m=e.className,h=i(),v=h.tabGroupChoices,g=h.setTabGroupChoices,f=(0,n.useState)(r),k=f[0],y=f[1],w=n.Children.toArray(e.children),N=[];if(null!=u){var b=v[u];null!=b&&b!==k&&p.some((function(e){return e.value===b}))&&y(b)}var C=function(e){var t=e.currentTarget,a=N.indexOf(t),n=p[a].value;y(n),null!=u&&(g(u,n),setTimeout((function(){var e,a,n,r,i,o,l,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,c=o.innerWidth,a>=0&&i<=c&&r<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},S=function(e){var t,a;switch(e.keyCode){case d:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case c:var r=N.indexOf(e.target)-1;a=N[r]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},m)},p.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:S,onFocus:C,onClick:C},a)}))),t?(0,n.cloneElement)(w.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},63935:function(e,t,a){a.d(t,{SM:function(){return r}});a(87462),a(63366),a(67294);var n=a(3905),r=function(e){var t=e.children,a=e.href;return(0,n.kt)("a",{class:"reference-link",href:a},t,(0,n.kt)("span",null,a.replace("/docs/","/")))}},56424:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return v}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=a(55064),l=a(58215),s=a(63935),c=["components"],d={description:"Start your Server and first Package in under 10 minutes!",sidebar_position:1},p="Quick Start",u={unversionedId:"getting-started/quick-start",id:"getting-started/quick-start",isDocsHomePage:!1,title:"Quick Start",description:"Start your Server and first Package in under 10 minutes!",source:"@site/docs/getting-started/quick-start.mdx",sourceDirName:"getting-started",slug:"/getting-started/quick-start",permalink:"/docs/next/getting-started/quick-start",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting-started/quick-start.mdx",version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1630104518,formattedLastUpdatedAt:"8/27/2021",sidebarPosition:1,frontMatter:{description:"Start your Server and first Package in under 10 minutes!",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Contributing to the Docs",permalink:"/docs/next/contributing-to-the-docs"},next:{title:"\ud83d\udcd1 Complete Tutorials List",permalink:"/docs/next/getting-started/tutorials-and-examples/tutorials"}},m=[{value:"Step 1: Download the Server",id:"step-1-download-the-server",children:[]},{value:"Step 2: Creating a Basic Package",id:"step-2-creating-a-basic-package",children:[]},{value:"Step 3: Adding Script functionalities",id:"step-3-adding-script-functionalities",children:[]},{value:"Step 4: Join your server",id:"step-4-join-your-server",children:[]},{value:"Extra Step: Spawning a Character for the Player",id:"extra-step-spawning-a-character-for-the-player",children:[{value:"Finishing up: Destroying the Character when a player Leaves the Server",id:"finishing-up-destroying-the-character-when-a-player-leaves-the-server",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],h={toc:m};function v(e){var t=e.components,d=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},h,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quick-start"},"Quick Start"),(0,i.kt)("p",null,"Start your Server and first Package in under 10 minutes!"),(0,i.kt)("h2",{id:"step-1-download-the-server"},"Step 1: Download the Server"),(0,i.kt)("p",null,"Use the follow command to download the latest nanos world version from our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-server/releases/"},"Github"),":"),(0,i.kt)(o.Z,{defaultValue:"powershell",values:[{label:"PowerShell",value:"powershell"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"powershell",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'Invoke-WebRequest -Uri "https://github.com/nanos-world/nanos-world-server/releases/latest/download/NanosWorldServer.exe" -OutFile NanosWorldServer.exe\n'))),(0,i.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'wget "https://github.com/nanos-world/nanos-world-server/releases/latest/download/NanosWorldServer"\nchmod +x NanosWorldServer\n')))),(0,i.kt)("p",null,"The server is as simple as one executable file ",(0,i.kt)("inlineCode",{parentName:"p"},"NanosWorldServer.exe"),". After downloaded it, run it once to generate the proper and initial folders ",(0,i.kt)("inlineCode",{parentName:"p"},"Assets"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Packages")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Config.toml")," file, keep your server open for following this guide!"),(0,i.kt)("h2",{id:"step-2-creating-a-basic-package"},"Step 2: Creating a Basic Package"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a folder inside ",(0,i.kt)("inlineCode",{parentName:"li"},"Packages/")," to be your Package, let's name it ",(0,i.kt)("inlineCode",{parentName:"li"},"my-package/"),"."),(0,i.kt)("li",{parentName:"ol"},"Inside ",(0,i.kt)("inlineCode",{parentName:"li"},"my-package/")," create a folder called ",(0,i.kt)("inlineCode",{parentName:"li"},"Server/")," and a file called ",(0,i.kt)("inlineCode",{parentName:"li"},"Index.lua")," inside ",(0,i.kt)("inlineCode",{parentName:"li"},"Server/"),"."),(0,i.kt)("li",{parentName:"ol"},"In your server console, type ",(0,i.kt)("inlineCode",{parentName:"li"},"package load my-package")," to load your new package and generate the configuration file ",(0,i.kt)("inlineCode",{parentName:"li"},"Package.toml"),". You can edit this file with proper customization later on.")),(0,i.kt)("h2",{id:"step-3-adding-script-functionalities"},"Step 3: Adding Script functionalities"),(0,i.kt)("p",null,"Open the file ",(0,i.kt)("inlineCode",{parentName:"p"},"Index.lua")," in your preferred editor ","(","we recommend using ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"vscode"),")",", and let's edit our first script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Packages/my-package/Server/Index.lua"',title:'"Packages/my-package/Server/Index.lua"'},'-- Let\'s print to Console a friendly message\nPackage.Log("Loading some Props =D")\n\n-- Let\'s spawn some props\nprop_table = Prop(Vector(200, 0, 0), Rotator(0, 0, 0), "nanos-world::SM_WoodenTable")\nprop_chair = Prop(Vector(400, 200, 0), Rotator(0, 0, 0), "nanos-world::SM_WoodenChair")\nprop_tire = Prop(Vector(600, 0, 0), Rotator(0, 0, 0), "nanos-world::SM_TireLarge")\n')),(0,i.kt)("p",null,"To apply your changes, run the command in the server console: ",(0,i.kt)("inlineCode",{parentName:"p"},"package reload all"),"."),(0,i.kt)("h2",{id:"step-4-join-your-server"},"Step 4: Join your server"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you join your server you can already see the results \ud83d\ude01"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(42360).Z})),(0,i.kt)("h2",{id:"extra-step-spawning-a-character-for-the-player"},"Extra Step: Spawning a Character for the Player"),(0,i.kt)("p",null,"You may have noticed you are just a wandering soul flying around, let\u2019s give you some flesh! For that, we will need to interact with some Events."),(0,i.kt)("p",null,"Let's append some code in your ",(0,i.kt)("inlineCode",{parentName:"p"},"Index.lua"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="my-package/Server/Index.lua"',title:'"my-package/Server/Index.lua"'},'-- Called when Players join the server (i.e. Spawn)\nPlayer.Subscribe("Spawn", function(new_player)\n    -- Spawns a Character at position 0, 0, 0 with default\'s constructor parameters\n    local new_character = Character(Vector(0, 0, 0))\n\n    -- Possess the new Character\n    new_player:Possess(new_character)\nend)\n')),(0,i.kt)("p",null,"To apply your changes, run the command in the server console: ",(0,i.kt)("inlineCode",{parentName:"p"},"package reload all"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Now if you join the server, you will spawn into a Character!"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2852).Z})),(0,i.kt)("h3",{id:"finishing-up-destroying-the-character-when-a-player-leaves-the-server"},"Finishing up: Destroying the Character when a player Leaves the Server"),(0,i.kt)("p",null,"Note that Characters aren't destroyed automatically if the Player disconnects. For that, we will need to Subscribe for when the Player leaves the server ","(",(0,i.kt)("inlineCode",{parentName:"p"},"Destroy"),")"," and manually destroying the Character:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="my-package/Server/Index.lua"',title:'"my-package/Server/Index.lua"'},'-- Called when Players join the server (i.e. Spawn)\nPlayer.Subscribe("Spawn", function(new_player)\n    -- Spawns a Character at position 0, 0, 0 with default\'s constructor parameters\n    local new_character = Character(Vector(0, 0, 0))\n\n    -- Possess the new Character\n    new_player:Possess(new_character)\nend)\n\n-- When Player leaves the server, destroy it\'s Character\nPlayer.Subscribe("Destroy", function(player)\n    local character = player:GetControlledCharacter()\n    if (character) then\n        character:Destroy()\n    end\nend)\n')),(0,i.kt)("p",null,"To apply your changes, run the command in the server console: ",(0,i.kt)("inlineCode",{parentName:"p"},"package reload all"),"."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Congratulations! You have finished your first basic Script and learned:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"How to setup your Server"),(0,i.kt)("li",{parentName:"ul"},"How to setup a simple Package"),(0,i.kt)("li",{parentName:"ul"},"Basic interact with entity Events"),(0,i.kt)("li",{parentName:"ul"},"Spawning Props"),(0,i.kt)("li",{parentName:"ul"},"Spawning & Destroying Characters")))),(0,i.kt)("h4",{id:"recommended-next-step"},"Recommended next step"),(0,i.kt)(s.SM,{href:"/docs/core-concepts/scripting/classes-guide",mdxType:"ReferenceLink"},"Classes Guide"))}v.isMDXComponent=!0},86010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})},42360:function(e,t,a){t.Z=a.p+"assets/images/quick-start-01-d39ffd8db99ec85a30e86d3850a52e39.jpg"},2852:function(e,t,a){t.Z=a.p+"assets/images/quick-start-02-435ca7f0b250f71d862f710dc00b6e13.jpg"}}]);