(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"I+5a":function(e,a,t){(function(r){var n;e.exports=(n=t("q1tI"),function(e){var a={};function t(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)t.d(r,n,function(a){return e[a]}.bind(null,n));return r},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=4)}([function(e,a,t){e.exports=t(2)()},function(e,a){e.exports=n},function(e,a,t){"use strict";var r=t(3);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,a,t,n,i,l){if(l!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function a(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:i,resetWarningCache:n};return t.PropTypes=t,t}},function(e,a,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";r.r(t);var n=r(1),i=r.n(n),l=r(0),o=r.n(l);function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var c=function(e){var a=e.pageClassName,t=e.pageLinkClassName,r=e.page,n=e.selected,l=e.activeClassName,o=e.activeLinkClassName,c=e.getEventListener,u=e.pageSelectedHandler,p=e.href,d=e.extraAriaContext,f=e.ariaLabel||"Page "+r+(d?" "+d:""),g=null;return n&&(g="page",f=e.ariaLabel||"Page "+r+" is your current page",a=void 0!==a?a+" "+l:l,void 0!==t?void 0!==o&&(t=t+" "+o):t=o),i.a.createElement("li",{className:a},i.a.createElement("a",s({role:"button",className:t,href:p,tabIndex:"0","aria-label":f,"aria-current":g,onKeyPress:u},c(u)),r))};c.propTypes={pageSelectedHandler:o.a.func.isRequired,selected:o.a.bool.isRequired,pageClassName:o.a.string,pageLinkClassName:o.a.string,activeClassName:o.a.string,activeLinkClassName:o.a.string,extraAriaContext:o.a.string,href:o.a.string,ariaLabel:o.a.string,page:o.a.number.isRequired,getEventListener:o.a.func.isRequired};var u=c;function p(){return(p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var i=void 0;try{i=r[n]}catch(e){continue}e.register(i,n,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var d=function(e){var a=e.breakLabel,t=e.breakClassName,r=e.breakLinkClassName,n=e.breakHandler,l=e.getEventListener,o=t||"break";return i.a.createElement("li",{className:o},i.a.createElement("a",p({className:r,role:"button",tabIndex:"0",onKeyPress:n},l(n)),a))};d.propTypes={breakLabel:o.a.oneOfType([o.a.string,o.a.node]),breakClassName:o.a.string,breakLinkClassName:o.a.string,breakHandler:o.a.func.isRequired,getEventListener:o.a.func.isRequired};var f=d;function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function v(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,a){return(b=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function h(e,a){return!a||"object"!==g(a)&&"function"!=typeof a?y(e):a}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var i=void 0;try{i=r[n]}catch(e){continue}e.register(i,n,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var x=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&b(e,a)}(n,e);var a,t,r=function(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=C(e);if(a){var n=C(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return h(this,t)}}(n);function n(e){var a,t;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,n),k(y(a=r.call(this,e)),"handlePreviousPage",(function(e){var t=a.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&a.handlePageSelected(t-1,e)})),k(y(a),"handleNextPage",(function(e){var t=a.state.selected,r=a.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<r-1&&a.handlePageSelected(t+1,e)})),k(y(a),"handlePageSelected",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))})),k(y(a),"getEventListener",(function(e){return k({},a.props.eventListener,e)})),k(y(a),"handleBreakClick",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1;var r=a.state.selected;a.handlePageSelected(r<e?a.getForwardJump():a.getBackwardJump(),t)})),k(y(a),"callCallback",(function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})})),k(y(a),"pagination",(function(){var e=[],t=a.props,r=t.pageRangeDisplayed,n=t.pageCount,l=t.marginPagesDisplayed,o=t.breakLabel,s=t.breakClassName,c=t.breakLinkClassName,u=a.state.selected;if(n<=r)for(var p=0;p<n;p++)e.push(a.getPageElement(p));else{var d,g,m,v=r/2,b=r-v;u>n-r/2?v=r-(b=n-u):u<r/2&&(b=r-(v=u));var h=function(e){return a.getPageElement(e)};for(d=0;d<n;d++)(g=d+1)<=l||g>n-l||d>=u-v&&d<=u+b?e.push(h(d)):o&&e[e.length-1]!==m&&(m=i.a.createElement(f,{key:d,breakLabel:o,breakClassName:s,breakLinkClassName:c,breakHandler:a.handleBreakClick.bind(null,d),getEventListener:a.getEventListener}),e.push(m))}return e})),t=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:t},a}return a=n,(t=[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,r=e.extraAriaContext;void 0===a||t||this.callCallback(a),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,r=e+a.pageRangeDisplayed;return r>=t?t-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,r=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<r)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,r=t.pageClassName,n=t.pageLinkClassName,l=t.activeClassName,o=t.activeLinkClassName,s=t.extraAriaContext;return i.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:r,pageLinkClassName:n,activeClassName:l,activeLinkClassName:o,extraAriaContext:s,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.pageCount,r=e.containerClassName,n=e.previousLabel,l=e.previousClassName,o=e.previousLinkClassName,s=e.previousAriaLabel,c=e.nextLabel,u=e.nextClassName,p=e.nextLinkClassName,d=e.nextAriaLabel,f=this.state.selected,g=l+(0===f?" ".concat(a):""),v=u+(f===t-1?" ".concat(a):""),b=0===f?"true":"false",h=f===t-1?"true":"false";return i.a.createElement("ul",{className:r},i.a.createElement("li",{className:g},i.a.createElement("a",m({className:o,href:this.hrefBuilder(f-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":b,"aria-label":s},this.getEventListener(this.handlePreviousPage)),n)),this.pagination(),i.a.createElement("li",{className:v},i.a.createElement("a",m({className:p,href:this.hrefBuilder(f+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":h,"aria-label":d},this.getEventListener(this.handleNextPage)),c)))}}])&&v(a.prototype,t),n}(n.Component);k(x,"propTypes",{pageCount:o.a.number.isRequired,pageRangeDisplayed:o.a.number.isRequired,marginPagesDisplayed:o.a.number.isRequired,previousLabel:o.a.node,previousAriaLabel:o.a.string,nextLabel:o.a.node,nextAriaLabel:o.a.string,breakLabel:o.a.oneOfType([o.a.string,o.a.node]),hrefBuilder:o.a.func,onPageChange:o.a.func,initialPage:o.a.number,forcePage:o.a.number,disableInitialCallback:o.a.bool,containerClassName:o.a.string,pageClassName:o.a.string,pageLinkClassName:o.a.string,activeClassName:o.a.string,activeLinkClassName:o.a.string,previousClassName:o.a.string,nextClassName:o.a.string,previousLinkClassName:o.a.string,nextLinkClassName:o.a.string,disabledClassName:o.a.string,breakClassName:o.a.string,breakLinkClassName:o.a.string,extraAriaContext:o.a.string,ariaLabelBuilder:o.a.func,eventListener:o.a.string}),k(x,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var i=void 0;try{i=r[n]}catch(e){continue}e.register(i,n,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),t.default=x,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var i=void 0;try{i=r[n]}catch(e){continue}e.register(i,n,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,t("yLpj"))},TRom:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return k}));var r=t("q1tI"),n=t.n(r),i=t("Wbzz"),l=t("I+5a"),o=t.n(l),s=t("pVnL"),c=t.n(s),u=t("8OQS"),p=t.n(u),d=t("qKvR"),f=t("BMxC"),g=Object(r.forwardRef)((function(e,a){var t=e.align,r=e.justify,i=e.wrap,l=e.direction,o=p()(e,["align","justify","wrap","direction"]);return n.a.createElement(f.a,c()({ref:a,display:"flex",flexDirection:l,alignItems:t,justifyContent:r,flexWrap:i},o))}));g.displayName="Flex";var m=g,v=Object(r.forwardRef)((function(e,a){var t,n=e.direction,i=e.isInline,l=void 0!==i&&i,o=e.isReversed,s=void 0!==o&&o,u=e.children,g=e.align,v=e.justify,b=e.spacing,h=void 0===b?2:b,y=e.shouldWrapChildren,C=p()(e,["direction","isInline","isReversed","children","align","justify","spacing","shouldWrapChildren"]),k=s||n&&n.endsWith("reverse"),x=l||n&&n.startsWith("row");x&&(t="row"),k&&(t=l?"row-reverse":"column-reverse"),n&&(t=n),x||k||n||(t="column");var N=r.Children.toArray(u).filter(r.isValidElement);return Object(d.d)(m,c()({align:g,justify:v,direction:t},C,{ref:a}),N.map((function(e,a){var t,n,i=N.length===a+1,l=x?((t={})[k?"ml":"mr"]=i?null:h,t):((n={})[k?"mt":"mb"]=i?null:h,n);return y?Object(d.d)(f.a,c()({d:"inline-block"},l,{key:"stack-box-wrapper-"+a}),e):Object(r.cloneElement)(e,l)})))})),b=t("qWyU"),h=t("eJLp"),y=t("Bl7J"),C=t("FxHT"),k=(a.default=function(e){var a=e.data,t=e.pageContext;return n.a.createElement(y.a,null,n.a.createElement("header",{className:"blog-header entry-header"},n.a.createElement("div",{className:"project-hero align-items-center row no-gutters"},n.a.createElement("div",{className:"split-hero--white col w-50"},n.a.createElement("div",{className:"project-entry"},n.a.createElement("h1",null,"Blog"),"     ",n.a.createElement("h2",{className:"sub-heading"},"Opinions, tutorials and sandboxing on all things web/IT related."))),n.a.createElement("div",{className:"split-hero--img split-hero--blog col w-50 d-none d-sm-block"},n.a.createElement("img",{src:"https://www.russforster.co.uk/wp-content/themes/russforster/img/blog-cover.jpg"})))),n.a.createElement("div",{id:"articles-layout",className:"entry-content container-fluid mx-auto"},n.a.createElement("div",{className:"row"},n.a.createElement("aside",{className:"col-lg-3 col-md-4 col-sm-12"}),n.a.createElement("div",{class:"col-lg-6 col-md-8 col-sm-12"},n.a.createElement(v,{spacing:5},a.allWpPost.nodes.map((function(e){return n.a.createElement(f.a,{key:e.link},n.a.createElement("article",{className:"article-list-item"},n.a.createElement("header",{className:"entry-header"},n.a.createElement(b.a,{as:"h3"},e.title),n.a.createElement("span",{className:"post-time"},"(publish date)")),n.a.createElement("div",{className:"entry-content"},e.excerpt,n.a.createElement("a",{href:Object(C.a)(e.uri),className:"wp-block-button__link no-border-radius d-inline"},"Read article",n.a.createElement("svg",{class:"bi bi-arrow-right-short",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{"fill-rule":"evenodd",d:"M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z","clip-rule":"evenodd"}),n.a.createElement("path",{"fill-rule":"evenodd",d:"M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z","clip-rule":"evenodd"}))))))})))))),t&&t.totalPages>1&&n.a.createElement(f.a,{mt:10},n.a.createElement(o.a,{previousLabel:1!==(null==t?void 0:t.page)&&n.a.createElement(h.a,null,"Previous page"),nextLabel:(null==t?void 0:t.totalPages)!==t.page&&n.a.createElement(h.a,null,"Next page"),onPageChange:function(e){var a=e.selected+1,t=1===a?"/blog/":"/blog/"+a+"/";Object(i.navigate)(t)},disableInitialCallback:!0,breakLabel:"...",breakClassName:"break-me",pageCount:t.totalPages,marginPagesDisplayed:2,pageRangeDisplayed:5,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active",initialPage:t.page-1})))},"3499843223")},qWyU:function(e,a,t){"use strict";var r=t("pVnL"),n=t.n(r),i=t("8OQS"),l=t.n(i),o=t("qKvR"),s=t("BMxC"),c=t("q1tI"),u={"2xl":["4xl",null,"5xl"],xl:["3xl",null,"4xl"],lg:["xl",null,"2xl"],md:"xl",sm:"md",xs:"sm"},p=Object(c.forwardRef)((function(e,a){var t=e.size,r=void 0===t?"xl":t,i=l()(e,["size"]);return Object(o.d)(s.a,n()({ref:a,as:"h2",fontSize:u[r],lineHeight:"shorter",fontWeight:"bold",fontFamily:"heading"},i))}));p.displayName="Heading",a.a=p}}]);
//# sourceMappingURL=component---src-templates-index-js-ac08193c3ed7565953eb.js.map