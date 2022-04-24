"use strict";(self.webpackChunkgetcha_frontend=self.webpackChunkgetcha_frontend||[]).push([[1782],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=s(a),d=l,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,o=new Array(i);o[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1768:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return m}});var n=a(7462),l=a(3366),i=(a(7294),a(3905)),o=["components"],r={slug:"event-loop",title:"javaScript Event Loop\uc758 \uc6d0\ub9ac",authors:["nick"],tags:["javaScript","typeScript"]},c=void 0,s={permalink:"/getcha_frontend_docs/en/blog/event-loop",editUrl:"https://github.com/hojunin/getcha_frontend_docs/blog/2022-04-23-event-loop/index.md",source:"@site/blog/2022-04-23-event-loop/index.md",title:"javaScript Event Loop\uc758 \uc6d0\ub9ac",description:"\ud83d\udc49 \uc774 \ub9c1\ud06c\ub97c \ubc88\uc5ed\ud588\uc2b5\ub2c8\ub2e4.",date:"2022-04-23T00:00:00.000Z",formattedDate:"April 23, 2022",tags:[{label:"javaScript",permalink:"/getcha_frontend_docs/en/blog/tags/java-script"},{label:"typeScript",permalink:"/getcha_frontend_docs/en/blog/tags/type-script"}],readingTime:7.45,truncated:!1,authors:[{name:"Nick",title:"FrontEnd Developer",url:"https://github.com/hojunin",imageURL:"https://avatars.githubusercontent.com/u/18079523?v=4",key:"nick"}],frontMatter:{slug:"event-loop",title:"javaScript Event Loop\uc758 \uc6d0\ub9ac",authors:["nick"],tags:["javaScript","typeScript"]},prevItem:{title:"React Native Draggable Picker \ub9cc\ub4e4\uae30",permalink:"/getcha_frontend_docs/en/blog/Draggable Picker \ub9cc\ub4e4\uae30"},nextItem:{title:"\ud300\uc6d0 \uc678\uc758 \uc0ac\ub78c\uc774 \uc4f4 \uae00",permalink:"/getcha_frontend_docs/en/blog/slug"}},p={authorsImageUrls:[void 0]},m=[{value:"\u2728\u267b\ufe0f JavaScript \uc5d4\uc9c4 \uc6d0\ub9ac \uc2dc\uac01\ud654 1. Event Loop",id:"\ufe0f-javascript-\uc5d4\uc9c4-\uc6d0\ub9ac-\uc2dc\uac01\ud654-1-event-loop",level:2}],u={toc:m};function d(e){var t=e.components,a=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\ud83d\udc49 ",(0,i.kt)("a",{parentName:"p",href:"https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif"},"\uc774 \ub9c1\ud06c"),"\ub97c \ubc88\uc5ed\ud588\uc2b5\ub2c8\ub2e4."))),(0,i.kt)("h2",{id:"\ufe0f-javascript-\uc5d4\uc9c4-\uc6d0\ub9ac-\uc2dc\uac01\ud654-1-event-loop"},"\u2728\u267b\ufe0f JavaScript \uc5d4\uc9c4 \uc6d0\ub9ac \uc2dc\uac01\ud654 1. Event Loop"),(0,i.kt)("p",null,"Event Loop\ub294 \ubaa8\ub4e0 JavaScript \uac1c\ubc1c\uc790\ub4e4\uc774 \ud55c\ubc88\ucbe4\uc740 \uc54c\uace0 \ub118\uc5b4\uac00\uc57c \ud558\ub294\uac1c\ub150\uc785\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ub9c9\uc0c1 \ucc98\uc74c \ubcf4\uba74 \uc774\ud574\ud558\uae30 \ub108\ubb34 \uc5b4\ub824\uc6cc\uc694. \uadf8\ub798\uc11c gif\ub85c \uac04\ub2e8\ud788 \uc124\uba85\ud574\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("aside",null,"\ud83d\udc49 \uc6b0\uc120 \uac00\uc7a5 \uba3c\uc800, Event Loop\ub780 \ubb34\uc5c7\uc774\uace0, \uc6b0\ub9ac\uac00 \uc65c \uc54c\uc544\uc57c \ud558\ub294\uac74\uac00\uc694?"),(0,i.kt)("p",null,"JavaScript\ub294 single-threaded\uc785\ub2c8\ub2e4. \uc5b4\ub5a4 \uc2dc\uc810\uc5d0 \ub2e8 \ud558\ub098\uc758 task\ub9cc \ucc98\ub9ac \uac00\ub2a5\ud558\uc8e0. \ud558\uc9c0\ub9cc \ucef4\ud4e8\ud130\ub294 \ub9e4\uc6b0 \ube68\ub77c\uc11c task \ud558\ub098 \ucc98\ub9ac\ud558\ub294\ub370 \ucc30\ub098\uc758 \uc21c\uac04\ubc16\uc5d0 \uac78\ub9ac\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c \uc774\uac74 \ub300\ubd80\ubd84\uc758 \uacbd\uc6b0 \ubcc4\ub85c \uc911\uc694\ud55c \uac1c\ub150\uc774 \uc544\ub2c8\ub77c\uace0 \uc0dd\uac01\ud558\ub294 \uc0ac\ub78c\uc774 \ub9ce\uc544\uc694."),(0,i.kt)("p",null,"\ud558\uc9c0\ub9cc \ud558\ub098\uc758 task\uac00 30\ucd08\uc529 \uac78\ub9b0\ub2e4\uba74 \uc5b4\ub5a8\uae4c\uc694? \uc0ac\uc6a9\uc790\ub294 \uadf8 30\ucd08\ub97c \uc190\ub193\uace0 \uae30\ub2e4\ub824\uc57c \ud569\ub2c8\ub2e4. \uc6f9\ud398\uc774\uc9c0\uc5d0\uc11c JavaScript Engine\uc740 \ube0c\ub77c\uc6b0\uc800\uac00 \ub3cc\ub9ac\uae30 \ub54c\ubb38\uc5d0 \uadf8 30\ucd08\uac00 \uc9c0\ub098\uae30 \uc804\uc5d0 \uc6b0\ub9ac\ub294 \uc544\ubb34\uac83\ub3c4 \ubcfc \uc218 \uc5c6\ub294 \uc0c1\ud0dc\uac00 \ub418\uc8e0. \uc544\ubb34\ub3c4 \uc774\ub7f0 \uc6f9\uc0ac\uc774\ud2b8\ub294 \uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4\ud83d\ude07"),(0,i.kt)("p",null,"\ub2e4\ud589\ud788\ub3c4 \ube0c\ub77c\uc6b0\uc800\uac00 \uc81c\uacf5\ud558\ub294 \uba87\uba87 \uae30\ub2a5\ub4e4\ub85c \uc774\ub7f0 \ubb38\uc81c\ub97c \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8 \uc911 \ud558\ub098\uac00 \ubc14\ub85c Web API\uc785\ub2c8\ub2e4. Web API\ub294 setTimeout, HTTP request\uc640 \uac19\uc740 DOM API\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4. \uc774\uac83\uc774 async\ud558\uace0 non-blocking\ud55c \ub3d9\uc791\uc744 \uac00\ub2a5\ud558\uac8c \ud574\uc90d\ub2c8\ub2e4"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\uc6b0\ub9ac\uac00 \ud568\uc218\ub97c \ud558\ub098 \uc2e4\ud589\ud55c\ub2e4\uace0 \uac00\uc815\ud574\ubd05\uc2dc\ub2e4. \uadf8 \ud568\uc218\ub294 call stack\uc774\ub77c\ub294 \uacf3\uc5d0 \uc313\uc785\ub2c8\ub2e4. call stack\uc740 browser \uac00 \uc544\ub2c8\ub77c JavaScript Engine\uc758 \uc77c\ubd80\ubd84\uc774\uc5d0\uc694. stack\uc740 \ub2e4\ub4e4 \uc54c\ub2e4\uc2dc\ud53c FILO \uad6c\uc870\uc785\ub2c8\ub2e4(\uba3c\uc800 \ub4e4\uc5b4\uc628 \ub370\uc774\ud130\uac00 \ub098\uc911\uc5d0 \ub098\uac04\ub2e4) \ud568\uc218\uac00 \uac12\uc744 \ub9ac\ud134\ud558\uace0 \ub098\uba74, \uadf8 \ud568\uc218\ub294 call stack\uc5d0\uc11c \uc0ac\ub77c\uc9d1\ub2c8\ub2e4 \ud83d\udc4b (",(0,i.kt)("inlineCode",{parentName:"p"},"pop"),"\ub429\ub2c8\ub2e4)"),(0,i.kt)("p",null,"\uc544\ub798 \uc608\uc2dc\ub97c \ud568\uaed8 \ubcfc\uac8c\uc694."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\uba3c\uc800 greet\ud568\uc218\uac00 call stack\uc5d0 \ub4e4\uc5b4\uc654\ub2e4\uac00 undefined\ub97c \ub9ac\ud134\ud558\uace0 pop\ub429\ub2c8\ub2e4. \ub2e4\uc74c\uc73c\ub85c respond\uac00 call stack\uc5d0 \uc313\uc785\ub2c8\ub2e4. \uadf8\ub9bc\uc758 \uc624\ub978\ucabd\uc744 \ubcf4\uba74, ",(0,i.kt)("inlineCode",{parentName:"li"},"respond"),"\ub77c\ub294 \ud568\uc218\ub294 ",(0,i.kt)("inlineCode",{parentName:"li"},"setTimeouts"),"\uc744 \ub9ac\ud134\ud569\ub2c8\ub2e4. \uadf8\ub7f0\ub370 \uac19\uc740 \ud568\uc218\uc778 \uc774 setTimeout\uc740 call stack\uc774 \uc544\ub2c8\ub77c Web API\uc5d0 \uc758\ud574 \ub2e4\ub904\uc9d1\ub2c8\ub2e4. \uadf8 \uc774\uc720\ub294 Web API\uc758 \uc5ed\ud560\uc774 setTimeout\uac19\uc774 \uc2dc\uac04\uc774 \uc624\ub798\uac78\ub9ac\ub294 \ud568\uc218\ub97c main thread\uac00 \ub9c9\ud788\uc9c0 \uc54a\ub3c4\ub85d \ub530\ub85c \ucc98\ub9ac\ud558\ub294 \uac83\uc774\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/practicaldev/image/fetch/s--44yasyNX--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gid1.6.gif",alt:"https://res.cloudinary.com/practicaldev/image/fetch/s--44yasyNX--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gid1.6.gif"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\uadf8\ub798\uc11c \uc544\ub798 \uadf8\ub9bc\ucc98\ub7fc, ",(0,i.kt)("inlineCode",{parentName:"li"},"setTimeout"),"\uc758 callback\uc778 ",(0,i.kt)("inlineCode",{parentName:"li"},"()\u21d2{return 'Hey'}"),"\uc774 Web API\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4. \uc774\uc640 \ub3d9\uc2dc\uc5d0 call Stack\uc5d0\uc11c\ub294 ",(0,i.kt)("inlineCode",{parentName:"li"},"response()")," \ud568\uc218\uac00 pop\ub418\uc5b4 \uc0ac\ub77c\uc9d1\ub2c8\ub2e4. \ub450 \ud568\uc218(",(0,i.kt)("inlineCode",{parentName:"li"},"response()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"setTimeout"),")\ubaa8\ub450 \uc5b4\ub5a4\uac78 \ub9ac\ud134\ud588\uc73c\ub2c8 \uc0ac\ub77c\uc9c0\ub294 \uac83\uc774\uc9c0\uc694.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/practicaldev/image/fetch/s--d_n4m4HH--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif2.1.gif",alt:"https://res.cloudinary.com/practicaldev/image/fetch/s--d_n4m4HH--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif2.1.gif"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\ud55c\ud3b8, setTimeout \ud568\uc218\uc758 \ucf5c\ubc31\uc774 \ub118\uc5b4\uac04 Web API\uc5d0\uc11c\ub294 \ucf5c\ubc31\uacfc \ud568\uaed8 \ub118\uae34 \uc2dc\uac04\uac12\ub9cc\ud07c \ud0c0\uc774\uba38\uac00 \ub3d9\uc791\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc120 1s(1000ms) \uaca0\ub124\uc694? 1\ucd08\uc758 \uc2dc\uac04\uc774 \ud750\ub974\uba74 \ub2f9\uc5f0\ud788 call stack\uc73c\ub85c \ub118\uc5b4\uac00\uc11c \uc2e4\ud589\uc774 \ub420 \uac83\uc73c\ub85c \ucd94\uce21\ud560 \uc218 \uc788\uc9c0\ub9cc \ud604\uc2e4\uc740 \uadf8\ub807\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc544\ub798 \uadf8\ub9bc\uacfc \uac19\uc774, call stack \ub300\uc2e0\uc5d0 queue\ub77c\ub294 \uacf5\uac04\uc73c\ub85c \ub118\uc5b4\uac11\ub2c8\ub2e4.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/practicaldev/image/fetch/s--MewGMdte--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif3.1.gif",alt:"https://res.cloudinary.com/practicaldev/image/fetch/s--MewGMdte--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif3.1.gif"})),(0,i.kt)("p",null,"\uc774 \ubd80\ubd84\uc5d0\uc11c \ud587\uac08\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucf5c\ubc31\ud568\uc218\ub294 \uace7\ubc14\ub85c callStack\uc73c\ub85c \uc774\ub3d9\ud558\ub294\uac8c \uc544\ub2d9\ub2c8\ub2e4. queue\ub294 FIFO\uc778 \uc790\ub8cc\uad6c\uc870\ub85c\uc11c queue\uc5d0 \uc313\uc778 \uc21c\uc11c\ub300\ub85c \uac12\uc744 \ub9ac\ud134\ud560 \uc900\ube44\ub97c \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\uc774 \ubd80\ubd84\uc774 \uc774\ubc88 Event Loop \ud30c\ud2b8\uc758 \ud575\uc2ec\uc785\ub2c8\ub2e4. Event Loop\ub294 Queue\uc640 Call Stack\uc744 \uc5f0\uacb0\ud574\uc8fc\ub294 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4. call stack\uc774 \ube44\uc5b4\uc788\ub2e4\uba74, \uc989 \ubaa8\ub4e0 call stack\uc774pop\ub41c \uc0c1\ud0dc\uac00 \ub418\uba74 queue\uc758 \uccab\ubc88\uc9f8 \uc544\uc774\ud15c\uc774 call stack\uc5d0 \uc313\uc785\ub2c8\ub2e4. \uc774 \uacbd\uc6b0\ub294 \ub2e4\ub978 \ud568\uc218\ub294 \ud638\ucd9c\ub418\uc9c0 \uc54a\uace0, \ucf5c\ubc31 \ud568\uc218\uac00 queue\uc758 \uccab\ubc88\uc9f8 \uc544\uc774\ud15c\uc778 \uc2dc\uc810\uc5d0 call stack\uc774 empty\ub77c\ub294 \ub73b\uc785\ub2c8\ub2e4.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/practicaldev/image/fetch/s--b2BtLfdz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif4.gif",alt:"https://res.cloudinary.com/practicaldev/image/fetch/s--b2BtLfdz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif4.gif"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'\ub9c8\uc9c0\ub9c9 \ub2e8\uacc4\uc785\ub2c8\ub2e4. \ucf5c\ubc31 \ud568\uc218\ub294 call stack\uc5d0 \uc313\uc785\ub2c8\ub2e4. \uadf8\ub9ac\uace0 "Hey"\ub77c\ub294 \uac12\uc744 \ub9ac\ud134\ud55c \ud6c4 call stack\uc5d0\uc11c pop\ub418\uc8e0.')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/practicaldev/image/fetch/s--NYOknEYi--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif5.gif",alt:"https://res.cloudinary.com/practicaldev/image/fetch/s--NYOknEYi--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif5.gif"})),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\uc704\uc758 \uc124\uba85\uc740 \uc7ac\ubbf8\uc788\uac8c \uc77d\uc5c8\uc744\uc9c0\ub77c\ub3c4 \uc2e4\uc81c \ucf54\ub4dc\uc5d0\uc11c \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294\uc9c0 \uba85\ud655\ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\uc5b4 \uc544\ub798 \uc608\uc2dc\ub97c \uc900\ube44\ud588\uc2b5\ub2c8\ub2e4. \ucf58\uc194\uc5d0 \uc5b4\ub5a4 \ub85c\uadf8\uac00 \ucc0d\ud788\ub294\uc9c0 \ub9de\ucdb0\ubcf4\uc138\uc694."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'// \uc120\uc5b8\ubd80\nconst foo = () => console.log("First");\nconst bar = () => setTimeout(() => console.log("Second"), 500);\nconst baz = () => console.log("Third");\n\n// \uc2e4\ud589\ubd80\nbar();\nfoo();\nbaz();\n')),(0,i.kt)("p",null,"\uc774\ud574 \ub418\uc168\ub098\uc694? \uc774 \ucf54\ub4dc\ub97c \ube0c\ub77c\uc6b0\uc838 \uc0c1\uc5d0\uc11c \ub3cc\ub838\uc744 \ub54c \uc5b4\ub5a4 \uc77c\uc774 \uc77c\uc5b4\ub098\ub294\uc9c0 \ud655\uc778\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/practicaldev/image/fetch/s--BLtCLQcd--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif14.1.gif",alt:"https://res.cloudinary.com/practicaldev/image/fetch/s--BLtCLQcd--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif14.1.gif"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\uba3c\uc800, bar\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4.\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"bar"),"\xa0\ub294\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"setTimeout"),"\ud568\uc218\ub97c \ub9ac\ud134\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"setTimeout"),"\xa0\uc5d0 \ub118\uae34 \ucf5c\ubc31\uc774 Web API\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4,\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"setTimeout"),"\xa0\ud568\uc218\uc640\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"bar"),"\xa0\ub294 call stack\uc5d0\uc11c pop\ub429\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"0.5\ucd08\uc758 \ud0c0\uc774\uba38\uac00 \ub3cc\uace0, \ub3d9\uc2dc\uc5d0 ",(0,i.kt)("inlineCode",{parentName:"li"},"foo"),"\xa0\uac00 \ud638\ucd9c\ub418\uace0\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"First"),"\ub97c \ucf58\uc194\uc5d0 \ucd9c\ub825\ud558\uace0 pop\ub429\ub2c8\ub2e4. \uc774 \ub54c, \xa0",(0,i.kt)("inlineCode",{parentName:"li"},"foo"),"\xa0\ub294 \ub9ac\ud134\uac12\uc774 \uc5c6\uc73c\ubbc0\ub85c undefined\ub97c \ub9ac\ud134\ud558\uace0 pop\ub429\ub2c8\ub2e4. \ub4a4\uc774\uc5b4 ",(0,i.kt)("inlineCode",{parentName:"li"},"baz"),"\xa0\uac00 \ud638\ucd9c\ub418\uba70 \ub611\uac19\uc774 pop\ub429\ub2c8\ub2e4. \uc774 \uc988\uc74c\uc5d0 Web API\uc5d0 \uc788\ub358 timeout callback\uc740 queue\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"baz"),"\xa0\uac00\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"Third")," \ub97c \ucf58\uc194\uc5d0 \ucc0d\uace0 pop\ub429\ub2c8\ub2e4. \ub9c8\uce68\ub0b4 call stack\uc774 \ube44\uc5c8\uc2b5\ub2c8\ub2e4. Event Loop\ub294 call stack\uc774 \ube44\uc5b4\uc788\ub294\uac83\uc744 \ud655\uc778\ud558\uace0 queue\uc5d0 \uc788\ub358 \ucf5c\ubc31\uc744 call stack\uc73c\ub85c \uc774\ub3d9\uc2dc\ud0b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\ub9c8\uce68\ub0b4 \ucf5c\ubc31\ud568\uc218\ub294\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"Second")," \ub97c \ub85c\uadf8\uc5d0 \ucc0d\uace0 pop\ub429\ub2c8\ub2e4.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\uc704\uc758 \ub0b4\uc6a9\uc744 \ubab0\ub77c\ub3c4 \uc5d0\ub7ec \uc798 \ucc3e\uace0, \ud6a8\uc728\uc801\uc73c\ub85c \ucf54\ub4dc \uc791\uc131\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uba74 \ud06c\uac8c \uc0c1\uad00 \uc5c6\uc2b5\ub2c8\ub2e4\ub9cc \uc5d4\uc9c4\uc758 \ub3d9\uc791 \uc6d0\ub9ac\ub97c \uc54c\uace0 \uc811\uadfc\ud558\uba74 \ub354 \ub9ce\uc740 \ubd80\ubd84\uc744 \uc0dd\uac01\ud560 \uc218 \uc788\uc73c\ub2c8 \uaf2d \uc774\ud574\ud558\uace0 \ub118\uc5b4\uac00\uc168\uc73c\uba74 \uc88b\uaca0\uc2b5\ub2c8\ub2e4 \ud83e\udd16"))}d.isMDXComponent=!0}}]);