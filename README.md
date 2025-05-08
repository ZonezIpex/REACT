<h1>202130413 신민수</h1>

# 📌 React로 사고하기
<h1>🗓 **2025-05-08 / 9번째 수업**</h1>

---

## 💭 React를 이용한 활용

React를 사용하면, 우리가 UI를 설계하고 사고하는 방식 자체가 달라집니다.

---

### ✅ 핵심 요약

- React에서는 UI를 **컴포넌트(component)**라는 독립적인 조각으로 나눕니다.
- 각 컴포넌트는 **다양한 시각적 상태(visual states)**를 가질 수 있습니다.
- 컴포넌트 간에는 **데이터가 흐르며 상호작용**합니다.

---

### 🎯 React 개발 방식

- UI는 **작은 컴포넌트 단위로 분해**됩니다.
- 이 컴포넌트들을 조합하여 전체 App이 구성됩니다.
- 데이터는 **부모 → 자식 방향으로 전달(props)**되고, 상태(state)는 **필요한 컴포넌트 내부에서 관리**됩니다.

---

## 📘 예제 목표

이 자습서에서는 **검색 가능한 상품 테이블**을 만드는 과정을 통해  
React 컴포넌트들이 어떻게 함께 작동하는지를 배워봅니다.

> React는 컴포넌트 기반(Component-Based)으로 UI를 구성합니다.  
> 이 장에서는 작은 컴포넌트들이 모여 전체 App으로 완성되는 과정을 체계적으로 살펴봅니다.

---

## 🧩 Step 1: UI를 컴포넌트 계층으로 쪼개기

React 앱을 만들기 위해서는 먼저 UI를 **논리적인 컴포넌트 단위로 나누는 것**이 중요합니다.

---

### ✅ 핵심 요약

- 먼저, **모의 시안(Mockup)**에서 모든 컴포넌트와 하위 컴포넌트를 구분하세요.
- 각 컴포넌트 주위에 **박스를 그리고 이름을 붙이는 것**부터 시작합니다.
- 디자이너가 있다면, 디자인 툴에 이미 컴포넌트 이름이 명시되어 있을 수 있습니다. **확인해보세요!**

---

### 💡 컴포넌트를 나누는 기준

**관점에 따라 컴포넌트를 나누는 방식은 다를 수 있습니다:**

#### 👨‍💻 프로그래밍 관점 (함수/객체 지향)

- 새로운 함수나 객체를 만드는 것처럼 컴포넌트를 정의합니다.
- **단일 책임 원칙(SRP)**을 따르는 것이 이상적입니다.  
  → 하나의 컴포넌트는 **하나의 역할만 수행**해야 합니다.
- 컴포넌트가 너무 커지면 **작은 하위 컴포넌트로 분해**하세요.

#### 🎨 CSS 관점 (스타일링 중심)

- CSS의 클래스 선택자를 무엇으로 만들지 고민하면서 **시각적 기준**으로 나눌 수 있습니다.
- 단순히 시각적 구조를 기준으로도 컴포넌트를 나눌 수 있으며, 이는 스타일링과도 밀접합니다.

---

> 컴포넌트를 명확히 나누는 것이 나중에 재사용성과 유지보수성을 높이는 핵심입니다!

---

## 🧩 Step 1: UI를 컴포넌트 계층으로 쪼개기

React 앱을 만들기 위해서는 먼저 UI를 **논리적인 컴포넌트 단위로 나누는 것**이 중요합니다.

---

### ✅ 핵심 요약

- 먼저, **모의 시안(Mockup)**에서 모든 컴포넌트와 하위 컴포넌트를 구분하세요.
- 각 컴포넌트 주위에 **박스를 그리고 이름을 붙이면서 시작**해 보세요.
- 디자이너와 협업 중이라면, **디자인 툴**에 이미 컴포넌트 이름이 정해져 있을 수도 있습니다.  
  👉 꼭 한 번 여쭤보세요!

---

### 💡 컴포넌트를 나누는 다양한 관점

컴포넌트를 나누는 기준은 개인의 **배경(디자인 vs 개발)**에 따라 달라질 수 있습니다:

---

#### 👨‍💻 Programming 관점

- **새로운 함수나 객체**를 만드는 것과 비슷한 방식으로 생각해 보세요.
- **단일 책임 원칙(Single Responsibility Principle)**을 적용한다면,  
  → 하나의 컴포넌트는 **한 가지 역할만** 수행해야 합니다.
- 컴포넌트가 점점 커진다면, **더 작은 하위 컴포넌트**로 쪼개는 것이 좋습니다.

---

#### 🎨 CSS 관점

- 스타일링을 담당한다면, **어떤 클래스 선택자**를 만들지 생각해 보세요.
- 실제 컴포넌트는 **CSS 클래스보다 좀 더 세분화**되어 있는 경우가 많습니다.

---

#### 🧱 Design 관점

- UI 구조에 따라 **디자인 계층을 어떻게 나눌지** 고민해 보세요.
- 디자이너가 설정한 시각적 구성 요소를 **재사용 가능한 단위로 쪼개는 것**이 핵심입니다.

---

> 개발자든 디자이너든, 목적은 명확합니다:  
> **유지보수 가능하고 재사용 가능한 구조를 만들기 위한 컴포넌트 분해!**

---

---

## 🧩 Step 2: UI를 컴포넌트로 쪼갠 계층을 수정

UI를 쪼개는 작업은 종종 **데이터 구조를 기반으로** 더 쉽게 진행할 수 있습니다.

---

### ✅ 핵심 요약

- **JSON 데이터가 잘 구조화**되어 있다면, 이는 UI의 컴포넌트 구조에도 그대로 반영될 수 있습니다.
- 이유는 단순합니다:  
  **UI와 데이터 모델은 대부분 같은 정보 구조(Information Architecture)**를 따르기 때문입니다.
- 따라서, UI를 구성할 때는 **데이터와 매칭되는 컴포넌트 구조**를 설계하세요.

---

### 💡 예시: 컴포넌트 생성 여부 판단 기준

예를 들어 `ProductTable` 컴포넌트를 보면,  
"Name"과 "Price" 레이블이 있는 **테이블 헤더 전용 컴포넌트**는 따로 만들지 않았습니다.

- 이유: 이 헤더는 단순하므로 굳이 컴포넌트로 분리하지 않아도 됩니다.
- 하지만 **정렬 기능** 등 추가 기능이 들어간다면?  
  👉 `ProductTableHeader`와 같은 **독립 컴포넌트로 분리하는 것이 더 적절**합니다.

---

### 🧱 계층 구조로 정리하기

이제 전체 UI의 **컴포넌트 계층 구조**를 정리해보겠습니다.

#### 📦 최상위 컴포넌트

- `FilterableProductTable`: 모든 컴포넌트를 포함하는 최상위 래퍼
- `SearchBar`: 검색 입력 필드와 체크박스 UI 제공
- `ProductTable`: 상품 테이블 렌더링
- `ProductCategoryRow`: 상품 카테고리별 제목 표시
- `ProductRow`: 개별 상품 항목 표시

---

> 이처럼, **기능 단위로 UI를 쪼개고**, 계층 구조로 정리하면 유지보수와 확장이 훨씬 쉬워집니다.

---

---

## 🛠️ Step 2: 정적인 버전 구현하기

컴포넌트 계층 구조가 준비되었으니, 이제 실제 UI를 구현해볼 시간입니다.

---

### ✅ 핵심 요약

- 먼저 **상호작용 없는 정적인 버전**을 만들어 UI 구조를 구축합니다.
- **데이터 모델을 기반으로** 컴포넌트들을 화면에 렌더링하는 데 집중하세요.
- 이후 단계에서 **상호작용 기능(state)**을 추가하게 됩니다.

---

### 💡 정적인 버전을 먼저 만드는 이유

- 정적인 버전은 **타이핑이 많지만, 생각할 것이 적습니다.**
- 반대로 상호작용 기능을 추가할 때는 **타이핑은 적지만, 더 많은 사고와 설계가 필요**합니다.

---

### 📦 구현 전략

1. **데이터를 props로 전달하며** 컴포넌트 구성하기
2. **state는 사용하지 않습니다**  
   → 지금은 "변하지 않는" 정적인 데이터를 화면에 그리기만 합니다.

---

### 🧱 Props 전달 방식

```txt
부모 컴포넌트 → 자식 컴포넌트로 props를 통해 데이터 전달
```

---

### 🧭 구현 순서 전략
🡻 하향식 (Top-down)
- 최상위 컴포넌트부터 시작해서 하위 컴포넌트를 **하나씩** 구현

> 예: FilterableProductTable → SearchBar / ProductTable → …

- 🡹 상향식 (Bottom-up)
- 가장 작은 단위인 하위 컴포넌트부터 시작

> 예: ProductRow → ProductCategoryRow → ProductTable → …

🔹 예제가 단순하면 상향식이 쉽고 빠릅니다.
🔸 프로젝트가 복잡할수록 하향식 구조 + 테스트 기반 **개발이 유리**합니다.

---

## 🛠️ Step 2: 정적인 버전 구현하기

앞서 만든 컴포넌트 계층 구조를 바탕으로, 실제 UI를 구현해 봅니다.  
이 단계에서는 **상호작용 없이 정적인 데이터만을 이용해 UI 구조를 설계**합니다.

---

### ✅ 핵심 목표

- 데이터 모델을 기반으로 UI를 렌더링하는 **정적인 컴포넌트 구성**
- props만 사용하고, **state는 아직 사용하지 않음**
- 계층 구조에 따라 top-down 또는 bottom-up 방식으로 개발 가능

---

## 📦 프로젝트 초기 세팅

### 1️⃣ 불필요한 파일 정리

- `src/` 폴더에서 아래 파일을 삭제합니다:
  - `logo.svg`
  - `setupTests.js` 등 테스트 관련 파일

### 2️⃣ App.js 초기화

`App.js` 내용을 아래처럼 초기화해 주세요:

```jsx
// src/App.js
export default function App() {
  return (
    <>
      <h1>My React App</h1>
    </>
  );
}
```

## 🗂️ 정적 데이터 추가
 > App.js 파일 아래쪽에 데이터를 정의합니다:

 ```jsx
const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];
```

**이 데이터는 이후 각 컴포넌트에 props로 전달되어 화면에 표시됩니다.**

### 🧩 컴포넌트 설계 시작
- 최상위 컴포넌트 구조
- 이제 FilterableProductTable 컴포넌트를 구현할 준비가 되었습니다.

> 컴포넌트 계층 구조는 다음과 같습니다:

```txt
FilterableProductTable
├── SearchBar
└── ProductTable
    ├── ProductCategoryRow
    └── ProductRow

```

> FilterableProductTable은 전체 구조를 관리하며, 하위 컴포넌트에 데이터를 전달합니다.


---

---

