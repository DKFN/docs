"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1259],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(67294),r=n(79443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(86010),s="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,d=39;var p=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,p=e.values,u=e.groupId,m=e.className,h=i(),v=h.tabGroupChoices,g=h.setTabGroupChoices,f=(0,a.useState)(r),k=f[0],y=f[1],w=a.Children.toArray(e.children),N=[];if(null!=u){var b=v[u];null!=b&&b!==k&&p.some((function(e){return e.value===b}))&&y(b)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),a=p[n].value;y(a),null!=u&&(g(u,a),setTimeout((function(){var e,n,a,r,i,o,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,s=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},S=function(e){var t,n;switch(e.keyCode){case d:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case c:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:S,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(w.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},18801:function(e,t,n){n.d(t,{SM:function(){return r}});n(87462),n(63366),n(67294);var a=n(3905),r=function(e){var t=e.children,n=e.href;return(0,a.kt)("a",{class:"reference-link",href:n},t,(0,a.kt)("span",null,n.replace("/docs/","/")))}},13363:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return v}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(55064),s=n(58215),l=n(18801),c=["components"],d={description:"Start your Server and first Package in under 10 minutes!",sidebar_position:1},p="Quick Start",u={unversionedId:"getting-started/quick-start",id:"version-0.73.0/getting-started/quick-start",isDocsHomePage:!1,title:"Quick Start",description:"Start your Server and first Package in under 10 minutes!",source:"@site/versioned_docs/version-0.73.0/getting-started/quick-start.mdx",sourceDirName:"getting-started",slug:"/getting-started/quick-start",permalink:"/fr/docs/getting-started/quick-start",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-0.73.0/getting-started/quick-start.mdx",tags:[],version:"0.73.0",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1630104518,formattedLastUpdatedAt:"27/08/2021",sidebarPosition:1,frontMatter:{description:"Start your Server and first Package in under 10 minutes!",sidebar_position:1},sidebar:"version-0.73.0/tutorialSidebar",previous:{title:"Contributing to the Docs",permalink:"/fr/docs/contributing-to-the-docs"},next:{title:"\ud83d\udcd1 Complete Tutorials List",permalink:"/fr/docs/getting-started/tutorials-and-examples/tutorials"}},m=[{value:"Step 1: Download the Server",id:"step-1-download-the-server",children:[]},{value:"Step 2: Creating a Basic Package",id:"step-2-creating-a-basic-package",children:[]},{value:"Step 3: Adding Script functionalities",id:"step-3-adding-script-functionalities",children:[]},{value:"Step 4: Join your server",id:"step-4-join-your-server",children:[]},{value:"Extra Step: Spawning a Character for the Player",id:"extra-step-spawning-a-character-for-the-player",children:[{value:"Finishing up: Destroying the Character when a player Leaves the Server",id:"finishing-up-destroying-the-character-when-a-player-leaves-the-server",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],h={toc:m};function v(e){var t=e.components,d=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},h,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quick-start"},"Quick Start"),(0,i.kt)("p",null,"Start your Server and first Package in under 10 minutes!"),(0,i.kt)("h2",{id:"step-1-download-the-server"},"Step 1: Download the Server"),(0,i.kt)("p",null,"Use the follow command to download the latest nanos world version from our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-server/releases/"},"Github"),":"),(0,i.kt)(o.Z,{defaultValue:"powershell",values:[{label:"PowerShell",value:"powershell"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"powershell",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'Invoke-WebRequest -Uri "https://github.com/nanos-world/nanos-world-server/releases/latest/download/NanosWorldServer.exe" -OutFile NanosWorldServer.exe\n'))),(0,i.kt)(s.Z,{value:"linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'wget "https://github.com/nanos-world/nanos-world-server/releases/latest/download/NanosWorldServer"\nchmod +x NanosWorldServer\n')))),(0,i.kt)("p",null,"The server is as simple as one executable file ",(0,i.kt)("inlineCode",{parentName:"p"},"NanosWorldServer.exe"),". After downloaded it, run it once to generate the proper and initial folders ",(0,i.kt)("inlineCode",{parentName:"p"},"Assets"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Packages")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Config.toml")," file, keep your server open for following this guide!"),(0,i.kt)("h2",{id:"step-2-creating-a-basic-package"},"Step 2: Creating a Basic Package"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a folder inside ",(0,i.kt)("inlineCode",{parentName:"li"},"Packages/")," to be your Package, let's name it ",(0,i.kt)("inlineCode",{parentName:"li"},"my-package/"),"."),(0,i.kt)("li",{parentName:"ol"},"Inside ",(0,i.kt)("inlineCode",{parentName:"li"},"my-package/")," create a folder called ",(0,i.kt)("inlineCode",{parentName:"li"},"Server/")," and a file called ",(0,i.kt)("inlineCode",{parentName:"li"},"Index.lua")," inside ",(0,i.kt)("inlineCode",{parentName:"li"},"Server/"),"."),(0,i.kt)("li",{parentName:"ol"},"In your server console, type ",(0,i.kt)("inlineCode",{parentName:"li"},"package load my-package")," to load your new package and generate the configuration file ",(0,i.kt)("inlineCode",{parentName:"li"},"Package.toml"),". You can edit this file with proper customization later on.")),(0,i.kt)("h2",{id:"step-3-adding-script-functionalities"},"Step 3: Adding Script functionalities"),(0,i.kt)("p",null,"Open the file ",(0,i.kt)("inlineCode",{parentName:"p"},"Index.lua")," in your preferred editor ","(","we recommend using ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"vscode"),")",", and let's edit our first script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Packages/my-package/Server/Index.lua"',title:'"Packages/my-package/Server/Index.lua"'},'-- Let\'s print to Console a friendly message\nPackage.Log("Loading some Props =D")\n\n-- Let\'s spawn some props\nprop_table = Prop(Vector(200, 0, 0), Rotator(0, 0, 0), "nanos-world::SM_WoodenTable")\nprop_chair = Prop(Vector(400, 200, 0), Rotator(0, 0, 0), "nanos-world::SM_WoodenChair")\nprop_tire = Prop(Vector(600, 0, 0), Rotator(0, 0, 0), "nanos-world::SM_TireLarge")\n')),(0,i.kt)("p",null,"To apply your changes, run the command in the server console: ",(0,i.kt)("inlineCode",{parentName:"p"},"package reload all"),"."),(0,i.kt)("h2",{id:"step-4-join-your-server"},"Step 4: Join your server"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you join your server you can already see the results \ud83d\ude01"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(42360).Z})),(0,i.kt)("h2",{id:"extra-step-spawning-a-character-for-the-player"},"Extra Step: Spawning a Character for the Player"),(0,i.kt)("p",null,"You may have noticed you are just a wandering soul flying around, let\u2019s give you some flesh! For that, we will need to interact with some Events."),(0,i.kt)("p",null,"Let's append some code in your ",(0,i.kt)("inlineCode",{parentName:"p"},"Index.lua"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="my-package/Server/Index.lua"',title:'"my-package/Server/Index.lua"'},'-- Called when Players join the server (i.e. Spawn)\nPlayer.Subscribe("Spawn", function(new_player)\n    -- Spawns a Character at position 0, 0, 0 with default\'s constructor parameters\n    local new_character = Character(Vector(0, 0, 0))\n\n    -- Possess the new Character\n    new_player:Possess(new_character)\nend)\n')),(0,i.kt)("p",null,"To apply your changes, run the command in the server console: ",(0,i.kt)("inlineCode",{parentName:"p"},"package reload all"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Now if you join the server, you will spawn into a Character!"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2852).Z})),(0,i.kt)("h3",{id:"finishing-up-destroying-the-character-when-a-player-leaves-the-server"},"Finishing up: Destroying the Character when a player Leaves the Server"),(0,i.kt)("p",null,"Note that Characters aren't destroyed automatically if the Player disconnects. For that, we will need to Subscribe for when the Player leaves the server ","(",(0,i.kt)("inlineCode",{parentName:"p"},"Destroy"),")"," and manually destroying the Character:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="my-package/Server/Index.lua"',title:'"my-package/Server/Index.lua"'},'-- Called when Players join the server (i.e. Spawn)\nPlayer.Subscribe("Spawn", function(new_player)\n    -- Spawns a Character at position 0, 0, 0 with default\'s constructor parameters\n    local new_character = Character(Vector(0, 0, 0))\n\n    -- Possess the new Character\n    new_player:Possess(new_character)\nend)\n\n-- When Player leaves the server, destroy it\'s Character\nPlayer.Subscribe("Destroy", function(player)\n    local character = player:GetControlledCharacter()\n    if (character) then\n        character:Destroy()\n    end\nend)\n')),(0,i.kt)("p",null,"To apply your changes, run the command in the server console: ",(0,i.kt)("inlineCode",{parentName:"p"},"package reload all"),"."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Congratulations! You have finished your first basic Script and learned:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"How to setup your Server"),(0,i.kt)("li",{parentName:"ul"},"How to setup a simple Package"),(0,i.kt)("li",{parentName:"ul"},"Basic interact with entity Events"),(0,i.kt)("li",{parentName:"ul"},"Spawning Props"),(0,i.kt)("li",{parentName:"ul"},"Spawning & Destroying Characters")))),(0,i.kt)("h4",{id:"recommended-next-step"},"Recommended next step"),(0,i.kt)(l.SM,{href:"/docs/core-concepts/scripting/classes-guide",mdxType:"ReferenceLink"},"Classes Guide"))}v.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},42360:function(e,t,n){t.Z=n.p+"assets/images/quick-start-01-d39ffd8db99ec85a30e86d3850a52e39.jpg"},2852:function(e,t,n){t.Z=n.p+"assets/images/quick-start-02-435ca7f0b250f71d862f710dc00b6e13.jpg"}}]);