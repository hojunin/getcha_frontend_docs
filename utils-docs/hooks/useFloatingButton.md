---
sidebar_position: 3
title: useFloatingButton
---

# useFloatingButton

---

플로팅 버튼은 여러 서비스에서 항시 제공해야하는 인터렉션에 자주 사용되는 UI입니다. 주로 한가지 정보만 보여줄 수 있기 때문에 Getcha 팀은 사용자의 스크롤 방향을 감지하여 다른 기능을 하는 버튼을 보여줍니다.

useFloatingButton은 사용자의 스크롤 방향을 감지합니다.

### parameter type

없음.

### return type

| return    | type                   | 설명                                                                           |
| --------- | ---------------------- | ------------------------------------------------------------------------------ |
| direction | "up" or "down" or null | 현재 사용자의 스크롤 방향입니다.                                               |
| onScroll  | function               | VirtualizedList 컴포넌트를 상속받은 컴포넌트에서 사용되는 onScroll 함수입니다. |

## 코드

---

사용자의 스크롤 방향에 따라 direction을 조정해주는 훅 입니다.

```tsx
import { useRef, useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";

export type FLOATING_DIRECTION = "down" | "up" | null;
// Floating Button Handling
const useFloatingButton = () => {
  const [direction, setDirection] = useState<FLOATING_DIRECTION>("up");
  const axisY = useRef(0);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentAxisY = e.nativeEvent.contentOffset.y;
    if (currentAxisY <= 0) {
      setDirection("up");
    } else if (axisY.current === currentAxisY) {
      // Do nothing
    } else if (axisY.current < currentAxisY) {
      setDirection("up");
    } else if (axisY.current > currentAxisY) {
      setDirection("down");
    }
    axisY.current = currentAxisY;
  };
  return { direction, onScroll };
};
export default useFloatingButton;
```

## 사용법

---

스크롤 이벤트가 있는 컴포넌트에는 onScroll 함수를, 플로팅 버튼에는 direction state를 넘겨줍니다. 플로팅 버튼 컴포넌트 내부에서 이 direction 값을 가지고 사용자의 스크롤 방향에 따라 모양을 바꿔주시면 됩니다.

```tsx
const { direction, onScroll } = useFloatingButton();

return (
  <>
    <ScrollView onScroll={onScroll}>...</ScrollView>

    <FloatingButton direction={direction} />
  </>
);
```
