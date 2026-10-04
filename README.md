# Trishit Mukherjee — research portfolio

A static academic website with a homepage, two publication pages, and a research software page:

- **NECTR — ICML 2026**: Trainable Nonexpansive Denoisers for Contractive Image Reconstruction.
- **CoSTA — ECCV 2026**: Stabilizing Deep Reconstruction Operators with Contractive Anchoring.
- **neural_shift_cuda — research software**: CUDA acceleration for the kernel aggregation in NECTR and related denoisers.

Includes published research figures, accessible image-comparison sliders, figure enlargement, paper/code links, citation copying, and the current one-page CV. The comparisons show saved paper outputs; they do not run a neural network in the browser.

## Publish

The recommended repository is `trishitmg/trishitmg.github.io`. Upload **the contents of this folder** to the repository root, then select **Settings → Pages → Deploy from a branch → main → /(root) → Save**.

The resulting user site will be `https://trishitmg.github.io/` once GitHub successfully publishes it. This package has not yet been uploaded or deployed.

See [GITHUB_PAGES_GUIDE.md](GITHUB_PAGES_GUIDE.md) for the full setup, editing, troubleshooting, and rollback guide.

## Edit

| File | Purpose |
| --- | --- |
| `index.html` | Homepage biography, contact details, and project cards |
| `projects/nectr.html` | NECTR project text, links, figures, and citation |
| `projects/costa.html` | CoSTA project text, links, figures, and citation |
| `projects/neural-shift-cuda.html` | CUDA aggregation explanation, reported benchmarks, and code links |
| `styles.css` | Shared colors, typography, layout, and mobile styles |
| `site.js` | Image comparisons, figure enlargement, and citation copying |
| `assets/` | Figure crops, favicon, and CV PDF |
| `.nojekyll` | Publishes static files without Jekyll processing |

There is no package installation or compilation step. Open `index.html` locally to review it, or use `python3 -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Research and asset provenance

Publication titles, authors, venues, DOI, and links were checked against the latest one-page CV, the papers, the NECTR repository, and the Springer publication page on 4 October 2026.

- NECTR figures 1–3 were extracted from the supplied ICML manuscript, dated 29 June 2026 in the source collection. The operator description explicitly distinguishes raw normalization from the symmetrized denoiser and the fixed-reference convergence guarantee.
- CoSTA figures 4, 5, 6, and 7 were extracted from the supplied 26 June 2026 manuscript. Figure 6 values and the figure descriptions were checked against the later 4 August 2026 manuscript. The crops retain the original image annotations and reported curves; no numerical trajectories were synthesized.
- neural_shift_cuda descriptions were checked against the repository README, CUDA kernel, Python autograd wrappers, and NECTR integration at commit `835ebb86653e88b8b880293d9595cbbcb9371e1d`. The speedup chart uses the README’s reported full-step medians; these benchmarks were not rerun. The parallel-reduction diagram is conceptual, with eight illustrative contributions. The latest previously supplied ZIP was inspected as a reference.
- `assets/trishit-mukherjee-cv.pdf` is the latest one-page CV dated 4 October 2026 in the source collection.

Figures retain the rights of their original authors and publications. This package does not assign a new license to the research figures or papers. Full papers are linked through their public publication pages rather than copied into this website.
