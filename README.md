# tree-shake

tree-shake lib-a from lib-b using webpack &amp; rollup

```shell
# link local npm package
cd a-lib
npm link
cd ../b-lib
npm link a-lib

# install dependencies and build
npm install
npm run build
```