[👉 React 실습 전체 흐름 보기](https://gptonline.ai/ko/)

---

## 🔄 Step 3: 최소한의 데이터만 이용해서 완벽하게 UI State 표현하기

정적인 UI를 완성했다면, 이제는 **사용자와 상호작용할 수 있는 동적인 상태(state)**를 구현할 차례입니다.

---

### ✅ 핵심 목표

- **UI를 상호작용 가능하게 만들기 위해서는 상태(State)**가 필요합니다.
- 사용자의 입력이나 동작에 따라 **기반 데이터 모델이 변화**해야 합니다.
- React에서 이런 변화를 **state를 통해 관리**할 수 있습니다.

---

### 📌 핵심 개념: 상태란 무엇인가?

- `state`는 앱이 **기억해야 하는 변경 가능한 데이터**입니다.
- 예: 체크박스 상태, 입력창 텍스트, 정렬 기준 등
- **정적인 데이터는 props로, 변화하는 데이터는 state로** 관리합니다.

---

### 🔁 Don't Repeat Yourself 원칙 (중복 배제)

- state는 **최소한의 필수 데이터만 저장**해야 합니다.
- 나머지 정보는 state에서 **계산하거나 유도(derive)**할 수 있습니다.

---

### 💡 예시: 쇼핑 리스트

```jsx
// ❌ 잘못된 예시
const [itemCount, setItemCount] = useState(5); // 중복 데이터

// ✅ 올바른 접근
const [items, setItems] = useState(["사과", "바나나", "수박"]);
const itemCount = items.length; // 필요할 때 계산
```

> itemCount는 items.length로 유도할 수 있기 때문에 state로 가질 필요가 없습니다.
> 이런 방식으로 중복을 줄이고, 상태를 단순화하세요.

---



# 📌 State 끌어올리기 ver.2
<h1>🗓 **2025-04-18 / 8번째 수업(보강)**</h1>

---

## ⏳ 시간 여행 기능 준비하기

이제 우리는 게임의 과거 상태를 저장하고,  
원하는 시점으로 "되돌아가기" 기능을 구현하려고 합니다.

---

### ✅ 핵심 요약

- `history` 배열에는 게임의 **모든 이전 상태(`squares`)**가 저장됩니다.
- `map()` 함수를 사용해 `history`의 각 요소와 인덱스를 순회하며 **무브 리스트**를 생성합니다.

---

### 🎯 각 무브에 대해:

- `move === 0`이면 → `"Go to game start"`
- `move > 0`이면 → `"Go to move #n"`

이 텍스트는 `description` 변수에 저장됩니다.

- `onClick` 이벤트로 각 버튼을 클릭 시 해당 무브로 이동하도록 구현됩니다.
- `map()` 내부에서는 `move` 인덱스를 활용하여 해당 상태의 `squares`를 참조합니다.

- 버튼 JSX 요소들은 `moves` 배열에 저장되며, 이후 렌더링됩니다.

---

### 💡 코드 개요 예시

```jsx
const moves = history.map((squares, move) => {
  const description = move > 0
    ? `Go to move #${move}`
    : 'Go to game start';

  return (
    <li key={move}>
      <button onClick={() => jumpTo(move)}>{description}</button>
    </li>
  );
});
```

---

---

## 📘 보충 설명: map과 history.map의 구조 이해

> 문서 번역이 다소 어렵게 느껴질 수 있으므로,  
> `history.map((squares, move) => {})` 구문을 다시 자세히 정리해보겠습니다.

---

### 🧱 map 함수 기본 구조

- 기본 구문:  
  `array.map(callbackFn)`  
  또는 `array.map(callbackFn, thisArg)`

- 여기서 `thisArg`는 `this`의 바인딩을 지정할 때 사용되며,  
  **화살표 함수에서는 생략**됩니다.

- 예제에서는 오직 `callbackFn`만 사용하며,  
  `map()`의 인자로 들어간 화살표 함수는 **콜백 함수의 대체**입니다.

```js
const moves = history.map((squares, move) => { ... });
```

---

## 📘 보충 개념: map 함수의 사용 정리

> 지금까지 설명한 `history.map((squares, move) => { ... })` 구문을 예시와 함께 다시 정리합니다.

---

### 🔄 map의 구성 요소

- **원본 배열(history)**: `map()`이 호출된 대상 배열입니다.
- **인덱스(move)**: 현재 순환 중인 요소의 인덱스 번호입니다.
- **값(squares)**: 현재 순환 중인 요소의 실제 값입니다.

---

### 📌 map 함수의 실제 동작 예시

```jsx
const moves = history.map((squares, move) => { ... });
```

> 예를 들어 `History` 배열이 다음과 같은 상태라면

```jsx
history = [
  [null, null, null, null, null, null, null, null, null],        // move = 0
  ['X', null, null, null, null, null, null, null, null],         // move = 1
  ['X', 'O', null, null, null, null, null, null, null]           // move = 2
];
```

> 이때 `Map`은 다음과 같이 반복됩니다
- **순번	squares 값	move 값**
- *1	[null, null, ...]	0*
- *2	['X', null, ...]	1*
- *3	['X', 'O', null, ...]	2*

---

---

## 🔑 보충 개념: React에서 key 선택하기

리스트를 렌더링할 때, React는 각 항목을 식별하기 위해 `key`라는 속성을 사용합니다.  
`key`는 각 요소가 어떤 항목인지 구분하기 위한 **고유 식별자 역할**을 합니다.

---

### 📋 리스트 렌더링 시 React의 동작 방식

- React는 렌더링 후 **각 리스트 항목에 대한 정보를 저장**합니다.
- 리스트가 업데이트되면 **무엇이 변경되었는지** 판단해야 합니다.
- 항목은 **추가, 삭제, 재정렬, 업데이트**될 수 있습니다.

---

### 🧩 예시

```html
// 변경 전
<li>Alexa: 7 tasks left</li>
<li>Ben: 5 tasks left</li>

// 변경 후
<li>Ben: 9 tasks left</li>
<li>Claudia: 8 tasks left</li>
<li>Alexa: 5 tasks left</li>
```

> 개발자의 의도: `task` 수만 바뀐 것
> React의 판단: 순서가 바뀌고 `새로운 항목이 추가된 것`으로 인식

---

## ⚠️ 왜 문제가 될까?
React는 컴퓨터 프로그램이기 때문에, 사람의 의도를 추론하지 못합니다.

우리는 단순히 `task` 수가 바뀌었다고 생각하지만,
React는 항목이 `통째로` 바뀌었다고 판단할 수 있습니다.

✅ 해결책: key 속성 사용
key는 리스트에서 각 항목을 `고유하게 식별할 수 있는 값`으로 지정해야 합니다.

이를 통해 React는 어떤 항목이 같은 항목인지, 어떤 항목이 새로 추가되었는지 정확히 파악합니다.
```jsx
<li key={user.id}>Alexa: 7 tasks left</li>
```
> 항상 리스트 렌더링 시 고유한 `Key` 지정을 잊으면 안된다

---

## 🔄 key가 컴포넌트에 미치는 영향

- 리스트가 다시 렌더링되면 React는 **현재 리스트의 key**와  
  **이전 리스트의 key**를 비교합니다.

#### 상황별 작동 방식:

1. 현재 리스트에 **없던 key가 추가** → 새 컴포넌트 생성  
2. 이전에는 있었지만 **현재는 없는 key** → 컴포넌트 제거  
3. **key가 동일** → 컴포넌트 재사용 및 이동 처리

---

### 🎯 key가 중요한 이유

- React는 key를 기준으로 **컴포넌트를 식별**합니다.
- 컴포넌트를 다시 렌더링할 때 **key가 같으면 기존 state 유지**  
- key가 달라지면 **기존 컴포넌트 제거 + 새 컴포넌트 생성**

> 컴포넌트의 상태(state)를 유지하려면 key를 **일관성 있게 관리**하는 것이 중요합니다.

---




# 📌 State 끌어올리기
<h1>🗓 **2025-04-17 / 7번째 수업**</h1>


## 📁 시도해보기.

- `handleClick` 함수는 **JavaScript의 `slice()` 배열 메서드**를 사용하여 `squares` 배열의 사본인 `nextSquares`를 생성합니다.  
  (📚 참고 : [developer.mozilla.org](https://developer.mozilla.org))

- 그 다음 `handleClick` 함수는 `nextSquares` 배열의 첫 번째 `Squares(index [0])`에 `X`를 추가하여 업데이트합니다.

- `setSquares` 함수를 호출하면 **React는 컴포넌트의 `state`가 변경되었음을 감지**합니다.

- 그러면 `squares`의 `state`를 사용하는 컴포넌트(`Board`)와 그 하위 컴포넌트(보드를 구성하는 `Square` 컴포넌트)가 **다시 렌더링** 됩니다.

---

### 💡 중요한 포인트

> 이 설명은 문서의 코드 중 **`Board`가 `Square`를 포함하고 있음을 전제**합니다.

- JavaScript는 **클로저(Closure)**를 지원하기 때문에 내부 함수가(`handleClick`) 외부 함수(`Board`)에 정의된 변수 및 함수에 접근할 수 있습니다.

- `handleClick` 함수는 `squares`의 `state`를 읽고 `setSquares` 메서드를 호출할 수 있는데,  
  **이 함수는 `Board` 함수 내부에 정의되어 있기 때문입니다.**

---

## 🔁 모든 Square 업데이트하기

- 이제 보드에 X를 추가할 수 있게 되었지만 가능한 건 **오직 왼쪽 위 Square 뿐**입니다.

- `handleClick` 함수는 **왼쪽 위 `Square(index 0)`만 업데이트**하도록 하드코딩되어 있습니다.

- **모든 사각형을 업데이트할 수 있도록** `handleClick` 함수를 수정하겠습니다.

---

### ✍️ 구현 과제

9. `handleClick` 함수에 **업데이트할 `Square`의 `index`를 나타내는 인수 `i`**를 추가하세요.

```jsx
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    // ...
  );
}
```

---

## 🔁 함수 실행이 아닌 참조 전달하기

- 이제 `handleClick`에 **직접 인수를 전달하지 않고, 함수 참조로 넘기는 방법**을 배워야 합니다.

- 다음과 같이 **콜백 함수 형태**로 작성하면, `handleClick`이 즉시 실행되지 않고 클릭 시에만 실행됩니다.

```jsx
<Square value={squares[0]} onSquareClick={() => handleClick(0)} />
```

> ✅ 이 방법이 올바른 이유

- () => `handleClick(0)`는 새로운 함수를 생성하며, 해당 함수는 `클릭 이벤트가 발생할 때`까지 `실행되지 않습니다`.

- 이 방식은 `handleClick`의 실행을 렌더링 시점이 아닌, 클릭 이벤트 시점으로 미루게 됩니다.

- 결과적으로 무한 루프 없이 안전하게 원하는 `index`의 `Square`만 업데이트할 수 있습니다.

> 🧠 이처럼 렌더링 시 실행되는 코드와 이벤트 핸들러로 실행되는 코드를 명확히 분리하는 것은 `React`에서 매우 중요한 개념입니다.

---

## 🔁 상위 컴포넌트에서 state 관리하기

- 이제 `Board`가 모든 `state`를 관리하므로, **부모 `Board` 컴포넌트는 자식 `Square` 컴포넌트가 올바르게 표시될 수 있도록 `props`를 전달**합니다.

- `Square`를 클릭하면, 자식 `Square` 컴포넌트가 **부모 `Board` 컴포넌트에 `Board`의 `state` 업데이트**를 요청하게 됩니다.

- `Board`의 `state`가 변경되면, **`Board` 컴포넌트와 모든 자식 `Square` 컴포넌트가 자동으로 다시 렌더링** 됩니다.

- `Board` 컴포넌트에 속한 모든 `Square`의 `state`를 유지하면, **나중에 승자를 판단하는 로직을 쉽게 구현할 수 있습니다.**

---

## 🔁 클릭 시 상태 변경 흐름 정리하기

- 사용자가 `Board`의 **왼쪽 위 사각형을 클릭**하여 `X`를 추가하면 어떤 일이 발생하는지 **다시 한 번 정리**해 보겠습니다.

### 🧭 흐름 정리

1. **왼쪽 위 사각형**을 클릭하면 `button`이 `Square`로부터 받은  
   `onClick prop`의 함수가 실행됩니다.
   - `Square` 컴포넌트는 `Board`에서 해당 함수를 `onSquareClick props`로 전달받았습니다.
   - `Board` 컴포넌트는 JSX에서 직접 이 함수를 정의했습니다.
   - 이 함수는 `0`을 인수로 `handleClick`을 호출합니다.

2. `handleClick`은 인수 `0`을 사용하여 `squares` 배열의  
   첫 번째 요소(`null`)를 `"X"`로 업데이트합니다.

3. `Board` 컴포넌트의 `squares state`가 업데이트되어,  
   `Board`와 모든 자식 `Square` 컴포넌트가 다시 렌더링됩니다.
   - 이때 index가 `0`인 `Square`의 `value prop`이 `null`에서 `"X"`로 변경됩니다.

4. 최종적으로 **사용자는 왼쪽 위 사각형을 클릭한 후,  
   비어 있던 사각형이 `"X"`로 변경된 것을 확인하게 됩니다.**

---

## 🔁 사용자 정의 컴포넌트의 이벤트 prop 이해하기

> 💡 중요합니다!

- DOM `<button>` 엘리먼트의 `onClick` 속성은 **빌트인 컴포넌트이기 때문에,  
  React에서는 특별한 의미를 가집니다.**

- **사용자 정의 컴포넌트**(예: `Square`)의 경우,  
  prop의 이름은 사용자가 원하는 대로 자유롭게 지정할 수 있습니다.

- 예를 들어 `Square`의 `onSquareClick` prop이나 `Board`의 `handleClick` 함수에  
  어떤 이름을 붙여도 **동일하게 작동**합니다.

---

### ✅ React의 관례

- React에서는 주로 **이벤트를 나타내는 prop**에는 `onSomething` 같은 이름을 사용하고,  
  **이벤트를 처리하는 함수**는 `handleSomething` 같은 이름을 사용합니다.

예시:
- `onClick`, `onChange`, `onSubmit` 등은 props
- `handleClick`, `handleChange`, `handleSubmit` 등은 함수 이름

---

## 🧊 10단계: 불변성이 왜 중요할까요?

- `handleClick`에서는 기존 배열을 수정하는 대신, `slice()`를 호출하여  
  `squares` 배열의 **사본을 생성하는 방식**에 주목하세요.

- 그 이유를 설명하기 위해 **불변성과 그 중요성**에 대해 알아봅니다.

---

### 🔁 데이터를 변경하는 두 가지 방법

1. **데이터를 직접 변경**하여 값을 수정하는 방식  
2. **변경 사항이 있는 새 복사본**으로 데이터를 대체하는 방식 (React에서 선호)

---

### ❌ 직접 변경 예시

```jsx
const squares = [null, null, null, null, null, null, null, null, null];
squares[0] = 'X';
// Now `squares` is ["X", null, null, null, null, null, null, null, null];
```
> 복사 후 대체 예시

```jsx
const squares = [null, null, null, null, null, null, null, null, null];
const nextSquares = ['X', null, null, null, null, null, null, null, null];
// Now `squares` is unchanged, but `nextSquares` first element is 'X' rather than `null`
```

---

## 🚀 불변성이 주는 실제적인 이점

- 최종 결과는 같지만, **원본 데이터를 직접 변경하지 않음으로써** 여러 가지 이점을 얻을 수 있습니다.

---

### 🔎 왜 불변성이 중요한가요?

1. **복잡한 기능을 더 쉽게 구현할 수 있습니다.**

   - 불변성을 유지하면 상태 변경 내역을 추적하거나 롤백하는 기능을 만들기 수월해집니다.

2. 예를 들어, **"시간 여행" 기능**을 구현할 수 있습니다.

   - 우리는 이후 단계에서 게임의 진행 과정을 기록하고,  
     과거 상태로 "되돌아가기"를 구현할 예정입니다.

3. **실행 취소 및 재실행 기능**은 게임에만 국한된 것이 아니라,  
   다양한 앱에서 요구되는 일반적인 기능입니다.

4. **기존 데이터를 그대로 유지**하면,  
   언제든지 이전 버전으로 재사용하거나 초기화할 수 있습니다.

---

## ⚙️ 불변성과 렌더링 최적화

2. **불변성을 사용하면 또 다른 중요한 장점**도 있습니다.

---

### 🧠 성능 관점에서의 이점

- 기본적으로 **부모 컴포넌트의 `state`가 변경되면,  
  모든 자식 컴포넌트가 자동으로 다시 렌더링**됩니다.

  - 이때 변경 사항이 없는 자식 컴포넌트도 포함됩니다.

- **리렌더링 자체는 사용자에게 보이지 않지만**,  
  성능 최적화를 위해 **불필요한 렌더링은 피하는 것이 좋습니다.**

---

### ✅ 불변성이 성능에 미치는 영향

- 불변성을 지키면 컴포넌트가 **데이터의 변경 여부를  
  저렴한 비용으로 판단**할 수 있습니다.

- React는 이러한 구조를 바탕으로 **렌더링 최적화 기능**을 제공합니다.

> 참고: `memo` API를 사용하면 React가 컴포넌트를  
  **언제 다시 렌더링할지 선택하는 방법**을 설정할 수 있습니다.

---

## 🎮 교대로 두기 - X와 O 표시하기 (1)

- 지금까지 만든 틱택토 게임에서 가장 큰 문제였던  
  **"O"를 보드에 표시할 수 없던 문제**를 해결해보겠습니다.

  > 해결된 코드(완성된 코드)

```jsx
export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    // ...
  );
}
```

---

### ⚙️ 첫 번째 선수 설정 및 상태 관리

1. **첫 번째 선수가 두는 말을 `"X"`로 설정**합니다.  
   이제 `Board` 컴포넌트에 **또 다른 state**를 추가해 추적할 수 있습니다.

```jsx
function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  // ...
}
```

## ⛔ 이미 채워진 사각형은 무시하기

- 이제 다른 사각형을 클릭하면 `"X"`와 `"O"`가 **정상적으로 번갈아 표시**됩니다.

---

### ❗ 새로운 문제 발견

- **같은 칸을 여러 번 클릭해 보세요.**
- `"O"`가 `"X"`를 덮어쓰는 상황이 발생합니다!
- 물론 게임을 흥미롭게 만들 순 있지만, 지금은 **기본 규칙**을 유지하겠습니다.

---

### 🔍 문제 원인

- 현재 로직은 `"X"` 또는 `"O"`를 사각형에 표시할 때,  
  **해당 칸이 이미 채워졌는지를 확인하지 않고 있습니다.**

---

### ✅ 해결 방법

> 클릭된 사각형에 값이 이미 있는 경우에는 아무 작업도 하지 않고 종료하면 됩니다.

1. `handleClick` 함수에서, 사각형(`squares[i]`)이 이미 채워졌는지 확인합니다.
2. 값이 존재한다면 `return`하여 **함수 실행을 중단**합니다.

```jsx
function handleClick(i) {
  if (squares[i]) {
    return;
  }

  const nextSquares = squares.slice();
  // 이후 로직 진행...
}
```

---

## 📌 보충 개념: `return`의 의미

- 작성한 코드에는 `return` 값이 없습니다.

```js
if (squares[i]) {
  return;
}

