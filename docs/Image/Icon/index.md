---
sidebar_position: 2
title: 아이콘 (Icon)
---

## 아이콘 (Icon)

아이콘은 간단한 선과 면을 통해 상황 및 메시지를 전달하는 도구입니다.

겟차 내에서는 서비스 전반에 걸쳐 활용되는 시스템 아이콘들과 각종 컨텐츠에 활용되는 컨텐츠 아이콘이 있습니다.

## 코드

아이콘 네이밍 규칙에 따라 typeScript의 template literal로 정의해 이름으로 조회하고 사이즈만 입력하여 아이콘을 호출하는 컴포넌트를 활용합니다.

```tsx

// 아래는 Icon 타입
type ICON_CATEGORY = 'icon' | 'brand' | 'partner' | 'getcha';
type ICON_STYLE = 'outlined' | 'filled';
type ICON_NAME =
	| 'alarm'
	| 'appStore'
	| 'arrow'
	| 'arrowLine'
    ... 중략

export type ICON = `${ICON_CATEGORY}-${ICON_STYLE}-${ICON_NAME}`;


```

사용할 땐 다음과 같이 호출하면 됩니다.

```tsx
import { Icon } from "Getcha-UI-kit/native";

return <Icon name="icon-outline=alarm" size={24} />;
```
