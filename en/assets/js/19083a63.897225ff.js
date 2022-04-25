"use strict";(self.webpackChunkgetcha_frontend=self.webpackChunkgetcha_frontend||[]).push([[1333],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),f=p(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||o;return n?r.createElement(m,u(u({ref:t},i),{},{components:n})):r.createElement(m,u({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var p=2;p<o;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7671:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),u=["components"],l={sidebar_position:2,title:"useUpdateEffect"},c="useUpdateEffect",p={unversionedId:"hooks/useUpdateEffect",id:"hooks/useUpdateEffect",title:"useUpdateEffect",description:"---",source:"@site/utils-docs/hooks/useUpdateEffect.md",sourceDirName:"hooks",slug:"/hooks/useUpdateEffect",permalink:"/getcha_frontend_docs/en/utils-docs/hooks/useUpdateEffect",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"useUpdateEffect"},sidebar:"tutorialSidebar",previous:{title:"useBlockSerialClicks",permalink:"/getcha_frontend_docs/en/utils-docs/hooks/useBlockSerialClicks"},next:{title:"useFloatingButton",permalink:"/getcha_frontend_docs/en/utils-docs/hooks/useFloatingButton"}},i={},s=[{value:"parameter type",id:"parameter-type",level:3},{value:"return type",id:"return-type",level:3},{value:"\ucf54\ub4dc",id:"\ucf54\ub4dc",level:2},{value:"\uc0ac\uc6a9\ubc95",id:"\uc0ac\uc6a9\ubc95",level:2}],f={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"useupdateeffect"},"useUpdateEffect"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"useEffect\ub294 mount(\ucd5c\ucd08 \ub80c\ub354\ub9c1) \uc2dc \ubb34\uc870\uac74 1\ud68c \uc2e4\ud589\ub429\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uba87\uba87 \uacbd\uc6b0\uc5d0\uc11c\ub294 ",(0,o.kt)("strong",{parentName:"p"},"mount \uc2dc\uc810\uc744 \uc81c\uc678\ud558\uace0"),", ",(0,o.kt)("strong",{parentName:"p"},"Dependency\uac00 \ubcc0\uacbd\ub420 \ub54c\ub9cc")," \ud638\ucd9c\ub418\ub294 useEffect Hook\uc744 \uc0ac\uc6a9\ud574\uc57c \ud560 \ub54c\uac00\uc788\uc5b4\uc694."),(0,o.kt)("p",null,"useUpdateEffect\ub294 ",(0,o.kt)("strong",{parentName:"p"},"mount \uc2dc\uc810\uc758 \ucf5c\ubc31 \ud638\ucd9c\uc744 \uac70\ubd80"),"\ud558\uace0 \uc774\ud6c4 ",(0,o.kt)("strong",{parentName:"p"},"dependency\uac00 \ubcc0\uacbd\ub420 \ub54c\ub9cc")," \ucf5c\ubc31\ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294 \ud6c5 \uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"parameter-type"},"parameter type"),(0,o.kt)("p",null,"React\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 useEffect \ud6c5\uc758 Parameter\uc640 \uc77c\uce58\ud569\ub2c8\ub2e4."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"callback"),(0,o.kt)("td",{parentName:"tr",align:null},"function")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"deps"),(0,o.kt)("td",{parentName:"tr",align:null},"any[]")))),(0,o.kt)("h3",{id:"return-type"},"return type"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"return"),(0,o.kt)("th",{parentName:"tr",align:null},"type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"useUpdateEffect"),(0,o.kt)("td",{parentName:"tr",align:null},"hook callback")))),(0,o.kt)("h2",{id:"\ucf54\ub4dc"},"\ucf54\ub4dc"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\uac04\ub2e8\ud788 ref\ub85c mount \uc5ec\ubd80\ub97c \uccb4\ud06c\ud558\uace0 \ucf5c\ubc31 \ud638\ucd9c \uc5ec\ubd80\ub97c \ud310\ub2e8\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useRef, useEffect } from "react";\n\nconst useUpdateEffect = (callback, deps) => {\n  const isFirstRender = useRef(true);\n\n  useEffect(() => {\n    if (isFirstRender.current) {\n      isFirstRender.current = false;\n      return;\n    } else {\n      return callback();\n    }\n\n    return () => {};\n  }, deps);\n};\n\nexport default useUpdateEffect;\n')),(0,o.kt)("h2",{id:"\uc0ac\uc6a9\ubc95"},"\uc0ac\uc6a9\ubc95"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"useUpdateEffect\ub97c \uac00\uc838\uc640\uc11c useEffect\ub97c \uc0ac\uc6a9\ud558\ub4ef \ud65c\uc6a9\ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import useUpdateEffect from 'getcha-frontend/utils/hooks/useUpdateEffect';\n...\n\nuseUpdateEffect(() => {\n\n        const debounce = setTimeout(() => {\n            if (!isError) {\n                if (bookmarked) {\n                    subscribe();\n                    return;\n                }\n                unSubscribe();\n            }\n        }, 300);\n\n        return () => clearTimeout(debounce);\n    }, [isError, bookmarked]);\n\n...\n")))}d.isMDXComponent=!0}}]);