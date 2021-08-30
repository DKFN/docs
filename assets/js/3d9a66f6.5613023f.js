"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[754],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(n),m=r,u=g["".concat(l,".").concat(m)]||g[m]||d[m]||o;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3804:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return g}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={description:"Custom Loading Screen for your servers",sidebar_position:1,tags:["scripting","ui"]},l="Loading Screen",c={unversionedId:"core-concepts/packages/loading-screen",id:"core-concepts/packages/loading-screen",isDocsHomePage:!1,title:"Loading Screen",description:"Custom Loading Screen for your servers",source:"@site/docs/core-concepts/packages/loading-screen.md",sourceDirName:"core-concepts/packages",slug:"/core-concepts/packages/loading-screen",permalink:"/docs/next/core-concepts/packages/loading-screen",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/packages/loading-screen.md",tags:[{label:"scripting",permalink:"/docs/next/tags/scripting"},{label:"ui",permalink:"/docs/next/tags/ui"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1630277154,formattedLastUpdatedAt:"8/29/2021",sidebarPosition:1,frontMatter:{description:"Custom Loading Screen for your servers",sidebar_position:1,tags:["scripting","ui"]},sidebar:"main",previous:{title:"Packages Guide",permalink:"/docs/next/core-concepts/packages/packages"},next:{title:"Classes Guide",permalink:"/docs/next/core-concepts/scripting/classes-guide"}},p=[{value:"Creating a Loading Screen",id:"creating-a-loading-screen",children:[{value:"Getting Load/Download Progress",id:"getting-loaddownload-progress",children:[]}]},{value:"Configuring your server to use the Loading Screen",id:"configuring-your-server-to-use-the-loading-screen",children:[]}],d={toc:p};function g(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"loading-screen"},"Loading Screen"),(0,o.kt)("p",null,"In nanos world it is possible to add a customized and dynamic Loading Screen to your Server using ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/scripting-reference/classes/webui"},"WebUI"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(10635).Z})),(0,o.kt)("h2",{id:"creating-a-loading-screen"},"Creating a Loading Screen"),(0,o.kt)("p",null,"For that, you will need to create a new Package of type ",(0,o.kt)("a",{parentName:"p",href:"#package-types"},"loading-screen"),", and add your HTML/CSS/JS files into the Package's root folder. Your primary HTML file should be called ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html"),". It will look like that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Packages/\n|   my-loading-screen/\n|   |   Package.toml\n|   |   index.html\n|   |   style.css\n|   |   ...\n")),(0,o.kt)("h3",{id:"getting-loaddownload-progress"},"Getting Load/Download Progress"),(0,o.kt)("p",null,"To be able to display dynamic information in the screen, you can listen to the Event ",(0,o.kt)("inlineCode",{parentName:"p"},"UpdateScreen")," ","(","which will trigger every few ms",")",":"),(0,o.kt)("h4",{id:"event-updatescreen"},"Event ",(0,o.kt)("inlineCode",{parentName:"h4"},"UpdateScreen")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"message"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Display the current state ","(","loading, validating, downloading...",")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"message_secondary"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Display the current asset/file being loaded or downloaded")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"progress_small"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Current small progress")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"progress_small_total"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Max small progress")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"progress"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Current progress")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"progress_total"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Max progress value")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"current_stage"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"The current stage of the load ","(",(0,o.kt)("inlineCode",{parentName:"td"},"loading"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"downloading"),")")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"TIP"),": You can use ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"progress"))," and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"progress_total"))," for filling up the main loading bar, and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"progress_small"))," for a small/sub loading bar."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Always use ",(0,o.kt)("inlineCode",{parentName:"p"},"progress / progress_total")," for getting the current ",(0,o.kt)("inlineCode",{parentName:"p"},"%")," percentage, as progress","_","total can represent the total amount of files being downloaded for example."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Packages/my-loading-screen/index.js"',title:'"Packages/my-loading-screen/index.js"'},'Events.Subscribe("UpdateScreen", function(message, message_secondary, progress_small, progress_small_total, progress, progress_total, current_stage) {\n    // Update your HTML here\n});\n')),(0,o.kt)("p",null,"Also, it is possible to fetch Player\u2019s information by accessing a global variable called LoadingScreen:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var LoadingScreen = {\n  server_ip,\n  server_port,\n  server_http_port,\n  player_nanos_id,\n  player_nanos_username\n};\n")),(0,o.kt)("h2",{id:"configuring-your-server-to-use-the-loading-screen"},"Configuring your server to use the Loading Screen"),(0,o.kt)("p",null,"After creating your loading-screen package, you will need to configure your server to load it in your ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/core-concepts/server-manual/server-configuration#server-configuration-file"},"Config.toml"),". Just set the setting ",(0,o.kt)("inlineCode",{parentName:"p"},"loading_screen")," to your Package's folder name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'# loading-screen package to load (the loading screen will be displayed when players join your server)\nloading_screen = "my-loading-screen"\n')))}g.isMDXComponent=!0},10635:function(e,t,n){t.Z=n.p+"assets/images/loading-screen-cc9d3a28eb7260f15a2a9cad43506482.jpg"}}]);