# David Maharjan · QA Engineer Portfolio

A personal portfolio built with plain **HTML, CSS and JavaScript**. No framework and no build step.
It has an end-to-end UI test suite written in **Python + Playwright** that runs automatically before every deploy.

```
Portfolio/
├── index.html                  ← all the text on the page
├── css/style.css               ← colours and fonts (variables at the top)
├── js/main.js                  ← theme switch, mobile menu, email panel, toolbox tabs
├── assets/
│   ├── photo.jpg               ← your photo
│   ├── David_Maharjan_CV.pdf   ← your CV (Download CV button)
│   └── favicon.svg
├── tests/test_portfolio.py     ← UI tests (Python + Playwright)
├── CNAME                       ← custom domain for GitHub Pages
└── .github/workflows/deploy.yml  ← test, then deploy
```

## Run the site on your computer

Open `index.html` in a browser, or serve the folder (this is what the tests expect):

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Run the UI tests

One time:

```bash
python3 -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\Activate.ps1
pip install -r requirements.txt
playwright install chromium
```

Keep the server above running in one terminal, and in a second terminal (with the venv active) run:

```bash
pytest
```

Useful options: `pytest --headed --slowmo 300`, or `pytest --browser firefox --browser webkit`.

## Edit your content

- **Text:** edit `index.html` directly. Each section is marked with a comment, like `<!-- Selected work -->`.
- **Colours:** change the variables at the top of `css/style.css`. `--primary` is the green.
- **Photo:** replace `assets/photo.jpg`, keeping the same name. A square-ish photo under 500 KB works best.
  If the photo is missing, the page shows the initials "DM" instead.
- **CV:** replace `assets/David_Maharjan_CV.pdf`, keeping the same name.
- **Project links:** the "View on GitHub" links in `index.html` point to your profile. Change them to each project's repository.

The tests look for a few hooks, so keep these when editing: the `data-testid` attributes, the section ids
(`services`, `work`, `process`, `journey`, `contact`), the `.nav` links to them, and exactly four `work-card` projects.
If you add or remove a project, update the count in `test_work_section_shows_projects`.

## Publish on GitHub Pages

1. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push to `main`. The workflow copies the site files into `_site`, serves them, runs all the UI tests,
   and deploys only if every test passes.

A failing test blocks the deploy, which is a nice thing to mention in interviews.
