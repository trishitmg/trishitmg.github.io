# Your research website: publishing and editing guide

This is a complete static website prepared for GitHub Pages. It has a research homepage and separate pages for NECTR, CoSTA, and neural_shift_cuda. The files are ready to upload; **the website is not live yet**.

## 1. What GitHub Pages actually does

GitHub stores the website files in a **repository**, and GitHub Pages publishes those files as a **website**. Your visitors open the website address; they do not need a GitHub account.

These GitHub features have different purposes:

| Feature | Purpose |
| --- | --- |
| Repository | Stores files, edits, and version history |
| GitHub Pages | Hosts your public website |
| GitHub Projects | Tracks issues and tasks; it is not website hosting |
| README | Explains a repository; it is not automatically a polished project website |

For a personal academic portfolio, a **user site** is a useful home for multiple research projects:

| Item | Recommended value |
| --- | --- |
| GitHub account | `trishitmg` |
| Website repository | `trishitmg.github.io` |
| Homepage after publication | `https://trishitmg.github.io/` |
| NECTR page | `https://trishitmg.github.io/projects/nectr.html` |
| CoSTA page | `https://trishitmg.github.io/projects/costa.html` |
| CUDA acceleration page | `https://trishitmg.github.io/projects/neural-shift-cuda.html` |

These are the **intended addresses**, not verified live links. The account name and the repository name must match exactly for a user site. If you choose another GitHub account, use that account's username instead.

A normal project repository such as `research-portfolio` would instead have a project-site address like `https://trishitmg.github.io/research-portfolio/`. The website uses relative asset links, so it also supports that arrangement.

GitHub Pages supports static HTML, CSS, JavaScript, images, and PDFs. It does not run a Python/PyTorch backend. The image sliders on this site compare published saved results; they do not perform live model inference. A future live reconstruction demo would need separate compute hosting.

## 2. Publish through the GitHub website — no terminal needed

1. Download and extract `trishit_research_portfolio.zip`. Open its `portfolio` folder.
2. Sign in to GitHub as **trishitmg**.
3. Open <https://github.com/new>.
4. Set the repository name to **trishitmg.github.io** and visibility to **Public**. If that repository already exists, inspect it first; do not replace an existing personal website blindly. This package can instead be published in a new `research-portfolio` repository.
5. Create the repository. Adding a README during creation is optional; this package already contains one.
6. On the repository page, choose **Add file → Upload files**. For an empty repository, GitHub also presents an upload link in its initial setup instructions.
7. Upload the **contents of `portfolio`**, preserving `assets/` and `projects/`. Do not upload the outer `portfolio` folder itself, and do not upload only the ZIP.
8. Enter a commit message such as `Add academic research portfolio`, then commit the upload.
9. Check that `index.html`, `styles.css`, and `site.js` are directly at the repository root. The three project files should be under `projects/`, and the figure/CV files under `assets/`.
10. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**. Select **main**, select **/(root)**, and click **Save**.
11. Wait for the Pages deployment to complete. GitHub states that publishing changes can take up to 10 minutes. The repository's **Actions** tab shows its build/deployment status. Return to **Settings → Pages** and use **Visit site** when it becomes available.
12. Open the public address in a private/incognito window to verify that it is accessible without signing in. Check the homepage, all three project pages, CV, paper links, and image sliders.

If your default branch has a different name, select that branch instead of `main`. This website does not need a custom GitHub Actions workflow, Node.js, npm, Jekyll, or an additional hosting subscription.

The package contains `.nojekyll`. This hidden file disables Jekyll processing. If it is omitted by a drag-and-drop upload, create it using **Add file → Create new file**, with the name `.nojekyll` and an empty body. The ordinary HTML website also works under GitHub's default branch publishing, but retaining this file makes the static publishing behavior explicit.

## 3. Where to make each change

