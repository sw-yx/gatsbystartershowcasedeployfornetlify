(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{301:function(t,e,i){"use strict";i.r(e),function(t){i.d(e,"pageQuery",function(){return h}),i(88),i(320);var n=i(34),s=i.n(n),a=i(1),l=i.n(a),o=i(318),r=i.n(o),c=i(361),d=i.n(c),u=i(362),g=i(309),p=i(313),m=i(312),k=i(327),f=i(326),b=function(e){function i(){return e.apply(this,arguments)||this}return s()(i,e),i.prototype.render=function(){var e=d()(this.props.data.file.childrenDocumentationJs,function(t){return t.name});return t.createElement(p.a,{location:this.props.location,createLink:f.a,sectionList:k.a},t.createElement(m.a,null,t.createElement(r.a,null,t.createElement("title",null,"SSR APIs")),t.createElement("h1",{id:"gatsby-server-rendering-apis",css:{marginTop:0}},"Gatsby Server Rendering APIs"),t.createElement("h2",{css:{marginBottom:Object(g.c)(.5)}},"Usage"),t.createElement("p",{css:{marginBottom:Object(g.c)(1)}},"Implement any of these APIs by exporting them from a file named"," ",t.createElement("code",null,"gatsby-ssr.js")," in the root of your project."),t.createElement("hr",null),t.createElement("h2",{css:{marginBottom:Object(g.c)(.5)}},"APIs"),t.createElement("ul",{css:Object.assign({},Object(g.d)(-.2))},e.map(function(e,i){return t.createElement("li",{key:"function list "+e.name},t.createElement("a",{href:"#"+e.name},e.name))})),t.createElement("br",null),t.createElement("hr",null),t.createElement("h2",null,"Reference"),t.createElement(u.a,{functions:e})))},i}(l.a.Component);e.default=b;var h="2511557810"}.call(this,i(87))},312:function(t,e,i){"use strict";(function(t){i(88),i(1);var n=i(310),s=i.n(n),a=i(309);e.a=function(e){var i,n=e.children,l=e.className,o=e.hasSideBar,r=void 0===o||o,c=e.css,d=void 0===c?{}:c;return t.createElement("div",{css:Object.assign((i={maxWidth:r?Object(a.c)(s.a.maxWidthWithSidebar):Object(a.c)(s.a.maxWidth),margin:"0 auto",padding:Object(a.c)(1.5)+" "+Object(a.c)(a.b.blockMarginBottom),paddingBottom:Object(a.c)(3.5),position:"relative"},i[s.a.Tablet]={paddingBottom:Object(a.c)(1.5)},i),d),className:l},n)}}).call(this,i(87))},326:function(t,e,i){"use strict";(function(t){i.d(e,"a",function(){return p}),i.d(e,"b",function(){return m}),i(88),i(316);var n,s,a,l=i(19),o=i.n(l),r=(i(1),i(310)),c=i.n(r),d=i(309),u=function(t,e){return e?t.slice(0,-1):t},g=function(t){return"*"===t.slice(-1)},p=function(e){var i=e.item,n=e.isActive,s=e.onLinkClick,a=e.isParentOfActiveItem,l=e.stepsUI,r=g(i.title),c=u(i.title,r);return t.createElement(o.a,{css:[b.link,r&&b.draft,n&&b.activeLink,a&&b.parentOfActiveLink],onClick:s,to:""+i.link},l&&t.createElement("span",{css:Object.assign({},b.subsectionLink)}),c)},m=function(e){var i=e.item,n=e.onLinkClick,s=e.isActive,a=e.isParentOfActiveItem,l=e.stepsUI,r=g(i.title),c=u(i.title,r);return t.createElement(o.a,{css:[b.link,r&&b.draft,s&&b.activeLink,a&&b.parentOfActiveLink],onClick:n,to:""+i.link},l&&t.createElement("span",{css:Object.assign({},b.subsectionLink)}),c)},k={left:"-1rem",top:".6em"},f={top:".55em"},b={draft:{"&&":{color:r.colors.gray.calm,fontStyle:"italic"}},parentOfActiveLink:{"&:after":{display:"none"},"&:before":{display:"none"}},activeLink:{"&&":{color:r.colors.gatsby},"&:before":{background:r.colors.gatsby,transform:"scale(1)"},"&:after":{width:200,opacity:1}},link:{display:"block",paddingTop:Object(d.c)(1/8),paddingBottom:Object(d.c)(1/8),position:"relative",zIndex:1,"&&":{border:0,boxShadow:"none",fontFamily:d.b.systemFontFamily.join(","),fontWeight:"normal","&:hover":{background:"transparent",color:r.colors.gatsby,"&:before":{background:r.colors.gatsby,transform:"scale(1)"}}},"&:before":Object.assign({},k,(n={borderRadius:"100%",content:" ",fontWeight:"normal",height:8,position:"absolute",transform:"scale(0.1)",transition:"all "+c.a.animation.speedDefault+" "+c.a.animation.curveDefault,width:8},n[c.a.Tablet]=Object.assign({},f),n)),"&:after":Object.assign({},k,(s={background:r.colors.gatsby,borderRadius:4,content:" ",height:8,left:"-0.6rem",opacity:0,position:"absolute",transform:"translateX(-200px)",transition:"all "+c.a.animation.speedDefault+" "+c.a.animation.curveDefault,width:1},s[c.a.Tablet]=Object.assign({},f,{left:"-0.6rem"}),s))},subsectionLink:Object.assign({},k,(a={background:"#fff",border:"1px solid "+r.colors.ui.bright,borderRadius:"100%",display:"block",fontWeight:"normal",height:8,position:"absolute",width:8,zIndex:-1},a[c.a.Tablet]=Object.assign({},f),a))}}).call(this,i(87))},327:function(t,e,i){"use strict";i.d(e,"a",function(){return u}),i.d(e,"b",function(){return g}),i.d(e,"c",function(){return p}),i(88),i(316),i(142);var n=i(328),s=i.n(n),a=i(329),l=i.n(a),o=i(330),r=i.n(o),c=function(t){var e=t.indexOf("#");return e>=0&&t.substr(e+1)},d=function(t){return t.forEach(function(t){t.items&&t.items.forEach(function(e,i){var n=i;e.hash=c(e.link),e.items&&e.items.forEach(function(e){e.hash=c(e.link),e.parentLink=t.items[n].link})})}),t},u=d(s.a).map(function(t){return Object.assign({},t)}),g=d(l.a).map(function(t){return Object.assign({},t,{disableAccordions:!0})}),p=d(r.a).map(function(t){return Object.assign({},t,{disableAccordions:!0})})},328:function(t,e){t.exports=[{title:"Quick start",items:[{title:"Quick start",link:"/docs/"},{title:"Recipes*",link:"/docs/recipes/"},{title:"Overview of the docs*",link:"/docs/overview/"},{title:"Main Tutorial (step-by-step)",link:"/tutorial/"}]},{title:"Guides",items:[{title:"Preparing your environment*",link:"/docs/environment/",items:[{title:"Basic hardware and software requirements*",link:"/docs/basic-hardware-software-requirements/"},{title:"Browser Support",link:"/docs/browser-support/"},{title:"Gatsby on Macs*",link:"/docs/gatsby-on-macs/"},{title:"Gatsby on Windows",link:"/docs/gatsby-on-windows/"}]},{title:"Deploying & Hosting*",link:"/docs/deploying-and-hosting/",items:[{title:"Preparing site for deployment*",link:"/docs/preparing-for-deployment/"},{title:"Deploying",link:"/docs/deploy-gatsby/"},{title:"Path Prefix",link:"/docs/path-prefix/"},{title:"How Gatsby works with GitHub pages",link:"/docs/how-gatsby-works-with-github-pages/"}]},{title:"Custom configuration*",link:"/docs/customization/",items:[{title:"Babel.js",link:"/docs/babel/"},{title:"Custom webpack config",link:"/docs/add-custom-webpack-config/"},{title:"Customizing html.js",link:"/docs/custom-html/"},{title:"Environment variables",link:"/docs/environment-variables/"},{title:"Proxying API requests",link:"/docs/api-proxy/"}]},{title:"Images and files*",link:"/docs/images-and-files/",items:[{title:"Adding Images, Fonts, and Files",link:"/docs/adding-images-fonts-files/"},{title:"Static folder*",link:"/docs/static-folder/"},{title:"Dropping images into static folders*",link:"/docs/dropping-images-into-static-folders/"},{title:"Importing single files*",link:"/docs/importing-single-files/"},{title:"Importing media content*",link:"/docs/importing-media-content/"},{title:"gatsby-source-filesystem programmatic import*",link:"/docs/gatsby-source-filesystem-programmatic-import/"},{title:"Working with images in Gatsby",link:"/docs/working-with-images/"}]},{title:"Querying your data with GraphQL*",link:"/docs/graphql/",items:[{title:"Introducing GraphiQL*",link:"/docs/introducing-graphiql/"},{title:"Build a page with a GraphQL query",link:"/docs/build-a-page-with-graphql-query/"},{title:"Creating and modifying pages",link:"/docs/creating-and-modifying-pages/"},{title:"Adding Markdown pages",link:"/docs/adding-markdown-pages/"},{title:"Adding a list of Markdown blog posts",link:"/docs/adding-a-list-of-markdown-blog-posts/"},{title:"Creating slugs for pages*",link:"/docs/creating-slugs-for-pages/"},{title:"Programmatically create pages from data*",link:"/docs/programmatically-create-pages-from-data/"},{title:"Querying data with StaticQuery",link:"/docs/static-query/"}]},{title:"Headless CMS*",link:"/docs/headless-cms/",items:[{title:"Netlify CMS",link:"/docs/netlify-cms/"},{title:"WordPress*",link:"/docs/wordpress/"},{title:"Drupal*",link:"/docs/drupal/"},{title:"Contentful*",link:"/docs/contentful/"},{title:"Prose*",link:"/docs/prose/"}]},{title:"Plugins*",link:"/docs/plugins/",items:[{title:"Plugin authoring",link:"/docs/plugin-authoring/"},{title:"Submit to Plugin Library*",link:"/docs/submit-to-plugin-library/"},{title:"Source plugin tutorial",link:"/docs/source-plugin-tutorial/"}]},{title:"Styling*",link:"/docs/styling/",items:[{title:"CSS Modules*",link:"/docs/css-modules/"},{title:"Typography.js*",link:"/docs/typography-js/"},{title:"Using CSS-in-JS library Glamor",link:"/docs/glamor/"},{title:"Using CSS-in-JS library styled components",link:"/docs/styled-components/"},{title:"Creating global styles*",link:"/docs/creating-global-styles/"},{title:"Component CSS*",link:"/docs/component-css/"},{title:"PostCSS*",link:"/docs/post-css/"}]},{title:"Debugging*",link:"/docs/debugging/",items:[{title:"Debugging HTML builds",link:"/docs/debugging-html-builds/"},{title:"Debugging Replace Renderer API",link:"/docs/debugging-replace-renderer-api/"},{title:"Debugging the build process",link:"/docs/debugging-the-build-process/"}]},{title:"Apps with Gatsby",link:"/docs/building-apps-with-gatsby/",items:[{title:"Progressive web app (PWA)",link:"/docs/progressive-web-app/"},{title:"Creating Dynamically-Rendered Navigation*",link:"/docs/creating-dynamically-rendered-navigation/"},{title:"Authentication*",link:"/docs/authentication/"},{title:"E-commerce*",link:"/docs/e-commerce/"},{title:"Interactive pages*",link:"/docs/interactive-pages/"}]},{title:"Preparing site for launch*",link:"/docs/website-functionality/",items:[{title:"Adding a 404 Page",link:"/docs/add-404-page/"},{title:"Adding search to your Gatsby website",link:"/docs/adding-search/"},{title:"Adding tags and categories to blog posts",link:"/docs/adding-tags-and-categories-to-blog-posts/"},{title:"Creating a sitemap*",link:"/docs/creating-a-sitemap/"},{title:"Linking between pages*",link:"/docs/linking-between-pages/"},{title:"Search Engine Optimization (SEO)",link:"/docs/seo/"}]},{title:"Performance*",link:"/docs/performance/",items:[{title:"Caching",link:"/docs/caching/"},{title:"Local HTTPS",link:"/docs/local-https/"},{title:"Lighthouse audit*",link:"/docs/lighthouse-audit/"}]}]},{title:"API Reference",items:[{title:"Gatsby Node APIs",link:"/docs/node-apis/"},{title:"Gatsby Browser APIs",link:"/docs/browser-apis/"},{title:"Gatsby SSR APIs",link:"/docs/ssr-apis/"},{title:"Gatsby config",link:"/docs/gatsby-config/"},{title:"Actions",link:"/docs/actions/"},{title:"GraphQL reference",link:"/docs/graphql-reference/"},{title:"Node interface",link:"/docs/node-interface/"},{title:"API philosophy",link:"/docs/api-specification/"}]},{title:"Releases & Migration",items:[{title:"v2 release notes*",link:"/docs/v2-release-notes/"},{title:"v1 release notes*",link:"/docs/v1-release-notes/"},{title:"v0 release notes*",link:"/docs/v0-release-notes/"},{title:"Migrating from v1 to v2",link:"/docs/migrating-from-v1-to-v2/"},{title:"Migrating from v0 to v1",link:"/docs/migrating-from-v0-to-v1/"}]},{title:"Conceptual Guide",items:[{title:"The Gatsby core philosophy*",link:"/docs/gatsby-core-philosophy/"},{title:"Life and times of a Gatsby build*",link:"/docs/life-and-times-of-a-gatsby-build/"},{title:"Building with components",link:"/docs/building-with-components/"},{title:"Lifecycle APIs",link:"/docs/gatsby-lifecycle-apis/"},{title:"Plugins",link:"/docs/plugins/"},{title:"PRPL pattern",link:"/docs/prpl-pattern/"},{title:"Querying data with GraphQL",link:"/docs/querying-with-graphql/"}]},{title:"Advanced Tutorials",items:[{title:"Making a site with user authentication*",link:"/docs/authentication-tutorial/"},{title:"Making an e-commerce Gatsby site",link:"/docs/ecommerce-tutorial/"},{title:"Creating a source plugin",link:"/docs/source-plugin-tutorial/"},{title:"Using the WordPress source plugin",link:"/docs/wordpress-source-plugin-tutorial/"},{title:"Adding images to a WordPress site",link:"/docs/image-tutorial/"}]},{title:"Contributing",items:[{title:"Community",link:"/docs/community/"},{title:"Code of Conduct",link:"/docs/code-of-conduct/"},{title:"How to contribute",link:"/docs/how-to-contribute/"},{title:"Free swag for contributors",link:"/docs/contributor-swag/"},{title:"How to file an issue",link:"/docs/how-to-file-an-issue/"},{title:"How to submit a PR*",link:"/docs/how-to-submit-a-pr/"},{title:"Gatsby style guide",link:"/docs/gatsby-style-guide/"},{title:"Design principles*",link:"/docs/design-principles/"},{title:"RFC process*",link:"/docs/rfc-process/"},{title:"Docs templates*",link:"/docs/templates/"},{title:"How to run a Gatsby workshop*",link:"/docs/how-to-run-a-gatsby-workshop/"},{title:"How to pitch Gatsby*",link:"/docs/how-to-pitch-gatsby/"},{title:"Submit a blogpost*",link:"/docs/submit-a-blogpost/"},{title:"Submit to Site Showcase*",link:"/docs/submit-to-site-showcase/"},{title:"Submit to Starter Showcase*",link:"/docs/submit-to-starter-showcase/"}]},{title:"Glossary*",link:"/docs/glossary/"},{title:"Commands (Gatsby CLI)*",link:"/docs/gatsby-cli/"}]},329:function(t,e){t.exports=[{title:"Introduction",items:[{title:"Introduction",link:"/features/#introduction"},{title:"Legend",link:"/features/#legend"}]},{title:"Performance",items:[{title:"Static content",link:"/features/#static-content"},{title:"CDN",link:"/features/#cdn"},{title:"AMP support",link:"/features/#amp-support"},{title:"Offline access",link:"/features/#offline-access"},{title:"Prefetch linked pages",link:"/features/#prefetch-linked-pages"},{title:"Page caching",link:"/features/#page-caching"},{title:"No extraneous code fetching",link:"/features/#no-extraneous-code-fetching"},{title:"Progressive image loading",link:"/features/#progressive-image-loading"},{title:"Responsive image loading",link:"/features/#responsive-image-loading"},{title:"Inlines critical CSS",link:"/features/#inlines-critical-css"},{title:"Font self-hosting",link:"/features/#font-self-hosting"}]},{title:"Developer Experience",items:[{title:"Serverless",link:"/features/#serverless"},{title:"Export as Code",link:"/features/#export-as-code"},{title:"Refresh or link to preview",link:"/features/#refresh-or-link-to-preview"},{title:"Hot reload content",link:"/features/#hot-reload-content"},{title:"Hot reload code",link:"/features/#hot-reload-code"},{title:"Componentization",link:"/features/#componentization"},{title:"One-way data binding",link:"/features/#one-way-data-binding"},{title:"Declarative API data queries (GraphQL)",link:"/features/#declarative-api-data-queries-(graphql)"},{title:"Declarative UI",link:"/features/#declarative-ui"},{title:"Asset pipelines",link:"/features/#asset-pipelines"},{title:"CSS Extensions (eg Sass)",link:"/features/#css-extensions-(eg-sass)"},{title:"Advanced Javascript syntax",link:"/features/#advanced-javascript-syntax"}]},{title:"Ecosystem",items:[{title:"Component ecosystem",link:"/features/#component-ecosystem"},{title:"Hosted option",link:"/features/#hosted-option"},{title:"Theme ecosystem",link:"/features/#theme-ecosystem"}]},{title:"Design",items:[{title:"Programmatic Design",link:"/features/#programmatic-design"},{title:"Design systems",link:"/features/#design-systems"},{title:"Component library",link:"/features/#component-library"}]}]},330:function(t,e){t.exports=[{title:"Quick start",link:"/docs/"},{title:"Tutorial (step-by-step)",items:[{title:"Introduction",link:"/tutorial/"},{title:"0. Programming basics",link:"/tutorial/part-zero/"},{title:"1. Introduction to Gatsby basics",link:"/tutorial/part-one/",ui:"steps",items:[{title:"Check environment",link:"/tutorial/part-one/#check-your-development-environment"},{title:'Install the "Hello World" starter',link:"/tutorial/part-one/#install-the-hello-world-starter"},{title:"Linking between pages",link:"/tutorial/part-one/#linking-between-pages"},{title:"Interactive page",link:"/tutorial/part-one/#interactive-page"},{title:"Deploying Gatsby.js websites",link:"/tutorial/part-one/#deploying-gatsbyjs-websites"}]},{title:"2. Introduction to using CSS in Gatsby",link:"/tutorial/part-two/",ui:"steps",items:[{title:"Building with components",link:"/tutorial/part-two/#building-with-components"},{title:"Creating Global Styles",link:"/tutorial/part-two/#creating-global-styles"},{title:"Typography.js",link:"/tutorial/part-two/#typographyjs"},{title:"Gatsby Plugins",link:"/tutorial/part-two/#gatsby-plugins"},{title:"Component CSS",link:"/tutorial/part-two/#component-css"},{title:"CSS Modules",link:"/tutorial/part-two/#css-modules"}]},{title:"3. Creating nested layout components",link:"/tutorial/part-three/",ui:"steps",items:[{title:"Our first layout component",link:"/tutorial/part-three/"}]},{title:"4. Querying for data in a blog",link:"/tutorial/part-four/",ui:"steps",items:[{title:"Recap of the first half of the tutorial",link:"/tutorial/part-four/#recap-of-first-half-of-the-tutorial"},{title:"Data in Gatsby",link:"/tutorial/part-four/#data-in-gatsby"},{title:"How Gatsby uses GraphQL",link:"/tutorial/part-four/#how-gatsbys-data-layer-uses-graphql-to-pull-data-into-components"},{title:"Our first GraphQL query",link:"/tutorial/part-four/#our-first-graphql-query"}]},{title:"5. Source plugins and rendering queried data",link:"/tutorial/part-five/",ui:"steps",items:[{title:"Introducing GraphiQL",link:"/tutorial/part-five/#introducing-graphiql"},{title:"Source Plugins",link:"/tutorial/part-five/#source-plugins"},{title:"Build a page with a GraphQL query",link:"/tutorial/part-five/#build-a-page-with-a-graphql-query"}]},{title:"6. Transformer plugins",link:"/tutorial/part-six/",ui:"steps",items:[{title:"What are transformer plugins?",link:"/tutorial/part-six/#transformer-plugins"},{title:"Create a list of our site's markdown files",link:"/tutorial/part-six/#create-a-list-of-our-sites-markdown-files-in-srcpagesindexjs"}]},{title:"7. Programmatically create pages from data",link:"/tutorial/part-seven/",ui:"steps",items:[{title:"Creating slugs for pages",link:"/tutorial/part-seven/#creating-slugs-for-pages"},{title:"Creating pages",link:"/tutorial/part-seven/#creating-pages"}]},{title:"8. Preparing a site to go live",link:"/tutorial/part-eight/",ui:"steps",items:[{title:"Lighthouse audit",link:"/tutorial/part-eight/#lighthouse"}]}]}]},361:function(t,e,i){var n=i(368),s=i(406),a=i(334),l=i(341),o=a(function(t,e){if(null==t)return[];var i=e.length;return i>1&&l(t,e[0],e[1])?e=[]:i>2&&l(e[0],e[1],e[2])&&(e=[e[0]]),s(t,n(e,1),[])});t.exports=o},362:function(t,e,i){"use strict";(function(t){i(88),i(320),i(1);var n=i(309);e.a=function(e){var i=e.functions;return t.createElement("div",null,i.map(function(e,i){return t.createElement("div",{id:e.name,key:"reference list "+e.name,css:{marginBottom:Object(n.c)(1)}},0!==i&&t.createElement("hr",null),t.createElement("h3",null,t.createElement("a",{href:"#"+e.name},t.createElement("code",null,e.name))),t.createElement("div",{dangerouslySetInnerHTML:{__html:e.description.childMarkdownRemark.html}}),(e.params&&e.params.length)>0&&t.createElement("div",null,t.createElement("h4",null,"Parameters"),e.params.map(function(e){return function e(i,s){return void 0===s&&(s=0),"plugin"===i.name||"traceId"===i.name?null:t.createElement("div",{key:"param "+JSON.stringify(i),css:Object.assign({marginLeft:1.05*s+"rem"},s>0&&Object(n.d)((1===s?-1:-1.5)/5),{lineHeight:n.b.baseLineHeight})},t.createElement("h5",{css:Object.assign({margin:0},s>0&&Object(n.d)((1===s?0:-.5)/5))},"$0"===i.name?"destructured object":i.name," ",i.type&&"$0"!==i.name&&t.createElement("span",{css:{color:"#73725f"}},"{"+i.type.name+"}"),i.default&&t.createElement("span",{css:{color:"#73725f"}},"[default=",i.default,"]")),i.description&&t.createElement("div",{css:{marginBottom:Object(n.c)(-.25)},dangerouslySetInnerHTML:{__html:i.description.childMarkdownRemark.html}}),i.properties&&t.createElement("div",{css:{marginBottom:Object(n.c)(1),marginTop:Object(n.c)(.5)}},i.properties.map(function(t){return e(t,s+1)})))}(e,0)})),e.examples&&e.examples.length>0&&t.createElement("div",null,t.createElement("h4",{css:{marginTop:Object(n.c)(1)}},"Example")," ",e.examples.map(function(i,n){return t.createElement("div",{className:"gatsby-highlight"},t.createElement("pre",{className:"language-javascript",key:e.name+" example "+n},t.createElement("code",{className:"language-javascript",dangerouslySetInnerHTML:{__html:i.highlighted}})))})))}))}}).call(this,i(87))}}]);
//# sourceMappingURL=component---src-pages-docs-ssr-apis-js-1e9fafabd0085d9ea9a2.js.map