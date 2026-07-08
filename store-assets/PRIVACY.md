# Privacy Policy — xBrowserSync MV3

_Last updated: 2026-07-08_

xBrowserSync MV3 is a community-maintained fork of the open-source
[xBrowserSync](https://www.xbrowsersync.org/) browser extension, updated for Manifest V3.
This policy explains exactly what the extension does and does not do with your data.

## The short version

**This extension does not collect, sell, or send your personal data to its developer.**
Your bookmarks are encrypted on your own device before they ever leave it, and they sync
only to a service **you** choose. The developer of this extension runs no server that
receives your data and performs no tracking, advertising, or analytics.

## What data the extension handles

- **Your bookmarks** — read from and written to your browser so they can be synchronized.
- **Your sync settings** — a sync ID, your chosen service address, and your saved
  (locally cached) credentials, so you don't have to re-enter them each time.

## Where that data goes

- **Stored locally on your device.** Your settings, sync ID, and cached credentials are kept
  in your browser's local storage on your own computer. They are not transmitted to the
  developer.
- **Synced to a service you choose.** To sync between devices, your bookmarks are sent to an
  xBrowserSync-compatible service. **Before leaving your device, your bookmarks are encrypted
  using a password only you know** (end-to-end encryption). The service stores only this
  encrypted data and cannot read your bookmarks. You select which service to use:
  - the public xBrowserSync service (`https://api.xbrowsersync.org`), operated by the upstream
    xBrowserSync project under its own terms and privacy policy; or
  - a self-hosted / third-party xBrowserSync service at any address you enter.
- **The developer of this extension does not operate the default service and receives none of
  your data.**

## What the extension does NOT do

- No advertising.
- No analytics or usage tracking.
- No selling or sharing of personal data with third parties.
- No remote code — all executable code is contained in the published package.
- No collection of browsing history. The extension only reads a page's address, title, and
  description **at the moment you choose to bookmark it**.

## Permissions

The extension requests only the permissions needed to sync bookmarks. A per-permission
explanation is maintained alongside this policy in the project's `store-assets/` folder and
in the Chrome Web Store listing.

## Data retention and deletion

- Local data is removed when you clear the extension's data or uninstall the extension.
- Data held by a sync service is governed by that service's own policy. You can delete a sync
  (and its server-side data) from within the extension, or by contacting your service operator.

## Source code

This extension is free software licensed under the GNU General Public License v3.0. The full
source code is available at:

> https://github.com/simspace-dev/xbrowsersync-mv3

## Contact

Questions about this policy: **simspace-dev+xBrowserSyncMV3@gmail.com**

---

_xBrowserSync MV3 is an unofficial fork and is not endorsed by or affiliated with the
xBrowserSync project. "xBrowserSync" is used only to identify the upstream project this fork
is based on._
