A) Reason for upgrade rxjs from 5.0.1 to 5.4.2 see

- https://stackoverflow.com/a/44821476
- https://github.com/ReactiveX/rxjs/issues/2539

B) Do not include

- @types/webpack-html-plugin or
- @types/extract-text-webpack-plugin

Both have a dependency of `webpack:*` which results in always loading the latest `@types/webpack`, which clashes with webpack 4!
