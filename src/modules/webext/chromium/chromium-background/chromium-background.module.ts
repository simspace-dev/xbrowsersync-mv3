/**
 * Chromium background entry point for MV3 service worker.
 * Replaces the AngularJS bootstrap with a manual DI container.
 */

import browser from 'webextension-polyfill';
import { WebExtV160UpgradeProviderService } from '../../shared/webext-upgrade/webext-v1.6.0-upgrade-provider.service';
import { setupAngularShim } from '../../webext-background/angular-shims';
import { createBackgroundContainer } from '../../webext-background/background-container';
import { ChromiumBookmarkService } from '../shared/chromium-bookmark/chromium-bookmark.service';
import { ChromiumPlatformService } from '../shared/chromium-platform/chromium-platform.service';

// Set up angular shim before any service code runs
setupAngularShim();

// Mark this as the background context
// eslint-disable-next-line no-undef, no-restricted-globals
(self as any).__xbs_isBackground = true;

// Create the DI container with Chromium-specific services
const { backgroundSvc, injector } = createBackgroundContainer({
  BookmarkServiceClass: ChromiumBookmarkService,
  PlatformServiceClass: ChromiumPlatformService,
  UpgradeProviderServiceClass: WebExtV160UpgradeProviderService
});

// Register native bookmark event listeners synchronously at the top level (required for MV3): the
// browser only wakes an idle service worker for events whose listeners were added during the initial
// synchronous evaluation of the worker script. Previously these were added later inside init()
// (which only runs on onStartup/onInstalled), so after the worker restarted on demand, bookmark
// changes were never seen. The handlers self-gate via a suppression flag + a sync-enabled check.
const bookmarkSvc = injector.get('BookmarkService') as any;
browser.bookmarks.onCreated.addListener(bookmarkSvc.onNativeBookmarkCreated);
browser.bookmarks.onRemoved.addListener(bookmarkSvc.onNativeBookmarkRemoved);
browser.bookmarks.onChanged.addListener(bookmarkSvc.onNativeBookmarkChanged);
browser.bookmarks.onMoved.addListener(bookmarkSvc.onNativeBookmarkMoved);
if ((browser.bookmarks as any).onChildrenReordered) {
  (browser.bookmarks as any).onChildrenReordered.addListener(bookmarkSvc.onNativeBookmarkChildrenReordered);
}

// Register event handlers synchronously (required for MV3 service workers)
let startupInitiated = false;

browser.runtime.onInstalled.addListener((details) => {
  if (startupInitiated) return;
  startupInitiated = true;
  backgroundSvc.onInstall(details.reason);
});

browser.runtime.onStartup.addListener(() => {
  if (startupInitiated) return;
  startupInitiated = true;
  backgroundSvc.init();
});
