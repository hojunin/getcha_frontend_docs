---
sidebar_position: 2
title: useUpdateEffect
---

# useUpdateEffect

---

useEffect는 mount(최초 렌더링) 시 무조건 1회 실행됩니다. 하지만 몇몇 경우에서는 **mount 시점을 제외하고**, **Dependency가 변경될 때만** 호출되는 useEffect Hook을 사용해야 할 때가있어요.

useUpdateEffect는 **mount 시점의 콜백 호출을 거부**하고 이후 **dependency가 변경될 때만** 콜백함수를 호출하는 훅 입니다.

### parameter type

React에서 제공하는 useEffect 훅의 Parameter와 일치합니다.

| parameter | type     |
| --------- | -------- |
| callback  | function |
| deps      | any[]    |

### return type

| return          | type          |
| --------------- | ------------- |
| useUpdateEffect | hook callback |

## 코드

---

간단히 ref로 mount 여부를 체크하고 콜백 호출 여부를 판단합니다.

```tsx
import { useRef, useEffect } from "react";

const useUpdateEffect = (callback, deps) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    } else {
      return callback();
    }

    return () => {};
  }, deps);
};

export default useUpdateEffect;
```

## 사용법

---

useUpdateEffect를 가져와서 useEffect를 사용하듯 활용하시면 됩니다.

```tsx
import useUpdateEffect from 'getcha-frontend/utils/hooks/useUpdateEffect';
...

useUpdateEffect(() => {

		const debounce = setTimeout(() => {
			if (!isError) {
				if (bookmarked) {
					subscribe();
					return;
				}
				unSubscribe();
			}
		}, 300);

		return () => clearTimeout(debounce);
	}, [isError, bookmarked]);

...
```
