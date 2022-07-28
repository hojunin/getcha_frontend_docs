---
sidebar_position: 4
title: 클릭커블 뷰 (Touchable)
---

## 클릭커블 뷰(Touchable)

클릭커블 뷰는 [React Native의 Pressable](https://reactnative.dev/docs/pressable) 컴포넌트에 기본 기능을 결합한 컴포넌트입니다.

![리액트 네이티브 프레서블](https://d33wubrfki0l68.cloudfront.net/436d715612d6a5ab228b9fd41f33f799f0c3e6d3/40bdd/docs/assets/d_pressable_pressing.svg)

앱 내에서 손가락으로 터치하여 **interaction**을 일으키는 모든 컴포넌트 내에서 활용됩니다.

특정 시간 내에 다시 누르지 못하게 하거나, 권한이 없으면 인터렉션을 중단하는 기능, 모든 터치 동작에서 이벤트 로그 수집을 하는 기능 등을 내장했고, 이 컴포넌트로 모든 터치 가능한 컴포넌트를 만들어 그 기능을 전역에서 활용합니다.

## 구현 코드 (일부)

```tsx
...

const onPressTouchable = (e) => {
  // * 다중 호출 방지 기능
  if (preventSerialClicksThrottle > 0 && isPreventing) return;

  // * 권한 체크 기능
  if (permission) permissionChecker();

  // * 이벤트 로그 함수 호출 기능
  if (isEvents(events)) {
    events.map(handleEvent);
  }
  // * 최종 콜백 호출
  preventSerialClicksWrapper(() => onPress(e));
};

return (
  <Pressable
    activeOpacity={0.5}
    {...touchableProps}
    onPress={onPressTouchable}
  >
    {children}
  </Pressable>
);
...
```
