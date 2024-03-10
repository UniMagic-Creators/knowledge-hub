"use strict";(self.webpackChunkknowledge_hub=self.webpackChunkknowledge_hub||[]).push([[401],{242:(e,t,s)=>{s.r(t),s.d(t,{default:()=>pe});var a=s(6540),n=s(1003),i=s(9532),l=s(4848);const o=a.createContext(null);function r(e){let{children:t,content:s}=e;const n=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(s);return(0,l.jsx)(o.Provider,{value:n,children:t})}function d(){const e=(0,a.useContext)(o);if(null===e)throw new i.dV("DocProvider");return e}function c(){const{metadata:e,frontMatter:t,assets:s}=d();return(0,l.jsx)(n.be,{title:e.title,description:e.description,keywords:t.keywords,image:s.image??t.image})}var u=s(4164),h=s(4581),m=s(1312),b=s(8774);function p(e){const{permalink:t,title:s,subLabel:a,isNext:n}=e;return(0,l.jsxs)(b.A,{className:(0,u.A)("pagination-nav__link",n?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,l.jsx)("div",{className:"pagination-nav__label",children:s})]})}function x(e){const{previous:t,next:s}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(p,{...t,subLabel:(0,l.jsx)(m.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,l.jsx)(p,{...s,subLabel:(0,l.jsx)(m.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function v(){const{metadata:e}=d();return(0,l.jsx)(x,{previous:e.previous,next:e.next})}var g=s(4586),j=s(4070),f=s(7559),A=s(5597),_=s(2252);const N={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,l.jsx)(m.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,l.jsx)(m.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function L(e){const t=N[e.versionMetadata.banner];return(0,l.jsx)(t,{...e})}function C(e){let{versionLabel:t,to:s,onClick:a}=e;return(0,l.jsx)(m.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(b.A,{to:s,onClick:a,children:(0,l.jsx)(m.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function T(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:a}}=(0,g.A)(),{pluginId:n}=(0,j.vT)({failfast:!0}),{savePreferredVersionName:i}=(0,A.g1)(n),{latestDocSuggestion:o,latestVersionSuggestion:r}=(0,j.HW)(n),d=o??(c=r).docs.find((e=>e.id===c.mainDocId));var c;return(0,l.jsxs)("div",{className:(0,u.A)(t,f.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(L,{siteTitle:a,versionMetadata:s})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(C,{versionLabel:r.label,to:d.path,onClick:()=>i(r.name)})})]})}function U(e){let{className:t}=e;const s=(0,_.r)();return s.banner?(0,l.jsx)(T,{className:t,versionMetadata:s}):null}function k(e){let{className:t}=e;const s=(0,_.r)();return s.badge?(0,l.jsx)("span",{className:(0,u.A)(t,f.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(m.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}function w(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:s}=e;return(0,l.jsx)(m.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:s})})},children:" on {date}"})}function y(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(m.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function M(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:s,lastUpdatedBy:a}=e;return(0,l.jsxs)("span",{className:f.G.common.lastUpdated,children:[(0,l.jsx)(m.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&s?(0,l.jsx)(w,{lastUpdatedAt:t,formattedLastUpdatedAt:s}):"",byUser:a?(0,l.jsx)(y,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const B={iconEdit:"iconEdit_Z9Sw"};function I(e){let{className:t,...s}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.A)(B.iconEdit,t),"aria-hidden":"true",...s,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function V(e){let{editUrl:t}=e;return(0,l.jsxs)(b.A,{to:t,className:f.G.common.editThisPage,children:[(0,l.jsx)(I,{}),(0,l.jsx)(m.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}const E={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function H(e){let{permalink:t,label:s,count:a}=e;return(0,l.jsxs)(b.A,{href:t,className:(0,u.A)(E.tag,a?E.tagWithCount:E.tagRegular),children:[s,a&&(0,l.jsx)("span",{children:a})]})}const G={tags:"tags_jXut",tag:"tag_QGVx"};function P(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(m.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,u.A)(G.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:s}=e;return(0,l.jsx)("li",{className:G.tag,children:(0,l.jsx)(H,{label:t,permalink:s})},s)}))})]})}const D={lastUpdated:"lastUpdated_vwxv"};function S(e){return(0,l.jsx)("div",{className:(0,u.A)(f.G.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(P,{...e})})})}function F(e){let{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:a,formattedLastUpdatedAt:n}=e;return(0,l.jsxs)("div",{className:(0,u.A)(f.G.docs.docFooterEditMetaRow,"row"),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(V,{editUrl:t})}),(0,l.jsx)("div",{className:(0,u.A)("col",D.lastUpdated),children:(s||a)&&(0,l.jsx)(M,{lastUpdatedAt:s,formattedLastUpdatedAt:n,lastUpdatedBy:a})})]})}function R(){const{metadata:e}=d(),{editUrl:t,lastUpdatedAt:s,formattedLastUpdatedAt:a,lastUpdatedBy:n,tags:i}=e,o=i.length>0,r=!!(t||s||n);return o||r?(0,l.jsxs)("footer",{className:(0,u.A)(f.G.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,l.jsx)(S,{tags:i}),r&&(0,l.jsx)(F,{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n,formattedLastUpdatedAt:a})]}):null}var O=s(1422),z=s(5195);const W={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function q(e){let{collapsed:t,...s}=e;return(0,l.jsx)("button",{type:"button",...s,className:(0,u.A)("clean-btn",W.tocCollapsibleButton,!t&&W.tocCollapsibleButtonExpanded,s.className),children:(0,l.jsx)(m.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const Z={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function Q(e){let{toc:t,className:s,minHeadingLevel:a,maxHeadingLevel:n}=e;const{collapsed:i,toggleCollapsed:o}=(0,O.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.A)(Z.tocCollapsible,!i&&Z.tocCollapsibleExpanded,s),children:[(0,l.jsx)(q,{collapsed:i,onClick:o}),(0,l.jsx)(O.N,{lazy:!0,className:Z.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(z.A,{toc:t,minHeadingLevel:a,maxHeadingLevel:n})})]})}const X={tocMobile:"tocMobile_ITEo"};function Y(){const{toc:e,frontMatter:t}=d();return(0,l.jsx)(Q,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(f.G.docs.docTocMobile,X.tocMobile)})}var $=s(7763);function J(){const{toc:e,frontMatter:t}=d();return(0,l.jsx)($.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:f.G.docs.docTocDesktop})}var K=s(1107),ee=s(5533);function te(e){let{children:t}=e;const s=function(){const{metadata:e,frontMatter:t,contentTitle:s}=d();return t.hide_title||void 0!==s?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.A)(f.G.docs.docMarkdown,"markdown"),children:[s&&(0,l.jsx)("header",{children:(0,l.jsx)(K.A,{as:"h1",children:s})}),(0,l.jsx)(ee.A,{children:t})]})}var se=s(4142),ae=s(9169),ne=s(6025);function ie(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const le={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function oe(){const e=(0,ne.A)("/");return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(b.A,{"aria-label":(0,m.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,l.jsx)(ie,{className:le.breadcrumbHomeIcon})})})}const re={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function de(e){let{children:t,href:s,isLast:a}=e;const n="breadcrumbs__link";return a?(0,l.jsx)("span",{className:n,itemProp:"name",children:t}):s?(0,l.jsx)(b.A,{className:n,href:s,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:t})}):(0,l.jsx)("span",{className:n,children:t})}function ce(e){let{children:t,active:s,index:a,addMicrodata:n}=e;return(0,l.jsxs)("li",{...n&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,l.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function ue(){const e=(0,se.OF)(),t=(0,ae.Dt)();return e?(0,l.jsx)("nav",{className:(0,u.A)(f.G.docs.docBreadcrumbs,re.breadcrumbsContainer),"aria-label":(0,m.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,l.jsx)(oe,{}),e.map(((t,s)=>{const a=s===e.length-1,n="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,l.jsx)(ce,{active:a,index:s,addMicrodata:!!n,children:(0,l.jsx)(de,{href:n,isLast:a,children:t.label})},s)}))]})}):null}var he=s(996);const me={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function be(e){let{children:t}=e;const s=function(){const{frontMatter:e,toc:t}=d(),s=(0,h.l)(),a=e.hide_table_of_contents,n=!a&&t.length>0;return{hidden:a,mobile:n?(0,l.jsx)(Y,{}):void 0,desktop:!n||"desktop"!==s&&"ssr"!==s?void 0:(0,l.jsx)(J,{})}}(),{metadata:{unlisted:a}}=d();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.A)("col",!s.hidden&&me.docItemCol),children:[a&&(0,l.jsx)(he.A,{}),(0,l.jsx)(U,{}),(0,l.jsxs)("div",{className:me.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(ue,{}),(0,l.jsx)(k,{}),s.mobile,(0,l.jsx)(te,{children:t}),(0,l.jsx)(R,{})]}),(0,l.jsx)(v,{})]})]}),s.desktop&&(0,l.jsx)("div",{className:"col col--3",children:s.desktop})]})}function pe(e){const t=`docs-doc-id-${e.content.metadata.id}`,s=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(n.e3,{className:t,children:[(0,l.jsx)(c,{}),(0,l.jsx)(be,{children:(0,l.jsx)(s,{})})]})})}}}]);