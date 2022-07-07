---
sidebar_position: 2
title: 버튼 (Button)
---

# 버튼

Getcha 서비스 내에서 사용되는 버튼 컴포넌트입니다.

## 사진

---

이곳에는 Case 단위 사진과 설명이 들어갑니다.

## 사용법

---

```tsx
import { Button } from 'Getcha-Library/native'

<Button
	type="primary"
	label="좋아요"
	onPress={onPressButton}
	onPressClear={onPressClear}
	...
/>
```

## Properties

---

| property        | type            | 설명                                                                                                                         | default |
| --------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------- |
| type            | buttonType      | 버튼 타입입니다.                                                                                                             | plain   |
| label           | string          | 버튼 라벨입니다.                                                                                                             | null    |
| theme           | buttonThemeType | 버튼 테마입니다. buttonStyles로 override해서 사용하실 수도 있습니다.                                                         | solid   |
| icon            | iconName        | 버튼 라벨 옆(좌,우)에 아이콘을 삽입됩니다. string을 넣을 경우 Getcha Icon이 로드되며 따로 아이콘 컴포넌트를 넣으셔도 됩니다. | null    |
| disabled        | boolean         | 버튼을 비활성화합니다.                                                                                                       | false   |
| disabledPressed | function        | 버튼을 비활성화한 상태에서 사용자가 버튼을 눌렀을 시 호출하는 콜백함수입니다.                                                | null    |
