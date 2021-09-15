"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6012],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(a),u=n,g=m["".concat(p,".").concat(u)]||m[u]||l[u]||o;return a?r.createElement(g,s(s({ref:t},d),{},{components:a})):r.createElement(g,s({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},95425:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),s=["components"],i={description:"Tudo o que voc\xea precisa saber sobre os pacotes",sidebar_position:0,tags:["script"]},p="Guia de pacotes",c={unversionedId:"core-concepts/packages/packages",id:"core-concepts/packages/packages",isDocsHomePage:!1,title:"Guia de pacotes",description:"Tudo o que voc\xea precisa saber sobre os pacotes",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/core-concepts/packages/packages.md",sourceDirName:"core-concepts/packages",slug:"/core-concepts/packages/packages",permalink:"/pt-BR/docs/next/core-concepts/packages/packages",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/packages/packages.md",tags:[{label:"script",permalink:"/pt-BR/docs/next/tags/script"}],version:"current",sidebarPosition:0,frontMatter:{description:"Tudo o que voc\xea precisa saber sobre os pacotes",sidebar_position:0,tags:["script"]},sidebar:"main",previous:{title:"Interface de Linha de Comando",permalink:"/pt-BR/docs/next/core-concepts/server-manual/nanos-world-cli"},next:{title:"Tela de carregamento",permalink:"/pt-BR/docs/next/core-concepts/packages/loading-screen"}},d=[{value:"Estrutura da pasta",id:"estrutura-da-pasta",children:[]},{value:"Configura\xe7\xe3o do pacote",id:"configura\xe7\xe3o-do-pacote",children:[{value:"Configura\xe7\xf5es Detalhadas",id:"configura\xe7\xf5es-detalhadas",children:[]},{value:"Tipos de Pacotes",id:"tipos-de-pacotes",children:[]}]}],l={toc:d};function m(e){var t=e.components,i=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"guia-de-pacotes"},"Guia de pacotes"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Os pacotes")," s\xe3o peda\xe7os/componentes de seu servidor que executar\xe3o scripts Lua para interagir com o jogo."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(49811).Z})),(0,o.kt)("p",null,"Cada pacote est\xe1 isolado e tem sua pr\xf3pria M\xe1quina Virtual Lua, Isto significa que cada um tem o seu pr\xf3prio \xe2mbito global e que n\xe3o pode aceder directamente a outros dados."),(0,o.kt)("h2",{id:"estrutura-da-pasta"},"Estrutura da pasta"),(0,o.kt)("p",null,"Todos os Pacotes devem estar sob a pasta ",(0,o.kt)("inlineCode",{parentName:"p"},"Servidor/Pacotes/")," , cada Pacote \xe9 uma pasta sob isso."),(0,o.kt)("p",null,"Eles podem conter as seguintes pastas: ",(0,o.kt)("inlineCode",{parentName:"p"},"Servidor"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Cliente")," e ",(0,o.kt)("inlineCode",{parentName:"p"},"Compartilhados"),". Somente ",(0,o.kt)("strong",{parentName:"p"},"Clientes")," e ",(0,o.kt)("strong",{parentName:"p"},"Compartilhados")," pastas ser\xe3o enviadas e carregadas pelos clientes quando se conectarem."),(0,o.kt)("p",null,"Cada ",(0,o.kt)("strong",{parentName:"p"},"pacote")," deve ter um arquivo chamado ",(0,o.kt)("inlineCode",{parentName:"p"},"Index. ua")," dentro de ",(0,o.kt)("strong",{parentName:"p"},"Servidor"),", ",(0,o.kt)("strong",{parentName:"p"},"Cliente")," ou ",(0,o.kt)("strong",{parentName:"p"},"pastas")," compartilhadas Este \xe9 o \xfanico arquivo que ser\xe1 acionado quando o pacote for carregado, desta forma este arquivo \xe9 respons\xe1vel por incluir outros arquivos e iniciar suas funcionalidades."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Server Folder"',title:'"Server','Folder"':!0},"NanosWorldServer. Enxeque\nPacotes/\necontra-My_Package_01/\n\u251cServer/\nerevamos Index. ua\necontre*. ua\n\u251cCliente/\necontramestre *. ua\n\u251cCompartilhado/\necontramestra*. ua\nPacote B. Uml\ncm_Package_02/\nc4x Package.toml\n\xa3...\nAtivos/\nConfig.toml\n")),(0,o.kt)("h2",{id:"configura\xe7\xe3o-do-pacote"},"Configura\xe7\xe3o do pacote"),(0,o.kt)("p",null,"Os pacotes t\xeam um arquivo de configura\xe7\xe3o na raiz da pasta de pacotes, chamado ",(0,o.kt)("inlineCode",{parentName:"p"},"de pacote. oml"),", neste arquivo, podemos configurar todas as configura\xe7\xf5es pertinentes relacionadas ao Pacote:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Package.toml"',title:'"Package.toml"'},'# configura\xe7\xf5es de pacotes\n[package]\n    # nome de pacote\n    nome = "testing"\n    # contribuidores\n    autor = ""\n    # vers\xe3o\n    vers\xe3o = "0.0. "\n    # URL da imagem\n    imagem = ""\n    # tipo de pacote: \'script\' (pacote normal), \'modo de jogo\' (pacote \xfanico - s\xf3 pode carregar um de cada vez) ou \'tela de carregamento\' (pacote especial carregado na tela de carregamento)\n    tipo = "script"\n    # se deseja for\xe7ar o script de mapa personalizado a n\xe3o carregar\n    force_no_map_script = false\n    # destruir automaticamente todas as entidades geradas por este pacote quando descarrega\n    auto_cleanup = true\n    pacotes requisitos de\n    packages_requirements = [\n\n    ]\n    # pacotes de ativos requisitos\n    assets_requirements = [\n\n]\n\n')),(0,o.kt)("h3",{id:"configura\xe7\xf5es-detalhadas"},"Configura\xe7\xf5es Detalhadas"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Configura\xe7\xe3o"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Nome"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Nome amig\xe1vel do pacote")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"autor"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Autor","(","s) do pacote")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Vers\xe3o"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Vers\xe3o do pacote - por favor, consulte o ",(0,o.kt)("a",{parentName:"td",href:"https://semver.org/"},"SemVer"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Imagem"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"URL da imagem a ser exibida no Cofre")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Tipo"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Tipo de pacote - por favor consulte ",(0,o.kt)("a",{parentName:"td",href:"#package-types"},"Tipos de pacote"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"for\xe7ar_nenhum_roteador_de_mapa"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Ao ativar ir\xe1 for\xe7ar o script do mapa ","(","se houver",")"," a N\xc3O carregar")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"limpeza_autom\xe1tica"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Ativando isto ir\xe1 destruir todas as entidades criadas por este pacote quando ele descarrega")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"requisitos_pacotes"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Lista de pacotes que precisam ser carregados primeiro")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"requisitos_ativos"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Lista de Pacotes de Conte\xfado a serem carregados quando este pacote carrega")))),(0,o.kt)("h3",{id:"tipos-de-pacotes"},"Tipos de Pacotes"),(0,o.kt)("p",null,"Em nanos mundo temos 3 tipos de pacotes: ",(0,o.kt)("strong",{parentName:"p"},"script"),", ",(0,o.kt)("strong",{parentName:"p"},"modo de jogo")," e ",(0,o.kt)("strong",{parentName:"p"},"tela de carregamento"),", cada um com uma funcionalidade espec\xedfica e prop\xf3sitos exclusivos."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"script"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Pacote normal, ir\xe1 executar seus scripts e iniciar um novo ",(0,o.kt)("strong",{parentName:"td"},"Lua VM")," quando iniciado.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"modo-jogo"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Como ",(0,o.kt)("inlineCode",{parentName:"td"},"script")," , mas voc\xea s\xf3 pode carregar um pacote ",(0,o.kt)("inlineCode",{parentName:"td"},"modo de jogo")," de uma s\xf3 vez.",(0,o.kt)("br",null),"\xdatil quando voc\xea est\xe1 criando jogos completos, que n\xe3o podem correr o risco de ser",(0,o.kt)("br",null),"carregados com outros pacotes de jogos completos.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"carregando-tela"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Special Package which will be loaded during player's loading screen.",(0,o.kt)("br",null),"Those packages must have an ",(0,o.kt)("inlineCode",{parentName:"td"},"Index.html")," in the root.",(0,o.kt)("br",null),"Please refer to ",(0,o.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/core-concepts/packages/loading-screen"},"Loading Screen")," for more information.")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Se voc\xea estiver criando uma ",(0,o.kt)("strong",{parentName:"p"},"Biblioteca"),", uma ",(0,o.kt)("strong",{parentName:"p"},"Ferramenta")," ou algum pacote ",(0,o.kt)("strong",{parentName:"p"},"Utilit\xe1rio")," , torn\xe1-lo ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"script")),"!"),(0,o.kt)("p",{parentName:"div"},"Se voc\xea estiver criando um ",(0,o.kt)("strong",{parentName:"p"},"jogo \xfanico e completo")," com v\xe1rias funcionalidades que voc\xea n\xe3o quer que sejam implicadas se algu\xe9m carregar dois jogos completos, torn\xe1-lo ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"modo de jogo")),"!"))))}m.isMDXComponent=!0},49811:function(e,t,a){t.Z=a.p+"assets/images/packages-01-e5ca40b3250f77522f7e280d3a183cf9.jpg"}}]);