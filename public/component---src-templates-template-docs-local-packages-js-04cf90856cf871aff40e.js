(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{291:function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"pageQuery",function(){return l}),n(320);var r=n(34),i=n.n(r),o=n(391),M=n.n(o),a=n(1),u=n.n(a),s=n(313),c=n(396),j=n(491),L=function(e){function n(){return e.apply(this,arguments)||this}return i()(n,e),n.prototype.render=function(){var e=this.props.data,n=e.npmPackage,r=e.markdownRemark,i={keywords:["gatsby"],lastPublisher:{name:"User Not Found",avatar:""},modified:new Date},o={html:"No Package Readme Found",excerpt:"",timeToRead:0,fields:{title:n?n.name:"Title Not Found"}};return t.createElement(s.a,{location:this.props.location},t.createElement(c.a,{history:this.props.history},t.createElement(j.a,{page:!!r&&M()(r,"parent"),packageName:r?r.fields.title:o.fields.title,excerpt:r?r.excerpt:o.excerpt,html:r?r.html:o.html,githubUrl:"https://github.com/gatsbyjs/gatsby/tree/master/packages/"+(r?r.fields.title:o.fields.title),timeToRead:r?r.timeToRead:o.timeToRead,modified:n&&n.modified?n.modified:i.modified,keywords:n?n.keywords:i.keywords,lastPublisher:n?n.lastPublisher:i.lastPublisher})))},n}(u.a.Component);e.default=L;var l="2742909928"}.call(this,n(87))},312:function(t,e,n){"use strict";(function(t){n(88),n(1);var r=n(310),i=n.n(r),o=n(309);e.a=function(e){var n,r=e.children,M=e.className,a=e.hasSideBar,u=void 0===a||a,s=e.css,c=void 0===s?{}:s;return t.createElement("div",{css:Object.assign((n={maxWidth:u?Object(o.c)(i.a.maxWidthWithSidebar):Object(o.c)(i.a.maxWidth),margin:"0 auto",padding:Object(o.c)(1.5)+" "+Object(o.c)(o.b.blockMarginBottom),paddingBottom:Object(o.c)(3.5),position:"relative"},n[i.a.Tablet]={paddingBottom:Object(o.c)(1.5)},n),c),className:M},r)}}).call(this,n(87))},345:function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(n,r){var i=this,o=e.extractMessage(n)+": "+JSON.stringify({response:n,request:r});return(i=t.call(this,o)||this).response=n,i.request=r,"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(i,e),i}return i(e,t),e.extractMessage=function(t){try{return t.errors[0].message}catch(e){return"GraphQL Error (Code: "+t.status+")"}},e}(Error);e.ClientError=o},385:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return d});var r=n(34),i=n.n(r),o=n(1),M=n.n(o),a=n(386),u=n.n(a),s=n(387),c=n.n(s),j=n(388),L=n.n(j),l=n(389),y=n(309),N=n(310),g=new l.GraphQLClient("https://api.graph.cool/relay/v1/cj8xuo77f0a3a0164y7jketkr");function h(t,e){return g.request("\n    mutation {\n      createReview(input: {thumbsUp: "+t+', relativePath: "'+e+'", clientMutationId: "1"}) {\n        review {\n          id\n        }\n      }\n    }\n  ')}var d=function(e){function n(){var t;return(t=e.call(this)||this).state={feedbackSubmitted:!1},t}return i()(n,e),n.prototype.render=function(){var e=this;return[t.createElement("hr",{css:{marginTop:Object(y.c)(2)},key:"hr"}),t.createElement("div",{css:{marginBottom:Object(y.c)(1)},key:"div"},this.state.feedbackSubmitted?t.createElement("span",{css:{lineHeight:Object(y.c)(2)}},"Thank you!"):t.createElement("span",{css:{lineHeight:Object(y.c)(2)}},"Was this helpful?"," ",t.createElement(c.a,{onClick:function(){h(!0,e.props.page.parent.relativePath),e.setState({feedbackSubmitted:!0})},css:{color:N.colors.success,fontSize:Object(y.c)(1.3),padding:Object(y.c)(.2),position:"relative",top:-3,marginLeft:Object(y.c)(.25),cursor:"pointer"}})," ",t.createElement(L.a,{onClick:function(){h(!1,e.props.page.parent.relativePath),e.setState({feedbackSubmitted:!0})},css:{color:N.colors.warning,fontSize:Object(y.c)(1.3),padding:Object(y.c)(.2),cursor:"pointer"}})),t.createElement("a",{css:{"&&":{float:"right",display:"block",color:N.colors.gray.calm,fontSize:Object(y.d)(-.2).fontSize,fontWeight:"normal",border:"none",boxShadow:"none",padding:Object(y.c)(.5),"&:hover":{background:"transparent",color:N.colors.gatsby}}},href:"https://github.com/gatsbyjs/gatsby/blob/master/"+(this.props.packagePage?"packages":"docs")+"/"+(this.props.page?this.props.page.parent.relativePath:"")},t.createElement(u.a,{css:{fontSize:20,position:"relative",top:-2}})," ","edit this page on GitHub"))]},n}(M.a.Component)}).call(this,n(87))},386:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=M(n(1)),o=M(n(311));function M(t){return t&&t.__esModule?t:{default:t}}e.default=function(t){return i.default.createElement(o.default,r({viewBox:"0 0 40 40"},t),i.default.createElement("g",null,i.default.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},t.exports=e.default},387:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=M(n(1)),o=M(n(311));function M(t){return t&&t.__esModule?t:{default:t}}e.default=function(t){return i.default.createElement(o.default,r({viewBox:"0 0 40 40"},t),i.default.createElement("g",null,i.default.createElement("path",{d:"m38.4 16.6l-0.1 0.2h0.1v3.2c0 0.5-0.1 0.9-0.3 1.3l-5.1 11.7c-0.4 1.1-1.6 2-3 2h-15c-1.8 0-3.4-1.6-3.4-3.4v-16.6c0-0.9 0.4-1.7 1.1-2.3l10.9-11.1 1.8 1.8c0.5 0.5 0.7 1.1 0.7 1.8v0.5l-1.6 7.7h10.5c1.8 0 3.4 1.4 3.4 3.2z m-36.8 18.4v-20h6.8v20h-6.8z"})))},t.exports=e.default},388:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=M(n(1)),o=M(n(311));function M(t){return t&&t.__esModule?t:{default:t}}e.default=function(t){return i.default.createElement(o.default,r({viewBox:"0 0 40 40"},t),i.default.createElement("g",null,i.default.createElement("path",{d:"m31.6 5h6.8v20h-6.8v-20z m-6.6 0c1.8 0 3.4 1.6 3.4 3.4v16.6c0 0.9-0.4 1.7-1.1 2.3l-10.9 11.1-1.8-1.8c-0.5-0.5-0.7-1.1-0.7-1.8v-0.5l1.6-7.7h-10.5c-1.8 0-3.4-1.4-3.4-3.2l0.1-0.2h-0.1v-3.2c0-0.5 0.1-0.9 0.3-1.2l5.1-11.8c0.4-1.1 1.6-2 3-2h15z"})))},t.exports=e.default},389:function(t,e,n){"use strict";var r=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function M(t){try{u(r.next(t))}catch(t){o(t)}}function a(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(M,a)}u((r=r.apply(t,e||[])).next())})},o=this&&this.__generator||function(t,e){var n,r,i,o,M={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;M;)try{if(n=1,r&&(i=r[2&o[0]?"return":o[0]?"throw":"next"])&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[0,i.value]),o[0]){case 0:case 1:i=o;break;case 4:return M.label++,{value:o[1],done:!1};case 5:M.label++,r=o[1],o=[0];continue;case 7:o=M.ops.pop(),M.trys.pop();continue;default:if(!(i=(i=M.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){M=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){M.label=o[1];break}if(6===o[0]&&M.label<i[1]){M.label=i[1],i=o;break}if(i&&M.label<i[2]){M.label=i[2],M.ops.push(o);break}i[2]&&M.ops.pop(),M.trys.pop();continue}o=e.call(t,M)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},M=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&(n[r[i]]=t[r[i]])}return n};Object.defineProperty(e,"__esModule",{value:!0});var a=n(345),u=n(345);e.ClientError=u.ClientError,n(390);var s=function(){function t(t,e){this.url=t,this.options=e||{}}return t.prototype.rawRequest=function(t,e){return i(this,void 0,void 0,function(){var n,i,u,s,c,L,l,y,N;return o(this,function(o){switch(o.label){case 0:return n=this.options,i=n.headers,u=M(n,["headers"]),s=JSON.stringify({query:t,variables:e||void 0}),[4,fetch(this.url,r({method:"POST",headers:Object.assign({"Content-Type":"application/json"},i),body:s},u))];case 1:return[4,j(c=o.sent())];case 2:if(L=o.sent(),c.ok&&!L.errors&&L.data)return l=c.headers,y=c.status,[2,r({},L,{headers:l,status:y})];throw N="string"==typeof L?{error:L}:L,new a.ClientError(r({},N,{status:c.status,headers:c.headers}),{query:t,variables:e})}})})},t.prototype.request=function(t,e){return i(this,void 0,void 0,function(){var n,i,u,s,c,L,l;return o(this,function(o){switch(o.label){case 0:return n=this.options,i=n.headers,u=M(n,["headers"]),s=JSON.stringify({query:t,variables:e||void 0}),[4,fetch(this.url,r({method:"POST",headers:Object.assign({"Content-Type":"application/json"},i),body:s},u))];case 1:return[4,j(c=o.sent())];case 2:if(L=o.sent(),c.ok&&!L.errors&&L.data)return[2,L.data];throw l="string"==typeof L?{error:L}:L,new a.ClientError(r({},l,{status:c.status}),{query:t,variables:e})}})})},t.prototype.setHeaders=function(t){return this.options.headers=t,this},t.prototype.setHeader=function(t,e){var n,r=this.options.headers;return r?r[t]=e:this.options.headers=((n={})[t]=e,n),this},t}();function c(t,e,n){return i(this,void 0,void 0,function(){return o(this,function(r){return[2,new s(t).request(e,n)]})})}function j(t){return i(this,void 0,void 0,function(){var e;return o(this,function(n){return(e=t.headers.get("Content-Type"))&&e.startsWith("application/json")?[2,t.json()]:[2,t.text()]})})}e.GraphQLClient=s,e.rawRequest=function(t,e,n){return i(this,void 0,void 0,function(){return o(this,function(r){return[2,new s(t).rawRequest(e,n)]})})},e.request=c,e.default=c},390:function(t,e){!function(t){if(!t.fetch){var e={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(e.arrayBuffer)var n=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],r=function(t){return t&&DataView.prototype.isPrototypeOf(t)},i=ArrayBuffer.isView||function(t){return t&&n.indexOf(Object.prototype.toString.call(t))>-1};c.prototype.append=function(t,e){t=a(t),e=u(e);var n=this.map[t];this.map[t]=n?n+","+e:e},c.prototype.delete=function(t){delete this.map[a(t)]},c.prototype.get=function(t){return t=a(t),this.has(t)?this.map[t]:null},c.prototype.has=function(t){return this.map.hasOwnProperty(a(t))},c.prototype.set=function(t,e){this.map[a(t)]=u(e)},c.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},c.prototype.keys=function(){var t=[];return this.forEach(function(e,n){t.push(n)}),s(t)},c.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),s(t)},c.prototype.entries=function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),s(t)},e.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);var o=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];g.prototype.clone=function(){return new g(this,{body:this._bodyInit})},N.call(g.prototype),N.call(d.prototype),d.prototype.clone=function(){return new d(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},d.error=function(){var t=new d(null,{status:0,statusText:""});return t.type="error",t};var M=[301,302,303,307,308];d.redirect=function(t,e){if(-1===M.indexOf(e))throw new RangeError("Invalid status code");return new d(null,{status:e,headers:{location:t}})},t.Headers=c,t.Request=g,t.Response=d,t.fetch=function(t,n){return new Promise(function(r,i){var o=new g(t,n),M=new XMLHttpRequest;M.onload=function(){var t,e,n={status:M.status,statusText:M.statusText,headers:(t=M.getAllResponseHeaders()||"",e=new c,t.split(/\r?\n/).forEach(function(t){var n=t.split(":"),r=n.shift().trim();if(r){var i=n.join(":").trim();e.append(r,i)}}),e)};n.url="responseURL"in M?M.responseURL:n.headers.get("X-Request-URL");var i="response"in M?M.response:M.responseText;r(new d(i,n))},M.onerror=function(){i(new TypeError("Network request failed"))},M.ontimeout=function(){i(new TypeError("Network request failed"))},M.open(o.method,o.url,!0),"include"===o.credentials&&(M.withCredentials=!0),"responseType"in M&&e.blob&&(M.responseType="blob"),o.headers.forEach(function(t,e){M.setRequestHeader(e,t)}),M.send(void 0===o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}function a(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function u(t){return"string"!=typeof t&&(t=String(t)),t}function s(t){var n={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e.iterable&&(n[Symbol.iterator]=function(){return n}),n}function c(t){this.map={},t instanceof c?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function j(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function L(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function l(t){var e=new FileReader,n=L(e);return e.readAsArrayBuffer(t),n}function y(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function N(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(e.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(e.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(e.arrayBuffer&&e.blob&&r(t))this._bodyArrayBuffer=y(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!e.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!i(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=y(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},e.blob&&(this.blob=function(){var t=j(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?j(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(l)}),this.text=function(){var t,e,n,r=j(this);if(r)return r;if(this._bodyBlob)return t=this._bodyBlob,n=L(e=new FileReader),e.readAsText(t),n;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},e.formData&&(this.formData=function(){return this.text().then(h)}),this.json=function(){return this.text().then(JSON.parse)},this}function g(t,e){var n,r,i=(e=e||{}).body;if(t instanceof g){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new c(t.headers)),this.method=t.method,this.mode=t.mode,i||null==t._bodyInit||(i=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new c(e.headers)),this.method=(r=(n=e.method||this.method||"GET").toUpperCase(),o.indexOf(r)>-1?r:n),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&i)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(i)}function h(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),i=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(i))}}),e}function d(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new c(e.headers),this.url=e.url||"",this._initBody(t)}}("undefined"!=typeof self?self:this)},396:function(t,e,n){"use strict";(function(t){n(88);var r=n(34),i=n.n(r),o=n(1),M=n(397),a=n(309),u=n(310),s=n.n(u),c=function(e){function n(){return e.apply(this,arguments)||this}return i()(n,e),n.prototype.render=function(){var e,n,r=Object(a.c)(17),i={height:"calc(100vh - "+s.a.headerHeight+" + 1px)",width:"100vw",padding:Object(a.c)(.75),zIndex:1,WebkitOverflowScrolling:"touch","::-webkit-scrollbar":{width:"6px",height:"6px"},"::-webkit-scrollbar-thumb":{background:u.colors.ui.bright},"::-webkit-scrollbar-track":{background:u.colors.ui.light}},c={width:r,position:"fixed",background:u.colors.ui.whisper,borderRight:"1px solid "+u.colors.ui.light};return t.createElement(o.Fragment,null,t.createElement("div",{css:Object.assign({},i,(e={display:""+(!this.props.isPluginsIndex&&"none")},e[s.a.Tablet]=Object.assign({},c,{display:"block"}),e))},t.createElement(M.a,{history:this.props.history})),t.createElement("div",{css:(n={display:""+(this.props.isPluginsIndex&&"none")},n[s.a.Tablet]={display:"block",paddingLeft:""+r},n)},this.props.children))},n}(o.Component);e.a=c}).call(this,n(87))},397:function(t,e,n){"use strict";(function(t){n(91),n(320),n(145),n(146),n(144);var r=n(34),i=n.n(r),o=n(1),M=n(460),a=n(310),u=n.n(a),s=n(141),c=n(487),j=n.n(c),L=n(408),l=n.n(L),y=n(488),N=n.n(y),g=n(489),h=n.n(g),d=n(309),S=700;n(89).css.insert("\n  .ais-SearchBox__input:valid ~ .ais-SearchBox__reset {\n    display: block;\n  }\n\n  .ais-SearchBox__root {\n    display: inline-block;\n    position: relative;\n    margin: 0;\n    width: 100%;\n    height: 46px;\n    white-space: nowrap;\n    box-sizing: border-box;\n  }\n\n  .ais-SearchBox__wrapper {\n    width: 100%;\n    height: 100%;\n  }\n\n  .ais-SearchBox__input {\n    -webkit-appearance: none;\n    display: inline-block;\n    -webkit-transition: box-shadow 0.4s ease, background 0.4s ease;\n    transition: box-shadow 0.4s ease, background 0.4s ease;\n    border: 1px solid #e0d6eb;\n    border-radius: 4px;\n    color: "+a.colors.gatsby+";\n    background: #ffffff;\n    padding: 0;\n    padding-right: 36px;\n    padding-left: 46px;\n    width: 100%;\n    height: 100%;\n    vertical-align: middle;\n    white-space: normal;\n    font-size: inherit;\n    font-family: "+d.a.options.headerFontFamily.join(",")+";\n  }\n  .ais-SearchBox__input:hover,\n  .ais-SearchBox__input:active,\n  .ais-SearchBox__input:focus {\n    box-shadow: none;\n    outline: 0;\n  }\n  .ais-SearchBox__input::-webkit-input-placeholder,\n  .ais-SearchBox__input::-moz-placeholder,\n  .ais-SearchBox__input:-ms-input-placeholder,\n  .ais-SearchBox__input::placeholder {\n    color: "+a.colors.lilac+';\n  }\n\n  .ais-SearchBox__submit {\n    position: absolute;\n    top: 0;\n    right: inherit;\n    left: 0;\n    margin: 0;\n    border: 0;\n    border-radius: 4px 0 0 4px;\n    background-color: rgba(255, 255, 255, 0);\n    padding: 0;\n    width: 46px;\n    height: 100%;\n    vertical-align: middle;\n    text-align: center;\n    font-size: inherit;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n  .ais-SearchBox__submit::before {\n    display: inline-block;\n    margin-right: -4px;\n    height: 100%;\n    vertical-align: middle;\n    content: "" 2;\n  }\n  .ais-SearchBox__submit:hover,\n  .ais-SearchBox__submit:active {\n    cursor: pointer;\n  }\n  .ais-SearchBox__submit:focus {\n    outline: 0;\n  }\n  .ais-SearchBox__submit svg {\n    width: 18px;\n    height: 18px;\n    vertical-align: middle;\n    fill: '+a.colors.ui.bright+";\n  }\n\n  .ais-SearchBox__reset {\n    display: none;\n    position: absolute;\n    top: 13px;\n    right: 13px;\n    margin: 0;\n    border: 0;\n    background: none;\n    cursor: pointer;\n    padding: 0;\n    font-size: inherit;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    fill: "+a.colors.ui.bright+";\n  }\n  .ais-SearchBox__reset:focus {\n    outline: 0;\n  }\n  .ais-SearchBox__reset svg {\n    display: block;\n    margin: 4px;\n    width: 12px;\n    height: 12px;\n  }\n\n  .ais-InfiniteHits__loadMore {\n    width: 100%;\n    height: "+Object(d.c)(2)+";\n    border-radius: "+u.a.radius+"px;\n    border: 1px solid "+a.colors.gatsby+";\n    margin-top: 0;\n    cursor: pointer;\n    background-color: transparent;\n    color: "+a.colors.gatsby+";\n    outline: none;\n    transition: all "+u.a.animation.speedDefault+" "+u.a.animation.curveDefault+";\n    font-family: "+d.a.options.headerFontFamily.join(",")+";\n  }\n  .ais-InfiniteHits__loadMore:hover {\n    background-color: "+a.colors.gatsby+";\n    color: #fff;\n  }\n\n  .ais-InfiniteHits__loadMore[disabled] {\n    display: none;\n  }\n");var p={display:"flex",justifyContent:"center",width:"100%"},D={display:"none"},f={"&&":{background:"url("+l.a+")",border:"none",boxShadow:"none",fontWeight:"normal",backgroundRepeat:"no-repeat",backgroundPosition:"50%",backgroundSize:"100%",overflow:"hidden",textIndent:"-9000px",padding:"0!important",width:110,height:"100%",display:"block",marginLeft:"auto","&:hover":{background:"url("+l.a+")",backgroundRepeat:"no-repeat",backgroundPosition:"50%",backgroundSize:"100%"}}},A=function(e){function n(t,n){return e.call(this,t)||this}return i()(n,e),n.prototype.render=function(){var e,n,r=this;return t.createElement("div",{css:(e={paddingBottom:Object(d.c)(2.5)},e[u.a.Tablet]={paddingBottom:0},e)},t.createElement("div",{css:p},t.createElement(M.SearchBox,{translations:{placeholder:"Search Gatsby Library"}})),t.createElement("div",{css:D},t.createElement(M.RefinementList,{attributeName:"keywords",defaultRefinement:["gatsby-component","gatsby-plugin"]}),t.createElement(M.Toggle,{attributeName:"deprecated",value:!1,label:"No deprecated plugins",defaultRefinement:!0})),t.createElement("div",{css:{height:Object(d.c)(1.5),paddingTop:Object(d.c)(.25),paddingBottom:Object(d.c)(.25),color:a.colors.gray.calm,fontSize:14,fontStretch:"normal"}},t.createElement(M.Stats,{translations:{stats:function(t,e){return t+" results"}}})),t.createElement("div",null,t.createElement("div",{css:(n={backgroundColor:"white"},n[u.a.Tablet]={height:"calc(100vh - 225px)",overflowY:"scroll",WebkitOverflowScrolling:"touch","::-webkit-scrollbar":{width:"6px",height:"6px"},"::-webkit-scrollbar-thumb":{background:a.colors.ui.bright},"::-webkit-scrollbar-track":{background:a.colors.ui.light}},n)},t.createElement(M.InfiniteHits,{hitComponent:function(e){return t.createElement(x,{hit:e.hit,pathname:r.props.pathname,search:r.props.searchState})}}))),t.createElement("div",{css:{fontSize:0,lineHeight:0,height:20,marginTop:Object(d.c)(.75)}},"Search by"," ",t.createElement("a",{href:"https://www.algolia.com/",css:f},"Algolia")))},n}(o.Component),T={display:"flex",justifyContent:"space-between"},x=function(e){var n=e.hit,r=e.pathname,i=e.search,o=r.includes(n.name);return t.createElement(s.Link,{to:{pathname:"/packages/"+n.name+"/",search:"?="+i},css:{"&&":{display:"block",fontFamily:d.a.options.bodyFontFamily.join(","),fontWeight:"400",color:a.colors.gray.dark,borderLeft:Object(d.c)(3/16)+" solid "+(o?a.colors.gatsby:"none"),padding:Object(d.c)(.5),paddingLeft:o?Object(d.c)(5/16):Object(d.c)(.5),boxShadow:"none",borderBottom:0,position:"relative","&:after":{content:" ",position:"absolute",bottom:0,top:"auto",width:"100%",height:1,left:0,background:a.colors.ui.light}}}},t.createElement("div",{css:T},t.createElement("div",{css:{fontFamily:d.a.options.headerFontFamily.join(","),fontWeight:"bold"}},n.name),t.createElement("div",{css:{display:"flex",alignItems:"center",fontSize:Object(d.c)(.5)}},n.humanDownloadsLast30Days,t.createElement(j.a,{style:{width:25,height:25},color:"#000"}))),t.createElement("div",{css:{color:a.colors.gray.calm,fontSize:Object(d.d)(-.2).fontSize,fontFamily:d.a.options.headerFontFamily.join(",")}},h()(n.description)))},w=function(e){function n(t){var n;return(n=e.call(this,t)||this).urlToSearch=function(){return n.props.history.location.search.slice(2)},n.state={searchState:{query:n.urlToSearch(),page:1}},n.updateHistory=N()(n.updateHistory,S),n}i()(n,e);var r=n.prototype;return r.updateHistory=function(t){this.props.history.replace({pathname:window.location.pathname,search:"?="+t.query})},r.onSearchStateChange=function(t){this.updateHistory(t),this.setState({searchState:t})},r.render=function(){return t.createElement("div",null,t.createElement(M.InstantSearch,{apiKey:"ae43b69014c017e05950a1cd4273f404",appId:"OFCNCOG2CU",indexName:"npm-search",searchState:this.state.searchState,onSearchStateChange:this.onSearchStateChange.bind(this)},t.createElement(A,{pathname:this.props.history.location.pathname,searchState:this.state.searchState.query})))},n}(o.Component);e.a=w}).call(this,n(87))},408:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTMwIDE4JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0nLTM2Ljg2OCUnIHkxPScxMzQuOTM2JScgeDI9JzEyOS40MzIlJyB5Mj0nLTI3LjclJyBpZD0nYSc+PHN0b3Agc3RvcC1jb2xvcj0nIzAwQUVGRicgb2Zmc2V0PScwJScvPjxzdG9wIHN0b3AtY29sb3I9JyMzMzY5RTcnIG9mZnNldD0nMTAwJScvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+PHBhdGggZD0nTTU5LjM5OS4wMjJoMTMuMjk5YTIuMzcyIDIuMzcyIDAgMCAxIDIuMzc3IDIuMzY0VjE1LjYyYTIuMzcyIDIuMzcyIDAgMCAxLTIuMzc3IDIuMzY0SDU5LjM5OWEyLjM3MiAyLjM3MiAwIDAgMS0yLjM3Ny0yLjM2NFYyLjM4MUEyLjM2OCAyLjM2OCAwIDAgMSA1OS4zOTkuMDIyeicgZmlsbD0ndXJsKCNhKScvPjxwYXRoIGQ9J002Ni4yNTcgNC41NmMtMi44MTUgMC01LjEgMi4yNzItNS4xIDUuMDc4IDAgMi44MDYgMi4yODQgNS4wNzIgNS4xIDUuMDcyIDIuODE1IDAgNS4xLTIuMjcyIDUuMS01LjA3OCAwLTIuODA2LTIuMjc5LTUuMDcyLTUuMS01LjA3MnptMCA4LjY1MmMtMS45ODMgMC0zLjU5My0xLjYwMi0zLjU5My0zLjU3NCAwLTEuOTcyIDEuNjEtMy41NzQgMy41OTMtMy41NzQgMS45ODMgMCAzLjU5MyAxLjYwMiAzLjU5MyAzLjU3NGEzLjU4MiAzLjU4MiAwIDAgMS0zLjU5MyAzLjU3NHptMC02LjQxOHYyLjY2NGMwIC4wNzYuMDgyLjEzMS4xNTMuMDkzbDIuMzc3LTEuMjI2Yy4wNTUtLjAyNy4wNzEtLjA5My4wNDQtLjE0N2EyLjk2IDIuOTYgMCAwIDAtMi40NjUtMS40ODdjLS4wNTUgMC0uMTEuMDQ0LS4xMS4xMDRsLjAwMS0uMDAxem0tMy4zMy0xLjk1NmwtLjMxMi0uMzExYS43ODMuNzgzIDAgMCAwLTEuMTA2IDBsLS4zNzIuMzdhLjc3My43NzMgMCAwIDAgMCAxLjEwMWwuMzA3LjMwNWMuMDQ5LjA0OS4xMjEuMDM4LjE2NC0uMDExLjE4MS0uMjQ1LjM3OC0uNDc5LjU5Ny0uNjk3LjIyNS0uMjIzLjQ1NS0uNDIuNzA3LS41OTkuMDU1LS4wMzMuMDYtLjEwOS4wMTYtLjE1OGgtLjAwMXptNS4wMDEtLjgwNnYtLjYxNmEuNzgxLjc4MSAwIDAgMC0uNzgzLS43NzloLTEuODI0YS43OC43OCAwIDAgMC0uNzgzLjc3OXYuNjMyYzAgLjA3MS4wNjYuMTIuMTM3LjEwNGE1LjczNiA1LjczNiAwIDAgMSAxLjU4OC0uMjIzYy41MiAwIDEuMDM1LjA3MSAxLjUzNC4yMDdhLjEwNi4xMDYgMCAwIDAgLjEzMS0uMTA0eicgZmlsbD0nI0ZGRicvPjxwYXRoIGQ9J00xMDIuMTYyIDEzLjc2MmMwIDEuNDU1LS4zNzIgMi41MTctMS4xMjMgMy4xOTMtLjc1LjY3Ni0xLjg5NSAxLjAxMy0zLjQ0IDEuMDEzLS41NjQgMC0xLjczNi0uMTA5LTIuNjczLS4zMTZsLjM0NS0xLjY4OWMuNzgzLjE2MyAxLjgxOS4yMDcgMi4zNjEuMjA3Ljg2IDAgMS40NzMtLjE3NCAxLjg0LS41MjMuMzY3LS4zNDkuNTQ4LS44NjYuNTQ4LTEuNTUzdi0uMzQ5YTYuMzc0IDYuMzc0IDAgMCAxLS44MzguMzE2IDQuMTUxIDQuMTUxIDAgMCAxLTEuMTk0LjE1OCA0LjUxNSA0LjUxNSAwIDAgMS0xLjYxNi0uMjc4IDMuMzg1IDMuMzg1IDAgMCAxLTEuMjU0LS44MTcgMy43NDQgMy43NDQgMCAwIDEtLjgxMS0xLjM1MWMtLjE5Mi0uNTM5LS4yOS0xLjUwNC0uMjktMi4yMTIgMC0uNjY1LjEwNC0xLjQ5OC4zMDctMi4wNTRhMy45MjUgMy45MjUgMCAwIDEgLjkwNC0xLjQzMyA0LjEyNCA0LjEyNCAwIDAgMSAxLjQ0MS0uOTI2IDUuMzEgNS4zMSAwIDAgMSAxLjk0NS0uMzY1Yy42OTYgMCAxLjMzNy4wODcgMS45NjEuMTkxYTE1Ljg2IDE1Ljg2IDAgMCAxIDEuNTg4LjMzMnY4LjQ1NmgtLjAwMXptLTUuOTU0LTQuMjA2YzAgLjg5My4xOTcgMS44ODUuNTkyIDIuMjk5LjM5NC40MTQuOTA0LjYyMSAxLjUyOC42MjEuMzQgMCAuNjYzLS4wNDkuOTY0LS4xNDJhMi43NSAyLjc1IDAgMCAwIC43MzQtLjMzMnYtNS4yOWE4LjUzMSA4LjUzMSAwIDAgMC0xLjQxMy0uMThjLS43NzgtLjAyMi0xLjM2OS4yOTQtMS43ODYuODAxLS40MTEuNTA3LS42MTkgMS4zOTUtLjYxOSAyLjIyM3ptMTYuMTIgMGMwIC43MTktLjEwNCAxLjI2NC0uMzE4IDEuODU4YTQuMzg5IDQuMzg5IDAgMCAxLS45MDQgMS41MmMtLjM4OS40Mi0uODU0Ljc0Ni0xLjQwMi45NzUtLjU0OC4yMjktMS4zOTEuMzYtMS44MTMuMzYtLjQyMi0uMDA1LTEuMjYtLjEyNS0xLjgwMi0uMzZhNC4wODggNC4wODggMCAwIDEtMS4zOTctLjk3NSA0LjQ4NiA0LjQ4NiAwIDAgMS0uOTA5LTEuNTIgNS4wMzcgNS4wMzcgMCAwIDEtLjMyOS0xLjg1OGMwLS43MTkuMDk5LTEuNDExLjMxOC0xLjk5OS4yMTktLjU4OC41MjYtMS4wOS45Mi0xLjUwOS4zOTQtLjQyLjg2NS0uNzQxIDEuNDAyLS45N2E0LjU0NyA0LjU0NyAwIDAgMSAxLjc4Ni0uMzM4IDQuNjkgNC42OSAwIDAgMSAxLjc5MS4zMzhjLjU0OC4yMjkgMS4wMTkuNTUgMS40MDIuOTcuMzg5LjQyLjY5LjkyMS45MDkgMS41MDkuMjMuNTg4LjM0NSAxLjI4LjM0NSAxLjk5OWguMDAxem0tMi4xOTEuMDA1YzAtLjkyMS0uMjAzLTEuNjg5LS41OTctMi4yMjMtLjM5NC0uNTM5LS45NDgtLjgwNi0xLjY1NC0uODA2LS43MDcgMC0xLjI2LjI2Ny0xLjY1NC44MDYtLjM5NC41MzktLjU4NiAxLjMwMi0uNTg2IDIuMjIzIDAgLjkzMi4xOTcgMS41NTguNTkyIDIuMDk4LjM5NC41NDUuOTQ4LjgxMiAxLjY1NC44MTIuNzA3IDAgMS4yNi0uMjcyIDEuNjU0LS44MTIuMzk0LS41NDUuNTkyLTEuMTY2LjU5Mi0yLjA5OGgtLjAwMXptNi45NjIgNC43MDdjLTMuNTExLjAxNi0zLjUxMS0yLjgyMi0zLjUxMS0zLjI3NEwxMTMuNTgzLjkyNmwyLjE0Mi0uMzM4djEwLjAwM2MwIC4yNTYgMCAxLjg4IDEuMzc1IDEuODg1djEuNzkyaC0uMDAxem0zLjc3NCAwaC0yLjE1M1Y1LjA3MmwyLjE1My0uMzM4djkuNTM0em0tMS4wNzktMTAuNTQyYy43MTggMCAxLjMwNC0uNTc4IDEuMzA0LTEuMjkxIDAtLjcxNC0uNTgxLTEuMjkxLTEuMzA0LTEuMjkxLS43MjMgMC0xLjMwNC41NzgtMS4zMDQgMS4yOTEgMCAuNzE0LjU4NiAxLjI5MSAxLjMwNCAxLjI5MXptNi40MzEgMS4wMTNjLjcwNyAwIDEuMzA0LjA4NyAxLjc4Ni4yNjIuNDgyLjE3NC44NzEuNDIgMS4xNTYuNzMuMjg1LjMxMS40ODguNzM1LjYwOCAxLjE4Mi4xMjYuNDQ3LjE4Ni45MzcuMTg2IDEuNDc2djUuNDgxYTI1LjI0IDI1LjI0IDAgMCAxLTEuNDk1LjI1MWMtLjY2OC4wOTgtMS40MTkuMTQ3LTIuMjUxLjE0N2E2LjgyOSA2LjgyOSAwIDAgMS0xLjUxNy0uMTU4IDMuMjEzIDMuMjEzIDAgMCAxLTEuMTc4LS41MDcgMi40NTUgMi40NTUgMCAwIDEtLjc2MS0uOTA0Yy0uMTgxLS4zNy0uMjc0LS44OTMtLjI3NC0xLjQzOCAwLS41MjMuMTA0LS44NTUuMzA3LTEuMjE1LjIwOC0uMzYuNDg3LS42NTQuODM4LS44ODNhMy42MDkgMy42MDkgMCAwIDEgMS4yMjctLjQ5IDcuMDczIDcuMDczIDAgMCAxIDIuMjAyLS4xMDNjLjI2My4wMjcuNTM3LjA3Ni44MzMuMTQ3di0uMzQ5YzAtLjI0NS0uMDI3LS40NzktLjA4OC0uNjk3YTEuNDg2IDEuNDg2IDAgMCAwLS4zMDctLjU4M2MtLjE0OC0uMTY5LS4zNC0uMy0uNTgxLS4zOTJhMi41MzYgMi41MzYgMCAwIDAtLjkxNS0uMTYzYy0uNDkzIDAtLjk0Mi4wNi0xLjM1My4xMzEtLjQxMS4wNzEtLjc1LjE1My0xLjAwOC4yNDVsLS4yNTctMS43NDljLjI2OC0uMDkzLjY2OC0uMTg1IDEuMTgzLS4yNzhhOS4zMzUgOS4zMzUgMCAwIDEgMS42Ni0uMTQybC0uMDAxLS4wMDF6bS4xODEgNy43MzFjLjY1NyAwIDEuMTQ1LS4wMzggMS40ODQtLjEwNHYtMi4xNjhhNS4wOTcgNS4wOTcgMCAwIDAtMS45NzgtLjEwNGMtLjI0MS4wMzMtLjQ2LjA5OC0uNjUyLjE5MWExLjE2NyAxLjE2NyAwIDAgMC0uNDY2LjM5MmMtLjEyMS4xNjktLjE3NS4yNjctLjE3NS41MjMgMCAuNTAxLjE3NS43OS40OTMuOTgxLjMyMy4xOTYuNzUuMjg5IDEuMjkzLjI4OWguMDAxek04NC4xMDkgNC43OTRjLjcwNyAwIDEuMzA0LjA4NyAxLjc4Ni4yNjIuNDgyLjE3NC44NzEuNDIgMS4xNTYuNzMuMjkuMzE2LjQ4Ny43MzUuNjA4IDEuMTgyLjEyNi40NDcuMTg2LjkzNy4xODYgMS40NzZ2NS40ODFhMjUuMjQgMjUuMjQgMCAwIDEtMS40OTUuMjUxYy0uNjY4LjA5OC0xLjQxOS4xNDctMi4yNTEuMTQ3YTYuODI5IDYuODI5IDAgMCAxLTEuNTE3LS4xNTggMy4yMTMgMy4yMTMgMCAwIDEtMS4xNzgtLjUwNyAyLjQ1NSAyLjQ1NSAwIDAgMS0uNzYxLS45MDRjLS4xODEtLjM3LS4yNzQtLjg5My0uMjc0LTEuNDM4IDAtLjUyMy4xMDQtLjg1NS4zMDctMS4yMTUuMjA4LS4zNi40ODctLjY1NC44MzgtLjg4M2EzLjYwOSAzLjYwOSAwIDAgMSAxLjIyNy0uNDkgNy4wNzMgNy4wNzMgMCAwIDEgMi4yMDItLjEwM2MuMjU3LjAyNy41MzcuMDc2LjgzMy4xNDd2LS4zNDljMC0uMjQ1LS4wMjctLjQ3OS0uMDg4LS42OTdhMS40ODYgMS40ODYgMCAwIDAtLjMwNy0uNTgzYy0uMTQ4LS4xNjktLjM0LS4zLS41ODEtLjM5MmEyLjUzNiAyLjUzNiAwIDAgMC0uOTE1LS4xNjNjLS40OTMgMC0uOTQyLjA2LTEuMzUzLjEzMS0uNDExLjA3MS0uNzUuMTUzLTEuMDA4LjI0NWwtLjI1Ny0xLjc0OWMuMjY4LS4wOTMuNjY4LS4xODUgMS4xODMtLjI3OGE4Ljg5IDguODkgMCAwIDEgMS42Ni0uMTQybC0uMDAxLS4wMDF6bS4xODYgNy43MzZjLjY1NyAwIDEuMTQ1LS4wMzggMS40ODQtLjEwNHYtMi4xNjhhNS4wOTcgNS4wOTcgMCAwIDAtMS45NzgtLjEwNGMtLjI0MS4wMzMtLjQ2LjA5OC0uNjUyLjE5MWExLjE2NyAxLjE2NyAwIDAgMC0uNDY2LjM5MmMtLjEyMS4xNjktLjE3NS4yNjctLjE3NS41MjMgMCAuNTAxLjE3NS43OS40OTMuOTgxLjMxOC4xOTEuNzUuMjg5IDEuMjkzLjI4OWguMDAxem04LjY4MiAxLjczOGMtMy41MTEuMDE2LTMuNTExLTIuODIyLTMuNTExLTMuMjc0TDg5LjQ2MS45MjZsMi4xNDItLjMzOHYxMC4wMDNjMCAuMjU2IDAgMS44OCAxLjM3NSAxLjg4NXYxLjc5MmgtLjAwMXonIGZpbGw9JyMxODIzNTknLz48cGF0aCBkPSdNNS4wMjcgMTEuMDI1YzAgLjY5OC0uMjUyIDEuMjQ2LS43NTcgMS42NDQtLjUwNS4zOTctMS4yMDEuNTk2LTIuMDg5LjU5Ni0uODg4IDAtMS42MTUtLjEzOC0yLjE4MS0uNDE0di0xLjIxNGMuMzU4LjE2OC43MzkuMzAxIDEuMTQxLjM5Ny40MDMuMDk3Ljc3OC4xNDUgMS4xMjUuMTQ1LjUwOCAwIC44ODQtLjA5NyAxLjEyNS0uMjlhLjk0NS45NDUgMCAwIDAgLjM2My0uNzc5Ljk3OC45NzggMCAwIDAtLjMzMy0uNzQ3Yy0uMjIyLS4yMDQtLjY4LS40NDYtMS4zNzUtLjcyNS0uNzE2LS4yOS0xLjIyMS0uNjIxLTEuNTE1LS45OTQtLjI5NC0uMzcyLS40NC0uODItLjQ0LTEuMzQzIDAtLjY1NS4yMzMtMS4xNzEuNjk4LTEuNTQ3LjQ2Ni0uMzc2IDEuMDktLjU2NCAxLjg3NS0uNTY0Ljc1MiAwIDEuNS4xNjUgMi4yNDUuNDk0bC0uNDA4IDEuMDQ3Yy0uNjk4LS4yOTQtMS4zMjEtLjQ0LTEuODY5LS40NC0uNDE1IDAtLjczLjA5LS45NDUuMjcxYS44OS44OSAwIDAgMC0uMzIyLjcxN2MwIC4yMDQuMDQzLjM3OS4xMjkuNTI0LjA4Ni4xNDUuMjI3LjI4Mi40MjQuNDExLjE5Ny4xMjkuNTUxLjI5OSAxLjA2My41MS41NzcuMjQuOTk5LjQ2NCAxLjI2OC42NzEuMjY5LjIwOC40NjYuNDQyLjU5MS43MDQuMTI1LjI2MS4xODguNTY5LjE4OC45MjRsLS4wMDEuMDAyem0zLjk4IDIuMjRjLS45MjQgMC0xLjY0Ni0uMjY5LTIuMTY3LS44MDgtLjUyMS0uNTM5LS43ODItMS4yODEtLjc4Mi0yLjIyNiAwLS45Ny4yNDItMS43MzMuNzI1LTIuMjg4LjQ4My0uNTU1IDEuMTQ4LS44MzMgMS45OTMtLjgzMy43ODQgMCAxLjQwNC4yMzggMS44NTguNzE0LjQ1NS40NzYuNjgyIDEuMTMyLjY4MiAxLjk2NnYuNjgySDcuMzU3Yy4wMTguNTc3LjE3NCAxLjAyLjQ2NyAxLjMyOS4yOTQuMzEuNzA3LjQ2NSAxLjI0MS40NjUuMzUxIDAgLjY3OC0uMDMzLjk4LS4wOTlhNS4xIDUuMSAwIDAgMCAuOTc1LS4zM3YxLjAyNmEzLjg2NSAzLjg2NSAwIDAgMS0uOTM1LjMxMiA1LjcyMyA1LjcyMyAwIDAgMS0xLjA4LjA5MWwuMDAyLS4wMDF6bS0uMjMxLTUuMTk5Yy0uNDAxIDAtLjcyMi4xMjctLjk2NC4zODFzLS4zODYuNjI1LS40MzIgMS4xMTJoMi42OTZjLS4wMDctLjQ5MS0uMTI1LS44NjItLjM1NC0xLjExNS0uMjI5LS4yNTItLjU0NC0uMzc5LS45NDUtLjM3OWwtLjAwMS4wMDF6bTcuNjkyIDUuMDkybC0uMjUyLS44MjdoLS4wNDNjLS4yODYuMzYyLS41NzUuNjA4LS44NjUuNzM5LS4yOS4xMzEtLjY2Mi4xOTYtMS4xMTcuMTk2LS41ODQgMC0xLjAzOS0uMTU4LTEuMzY3LS40NzMtLjMyOC0uMzE1LS40OTEtLjc2MS0uNDkxLTEuMzM3IDAtLjYxMi4yMjctMS4wNzQuNjgyLTEuMzg2LjQ1NS0uMzEyIDEuMTQ4LS40ODIgMi4wNzktLjUxbDEuMDI2LS4wMzJ2LS4zMTdjMC0uMzgtLjA4OS0uNjYzLS4yNjYtLjg1MS0uMTc3LS4xODgtLjQ1Mi0uMjgyLS44MjQtLjI4Mi0uMzA0IDAtLjU5Ni4wNDUtLjg3Ni4xMzRhNi42OCA2LjY4IDAgMCAwLS44MDYuMzE3bC0uNDA4LS45MDJhNC40MTQgNC40MTQgMCAwIDEgMS4wNTgtLjM4NCA0Ljg1NiA0Ljg1NiAwIDAgMSAxLjA4NS0uMTMyYy43NTYgMCAxLjMyNi4xNjUgMS43MTEuNDk0LjM4NS4zMjkuNTc3Ljg0Ny41NzcgMS41NTJ2NC4wMDJoLS45MDJsLS4wMDEtLjAwMXptLTEuODgtLjg1OWMuNDU4IDAgLjgyNi0uMTI4IDEuMTA0LS4zODQuMjc4LS4yNTYuNDE2LS42MTUuNDE2LTEuMDc3di0uNTE2bC0uNzYzLjAzMmMtLjU5NC4wMjEtMS4wMjcuMTIxLTEuMjk3LjI5OHMtLjQwNi40NDgtLjQwNi44MTRjMCAuMjY1LjA3OS40Ny4yMzYuNjE1LjE1OC4xNDUuMzk0LjIxOC43MDkuMjE4aC4wMDF6bTcuNTU3LTUuMTg5Yy4yNTQgMCAuNDY0LjAxOC42MjguMDU0bC0uMTI0IDEuMTc2YTIuMzgzIDIuMzgzIDAgMCAwLS41NTktLjA2NGMtLjUwNSAwLS45MTQuMTY1LTEuMjI3LjQ5NC0uMzEzLjMyOS0uNDcuNzU3LS40NyAxLjI4NHYzLjEwNWgtMS4yNjJWNy4yMThoLjk4OGwuMTY3IDEuMDQ3aC4wNjRjLjE5Ny0uMzU0LjQ1NC0uNjM2Ljc3MS0uODQzYTEuODMgMS44MyAwIDAgMSAxLjAyMy0uMzEyaC4wMDF6bTQuMTI1IDYuMTU1Yy0uODk5IDAtMS41ODItLjI2Mi0yLjA0OS0uNzg3LS40NjctLjUyNS0uNzAxLTEuMjc3LS43MDEtMi4yNTkgMC0uOTk5LjI0NC0xLjc2Ny43MzMtMi4zMDQuNDg5LS41MzcgMS4xOTUtLjgwNiAyLjExOS0uODA2LjYyNyAwIDEuMTkxLjExNiAxLjY5Mi4zNDlsLS4zODEgMS4wMTVjLS41MzQtLjIwOC0uOTc0LS4zMTItMS4zMjEtLjMxMi0xLjAyOCAwLTEuNTQyLjY4Mi0xLjU0MiAyLjA0NiAwIC42NjYuMTI4IDEuMTY2LjM4NCAxLjUwMS4yNTYuMzM1LjYzMS41MDIgMS4xMjUuNTAyYTMuMjMgMy4yMyAwIDAgMCAxLjU5NS0uNDE5djEuMTAxYTIuNTMgMi41MyAwIDAgMS0uNzIyLjI4NSA0LjM1NiA0LjM1NiAwIDAgMS0uOTMyLjA4NnYuMDAyem04LjI3Ny0uMTA3aC0xLjI2OFY5LjUwNmMwLS40NTgtLjA5Mi0uOC0uMjc3LTEuMDI2LS4xODQtLjIyNi0uNDc3LS4zMzgtLjg3OC0uMzM4LS41MyAwLS45MTkuMTU4LTEuMTY4LjQ3NS0uMjQ5LjMxNy0uMzczLjg0OC0uMzczIDEuNTkzdjIuOTQ5aC0xLjI2MlY0LjgwMWgxLjI2MnYyLjEyMmMwIC4zNC0uMDIxLjcwNC0uMDY0IDEuMDloLjA4MWExLjc2IDEuNzYgMCAwIDEgLjcxNy0uNjY2Yy4zMDYtLjE1OC42NjMtLjIzNiAxLjA3Mi0uMjM2IDEuNDM5IDAgMi4xNTkuNzI1IDIuMTU5IDIuMTc1djMuODczbC0uMDAxLS4wMDF6bTcuNjQ5LTYuMDQ4Yy43NDEgMCAxLjMxOS4yNjkgMS43MzIuODA2LjQxNC41MzcuNjIgMS4yOTEuNjIgMi4yNjEgMCAuOTc0LS4yMDkgMS43MzItLjYyOCAyLjI3NS0uNDE5LjU0Mi0xLjAwMS44MTQtMS43NDYuODE0LS43NTIgMC0xLjMzNi0uMjctMS43NTEtLjgxMWgtLjA4NmwtLjIzMS43MDRoLS45NDVWNC44MDFoMS4yNjJ2MS45ODdsLS4wMjEuNjU1LS4wMzIuNTUzaC4wNTRjLjQwMS0uNTkxLjk5Mi0uODg2IDEuNzcyLS44ODZ6bS0uMzI4IDEuMDMxYy0uNTA4IDAtLjg3NS4xNDktMS4wOTguNDQ4LS4yMjQuMjk5LS4zMzkuNzk5LS4zNDYgMS41MDF2LjA4NmMwIC43MjMuMTE1IDEuMjQ3LjM0NCAxLjU3MS4yMjkuMzI0LjYwMy40ODYgMS4xMjMuNDg2LjQ0OCAwIC43ODctLjE3NyAxLjAxOC0uNTMyLjIzMS0uMzU0LjM0Ni0uODY3LjM0Ni0xLjUzNiAwLTEuMzUtLjQ2Mi0yLjAyNS0xLjM4Ni0yLjAyNWwtLjAwMS4wMDF6bTMuMjQ0LS45MjRoMS4zNzVsMS4yMDkgMy4zNjhjLjE4My40OC4zMDQuOTMxLjM2NSAxLjM1NGguMDQzYy4wMzItLjE5Ny4wOTEtLjQzNi4xNzctLjcxNy4wODYtLjI4MS41NDEtMS42MTYgMS4zNjQtNC4wMDRoMS4zNjRsLTIuNTQxIDYuNzNjLS40NjIgMS4yMzUtMS4yMzIgMS44NTMtMi4zMSAxLjg1My0uMjc5IDAtLjU1MS0uMDMtLjgxNi0uMDkxdi0uOTk5Yy4xOS4wNDMuNDA2LjA2NC42NS4wNjQuNjA5IDAgMS4wMzctLjM1MyAxLjI4NC0xLjA1OGwuMjItLjU1OS0yLjM4NS01Ljk0MWguMDAxeicgZmlsbD0nIzFEMzY1NycvPjwvZz48L3N2Zz4="},491:function(t,e,n){"use strict";(function(t){var r=n(34),i=n.n(r),o=n(1),M=n.n(o),a=n(0),u=n.n(a),s=n(318),c=n.n(s),j=n(141),L=n(310),l=n(312),y=n(385),N=n(434),g=n.n(N),h=function(e){function n(){return e.apply(this,arguments)||this}return i()(n,e),n.prototype.render=function(){var e=this.props,n=e.page,r=e.packageName,i=e.excerpt,o=e.html,M=e.githubUrl,a=e.timeToRead;return t.createElement(l.a,null,t.createElement(c.a,null,t.createElement("title",null,r),t.createElement("meta",{name:"description",content:i}),t.createElement("meta",{name:"og:description",content:i}),t.createElement("meta",{name:"twitter:description",content:i}),t.createElement("meta",{name:"og:title",content:r}),t.createElement("meta",{name:"og:type",content:"article"}),t.createElement("meta",{name:"twitter.label1",content:"Reading time"}),t.createElement("meta",{name:"twitter:data1",content:a+" min read"})),t.createElement("div",{css:{display:"flex",justifyContent:"space-between"}},t.createElement("a",{css:{"&&":{display:M?"inline-block":"none",fontWeight:"normal",border:0,color:L.colors.gray.calm,boxShadow:"none","&:hover":{background:"none",color:L.colors.gatsby}}},href:M},t.createElement(g.a,{style:{verticalAlign:"text-top"}})),M&&t.createElement(j.Link,{to:"/starter-showcase?d="+r},"See starters that use this")),t.createElement("div",{css:{position:"relative","& h1":{marginTop:0}},dangerouslySetInnerHTML:{__html:o}}),t.createElement(y.a,{page:n,packagePage:!0}))},n}(M.a.Component);h.propTypes={page:u.a.oneOfType([u.a.object,u.a.bool]),packageName:u.a.string.isRequired,excerpt:u.a.string,html:u.a.string.isRequired,githubUrl:u.a.string,timeToRead:u.a.number,lastPublisher:u.a.object},e.a=h}).call(this,n(87))}}]);
//# sourceMappingURL=component---src-templates-template-docs-local-packages-js-04cf90856cf871aff40e.js.map