| Desired change | File to edit |
| --- | --- |
| Your name, introduction, affiliation, or research interests | `index.html` |
| Homepage project summaries and buttons | `index.html` |
| Contact email or professional profile links | `index.html` |
| NECTR description, authors, citation, or paper/code links | `projects/nectr.html` |
| CoSTA description, authors, citation, or paper/code links | `projects/costa.html` |
| CUDA explanation, benchmarks, and code links | `projects/neural-shift-cuda.html` |
| Colors, fonts, spacing, and mobile layout | `styles.css` |
| Comparison and figure-viewer behavior | `site.js` |
| CV or figure files | `assets/` |

The HTML files include `<!-- EDIT: ... -->` comments marking the main editable sections. These comments do not appear on the website.

### Change text in the browser

1. Open the file in the repository's **Code** tab.
2. Click its pencil/edit button.
3. Find the text you want to change. Use your browser's Find command if needed.
4. Change the words between the HTML tags, keeping the surrounding tags intact.
5. Click **Commit changes**, enter a short description, and commit to the publishing branch.
6. Wait for Pages to publish the new version, then refresh the site.

For example:

```html
<p class="intro">I develop learned image priors with mathematical guarantees.</p>
```

You can change the sentence without changing `<p class="intro">` or `</p>`.

### Change a button's destination

The `href` is its destination; the words between the tags are its label:

```html
<a class="button" href="https://arxiv.org/abs/2607.23347">Paper</a>
```

Replace the URL to update the destination. If the same resource appears on the homepage and its project page, update both occurrences. A visible `&` in ordinary HTML should be written as `&amp;` when appropriate.

### Update the CV

Upload the new PDF using the same filename **`assets/trishit-mukherjee-cv.pdf`**, replacing the existing file. Keeping this path unchanged updates every CV button automatically. There is no need to edit the HTML for a routine CV replacement.

The provided CV is your latest one-page version. Before public upload, review whether you want all information in that CV to remain public.

### Replace a figure

Keep the same filename in `assets/` if you want the existing image links to continue working. For a new filename, update its `<img src="...">` reference and any enlarged-view references. Update the caption, setup, and reported PSNR at the same time.

Comparison pairs should show the same image with matching dimensions, crop, and alignment. Otherwise the slider boundary will compare different spatial locations. Update the two images together. Retain the original method labels and distinguish per-image scores from dataset averages.

### Update CUDA benchmarks

The CUDA project page contains a timing table in `projects/neural-shift-cuda.html` and a speedup chart in `assets/cuda-speedups.svg`. Update both, their captions, and the NECTR page’s related-software paragraph when replacing benchmark results. State whether timings refer to inference, backward, or the complete training step, and preserve the batch size, image size, shift radius, dtype, GPU, and source version where known. The current chart uses reported README medians, not measurements performed while building the website.

### Change the color palette

The start of `styles.css` defines reusable variables:

```css
--ink: #111b2e;
--muted: #59657a;
--blue: #2358cf;
--navy: #101d38;
--wash: #f3f6fb;
```

For a different accent color, change `--blue`. Keep text/background contrast readable, especially on buttons. Update the favicon colors in `assets/favicon.svg` if you substantially change the palette.

## 4. Add another research project

1. Copy a project HTML file to `projects/new-project.html`.
2. Change its browser title, description metadata, project heading, authors, venue, introduction, links, figures, and BibTeX.
3. Replace its showcase with your new project's actual outputs. If it does not need a comparison slider, remove that section.
4. Give any `id` attributes and their matching controls sensible names; each ID must be unique within its page.
5. Add the figures under `assets/` with clear filenames.
6. Copy an `<article class="project">...</article>` block in `index.html`. Replace the title, description, tags, authors, image, and page destination.
7. Update the research introduction if your new project changes the portfolio’s scope.
8. Check navigation on the new page. Replace any previous project's related-page text.
9. Commit the changes and check the published page.

The homepage is intended for professors and research collaborators to scan quickly. Keep project summaries short and put methods, experimental setup, and detailed figures on their dedicated project pages.

## 5. Preview and edit locally

