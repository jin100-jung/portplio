export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 px-6 py-16 text-zinc-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute -top-10 right-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>
      <div className="relative mx-auto flex max-w-4xl flex-col gap-16">
        {/* 헤더 / 인트로 */}
        <section className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-10 sm:flex-row">
          <div>
            <p className="text-sm font-semibold tracking-wide text-white/80">
              PORTFOLIO
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              <span className="bg-gradient-to-r from-fuchsia-300 via-white to-cyan-200 bg-clip-text text-transparent">
                홍길동
              </span>
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/85">
              프론트엔드 / 웹 개발자입니다. 사용자 경험을 중요하게 생각하며, React와
              Next.js를 중심으로 웹 서비스를 만들고 있습니다.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 text-sm text-white/80">
            <p className="text-white/85">서울 · 대한민국</p>
            <a
              href="mailto:your.email@example.com"
              className="pointer-events-auto inline-flex items-center rounded-full bg-white/5 px-3 py-1 font-semibold text-white ring-1 ring-white/10 hover:bg-white/10"
            >
              your.email@example.com
            </a>
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noreferrer"
              className="pointer-events-auto inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-white/90 ring-1 ring-white/10 hover:bg-white/10"
            >
              GitHub 바로가기
            </a>
          </div>
        </section>

        {/* 소개 섹션 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">소개</h2>
          <p className="text-sm leading-7 text-white/85">
            3년 차 웹 개발자로, 직관적인 인터페이스와 유지보수가 쉬운 코드를
            지향합니다. 새로운 기술을 실무에 적용하고, 팀과 함께 성장하는 것을
            좋아합니다. 간단한 아이디어도 빠르게 프로토타입으로 구현해보는 것을
            즐깁니다.
          </p>
        </section>

        {/* 스킬 섹션 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">기술 스택</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur">
              <h3 className="mb-2 font-semibold text-white">Frontend</h3>
              <ul className="space-y-1 text-white/85">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur">
              <h3 className="mb-2 font-semibold text-white">Backend</h3>
              <ul className="space-y-1 text-white/85">
                <li>Node.js (Express)</li>
                <li>REST API 설계</li>
                <li>간단한 DB 설계</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur">
              <h3 className="mb-2 font-semibold text-white">Tools</h3>
              <ul className="space-y-1 text-white/85">
                <li>Git / GitHub</li>
                <li>Figma</li>
                <li>Jira / Notion</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 프로젝트 섹션 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">프로젝트</h2>
          <div className="space-y-4">
            <article className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm backdrop-blur">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-white">프로젝트 이름 1</h3>
                <span className="text-xs text-white/70">
                  2024.01 - 2024.03
                </span>
              </div>
              <p className="mt-2 text-white/85">
                간단한 프로젝트 설명을 여기에 작성합니다. 어떤 문제를 해결했는지,
                어떤 기술을 사용했는지를 한두 문장으로 정리해 주세요.
              </p>
              <p className="mt-2 text-xs text-white/70">
                사용 기술: Next.js, TypeScript, Tailwind CSS
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href="#"
                  className="pointer-events-auto inline-flex items-center rounded-full bg-gradient-to-r from-fuchsia-500/90 to-cyan-400/80 px-3 py-1 text-xs font-semibold text-slate-950 hover:from-fuchsia-400 hover:to-cyan-300"
                >
                  데모 보기
                </a>
                <a
                  href="#"
                  className="pointer-events-auto inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white hover:bg-white/10"
                >
                  GitHub
                </a>
              </div>
            </article>

            <article className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm backdrop-blur">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-white">프로젝트 이름 2</h3>
                <span className="text-xs text-white/70">
                  2023.06 - 2023.09
                </span>
              </div>
              <p className="mt-2 text-white/85">
                또 다른 프로젝트 설명을 작성합니다. 본인의 역할과 기여도를 중심으로
                정리하면 좋습니다.
              </p>
              <p className="mt-2 text-xs text-white/70">
                사용 기술: React, Zustand, Styled-Components
              </p>
            </article>
          </div>
        </section>

        {/* 연락 섹션 */}
        <section className="mt-4 border-t border-white/10 pt-6 text-sm text-white/80">
          <p className="text-white/85">
            함께 일하거나 협업을 원하신다면 언제든지 메일로 연락 주세요.
          </p>
          <p className="mt-2 inline-flex rounded-full bg-white/5 px-3 py-1 font-semibold text-white ring-1 ring-white/10">
            your.email@example.com
          </p>
        </section>
      </div>
    </main>
  );
}
