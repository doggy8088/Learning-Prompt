"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[2150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:5},s="PAL Models",i={unversionedId:"chatGPT/tutorial-extras/pal-models",id:"chatGPT/tutorial-extras/pal-models",title:"PAL Models",description:"PAL Models stand for Program-Aided Language Models. Note this is quite advanced, even hacky in my opinion. Through testing, I've found current ChatGPT capabilities may not need this technique anymore.",source:"@site/docs/chatGPT/tutorial-extras/pal-models.md",sourceDirName:"chatGPT/tutorial-extras",slug:"/chatGPT/tutorial-extras/pal-models",permalink:"/docs/chatGPT/tutorial-extras/pal-models",draft:!1,tags:[],version:"current",lastUpdatedAt:1691677943,formattedLastUpdatedAt:"Aug 10, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"chatGPT",previous:{title:"Self-Consistency",permalink:"/docs/chatGPT/tutorial-extras/Self-Consistency"},next:{title:"Using OpenAI Playground",permalink:"/docs/chatGPT/tutorial-extras/openai-playground"}},l={},c=[],d={toc:c},u="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pal-models"},"PAL Models"),(0,a.kt)("head",null,(0,a.kt)("script",{defer:"defer",src:"https://embed.trydyno.com/embedder.js"}),(0,a.kt)("link",{href:"https://embed.trydyno.com/embedder.css",rel:"stylesheet"})),(0,a.kt)("p",null,"PAL Models stand for Program-Aided Language Models. Note this is quite advanced, even hacky in my opinion. Through testing, I've found current ChatGPT capabilities may not need this technique anymore."),(0,a.kt)("p",null,"But I've seen it in many PE tutorials, so will briefly introduce it. The technique is from 2022 research by ",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2211.10435.pdf"},"Luyu Gao et al.")," on augmenting reasoning in LLMs with modular programs. Even with chain of thought, their models still struggled with this prompt:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-other"},"Q: Roger has 5 tennis balls. He buys 2 more cans of\ntennis balls. Each can has 3 tennis balls. How many\ntennis balls does he have now?\nA: Roger started with 5 tennis balls. 2 cans of 3 tennis\nballs each is 6 tennis balls. 5 + 6 = 11. The answer is 11.\n\nQ: The bakers at the Beverly Hills Bakery baked 200\nloaves of bread on Monday morning. They sold 93 loaves\nin the morning and 39 loaves in the afternoon. A grocery\nstore returned 6 unsold loaves. How many loaves of\nbread did they have left?\n")),(0,a.kt)("p",null,"The paper mentions that their model's output, at that time, was as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-other"},"A: The bakers started with 200 loaves. They sold 93 in\nthe morning and 39 in the afternoon. So they sold 93 +\n39 = 132 loaves. The grocery store returned 6 loaves. So\nthey had 200 - 132 - 6 = 62 loaves left.\nThe answer is 62.\n")),(0,a.kt)("p",null,"If you input the same prompt into the latest version of ChatGPT, the answer is already correct:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-other"},"A: The bakers baked 200 loaves of bread. They sold 93 + 39 = 132 loaves. After the grocery store returned 6 unsold loaves, the bakery had 200 - 132 + 6 = 74 loaves of bread left. The answer is 74.\n")),(0,a.kt)("p",null,"Luyu Gao's solution back then was to introduce code in the prompt and guide the model to use the code for computation and reasoning, resulting in the correct answer:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PAL001.png",src:n(3673).Z,width:"1378",height:"978"})))}p.isMDXComponent=!0},3673:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/PAL001-a4da9f4a3d1e1cecc513e61aa23ce8bd.png"}}]);