"use strict";(self.webpackChunkribir_website=self.webpackChunkribir_website||[]).push([[2030],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),h=n,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return a?r.createElement(m,o(o({ref:t},u),{},{components:a})):r.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1909:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:2,title:"Calculate probability"},o="How is probability calculated?",l={unversionedId:"ai-101/LLMs/how-to-calculate-probability",id:"ai-101/LLMs/how-to-calculate-probability",title:"Calculate probability",description:"Since it is a mathematical model, how is probability calculated?",source:"@site/docs/ai-101/LLMs/how-to-calculate-probability.md",sourceDirName:"ai-101/LLMs",slug:"/ai-101/LLMs/how-to-calculate-probability",permalink:"/docs/ai-101/LLMs/how-to-calculate-probability",draft:!1,tags:[],version:"current",lastUpdatedAt:1691677943,formattedLastUpdatedAt:"Aug 10, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Calculate probability"},sidebar:"ai101",previous:{title:"What is a Large Language Model?",permalink:"/docs/ai-101/LLMs/what-is-LLMs"},next:{title:"Develop large language models",permalink:"/docs/ai-101/LLMs/develop-LLMs"}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-is-probability-calculated"},"How is probability calculated?"),(0,n.kt)("p",null,"Since it is a mathematical model, how is probability calculated?"),(0,n.kt)("p",null,'The simplest method is to use statistical approaches. In simple terms, probability is calculated based on the context provided as input. For example, in the sentence "Have you had dinner?", after "Have you had", there is a higher probability of nouns like "dinner" or "supper" rather than verbs like "sleep" or "go to bed".'),(0,n.kt)("p",null,"This is the first stage of a language model, also known as a Statistical Language Model (SLM). Its basic idea is to establish a word prediction model based on the Markov assumption, which predicts the next word based on the recent context."),(0,n.kt)("p",null,"The subsequent development of language models iterated through three stages."),(0,n.kt)("p",null,"The second stage is the Neural Language Model (NLM), which trains a model using neural networks to learn the associations and probability relationships between words. It can utilize large amounts of data for deep learning, capturing more complex relationships between vocabulary. The NLM model adopts a hierarchical structure, transforming the input text data space into a high-dimensional semantic space for learning. By continuously updating the parameters of the neural network model, the NLM gradually acquires the semantic knowledge of the text data and can generate coherent, natural, and semantically accurate text."),(0,n.kt)("p",null,"Compared to the previously mentioned SLM, NLM has stronger learning capabilities due to the power of deep neural networks, possessing better generalization and adaptability when learning the language model. For example, it can generate longer texts. However, NLM relatively depends more on larger datasets and requires considerable human effort in data labeling."),(0,n.kt)("p",null,"The third stage is the Pre-trained Language Model (PLM), which is a natural language processing model trained using a large amount of text data. Relative to NLM, PLM utilizes unsupervised learning methods, eliminating the need for pre-labeling or specifying the text type of the data. The Transformer architecture, which some of you may be familiar with, is an example of a pre-trained language model."),(0,n.kt)("p",null,"The fourth stage is the Large Language Model (LLM). You can understand the current LLM as a PLM trained on an exceptionally large dataset. For example, GPT-2 has only 1.5 billion parameters, while GPT-3 has a staggering 175 billion parameters. Although LLM simply enlarges the model, these large-sized pre-trained language models exhibit different behaviors compared to smaller ones and demonstrate remarkable capabilities in solving complex tasks (commonly known as emergent abilities, noting that this emergent behavior is currently controversial). Therefore, the academic community refers to these large-scale pre-trained language models as Large Language Models (LLMs)."),(0,n.kt)("p",null,"The above four stages may be challenging to comprehend, so you can understand it simply as:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Language models fundamentally calculate the probability of each sentence in natural language using a mathematical model. When you input a question to an AI, the AI calculates its answer based on probabilities."),(0,n.kt)("li",{parentName:"ol"},"Furthermore, modern language models are not limited to providing one answer to a question. In reality, for a given question, there can be multiple potential answers, and they are ranked based on their probabilities. Finally, the model returns the most likely answer.")),(0,n.kt)("p",null,"These two understandings are crucial."))}d.isMDXComponent=!0}}]);