git init
git add package.json package-lock.json public/ tsconfig.json next.config.ts .gitignore
$env:GIT_COMMITTER_DATE="2026-06-02T12:00:00+0530"
git commit --date="2026-06-02T12:00:00+0530" -m "Initial commit: Next.js setup and assets"
git add .
$env:GIT_COMMITTER_DATE="2026-06-03T07:20:00+0530"
git commit --date="2026-06-03T07:20:00+0530" -m "feat: complete landing page UI, legal docs, and responsive design"
git branch -M main
git remote add origin https://github.com/TharindaMarasingha/Paply-landing.git
git push -u origin main
