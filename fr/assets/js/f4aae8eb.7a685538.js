"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5908],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(f,l(l({ref:t},u),{},{components:n})):o.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2714:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),l=["components"],i={description:"Extending the functionalities of nanos world Scripting API"},s="Modules",c={unversionedId:"core-concepts/modules",id:"core-concepts/modules",isDocsHomePage:!1,title:"Modules",description:"Extending the functionalities of nanos world Scripting API",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/core-concepts/modules.md",sourceDirName:"core-concepts",slug:"/core-concepts/modules",permalink:"/fr/docs/next/core-concepts/modules",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/modules.md",tags:[],version:"current",frontMatter:{description:"Extending the functionalities of nanos world Scripting API"},sidebar:"tutorialSidebar",previous:{title:"Assets",permalink:"/fr/docs/next/core-concepts/assets"},next:{title:"Server & Client Lifecycle",permalink:"/fr/docs/next/core-concepts/server-and-client-lifecycle"}},u=[{value:"List of Supported Modules",id:"list-of-supported-modules",children:[{value:"LuaSQL-MySQL",id:"luasql-mysql",children:[]}]}],p={toc:u};function d(e){var t=e.components,i=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"modules"},"Modules"),(0,a.kt)("p",null,"Extending the functionalities of nanos world Scripting API"),(0,a.kt)("p",null,"Modules allows you to extend the functionality of the nanos world scripting API on the server side. Currently only C modules are supported."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Be aware that this part of the scripting API is currently work in progress and may change at any time. :::")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"})),(0,a.kt)("h2",{id:"list-of-supported-modules"},"List of Supported Modules"),(0,a.kt)("h3",{id:"luasql-mysql"},"LuaSQL-MySQL"),(0,a.kt)("p",null,"LuaSQL-MySQL is a simple interface to communicate with a MySQL or MariaDB server. We provide an already precompiled version of this module which is already ready to use."),(0,a.kt)("p",null,"Documentation of LuaSQL: ",(0,a.kt)("a",{parentName:"p",href:"http://keplerproject.github.io/luasql/"},"http://keplerproject.github.io/luasql/")),(0,a.kt)("h4",{id:"downloading--installation"},"Downloading & Installation"),(0,a.kt)("p",null,"Download your platform library:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nanos-world-modules/luasql-mysql/releases/latest/download/mysql_windows.zip"},"mysql","_","windows.zip")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nanos-world-modules/luasql-mysql/releases/latest/download/mysql_linux.zip"},"mysql","_","linux.zip"))),(0,a.kt)("p",null,"Extract it into your ",(0,a.kt)("inlineCode",{parentName:"p"},"ServerRoot/Modules/")," folder:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(51866).Z})),(0,a.kt)("h4",{id:"usage-example"},"Usage Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'local luasql = require("luasql.mysql")\nlocal mysql = luasql.mysql()\nlocal connection = mysql:connect("database", "username", "password", "localhost", 3306)\n\nif not connection or not connection:ping() then\n    Package.Log("Connection failed")\nelse\n    connection:execute([[\n        CREATE TABLE hello_world(\n            message varchar(50)\n        );\n    ]])\n\n    connection:execute(string.format([[\n        INSERT INTO hello_world VALUES (\'%s\');\n    ]], connection:escape("Hello nanos.world")))\n    -- (You should always use escape for user input to prevent sql injection!)\n\n    local cursor = connection:execute("SELECT * FROM hello_world")\n    local row = cursor:fetch({}, "a")\n\n    Package.Log("Message: " .. tostring(row.message))\n    -- Outputs: "[Script]   Message: Hello nanos.world" to the console\nend\n')),(0,a.kt)("p",null,":::info ",(0,a.kt)("strong",{parentName:"p"},"Tip:")," Always escape all query parameters with ",(0,a.kt)("inlineCode",{parentName:"p"},":escape")," function! :::"))}d.isMDXComponent=!0},51866:function(e,t,n){t.Z=n.p+"assets/images/modules-a25effa36422cdf3462df383e35e4b9f.jpg"}}]);