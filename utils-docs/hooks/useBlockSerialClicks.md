---
sidebar_position: 1
title: useBlockSerialClicks
---

# useBlockSerialClicks

이 훅은 연속된 **콜백의 호출을 막습니다**. 사용자가 임의로 버튼을 여러번 클릭할 수는 있으나 이를 통해 **API를 여러번 요청**한다면 서버에 장애가 올 수 있습니다. useBlockSerialClicks는 지정된 시간 내에 다시 버튼을 눌러도, 콜백이 호출되지 않도록 막습니다.

### parameter type

| input         | type   | default | 설명                                                          |
| ------------- | ------ | ------- | ------------------------------------------------------------- |
| throttle_type | number | 2000    | 콜백을 실행하고 몇ms 뒤에 다시 실행할 수 있는지를 설정합니다. |

### return type

| return                     | type     | 설명                                                |
| -------------------------- | -------- | --------------------------------------------------- |
| preventSerialClicksWrapper | function | 연속 실행을 방지하고 싶은 함수를 감싸는 함수입니다. |
| isPreventing               | boolean  | 현재 해당 콜백이 호출 방지된 상태인지 여부입니다.   |

## 코드

---

```tsx
import { useEffect, useState } from "react";

const usePreventSerialClicks = (throttle_time = 2000) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      const timeout = setTimeout(() => {
        setClicked(false);
      }, throttle_time);
      return () => clearTimeout(timeout);
    }
  }, [clicked]);

  const preventSerialClicksWrapper = (callback: () => void) => {
    if (!clicked) {
      callback();
      setClicked(true);
    }
  };

  return { preventSerialClicksWrapper, isPreventing: clicked };
};

export default usePreventSerialClicks;
```

## 사용법

---

훅을 호출할 때 파라미터를 넣으면 해당 시간만큼 호출을 방지해주는 함수와 방지상태값을 리턴해줍니다.

이를 활용해 간단히 콜백을 preventSerialClicksWrapper함수로 감싸면 끝입니다.

만약 아예 누르지 못하는 형태를 UI로 까지 컨트롤하고 싶다면 isPreventing 값을 활용하면 됩니다.

```tsx
...
const { preventSerialClicksWrapper, isPreventing } = usePreventSerialClicks(1000);

const onPressButton = () => {
	// do something
}

return <Button
		onPress={preventSerialClicksWrapper(onPressButton)}
		disabled={isPreventing}
		/>
```
