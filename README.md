<h1>202130413 신민수</h1>

# Git 설명과 설정방법 + Node.js란 무엇인가? , 2025-03-13 / 2번 째 수업

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

React project의 구조 및 역활
![구조설명](../vs코드/image/nodeinfo.jpg)

--------------------------------------------------------------------------------------------------------

# 시맨틱 버저닝 2.0.0 설명 , 2025-03-06 OT / 1번 째 수업

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

