# Chrome Web Store — Listing Copy

Ready-to-paste text for the store listing. Adjust wording to taste, but keep the "unofficial
fork" attribution — it keeps you clear of the upstream project's trademark.

## Name (45 char max)

```
xBrowserSync MV3
```

## Summary / short description (132 char max)

```
Sync bookmarks across browsers and devices — secure, private, free. Use the public xBrowserSync service or your own server.
```
_(120 characters.)_

## Category

**Workflow & Planning** (alternative: **Productivity**).

## Detailed description

```
xBrowserSync MV3 keeps your bookmarks in sync across all your browsers and devices —
securely, privately, and for free.

This is a community-maintained fork of the open-source xBrowserSync extension, updated to
Manifest V3 so it runs on current Chromium-based browsers (Chrome, Brave, Edge, and others).

WHY PEOPLE USE IT
• Secure — your bookmarks are encrypted on your own device before they are ever uploaded,
  using a password only you know. The sync service only ever sees encrypted data.
• Private — no account, no email, no sign-up. No tracking, no ads, no analytics.
• Free and open — licensed under the GNU GPL v3. Full source code is public.
• Your data, your server — use the public xBrowserSync service, or point the extension at
  your own self-hosted service for total control.

FEATURES
• Two-way sync of your bookmarks across devices.
• Automatic background sync, plus manual sync on demand.
• Bookmark the page you're viewing, with its title and description captured automatically.
• Back up and restore your bookmarks to a file.
• Choose exactly which sync service to trust.

ABOUT THIS FORK
xBrowserSync MV3 is an unofficial fork and is not affiliated with or endorsed by the
xBrowserSync project. It exists to keep the extension working under Manifest V3. Our thanks to
the original xBrowserSync authors for their excellent work.

Source code: https://github.com/simspace-dev/xbrowsersync-mv3
Privacy policy: <paste the hosted PRIVACY.md URL here>
```

## Privacy practices form (Developer Dashboard answers)

Use these when filling the **Privacy practices** tab.

- **Single purpose:** see `permission-justifications.md`.
- **Permission justifications:** see `permission-justifications.md`.
- **Are you using remote code?** — **No.**
- **Data usage / collection:** The extension does not collect or transmit user data to the
  developer. Bookmarks are end-to-end encrypted and synced only to a user-chosen service.
  - "Personally identifiable information": No
  - "Health / financial / authentication / personal communications / location / web history":
    No collection by the developer. (The extension reads a page's title and URL only when the
    user bookmarks it, and this is not sent to the developer.)
  - "Website content": Only the title/description of a page the user explicitly bookmarks,
    handled locally / sent encrypted to the user's chosen service — not to the developer.
- **Certifications (check all):**
  - ✅ I do not sell or transfer user data to third parties, outside of the approved use cases.
  - ✅ I do not use or transfer user data for purposes unrelated to my item's single purpose.
  - ✅ I do not use or transfer user data to determine creditworthiness or for lending purposes.
- **Privacy policy URL:** the hosted URL of `PRIVACY.md` (see hosting note below).

## Assets checklist (you supply)

- **Store icon** — 128×128 PNG. You already ship icons in the build; export/resize a clean
  128×128.
- **Screenshots** — at least 1 (up to 5), 1280×800 or 640×400 PNG/JPG. Good candidates:
  1. The login / create-sync screen.
  2. The settings screen showing the service field (bring-your-own-server).
  3. A synced bookmark list / the popup in action.
  - Capture these from the isolated test profile so nothing personal is shown.
- **Small promo tile (optional)** — 440×280.

## Hosting the privacy policy

The store requires a public **URL** for the policy, not a file. Easiest options once the repo
is public:
- Enable **GitHub Pages** on the repo and link the rendered `PRIVACY.md`, or
- Link the file directly on GitHub:
  `https://github.com/simspace-dev/xbrowsersync-mv3/blob/main/store-assets/PRIVACY.md`
  (a rendered, publicly viewable page — acceptable as a policy URL).
```