For small changes, you can double-click `index.html`. All styling and image-comparison code are local; there are no external font or library downloads. Citation copying may be restricted when opening a `file://` page, depending on the browser. It is intended to work on the HTTPS site, and the page provides a manual-copy fallback.

For a local web preview, use Terminal from the extracted `portfolio` folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Press `Control+C` in Terminal to stop the server. Edit the files in VS Code or another text editor and refresh the browser to see your changes. Local edits appear on the public site only after you upload or push them to GitHub.

If you want a Git workflow after initial setup:

```bash
git clone https://github.com/trishitmg/trishitmg.github.io.git
cd trishitmg.github.io
```

Edit your files, preview them, then run:

```bash
git add index.html projects styles.css site.js assets
git commit -m "Update research portfolio"
git push
```

Git may ask you to authenticate. Do not put access tokens into website files. A failed push does not publish your changes; resolve authentication first, then retry.

## 6. Understand commits, history, and rollback

A **commit** records a version of your files with a description of what changed. GitHub keeps the history, so you can inspect previous text and recover from mistakes.

- For a small correction, edit the affected file again and make another commit.
- To recover a previous file, open its **History**, select the relevant old revision, copy its contents, and restore them through the editor in a new commit.
- With Git locally, `git revert <commit-sha>` creates a new commit undoing an earlier commit. Push the revert to publish the restoration. Inspect the changes first if the commit affected multiple files.

Use short, descriptive commit messages such as `Update CV`, `Add NECTR ablation figure`, or `Correct CoSTA citation`.

## 7. Troubleshooting

| Symptom | What to check |
| --- | --- |
| Homepage is 404 | The Pages deployment finished; Pages points to the correct branch and root; `index.html` is at that root |
| An unexpected older website appears | An existing user-site repository was already configured; inspect its current source rather than overwriting it |
| Website shows files or a README instead of the designed page | `index.html` is missing or was uploaded inside an extra `portfolio/` directory |
| No styling | `styles.css` is next to `index.html`; its filename and link match exactly |
| A project page is 404 | The corresponding HTML file is in `projects/` and the link matches its case |
| Images or the CV are missing | `assets/` was uploaded; file paths and capitalization match exactly |
| A recent edit is missing | Check deployment status and allow publishing time; then perform a hard refresh |
| Image slider is inactive | `site.js` was uploaded and is correctly linked on the project page |
| Copy BibTeX is unavailable locally | Copy the displayed text manually, or use the HTTPS published page |
| Pages settings cannot be changed | You need repository administration/maintainer access to configure Pages |

Use lowercase filenames without spaces. Paths on the public host are case-sensitive: `Figure.png` and `figure.png` are different files.

## 8. Use the page in PhD applications

Once publication is verified:

1. Add the homepage URL to your CV, email signature, and GitHub profile's website field.
2. Link a specific project page in an email when it is especially relevant to that professor's work.
3. Keep the CV and publication/code links current. Add your individual contribution only with wording you have reviewed.
4. Check the site on a phone and without being logged into GitHub.

A custom domain is optional. You can add one later under **Settings → Pages → Custom domain** and configure its DNS using GitHub's instructions. The free `github.io` address is sufficient to share immediately after deployment.

## 9. Current handoff status

Completed: website files, all three project pages, published-result showcases, CV integration, accessibility-oriented markup, and this maintenance guide.

Not completed: creating the GitHub repository, uploading these files, enabling Pages, and verifying a public deployment. The GitHub connector exposed only a collaborator repository, the local GitHub CLI credential was invalid, and browser access to GitHub was declined. No repository was created or modified during this task.

To let an assistant complete publishing in a follow-up, create the public repository and grant the connected GitHub app access to that specific repository. Repository write access enables file updates; Pages setup may still require you to enable publishing in Settings. Alternatively, follow the browser upload steps above yourself.

## Official references

- [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Configuring the publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart)
- [Managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

Guide prepared on 4 October 2026. Interface labels may change; GitHub's current documentation is authoritative.
