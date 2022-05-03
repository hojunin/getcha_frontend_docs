---
sidebar_position: 3
title: 토스트
---

# 토스트

토스트는 사용자에게 간단한 메시지를 전달하는 컴포넌트입니다. 주로 일정 시간동안 특정 위치에 노출되며 상호작용의 결과에 대한 메시지를 보여주는 경우에 사용됩니다.

## 사진

---

![스크린샷 2022-05-03 오후 9.02.33.png](./toast.png)

## 사용법

---

Toast 컴포넌트를 앱 최상단에 선언하고 Context Api나 Redux, Mobx와 같은 State Library를 활용하여 제어하세요.

### 선언부

```tsx
//App.tsx
...
return (
	...
	<Toast />
	...
)
```

### 사용부

```tsx
const dispatch = useAppDispatch();

dispatch(handleToastShowAction({ toastMessage: "야호 ~ 😵" }));
```

## Properties

---

| name         | type      | 설명                                     | default |
| ------------ | --------- | ---------------------------------------- | ------- |
| isToastShow  | boolean   | 토스트 박스                              | false   |
| toastMessage | string    | 토스트 메시지 값입니다.                  | ‘’      |
| children     | ReactNode | 간단한 커스텀 메시지를 넣을 수 있습니다. | null    |
