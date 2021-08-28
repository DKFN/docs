"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9168],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48101:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],l={description:"Extending the functionalities of nanos world Scripting API"},s="Modules",c={unversionedId:"core-concepts/modules",id:"version-0.73.0/core-concepts/modules",isDocsHomePage:!1,title:"Modules",description:"Extending the functionalities of nanos world Scripting API",source:"@site/versioned_docs/version-0.73.0/core-concepts/modules.md",sourceDirName:"core-concepts",slug:"/core-concepts/modules",permalink:"/fr/docs/core-concepts/modules",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-0.73.0/core-concepts/modules.md",tags:[],version:"0.73.0",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1630097936,formattedLastUpdatedAt:"27/08/2021",frontMatter:{description:"Extending the functionalities of nanos world Scripting API"},sidebar:"version-0.73.0/tutorialSidebar",previous:{title:"Assets",permalink:"/fr/docs/core-concepts/assets"},next:{title:"Server & Client Lifecycle",permalink:"/fr/docs/core-concepts/server-and-client-lifecycle"}},d=[{value:"List of Supported Modules",id:"list-of-supported-modules",children:[{value:"LuaSQL-MySQL",id:"luasql-mysql",children:[]}]}],p={toc:d};function u(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"modules"},"Modules"),(0,r.kt)("p",null,"Extending the functionalities of nanos world Scripting API"),(0,r.kt)("p",null,"Modules allows you to extend the functionality of the nanos world scripting API on the server side. Currently only C modules are supported."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Be aware that this part of the scripting API is currently work in progress and may change at any time."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A guide to create your own module will follow ","(","soon\u2122",")","."))),(0,r.kt)("h2",{id:"list-of-supported-modules"},"List of Supported Modules"),(0,r.kt)("h3",{id:"luasql-mysql"},"LuaSQL-MySQL"),(0,r.kt)("p",null,"LuaSQL-MySQL is a simple interface to communicate with a MySQL or MariaDB server. We provide an already precompiled version of this module which is already ready to use."),(0,r.kt)("p",null,"Documentation of LuaSQL: ",(0,r.kt)("a",{parentName:"p",href:"http://keplerproject.github.io/luasql/"},"http://keplerproject.github.io/luasql/")),(0,r.kt)("h4",{id:"downloading--installation"},"Downloading & Installation"),(0,r.kt)("p",null,"Download your platform library:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nanos-world-modules/luasql-mysql/releases/latest/download/mysql_windows.zip"},"mysql","_","windows.zip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nanos-world-modules/luasql-mysql/releases/latest/download/mysql_linux.zip"},"mysql","_","linux.zip"))),(0,r.kt)("p",null,"Extract it into your ",(0,r.kt)("inlineCode",{parentName:"p"},"ServerRoot/Modules/")," folder:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(51866).Z})),(0,r.kt)("h4",{id:"usage-example"},"Usage Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'local luasql = require("luasql.mysql")\nlocal mysql = luasql.mysql()\nlocal connection = mysql:connect("database", "username", "password", "localhost", 3306)\n\nif not connection or not connection:ping() then\n    Package.Log("Connection failed")\nelse\n    connection:execute([[\n        CREATE TABLE hello_world(\n            message varchar(50)\n        );\n    ]])\n\n    connection:execute(string.format([[\n        INSERT INTO hello_world VALUES (\'%s\');\n    ]], connection:escape("Hello nanos.world")))\n    -- (You should always use escape for user input to prevent sql injection!)\n\n    local cursor = connection:execute("SELECT * FROM hello_world")\n    local row = cursor:fetch({}, "a")\n\n    Package.Log("Message: " .. tostring(row.message))\n    -- Outputs: "[Script]   Message: Hello nanos.world" to the console\nend\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Tip:")," Always escape all query parameters with ",(0,r.kt)("inlineCode",{parentName:"p"},":escape")," function!"))))}u.isMDXComponent=!0},51866:function(e,t,n){t.Z=n.p+"assets/images/modules-a25effa36422cdf3462df383e35e4b9f.jpg"}}]);