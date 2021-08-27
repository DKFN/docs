"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9756],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return g}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),g=r,k=c["".concat(s,".").concat(g)]||c[g]||m[g]||o;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},23470:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={description:"All you need to know to Configure your server!",sidebar_position:2},s="Server Configuration",d={unversionedId:"core-concepts/server-manual/server-configuration",id:"core-concepts/server-manual/server-configuration",isDocsHomePage:!1,title:"Server Configuration",description:"All you need to know to Configure your server!",source:"@site/docs/core-concepts/server-manual/server-configuration.md",sourceDirName:"core-concepts/server-manual",slug:"/core-concepts/server-manual/server-configuration",permalink:"/docs/next/core-concepts/server-manual/server-configuration",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/core-concepts/server-manual/server-configuration.md",version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1630086235,formattedLastUpdatedAt:"8/27/2021",sidebarPosition:2,frontMatter:{description:"All you need to know to Configure your server!",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Server Installation",permalink:"/docs/next/core-concepts/server-manual/server-installation"},next:{title:"Command Line Interface",permalink:"/docs/next/core-concepts/server-manual/nanos-world-cli"}},p=[{value:"Server Configuration File",id:"server-configuration-file",children:[{value:"Settings Detailed",id:"settings-detailed",children:[]}]},{value:"Map &amp; Level",id:"map--level",children:[]},{value:"Server Console",id:"server-console",children:[{value:"Built-in Commands",id:"built-in-commands",children:[]},{value:"Custom Commands",id:"custom-commands",children:[]}]},{value:"Command Line Parameters",id:"command-line-parameters",children:[]},{value:"Common Console Messages/Warnings/Erros and it\u2019s meanings",id:"common-console-messageswarningserros-and-its-meanings",children:[]}],m={toc:p};function c(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"server-configuration"},"Server Configuration"),(0,o.kt)("p",null,"All you need to know to Configure your server!"),(0,o.kt)("h2",{id:"server-configuration-file"},"Server Configuration File"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"nanos world Config files use ",(0,o.kt)("strong",{parentName:"p"},"TOML")," ","(","Tom\u2019s Obvious, Minimal Language",")",", please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/toml-lang/toml"},"https://github.com/toml-lang/toml")," for more information and syntax."))),(0,o.kt)("p",null,"The server Configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"Config.toml")," is generated automatically when the server is launched for the first time. This file will always be overridden with the proper pattern after the server is loaded."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Server.toml"',title:'"Server.toml"'},'# server configurations\n[server]\n    # server name\n    name =                  "nanos world Server"\n    # server description (max 250 characters)\n    description =           ""\n    # server logo URL (recommended size: 150x75)\n    logo =                  "https://i.imgur.com/U1rZp5v.png"\n    # max players\n    max_players =           60\n    # leave it blank for no password\n    password =              ""\n    # server IP. we recommend leaving it 0.0.0.0 for default\n    ip =                    "0.0.0.0"\n    # server port (UDP forwarding needed)\n    port =                  7777\n    # HTTP port (TCP forwarding needed)\n    http_port =             7777\n    # announce server in the master server list\n    announce =              true\n    # server tick rate in milliseconds (dangerous! server will tick at each [tick_rate] ms, affecting both server and client performance. 33 ms means 30 ticks per second and is the default and recommended value)\n    tick_rate =             33\n    # log Level. (1) normal - (2) debug - (3) verbose\n    log_level =             2\n\n# nanos world configurations\n[world]\n    # game-mode package to load (set the main game-mode package to load - you can load only one \'game-mode\' package type at once)\n    game_mode =             ""\n    # loading-screen package to load (the loading screen will be displayed when players join your server)\n    loading_screen =        ""\n    # packages script list (leave it blank to load all packages, this is usually useful when you have tons of packages downloaded and only wants to load one or some)\n    packages = [\n\n    ]\n    # asset packs list (this will additionally load the asset packs you define here)\n    assets = [\n\n    ]\n    # default startup map\n    map =                   "nanos-world::BlankMap"\n    # banned IPs\n    banned_ips = [\n\n    ]\n')),(0,o.kt)("h3",{id:"settings-detailed"},"Settings Detailed"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Setting"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"name"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Name of the Server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"description"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Description of the Server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"logo"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Image URL to be displayed in the Server List")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"max_players"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Max ammount of players allowed to join")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"password"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Password to be able to connect")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"ip"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server IP. We recommend leaving it blank")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"port"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server main Port ","(","UDP",")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"http_port"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server HTTP Port ","(","TCP",")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"announce"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Whether to announce or not in the Server List")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"tick_rate"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server Tick in ms. We recommend leaving it 33")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"log_level"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Which Log level to output")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"game_mode"))),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/core-concepts/packages/packages#package-types"},"game-mode")," package to load -  you can only load one game-mode at once.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"loading_screen"))),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/core-concepts/packages/loading-screen"},"loading-screen")," package to load - you can only load one loading-screen at once.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"packages"))),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/core-concepts/packages/packages#package-types"},"script")," packages to load")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"assets"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Additional assets to force to load")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"map"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Which map to load")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"banned_ips"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"List of banned IPs")))),(0,o.kt)("h2",{id:"map--level"},"Map & Level"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(13881).Z})),(0,o.kt)("p",null,"The Map ","(","or Level",")"," is defined in the Server\u2019s config file, this level will be loaded when the player joins the server and the Path is supposed for be or a built-in asset or an asset which is located at ",(0,o.kt)("inlineCode",{parentName:"p"},"Assets/")," folder."),(0,o.kt)("p",null,"nanos world counts on ","(","for now",")"," 2 built-in maps: ",(0,o.kt)("inlineCode",{parentName:"p"},"nanos-world::BlankMap")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"nanos-world::TestingMap")," which can be used in your server without needing to download any Asset Pack."),(0,o.kt)("h2",{id:"server-console"},"Server Console"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(92387).Z})),(0,o.kt)("h3",{id:"built-in-commands"},"Built-in Commands"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"chat [message]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Sends a chat message")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"stop")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Stops the server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"package run [package_name] [lua_code]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Runs a code in a package")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"package reload [package_name]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Reloads a package")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"package reload all")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Reloads all packages")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"package unload [package_name]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Unloads a package")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"package load [package_name]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Loads a package")))),(0,o.kt)("h3",{id:"custom-commands"},"Custom Commands"),(0,o.kt)("p",null,"All ","(","non built-in",")"," commands will be sent into an event to the scripting/server-side:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'Server.Subscribe("Console", function(my_input)\n    Package.Log("Console command received: " .. my_input)\nend)\n')),(0,o.kt)("h2",{id:"command-line-parameters"},"Command Line Parameters"),(0,o.kt)("p",null,"It is possible to override the Server Configuration with Command Line Parameters. Note: this will not write to the Config file."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Value Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--name")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server name")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--description")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server description")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--password")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server password")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--ip")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server IP")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--map")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Map to load")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--port")),(0,o.kt)("td",{parentName:"tr",align:"left"},"number"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server port")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--http_port")),(0,o.kt)("td",{parentName:"tr",align:"left"},"number"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server HTTP port")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--announce")),(0,o.kt)("td",{parentName:"tr",align:"left"},"0 or 1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"If announce in master list")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--packages")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string list"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server packages")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--save")),(0,o.kt)("td",{parentName:"tr",align:"left"},"0 or 1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"If to save the parameters in Config.toml")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--max_players")),(0,o.kt)("td",{parentName:"tr",align:"left"},"number"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Max allowed players")))),(0,o.kt)("h2",{id:"common-console-messageswarningserros-and-its-meanings"},"Common Console Messages/Warnings/Erros and it\u2019s meanings"),(0,o.kt)("h4",{id:"server-tick-tooextreme-high-verify-the-server-performance-server-got-stuck-for-xms"},(0,o.kt)("inlineCode",{parentName:"h4"},"Server Tick too/extreme high! Verify the server performance! Server got stuck for Xms.")),(0,o.kt)("p",null,"It means the server got ",(0,o.kt)("strong",{parentName:"p"},"stuck")," ","(","laggy",")"," for X milliseconds. The warning ","(",(0,o.kt)("em",{parentName:"p"},"yellow"),")"," is not something to worry about, but too many Errors ","(",(0,o.kt)("em",{parentName:"p"},"red"),")"," could mean your server infrastructure is not that good or your scripting code is not that optimized. The server ",(0,o.kt)("em",{parentName:"p"},"tries\xb9")," runs at 33 Ticks per seconds ","(","or the amount configured at Config.toml",")",". The server runs in an infinite loop which in a frequency of ",(0,o.kt)("strong",{parentName:"p"},"1/33")," milliseconds. Inside this loop, all server operations are executed: receiving/sending network packages, executing functions ","(","received from network",")",", triggering scripting events, executing all Scripting\u2019s Ticks events, calculating Trigger overlaps, and so on. So if any of these operations take more more than ",(0,o.kt)("strong",{parentName:"p"},"1/33")," milliseconds to run, this warning will appear up."),(0,o.kt)("p",null,"I said ",(0,o.kt)("em",{parentName:"p"},"tries\xb9")," because on windows that is not that precise than on linux due internal c++ implementations."))}c.isMDXComponent=!0},13881:function(e,t,a){t.Z=a.p+"assets/images/server-map-0b0745e6fb974d2c18d5b386cd47070f.jpg"},92387:function(e,t,a){t.Z=a.p+"assets/images/server-326a9aac665826d697968ef362407a58.jpg"}}]);