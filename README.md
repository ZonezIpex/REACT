<h1>202130413 신민수</h1>

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

------------------------------------------------------------------------------------

# Git 설명과 설정방법 + README.md 파일에 수업강의를 적고 Git으로 커밋  , 2025-03-13 / 2번 째 수업ㅇㅇ

