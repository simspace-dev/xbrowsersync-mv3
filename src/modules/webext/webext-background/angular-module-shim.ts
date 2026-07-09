/**
 * Drop-in replacement for `import angular from 'angular'` in the background build.
 * Provides the same utility functions that shared services use (copy, isUndefined, etc.)
 * without pulling in the real AngularJS framework (which requires `window`/DOM).
 *
 * This module is wired in via webpack resolve.alias for the background entry point only.
 */

const angular: any = {
  isUndefined: (value: any): boolean => value === undefined,
  isString: (value: any): boolean => typeof value === 'string',
  isNumber: (value: any): boolean => typeof value === 'number',
  isObject: (value: any): boolean => value !== null && typeof value === 'object',
  isArray: Array.isArray,
  // Mirrors AngularJS angular.copy: with one arg, returns a deep copy of source;
  // with two args, deep-copies source INTO destination in place (emptying destination
  // first) and returns destination. The in-place form is relied on by e.g.
  // bookmarkHelper.modifyBookmarkById (angular.copy(newBookmark, existingBookmark)),
  // so a source-only shim silently drops bookmark edits (renames never sync).
  copy: <T>(source: T, destination?: any): T => {
    const emptyDestination = (dest: any): void => {
      if (Array.isArray(dest)) {
        dest.length = 0;
      } else if (dest !== null && typeof dest === 'object') {
        Object.keys(dest).forEach((key) => delete dest[key]);
      }
    };

    if (source === null || source === undefined) {
      if (destination !== undefined && destination !== null && destination !== source) {
        emptyDestination(destination);
      }
      return (destination === undefined ? source : destination) as T;
    }

    const copied = JSON.parse(JSON.stringify(source));
    if (destination === undefined || destination === null || destination === source) {
      return copied;
    }

    emptyDestination(destination);
    if (Array.isArray(destination) && Array.isArray(copied)) {
      destination.push(...copied);
    } else {
      Object.keys(copied).forEach((key) => {
        destination[key] = copied[key];
      });
    }
    return destination as T;
  },
  equals: (a: any, b: any): boolean => JSON.stringify(a) === JSON.stringify(b),
  noop: () => {},
  element: () => {
    throw new Error('angular.element() is not available in service worker context');
  },
  module: () => {
    throw new Error('angular.module() is not available in service worker context');
  },
  bootstrap: () => {
    throw new Error('angular.bootstrap() is not available in service worker context');
  }
};

export default angular;