```
---

## 🏆 승자 결정 함수 추가하기

- 이제 어느 플레이어의 차례인지 표시하는 것 외에도,  
  **게임의 승자가 결정되었을 경우 더 이상 차례를 만들 필요가 없습니다.**

---

### 🧮 승자 확인을 위한 함수 추가

- 9개의 사각형 배열을 가져와서 **승자를 판별**하는 함수  
  `calculateWinner`를 추가합니다.

- 이 함수는 `"X"`, `"O"`, 또는 `null` 값을 반환합니다.

- 걱정 마세요! `calculateWinner` 함수는 React 전용이 아니며,  
  **일반적인 JavaScript 도우미 함수(helper function)**입니다.

---

### ⚙️ 위치는 어디에 정의해야 하나요?

- `calculateWinner` 함수는 **`Board` 함수 바깥에 정의하거나 안에 정의해도 상관없습니다.**

- 이 예제에서는 **컴포넌트를 편집할 때 불편하지 않도록 파일의 하단에 배치**하겠습니다.

```js
// 예시 위치
function calculateWinner(squares) {
  // ...
}

```

---
---

## 🧩 보충 개념: 구조 분해 할당 (Destructuring Assignment)

> 구조 분해 할당은 **배열이나 객체의 값을 개별 변수로 쉽게 추출하는 방법**입니다.

---

### 📘 개념 요약

- **비구조화 할당** 또는 **구조화 할당**이라고도 불리며,  
  JavaScript에서 매우 자주 사용되는 문법입니다.

- 배열이나 객체의 구조를 해체하여, **내부 값들을 개별 변수에 할당**할 수 있습니다.

- 이를 통해 **코드의 간결성과 가독성**을 높일 수 있습니다.

---

### 📦 배열의 구조 분해 예시

```js
const pairs = [
  [1, 2],
  [3, 4],
  [5, 6]
];

pairs.map(([x, y]) => {
  console.log(`x: ${x}, y: ${y}`);
});

```

> 🗂️ 객체의 구조 분해 예시

```jsx
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

