"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9924],{20895:function(e,t,a){a.d(t,{dK:function(){return n},_k:function(){return r},vc:function(){return c},rx:function(){return s},qo:function(){return o},Hk:function(){return l},Iz:function(){return u}});a(31336);var n=["en"],r=!1,c=null,s="6be29b27",o=8,l=50,u={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},49853:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(67294),r=a(62273),c=a(36742),s=a(41773),o=a(24973);function l(e){var t=e.doc;return n.createElement("article",{className:"margin-vert--lg"},n.createElement(c.Z,{to:t.permalink},n.createElement("h2",null,t.title)),t.description&&n.createElement("p",null,t.description))}function u(e){var t,a=e.tag,u=(t=(0,s.c2)().selectMessage,function(e){return t(e,(0,o.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:e}))}),d=(0,o.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:u(a.docs.length),tagName:a.name});return n.createElement(r.Z,{title:d,wrapperClassName:s.kM.wrapper.docPages,pageClassName:s.kM.page.docsTagDocListPage,searchMetadatas:{tag:"doc_tag_doc_list"}},n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("main",{className:"col col--8 col--offset-2"},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,d),n.createElement(c.Z,{href:a.allTagsPath},n.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement("section",{className:"margin-vert--lg"},a.docs.map((function(e){return n.createElement(l,{key:e.id,doc:e})})))))))}}}]);