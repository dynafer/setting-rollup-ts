# Requirements
node.js
'sh' command

# Pre-installation
```bash
$ npm run preinstall
```

# Configuration
1. Copy `/env` to `/.env`
2. OUTPUT_PATH is the location where to save a bundle of merged Typescript files is converted to a Javascript file.
3. OUTPUT_FILE_NAME is the bundle file name.
4. MAIN_FILE is a main file for typescript project.
5. If you change ENVIRONMENT variable to development, source map will be created when you build up.

# Usage
```bash
$ npm run watch
or
$ npm run build
```
Watch script is to save continuously as a bundle file until the terminal stops.
Build script is to save as a bundle file once.

# Location of Typescript Files
Default Location: `/src`

If you want to change default location, change `rollup.config.js` and `tsconfig.json`

# NPM Package auto update
```bash
$ npm run update
```