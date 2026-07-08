import { Injectable } from 'angular-ts-decorators';
import {
  BaseError,
  HttpRequestAbortedError,
  HttpRequestFailedError,
  HttpRequestTimedOutError,
  NetworkConnectionError
} from '../errors/errors';

@Injectable('NetworkService')
export class NetworkService {
  private $q: ng.IQService;

  static $inject = ['$q'];
  constructor($q: ng.IQService) {
    this.$q = $q;
  }

  checkNetworkConnection(): ng.IPromise<void> {
    return this.$q((resolve, reject) => {
      if (this.isNetworkConnected()) {
        return resolve();
      }
      reject(new NetworkConnectionError());
    });
  }

  getErrorFromHttpResponse(response: ng.IHttpResponse<unknown>): BaseError {
    let error: BaseError;
    switch (true) {
      // Request timed out
      case response.xhrStatus === 'timeout':
        error = new HttpRequestTimedOutError();
        break;
      // Request timed out
      case response.xhrStatus === 'abort':
        error = new HttpRequestAbortedError();
        break;
      // Otherwise generic request failed
      default:
        error = new HttpRequestFailedError(`status: ${response.status}`);
    }
    return error;
  }

  isNetworkConnected(): boolean {
    // MV3 background runs as a service worker with no `window`. Use `navigator`/`globalThis`,
    // which exist in both worker and page contexts. `Connection` is a Cordova (Android) global
    // and `navigator.connection` its plugin; on webext these are undefined so we fall back to
    // `navigator.onLine`.
    const nav = typeof navigator !== 'undefined' ? (navigator as any) : undefined;
    // eslint-disable-next-line no-undef, no-restricted-globals
    const cordovaConnection = (self as any).Connection;
    return cordovaConnection && nav?.connection && nav.connection.type
      ? nav.connection.type !== cordovaConnection.NONE && nav.connection.type !== cordovaConnection.UNKNOWN
      : !!nav?.onLine;
  }

  isNetworkConnectionError(err: Error): boolean {
    return err instanceof HttpRequestTimedOutError || err instanceof NetworkConnectionError;
  }
}
