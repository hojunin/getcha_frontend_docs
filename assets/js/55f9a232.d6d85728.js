"use strict";(self.webpackChunkgetcha_frontend=self.webpackChunkgetcha_frontend||[]).push([[5745],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,u=c["".concat(o,".").concat(d)]||c[d]||k[d]||l;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3144:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],p={slug:"git",title:"\uac9f\ucc28\uc758 \uae43 \uc804\ub7b5\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4!",authors:["nick"],tags:["git"]},o=void 0,m={permalink:"/getcha_frontend_docs/blog/git",editUrl:"https://github.com/hojunin/getcha_frontend_docs/blog/2022-07-19-git/index.md",source:"@site/blog/2022-07-19-git/index.md",title:"\uac9f\ucc28\uc758 \uae43 \uc804\ub7b5\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4!",description:"\uc548\ub155\ud558\uc138\uc694. Getcha \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 Nick\uc785\ub2c8\ub2e4 \ud83d\ude4b\ud83c\udffc",date:"2022-07-19T00:00:00.000Z",formattedDate:"July 19, 2022",tags:[{label:"git",permalink:"/getcha_frontend_docs/blog/tags/git"}],readingTime:17.425,truncated:!1,authors:[{name:"Nick",title:"FrontEnd Developer",url:"https://github.com/hojunin",imageURL:"https://avatars.githubusercontent.com/u/18079523?v=4",key:"nick"}],frontMatter:{slug:"git",title:"\uac9f\ucc28\uc758 \uae43 \uc804\ub7b5\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4!",authors:["nick"],tags:["git"]},nextItem:{title:"\ub9ac\uc561\ud2b8 \ucffc\ub9ac, \ud6a8\uacfc\uc801\uc73c\ub85c \ud65c\uc6a9\ud574\ubcf4\uc790.",permalink:"/getcha_frontend_docs/blog/react"}},s={authorsImageUrls:[void 0]},k=[{value:"Repository \ubd84\ub9ac",id:"repository-\ubd84\ub9ac",level:2},{value:"\uae43 \ud50c\ub85c\uc6b0 \ub3c4\uc785",id:"\uae43-\ud50c\ub85c\uc6b0-\ub3c4\uc785",level:2},{value:"\uae43 \uaddc\uce59 \uc815\ud558\uae30",id:"\uae43-\uaddc\uce59-\uc815\ud558\uae30",level:2},{value:"branch",id:"branch",level:3},{value:"Commit",id:"commit",level:3},{value:"rebase",id:"rebase",level:3},{value:"Pull Request",id:"pull-request",level:3},{value:"Release",id:"release",level:3},{value:"\uc0dd\uac01\ud574\ubcfc \uc0ac\ud56d\uacfc \ub3c4\uad6c\ub4e4",id:"\uc0dd\uac01\ud574\ubcfc-\uc0ac\ud56d\uacfc-\ub3c4\uad6c\ub4e4",level:2},{value:"Git Hook",id:"git-hook",level:3},{value:"revert",id:"revert",level:3},{value:"\ub9ac\ubdf0",id:"\ub9ac\ubdf0",level:3},{value:"\ub9c8\uce58\uba70",id:"\ub9c8\uce58\uba70",level:2}],c={toc:k};function d(e){var t=e.components,p=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\uc548\ub155\ud558\uc138\uc694. Getcha \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 ",(0,l.kt)("strong",{parentName:"p"},"Nick"),"\uc785\ub2c8\ub2e4 \ud83d\ude4b\ud83c\udffc"),(0,l.kt)("p",null,"\uac9f\ucc28\uc5d0\uc11c\ub294 \uc5ec\ub7ec \uae43 \ud074\ub77c\uc774\uc5b8\ud2b8 \uc911 ",(0,l.kt)("strong",{parentName:"p"},"\uae43\ud5c8\ube0c(Github)"),"\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uae43\ud5c8\ube0c\ub294 \ub2e4\ub4e4 \uc544\uc2dc\ub2e4\uc2dc\ud53c \uad49\uc7a5\ud788 \uc88b\uc740 \ud234\uc785\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc88b\uc740 \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \uad00\ub9ac\uae4c\uc9c0 \uc798 \ud574\uc8fc\uc9c4 \uc54a\uc544\uc694."),(0,l.kt)("p",null,"\ucd5c\uadfc \ube48\ubc88\ud558\uac8c \ubc1c\uc0dd\ud55c \ucf54\ub4dc \ub204\ub77d \uc0ac\ud0dc\uc640 \uac19\uc740 \ucf54\ub4dc \uad00\ub9ac \uc0ac\uace0\ub97c \uacaa\uace0 \ubb38\uc81c\uc758\uc2dd\uc744 \uc790\uac01\ud588\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uace7\uc7a5 \ud68c\uc758\ub97c \uc18c\uc9d1\ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\uae43",src:n(503).Z,width:"1548",height:"420"})),(0,l.kt)("p",null,"\uc800\ud76c\ub294 ",(0,l.kt)("em",{parentName:"p"},"upstream")," & ",(0,l.kt)("em",{parentName:"p"},"downstream")," \uad6c\ubd84\uc5c6\uc774 \uba54\uc778 \ub808\ud30c\uc9c0\ud1a0\ub9ac\uc5d0\uc11c \uc791\uc5c5\ud558\uace0 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. CI/CD \ubc0f \ubc30\ud3ec\uc640 \uad00\ub828\ub41c ",(0,l.kt)("inlineCode",{parentName:"p"},"main"),"\uacfc ",(0,l.kt)("inlineCode",{parentName:"p"},"develop")," \ube0c\ub79c\uce58\uac00 \uc788\uace0, \uc774\uacf3\uc73c\ub85c \uc5ec\ub7ec\uba85\uc774 \ucf54\ub4dc\ub97c \ubcd1\ud569\ud558\ub294 \ud615\ud0dc\uc785\ub2c8\ub2e4. \uadf8\ub7ec\ub2e4\ubcf4\ub2c8 \ubcd1\ud569 \uac04 \ub36e\uc5b4\uc4f0\uae30\ub85c \uc778\ud55c \uc720\uc2e4\uc774 \ube48\ubc88\ud569\ub2c8\ub2e4. \ub610\ud55c \uc5c4\uc5f0\ud55c \ud504\ub85c\ub355\ud2b8 \ub808\ud30c\uc9c0\ud1a0\ub9ac\uc784\uc5d0\ub3c4 \ubd88\uad6c\ud558\uace0 \ub9ce\uc740 \ube0c\ub79c\uce58\ub4e4\uc774 \uc758\ubbf8\uc5c6\uc774 \ubc29\uce58\ub418\uc5b4\uc788\uace0, \uc774\ub97c \uba54\ub274\uc5bc\ud558\uac8c \uc0ad\uc81c\ud558\ub294\ub370\ub3c4 \ud55c\uacc4\uac00 \uc788\ub2e4\ub294 \ubb38\uc81c\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub798\uc11c \uc774\ubc88 \uae30\ud68c\uc5d0 \uae43 \uad00\ub9ac\uc5d0 \ub300\ud55c \uba85\ud655\ud55c \ub8f0\uc744 \uc815\ud558\uace0 \uc9c0\ucf1c\ub098\uac00\ub294 ",(0,l.kt)("strong",{parentName:"p"},"\ud130\ub2dd\ud3ec\uc778\ud2b8"),"\ub85c \ub9cc\ub4e4\uae30\ub85c \ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\ud83d\udccc \ubaa9\ud45c")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git graph")," \ub2e8\uc21c\ud654 (\uaf2d \ud544\uc694\ud55c \ucee4\ubc0b\ub4e4\ub9cc \ubaa8\uc74d\uc2dc\ub2e4)"),(0,l.kt)("li",{parentName:"ol"},"\ub9ac\ubdf0 \ubb38\ud654 \ub9cc\ub4e4\uae30 & \ud074\ub9b0 \ucf54\ub4dc & \ucee8\ubca4\uc158 \uc900\uc218"),(0,l.kt)("li",{parentName:"ol"},"\uadf8 \uc640\uc911\uc5d0 ",(0,l.kt)("strong",{parentName:"li"},"\uc18d\ub3c4")," \ucc59\uae30\uae30")))),(0,l.kt)("h2",{id:"repository-\ubd84\ub9ac"},"Repository \ubd84\ub9ac"),(0,l.kt)("p",null,"\uc6b0\uc120 \ub808\ud30c\uc9c0\ud1a0\ub9ac \ubd84\ub9ac\ub97c \uace0\ub824\ud574\ubd24\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ud604\uc7ac \ub2e8\uc77c \ub808\ud3ec\uc5d0\uc11c \ubaa8\ub4e0 \uc791\uc5c5\uc774 \uc774\ub8e8\uc5b4\uc9c0\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"git-graph"),"\uac00 \uad00\ub9ac\uac00 \ud798\ub4e4\ub2e4\ub294 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc758\ubbf8\uc5c6\ub294 \ube0c\ub79c\uce58\ub4e4\uc774 \uc990\ube44\ud558\uace0 \uadf8\ub798\ud504\uac00 \uaf2c\uc5ec\uc11c \uc77c\uc774 \ud130\uc9c0\uba74 \ub514\ubc84\uae45\ud558\uae30\ub3c4 \ud798\uc774 \ub4ed\ub2c8\ub2e4. \uadf8\ub798\uc11c ",(0,l.kt)("strong",{parentName:"p"},"\uc791\uc5c5"),"\uacfc ",(0,l.kt)("strong",{parentName:"p"},"\ub9b4\ub9ac\uc988 \ubc0f \ucf54\ub4dc\uad00\ub9ac"),"\ub97c \ubd84\ub9ac\ud560 \ud544\uc694\uc131\uc774 \uc788\ub2e4\uace0 \ud310\ub2e8\ud588\uc2b5\ub2c8\ub2e4. \uc774 \uc0c1\ud669\uc740 \ud300\uc6d0\uc774 \ub354 \ub298\uc5b4\ub098\uba74 \ub354 \uc2ec\ud574\uc9c8\uac70\uc5d0\uc694. \uadf8 \uc0c1\ud669\uc774 \ub418\uba74 \ub354 \uc5c4\uaca9\ud558\uac8c \uad00\ub9ac\ud574\uc57c \ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub798\uc11c \uc544\ub798 \uadf8\ub9bc\uacfc \uac19\uc774 \ud604\uc7ac Repository\uc5d0\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"master"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"develop"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"release tag")," \ub9cc \uc874\uc7ac\ud558\ub3c4\ub85d \ud558\ub294 \uc548\uc744 \uc81c\uc548\ud588\uc2b5\ub2c8\ub2e4. \ubaa8\ub4e0 \uc791\uc5c5\uc740 fork\ub85c \ubcf5\uc81c\ud55c repository\uc5d0\uc11c pr\ub85c upstream\uc73c\ub85c \uc62c\ub9ac\ub3c4\ub85d \ud558\uc9c0\ub9cc \uad00\ub9ac\uc790\uac00 \ub530\ub85c \uc788\ub294\uac74 \uc544\ub2c8\uace0 \ub9ac\ubdf0 \ud6c4 \uc2b9\uc778\uc744 \uc2a4\uc2a4\ub85c \ud558\ub3c4\ub85d \ud558\ub3c4\ub85d\uc694."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"2",src:n(6393).Z,width:"2454",height:"782"})),(0,l.kt)("p",null,"\uc774 \ubc29\uc2dd\uc774 \ud544\uc694\ud558\ub2e4\ub294 \uac83\uc5d0\ub294 \uacf5\uac10\ud588\uc9c0\ub9cc \uc9c0\uae08 \ub2f9\uc7a5 \uc815\ud55c \uaddc\uce59\uc744 \ud300\uc6d0\ub4e4\uc774 \uc798 \uc9c0\ucf1c\ub9cc \uc900\ub2e4\uba74 ",(0,l.kt)("strong",{parentName:"p"},"\ub2f9\uc7a5\uc758 \ubaa9\ud45c"),"\uc5d0\ub294 \ud070 \uc601\ud5a5\uc744 \uc8fc\uc9c0 \uc54a\ub294\ub2e4\ub294 \uc0ac\uc2e4\uc5d0 \uacf5\uac10\ud560 \uc218 \uc788\uc5c8\uc5b4\uc694. \uadf8\ub798\uc11c \uc774 \ubc29\uc2dd\uc740 \ub2e4\ub978 \uc11c\ube0c \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uccb4\ud5d8\ud574\ubcf4\uace0 \ub3c4\uc785\ud558\uae30\ub85c \ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uae43-\ud50c\ub85c\uc6b0-\ub3c4\uc785"},"\uae43 \ud50c\ub85c\uc6b0 \ub3c4\uc785"),(0,l.kt)("p",null,"\uae43 \ud50c\ub85c\uc6b0(Git Flow)\ub294 \uae43\uc744 \ud65c\uc6a9\ud558\ub294 \ub9e4\ucee4\ub2c8\uc998\uac19\uc740 \uac83\uc778\ub370 \uba85\ud655\ud558\uac8c \uc815\ud574\uc9c0\uac70\ub098 \uad8c\uc7a5\ub418\ub294 \ubc14\ub294 \uc5c6\uace0 ",(0,l.kt)("strong",{parentName:"p"},"Best Practice")," \uc815\ub3c4\ub9cc \uc874\uc7ac\ud569\ub2c8\ub2e4. \ub610\ud55c ",(0,l.kt)("em",{parentName:"p"},"github"),", ",(0,l.kt)("em",{parentName:"p"},"bit bucket"),", ",(0,l.kt)("em",{parentName:"p"},"gitlab")," \ub4f1 git \uc11c\ube44\uc2a4\ub9c8\ub2e4 \uac01\uae30 \ub2e4\ub978 \ud50c\ub85c\uc6b0\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uae43 \ud50c\ub85c\uc6b0\uac00 \ub108\ubb34 \ubcf5\uc7a1\ud558\uace0 \uc808\ucc28\uac00 \ub9ce\uc73c\uba74 \uc798 \uc548\ud558\uac8c\ub418\uace0, \uacb0\uad6d \uc2dc\uac04\uc5d0 \ucad2\uaca8 \ud750\uc9c0\ubd80\uc9c0\ub418\uae30 \uc27d\uc2b5\ub2c8\ub2e4. \uadf8\ub807\ub2e4\uace0 \ub108\ubb34 \uac04\ub2e8\ud558\uba74 \uad00\ub9ac\uac00 \ub418\uc9c0 \uc54a\uc8e0."),(0,l.kt)("p",null,"\uc544\ub798 \uadf8\ub9bc\uc740 \uae43 \ud50c\ub85c\uc6b0\ub97c \uc124\uba85\ud558\ub294 \ub300\ud45c\uc801\uc778 \ub3c4\ud45c\uc785\ub2c8\ub2e4. \ub180\ub78d\uac8c\ub3c4 \uc800\ud76c\uac00 \uc774\ubbf8 \ud558\ub358 \ubc29\uc2dd\uacfc \uc720\uc0ac\ud588\uc2b5\ub2c8\ub2e4. \uc774 \ubc29\uc2dd\uc740 \ub530\ub77c\ud558\uae30 \ubc88\uac70\ub86d\ub2e4\uace0 \ud558\ub358\ub370, \uc800\ud76c\ub294 \uc774\ub300\ub85c \ud558\uace0 \uc788\uc5b4\uc11c \ubb38\uc81c \uc5c6\uc774 \uc801\uc6a9\ud558\uae30\ub85c \ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://techblog.woowahan.com/wp-content/uploads/img/2017-10-30/git-flow_overall_graph.png",alt:"https://techblog.woowahan.com/wp-content/uploads/img/2017-10-30/git-flow_overall_graph.png"})),(0,l.kt)("p",null,"\uc774\ub97c \uc800\ud76c \uc791\uc5c5\ubc29\uc2dd\ub300\ub85c \ubcc0\ud658\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc544\uc694. \uc798 \uc9c0\ucf1c\uc9c0\uc9c0 \uc54a\ub358\uac74 \ub9ac\ubdf0 \uc815\ub3c4\uc778\ub370 \uc774\ubc88 \uae30\ud68c\ub97c \ud1b5\ud574 \uc801\uc808\ud55c \uc218\uc900\uc5d0\uc11c \ub9ac\ubdf0\ub3c4 \ud558\uae30\ub85c \ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\uae43 \ud50c\ub85c\uc6b0",src:n(2700).Z,width:"812",height:"754"})),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uae43-\uaddc\uce59-\uc815\ud558\uae30"},"\uae43 \uaddc\uce59 \uc815\ud558\uae30"),(0,l.kt)("p",null,"\uc218\ub9ce\uc740 \uae43 \uc561\uc158\ub4e4\uc744 \ud560 \ub54c, \uc9c0\ucf1c\uc57c\ud560 \uaddc\uce59\uc744 \uba85\ud655\ud788 \uc815\uc758\ud588\uc2b5\ub2c8\ub2e4.\n",(0,l.kt)("inlineCode",{parentName:"p"},"branch")," \uc0dd\uc131, ",(0,l.kt)("inlineCode",{parentName:"p"},"commit")," \uc0dd\uc131, ",(0,l.kt)("inlineCode",{parentName:"p"},"push")," \ub4f1\ub4f1 \ub9ce\uc740 \uba85\ub839\uc5b4\ub97c \uae30\uacc4\uc801\uc73c\ub85c \uc785\ub825\ud558\uc9c0 \uc54a\uace0, \uaddc\uce59\uc5d0 \uc758\uac70\ud558\uae30 \uc704\ud568\uc785\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"branch"},"branch"),(0,l.kt)("p",null,"\uc704\uc5d0\uc11c \uc5b8\uae09\ud55c ",(0,l.kt)("strong",{parentName:"p"},"up & down stream")," \ubc29\uc2dd\uc744 \uc4f0\uc9c0 \uc54a\ub294\ub2e4\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"branch"),"\ub97c \uc801\uc808\ud788 \ub9cc\ub4dc\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4. \uae43 \uadf8\ub798\ud504\uc5d0 \ube0c\ub79c\uce58\uac00 \uc5ec\ub7ec\uac1c \uc788\uc744 \ub54c \uc791\uc5c5 \uc0c1\ud669\uc744 \ubcf4\uae30 \ud3b8\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\uba85\uba85 \uaddc\uce59")),(0,l.kt)("p",null,"\ube0c\ub79c\uce58\ub294 \uae30\ub2a5\ub2e8\uc704\uac00 \uc544\ub2cc \uc791\uc5c5\ub2e8\uc704\uc785\ub2c8\ub2e4. \ud574\ub2f9 \ube0c\ub79c\uce58\uc5d0\uc11c \uc5b4\ub5a4 \uc77c\uc774 \uc77c\uc5b4\ub098\uace0 \uc788\ub294\uc9c0 \uac04\ub2e8\ud788 \uc54c\ub824\uc8fc\uace0, \ubcd1\ud569\ub418\uba74 \uc0ac\ub77c\uc9c0\ub294 \uac1c\ub150\uc774\uae30 \ub54c\ubb38\uc5d0 \ud070 \ubb34\uac8c\ub97c \ub450\uc9c0 \uc54a\uace0 \ub2e4\uc74c\uacfc \uac19\uc740 \uac04\ub2e8\ud55c \ub8f0\uc744 \uc815\ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u2753 \uc774\ub984 \uaddc\uce59")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre"},"main -> \ucd5c\uc2e0\ud654\ub41c \ucf54\ub4dc (\uc6b4\uc601\uc11c\ubc84 \uc790\ub3d9\ubc30\ud3ec)\n\ndevelop -> \uac1c\ubc1c\uc6a9 \ucf54\ub4dc (\uac1c\ubc1c\uc11c\ubc84 \uc790\ub3d9\ubc30\ud3ec)\n\nrelease -> \ub9b4\ub9ac\uc988 (\ud0dc\uadf8\ub85c \uad00\ub9ac)\n\nfeature -> \uae30\ub2a5\uac1c\ubc1c\n")),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("em",{parentName:"p"},"name + \u2018/\u2019 + \uc124\uba85 (\uc774\uc288 \uc788\ub2e4\uba74 \uc9c0\ub77c \ud2f0\ucf13 \uc0ac\uc6a9)")))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\uc0dd\uc131 \uaddc\uce59"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\ud56d\uc0c1 develop \ube0c\ub79c\uce58\uc5d0\uc11c \uc0dd\uc131\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\uc0dd\uc131 \uc804 develop branch\uac00 \ucd5c\uc2e0 \uc0c1\ud0dc\uc784\uc744 \ud655\uc778\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\uba85\uba85\uaddc\uce59\uc740 \uc704 6\uac1c \ud56d\ubaa9\ub9cc \uc0ac\uc6a9\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"hotfix\ub294 main\uc5d0\uc11c \uc0dd\uc131\ud55c\ub2e4")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\uc0c8\ub85c\uc6b4 \ube0c\ub79c\uce58 develop-web")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\ud604\uc7ac \uac9f\ucc28 \uc6f9 \uc11c\ube44\uc2a4\ub294 react-native\ub97c \uc6f9\uc73c\ub85c \ud3ec\ud305\ud55c mobile-web\uc785\ub2c8\ub2e4.\n\uadf8\ub9ac\uace0 \ube0c\ub79c\uce58\uc5d0 \ucf54\ub4dc\uac00 \ubcd1\ud569\ub418\ub294 \uc21c\uac04 mobile-web\uc774 \ubc30\ud3ec\ub418\ub294 \uc0c1\ud669\uc778\ub370\uc694, \uc571\uc740 \ubc30\ud3ec\ud574\ub3c4 \ub418\uc9c0\ub9cc \uc6f9\uc740 \ubc30\ud3ec\ud558\uba74 \uc548\ub418\ub294 \ucf54\ub4dc\uac00 \ud14c\uc2a4\ud2b8 \ubaa9\uc801\uc73c\ub85c develop \ube0c\ub79c\uce58\uc5d0 \uc62c\ub77c\uac14\ub2e4\uac00 \ubc30\ud3ec\ub418\ub294 \uc77c\uc774 \ube48\ubc88\ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",{parentName:"div"},"\uadf8\ub798\uc11c develop \ube0c\ub79c\uce58\ub97c \ub450\uac1c \ub450\uc790\ub294 \uc758\uacac\uc774 \ub098\uc654\uc2b5\ub2c8\ub2e4. \uc571 \ud14c\uc2a4\ud2b8\uc6a9\uacfc \uc6f9 \ud14c\uc2a4\ud2b8\uc6a9\uc73c\ub85c \ub450\ub294 \uac83\uc774\uc8e0. \ud558\uc9c0\ub9cc \ucf54\ub4dc\uac00 \uaf2c\uc5ec\ubc84\ub9b4 \uc218 \uc788\ub2e4\ub294 \ubb38\uc81c\ub85c \uc77c\ub2e8\uc740 \ud604\uc0c1 \uc720\uc9c0\ud558\uae30\ub85c \ud588\uc2b5\ub2c8\ub2e4. \ucd94\ud6c4 \ub354 \ud070 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud55c\ub2e4\uba74 \ub2e4\uc2dc \uace0\ub824\ud574\ubcfc \uc21c \uc788\uaca0\ub124\uc694."))),(0,l.kt)("h3",{id:"commit"},"Commit"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Commit"),"\uc740 \uc791\uc5c5 \ub2e8\uc704\ub85c \uc0ac\uc6a9\ub418\uae30\ub3c4 \ud55c \ub9cc\ud07c, \ud574\ub2f9 \ucee4\ubc0b\uc5d0\uc11c \ubb34\uc2a8 \ubaa9\uc801\uc73c\ub85c \uc5b4\ub5a4 \uc791\uc5c5\uc744 \ud588\ub294\uc9c0 \uba85\ud655\ud558\uac8c \uc124\uba85\ud574\uc57c\ud569\ub2c8\ub2e4. \ub610\ud55c \ud2b9\uc815 \ube0c\ub79c\uce58\uc5d0\uc11c \uc791\uc5c5\uc774 \ub05d\ub09c \ud6c4 \ud574\ub2f9 \uc791\uc5c5\uc73c\ub85c \ub3cc\uc544\uac08 \uc218 \uc788\ub294 \ud50c\ub798\uadf8 \uc911 \ud558\ub098\uc785\ub2c8\ub2e4. \ub0b4\uac00 \uc5c6\uc744 \ub54c \ub0b4\uac00 \ub9cc\ub4e0 \ucee4\ubc0b\uc744 \ub3d9\ub8cc \uac1c\ubc1c\uc790\uac00 \ubcfc \uc218\ub3c4 \uc788\ub2e4\ub294 \uc0ac\uc2e4\uc744 \uc5fc\ub450\ud55c \ub2e8\uc704\uc778 \ub9cc\ud07c, \uba85\ud655\ud558\uac8c \uae30\ub85d\ud560 \ud544\uc694\uac00 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c \ucee4\ubc0b \ud15c\ud50c\ub9bf\uc744 \ub3c4\uc785\ud558\uae30\ub85c \uacb0\uc815\ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/ko/v1.0.0/"},"\ucee8\ubca4\uc154\ub110 \ucee4\ubc0b"),"\uc774\ub77c\ub294 \uc0ac\uc774\ud2b8\ub97c \ucc38\uace0\ud588\uace0, \uc800\ud76c\ub294 \ub108\ubb34 \ub9ce\uc740 \uc885\ub958\ub97c \ub450\uae30\ubcf4\ub2e8 \uc9c1\uad00\uc801\uc778 \uc804\ub7b5\uc744 \uc120\ud0dd\ud588\uc2b5\ub2c8\ub2e4. \uae30\ub2a5 \ucd94\uac00\uc5d4 ",(0,l.kt)("strong",{parentName:"p"},"feat"),", \ubc84\uadf8 \uc218\uc815\uc5d4 ",(0,l.kt)("strong",{parentName:"p"},"fix"),", \ub9ac\ud329\ud1a0\ub9c1\uc5d4 ",(0,l.kt)("strong",{parentName:"p"},"refactor"),"\ub9cc \uc0ac\uc6a9\ud558\uae30\ub85c \ud588\uc73c\uba70 \uad6c\uccb4\uc801\uc778 \ub0b4\uc6a9\uc740 \ubcf8\ubb38\uc5d0 \uc791\uc131\ud558\ub3c4\ub85d\uc694."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"commit \uba54\uc2dc\uc9c0\ub294 \ucee4\ubc0b \ud15c\ud50c\ub9bf\uc5d0 \ub530\ub77c \uac04\uacb0 & \uba85\ud655\ud558\uac8c \uc791\uc131\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-md"},'################\n\n# \uc81c\ubaa9\uc740 50\uc790 \uc774\ub0b4 / \ub05d\uc5d0 \ub9c8\uce68\ud45c \uae08\uc9c0\n\n# \ubc14\ub85c \uc544\ub798 \uacf5\ubc31\uc740 \uc9c0\uc6b0\uc9c0 \ub9c8\uc138\uc694 (\uc81c\ubaa9\uacfc \ubcf8\ubb38\uc758 \ubd84\ub9ac\ub97c \uc704\ud568)\n\n################\n\n# \ubcf8\ubb38(\uad6c\uccb4\uc801\uc778 \ub0b4\uc6a9)\uc744 \uc544\ub7ab\uc904\uc5d0 \uc791\uc131\n\n# \uc5ec\ub7ec \uc904\uc758 \uba54\uc2dc\uc9c0\ub97c \uc791\uc131\ud560 \ub550 "-"\ub85c \uad6c\ubd84 (\ud55c \uc904\uc740 72\uc790 \uc774\ub0b4)\n\n################\n\n# feat: \uc0c8\ub85c\uc6b4 \uae30\ub2a5 \ucd94\uac00\n\n# fix: \ubc84\uadf8 \uc218\uc815\n\n# refactor: \ucf54\ub4dc \ub9ac\ud329\ud1a0\ub9c1\n\n################\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\uba54\uc2dc\uc9c0\uc5d0 \ud55c\uae00\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"squash"),"\ub97c \ud65c\uc6a9\ud569\uc2dc\ub2e4."),(0,l.kt)("p",{parentName:"li"},"\ubaa9\uc801\uc740 \ud544\uc694\ud55c \ucee4\ubc0b\ub9cc \uc62c\ub824\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"git graph"),"\ub97c \uae54\ub054\ud558\uac8c \uc720\uc9c0\ud558\uae30 \uc704\ud568\uc785\ub2c8\ub2e4. \uc791\uc5c5 \uc2dc\uc810\uc5d0\ub294 \uc5ec\ub7ec\ubc88 \ucee4\ubc0b\uc744 \uc62c\ub824\ub3c4 \ub418\ub294\ub370, \ud504\ub85c\ub355\uc158\uc5d0 \uc62c\ub77c\uac08 \ub54c\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"squash"),"\ub97c \ud1b5\ud574 \ub2e8\uc704\uc791\uc5c5 \ub2f9 \ud558\ub098\ub85c \ubb36\uc5b4\uc11c \uc62c\ub824\uc90d\ub2c8\ub2e4. \uac00\ub839 \uc791\uc5c5 \uae30\uac04\ub3d9\uc548 100\uac1c\uc758 \ucee4\ubc0b\uc744 \uc62c\ub838\ub2e4\uba74 \uc804\ubd80 \ud55c\ubc88\uc5d0 \uc62c\ub9ac\uae30\ubcf4\ub2e4 ",(0,l.kt)("strong",{parentName:"p"},"\uc791\uc5c5 \ub2e8\uc704"),"\ub85c 20\uac1c\uc529 \ucee4\ubc0b\uc744 \ubb36\uc5b4\uc11c \uc62c\ub824\uc8fc\uba74 \uae43 \uadf8\ub798\ud504 \ubcf4\uae30\uc5d0\ub3c4 \ud3b8\ud558\uace0, \ub3cc\uc544\uac00\uae30\ub3c4 \uc27d\uc2b5\ub2c8\ub2e4."))),(0,l.kt)("h3",{id:"rebase"},"rebase"),(0,l.kt)("p",null,"\ucf54\ub4dc \uc720\uc2e4 \uc0ac\uace0\uc758 \ub300\ubd80\ubd84\uc740 \uc774 \uba85\ub839\uc5b4\ub97c \uc548\ud574\uc11c \ubc1c\uc0dd\ud55c\ub2e4\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4. \ucd5c\uc2e0 \ucf54\ub4dc\uac00 \uc544\ub2cc\ub370 \ube0c\ub79c\uce58\ub97c \ub9cc\ub4e4\uc5b4 \uc791\uc5c5 \ud6c4 \ud569\uce58\uac70\ub098, \ud569\uce58\ub294 \uc2dc\uc810\uc5d0 \ub9ac\ubaa8\ud2b8 \ube0c\ub79c\uce58\ub97c \ubc1b\uc544\uc624\uc9c0 \uc54a\uace0 \ub85c\uceec \ube0c\ub79c\uce58\uc5d0 \ubcd1\ud569 \ud6c4 \ud478\uc2dc\ub97c \ud558\ub294 \uacbd\uc6b0 \ub4f1\uc774 \uc788\uaca0\uc8e0."),(0,l.kt)("p",null,"\uc800\ud76c\ub294 \uadf8\ub7f0 \uc0c1\ud669\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud574 \uc791\uc5c5\uc744 \uc2dc\uc791\ud558\uae30 \uc804\uc5d0 ",(0,l.kt)("strong",{parentName:"p"},"develop\uc744 \ucd5c\uc2e0 \uc0c1\ud0dc\ub85c")," \ub9cc\ub4e0\ub2e4. \uc791\uc5c5\uc744 \ub9c8\uce58\uace0 ",(0,l.kt)("inlineCode",{parentName:"p"},"pull request"),"\ub97c \ub0a0\ub9ac\uae30 \uc804\uc5d0 \ud56d\uc0c1 \ucd9c\ucc98 \ube0c\ub79c\uce58\ub97c ",(0,l.kt)("inlineCode",{parentName:"p"},"rebase"),"\ud574\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"conflict"),"\uac00 \uc5c6\ub294 \ucd5c\uc2e0 \uc0c1\ud0dc\ub85c \ub9cc\ub4e4\uace0 pr\uc744 \uc62c\ub9b0\ub2e4\ub294 \uaddc\uce59\uc744 \uc815\ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774 \ubc29\uc2dd\ub300\ub85c \ud558\uba74 \uc544\ub798 \uadf8\ub9bc\uacfc \uac19\uc774 base \ube0c\ub79c\uce58\uc778 main \ube0c\ub79c\uce58\uac00 \ud55c \uc904\ub85c \uc720\uc9c0\ub418\ub294 \ud6a8\uacfc\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\uc0ac\uc9c4",src:n(3997).Z,width:"1734",height:"388"})),(0,l.kt)("h3",{id:"pull-request"},"Pull Request"),(0,l.kt)("p",null,"Pull Request\ub294 \uc790\uc720\ub86d\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ub9ac\ubdf0\ub97c \uc704\ud574 \uac04\ub2e8\ud55c \uc124\uba85\uc744 \ub2ec\uc544\ub193\uae30\ub85c \ud588\uc5b4\uc694. \ub9cc\uc57d \uac04\ub2e8\ud55c \uc218\uc815\uc0ac\ud56d\uc774\ub77c\uba74 PR \uc81c\ubaa9\ub9cc\uc73c\ub85c\ub3c4 \uc124\uba85\uc774 \ub420 \uac83\uc774\ub77c\uace0 \uc0dd\uac01\ud558\ubbc0\ub85c \uc0dd\ub7b5\ud574\ub3c4 \uc88b\ub2e4\uace0 \ud569\uc758\ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc544\ub798\ub294 PR \ud15c\ud50c\ub9bf\uc778\ub370\uc694, \ub9ac\uc561\ud2b8 \ud300\uc5d0\uc11c \ud65c\uc6a9\ud558\ub294 \uc591\uc2dd\uc744 \uadf8\ub300\ub85c \uac00\uc838\uc654\uc2b5\ub2c8\ub2e4. \ud14c\uc2a4\ud2b8 \ubc29\ubc95\uc5d0 \ub300\ud55c \ubd80\ubd84\uc740 \uc624\ud508\uc18c\uc2a4 \ud504\ub85c\uc81d\ud2b8\ub77c \ub4e4\uc5b4\uac00\uc788\ub358 \ub0b4\uc6a9\uc778 \uac83 \uac19\uc740\ub370, \ucd94\ud6c4 \ud14c\uc2a4\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac \ub3c4\uc785 \ud6c4 \uc694\uae34\ud558\uac8c \uc4f0\uc77c \uac83 \uac19\uc544 \ud3ec\ud568\uc2dc\ucf30\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"## \uc791\uc5c5 \ub0b4\uc6a9 \uc694\uc57d\n\n-\n\n## \ud14c\uc2a4\ud2b8 \ubc29\ubc95\n\n-\n\n## \ucc38\uace0\uc0ac\ud56d\n")),(0,l.kt)("h3",{id:"release"},"Release"),(0,l.kt)("p",null,"develop \ube0c\ub79c\uce58\uc5d0\uc11c, \uc989 \uac1c\ubc1c\uc11c\ubc84\uc5d0\uc11c \uac80\uc99d\uc774 \ub05d\ub0ac\ub2e4\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"release branch"),"\ub97c \uc0dd\uc131\ud558\uc5ec \ub9b4\ub9ac\uc988\ub97c \uc9c4\ud589\ud569\ub2c8\ub2e4. \uc800\ud76c\ub294 \ub9ac\uc561\ud2b8 \ub124\uc774\ud2f0\ube0c \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ud65c\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0 \ub9b4\ub9ac\uc988\ud558\ub294 \uacbd\uc6b0\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"Store Update"),"\uc640 ",(0,l.kt)("inlineCode",{parentName:"p"},"Code Push")," \ub450\uac00\uc9c0 \uc885\ub958\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub450 \uacbd\uc6b0\uc5d0 \ub300\ud574 branch \ubc0f tag \uc774\ub984\uc5d0 \ub2e4\uc74c\uc758 \uaddc\uce59\uc744 \uc801\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"// Store Update\nrelease/v8.2.0\n\n//Code Push\nrelease/v8.2.0+cp.i100.a200\n")),(0,l.kt)("p",null,"\ub9b4\ub9ac\uc988\uac00 \ubb38\uc81c\uc5c6\uc774 \uc885\ub8cc\ub418\uc5c8\ub2e4\uba74 Tag\ub97c \uc0dd\uc131\ud558\uace0 \ub9b4\ub9ac\uc988 branch\ub97c \uc9c0\uc6cc\uc90d\ub2c8\ub2e4. \ub9b4\ub9ac\uc988 \ube0c\ub79c\uce58\uae4c\uc9c0 \uc9c0\uc6b0\ub294 \uc774\uc720\ub294 ",(0,l.kt)("strong",{parentName:"p"},"\ud0dc\uadf8"),"\uac00 \uadf8 \uc5ed\ud560\uc744 \ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc774\uace0, \ub864\ubc31\ud558\ub294 \uc0c1\ud669\uc774 \ubc1c\uc0dd\ud558\ub354\ub77c\ub3c4 \ucee4\ubc0b \ub2e8\uc704\ub85c \ub3cc\uc544\uac08 \uc218 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"git tag release/\n\ngit tag --push\n")),(0,l.kt)("p",null,"\uc774\ub807\uac8c \ubc1c\ud589\ud55c \ud0dc\uadf8\uc5d0 \ub530\ub77c \ub9b4\ub9ac\uc988\ub97c \uc0dd\uc131\ud558\uc5ec \ubc84\uc804\uc744 \uad00\ub9ac\ud574\uc8fc\uba74 \uae43 \ud50c\ub85c\uc6b0\ub294 \ub05d\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"tag",src:n(3554).Z,width:"822",height:"382"})),(0,l.kt)("h2",{id:"\uc0dd\uac01\ud574\ubcfc-\uc0ac\ud56d\uacfc-\ub3c4\uad6c\ub4e4"},"\uc0dd\uac01\ud574\ubcfc \uc0ac\ud56d\uacfc \ub3c4\uad6c\ub4e4"),(0,l.kt)("h3",{id:"git-hook"},"Git Hook"),(0,l.kt)("p",null,"\uac9f\ucc28 \ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0\uc11c\ub294 ",(0,l.kt)("a",{parentName:"p",href:"https://typicode.github.io/husky/#/"},"husky"),"\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. commit\uc774\ub098 push\ub97c \ud558\uae30 \uc804\uc5d0 \ud2b9\uc815 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2e4\ud589\uc2dc\ucf1c\uc8fc\ub294 \uc77c\uc885\uc758 \ubc29\uc5b4\uc7a5\uce58\uac19\uc740 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ud604\uc7ac \uc800\ud76c\ub294 ",(0,l.kt)("strong",{parentName:"p"},"pre-commit"),"\uacfc ",(0,l.kt)("strong",{parentName:"p"},"pre-push")," \ub450\uac1c \ud65c\uc6a9\uc911\uc774\uace0 ",(0,l.kt)("em",{parentName:"p"},"typeScript"),"\uc640 ",(0,l.kt)("em",{parentName:"p"},"prettier"),"\uac00 \uc801\uc6a9\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc9c0\uae08\uc758 \ucf54\ub4dc\uac00 \uc544\uc9c1 \uc815\ub3c8\uc774 \ub418\uc9c0 \uc54a\uc544 \uae43 \ud6c5\uc5d0 \ub354 \ub9ce\uc740 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ucd94\uac00\ud558\uba74 \uc9c4\ud589\uc774 \uc548\ub420 \uac83 \uac19\uc544\uc11c \uc9c0\uae08\uc740 \uc774 \uc815\ub3c4\ub9cc \uc0ac\uc6a9\ud558\uace0, \ucd94\ud6c4 \ucf54\ub4dc\ub97c \uc870\uae08 \ub354 \ub2e4\ub4ec\uc740 \ub4a4 \uc5c4\uaca9\ud55c \uaddc\uce59\uc744 \uc801\uc6a9\ud574\ubcfc \uc0dd\uac01\uc785\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"revert"},"revert"),(0,l.kt)("p",null,"\uc798\ubabb\ub41c \uc791\uc5c5\uc73c\ub85c \uc778\ud574 \ub9ac\uc14b\ud560 \uc77c\uc774 \uc788\uc73c\uba74 \uae30\ub85d\uc744 \uc704\ud574 ",(0,l.kt)("inlineCode",{parentName:"p"},"git revert")," \uba85\ub839\uc5b4\ub97c \ud65c\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"\ub9ac\ubdf0"},"\ub9ac\ubdf0"),(0,l.kt)("p",null,"\uc870\uae08 \ub290\ub9ac\uac8c \uac00\ub354\ub77c\ub3c4 ",(0,l.kt)("strong",{parentName:"p"},"\uac80\uc99d \uacfc\uc815"),"\uc744 \uac70\uce5c\ub2e4. \uac9f\ucc28\uc758 \ucf54\uc5b4 \ubca8\ub958 \uc911 \uac00\uc7a5 \uc911\uc694\ud55c \ubd80\ubd84\uc774 ",(0,l.kt)("strong",{parentName:"p"},"\uc18d\ub3c4"),"\uc774\uae30 \ub54c\ubb38\uc5d0 \uacc4\uc18d \uae30\ub2e4\ub824\uc904 \uc21c \uc5c6\uc2b5\ub2c8\ub2e4\ub9cc, \uadf8\ub807\ub2e4\uace0 \uc11c\ube44\uc2a4\uc758 \ud004\ub9ac\ud2f0 \ub610\ud55c \ucf54\uc5b4 \ubca8\ub958\uc778 ",(0,l.kt)("strong",{parentName:"p"},"\uace0\uac1d \uc911\uc2ec"),"\uc5d0 \uc704\ubc30\ub418\uae30 \ub54c\ubb38\uc5d0 \ub193\uce60 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ubc38\ub7f0\uc2a4\ub97c \uc798 \uc7a1\uc544\uc11c \ub450\ub9c8\ub9ac \ud1a0\ub07c\ub97c \ub2e4 \uc7a1\ub3c4\ub85d \uc11c\ub85c \ub178\ub825\ud558\uae30\ub85c ..!!"),(0,l.kt)("p",null,"\ub9ac\ubdf0\ub97c \ub9c8\uce58\uace0 ",(0,l.kt)("strong",{parentName:"p"},"merge"),"\ub294 \ubcf8\uc778\uc774 \ub204\ub974\uae30\ub85c \ud588\uc2b5\ub2c8\ub2e4. review\ub294 ",(0,l.kt)("strong",{parentName:"p"},"\ucc45\uc784\uc744 \uc804\uac00\ud558\ub294 \ud615\ud0dc"),"\uac00 \ub418\uc5b4\uc11c\ub294 \uc548\ub418\uae30 \ub54c\ubb38\uc774\uc5d0\uc694. \ub9ac\ubdf0\uc758 \uacb0\uacfc\uac00 \uc5b4\ub5bb\ub4e0 \ubcf8\uc778\uc774 \uc0dd\uac01\ud560 \ub54c \uc88b\uc740 \ubc29\uc2dd\uacfc \ucf54\ub4dc\ub97c \ubcd1\ud569\ud558\ub294 \uac83\uc774\uc8e0."),(0,l.kt)("p",null,"\uc5ec\ub7ec \ubb38\uc11c\ub4e4\uacfc \ube14\ub85c\uadf8\ub97c \ubcf4\ub2c8 \ub2e4\uc74c\uacfc \uac19\uc740 \uaddc\uce59\uc744 \uc815\ud558\ub294 \ud68c\uc0ac\ub4e4\ub3c4 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"K\uc0ac \ub9ac\ubdf0 \uaddc\uce59")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"PR\uc744 \ud560 \ub54c \ud55c\ubc88\uc5d0 1000\uc904\uc744 \ub118\uc9c0 \uc54a\uac8c \ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub9ac\ubdf0\uc5d0 \uac10\uc815\uc744 \ub2f4\uc9c0 \uc54a\ub294\ub2e4 \ud83d\ude06"),(0,l.kt)("li",{parentName:"ul"},"\ub108\ubb34 \uc2ec\ud558\uc9c0 \uc54a\uc73c\uba74 \ud6a8\uc728\uc131 \ubb38\uc81c\ub294 \uc81c\uae30\ud558\uc9c0 \uc54a\ub294\ub2e4.")))),(0,l.kt)("p",null,"\uc800\ud76c\ub3c4 \ub2f9\uc5f0\ud788 \ub108\ubb34 \uc2ec\ud55c \ub9ac\ubdf0\ub098 \uac10\uc815\uc744 \ub2f4\uc740 \ud0dc\ud074\uc744 \uc54a\uc744\uac81\ub2c8\ub2e4. \ubc18\ub300\ub85c \ub354 \ub098\uc740 \uc11c\ube44\uc2a4 \ud488\uc9c8\uacfc \uc11c\ub85c\uc758 \uc131\uc7a5\uc744 \uc704\ud574 \ub9ac\ubdf0\uac00 \uc88b\uc740 \ubc11\uac70\ub984\uc774 \ub418\uc5c8\uc73c\uba74 \uc88b\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\ub9c8\uce58\uba70"},"\ub9c8\uce58\uba70"),(0,l.kt)("p",null,"\uae43 \uc5c6\uc73c\uba74 \uc5b4\ub5bb\uac8c \uc774\ub807\uac8c \uc5ec\ub7ec\uc0ac\ub78c\ub4e4\uacfc \uc77c\ud588\uc744\uae4c \uc2f6\uc744 \uc815\ub3c4\ub85c, \uae43\uc740 \uac1c\ubc1c\uc790\uc5d0\uac8c \uc911\uc694\ud55c \ub3c4\uad6c\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ud558\uc9c0\ub9cc \uc6b0\uc120 \uc88b\uc740 \ub3c4\uad6c\ub97c \uc798 \ub2e4\ub8f0\uc904 \uc54c\uc544\uc57c \ud558\uace0, \ud611\uc5c5\uc744 \uc704\ud55c \ub3c4\uad6c\uc778 \ub9cc\ud07c ",(0,l.kt)("strong",{parentName:"p"},"\ubaa8\ub450\uac00 \ub3d9\uc758\ud55c")," \uc801\uc808\ud55c \uaddc\uce59\uacfc \uad00\ub9ac\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc800\ud76c \ud504\ub860\ud2b8\uc5d4\ub4dc \ucc55\ud130\ub294 \uc774\ubc88 \ud68c\uc758\ub97c \ud1b5\ud574 ",(0,l.kt)("strong",{parentName:"p"},"\uacf5\uac10\ub300\uac00 \ud615\uc131\ub41c")," \uae43 \uad00\ub9ac \ubc29\uc2dd\uc744 \uc815\ud574\uc11c \uc798 \uc801\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\ucc98\ub7fc \uae43 \uad00\ub9ac \ubc29\uc2dd\uc744 \uc815\ud560 \ub550 \uad6c\uc131\uc6d0\ub4e4\uc774 \ubaa8\ub450 \ubaa8\uc5ec\uc11c \uc774\uc57c\uae30\ud558\ub294 \uc2dc\uac04\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \ub3c4\uc6c0\uc774 \ub418\uc168\uc73c\uba74 \uc88b\uaca0\uc2b5\ub2c8\ub2e4."))}d.isMDXComponent=!0},503:function(e,t,n){t.Z=n.p+"assets/images/0-77ac1f3296d03c32cf6a64aa881b3d0b.png"},6393:function(e,t,n){t.Z=n.p+"assets/images/1-9f924c6e48e2b0f09bf3be93dc197158.png"},2700:function(e,t,n){t.Z=n.p+"assets/images/2-f8794911107bbdbb65457be34f39979e.png"},3997:function(e,t,n){t.Z=n.p+"assets/images/3-e05b9bd33213a8cb38c1ef1837458019.png"},3554:function(e,t,n){t.Z=n.p+"assets/images/4-3cfa3a84f7414f381bca5bc07e1e79d9.png"}}]);