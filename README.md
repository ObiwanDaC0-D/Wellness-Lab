## Version 8: Navigation and Research Reliability

- Section URLs now use encoded hash fragments, allowing bookmarking and browser back/forward navigation.
- PubMed Research Explorer initializes its search field and discards stale results from superseded requests.
- Static application smoke tests (`tests/smoke.test.mjs`) supplement the V7 validation tests. Run with `npm test`.
- Browser interaction, accessibility and GitHub Pages deployment are **not yet independently verified**. No claim of production readiness is made.

## Version 7: Reliability and Research Integrity

- Shared publication and extraction validation (`src/validation.js`), including duplicate PMID removal, positive standard error checks, and sanitized workbench data structures.
- Safer handling of stale PubMed search errors when overlapping requests are cancelled.
- Improved responsive styling for research extraction forms, methods controls, and synthesis tables.
- Automated Node regression tests in `tests/research.test.mjs` and a GitHub Actions workflow in `.github/workflows/tests.yml`. Run locally with `npm test` (Node 22 recommended).
- This release does **not** include encrypted storage, offline synchronization, automatic appraisal, or a validated real-study meta-analysis workflow. Live browser and CI execution still require verification.

# Wellness-Lab — The Science of Mind, Behavior & Human Flourishing

A modular, dependency-free, browser-based educational platform inspired by the architecture and learning experience of [Mind Explorer 4.0](https://github.com/ObiwanDaC0-D/Budhism-Psychology).

## Version 2: Mechanism-Centered Atlas
- Interactive SVG network with keyboard-accessible nodes and clickable concept relationships.
- Hierarchy and historical-overview timeline modes; filters for domains, thinkers and text.
- Expanded content library (43 entries) and thinkers directory (25 entries).
- Connected concept detail panels and integration with existing lessons and bookmarks.
- The historical timeline is an editorial overview, **not** a dated empirical publication dataset.
- Network layout is deterministic and optimized for a bounded neighborhood of up to 42 nodes; it is not a force-directed map of all psychological knowledge.

## Current implementation
- Midnight-blue responsive interface with eight destinations.
- Mechanism-centered linked concept explorer; 22 editorial concept summaries, including evidence context and limitations.
- Thinkers library, conceptual pathway navigation, two-column comparison dashboard.
- Six functional educational demonstrations: reappraisal, simplified memory decay, Stroop, conceptual stress balance, confounding, and mindfulness attention cue.
- Local bookmarks, completion tracking, notes, retrieval prompts, heuristic review scheduling, JSON export/import.
- Links to clinical guidelines and public research discovery resources, plus PubMed query launching.
- No backend, paid APIs, third-party trackers or external dependencies.

## Running
Open via a static HTTP server (ES modules are restricted on file:// URLs):
```bash
python3 -m http.server 8000
```
Visit http://localhost:8000. Deploy from repository root through GitHub Pages (Settings → Pages → Deploy from a branch → main / root).

## Architecture
- `index.html`: semantic application shell
- `styles.css`: responsive design and reduced-motion accommodations
- `src/data.js`, `src/additional-data.js`: editorial concept, researcher, pathway and research-link data
- `src/graph.js`: SVG graph, hierarchy, timeline, filtering and node interactions
- `src/app.js`: navigation, learning interactions, browser persistence and labs

## Scientific integrity
Concept summaries are editorial orientation, **not systematic reviews**. No quantitative evidence ranking, diagnosis, validated cognitive scores or treatment advice is provided. The memory curve and stress model are explicitly invented educational demonstrations. The Stroop game is not a psychometric test. Research links point to external sources and do not imply every source endorses every approach. Clinical decisions require qualified professionals and current condition-specific guidelines.

## Privacy
Notes and progress are stored in localStorage on this browser origin, **not encrypted**. Do not enter sensitive clinical details. Browser clearing may erase progress. JSON backups are human-readable; store them securely. External research sites receive queries only when the user explicitly opens them.

## Roadmap
1. Editorially review and greatly expand the knowledge base, adding verified DOI-level references and condition-specific evidence tables.
2. Add a scalable typed concept graph, timeline and accessible SVG network view.
3. Add a deeper learning engine with prerequisites, quizzes, spaced retrieval and outcome-transparent analytics.
4. Add richer laboratories with rigorous accessibility and scientific caveats.
5. Add API-backed metadata with caching, provenance and graceful offline support.
6. Add IndexedDB, migration and data validation, offline service worker and automated browser tests.
7. Audit mobile navigation, keyboard accessibility, security and deployment.

This is a **working first release**, not a claim that every feature in the long-term master specification is complete.
