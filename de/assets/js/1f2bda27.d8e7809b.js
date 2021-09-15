"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[523],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,k=m["".concat(s,".").concat(p)]||m[p]||u[p]||i;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54639:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return f}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={description:"Wie man nanos world CLI verwendet, um Pakete zu installieren und den Server zu aktualisieren.",sidebar_position:3,tags:["hosting"]},s="Kommandozeilenschnittstelle",c={unversionedId:"core-concepts/server-manual/nanos-world-cli",id:"version-latest/core-concepts/server-manual/nanos-world-cli",isDocsHomePage:!1,title:"Kommandozeilenschnittstelle",description:"Wie man nanos world CLI verwendet, um Pakete zu installieren und den Server zu aktualisieren.",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/core-concepts/server-manual/nanos-world-cli.mdx",sourceDirName:"core-concepts/server-manual",slug:"/core-concepts/server-manual/nanos-world-cli",permalink:"/de/docs/core-concepts/server-manual/nanos-world-cli",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/server-manual/nanos-world-cli.mdx",tags:[{label:"hosting",permalink:"/de/docs/tags/hosting"}],version:"latest",sidebarPosition:3,frontMatter:{description:"Wie man nanos world CLI verwendet, um Pakete zu installieren und den Server zu aktualisieren.",sidebar_position:3,tags:["hosting"]},sidebar:"version-latest/main",previous:{title:"Serverkonfiguration",permalink:"/de/docs/core-concepts/server-manual/server-configuration"},next:{title:"Paketleitfaden",permalink:"/de/docs/core-concepts/packages/packages"}},d=[{value:"CLI starten",id:"cli-starten",children:[]},{value:"CLI-Befehle",id:"cli-befehle",children:[]},{value:"Ein-Liner-CLI",id:"ein-liner-cli",children:[]}],u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},m=u("Tabs"),p=u("TabItem"),k={toc:d};function f(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kommandozeilenschnittstelle"},"Kommandozeilenschnittstelle"),(0,i.kt)("p",null,"Wie man nanos world CLI verwendet, um Pakete zu installieren und den Server zu aktualisieren."),(0,i.kt)("p",null,"importiere Tabs von '@theme/Tabs'; importiere TabItem von '@theme/TabItem';"),(0,i.kt)("p",null,"nanos world stellt ein CLI ","(","Command Line Interface",")"," zur Verf\xfcgung, um den Server, die Pakete und die Assets zu aktualisieren und sie auch herunterzuladen!"),(0,i.kt)("h2",{id:"cli-starten"},"CLI starten"),(0,i.kt)("p",null,"Um den Client auszuf\xfchren, starten Sie den Server mit dem ",(0,i.kt)("inlineCode",{parentName:"p"},"--cli")," Argument:"),(0,i.kt)(m,{defaultValue:"cmd",values:[{label:"Windows",value:"cmd"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,i.kt)(p,{value:"cmd",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer.exe --cli\n"))),(0,i.kt)(p,{value:"linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer --cli\n")))),(0,i.kt)("p",null," After started, if you type ",(0,i.kt)("inlineCode",{parentName:"p"},"help")," you can see all the available commands:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(69721).Z})),(0,i.kt)("h2",{id:"cli-befehle"},"CLI-Befehle"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Befehle"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"installiere Paket [PACKAGE_NAME]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Paket installieren")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"aktualisiere Paket [PACKAGE_NAME]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Paket aktualisieren")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"installiere Assets [ASSET_NAME]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Ein Asset Pack installieren")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"aktualisiere Assets [ASSET_NAME]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Asset Paket aktualisieren")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"aktualisiere Server")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Server aktualisieren")))),(0,i.kt)("h2",{id:"ein-liner-cli"},"Ein-Liner-CLI"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Es ist auch m\xf6glich, CLI in einem nicht-interaktiven Modus auszuf\xfchren, f\xfchren Sie einfach den Befehl zusammen nach dem ",(0,i.kt)("inlineCode",{parentName:"p"},"--cli")," aus."))),(0,i.kt)(m,{defaultValue:"cmd",values:[{label:"Windows",value:"cmd"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,i.kt)(p,{value:"cmd",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer.exe --cli update server\n"))),(0,i.kt)(p,{value:"linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer --cli Update-Server\n")))))}f.isMDXComponent=!0},69721:function(e,t,n){t.Z=n.p+"assets/images/cli-01-9d9f96b3e580babfbfa6cf6ed4416040.jpg"}}]);