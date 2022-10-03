# Requirements
node.js
'sh' command

# Pre-installation
This is a mandatory stage!
```bash
$ npm run preinstall
```

# Usage
```bash
$ npm run watch
```
This command saves continuously as a bundle file until the terminal stops in **development** environment.

```bash
$ npm run build
```
This command saves as a bundle file once in **production** environment.

```bash
$ npm run lint
```
This command checks whether your codes are written properly according to Eslint configuration.

# Location of Typescript Files
Default Location: `/src`

If you want to change default location, change `rollup.config.js` and `tsconfig.json`

# NPM Package auto update
```bash
$ npm run update
```