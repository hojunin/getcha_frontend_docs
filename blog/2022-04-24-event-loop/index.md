---
slug: event-loop
title: javaScript Event Loop의 원리
authors: [nick]
tags: [javaScript, typeScript]
---

:::info
👉 [이 링크](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif)를 번역했습니다.
:::

## ✨♻️ JavaScript 엔진 원리 시각화 1. Event Loop

Event Loop는 모든 JavaScript 개발자들이 한번쯤은 알고 넘어가야 하는개념입니다. 하지만 막상 처음 보면 이해하기 너무 어려워요. 그래서 gif로 간단히 설명해드리겠습니다.

<aside>
👉 우선 가장 먼저, Event Loop란 무엇이고, 우리가 왜 알아야 하는건가요?

</aside>

JavaScript는 single-threaded입니다. 어떤 시점에 단 하나의 task만 처리 가능하죠. 하지만 컴퓨터는 매우 빨라서 task 하나 처리하는데 찰나의 순간밖에 걸리지 않습니다. 그래서 이건 대부분의 경우 별로 중요한 개념이 아니라고 생각하는 사람이 많아요.

하지만 하나의 task가 30초씩 걸린다면 어떨까요? 사용자는 그 30초를 손놓고 기다려야 합니다. 웹페이지에서 JavaScript Engine은 브라우저가 돌리기 때문에 그 30초가 지나기 전에 우리는 아무것도 볼 수 없는 상태가 되죠. 아무도 이런 웹사이트는 원하지 않습니다😇

다행히도 브라우저가 제공하는 몇몇 기능들로 이런 문제를 해결할 수 있습니다. 그 중 하나가 바로 Web API입니다. Web API는 setTimeout, HTTP request와 같은 DOM API를 포함합니다. 이것이 async하고 non-blocking한 동작을 가능하게 해줍니다

---

우리가 함수를 하나 실행한다고 가정해봅시다. 그 함수는 call stack이라는 곳에 쌓입니다. call stack은 browser 가 아니라 JavaScript Engine의 일부분이에요. stack은 다들 알다시피 FILO 구조입니다(먼저 들어온 데이터가 나중에 나간다) 함수가 값을 리턴하고 나면, 그 함수는 call stack에서 사라집니다 👋 (`pop`됩니다)

아래 예시를 함께 볼게요.

1. 먼저 greet함수가 call stack에 들어왔다가 undefined를 리턴하고 pop됩니다. 다음으로 respond가 call stack에 쌓입니다. 그림의 오른쪽을 보면, `respond`라는 함수는 `setTimeouts`을 리턴합니다. 그런데 같은 함수인 이 setTimeout은 call stack이 아니라 Web API에 의해 다뤄집니다. 그 이유는 Web API의 역할이 setTimeout같이 시간이 오래걸리는 함수를 main thread가 막히지 않도록 따로 처리하는 것이기 때문입니다.

