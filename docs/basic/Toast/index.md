---
sidebar_position: 3
title: 토스트 (Toast)
---

# 토스트

토스트는 사용자에게 간단한 메시지를 전달하는 컴포넌트입니다. 주로 일정 시간동안 특정 위치에 노출되며 상호작용의 결과에 대한 메시지를 보여주는 경우에 사용됩니다.

## 사진

---

![스크린샷 2022-05-03 오후 9.02.33.png](./toast.png)

## 사용법

---

Toast 컴포넌트를 앱 최상단에 선언하고 Toast를 제어할 ref를 넘깁니다. 그리고 간단하게 static 메소드로 제어하세요.

### 선언부

```tsx
//App.tsx
...
return (
	...
	<Toast ref={(ref) => Toast.setRef(ref)}/>
	...
)
```

### 사용부

```tsx
// 간단한 메시지 - string
Toast.show("토스트 메시지")

// 커스텀 메시지 - JSX
Toast.show(()=> <Text style={styles.toast}>커스텀 메시지<Text/>)
```

## Properties

---

| name     | type      | 설명                                     | default |
| -------- | --------- | ---------------------------------------- | ------- |
| message  | string    | 토스트 메시지 값입니다.                  | ‘’      |
| children | ReactNode | 간단한 커스텀 메시지를 넣을 수 있습니다. | null    |

## Method

---

| name | 설명                                                                                           |
| ---- | ---------------------------------------------------------------------------------------------- |
| show | 토스트 메시지를 출력합니다. 간단한 메시지를 string으로 넣거나 Custom Message를 JSX로 넣습니다. |
