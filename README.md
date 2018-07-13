A) Reason for upgrade rxjs from 5.0.1 to 5.4.2 see

- https://stackoverflow.com/a/44821476
- https://github.com/ReactiveX/rxjs/issues/2539

B) Do not include

- @types/webpack-html-plugin or
- @types/extract-text-webpack-plugin

Both have a dependency of `webpack:*` which results in always loading the latest `@types/webpack`, which clashes with webpack 4!

C) karma-webrunner

Stay with v3 for webpack 3; v4 will coop with webpack 4

D) Property 'context' does not exist on type 'NodeRequire'.

Its webpack special require, so take @types/webpack-env

E) karma-jasmine-html-reporter not installed

See https://stackoverflow.com/a/41482312

F) ERROR in [at-loader] ..\node_modules\@angular\common\src\directives\ng_class.d.ts:48:34
TS2304: Cannot find name 'Set'.

See https://github.com/blacksonic/angular2-aot-webpack/issues/64#issuecomment-284738991

G) No typings for karma 2
Step back to karma 1.7.3 both in library and as @types

H) Enable tslint of js in vscode

One must do `"tslint.jsEnable": true`
