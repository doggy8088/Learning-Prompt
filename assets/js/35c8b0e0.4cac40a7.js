"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[3840],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=h(n),d=r,m=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var h=2;h<o;h++)i[h]=n[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7096:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:8},i="Tip 8: Few-Shot Chain of Thought",s={unversionedId:"chatGPT/tutorial-tips/tip-8-few-shot-chain-of-thought",id:"chatGPT/tutorial-tips/tip-8-few-shot-chain-of-thought",title:"Tip 8: Few-Shot Chain of Thought",description:"To address this, we can use few-shot chain of thought.",source:"@site/docs/chatGPT/tutorial-tips/tip-8-few-shot-chain-of-thought.md",sourceDirName:"chatGPT/tutorial-tips",slug:"/chatGPT/tutorial-tips/tip-8-few-shot-chain-of-thought",permalink:"/docs/chatGPT/tutorial-tips/tip-8-few-shot-chain-of-thought",draft:!1,tags:[],version:"current",lastUpdatedAt:1691677943,formattedLastUpdatedAt:"Aug 10, 2023",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"chatGPT",previous:{title:"Tip 7: Zero-Shot Chain of Thought",permalink:"/docs/chatGPT/tutorial-tips/tip-7-zero-shot-chain-of-thought"},next:{title:"Tip 9: Miscellaneous",permalink:"/docs/chatGPT/tutorial-tips/tip-9-miscellaneous"}},l={},h=[],p={toc:h},c="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tip-8-few-shot-chain-of-thought"},"Tip 8: Few-Shot Chain of Thought"),(0,r.kt)("p",null,"To address this, we can use few-shot chain of thought."),(0,r.kt)("p",null,"According to Wei et al.'s 2022 ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2201.11903.pdf"},"research"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"By showing large language models a small number of examples and explaining the reasoning process in the examples, the models will also show reasoning when answering prompts. These reasoning explanations often lead to more accurate results.")),(0,r.kt)("p",null,"Here is an example from their paper, and the usage is simple. Based on Tip 2, we provide the model with both examples and the logical reasoning process. From the example below, you can see that including the explanation yields the correct output."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"FewShotChainOfThought001.png",src:n(3932).Z,width:"1592",height:"772"})),(0,r.kt)("p",null,"The example from this chapter's opening would be (also from Wei et al.)::"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-other"},"The odd numbers in this group add up to an even number: 4, 8, 9, 15, 12, 2, 1.\nA: Adding all the odd numbers (9, 15, 1) gives 25. The answer is False.\n\nThe odd numbers in this group add up to an even number: 17,  10, 19, 4, 8, 12, 24.\nA: Adding all the odd numbers (17, 19) gives 36. The answer is True.\n\nThe odd numbers in this group add up to an even number: 16,  11, 14, 4, 8, 13, 24.\nA: Adding all the odd numbers (11, 13) gives 24. The answer is True.\n\nThe odd numbers in this group add up to an even number: 17,  9, 10, 12, 13, 4, 2.\nA: Adding all the odd numbers (17, 9, 13) gives 39. The answer is False.\n\nThe odd numbers in this group add up to an even number: 15, 32, 5, 13, 82, 7, 1.\nA:\n")),(0,r.kt)("p",null,"After covering the technique, let's relate this back to zero-shot chain of thought with some key learnings on chaining. According to research by ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/search/cs?searchtype=author&query=Min%2C+S"},"Sewon Min")," et al. in ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2202.12837"},"2022"),", Chain of Thought exhibits the following characteristics:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'"the label space and the distribution of the input text specified by the demonstrations are both key (regardless of whether the labels are correct for individual inputs)"'),(0,r.kt)("li",{parentName:"ol"},"the format you use also plays a key role in performance, even if you just use random labels, this is much better than no labels at all.")),(0,r.kt)("p",null,"Understanding these characteristics might be a bit challenging, so let me provide an example prompt (\ud83c\udd98 if you have a better explanation, please feel free to share it with me). I will provide ChatGPT with some potentially inaccurate examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-other"},"I loved the new Batman movie!  // Negative\nThis is bad // Positive\nThis is good // Negative\nWhat a good show! //\n")),(0,r.kt)("p",null,"Output\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-other"},"Positive\n")),(0,r.kt)("p",null,'In the example above, each line contains a sentence and an emotional word, separated by "//". However, I have labeled these sentences with incorrect emotions. For example, the first sentence should actually be "Positive". However:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Even with incorrect labels, the model still learns what to output - that is, an emotion word assessing each sentence after the // divider. So precise factuality of labels and examples doesn't matter. The labels, text, and format are key, as point #1 notes."),(0,r.kt)("li",{parentName:"ol"},"The formatting alone helps generate better results even with random labels, as point #2 states.")),(0,r.kt)("p",null,"Lastly, remember chaining only works on models with 100B+ parameters."),(0,r.kt)("p",null,"For more, see Stanford's lecture notes on:",(0,r.kt)("a",{parentName:"p",href:"http://web.stanford.edu/class/cs224n/slides/cs224n-2023-lecture11-prompting-rlhf.pdf"},"Natural Language Processing with Deep Learning")))}u.isMDXComponent=!0},3932:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/FewShotChainOfThought001-cb0c8729dadd349fa916ca44c1c18404.png"}}]);