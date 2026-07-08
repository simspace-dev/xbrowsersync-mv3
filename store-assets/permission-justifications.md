# Chrome Web Store — Permission Justifications

Copy each justification into the matching box in the Developer Dashboard
(**Privacy practices** tab). Keep them accurate — reviewers reject listings whose
justifications don't match the code's real behavior. Every item below reflects verified usage
in this codebase.

## Single purpose (required)

> xBrowserSync MV3 synchronizes the user's browser bookmarks across their browsers and devices
> through an xBrowserSync-compatible service that the user selects. This is the extension's
> only purpose.

## Required permissions

**bookmarks**
> Core function. The extension reads and writes the browser's bookmarks in order to synchronize
> them with the user's chosen sync service and to apply changes pulled from other devices.

**storage**
> Stores the user's sync configuration locally — the sync ID, the selected service address,
> feature settings, and locally cached credentials — so the extension can operate without
> re-prompting on every use.

**unlimitedStorage**
> Users can sync very large bookmark collections (thousands of bookmarks). This permission
> lets the extension cache that data locally without hitting the default storage quota.

**alarms**
> Schedules a periodic background check that asks the sync service whether bookmarks have
> changed on another device. Under Manifest V3 the service worker is not always running, so a
> timer alarm is used to wake it and perform the check.

**notifications**
> Displays notifications to inform the user of sync results and errors (for example, a failed
> sync or a completed update), and handles the user clicking or dismissing them.

**downloads**
> Powers the backup feature: when the user exports their bookmarks, the extension saves the
> backup file via the downloads API and monitors that download's completion.

**tabs**
> Two uses: (1) to read the current tab's address and title when the user chooses to bookmark
> the page they are viewing; and (2) to detect when the user switches tabs so the extension can
> promptly check whether bookmarks were updated on another device (near-real-time sync).

**activeTab**
> Grants temporary access to the tab the user is currently viewing, at the moment the user
> invokes the extension, so it can read that page's metadata (title and description) to create
> an accurate bookmark. Access is limited to that page and that user action.

**scripting**
> Under Manifest V3, used to run a small content script in the page the user is bookmarking to
> read its title and meta description, producing a well-labeled bookmark. It runs only on the
> active tab in response to the user's bookmarking action.

## Optional host permission — `http://*/` and `https://*/`

This is declared under **optional_host_permissions**, meaning it is **not granted at install**
— the extension requests it at runtime only when actually needed, and the user can decline.

> xBrowserSync is self-hostable: users may run their own sync service, or use a third-party
> one, at any domain of their choosing. Because the extension cannot know that address in
> advance, it needs permission to connect to the host the user enters. The same permission also
> allows the optional content script to read the title and description of a page the user
> explicitly bookmarks. This access is requested at runtime, only for the user's chosen sync
> service and for pages the user chooses to bookmark — never for background browsing.

## Remote code (required question)

> No. The extension executes no remotely hosted code. All JavaScript is contained within the
> published package. The only network requests are encrypted bookmark data exchanged with the
> user's chosen sync service.
