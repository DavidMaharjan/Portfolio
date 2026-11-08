# David Maharjan · QA Engineer Portfolio

A personal portfolio built with **HTML, CSS, JavaScript and React** (bundled with **Vite**), with an
end-to-end UI test suite written in **Python + Playwright** that runs automatically before every deploy.

---

## 1. Install the tools (one time)

| Tool | Why you need it | Get it |
|---|---|---|
| **Node.js 22 LTS** (includes npm) | Runs React/Vite | https://nodejs.org → download "LTS" |
| **Python 3.10+** | Runs the Playwright tests | https://www.python.org/downloads/ (Windows: tick **"Add python.exe to PATH"**) |
| **Git** | Version control and GitHub | https://git-scm.com/downloads |
| **VS Code** (recommended) | Editor | https://code.visualstudio.com |

Check everything installed. Open a new terminal and run:

```bash
node -v
npm -v
python --version
git --version
```

Useful VS Code extensions: **ES7+ React snippets**, **Prettier**, **Python**, **Playwright Test for VS Code**.

## 2. Run the site on your computer

From inside this folder:

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:5173. The page reloads by itself every time you save a file.

## 3. Run the UI tests

Create a Python virtual environment and install the test tools (one time):

```bash
python -m venv .venv
```

Activate it. macOS/Linux:

```bash
source .venv/bin/activate
```

Windows (PowerShell):

```bash
.venv\Scripts\Activate.ps1
```

Then:

```bash
pip install -r requirements.txt
```

```bash
playwright install chromium
```

Keep `npm run dev` running in one terminal, and in a second terminal (with the venv active) run:

```bash
pytest
```

Useful options:

```bash
pytest --headed --slowmo 300
```

```bash
pytest --browser firefox --browser webkit
```

## 4. Edit your content

**All the text is in one file: `src/data/content.js`.** Change it, save, and the page updates.

### Add your photo
1. Choose a clear, square-ish photo of your face (JPG, ideally under 500 KB).
2. Rename it to exactly **`photo.jpg`**.
3. Put it in the **`public`** folder.

Until a photo is there, the site shows your initials "DM" instead.

### Your CV (Download CV button)
Your CV is already at **`public/David_Maharjan_CV.pdf`**. Every "Download CV" button links to it.
To update your CV later, replace that file with your new PDF **using the same filename**, then redeploy.

### Social links
LinkedIn, GitHub and email are set in `profile` at the top of `content.js`.
Project "View code" links are the `github:` lines under `projects`. Point them to the real repositories.

```
portfolio-react/
├── public/
│   ├── photo.jpg              ← YOUR PHOTO (add this)
│   ├── David_Maharjan_CV.pdf  ← your CV
│   └── favicon.svg
├── src/
│   ├── data/resume.js         ← ALL your text
│   ├── styles/global.css      ← colours and fonts (top of file)
│   └── components/            ← one file per section
├── tests/test_portfolio.py    ← UI tests (Python + Playwright)
└── .github/workflows/deploy.yml  ← test + deploy automatically
```

## 5. Publish it free on GitHub Pages

1. Create a new **public** repository on GitHub, for example `portfolio`.
2. Push this folder:
   ```bash
   git init
   ```
   ```bash
   git add .
   ```
   ```bash
   git commit -m "Initial portfolio"
   ```
   ```bash
   git branch -M main
   ```
   ```bash
   git remote add origin https://github.com/DavidMaharjan/portfolio.git
   ```
   ```bash
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Open the **Actions** tab. The workflow builds the site, runs all the UI tests, and deploys only if they pass.
5. Your site will be live at `https://davidmaharjan.github.io/portfolio/`.

Tip: name the repository `DavidMaharjan.github.io` to get the shorter address `https://davidmaharjan.github.io/`.

Every later `git push` redeploys the site. A failing test blocks the deploy, which is a nice thing to
mention in interviews.

**Alternatives:** Vercel or Netlify also work. Import the repo, set the build command to `npm run build` and the output folder to `dist`.

## 6. Ideas for next steps

- Push your Playwright learning project to GitHub and point the project's `link` in `content.js` to it.
- Add a Postman collection export to a repo and link it from the API Testing card.
- Add an SQL practice project once you've built one.
- Add a test of your own to `tests/test_portfolio.py` each time you add a feature.