users.map(({ id, name }) => {
  console.log(`${id}: ${name}`);
});
```



# 📌 보드 만들기
<h1>🗓 **2025-04-10 / 6번째 수업**</h1>

## 📦 React에서 props를 통해 데이터 전달하기

> 이 문서는 React의 기본 개념 중 하나인 `props`를 통해 컴포넌트 간 데이터를 전달하는 과정을 설명합니다.  
> 재사용 가능한 구조로 코드를 개선하는 데 중점을 둡니다.

---

## 📁 1단계: 컴포넌트 구조 개선하기

- **React의 component architecture**를 사용하여 **재사용 가능한 component**를 생성합니다.
- 불필요하고 **중복된 코드를 제거**합니다.

### 🛠️ 작업 순서

1. `Board` component를 만들고, `Square` component의 내용을 복사합니다.
2. `Square` component의 `button`을 하나만 남기고 모두 삭제합니다.
3. `Board` component의 `button`을 `Square` component로 교체합니다.
4. `App`에서 호출하는 component를 `Square`에서 `Board`로 변경합니다.
5. 정상적으로 출력이 되는지 확인합니다.

> ✅ 이렇게 하면 구조는 깔끔해지지만, **숫자 출력이 1만 나오게 됩니다.**

---

## 📌 2단계: props를 사용한 데이터 전달

- 이제 **props를 사용하여 값 전달**을 구현하겠습니다.
- 부모 컴포넌트인 `Board`에서 자식 컴포넌트인 `Square`로 값을 넘겨줘야 합니다.

### ✅ Square 컴포넌트 수정

```jsx
function Square({ value }) {
  return <button className="square">1</button>;
}
```

---

## 🧩 사용자와 상호작용하는 컴포넌트 만들기

> 🛑 한글 문서에서 "사각형"이라고 번역된 것은 모두 **Square 컴포넌트**를 의미합니다.

이제 사용자와의 상호작용을 위해 **Square 컴포넌트를 클릭할 수 있도록** 코드를 수정해보겠습니다.

### ✍️ 구현 순서

1. `Square` 내부에 `handleClick` 함수를 선언하세요.
2. JSX에서 반환되는 버튼에 `props`로 `onClick` 이벤트를 연결합니다.

### 💻 예시 코드

```jsx
function Square({ value }) {
  function handleClick() {
    console.log("clicked!");
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
```

---

## 🔁 상태 기억: 사용자와 상호작용하는 컴포넌트 만들기 (2)

> 이번에는 사각형을 클릭했을 때 **'기억'** 하도록 만들어, "X"나 다른 값으로 표시되게 하겠습니다.

### 🧠 상태 저장의 개념

- 컴포넌트는 무언가를 기억하기 위해 `state`를 사용합니다.
- React는 상태 기억을 위해 `useState`라는 **Hook**을 제공합니다.
- 이제 `Square` 컴포넌트의 현재 값을 `state`로 저장하고, 클릭 시 상태가 변경되도록 하겠습니다.

---

### 🛠️ 구현 절차

1. 파일 상단에서 `useState`를 **import**합니다.
2. `Square` 컴포넌트에서 `value` prop을 제거합니다.
3. 대신 `useState`를 호출하여 내부 상태로 값을 관리합니다.

---

### 💻 예시 코드

```jsx
import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    // 나중에 상태를 바꿔주는 로직 작성 예정
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
```

---

## 🛠️ 상태 관리를 위한 리팩토링

### 📌 상태 변수와 설정 함수

- `value`는 **값을 저장하는 변수**,  
  `setValue`는 **값을 변경하는 함수**입니다.
- `useState(null)`의 의미는 **state 변수의 초기값이 null**이라는 뜻입니다.

### 🔄 props 제거하기

- 이제 `Square` 컴포넌트는 더 이상 `props`를 사용하지 않게 수정했습니다.
- 따라서 `Board` 컴포넌트에서 생성되는 9개의 `Square`에도 더 이상 `value` prop을 넘기지 않습니다.

---

### 💻 예시 코드: 변경된 Board 컴포넌트

```jsx
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
```

---

## 🖱️ 클릭 시 X 표시되도록 만들기

> 이제 `Square` 컴포넌트를 클릭하면 **"X"가 출력**되도록 구현해보겠습니다.

### ✅ 변경 사항 요약

5. `console.log("clicked!")` 대신에  
   이벤트 핸들러를 `setValue("X")`로 변경합니다.

### 💻 변경된 Square 컴포넌트 코드

```jsx
function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
```

---

## 🧱 각 컴포넌트의 독립적인 상태

> `Square` 컴포넌트 하나하나가 **고유한 state**를 갖고 있으며, 서로 영향을 주지 않도록 독립적으로 동작합니다.

### 🧩 핵심 개념 정리

- 각 **`Square`는 고유한 state**를 가지고 있습니다.
- 각 Square에 저장된 `value`는 **다른 Square와 완전히 독립적**입니다.
- 컴포넌트에서 `set` 함수를 호출하면, **React는 자동으로 해당 컴포넌트와 자식 컴포넌트를 업데이트**합니다.

### 🔄 결과적으로

- 하나의 `Square`를 클릭해 `"X"`를 표시해도,
- 다른 `Square`는 아무 영향도 받지 않고 **각자의 상태**만 유지하게 됩니다.

> 🎯 이는 React의 **컴포넌트 기반 아키텍처**와 **단방향 데이터 흐름**의 기본 구조를 이해하는 데 매우 중요한 부분입니다.

---

## 📤 state 끌어올리기 (Lifting State Up)

> 지금까지는 각 `Square` 컴포넌트가 자체적으로 `state`를 가지고 있었습니다.  
> 하지만 **게임 전체의 상태**를 관리하려면 더 상위 컴포넌트에서 상태를 관리해야 합니다.

### 🎯 왜 끌어올려야 하나요?

- 현재 각 `Square` 컴포넌트는 게임의 일부 상태만을 기억하고 있습니다.
- 틱택토(Tic Tac Toe) 게임에서 승자를 판단하려면,
  `Board`가 9개의 `Square`의 상태를 모두 알고 있어야 합니다.

---

### 🧠 접근 방식 비교

#### ❌ 방법 1: Board가 각 Square에게 state를 “요청”하는 방식

- 기술적으로는 React에서 구현 가능하지만...
  - **이해하기 어렵고**
  - **버그에 취약**하며
  - **리팩토링하기 어려운 구조**입니다.
- 따라서 **비추천되는 방식**입니다.

#### ✅ 방법 2: 게임의 state를 Board에 저장

- 가장 좋은 방법은 게임 상태를 `Square`가 아닌 **부모 컴포넌트인 `Board`에 저장**하는 것입니다.
- 그렇게 하면 `Board`가 상태를 관리하고, 각 `Square`에는 **props를 통해 값을 전달**하게 됩니다.

---

### 🔄 핵심 요약

| 항목 | 설명 |
|------|------|
| 현재 구조 | 각 Square가 개별 state 보유 |
| 개선할 구조 | Board가 전체 상태 보유, Square는 props만 사용 |
| 이점 | 승자 판단, 전체 흐름 관리, 유지보수 쉬움 |

> 🎯 다시 말해, 각 Square의 state를 "끌어올려" **부모 컴포넌트인 `Board`에서 중앙집중식으로 관리**하겠다는 의미입니다.

---

---

## 🗂️ component 분리하기

> 지금까지는 `Board`와 `Square`를 하나의 파일에 작성했지만, 이제 각각의 **컴포넌트를 독립된 파일로 분리**해보겠습니다.

### ⚠️ 분리 힌트

- `Board` 컴포넌트가 `export default`로 선언되어 있다는 건, **별도의 파일로 분리되었다는 의미**입니다.
- 우리도 이를 따라 **컴포넌트를 파일 단위로 정리**합니다.

---

### 🧱 컴포넌트 분리 순서

1. 컴포넌트 이름과 동일한 파일을 생성합니다.  
   예: `Board.js`, `Square.js`
2. 해당 파일로 코드를 복사하고 `export default`를 붙입니다.
3. 필요 시 `useState`, `React` 등을 import 합니다.
4. `App.js`에서 해당 코드를 삭제하고, `Board` 컴포넌트를 import 합니다.
5. `App.js`에서 `useState` import가 더 이상 필요 없다면 제거합니다.
6. 정상적으로 앱이 작동하는지 확인합니다.

---

### 📁 예시 디렉토리 구조

src/ ├── components/ │ ├── Board.js │ └── Square.js ├── App.js └── index.js
> ✅ 이처럼 컴포넌트를 분리하면 유지보수도 쉽고, 협업도 훨씬 효율적입니다.

---

## 🔼 state 끌어올리기 (2): Board가 상태를 관리하기

> 이제 `Board` 컴포넌트는 모든 `Square`의 상태를 하나로 모아서 관리합니다.  
> 그리고 각 `Square`에 **props를 통해 값(value)** 을 전달합니다.

### ✅ Board 컴포넌트 내부에서 state 정의

```jsx
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}
```

---

## 📥 state 끌어올리기 (3): Square는 props만 사용

> 이제 `Square`는 더 이상 상태를 관리하지 않고,  
> `Board`로부터 전달받은 `value prop`만 **표시 전용**으로 사용합니다.

---

### 📌 작업 요약

3. `Board` 컴포넌트에서 각 `Square`에 `value prop`을 전달합니다.  
4. `Square` 컴포넌트를 다음과 같이 수정하여 해당 `prop`을 받을 수 있도록 합니다:

```jsx
function Square({ value }) {
  return (
    <button className="square">
      {value}
    </button>
  );
}
```

---

## 🖱️ 클릭 이벤트 전달: 이벤트 핸들러 위임하기

> `Square` 컴포넌트는 클릭되었을 때 **자체적으로 처리하지 않고**,  
> 부모인 `Board`로부터 받은 `onSquareClick` 함수를 호출합니다.

---

### 🎯 목표

- `Board` → `Square`로 함수를 prop 형태로 전달
- `Square`에서 `onClick` 이벤트 시 해당 함수를 호출

---

### 💻 5단계: Square 컴포넌트 클릭 시 함수 호출

```jsx
function Square({ value }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
```
> 위 코드엔 아직 오류가 있습니다. 

### 💻 6단계: props로 onSquareClick 추가

```jsx
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
```

---

## 🧭 상태 끌어올리기 (4): 클릭 핸들러 연결

> 이제 `Square`는 클릭 시 부모인 `Board`에서 정의한 `handleClick` 함수를 호출하게 됩니다.

---

### 💻 7단계: `onSquareClick` prop을 `handleClick`과 연결

```jsx
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    // 클릭 시 상태 업데이트 로직 (다음 단계에서 구현)
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick} />
        {/* 나머지 Square들도 동일하게 처리 */}
      </div>
    </>
  );
}
```

---

## 🔚 상태 끌어올리기 (5): handleClick로 상태 변경하기

> `Board` 컴포넌트 내에서 상태 배열 `squares`를 복사한 뒤, 특정 값을 변경하여 다시 업데이트합니다.

---

### 💻 8단계: handleClick 함수 작성

```jsx
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    const nextSquares = squares.slice();  // 기존 배열 복사 (불변성 유지)
    nextSquares[0] = "X";                 // 인덱스 0 위치에 "X" 설정
    setSquares(nextSquares);              // 상태 업데이트
  }

  return (
    // Square 컴포넌트들 렌더링
  );
}
```

---

## 🔁 상태 변경과 리렌더링 흐름 완전 이해하기

> `handleClick` 함수의 동작 방식과 리액트의 상태 변경 → UI 반영 과정을 정리합니다.

---

### 🔍 동작 과정 정리

- `handleClick` 함수는 JavaScript의 `slice()` 배열 메서드를 이용해  
  기존 `squares` 배열의 **복사본**인 `nextSquares` 배열을 생성합니다.  
  > 참고: [MDN - slice()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

- 그런 다음 `nextSquares[0] = "X"` 와 같이 원하는 위치의 값을 변경합니다.
- 마지막으로 `setSquares(nextSquares)`를 호출하여 상태를 업데이트합니다.

---

### 🔁 리렌더링 흐름

- `setSquares()`를 호출하면 React는 상태가 바뀌었다는 사실을 감지합니다.
- 그에 따라 해당 상태를 사용하는 컴포넌트인 `Board`가 **자동으로 리렌더링** 됩니다.
- 하위에 있는 `Square` 컴포넌트들 역시 props가 변경되었기 때문에 함께 **재렌더링** 됩니다.

---

### 💡 중요 개념: 클로저와 내부 함수

> **🧠 꼭 알아두세요!**  
> 이 예제는 `Board` 함수 내부에 `Square`가 포함되어 있는 구조입니다.

- JavaScript는 **클로저(closure)** 를 지원하기 때문에,  
  `handleClick` 같은 내부 함수는 외부 함수인 `Board`의 상태(`squares`)나 메서드(`setSquares`)에 접근할 수 있습니다.
- 즉, `handleClick` 함수는 외부에서 정의된 `state`를 읽고 업데이트할 수 있는 **스코프 권한**을 갖게 됩니다.

---

# 📌 이벤트에 응답하고 화면 업데이트하기  
<h1>🗓 **2025-04-03 / 5번째 수업**</h1>

## 🗓️ 2025-04-03 / 5번째 수업

---

## 1. 이벤트 핸들러 선언

- 컴포넌트 내부에 **이벤트 핸들러 함수**를 선언하면 이벤트에 응답할 수 있습니다.
- 예시:

```jsx
function handleClick() {
  // 클릭 시 실행할 코드
}

<button onClick={handleClick}>Click me</button>
```

> `handleClick` 뒤에 소괄호 `()`가 없는 것에 주의!  
> (클릭될 때 실행되도록 함수를 **참조**만 전달)

---

## 2. 화면 업데이트하기

컴포넌트가 특정 정보를 **기억하고 표시**해야 할 때,  
예를 들어 버튼 클릭 횟수를 세고 싶다면 **state(상태)** 를 사용합니다.

---

### 🔹 useState 소개

- React에서 상태 관리를 위해 `useState`를 사용
- `useState`는 React의 **Named Export**로 제공됨

```jsx
import { useState } from 'react';
```

---

### 🔹 state 변수 선언 방법

```jsx
const [count, setCount] = useState(0);
```

- `count`: 현재 상태를 담는 변수
- `setCount`: 상태를 업데이트하는 함수

> ✅ 관용적으로 `[something, setSomething]` 형태로 작성합니다.

---

## 🧪 실습 예제

다음은 버튼 클릭 시 카운터가 증가하는 React 컴포넌트입니다.

```jsx
import { useState } from 'react';

