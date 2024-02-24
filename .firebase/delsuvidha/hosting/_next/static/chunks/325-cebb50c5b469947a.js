"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[325],{3190:function(e,a,t){t.d(a,{zx:function(){return g.z},lr:function(){return x.Carousel},wp:function(){return B.Navbar},UG:function(){return G.NavbarBrand}}),t(9074),t(4391),t(8829),t(7928);var s,i=t(3827),r=t(3253),l=t(1367),o=t(7997),n=t(1671);let d=e=>{let{children:a,className:t,theme:s={},...r}=e,d=(0,o.E)((0,n.gh)().avatar.group,s);return(0,i.jsx)("div",{"data-testid":"avatar-group-element",className:(0,l.m6)(d.base,t),...r,children:a})};d.displayName="Avatar.Group";let c=e=>{let{className:a,href:t,theme:s={},total:r,...d}=e,c=(0,o.E)((0,n.gh)().avatar.groupCounter,s);return(0,i.jsxs)("a",{href:t,className:(0,l.m6)(c.base,a),...d,children:["+",r]})};c.displayName="Avatar.GroupCounter";let m=e=>{let{alt:a="",bordered:t=!1,children:s,className:r,color:d="light",img:c,placeholderInitials:m="",rounded:h=!1,size:f="md",stacked:p=!1,status:u,statusPosition:b="top-left",theme:g={},...x}=e,N=(0,o.E)((0,n.gh)().avatar,g),j=(0,l.m6)(N.root.img.base,t&&N.root.bordered,t&&N.root.color[d],h&&N.root.rounded,p&&N.root.stacked,N.root.img.on,N.root.size[f]),v={className:(0,l.m6)(j,N.root.img.on),"data-testid":"flowbite-avatar-img"};return(0,i.jsxs)("div",{className:(0,l.m6)(N.root.base,r),"data-testid":"flowbite-avatar",...x,children:[(0,i.jsxs)("div",{className:"relative",children:[c?"string"==typeof c?(0,i.jsx)("img",{alt:a,src:c,...v}):c({alt:a,...v}):m?(0,i.jsx)("div",{className:(0,l.m6)(N.root.img.off,N.root.initials.base,p&&N.root.stacked,t&&N.root.bordered,t&&N.root.color[d],N.root.size[f],h&&N.root.rounded),"data-testid":"flowbite-avatar-initials-placeholder",children:(0,i.jsx)("span",{className:(0,l.m6)(N.root.initials.text),"data-testid":"flowbite-avatar-initials-placeholder-text",children:m})}):(0,i.jsx)("div",{className:(0,l.m6)(j,N.root.img.off),"data-testid":"flowbite-avatar-img",children:(0,i.jsx)("svg",{className:N.root.img.placeholder,fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})})}),u&&(0,i.jsx)("span",{"data-testid":"flowbite-avatar-status",className:(0,l.m6)(N.root.status.base,N.root.status[u],N.root.statusPosition[b])})]}),s&&(0,i.jsx)("div",{children:s})]})};m.displayName="Avatar",Object.assign(m,{Group:d,Counter:c}),t(2319);var h=t(841);let f=e=>{let{children:a,...t}=e;return(0,i.jsx)("div",{"data-testid":"flowbite-banner",role:"banner",tabIndex:-1,...t,children:a})};f.displayName="Banner",Object.assign(f,{CollapseButton:h.BannerCollapseButton});var p=t(4090);let u=(0,p.forwardRef)((e,a)=>{let{children:t,className:s,href:d,icon:c,theme:m={},...h}=e,f=void 0!==d,p=(0,o.E)((0,n.gh)().breadcrumb.item,m);return(0,i.jsxs)("li",{className:(0,l.m6)(p.base,s),...h,children:[(0,i.jsx)(r.yoF,{"aria-hidden":!0,className:p.chevron,"data-testid":"flowbite-breadcrumb-separator"}),(0,i.jsxs)(f?"a":"span",{ref:a,className:p.href[f?"on":"off"],"data-testid":"flowbite-breadcrumb-item",href:d,children:[c&&(0,i.jsx)(c,{"aria-hidden":!0,className:p.icon}),t]})]})});u.displayName="Breadcrumb.Item";let b=e=>{let{children:a,className:t,theme:s={},...r}=e,d=(0,o.E)((0,n.gh)().breadcrumb.root,s);return(0,i.jsx)("nav",{"aria-label":"Breadcrumb",className:(0,l.m6)(d.base,t),...r,children:(0,i.jsx)("ol",{className:d.list,children:a})})};b.displayName="Breadcrumb",Object.assign(b,{Item:u});var g=t(6387);s=["renderImage","imgSrc","imgAlt","children","className","horizontal","href","theme"],e=>{let a={};for(let t in e)s.includes(t)||(a[t]=e[t]);return a};var x=t(5425);(0,p.forwardRef)((e,a)=>{let{className:t,color:s="default",theme:r={},...d}=e,c=(0,o.E)((0,n.gh)().checkbox,r);return(0,i.jsx)("input",{ref:a,type:"checkbox",className:(0,l.m6)(c.root.base,c.root.color[s],t),...d})}).displayName="Checkbox",t(9876),t(7999),t(6827),t(41),t(6888),t(6398),t(5955);var N=t(1641);(0,p.forwardRef)((e,a)=>{let{className:t,color:s="gray",helperText:r,sizing:d="md",theme:c={},...m}=e,h=(0,o.E)((0,n.gh)().fileInput,c);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:(0,l.m6)(h.root.base,t),children:(0,i.jsx)("div",{className:h.field.base,children:(0,i.jsx)("input",{className:(0,l.m6)(h.field.input.base,h.field.input.colors[s],h.field.input.sizes[d]),...m,type:"file",ref:a})})}),r&&(0,i.jsx)(N.p,{color:s,children:r})]})}).displayName="FileInput",(0,p.forwardRef)((e,a)=>{let{label:t,helperText:s,color:r="default",sizing:d="md",variant:c,disabled:m=!1,theme:h={},className:f,...u}=e,b=(0,p.useId)(),g=(0,o.E)((0,n.gh)().floatingLabel,h);return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:(0,l.m6)("relative","standard"===c?"z-0":""),children:[(0,i.jsx)("input",{type:"text",id:u.id?u.id:"floatingLabel"+b,"aria-describedby":"outlined_success_help",className:(0,l.m6)(g.input[r][c][d],f),placeholder:" ","data-testid":"floating-label",disabled:m,...u,ref:a}),(0,i.jsx)("label",{htmlFor:u.id?u.id:"floatingLabel"+b,className:(0,l.m6)(g.label[r][c][d],f),children:t})]}),(0,i.jsx)("p",{id:"outlined_helper_text"+b,className:(0,l.m6)(g.helperText[r],f),children:s})]})}).displayName="FloatingLabel",t(3483),t(1901);let j=e=>{let{alt:a,className:t,children:s,href:r,name:d,src:c,theme:m={},...h}=e,f=(0,o.E)((0,n.gh)().footer.brand,m);return(0,i.jsx)("div",{children:r?(0,i.jsxs)("a",{"data-testid":"flowbite-footer-brand",href:r,className:(0,l.m6)(f.base,t),...h,children:[(0,i.jsx)("img",{alt:a,src:c,className:f.img}),(0,i.jsx)("span",{"data-testid":"flowbite-footer-brand-span",className:f.span,children:d}),s]}):(0,i.jsx)("img",{alt:a,"data-testid":"flowbite-footer-brand",src:c,className:(0,l.m6)(f.img,t),...h})})},v=e=>{let{by:a,className:t,href:s,theme:r={},year:d,...c}=e,m=(0,o.E)((0,n.gh)().footer.copyright,r);return(0,i.jsxs)("div",{"data-testid":"flowbite-footer-copyright",className:(0,l.m6)(m.base,t),...c,children:["\xa9 ",d,s?(0,i.jsx)("a",{href:s,className:m.href,children:a}):(0,i.jsx)("span",{"data-testid":"flowbite-footer-copyright-span",className:m.span,children:a})]})},y=e=>{let{className:a,theme:t={},...s}=e,r=(0,o.E)((0,n.gh)().footer.divider,t);return(0,i.jsx)("hr",{"data-testid":"footer-divider",className:(0,l.m6)(r.base,a),...s})},w=e=>{let{ariaLabel:a,className:t,href:s,icon:r,theme:d={},...c}=e,m=(0,o.E)((0,n.gh)().footer.icon,d);return(0,i.jsx)("div",{children:s?(0,i.jsx)("a",{"aria-label":a,"data-testid":"flowbite-footer-icon",href:s,className:(0,l.m6)(m.base,t),...c,children:(0,i.jsx)(r,{className:m.size})}):(0,i.jsx)(r,{"data-testid":"flowbite-footer-icon",className:m.size,...c})})},E=e=>{let{as:a="a",children:t,className:s,href:r,theme:d={},...c}=e,m=(0,o.E)((0,n.gh)().footer.groupLink.link,d);return(0,i.jsx)("li",{className:(0,l.m6)(m.base,s),children:(0,i.jsx)(a,{href:r,className:m.href,...c,children:t})})},k=e=>{let{children:a,className:t,col:s=!1,theme:r={},...d}=e,c=(0,o.E)((0,n.gh)().footer.groupLink,r);return(0,i.jsx)("ul",{"data-testid":"footer-groupLink",className:(0,l.m6)(c.base,s&&c.col,t),...d,children:a})},C=e=>{let{as:a="h2",className:t,theme:s={},title:r,...d}=e,c=(0,o.E)((0,n.gh)().footer.title,s);return(0,i.jsx)(a,{"data-testid":"flowbite-footer-title",className:(0,l.m6)(c.base,t),...d,children:r})},I=e=>{let{bgDark:a=!1,children:t,className:s,container:r=!1,theme:d={},...c}=e,m=(0,o.E)((0,n.gh)().footer,d);return(0,i.jsx)("footer",{"data-testid":"flowbite-footer",className:(0,l.m6)(m.root.base,a&&m.root.bgDark,r&&m.root.container,s),...c,children:t})};I.displayName="Footer",v.displayName="Footer.Copyright",E.displayName="Footer.Link",j.displayName="Footer.Brand",k.displayName="Footer.LinkGroup",w.displayName="Footer.Icon",C.displayName="Footer.Title",y.displayName="Footer.Divider",Object.assign(I,{Copyright:v,Link:E,LinkGroup:k,Brand:j,Icon:w,Title:C,Divider:y});let F=e=>{let{children:a,className:t,theme:s={}}=e,r=(0,o.E)((0,n.gh)().listGroup.item,s);return(0,i.jsx)("li",{className:(0,l.m6)(r.base,t),children:a})},L=e=>{let{children:a,className:t,unstyled:s,nested:r,ordered:d,horizontal:c,theme:m={},...h}=e,f=(0,o.E)((0,n.gh)().list,m);return(0,i.jsx)(d?"ol":"ul",{className:(0,l.m6)(f.root.base,f.root.ordered[d?"on":"off"],s&&f.root.unstyled,r&&f.root.nested,c&&f.root.horizontal,t),...h,children:a})};L.displayName="List",F.displayName="List.Item",Object.assign(L,{Item:F});let R=e=>{let{active:a,children:t,className:s,href:r,icon:d,onClick:c,theme:m={},disabled:h,...f}=e,p=(0,o.E)((0,n.gh)().listGroup.item,m),u=void 0!==r;return(0,i.jsx)("li",{className:(0,l.m6)(p.base,s),children:(0,i.jsxs)(u?"a":"button",{href:r,onClick:c,type:u?void 0:"button",disabled:h,className:(0,l.m6)(p.link.active[a?"on":"off"],p.link.disabled[h?"on":"off"],p.link.base,p.link.href[u?"on":"off"]),...f,children:[d&&(0,i.jsx)(d,{"aria-hidden":!0,"data-testid":"flowbite-list-group-item-icon",className:p.link.icon}),t]})})},z=e=>{let{children:a,className:t,theme:s={},...r}=e,d=(0,o.E)((0,n.gh)().listGroup,s);return(0,i.jsx)("ul",{className:(0,l.m6)(d.root.base,t),...r,children:a})};z.displayName="ListGroup",R.displayName="ListGroup.Item",Object.assign(z,{Item:R}),t(2363),t(7155),t(8266),t(2897);var B=t(565),G=t(812);t(1885),t(8386),t(6770);let O=e=>{let{active:a,children:t,className:s,onClick:r,theme:d={},...c}=e,m=(0,o.E)((0,n.gh)().pagination,d);return(0,i.jsx)("button",{type:"button",className:(0,l.m6)(a&&m.pages.selector.active,s),onClick:r,...c,children:t})};O.displayName="Pagination.Button";let _=e=>{let{children:a,className:t,onClick:s,theme:r={},disabled:d=!1,...c}=e,m=(0,o.E)((0,n.gh)().pagination,r);return(0,i.jsx)("button",{type:"button",className:(0,l.m6)(d&&m.pages.selector.disabled,t),disabled:d,onClick:s,...c,children:a})};_.displayName="Pagination.Navigation";let M=(e,a)=>e>=a?[]:[...Array(a-e+1).keys()].map(a=>a+e),S=e=>{let{className:a,currentPage:t,layout:s="pagination",nextLabel:d="Next",onPageChange:c,previousLabel:m="Previous",renderPaginationButton:h=e=>(0,i.jsx)(O,{...e}),showIcons:f=!1,theme:p={},totalPages:u,...b}=e,g=(0,o.E)((0,n.gh)().pagination,p),x=Math.min(Math.max("pagination"===s?t+2:t+4,5),u),N=Math.max(1,x-4);return(0,i.jsxs)("nav",{className:(0,l.m6)(g.base,a),...b,children:["table"===s&&(0,i.jsxs)("div",{className:g.layout.table.base,children:["Showing ",(0,i.jsx)("span",{className:g.layout.table.span,children:N})," to\xa0",(0,i.jsx)("span",{className:g.layout.table.span,children:x})," of\xa0",(0,i.jsx)("span",{className:g.layout.table.span,children:u})," Entries"]}),(0,i.jsxs)("ul",{className:g.pages.base,children:[(0,i.jsx)("li",{children:(0,i.jsxs)(_,{className:(0,l.m6)(g.pages.previous.base,f&&g.pages.showIcon),onClick:()=>{c(Math.max(t-1,1))},disabled:1===t,children:[f&&(0,i.jsx)(r.DEl,{"aria-hidden":!0,className:g.pages.previous.icon}),m]})}),"pagination"===s&&M(N,x).map(e=>(0,i.jsx)("li",{"aria-current":e===t?"page":void 0,children:h({className:(0,l.m6)(g.pages.selector.base,t===e&&g.pages.selector.active),active:e===t,onClick:()=>c(e),children:e})},e)),(0,i.jsx)("li",{children:(0,i.jsxs)(_,{className:(0,l.m6)(g.pages.next.base,f&&g.pages.showIcon),onClick:()=>{c(Math.min(t+1,u))},disabled:t===u,children:[d,f&&(0,i.jsx)(r.MOd,{"aria-hidden":!0,className:g.pages.next.icon})]})})]})]})};S.displayName="Pagination",Object.assign(S,{Button:O}),(0,p.forwardRef)((e,a)=>{let{className:t,theme:s={},...r}=e,d=(0,o.E)((0,n.gh)().radio,s);return(0,i.jsx)("input",{ref:a,type:"radio",className:(0,l.m6)(d.root.base,t),...r})}).displayName="Radio",(0,p.forwardRef)((e,a)=>{let{className:t,sizing:s="md",theme:r={},...d}=e,c=(0,o.E)((0,n.gh)().rangeSlider,r);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{"data-testid":"flowbite-range-slider",className:(0,l.m6)(c.root.base,t),children:(0,i.jsx)("div",{className:c.field.base,children:(0,i.jsx)("input",{ref:a,type:"range",className:(0,l.m6)(c.field.input.base,c.field.input.sizes[s]),...d})})})})}).displayName="RangeSlider",t(5334),t(5756),t(3667),(0,p.forwardRef)((e,a)=>{let{addon:t,children:s,className:r,color:d="gray",helperText:c,icon:m,shadow:h,sizing:f="md",theme:p={},...u}=e,b=(0,o.E)((0,n.gh)().select,p);return(0,i.jsxs)("div",{className:(0,l.m6)(b.base,r),children:[t&&(0,i.jsx)("span",{className:b.addon,children:t}),(0,i.jsxs)("div",{className:b.field.base,children:[m&&(0,i.jsx)("div",{className:b.field.icon.base,children:(0,i.jsx)(m,{className:b.field.icon.svg})}),(0,i.jsx)("select",{className:(0,l.m6)(b.field.select.base,b.field.select.colors[d],b.field.select.sizes[f],b.field.select.withIcon[m?"on":"off"],b.field.select.withAddon[t?"on":"off"],b.field.select.withShadow[h?"on":"off"]),...u,ref:a,children:s}),c&&(0,i.jsx)(N.p,{color:d,children:c})]})]})}).displayName="Select",t(8082),t(9022),t(7213),t(2228),t(3051),t(3740),t(258),t(2230),t(6570),t(5785),t(6210),t(3856),t(9839),t(6885),t(3),t(684),t(459),(0,p.forwardRef)((e,a)=>{let{className:t,color:s="gray",helperText:r,shadow:d,theme:c={},...m}=e,h=(0,o.E)((0,n.gh)().textarea,c);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("textarea",{ref:a,className:(0,l.m6)(h.base,h.colors[s],h.withShadow[d?"on":"off"],t),...m}),r&&(0,i.jsx)(N.p,{color:s,children:r})]})}).displayName="Textarea",t(4541),t(4685),t(8387),t(1060),t(2361),t(3441),t(1842),t(3163),t(3962),t(8541),t(7398),t(9114)},7907:function(e,a,t){var s=t(5313);t.o(s,"useRouter")&&t.d(a,{useRouter:function(){return s.useRouter}})}}]);