![https://res.cloudinary.com/practicaldev/image/fetch/s--44yasyNX--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gid1.6.gif](https://res.cloudinary.com/practicaldev/image/fetch/s--44yasyNX--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gid1.6.gif)

1. 그래서 아래 그림처럼, `setTimeout`의 callback인 `()⇒{return 'Hey'}`이 Web API로 이동합니다. 이와 동시에 call Stack에서는 `response()` 함수가 pop되어 사라집니다. 두 함수(`response()`, `setTimeout`)모두 어떤걸 리턴했으니 사라지는 것이지요.

![https://res.cloudinary.com/practicaldev/image/fetch/s--d_n4m4HH--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif2.1.gif](https://res.cloudinary.com/practicaldev/image/fetch/s--d_n4m4HH--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif2.1.gif)

1. 한편, setTimeout 함수의 콜백이 넘어간 Web API에서는 콜백과 함께 넘긴 시간값만큼 타이머가 동작합니다. 여기선 1s(1000ms) 겠네요? 1초의 시간이 흐르면 당연히 call stack으로 넘어가서 실행이 될 것으로 추측할 수 있지만 현실은 그렇지 않습니다. 아래 그림과 같이, call stack 대신에 queue라는 공간으로 넘어갑니다.

![https://res.cloudinary.com/practicaldev/image/fetch/s--MewGMdte--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif3.1.gif](https://res.cloudinary.com/practicaldev/image/fetch/s--MewGMdte--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif3.1.gif)

이 부분에서 햇갈릴 수 있습니다. 콜백함수는 곧바로 callStack으로 이동하는게 아닙니다. queue는 FIFO인 자료구조로서 queue에 쌓인 순서대로 값을 리턴할 준비를 하고 있습니다.

1. 이 부분이 이번 Event Loop 파트의 핵심입니다. Event Loop는 Queue와 Call Stack을 연결해주는 역할을 합니다. call stack이 비어있다면, 즉 모든 call stack이pop된 상태가 되면 queue의 첫번째 아이템이 call stack에 쌓입니다. 이 경우는 다른 함수는 호출되지 않고, 콜백 함수가 queue의 첫번째 아이템인 시점에 call stack이 empty라는 뜻입니다.

![https://res.cloudinary.com/practicaldev/image/fetch/s--b2BtLfdz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif4.gif](https://res.cloudinary.com/practicaldev/image/fetch/s--b2BtLfdz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif4.gif)

1. 마지막 단계입니다. 콜백 함수는 call stack에 쌓입니다. 그리고 "Hey"라는 값을 리턴한 후 call stack에서 pop되죠.

![https://res.cloudinary.com/practicaldev/image/fetch/s--NYOknEYi--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif5.gif](https://res.cloudinary.com/practicaldev/image/fetch/s--NYOknEYi--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif5.gif)

---

위의 설명은 재미있게 읽었을지라도 실제 코드에서 어떻게 동작하는지 명확하지 않을 수 있어 아래 예시를 준비했습니다. 콘솔에 어떤 로그가 찍히는지 맞춰보세요.

```tsx
// 선언부
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 500);
const baz = () => console.log("Third");

// 실행부
bar();
foo();
baz();
```

이해 되셨나요? 이 코드를 브라우져 상에서 돌렸을 때 어떤 일이 일어나는지 확인해보겠습니다.

![https://res.cloudinary.com/practicaldev/image/fetch/s--BLtCLQcd--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif14.1.gif](https://res.cloudinary.com/practicaldev/image/fetch/s--BLtCLQcd--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif14.1.gif)

1.  먼저, bar를 호출합니다. `bar` 는 `setTimeout`함수를 리턴합니다.
2.  `setTimeout` 에 넘긴 콜백이 Web API로 이동합니다, `setTimeout` 함수와 `bar` 는 call stack에서 pop됩니다.
3.  0.5초의 타이머가 돌고, 동시에 `foo` 가 호출되고 `First`를 콘솔에 출력하고 pop됩니다. 이 때,  `foo` 는 리턴값이 없으므로 undefined를 리턴하고 pop됩니다. 뒤이어 `baz` 가 호출되며 똑같이 pop됩니다. 이 즈음에 Web API에 있던 timeout callback은 queue로 이동합니다.
4.  `baz` 가 `Third` 를 콘솔에 찍고 pop됩니다. 마침내 call stack이 비었습니다. Event Loop는 call stack이 비어있는것을 확인하고 queue에 있던 콜백을 call stack으로 이동시킵니다.
5.  마침내 콜백함수는 `Second` 를 로그에 찍고 pop됩니다.

---

위의 내용을 몰라도 에러 잘 찾고, 효율적으로 코드 작성하는 방법을 알면 크게 상관 없습니다만 엔진의 동작 원리를 알고 접근하면 더 많은 부분을 생각할 수 있으니 꼭 이해하고 넘어가셨으면 좋겠습니다 🤖
