🎥 Next.js Movies
Live Demo: nextjs-movies-ten-chi.vercel.app

📚 About the Project
Next.js Movies는 영화 데이터를 기반으로 페이지를 전환하고, 각 영화에 대한 정보를 제공하는 간단한 토이 프로젝트입니다.
Next.js의 강력한 기능인 Dynamic Routing, Loading Page, Not Found Page 등을 활용하여 제작되었습니다.

✨ Features
Dynamic Routing: 영화 정보를 동적으로 로드하고 상세 페이지로 전환.
Custom Components:
Navigator: 페이지 전환을 위한 네비게이터 컴포넌트.
Movie: 개별 영화 카드를 렌더링하는 컴포넌트.
CSS Modules: 각 컴포넌트에 스타일을 모듈화하여 적용.
Loading Page: 데이터 로딩 중 로딩 화면 제공.
Not Found Page: 존재하지 않는 페이지로 접근 시 404 페이지 제공.
TypeScript: 타입 안정성을 보장하며 개발.
🛠️ Tech Stack
Framework: Next.js
Languages: TypeScript, JavaScript
CSS: CSS Modules
Deployment: Vercel
Tooling:
ESLint: 코드 품질 보장.
Prettier: 코드 스타일 유지.

🚀 Getting Started
1. Clone the Repository
bash
코드 복사
git clone https://github.com/your-username/nextjs-movies.git
cd nextjs-movies
2. Install Dependencies
bash
코드 복사
npm install
# or
yarn install
3. Run Development Server
bash
코드 복사
npm run dev
# or
yarn dev
Open http://localhost:3000 to view it in your browser.

📂 Project Structure
plaintext
코드 복사
src/
├── app/
│   ├── (home)/                # Home page directory
│   │   ├── page.tsx           # Home page component  
│   │
│   ├── movies/
│   │   ├── [id]/              # Dynamic movie detail routing
│   │   │   ├── page.tsx       # Movie detail page
│   │
│   ├── not-found.tsx          # Custom 404 page
│
├── components/
│   ├── movie.tsx              # Movie card component
│   ├── navigator.tsx          # Navigation component
│   ├── movie-info.tsx         # Movie info details component
│   ├── movie-videos.tsx       # Movie videos details component
│   ├── loading.tsx            # Loading page for suspense
│
├── styles/                    # Shared styles
│   ├── globals.css            # Global CSS
│   ├── home.module.css        # Home CSS
│   ├── movie-info.module.css  # Movie info CSS
│   ├── movie-videos.module.css# Movie Videos CSS
│   ├── movie.module.css       # Movie CSS
│   ├── navigation.module.css  # Navigation CSS
│
└── README.md                  # Project documentation
