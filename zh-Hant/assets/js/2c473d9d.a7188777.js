"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[5489],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>y});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},m=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},c="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),c=u(r),d=o,y=c["".concat(p,".").concat(d)]||c[d]||s[d]||i;return r?n.createElement(y,a(a({ref:e},m),{},{components:r})):n.createElement(y,a({ref:e},m))}));function y(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[c]="string"==typeof t?t:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8675:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:1},a="\u64b0\u5beb Text Prompt \u6ce8\u610f\u4e8b\u9805",l={unversionedId:"midjourney/mj-tutorial-text-prompt/text-prompt-cautions",id:"midjourney/mj-tutorial-text-prompt/text-prompt-cautions",title:"\u64b0\u5beb Text Prompt \u6ce8\u610f\u4e8b\u9805",description:"Midjourney \u8ddf ChatGPT \u5728 prompt \u7684\u4f7f\u7528\u4e0a\u6709\u5f88\u591a\u4e0d\u4e00\u6a23\u7684\u5730\u65b9\uff0c\u672c\u7ae0\u6703\u8a73\u7d30\u4ecb\u7d39\u4e0b Midjourney \u7684 text prompt \u5340\u5225\u3002",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/midjourney/mj-tutorial-text-prompt/text-prompt-cautions.md",sourceDirName:"midjourney/mj-tutorial-text-prompt",slug:"/midjourney/mj-tutorial-text-prompt/text-prompt-cautions",permalink:"/zh-Hant/docs/midjourney/mj-tutorial-text-prompt/text-prompt-cautions",draft:!1,tags:[],version:"current",lastUpdatedAt:1721320250,formattedLastUpdatedAt:"2024\u5e747\u670818\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"midjourney",previous:{title:"\ud83d\udd8a\ufe0f Text Prompt",permalink:"/zh-Hant/docs/category/\ufe0f-text-prompt"},next:{title:"\u5834\u666f1\uff1aStock Photo",permalink:"/zh-Hant/docs/midjourney/mj-tutorial-text-prompt/scenario-1-stock-photo"}},p={},u=[{value:"\u8a9e\u6cd5",id:"\u8a9e\u6cd5",level:2},{value:"\u55ae\u8a5e",id:"\u55ae\u8a5e",level:2},{value:"\u8207\u5176\u8aaa\u4e0d\u8981\u4ec0\u9ebc\uff0c\u4e0d\u5982\u8aaa\u8981\u4ec0\u9ebc",id:"\u8207\u5176\u8aaa\u4e0d\u8981\u4ec0\u9ebc\u4e0d\u5982\u8aaa\u8981\u4ec0\u9ebc",level:2},{value:"\u4f60\u4e0d\u8aaa\uff0c\u6a21\u578b\u5c31\u6703\u96a8\u6a5f\u7d66\u4f60",id:"\u4f60\u4e0d\u8aaa\u6a21\u578b\u5c31\u6703\u96a8\u6a5f\u7d66\u4f60",level:2},{value:"\u5f15\u6578",id:"\u5f15\u6578",level:2}],m={toc:u},c="wrapper";function s(t){let{components:e,...r}=t;return(0,o.kt)(c,(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u64b0\u5beb-text-prompt-\u6ce8\u610f\u4e8b\u9805"},"\u64b0\u5beb Text Prompt \u6ce8\u610f\u4e8b\u9805"),(0,o.kt)("p",null,"Midjourney \u8ddf ChatGPT \u5728 prompt \u7684\u4f7f\u7528\u4e0a\u6709\u5f88\u591a\u4e0d\u4e00\u6a23\u7684\u5730\u65b9\uff0c\u672c\u7ae0\u6703\u8a73\u7d30\u4ecb\u7d39\u4e0b Midjourney \u7684 text prompt \u5340\u5225\u3002"),(0,o.kt)("h2",{id:"\u8a9e\u6cd5"},"\u8a9e\u6cd5"),(0,o.kt)("p",null,"\u9996\u5148 Midjourney \u57fa\u672c\u4e0a\u662f\u4e0d\u61c2\u8a9e\u6cd5\u7684\uff0c\u6240\u4ee5\u5373\u4f7f\u4f60\u8a9e\u6cd5\u932f\u4e86\uff0c\u53ea\u8981\u8a5e\u5c0d\u4e86\uff0c\u4e5f\u80fd\u751f\u6210\u5716\u7247\u3002\u3002"),(0,o.kt)("p",null,"\u53e6\u5916\uff0c\u4e0d\u61c2\u8a9e\u6cd5\u4e5f\u5c0e\u81f4\u4e86\u53e6\u4e00\u500b\u554f\u984c\uff1aprompt \u4e0d\u662f\u8d8a\u9577\u8d8a\u597d\u3002\u7279\u5225\u662f\u5404\u7a2e\u5b9a\u8a9e\u5f9e\u53e5\uff0c\u5b83\u6839\u672c\u5c31\u4e0d\u61c2\uff0c\u9084\u4e0d\u5982\u628a\u6307\u4ee4\u7528\u9017\u865f\u9694\u958b\uff0c\u4e00\u500b\u500b\u8f38\u5165\u3002\u4ee5\u4e0b\u662f",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/e/2PACX-1vRHOxyEb-ERGi-BdZM8Z_piEP54m4HwO0z8scjmEurEp2UZVA6rFxvyKd15elYVHUWfP1oSA4CQFwxr/pub?utm_source=docs.google.com&utm_medium=tutorial&utm_campaign=midjourney"},"\u5b98\u65b9\u63a8\u85a6"),"\u7684\u8a9e\u6cd5\u5efa\u8b70\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5f62\u5bb9\u8a5e+\u540d\u8a5e\u7684\u8a5e\u5e8f\u4f86\u66ff\u63db\u4ecb\u8a5e\u77ed\u8a9e\u3002",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"hair flowing in the wind \u61c9\u8a72\u6539\u70ba flowing hair"),(0,o.kt)("li",{parentName:"ul"},"a carrot for a nose \u61c9\u8a72\u6539\u70ba carrot nose"))),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u975e\u5e38\u5177\u9ad4\u7684\u52d5\u8a5e\u4f86\u66ff\u63db\u4ecb\u8a5e\u77ed\u8a9e\u3002",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"a girl with a flashlight \u61c9\u8a72\u6539\u70ba a girl using a flashlight"),(0,o.kt)("li",{parentName:"ul"},"a girl with a big smile on her face \u61c9\u8a72\u6539\u70ba smiling girl")))),(0,o.kt)("p",null,"\u6700\u5f8c\uff0c Midjourney \u662f\u4e0d\u6703\u5340\u5206\u5927\u5c0f\u5beb\u7684\u3002"),(0,o.kt)("h2",{id:"\u55ae\u8a5e"},"\u55ae\u8a5e"),(0,o.kt)("p",null,"\u5728\u55ae\u8a5e\u7684\u90e8\u5206\uff0cMidjourney \u8ddf ChatGPT \u6709\u9ede\u985e\u4f3c\uff0c\u5b83\u5c0d\u540c\u7fa9\u8a5e\u7684\u7406\u89e3\u4e5f\u4e0d\u662f\u5f88\u597d\u3002\u6bd4\u5982\u8209\u5169\u500b\u4f8b\u5b50\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"big \uff08\u5927\uff09\u9019\u500b\u8a5e\uff0c\u5230\u5e95\u6307\u591a\u5927\uff1f\u8d8a\u5177\u8c61\u7684\u5927\uff0c\u5c0d\u65bc Midjourney \u4f86\u8aaa\uff0c\u6548\u679c\u8d8a\u597d\uff0c\u6bd4\u5982\u7528 gigantic \u5c31\u6bd4\u7528\u901a\u7528\u7684 big \u597d\u3002"),(0,o.kt)("li",{parentName:"ol"},"cats\uff08\u8c93\uff09\u9019\u500b\u8a5e\u662f\u500b\u8907\u6578\uff0c\u4f46\u5230\u5e95\u662f\u591a\u5c11\u96bb\uff1f\u5c0d\u65bc Midjourney \u4f86\u8aaa\uff0ctwo cats\uff08\u5169\u96bb\u8c93\uff09\u6bd4 cats \u66f4\u660e\u78ba\u3002")),(0,o.kt)("p",null,"\u53e6\u5916\uff0cMidjourney \u9084\u80fd\u7528 emoji \u4ee3\u66ff\u55ae\u8a5e\uff08\u6211\u89ba\u5f97\u672c\u8cea\u4e0a emoji \u4e5f\u662f\u55ae\u8a5e\uff09\uff0c\u7b97\u662f\u4e00\u500b\u6bd4\u8f03\u6709\u610f\u601d\u7684\u5c6c\u6027\u3002"),(0,o.kt)("h2",{id:"\u8207\u5176\u8aaa\u4e0d\u8981\u4ec0\u9ebc\u4e0d\u5982\u8aaa\u8981\u4ec0\u9ebc"},"\u8207\u5176\u8aaa\u4e0d\u8981\u4ec0\u9ebc\uff0c\u4e0d\u5982\u8aaa\u8981\u4ec0\u9ebc"),(0,o.kt)("p",null,"\u9019\u500b\u8ddf ChatGPT \u985e\u4f3c\uff0c\u4f60\u61c9\u8a72\u5c07\u4f60\u60f3\u8981\u7684\u6771\u897f\u8aaa\u6e05\u695a\uff0c\u800c\u4e0d\u662f\u544a\u8a34 Midjourney \u4e0d\u8981\u4ec0\u9ebc\uff0c\u5982\u679c\u4f60\u60f3\u8b93 Midjourney \u4e0d\u751f\u6210\u67d0\u6a23\u6771\u897f\uff0c\u5c31\u9700\u8981\u7528\u5230 \u5f15\u6578 \u2014 no\u3002"),(0,o.kt)("h2",{id:"\u4f60\u4e0d\u8aaa\u6a21\u578b\u5c31\u6703\u96a8\u6a5f\u7d66\u4f60"},"\u4f60\u4e0d\u8aaa\uff0c\u6a21\u578b\u5c31\u6703\u96a8\u6a5f\u7d66\u4f60"),(0,o.kt)("p",null,"\u56e0\u70ba\u5f71\u8c61\u8a0a\u606f\u7684\u8a0a\u606f\u91cf\u9060\u8d85\u904e\u6587\u5b57\uff0c\u6240\u4ee5\u5f88\u591a\u6642\u5019\uff0cMidjourney \u6703\u96a8\u6a5f\u586b\u5145\u4e00\u4e9b\u5167\u5bb9\u7d66\u4f60\uff0c\u5b83\u65e2\u662f\u7f3a\u9677\uff0c\u4e5f\u662f\u4eae\u9ede\u529f\u80fd\u3002\u56e0\u70ba\u7576\u4f60\u4e0d\u5728 prompt \u88e1\u8aaa\u660e\u9019\u4e9b\u8a5e\u6642\uff0c\u4f60\u5c31\u80fd\u7372\u5f97\u767c\u6563\u7684\u7d50\u679c\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u6e1b\u5c11\u9019\u4e9b\u96a8\u6a5f\u6027\uff0c\u5c31\u9700\u8981\u7528\u5230\u4e00\u4e9b prompt \u6846\u67b6\uff08\u6216\u8005\u6240\u8b02\u7684\u6a23\u677f\uff09\uff0c\u672c\u6559\u7a0b\u6703\u7531\u6dfa\u5165\u6df1\u5730\u5c07\u9019\u500b\u6846\u67b6\u6559\u7d66\u4f60\u3002"),(0,o.kt)("h2",{id:"\u5f15\u6578"},"\u5f15\u6578"),(0,o.kt)("p",null,"Midjourney \u9084\u6709\u4e00\u9ede\u8ddf ChatGPT \u6709\u8f03\u5927\u5dee\u7570\uff0c\u5b83\u5141\u8a31\u4f60\u5728 prompt \u91cc\u52a0\u5165\u5f15\u6578\uff0c\u800c\u4e14\u9019\u4e9b\u5f15\u6578\u76f8\u5c0d\u4f86\u8aaa\u4e00\u81f4\u6027\u90fd\u6bd4\u8f03\u597d\uff0c\u6240\u4ee5\u5982\u679c\u4f60\u60f3\u5be6\u73fe\u7684\u529f\u80fd\uff0c\u5f15\u6578\u88e1\u652f\u63f4\uff0c\u90a3\u512a\u5148\u4f7f\u7528\u5f15\u6578\uff0c\u800c\u4e0d\u662f\u5728\u4e3b\u9ad4\u88e1\u63cf\u8ff0\u3002\u4f60\u6703\u5728\u5f8c\u7e8c\u7684\u6559\u7a0b\u4e2d\u5b78\u5230\u5982\u4f55\u5584\u7528\u5f15\u6578\u3002"),(0,o.kt)("p",null,"\u53e6\u5916\uff0c\u9700\u8981\u6ce8\u610f\uff0c\u672c\u6559\u7a0b\u751f\u6210\u7684\u5716\u7247\u9810\u8a2d\u70ba V5 \u7248\u672c\uff0c\u6240\u4ee5\u6211\u6c92\u6709\u5728 prompt \u88e1\u5c31\u52a0 v5 \u5f15\u6578\u3002"))}s.isMDXComponent=!0}}]);