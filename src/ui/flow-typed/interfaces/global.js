declare module 'CSSModules' {
  declare var exports: { [key: string]: string };
}
declare var require: {
	(id: string): any;
	ensure(ids: Array<string>, callback?: { (require: typeof require): void }, chunk?: string): void
}
declare var __DEBUG__: ?string;
declare var __DEV__: ?string;
declare var __PROD__: ?string;
declare var __TEST__: ?string;
declare var __COVERAGE__: ?string;
declare var __BASENAME__: ?string;
declare var module: any;
