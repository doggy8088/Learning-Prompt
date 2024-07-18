"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[3408],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,m=u["".concat(l,".").concat(c)]||u[c]||d[c]||o;return n?a.createElement(m,s(s({ref:t},h),{},{components:n})):a.createElement(m,s({ref:t},h))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},s="Few-Shot Prompting",i={unversionedId:"chatGPT/tutorial-extras/few-shot-prompting",id:"chatGPT/tutorial-extras/few-shot-prompting",title:"Few-Shot Prompting",description:"I mentioned few-shot prompting for inference scenarios in the basics - this chapter covers its pros/cons and techniques.",source:"@site/docs/chatGPT/tutorial-extras/few-shot-prompting.md",sourceDirName:"chatGPT/tutorial-extras",slug:"/chatGPT/tutorial-extras/few-shot-prompting",permalink:"/docs/chatGPT/tutorial-extras/few-shot-prompting",draft:!1,tags:[],version:"current",lastUpdatedAt:1691677943,formattedLastUpdatedAt:"Aug 10, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"chatGPT",previous:{title:"Zero-Shot Prompts",permalink:"/docs/chatGPT/tutorial-extras/zero-shot-prompts"},next:{title:"Self-Consistency",permalink:"/docs/chatGPT/tutorial-extras/Self-Consistency"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Tip 8: Few-Shot Chain of Thought",id:"tip-8-few-shot-chain-of-thought",level:2}],h={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"few-shot-prompting"},"Few-Shot Prompting"),(0,r.kt)("head",null,(0,r.kt)("script",{defer:"defer",src:"https://embed.trydyno.com/embedder.js"}),(0,r.kt)("link",{href:"https://embed.trydyno.com/embedder.css",rel:"stylesheet"})),(0,r.kt)("p",null,"I mentioned few-shot prompting for inference scenarios in the basics - this chapter covers its pros/cons and techniques."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Tip 2 showed providing examples helps models generate outputs better matching your needs. This uses a method called few-shot learning, first discovered by Brown et al. in their 2020 ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2005.14165.pdf"},"paper"),". Their interesting example illustrates how statistical language models like ChatGPT don't truly understand meaning, just probability:"),(0,r.kt)("p",null,"Brown's input:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-other"},'A "whatpu" is a small, furry animal native to Tanzania. An example of a sentence that uses\nthe word whatpu is:\nWe were traveling in Africa and we saw these very cute whatpus.\nTo do a "farduddle" means to jump up and down really fast. An example of a sentence that uses\nthe word farduddle is:\n')),(0,r.kt)("p",null,"Output\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-other"},"When we won the game, we all started to farduddle in celebration.\n")),(0,r.kt)("p",null,"However, this doesn't mean that Few-Shot doesn't have its flaws. Let's try another example:"),(0,r.kt)("p",null,"Prompt\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-other"},"The odd numbers in this group add up to an even number: 4, 8, 9, 15, 12, 2, 1.\nA: The answer is False.\n\nThe odd numbers in this group add up to an even number: 17,  10, 19, 4, 8, 12, 24.\nA: The answer is True.\n\nThe odd numbers in this group add up to an even number: 16,  11, 14, 4, 8, 13, 24.\nA: The answer is True.\n\nThe odd numbers in this group add up to an even number: 17,  9, 10, 12, 13, 4, 2.\nA: The answer is False.\n\nThe odd numbers in this group add up to an even number: 15, 32, 5, 13, 82, 7, 1.\nA:\n")),(0,r.kt)("p",null,"Output\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-other"},"The answer is True.\n")),(0,r.kt)("p",null,"The answer is actually wrong - it should be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-other"},"Adding all the odd numbers (15, 5, 13, 7, 1) gives 41. The answer is False.\n")),(0,r.kt)("p",null,"So, how can we address this?"),(0,r.kt)("h2",{id:"tip-8-few-shot-chain-of-thought"},"Tip 8: Few-Shot Chain of Thought"),(0,r.kt)("p",null,"To address this, we can use few-shot chain of thought."),(0,r.kt)("p",null,"According to Wei et al.'s 2022 ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2201.11903.pdf"},"research"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"By showing large language models a small number of examples and explaining the reasoning process in the examples, the models will also show reasoning when answering prompts. These reasoning explanations often lead to more accurate results.")),(0,r.kt)("p",null,"Here is an example from their paper, and the usage is simple. Based on Tip 2, we provide the model with both examples and the logical reasoning process. From the example below, you can see that including the explanation yields the correct output."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"FewShotChainOfThought001.png",src:n(4279).Z,width:"1592",height:"772"})),(0,r.kt)("p",null,"The example from this chapter's opening would be (also from Wei et al.)::"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-other"},"The odd numbers in this group add up to an even number: 4, 8, 9, 15, 12, 2, 1.\nA: Adding all the odd numbers (9, 15, 1) gives 25. The answer is False.\n\nThe odd numbers in this group add up to an even number: 17,  10, 19, 4, 8, 12, 24.\nA: Adding all the odd numbers (17, 19) gives 36. The answer is True.\n\nThe odd numbers in this group add up to an even number: 16,  11, 14, 4, 8, 13, 24.\nA: Adding all the odd numbers (11, 13) gives 24. The answer is True.\n\nThe odd numbers in this group add up to an even number: 17,  9, 10, 12, 13, 4, 2.\nA: Adding all the odd numbers (17, 9, 13) gives 39. The answer is False.\n\nThe odd numbers in this group add up to an even number: 15, 32, 5, 13, 82, 7, 1.\nA:\n")),(0,r.kt)("p",null,"After covering the technique, let's relate this back to zero-shot chain of thought with some key learnings on chaining. According to research by ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/search/cs?searchtype=author&query=Min%2C+S"},"Sewon Min")," et al. in ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2202.12837"},"2022"),", Chain of Thought exhibits the following characteristics:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'"the label space and the distribution of the input text specified by the demonstrations are both key (regardless of whether the labels are correct for individual inputs)"'),(0,r.kt)("li",{parentName:"ol"},"the format you use also plays a key role in performance, even if you just use random labels, this is much better than no labels at all.")),(0,r.kt)("p",null,"Understanding these characteristics might be a bit challenging, so let me provide an example prompt (\ud83c\udd98 if you have a better explanation, please feel free to share it with me). I will provide ChatGPT with some potentially inaccurate examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-other"},"I loved the new Batman movie!  // Negative\nThis is bad // Positive\nThis is good // Negative\nWhat a good show! //\n")),(0,r.kt)("p",null,"Output\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-other"},"Positive\n")),(0,r.kt)("p",null,'In the example above, each line contains a sentence and an emotional word, separated by "//". However, I have labeled these sentences with incorrect emotions. For example, the first sentence should actually be "Positive". However:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Even with incorrect labels, the model still learns what to output - that is, an emotion word assessing each sentence after the // divider. So precise factuality of labels and examples doesn't matter. The labels, text, and format are key, as point #1 notes."),(0,r.kt)("li",{parentName:"ol"},"The formatting alone helps generate better results even with random labels, as point #2 states.")),(0,r.kt)("p",null,"Lastly, remember chaining only works on models with 100B+ parameters."),(0,r.kt)("p",null,"For more, see Stanford's lecture notes on:",(0,r.kt)("a",{parentName:"p",href:"http://web.stanford.edu/class/cs224n/slides/cs224n-2023-lecture11-prompting-rlhf.pdf"},"Natural Language Processing with Deep Learning")))}d.isMDXComponent=!0},4279:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/FewShotChainOfThought001-cb0c8729dadd349fa916ca44c1c18404.png"}}]);