function Button() {
  const [count, setCount] = useState(0); // 초기 상태는 0

  function handleClick() {
    setCount(count + 1); // 상태 업데이트
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```

### ✅ 설명

- `useState(0)`으로 초기값 설정
- 버튼 클릭 시 `handleClick()` 실행 → `setCount()` 호출 → 상태 업데이트
- React가 변경된 상태를 기반으로 **자동으로 UI를 다시 렌더링**함

---

## 🖼️ 관련 이미지

![Image](https://github.com/user-attachments/assets/71abf0dd-1ecd-42b7-83b1-74d5d866065f)

---

## 🔄 화면 업데이트 실습: CountState 컴포넌트

이번 실습에서는 **카운터 기능을 하나의 버튼만으로 구현**하고,  
불필요한 복잡성을 제거하여 `useState`에 집중할 수 있도록 구성합니다.

---

### 🎯 목표

- 버튼이 클릭될 때마다 숫자가 1씩 증가하는 기능 만들기
- `CountState.js`라는 파일 안에 컴포넌트를 정의하기

---

### 📁 파일: `CountState.js`

```jsx
import { useState } from 'react';

function CountState() {
  const [count, setCount] = useState(0); // 초기 상태: 0

  function handleClick() {
    setCount(count + 1); // 상태 업데이트
  }

  return (
    <button onClick={handleClick}>
      클릭 횟수: {count}
    </button>
  );
}

export default CountState;
```

---

### ✅ 설명 요약

- `useState(0)` → 컴포넌트가 처음 렌더링될 때 `count` 값은 `0`
- `setCount(count + 1)` → 상태 변경 함수로 새 값을 전달
- 버튼을 클릭하면 `handleClick()` 함수가 실행되어 `count`가 증가
- 버튼 하나만 렌더링되어 **코드가 간결**하고 `state` 학습에 집중 가능

---

> 🔔 다음 단계에서는 이 컴포넌트를 App.js 또는 메인 파일에서 불러와 사용하는 법을 이어서 작성할 예정입니다.

## Hook 사용하기

React에서는 `use`로 시작하는 함수를 **Hook**이라고 부릅니다.

---

### 🧩 대표적인 Hook: `useState`

- `useState`는 React에서 제공하는 **내장 Hook** 중 하나입니다.
- 이 외에도 다양한 내장 Hook이 있으며, [React 공식 API 문서](https://react.dev/reference/react)에서 확인할 수 있습니다.

---

### 🧪 사용자 정의 Hook (Custom Hook)

- 기존 Hook들을 조합하여 **나만의 Hook(Custom Hook)** 을 만들 수도 있습니다.
- 사용자 정의 Hook도 반드시 `use`로 시작해야 합니다.  
  예: `useMyCustomHook()`

---

### ⚠️ Hook의 제약사항

Hook은 일반 함수처럼 **아무 데서나 사용할 수 없습니다.**  
다음 규칙을 꼭 따라야 합니다:

1. **컴포넌트 함수의 최상단에서만 사용 가능**
2. **조건문이나 반복문 안에서는 사용 불가**

> ✅ 조건문이나 반복문에서 `useState` 또는 다른 Hook을 사용하고 싶다면  
> 해당 로직을 **새로운 컴포넌트로 추출**해서 그 안에서 사용하세요.

---

### 📘 공식 설명 수준

> 현재 우리가 학습 중인 React 공식 사이트의 Quick Start에서는  
> 이 정도 수준까지만 **Hook에 대해 간단히 안내**하고 있습니다.

## #️⃣ Hooks의 사용 규칙 (Rules of Hooks)

React에서 Hooks를 사용할 때는 반드시 **지켜야 할 규칙**이 있습니다.  
이 규칙들은 React가 **예측 가능하고 안정적으로 동작**하도록 돕습니다.

---

### ❓ 왜 이런 제한이 필요한가?

> React의 동작을 **예측 가능**하게 만들고,  
> **상태 관리의 안정성**을 보장하기 위해서입니다.

---

### 🔒 주요 규칙

#### 1. 조건문이나 반복문 안에서 Hooks를 사용하지 말 것

- 매번 렌더링할 때마다 **Hook 호출 순서가 달라질 수 있음**
- React는 Hook이 호출되는 순서를 기반으로 상태를 추적하기 때문에  
  순서가 바뀌면 **정확한 상태 추적이 불가능**해집니다.

```jsx
// ❌ 잘못된 예시
if (isVisible) {
  const [count, setCount] = useState(0); // 조건문 안에서 사용 ❌
}
```

#### 2. 컴포넌트 최상단에서만 Hook 호출

- 모든 Hook은 **컴포넌트 함수의 최상단에서 선언**되어야 합니다.
- 그래야 React가 **렌더링 간 동일한 순서**로 Hook을 실행할 수 있습니다.

---

### ⚠️ 위반 시 발생할 수 있는 문제

- 상태가 꼬이거나, 예상치 못한 리렌더링 발생
- 메모리 누수나 비동기 처리 오류
- `React has detected a change in the order of Hooks` 경고 발생

---

> 🧠 정리: React는 각 렌더링 시점에 Hook의 순서로 상태를 연결합니다.  
> 순서가 바뀌면 React는 어떤 상태가 어떤 Hook과 연결되어야 하는지 알 수 없습니다.

---

## ❓ 왜 function형 컴포넌트에서만 Hook을 사용할까?

React에서는 **Hook을 function형 컴포넌트에서만 사용할 수 있습니다.**  
그 이유는 다음과 같습니다.

---

### 🏛️ Class형 컴포넌트의 한계

- 예전에는 상태 관리와 생명주기(lifecycle)를 위해 **Class형 컴포넌트**를 사용했습니다.
- 하지만 Class 컴포넌트는 다음과 같은 단점이 있었습니다:
  - **복잡한 문법** (`this`, `constructor`, `binding` 등)
  - **코드 재사용 어려움** (로직 추출이 어려움)
  - **유지보수 복잡성 증가**

---

### 🌟 Hook의 등장 배경

> React는 **상태 관리와 재사용 가능한 로직 구현을 더 간단하게** 하기 위해  
> Hook을 도입하게 되었습니다.

- Hook은 `useState`, `useEffect` 등과 같이 **함수형 컴포넌트 안에서 상태 관리와 side effect를 처리**할 수 있도록 도와줍니다.
- 별도의 클래스 없이도 컴포넌트가 **상태를 가질 수 있게** 되었습니다.

---

### ✅ React의 방향성

- React 팀은 **function형 컴포넌트 + Hook 사용**을 **공식적으로 권장**하고 있습니다.
- 그에 따라 Hook은 **function형 컴포넌트 전용**으로 설계되었습니다.

---

### 🚫 Class 컴포넌트에서 Hook을 사용할 수 없는 이유

- Hook은 함수 실행 흐름(호출 순서)을 기반으로 상태를 추적합니다.
- 클래스 문법은 함수 실행이 아닌 **객체 기반 구조**이므로, Hook의 원리와 맞지 않습니다.

---

> 📌 결론:  
> Hook은 **함수형 컴포넌트의 선언적 구조에 맞춰 설계된 기능**이기 때문에,  
> **Class형 컴포넌트에서는 사용할 수 없습니다.**

---

## 🆚 Function Component vs Class Component

React를 공부하다 보면  
**"왜 요즘은 함수형 컴포넌트를 주로 사용할까?"**  
라는 의문이 생길 수 있습니다.

---

### 🤔 아직도 class 컴포넌트를 자주 보게 되는 이유

- 인터넷 자료나 오래된 강의 등에서 **class형 컴포넌트**를 많이 접할 수 있기 때문입니다.
- 이는 React의 **진화 과정**을 알면 쉽게 이해할 수 있습니다.

---

## 📜 React의 진화와 컴포넌트 형태 변화

### 1️⃣ React 초창기 (2013년 ~ 2014년)

- 함수형 컴포넌트는 존재했지만, 역할은 단순했습니다.
  - **`props`를 받아 UI만 반환**하는 **프리젠테이셔널 컴포넌트**
- 상태(`state`)나 생명주기(`lifecycle`) 같은 기능은 **사용 불가**
- 따라서 주요 기능은 모두 **class 컴포넌트로 작성**해야 했습니다.

---

### 2️⃣ React 16.8 (2019년 2월) — Hook의 등장

- `useState`, `useEffect` 등 **Hook 기능이 추가**됨
- 이로 인해 함수형 컴포넌트에서도 **상태 관리와 생명주기 처리 가능**
- 코드가 간결해지고, 재사용성과 가독성이 높아짐

```jsx
// ✅ 함수형 컴포넌트 + Hook
import { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('컴포넌트가 마운트되거나 업데이트됨');
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Clicked {count}</button>;
}
```

---

### ✅ 현재 React의 방향

- React 공식 문서와 커뮤니티는 **function 컴포넌트 + Hook 조합**을 **권장**
- 함수형 방식이:
  - 코드가 더 **간결**
  - **로직 분리 및 재사용**이 쉬움
  - `this`나 `binding` 필요 없음

---

> 📌 정리:  
> Class 컴포넌트는 과거의 유산이고,  
> 지금은 함수형 컴포넌트가 React의 **표준 스타일**로 자리잡고 있습니다.

---

컴포넌트 간 데이터 공유

이번에는 여러 개의 컴포넌트에서 **같은 데이터를 공유할 수 있는가?**  
또는 **왜 같은 컴포넌트인데 각각의 상태가 따로 관리되는가?** 에 대해 알아봅니다.

---

### 📌 학습 포인트

- 공식 사이트에서는 `MyButton` 예시로 설명하지만,  
  우리는 앞서 작성한 `CountState` 예제를 기준으로 이해하면 됩니다.

---

### ❓ 의문점

> "왜 변수는 `count` 하나인데, 버튼 3개의 state가 각각 다른 값을 가지는 걸까?"

---

### 🔍 이유 설명

- 각 `CountState` 컴포넌트는 **자신만의 state(count)** 를 가지고 있습니다.
- React에서 컴포넌트를 여러 번 사용하면, **각 인스턴스는 독립적인 상태**를 갖게 됩니다.
- 즉, 함수는 하나지만 **각 버튼은 서로 다른 개체(instance)** 로 취급되기 때문에  
  각기 다른 상태를 저장할 수 있는 것입니다.

---

### ✅ 예시 (3개의 독립적인 컴포넌트 사용)

```jsx
import CountState from './CountState';

function App() {
  return (
    <div>
      <CountState />
      <CountState />
      <CountState />
    </div>
  );
}
```

- 위 예제에서 `CountState`는 동일한 컴포넌트지만,
- 각각의 `useState`가 **별도로 메모리에 존재**하므로 서로 영향을 주지 않습니다.

---

### 📎 요약

- React 컴포넌트는 **재사용 가능한 함수**이지만,
- 여러 번 사용될 경우 **각 인스턴스는 서로 독립적으로 동작**합니다.
- 따라서 각 `CountState`는 자기만의 `count` 값을 가지는 것이 **정상적인 동작**입니다.

---

> 📘 상태 공유가 필요한 경우엔 `props`나 `context`, 또는 전역 상태 관리 도구를 활용해야 합니다.  
> 이 내용은 다음 단계에서 배울 예정입니다!

---

---

## 1️⃣1️⃣ 컴포넌트 간 데이터 공유 (2) — 상태 끌어올리기

이전에는 각각의 `CountState` 컴포넌트가 **독립적인 상태(count)** 를 가지고 있었습니다.  
이번에는 **상태를 부모 컴포넌트로 끌어올리고**,  
여러 자식 컴포넌트에서 **공유된 상태**를 사용하는 구조를 학습합니다.

---

### 🔄 상태 끌어올리기 (Lifting State Up)

> 여러 컴포넌트가 **공통의 상태를 공유**해야 할 경우,  
> 상태를 **공통 부모 컴포넌트로 끌어올리는 방식**입니다.

---

### 📁 자식 컴포넌트: `CountState2.js`

```jsx
function CountState2({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

export default CountState2;
```

- `props`로 전달받은 `count`와 `onClick`을 사용합니다.
- 버튼을 클릭하면 **부모(App)의 handleClick 함수가 실행**됩니다.

---

### 🧠 동작 설명

1. 버튼을 클릭하면 자식 컴포넌트의 `onClick` prop이 호출됨
2. 이 prop은 `App` 컴포넌트에 정의된 `handleClick` 함수
3. `handleClick` 함수는 `setCount(count + 1)` 실행
4. 상태가 변경되면 React가 다시 렌더링 → 새로운 `count` 값이 자식에게 전달됨

---

### 📁 부모 컴포넌트: `App.js`

```jsx
import { useState } from 'react';
import CountState2 from './CountState2';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <CountState2 count={count} onClick={handleClick} />
      <CountState2 count={count} onClick={handleClick} />
      <CountState2 count={count} onClick={handleClick} />
    </div>
  );
}

export default App;
```

---

### 📌 정리

- **상태를 App으로 끌어올림**으로써 모든 버튼이 **같은 상태(count)** 를 공유
- 버튼을 어느 하나 클릭해도 **모든 버튼의 값이 함께 변경**됨
- 이 패턴을 **state 끌어올리기 (Lifting State Up)** 라고 부릅니다

---

> 💡 여기서 "위로"라는 표현은, **상위(parent) 컴포넌트로 상태를 옮기는 것**을 의미합니다.

---

## 1️⃣1️⃣ 컴포넌트 간 데이터 공유 (3) — 실습 정리

이번에는 실제로 `App.js` 안에서 `CountState2` 컴포넌트를 정의하고,  
**state를 끌어올려 props로 전달하는 실습 예제**를 정리합니다.

---

### 🛠️ 실습 목표

- `App.js` 파일 하나 안에 `CountState2` 컴포넌트를 정의
- `useState`와 `handleClick` 함수는 `App` 컴포넌트에만 작성
- `CountState2`는 `props(count, onClick)`를 받아 사용

---

### 📁 App.js

```jsx
import { useState } from 'react';

// ✅ 자식 컴포넌트 정의
function CountState2({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

// ✅ 부모 컴포넌트
function App() {
  const [count, setCount] = useState(0); // 상태는 App에서만 선언됨

  function handleClick() {
    setCount(count + 1); // 상태 업데이트
  }

  return (
    <div>
      {/* CountState2를 여러 번 호출해도 같은 상태(count)를 공유 */}
      <CountState2 count={count} onClick={handleClick} />
      <CountState2 count={count} onClick={handleClick} />
      <CountState2 count={count} onClick={handleClick} />
    </div>
  );
}

export default App;
```

---

### 🔍 설명

- `CountState2`는 `count`, `onClick`이라는 **props를 통해 데이터를 전달받음**
- 버튼을 클릭하면 `App`의 `handleClick()` 실행 → `setCount()`로 상태 업데이트
- `count`는 `App`에 단 하나만 존재하지만,  
  **여러 컴포넌트에 props로 전달되므로 상태가 공유됨**

---

### ✅ 결과

- 어떤 버튼을 클릭해도 모든 버튼의 숫자가 함께 증가함
- **state 끌어올리기(lifting state up)** 개념을 실습을 통해 이해할 수 있음

---

> 🧠 여러 컴포넌트가 같은 데이터를 공유해야 할 때는 상태를 공통 부모 컴포넌트로 끌어올리는 것이 핵심입니다!

---


# 📌 React의 개발흐름 이해와 전체 개념정리  
<h1>🗓 **2025-03-27 / 4번째 수업**</h1>

## 🧩 Component의 생성과 중첩(Nesting)

### ✅ Component란?
1. `component`는 고유한 **로직과 모양을 가진 UI의 일부**입니다.  
2. 버튼처럼 **작은 단위부터**, 전체 페이지처럼 **큰 단위까지** 구성할 수 있습니다.  
3. `component`는 **마크업을 반환하는 JavaScript 함수**입니다.  

---

### ✅ Nesting이란?
- Nesting은 **하나의 component 안에 다른 component를 포함하는 구조**입니다.  
- CSS 선택자의 중첩 구조와 비슷하게 이해하면 쉽습니다.  

📌 참고: CSS는 **2023년부터 중첩(Nesting)을 자체 지원**하며,  
이전에는 **Sass, Less 등의 전처리기**를 통해 사용하던 기능입니다.  

![구형 컴포넌트 → 신형 컴포넌트](https://github.com/user-attachments/assets/35cc8df2-e3a5-48fa-92bf-526a961d593f)

---

## 🛠 실습: MyApp Component 만들기

### ✅ 실습 목표
- `MyApp`이라는 함수형 component를 생성합니다.  
- 어떤 디렉토리에 파일을 만들지, 함수는 어떤 방식으로 구성할지 생각해봅니다.  

### ✅ 예시 구성

```jsx
// src/components/MyApp.js

function MyApp() {
  return (
    <div>
      <h1>Welcome to MyApp!</h1>
    </div>
  );
}

export default MyApp;
```

- 📁 **디렉토리**: `src/components/`  
- 📄 **파일 이름**: `MyApp.js`  
- 🧱 **component 구조**: 함수형 component, JSX 반환  

---

## 📦 `export default`와 `export`의 차이

React에서 component를 내보내기(export) 위한 **JavaScript 문법**입니다.  
좀 더 자세한 내용은 [MDN](https://developer.mozilla.org/ko/) 또는 [javascript.info](https://javascript.info/)에서 확인할 수 있습니다.

---

### ✅ 1. Named Export

- 하나의 파일에 **여러 개의 component를 정의**할 때 사용합니다.
- component를 사용하는 쪽에서는 **정확한 이름을 반드시 명시**해야 합니다.

```jsx
// utils.js
export function sayHello() {
  console.log("Hello!");
}
```

```jsx
// App.js
import { sayHello } from './utils';
```

---

### ✅ 2. Default Export

- 파일당 **하나의 대표 component만 내보낼 때** 사용합니다.  
- 사용하는 쪽에서는 **이름을 자유롭게 지정**할 수 있습니다.

```jsx
// MyApp.js
export default function MyApp() {
  return <h1>Hello!</h1>;
}
```

```jsx
// App.js
import MyApp from './MyApp'; // 이름 자유롭게 지정 가능
```

---

## 🎯 결론

✔ `component`는 UI의 작은 조각으로, 중첩하여 화면을 구성할 수 있습니다.  
✔ `export default`와 `export`는 component를 다른 파일에서 사용할 수 있도록 내보내는 방식입니다.  
✔ Named Export는 **여러 개의 export에 적합**, Default Export는 **대표 component에 적합**합니다.  
✔ 실습을 통해 `MyApp` component를 만들어보고 직접 nesting 구조도 경험해보세요! 🚀

## 💡 JSX로 마크업 작성하기

- 위에서 작성한 코드의 마크업 문법을 **JSX**라고 합니다.
- **반드시 사용하는 것은 아니지만**, React 프로젝트에서는 **편의성 때문에 JSX를 주로 사용**합니다.
- JSX는 HTML보다 **더 엄격한 문법**을 따릅니다.  
  예: `<br>` 같은 싱글 태그도 **반드시 닫아야 함** → `<br />`
- React에서는 여러 개의 component를 JSX 태그로 반환할 수 있습니다.  
  다만 **반드시 하나의 부모 요소로 감싸야 합니다**.
  - `<div>`, `<section>` 또는 `<>...</>`와 같은 **Fragment**를 사용합니다.

---

## 🧪 예: AboutPage Component를 작성했다면?

- 이 component를 화면에서 확인하려면 **`App.js`에서 불러와야 합니다.**

```jsx
// App.js
import AboutPage from './AboutPage';

function App() {
  return (
    <div>
      <AboutPage />
    </div>
  );
}
```

![App에서 AboutPage 불러오기](https://github.com/user-attachments/assets/9635677d-95b7-46af-801f-0fef868d0abc)

---

## 🎨 스타일 추가하기

- React에서는 CSS 클래스명을 지정할 때 `class`가 아닌 **`className`**을 사용합니다.

```jsx
<div className="avatar">내용</div>
```

- `className`은 HTML의 `class` 속성과 동일한 방식으로 동작합니다.
- CSS 규칙은 **별도의 CSS 파일**에 작성하며, React는 CSS를 적용하는 방식에 제한을 두지 않습니다.  
  → **정적 웹사이트에서 사용하는 방식 그대로 사용 가능**

---

### 📎 CSS 추가 방법

#### ❌ (비추천) `<link>` 태그 사용

- HTML의 `<head>`에 `<link>`를 직접 추가하는 방법도 있지만,  
  정적 HTML 파일을 수정해야 하므로 React 프로젝트에서는 잘 사용하지 않습니다.

#### ✅ (권장) CSS 파일 import

- `App.css` 같은 파일을 만들어 직접 import 합니다.

```jsx
// App.js
import './App.css';
```

---

## 📊 데이터 표시하기

- JSX를 사용하면 **자바스크립트 내부에 마크업을 작성**할 수 있습니다.  
  (즉, 마크업 안에서 자바스크립트를 사용하는 것이 **아니라** 자바스크립트 안에서 마크업을 작성하는 것입니다.)

---

### ✨ JSX 안에서 JavaScript 표현식 사용하기 (Escape Back)

- JSX에서는 `{}`를 사용하여 **변수나 표현식**을 삽입할 수 있습니다.

```jsx
const name = "Alex";

return <h1>Hello, {name}!</h1>;
```

- 속성에서도 변수 사용이 가능합니다:

```jsx
<img src={user.imageUrl} className="avatar" />
```

- 위 예제에서
  - `src={user.imageUrl}`: **변수 값을 전달**
  - `className="avatar"`: **단순한 문자열**

<h2>오늘 한 실습 사진</h2>
<img width="383" alt="Image" src="https://github.com/user-attachments/assets/185eb338-0251-4f1e-a911-39170077f6f8" />

# 📌 React Project의 구조 및 역할  
<h1>🗓 **2025-03-20 / 3번째 수업**</h1>

---

## 📂 프로젝트 디렉토리 구조  

### 1. `node_modules/`
- 프로젝트의 **패키지 모듈**이 저장되는 디렉토리입니다.
- 초기 설치 시, **약 37,352개 파일과 4,597개 폴더**, 총 **200MB** 용량을 차지합니다.
- `git`으로 관리되지 않으므로, VS Code에서 **흐릿하게 표시**됩니다.

---

### 2. `public/`
- 정적(`static`) 파일을 저장하는 디렉토리입니다.
- **배포(`build`) 후, HTML, CSS, JavaScript 등의 파일이 보관**됩니다.
- 일반적으로 개발 중 직접 수정할 일은 거의 없습니다.

#### 📌 `public/index.html`
- React 애플리케이션을 실행하는 **최초 HTML 파일**입니다.

##### ✅ 예시 코드:

```html
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
</body>
```

<h2>📦 의존성 관리와 `package.json` </h2>

## 📝 `package.json` 이란?  
- `package.json`은 **프로젝트의 패키지 의존성(Dependency)** 을 관리하는 파일입니다.  
- 프로젝트에서 사용된 **각종 패키지와 버전을 동일하게 유지**하기 위한 역할을 합니다.  

---

## 🔗 의존성(Dependency)이란?  
- 하나의 소프트웨어가 **다른 소프트웨어(라이브러리, 패키지, 모듈 등)에 의존**하여 동작하는 관계를 의미합니다.  
- 예를 들어, React 프로젝트에서는 `react`, `react-dom`, `axios` 같은 패키지들이 필요합니다.  
- 이러한 패키지들의 **버전 및 구성 정보를 `package.json`에서 관리**합니다.  

---

## 🤝 협업 시 의존성 관리의 중요성  
- 팀 프로젝트에서는 **각 팀원의 개발 환경을 동일하게 유지**해야 합니다.  
- 코드는 GitHub 같은 Git Server를 이용해 공유하지만, **node 패키지는 각 팀원이 직접 설치**해야 합니다.  
- 만약 팀원이 **다른 버전의 패키지를 설치하면 프로젝트에서 오류가 발생**할 수 있습니다.  
- 이를 방지하기 위해 `package.json`과 `package-lock.json`을 활용합니다.  

---

## 🏠 개인 프로젝트에서도 의존성 관리는 필수!  
- GitHub에서 프로젝트 코드를 다운로드한 후,  
  **동일한 개발환경을 구성**하기 위해서는 필요한 패키지를 설치해야 합니다.  
- 이를 위해 **다음 명령어를 실행**하면 `package.json`에 정의된 패키지를 자동으로 설치할 수 있습니다.  

### ✅ 패키지 설치 방법  
```bash
npm install
```

## 📌 의존성을 관리하는 이유  

## ✅ 1. 손쉬운 설치 및 업데이트  
- `npm install` 또는 `yarn install` 명령어 한 줄로 **모든 의존성 자동 설치** 가능.  
- 특정 버전의 라이브러리를 쉽게 업데이트 가능.  

## ✅ 2. 일관된 개발 환경 유지  
- 팀원들과 같은 **라이브러리 버전을 유지**할 수 있음.  
- `package-lock.json`을 활용하면 동일한 패키지를 **정확한 버전으로 설치** 가능.  

## ✅ 3. 중복 설치 방지  
- 필요 없는 라이브러리를 제거하여 **프로젝트를 가볍게 유지**할 수 있음.  

---

## 📦 `package.json`의 역할  
- 프로젝트의 **의존성을 체계적으로 관리**하는 역할을 함.  
- 프로젝트에 필요한 라이브러리를 **쉽게 설치, 업데이트, 유지**할 수 있도록 도와주는 시스템.  

## 📦 `package.json`의 의존성 내용 종류  

## 1️⃣ `dependencies`  
- 실제 코드에서 **필수적으로 사용하는 라이브러리**입니다.  
- 예: `React`, `Express` 등  

## 2️⃣ `devDependencies`  
- **개발할 때만 필요한 라이브러리**입니다.  
- 예: `Webpack`, `ESLint` 등  

## 3️⃣ `peerDependencies`  
- 필요한 라이브러리이지만, **직접 설치하지 않고 사용자가 설치**하도록 합니다.  
- 주로 **플러그인이나 확장 기능을 만들 때 사용**됩니다.  

## 4️⃣ `optionalDependencies`  
- **있어도 되고 없어도 되는 선택적 의존성**입니다.  
- 특정 환경에서만 필요한 경우 사용됩니다.  

---

## `의존성 관리` 와 `package.json`  

## 📌 `package.json`과 `package-lock.json` 차이  

| 구분 | `package.json` | `package-lock.json` |
|------|--------------|------------------|
| **역할** | 프로젝트의 기본 정보와 의존성을 정의 | 설치된 패키지의 **정확한 버전 정보 저장** |
| **내용** | 패키지 이름, 버전, 스크립트, 의존성 목록 포함 | 의존성 트리 및 패키지의 **정확한 버전 기록** |
| **업데이트** | 직접 수정 가능 | 직접 수정하지 않으며, `npm install` 시 자동 업데이트 |
| **버전 관리** | 일반적으로 `^` 또는 `~` 로 범위를 지정 | 특정 버전이 고정되어 **일관된 환경 유지 가능** |
| **Git 관리** | 보통 Git에 포함됨 | **포함하는 것이 권장되지만**, `node_modules/`처럼 무시할 수도 있음 |

---

## 🔹 `package.json`과 `package-lock.json`의 역할 비교  

- `package.json`에 **"react": "^18.0.0"** 이라고 기록되어 있으면,  
  → **설치할 때 최신 18.x.x 버전**이 자동으로 설치될 수 있음.  

- `package-lock.json`에는 **"react": "18.2.0"** 처럼 **정확한 버전이 기록**되어 있음.  
  → `npm install`을 실행해도 **같은 버전**이 설치됨.  

- 따라서, **팀 프로젝트에서는 `package-lock.json`을 유지**하는 것이 중요함.  

---

## ❓ `package-lock.json`만 유지하면 될까?  
- **아니오! `package.json`도 반드시 유지해야 합니다.**  
- 그 이유는 다음과 같습니다.  

### ✅ `package.json`의 필요성  
1️⃣ **새로운 개발자가 프로젝트를 처음 설치할 때**  
   - `package-lock.json`만 있으면, 패키지 목록을 쉽게 확인할 수 없음.  
   - `package.json`을 보면 어떤 패키지가 사용되는지 쉽게 파악 가능.  

2️⃣ **의존성 업데이트 시 활용**  
   - `package.json`에서 **버전 범위(`^`, `~`)를 지정하여 유연한 업데이트** 가능.  
   - `package-lock.json`은 **버전을 고정**하기 때문에 **새로운 업데이트를 반영하려면 `package.json`이 필요**함.  

3️⃣ **배포 환경에서 중요한 역할**  
   - CI/CD(자동 배포) 시스템에서 **패키지 설치를 자동화**할 때 사용됨.  
   - `package.json`이 있어야 패키지 관리 시스템이 정상 작동함.  

---

## 🎯 결론  
✔ **`package.json`과 `package-lock.json`은 함께 유지해야 한다.**  
✔ `package.json`은 **패키지 목록과 버전 범위를 정의**하는 역할.  
✔ `package-lock.json`은 **정확한 버전을 고정**하여 동일한 환경을 유지하도록 보장.  
✔ 협업 및 배포 환경에서도 두 파일을 모두 포함하는 것이 바람직함. 🚀  

## `node_modules`의 재설치  

## 📌 `node_modules`를 다시 설치해야 하는 경우  
다음과 같은 **3가지 상황**에서 `node_modules`를 다시 설치해야 합니다.  

1️⃣ **팀 프로젝트 작업 중**  
   - GitHub에서 프로젝트 파일을 `clone`한 경우  

2️⃣ **개인 프로젝트 작업 중**  
   - 자신의 프로젝트를 **다른 PC에서 `clone`** 받아 개발해야 하는 경우  

3️⃣ **프로젝트에 문제가 발생한 경우**  
   - 의존성 충돌 또는 오류로 인해 `node_modules`를 다시 설치해야 하는 경우  

---

## 🔹 `clone`을 받은 프로젝트에서 `node_modules` 설치 방법  

### ✅ 1. 패키지 설치 명령 실행  
- `package.json`과 `package-lock.json`을 참고하여 패키지를 다시 설치합니다.  
```bash
npm install
```

## `node_modules`의 재설치  

## 📌 프로젝트에 오류나 의존성 문제가 발생한 경우  

### ✅ 1. `node_modules` 폴더와 `package-lock.json` 파일 삭제  
문제 해결을 위해 **기존 패키지와 종속성을 제거**합니다.  

```bash
rm -rf node_modules package-lock.json
```

## `node_modules`의 재설치  

## 📌 `package-lock.json`을 삭제해야 하는 경우  

### ✅ 1. `package-lock.json`이 손상되었거나, 잘못된 의존성이 있을 때  
- `package-lock.json`이 **의존성 충돌을 일으켜 문제가 발생**할 수 있음.  
- 예를 들면,  
  - 패키지를 여러 번 업데이트하면서 충돌이 발생하는 경우  
  - `package.json`을 수동으로 수정하여 **의존성 목록이 `package-lock.json`과 불일치**하는 경우  
- 이럴 때 **`package-lock.json`을 삭제하고 다시 생성하면 충돌이 해결될 수도 있음**.  

---

### ✅ 2. 최신 버전의 패키지를 다시 받고 싶을 때  
- 특정 패키지의 **최신 버전을 적용하고 싶다면, `package-lock.json`을 삭제하는 것이 효과적**.  
- 삭제 후 **다시 패키지를 설치하면 최신 종속성을 기반으로 새로운 `package-lock.json`이 생성**됨.  

```bash
rm -rf package-lock.json
npm install
```

## 개요 Part

## 📌 React의 기본 개념  

- React는 **`component` 단위로 개발**하여 **레고를 조립하듯이 앱을 완성**합니다.  
- `component`는 **작은 기능을 실행할 수 있는 하나의 모듈**입니다.  
- [공식 사이트](https://react.dev/)의 홈에서 `component`가 어떻게 사용되는지 설명하고 있습니다.  
- React가 `component`를 이용하여 **사용자 인터페이스(UI)** 를 구성하는 방법을 살펴보겠습니다.  

---

## 🛠 학습 방향  

- 이해를 돕기 위해 **React 코드 예제가 제공되지만, 코드 자체를 깊이 이해할 필요는 없습니다**.  
- **React `component`가 페이지로 변해가는 과정**에 집중해 주세요.  
- [React 공식 사이트](https://react.dev/)에 접속하여 예제 코드를 확인하세요.  
- 공식 사이트에서 **한글을 지원하지만, 자동 번역 기능은 사용하지 않는 것이 좋습니다**. ⚠️  
- **좌측 코드 영역에 마우스를 `hover`하면**, 우측 출력 화면에서 어느 부분인지 확인할 수 있습니다.  
- **`component`의 조립 과정에만 집중해 주세요!** 🚀  


## Component를 사용한 유저 인터페이스 생성  

## 📌 React에서 `component`란?  
- React에서는 `component`를 사용하여 **사용자 인터페이스(UI)** 를 구성할 수 있습니다.  
- `Video`, `Thumbnail`, `LikeButton` 등의 **React `component`를 생성**하고,  
  이 `component`들을 결합하여 **화면, 페이지, 앱 전체를 구성**합니다.  

---

## 🛠 첫 번째 예제: `Video.js` (함수형 `component`)  

- `Video.js`는 **함수형 `component`** 입니다.  
- `component`의 이름은 **파일명과 동일하게 하며**,  
  **PascalCase(첫 글자를 대문자로 시작)** 를 따릅니다.  
- `Video` `component`는 **`Thumbnail`과 `LikeButton`이라는 두 개의 `component`를 포함**합니다.  

```jsx
function Video({ video }) {
  return (
    <div>
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
      </a>
      <p>{video.description}</p>
      <LikeButton video={video} />
    </div>
  );
}
```

## 📌 React의 기본 개념과 컴포넌트 조립  

---

## 1️⃣ 개요  
- React는 **`component` 단위로 개발**하여 **재사용 가능한 UI 조각을 조립**하듯이 앱을 완성합니다.  
- `component`는 **작은 기능을 수행하는 독립적인 모듈**입니다.  
- React의 공식 문서에서는 `component`가 **사용되는 방식과 개념**을 설명하고 있습니다.  
- 이 문서에서는 **React `component`가 페이지로 변해가는 과정**에 집중하여 학습합니다.  

---

## 2️⃣ Component를 사용한 유저 인터페이스 생성  
- React의 `component`는 **각각의 역할을 수행하는 작은 조각**입니다.  
- 예를 들어, `Video`, `Thumbnail`, `LikeButton` 등의 `component`를 만들고  
  이를 조합하여 **UI를 구성**할 수 있습니다.  
- 첫 번째 예제에서는 `Video.js`라는 **함수형 `component`** 를 생성합니다.  
- `component`의 이름은 **파일명과 동일하게 하고, `PascalCase` 네이밍 규칙**을 따릅니다.  
- `Video.js` 내부에는 `Thumbnail`과 `LikeButton` 같은 **다른 `component`들이 포함**됩니다.  

```jsx
function Video({ video }) {
  return (
    <div>
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
      </a>
      <p>{video.description}</p>
      <LikeButton video={video} />
    </div>
  );
}
```

## 3️⃣ Props와 State 개념
✅ Props (Properties)
부모 component에서 자식 component로 데이터를 전달하는 방식입니다.
Props는 읽기 전용(immutable) 이며, component 내부에서 변경할 수 없습니다.

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```
```jsx
<Greeting name="React" />
```
🔹 Greeting 컴포넌트는 name이라는 props를 전달받아 Hello, React!를 출력합니다.

✅ State (상태)
State는 component 내부에서 관리되는 데이터입니다.
사용자의 입력, API 응답 등의 변화에 따라 component가 다시 렌더링될 수 있도록 합니다.
jsx
복사
편집

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

## 4️⃣ 필요한 곳에 상호작용 기능 추가
React component는 데이터를 수신하고, 화면을 업데이트해야 합니다.
사용자의 입력을 받아 새로운 데이터를 다른 component에 전달할 수도 있습니다.
이 과정에서 `React는 상호작용`을 통해 `얻은 데이터`를 `기반으로 화면을 동적으로 업데이트`합니다.
예제에서는 검색 입력 필드(SearchInput)와 비디오 목록(VideoList) 두 개의 component를 결합합니다.

```jsx
import { useState } from 'react';

function SearchableVideoList({ videos }) {
  const [searchText, setSearchText] = useState('');
  const foundVideos = filterVideos(videos, searchText);

  return (
    <>
      <SearchInput
        value={searchText}
        onChange={(newText) => setSearchText(newText)}
      />
      <VideoList videos={foundVideos} emptyHeading={`No matches for "${searchText}"`} />
    </>
  );
}
```
🔹 입력값이 변경될 때마다 `useState`를 통해 새로운 검색어를 저장하고, 비디오 목록을 필터링하여 업데이트합니다.

## 🎯 결론
✔ `React component`는 UI를 구성하는 작은 조각으로, 조합하여 완성된 인터페이스를 만듭니다.
✔ Props는 `부모에서 자식으로 데이터를 전달하는 방법`이며,
✔ State는 component 내부에서 `변경 가능한 데이터`로 `UI를 동적으로 업데이트`할 수 있도록 합니다.
✔ 검색 입력과 같은 상호작용을 추가하면, React component 간의 데이터 흐름을 `관리`할 수 있습니다.

## 5️⃣ full-stack App 개발을 도와주는 React Framework  

## 📌 React는 UI 라이브러리, Framework는 전체 앱 구축  
- React는 **라이브러리**이므로 `component`를 조합하여 UI를 만들 수 있지만,  
  **라우팅 및 데이터 가져오기 등의 기능을 직접 제공하지는 않습니다.**  
- 따라서 **전체 앱을 빌드하려면 Next.js 또는 Remix 같은 full-stack React Framework**를 활용하는 것이 좋습니다.  

---

## ✅ Next.js와 Remix의 역할  
- Next.js와 Remix는 **서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 지원하는 React 기반 Framework**입니다.  
- Next.js의 라우팅 방식 중 하나로,  
  **사이트의 `conf/[slug].js`와 같은 동적 라우팅 시스템을 제공**합니다.  
- 이를 활용하면 **URL을 기반으로 동적으로 페이지를 생성**할 수 있습니다.  

---

## ✅ React도 하나의 아키텍처  
- React는 **UI를 구성하는 아키텍처의 일부**로,  
  단순히 프레임워크 없이도 `component` 기반으로 화면을 만들 수 있습니다.  
- **아키텍처(software architecture)**  
  - 소프트웨어의 구성 요소들 사이의 **유기적 관계를 표현**하며,  
  - 설계와 업그레이드를 통제하는 **지침과 원칙**입니다.  
  - [Wikipedia](https://en.wikipedia.org/wiki/Software_architecture) 참조  

---

## ✅ Framework를 활용한 데이터 처리  
- Next.js 또는 Remix 같은 Framework을 사용하면,  
  - **서버에서 실행되거나 빌드 과정에서 데이터를 불러와 동적 `component`에서 사용할 수 있습니다.**  
  - 예를 들어, API 요청을 통해 데이터를 가져와 초기 렌더링 시 적용할 수 있습니다.  
- 또한 **파일 또는 데이터베이스에서 데이터를 읽어와 특정 `component`에 전달할 수도 있습니다.**  

---

## ⚠️ 결론  
✔ **full-stack App을 개발하려면 React 단독보다 Framework를 활용하는 것이 효율적**입니다.  
✔ Next.js 또는 Remix는 **라우팅, 서버 사이드 렌더링, 데이터 페칭**을 포함한 기능을 제공합니다.  
✔ 서버와 클라이언트 간의 데이터 흐름을 원활하게 관리하려면 **Framework을 적극 활용**하는 것이 좋습니다. 🚀  

## 6️⃣ 모든 플랫폼에서 최고의 성능을 발휘하는 React  

## 📌 React의 멀티 플랫폼 지원  
- React를 사용하면 **동일한 기술 스택**으로 **웹 앱과 네이티브 앱을 모두 개발**할 수 있습니다.  
- 각 플랫폼의 고유한 **강점을 활용하여, 일관된 UI/UX를 제공하는 인터페이스를 구현**할 수 있습니다.  

---

## ✅ 웹의 본질에 충실하기  
### ⚡ 빠른 페이지 로딩  
- **사용자는 웹 앱 페이지가 빠르게 로드되기를 기대**합니다.  
- React는 **서버에서 데이터를 가져오는 동안에도 HTML을 스트리밍**할 수 있어,  
  **JavaScript 코드가 로드되기 전에 콘텐츠를 점진적으로 채울 수 있습니다.**  
- 이를 통해 **초기 로딩 속도를 개선**할 수 있습니다.  

### 🖥️ 클라이언트 측 렌더링 최적화  
- **표준 웹 API를 활용하여 렌더링 도중에도 UI를 반응적으로 갱신**할 수 있습니다.  
- 이러한 기술들은 **사용자가 원하는 빠른 렌더링 환경을 제공**하는 데 도움을 줍니다.  

---

## 🎯 결론  
✔ React는 **웹과 네이티브 앱을 하나의 코드베이스로 개발할 수 있도록 지원**합니다.  
✔ **서버에서 데이터 로딩 중에도 콘텐츠를 스트리밍하여 빠른 첫 렌더링이 가능**합니다.  
✔ **표준 웹 API를 활용하여 더욱 반응적인 UI 경험을 제공**할 수 있습니다. 🚀  

## 7️⃣ 새로운 기능에 맞춰 업그레이드 하기  

## 📌 React의 변화에 대한 접근 방식  
- React는 **변화에 신중하게 접근**하며,  
  **새로운 기능을 추가하기 전에 철저한 검증 과정을 거칩니다.**  
- 모든 React **커밋(commit)** 은 **10억 명 이상의 사용자 환경에서 테스트**되었습니다.  
- Meta(구 Facebook)에서 관리하는 **10만 개 이상의 React `component`** 는  
  **모든 마이그레이션 전략을 검증하는 데 사용됩니다.**  

> 🔹 **마이그레이션(Migration)이란?**  
> 데이터나 소프트웨어를 한 시스템에서 **다른 시스템으로 이동하는 과정**입니다.  

---

## ✅ React의 지속적인 연구 및 개선  
- React 팀은 항상 **React를 개선하는 방법을 연구**합니다.  
- 일부 연구는 **몇 년이 걸릴 정도로 장기적인 프로젝트**일 수도 있습니다.  
- React는 **새로운 연구 아이디어를 제품에 적용할 때 높은 기준을 유지**합니다.  
- **검증된 접근 방식만이 React의 공식 기능으로 포함**됩니다.  

---

## 🎯 결론  
✔ React는 **엄격한 테스트를 거쳐 기능을 추가하며, 안정성을 최우선으로 고려**합니다.  
✔ **Meta에서 관리하는 거대한 `component` 환경을 활용해 마이그레이션 전략을 검증**합니다.  
✔ **연구 기반의 개선이 이루어지며, 신중한 검토 후에만 공식적으로 기능이 추가**됩니다. 🚀  


----------------------------------------------------------------------------------------------
# 📌 Git 설명과 설정방법 + Node.js란 무엇인가? 
<h1>🗓 **2025-03-13 / 2번 째 수업**</h1>

1. 상단 메뉴의 RUN을 열어서 새 터미널을 키고 터미널에서 + 버튼을 사용해서 git bash를 열기
2. git init 명령어 삽입
3. git config user.name < 본인이름 >
4. git config user.email < 본인 이메일 >
5. git config list 입력해서 잘 들어갔나 확인 / 나오는 방법은 Q를 입력
6. 왼쪽 패널에 소스 컨트롤에 가서 제목 입력하고 커밋, 제목은 영타로 59까지 입력이 가능하나, 엔터 두번을 입력하면 길이 제한이 없는 부제목을 쓸 수 있다.
7. 깃허브에 연결을 하지 않았기에 커밋하면 연결하겠냐고 물어본다. 한다고 하고 깃허브에 연동한다
8. 폴더는 자동으로 생성되고 이후에 README.md를 작성해서 커밋하면 된다 
9. 단. 깃허브를 사전에 가입해놨어야 하는 사전조건이 필요하다.
10. 노드.js를 인터넷에 검색하고 다운받고 그냥 디폴트로 설치
11. git bash 터미널에 $ npm -v , $ node -v를 입력해서 잘 나오나 확인
12. react-1 라는 프로젝트 만드는 방법 -> git bash 터미널에  npx create-react-app react-1 입력
13. 설치하겠냐고 묻는데 Y입력해서 설치하면 생김 -> 마지막에 Happy hacking! 이 뜨는지 확인
14. 컨트롤 + k + o를 입력해서 react-1 폴더를 선택해서 들어가기
15. git bash 켜서 npm start 입력 -> 브라우저에서 서버 실행됨
16. 서버 나가는 방법 -> 터미널에 컨트롤 + c 를 입력하면 서버가 종료됨
17. 새로 연 react-1의 터미널에서 git init을 입력
18. 웹찐다들 카톡방에 올려놓은 링크 타고가서 본인 깃허브 주소 올려놓기

---------------------------------------------------------------------------------

<h2> Node.js는 무엇인가? <h2>

## 개발자
![Ryan Dahl](https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1674813354/dev/Dahl_Ryan_wg0lg5.png)

Node.js는 **라이언 달(Ryan Dahl)** 이 2009년에 개발했습니다. 당시 웹 개발은 Apache 서버를 기반으로 한 **동기식 처리 방식**이 주류였고, 확장성과 성능의 한계가 있었습니다.

---

## <span style="background-color: yellow; color: black;">개발 동기</span>

라이언 달은 브라우저의 **비동기 이벤트 처리 모델**을 서버에서도 사용할 수 있도록 만들고 싶었습니다. 
특히, **파일 업로드 상태를 실시간으로 확인하지 못하는 기존 서버의 문제**를 해결하고자 했습니다.

---

## <span style="background-color: yellow; color: black;">기술적 핵심</span>

- **Node.js는 V8 JavaScript 엔진(Chrome에서 사용됨)을 기반으로 동작**합니다.
- **논블로킹 I/O 모델**과 **이벤트 기반 아키텍처**를 적용해 빠른 서버 처리가 가능하게 했습니다.

---

## <span style="background-color: yellow; color: black;">첫 발표와 반응</span>

- **2009년 JSConf EU**에서 처음 공개되었으며, 많은 개발자들이 관심을 가졌습니다.
- 기존의 서버 개발 방식과 달리 **단일 스레드 이벤트 루프 방식**이 혁신적인 개념으로 주목받았습니다.

---

## <span style="background-color: yellow; color: black;">현재의 Node.js</span>

- 현재는 **오픈소스 프로젝트**로, 많은 개발자와 기업들이 기여하고 있습니다.
- **2015년, Node.js 재단(Node.js Foundation)이 설립**되었고, 이후 OpenJS 재단과 통합되어 관리되고 있습니다.
- **Netflix, PayPal, LinkedIn** 등 대기업에서도 Node.js를 활용하며, 웹 서버, API 개발, 마이크로서비스 등 다양한 분야에서 사용되고 있습니다.

---

## <span style="background-color: yellow; color: black;">Node.js는 어디에 활용되는가?</span>

✅ **웹 서버 및 API 개발** – Express.js와 같은 프레임워크를 사용하여 **RESTful API, GraphQL 서버** 등을 구축하는 데 사용됨.
✅ **실시간 애플리케이션** – 채팅 앱, 실시간 데이터 스트리밍, WebSocket 기반 서비스(예: 온라인 게임, 주식 거래 시스템) 등에 활용됨.
✅ **마이크로서비스 및 서버리스** – AWS Lambda, Google Cloud Functions 등과 함께 사용하여 **확장성이 뛰어난 분산 시스템**을 구축하는 데 사용됨.

---

## <span style="background-color: yellow; color: black;">Node.js가 인기를 끄는 이유?</span>

- **비동기 이벤트 기반 아키텍처** – 논블로킹 I/O 방식으로 **빠른 성능과 높은 확장성 제공**
- **JavaScript 풀스택 개발** – 프론트엔드와 백엔드를 같은 언어(JavaScript)로 개발 가능, **생산성 증가**
- **강력한 npm 생태계** – 수많은 오픈소스 라이브러리와 모듈을 쉽게 활용 가능
- **마이크로서비스 및 서버리스 아키텍처 지원** – 확장성이 뛰어나고 클라우드 환경에 최적화
- **대기업 및 커뮤니티 지원** – Netflix, PayPal, LinkedIn 등 대기업에서 적극 사용하며, **활발한 커뮤니티 존재**

---

## <span style="background-color: yellow; color: black;">Node.js는 앞으로도 계속 발전할까?</span>


- **지속적인 업데이트 및 최적화** – V8 엔진 업그레이드와 성능 개선이 계속 이루어지고 있음.
- **Deno와의 경쟁 속 발전** – 창시자인 라이언 달이 만든 **Deno의 등장으로, Node.js도 보안과 성능을 개선 중**.
- **서버리스 및 클라우드 네이티브 환경 적합** – AWS Lambda, Azure Functions 등에서 널리 사용되며 확장성 강화.
- **npm 생태계의 성장** – 패키지 관리 및 모듈 생태계가 더욱 강력해지고 있음.
- **대기업과 커뮤니티 지원** – 오픈소스 커뮤니티와 **대기업(Netflix, Microsoft 등)의 지속적인 기여로 성장 가능성 높음**.

## <span style="background-color: yellow; color: black;">Node.js의 장단점</span>

### ✅ `장점`

- **빠른 성능** – Chrome V8 엔진을 기반으로 동작하며, 비동기 및 논블로킹(Non-blocking) 방식으로 요청을 처리하여 빠른 속도를 자랑함.
- **JavaScript 풀스택 개발 가능** – 프론트엔드와 백엔드를 모두 JavaScript로 개발할 수 있어, 개발 생산성이 높아지고 코드 재사용이 용이함.
- **활발한 생태계** – npm(Node Package Manager)을 통해 수많은 오픈소스 라이브러리를 활용할 수 있어 개발이 빠르고 효율적임.
- **실시간 애플리케이션 개발에 강함** – WebSocket 및 Socket.io를 활용하여 채팅, 스트리밍, 실시간 알림 등의 기능을 쉽게 구현할 수 있음.
- **마이크로서비스 및 서버리스 아키텍처에 적합** – AWS Lambda, Google Cloud Functions 등의 서버리스 환경에서 사용하기 좋으며, 마이크로서비스 구조와도 잘 맞음.

### ❌ `단점`

- **싱글 스레드 특성으로 CPU 집약적인 작업에 부적합** – Node.js는 싱글 스레드 이벤트 루프 기반이므로, CPU를 많이 사용하는 연산(예: 대규모 데이터 처리, 이미지 렌더링 등)에 취약함.
- **콜백 지옥(Callback Hell) 문제** – 비동기 코드가 많아질수록 콜백 함수가 중첩되면서 코드가 복잡해지고 가독성이 떨어지는 문제가 있음. *(→ 해결책: async/await, Promise 활용)*
- **보안 취약점** – npm 패키지 의존성이 많아 보안 취약점이 발생할 가능성이 크며, 자주 업데이트 및 관리를 해야 함.

--------------------------------------------------------------------------------------------------------
# 📌 시멘틱 버저닝 2.0.0 설명
<h1>🗓 **2025-03-06 / OT 1번째 수업**</h1>

## 각 자리별 작성법 및 의미

### 1. 주 버전(X)
- `0.Y.Z` 버전은 초기 개발을 위해 사용됩니다.
- `1.0.0` 버전은 최초의 공개 API를 정의합니다.
- 주 버전이 증가하면 부 버전(Y)과 수 버전(Z)은 초기화됩니다.

### 2. 부 버전(Y)
- 기존 주 버전에서 기능이 추가될 때마다 증가합니다.
- 부 버전이 증가해도 기존 기능과의 호환성이 유지됩니다.

### 3. 수 버전(Z)
- 같은 주, 부 버전에서 오류가 수정될 때마다 증가합니다.

> **⚠️ 주의:** 상위 버전이 증가하면 뒤의 버전(부 버전, 수 버전)은 모두 초기화해야 합니다.

---

## 시맨틱 버저닝의 초기 개발 단계

### ❓ 질문: 초기 개발 단계에서 버전 관리는 어떻게 할까?
✅ **답변:**  
가장 간단한 방법은 최초 개발 배포를 `0.1.0`으로 시작하고, 이후 배포마다 부 버전을 증가시키는 것입니다.

### ❓ 질문: 언제 `1.0.0`을 배포해야 할까?
✅ **답변:**  
소프트웨어가 실 서비스에서 사용되기 시작했다면 이미 `1.0.0`으로 간주할 수 있습니다.

<h2> 버전 관리 시스템 <h2>

## DVCS (분산 버전 관리 시스템)
- 시스템 구성은 CVCS(중앙 집중식 버전 관리 시스템)와 같은 **서버-클라이언트 구조**입니다.
- 클라이언트가 파일의 마지막 스냅샷을 가져오는 대신, **저장소를 전체 복제하여 사용**합니다.
- 서버에 문제가 발생해도 **클라이언트 중 하나의 저장소를 다시 서버로 복사하면 문제없이 복구**할 수 있습니다.

---

## Git의 역사
1. **초기 개발 (2005년)** – 리누스 토르발즈가 리눅스 커널 개발을 위해 **빠르고 분산된 버전 관리 시스템**으로 Git을 개발했습니다.
2. **성장과 도입** – 오픈 소스로 공개된 이후, GitHub 등의 플랫폼과 함께 널리 사용되며 개발 업계의 표준이 되었습니다.
3. **현재와 미래** – 지속적인 업데이트와 개선을 거듭하며, **소프트웨어 개발뿐만 아니라 문서 관리 등 다양한 분야에서 활용**되고 있습니다.

---

## Git의 개발 지향 방향
1. **리눅스 커널 같은 대형 프로젝트에도 유용할 것**
2. **비선형적인 개발 지원** (수천 개의 동시 다발적인 브랜치 관리)
3. **빠른 속도**
4. **단순한 구조**
5. **완벽한 분산 환경 지원**

