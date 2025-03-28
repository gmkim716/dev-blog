# 개발자 김경민 블로그

- PR 테스트를 위한 기록을 추가합니다.
- ISSUE 연결을 위한 기록을 추가합니다.

## 개발 스펙

### Frontend

- Next.js 15(app router)
- tailwindCSS

### Backend

- Nest.js (예정)
- Supabase

### Deploy

- Vercel
- 환경변수

## FSD 아키텍처 사용법

### 구조 가이드 라인

#### 1. app/ (Next.js App Router)

Next.js의 파일 시스템 기반 라우팅 구조
각 라우트의 page.tsx, layout.tsx, loading.tsx 등 포함
전역 프로바이더, 레이아웃, 메타데이터 설정
예: app/(auth)/login/page.tsx, app/layout.tsx, app/providers.tsx

#### 2. widgets/ (위젯)

복합적이고 독립적인 인터페이스 블록
페이지의 주요 구성 요소를 형성
예: widgets/header/, widgets/sidebar/, widgets/user-profile/

#### 3. features/ (기능)

사용자와 상호작용하는 비즈니스 로직을 포함
사용자 시나리오를 구현하며 구체적인 문제 해결
예: features/auth/, features/article-creating/, features/theme-switching/

#### 4. entities/ (엔티티)

비즈니스 로직 모델과 그 표현
데이터 구조와 그를 조작하는 메서드
예: entities/user/, entities/post/, entities/product/

#### 5. shared/ (공유)

재사용 가능한 기능적으로 독립된 코드
UI 키트, 유틸리티, API 클라이언트 등
예: shared/ui/, shared/lib/, shared/api/

### 의존성 규칙

1. 계층은 자신보다 아래 계층에만 의존가능

- shared(공통) > entities(비즈니스 엔티티, 데이터 모델) > features(비즈니스 로직이 포함된 기능) > widgets(독립적인 UI, 여러 기능이 결합) > pages

2. 같은 계층 내에서는 다른 슬라이스에 의존하지 않아야 함

3. shared는 어떤 계층에도 의존성을 가지지 않음

cf. 상위 계층은 하위 계층의 기능을 이용할 수 있지만, 그 반대는 불가능

- features 계층은 entities, shared 코드를 사용할 수 있지만, entities는 features에 있는 코드를 사용할 수 없음

## 구현하면 재밌을 것 같은 목록

[] 메인 페이지

- 자기소개
- 최신글
- (포트폴리오)
- 구독하기

[] 아티클 페이지

- 카드 형태의 글 목록
- nx3 형태

[] 포트폴리오 페이지

- 카드 형태의 포트폴리오

[] 마우스 커서 이벤트
