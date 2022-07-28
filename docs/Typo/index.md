---
sidebar_position: 3
title: 텍스트 (TypoGraphy)
---

## 텍스트

텍스트 컴포넌트는 Android와 IOS를 아우르는 사용자들에게 동일한 경험을 선사하기 위한 타이포그레피 컴포넌트입니다.

제목은 크고 시원시원하게, 줄글은 보기에 답답하지 않게. 겟차의 주요 사용자를 고려하여 결정하여 구현했습니다.

텍스트 컴포넌트는 그 자체로 구현체이기 때문에 파생되는 컴포넌트는 없다고 볼 수 있습니다.

:::info 겟차 디자인 시스템

[겟차 디자인 시스템 - 타이포그레피](https://zeroheight.com/759a9cc46/p/74fe35-typography/b/34edf2)를 기반으로 만들어졌습니다.

:::

## 코드

기본 텍스트 컴포넌트를 정의합니다.

```tsx
const CustomText = styled.Text`
... 중략
  font-family: ${({ isBold }) =>
    isBold ? "SpoqaHanSansNeo-Bold" : "SpoqaHanSansNeo-Medium"};
`;
...
```

그리고 기본 컴포넌트를 상속받아 스타일을 추가한 Styled-Component를 생성해 객체 하나에 담는 작업을 진행합니다.

```tsx
const TS = {};

TS.Heading24 = styled(CustomText)`
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.3px;
`;
```

마지막으로 TX 객체에 Text 기본 property들을 전달하는 컴포넌트 객체들을 담습니다.

```tsx
const TX = {};

TX.H24 = (props) => (
  <TS.Heading24 isBold {...props}>
    {props.children}
  </TS.Heading24>
);
```
