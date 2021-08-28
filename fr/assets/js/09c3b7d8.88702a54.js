"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1231],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,v=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(v,o(o({ref:t},d),{},{components:n})):r.createElement(v,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99041:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={description:"Creating servers in nanos world is very simple and straightforward, just a few steps and you have your server up and ready!",sidebar_position:1,tags:["hosting"]},l="Server Installation",p={unversionedId:"core-concepts/server-manual/server-installation",id:"core-concepts/server-manual/server-installation",isDocsHomePage:!1,title:"Server Installation",description:"Creating servers in nanos world is very simple and straightforward, just a few steps and you have your server up and ready!",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/core-concepts/server-manual/server-installation.md",sourceDirName:"core-concepts/server-manual",slug:"/core-concepts/server-manual/server-installation",permalink:"/fr/docs/next/core-concepts/server-manual/server-installation",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/server-manual/server-installation.md",tags:[{label:"hosting",permalink:"/fr/docs/next/tags/hosting"}],version:"current",sidebarPosition:1,frontMatter:{description:"Creating servers in nanos world is very simple and straightforward, just a few steps and you have your server up and ready!",sidebar_position:1,tags:["hosting"]},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddf3 Migrating to Alpha",permalink:"/fr/docs/next/getting-started/migrating-to-alpha"},next:{title:"Server Configuration",permalink:"/fr/docs/next/core-concepts/server-manual/server-configuration"}},d=[{value:"System Requirements",id:"system-requirements",children:[]},{value:"Installation",id:"installation",children:[]}],c={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"server-installation"},"Server Installation"),(0,i.kt)("p",null,"Creating servers in nanos world is very simple and straightforward, just a few steps and you have your server up and ready!"),(0,i.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"OS: Windows or Linux"),(0,i.kt)("li",{parentName:"ul"},"Processor: ",(0,i.kt)("inlineCode",{parentName:"li"},"1.0 GHz")," ","(","Faster core is better than multiple cores",")"),(0,i.kt)("li",{parentName:"ul"},"Memory: ",(0,i.kt)("inlineCode",{parentName:"li"},"50 MB")," ","(","grows if having too many Players or spawned Entities",")"),(0,i.kt)("li",{parentName:"ul"},"Storage: ",(0,i.kt)("inlineCode",{parentName:"li"},"10 MB")," ","(","+ Assets & Packages size",")"),(0,i.kt)("li",{parentName:"ul"},"Network: Recommended at least ",(0,i.kt)("inlineCode",{parentName:"li"},"1 MB/s")," ","(","grows if having too many Players or spawned Entities",")"),(0,i.kt)("li",{parentName:"ul"},"Network Forwarded Ports: ",(0,i.kt)("inlineCode",{parentName:"li"},"7777 TCP")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"UDP")," ","(","you can change that on the config",")")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"All nanos world server versions are hosted in our ",(0,i.kt)("a",{parentName:"h5",href:"https://github.com/nanos-world/nanos-world-server/releases"},"GitHub"),". :::")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h3",{parentName:"div",id:"windows-installation"},"Windows Installation"),(0,i.kt)("p",{parentName:"div"},"Downloading it using ",(0,i.kt)("inlineCode",{parentName:"p"},"PowerShell"),":"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'Invoke-WebRequest -Uri "https://github.com/nanos-world/nanos-world-server/releases/latest/download/NanosWorldServer.exe" -OutFile NanosWorldServer.exe\n')),(0,i.kt)("h3",{parentName:"div",id:"linux-installation"},"Linux Installation"),(0,i.kt)("p",{parentName:"div"},"Downloading it using ",(0,i.kt)("inlineCode",{parentName:"p"},"wget"),":"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'wget "https://github.com/nanos-world/nanos-world-server/releases/latest/download/NanosWorldServer"\nchmod +x NanosWorldServer\n')),(0,i.kt)("h3",{parentName:"div",id:"debian-10-installation"},"Debian 10 Installation"),(0,i.kt)("p",{parentName:"div"},"For this distribution, some extra steps are required. Since nanos world use ",(0,i.kt)("inlineCode",{parentName:"p"},"gcc 9"),", we will need to upgrade one of our package to the testing repository."),(0,i.kt)("p",{parentName:"div"},"First, update your ",(0,i.kt)("inlineCode",{parentName:"p"},"sources.list")," file ","(","located in: ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/apt/sources.list"),")",", you will need to add the testing repo source, you can add theses lines below to your sources:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"deb http://ftp.fr.debian.org/debian/ testing main contrib non-free\ndeb-src http://ftp.fr.debian.org/debian/ testing main contrib non-free\n")),(0,i.kt)("p",{parentName:"div"},"After that, we will need to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"preferences")," file that will tell our system to not prefer installing testing package over stable unless specified. In ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/apt/preferences")," ","(","create if it doesn\u2019t exists",")",", add theses lines:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Package: *\nPin: release a=stable\nPin-Priority: 700\n\nPackage: *\nPin: release a=testing\nPin-Priority: 650\n")),(0,i.kt)("p",{parentName:"div"},"Now, update your server to make sure that your system can find testing repositories with this command:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"apt update\n")),(0,i.kt)("p",{parentName:"div"},"We will install ",(0,i.kt)("inlineCode",{parentName:"p"},"libstdc++6")," testing package to the server, it will allow the server to start correctly. You can type the command below to install it:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get --target-release testing install libstdc++6\n")))))}u.isMDXComponent=!0}}]);