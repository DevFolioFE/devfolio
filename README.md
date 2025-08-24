# 📊 DevFolio – Developer Portfolio Hub

> 개발자를 위한 Behance, 자동화된 프로젝트 포트폴리오 플랫폼 🚀

## 🌟 Intro

- 기존 개발자 포트폴리오는 **코드 위주(GitHub)** 또는 **글 위주(블로그)**라 시각적 요소가 부족합니다.
- 디자이너들은 Behance/Dribbble이 있지만, 개발자만의 공간은 없습니다.

👉 그래서 **개발자를 위한 Behance**, `DevFolio`를 만듭니다.

## 🔑 Core Features

1. **프로젝트 관리**
   - GitHub API 연동 → repo 자동 불러오기
   - 설명 추가 가능

2. **개인 프로필**
   - 기술 스택, 소셜 링크, 소개
   - 활동 통계 (stars, repo 수)

3. **포트폴리오 페이지**
   - `devfolio.app/u/<username>` 자동 생성
   - 로그인 없이 열람 가능

4. **AI 기능 (추후)**
   - 설명 요약/번역, 태그 추천, 썸네일 생성

## ⚙️ Tech Stack

- **Frontend:** Next.js (App Router) + TypeScript + Tailwind CSS
- **UI/UX:** Framer Motion
- **State:** TanStack Query + Zustand
- **Auth/DB:** Firebase Auth + Firestore + Storage
- **Infra:** Vercel + GitHub Actions (CI/CD)
- **API:** GitHub REST/GraphQL API
- **AI:** OpenAI API (후순위)

## 🚀 Getting Started

```bash
# 레포 클론
git clone https://github.com/username/devfolio.git
cd devfolio

# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev
```

---

### 7. 로드맵

```markdown
## 📌 Roadmap (3개월)

- 1개월차: MVP (로그인, GitHub 연동, 마이페이지 공개)
- 2개월차: 편집/공유 기능 강화
- 3개월차: AI 기능 + 모바일 최적화
```
