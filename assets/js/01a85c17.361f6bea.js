"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4013],{20895:function(e,t,n){n.d(t,{dK:function(){return r},_k:function(){return a},vc:function(){return c},rx:function(){return l},qo:function(){return o},Hk:function(){return s},Iz:function(){return i}});n(31336);var r=["en"],a=!1,c=null,l="dce3a2b9",o=8,s=50,i={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},46165:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(63366),a=n(67294),c=n(86010),l=n(10308),o=n(36742),s="sidebar_2ahu",i="sidebarItemTitle_2hhb",u="sidebarItemList_2xAf",m="sidebarItem_2UVv",d="sidebarItemLink_1RT6",f="sidebarItemLinkActive_12pM",v=n(24973);function h(e){var t=e.sidebar;return 0===t.items.length?null:a.createElement("nav",{className:(0,c.Z)(s,"thin-scrollbar"),"aria-label":(0,v.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,c.Z)(i,"margin-bottom--md")},t.title),a.createElement("ul",{className:u},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:m},a.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:f},e.title))}))))}var _=n(571),g=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,n=e.toc,o=e.children,s=(0,r.Z)(e,g),i=t&&t.items.length>0;return a.createElement(l.Z,s,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},i&&a.createElement("aside",{className:"col col--3"},a.createElement(h,{sidebar:t})),a.createElement("main",{className:(0,c.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},o),n&&a.createElement("div",{className:"col col--2"},a.createElement(_.Z,{toc:n})))))}},70094:function(e,t,n){n.r(t);var r=n(67294),a=n(46165),c=n(6584),l=n(941);t.default=function(e){var t=e.tags,n=e.sidebar,o=(0,l.MA)();return r.createElement(a.Z,{title:o,wrapperClassName:l.kM.wrapper.blogPages,pageClassName:l.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:n},r.createElement("h1",null,o),r.createElement(c.Z,{tags:Object.values(t)}))}},571:function(e,t,n){n.d(t,{r:function(){return f},Z:function(){return v}});var r=n(67294),a=n(86010),c=n(941);function l(e){var t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function o(e){var t,n=e.anchorTopOffset,r=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),a=r.find((function(e){return l(e).top>=n}));return a?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(a))?a:null!=(t=r[r.indexOf(a)-1])?t:null:r[r.length-1]}function s(){var e=(0,r.useRef)(0),t=(0,c.LU)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var i=function(e){var t=(0,r.useRef)(void 0),n=s();(0,r.useEffect)((function(){var r=e.linkClassName,a=e.linkActiveClassName;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=o({anchorTopOffset:n.current}),l=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var r;t.current&&t.current!==e&&(null==(r=t.current)||r.classList.remove(a)),e.classList.add(a),t.current=e}else e.classList.remove(a)}(e,e===l)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])},u="tableOfContents_35-E",m="table-of-contents__link",d={linkClassName:m,linkActiveClassName:"table-of-contents__link--active"};function f(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:m,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(f,{isChild:!0,toc:e.children}))}))):null}var v=function(e){var t=e.toc;return i(d),r.createElement("div",{className:(0,a.Z)(u,"thin-scrollbar")},r.createElement(f,{toc:t}))}},37211:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a=n(86010),c=n(36742),l="tag_1Okp",o="tagRegular_3MiF",s="tagWithCount_1HU1";var i=function(e){var t,n=e.permalink,i=e.name,u=e.count;return r.createElement(c.Z,{href:n,className:(0,a.Z)(l,(t={},t[o]=!u,t[s]=u,t))},i,u&&r.createElement("span",null,u))}},6584:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(37211),c=n(941),l="tag_21yA";function o(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:l},r.createElement(a.Z,e))}))),r.createElement("hr",null))}var s=function(e){var t=e.tags,n=(0,c.PZ)(t);return r.createElement("section",{className:"margin-vert--lg"},n.map((function(e){return r.createElement(o,{key:e.letter,letterEntry:e})})))}}}]);