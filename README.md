# detect-console

prevent some bad guys from debugging code through the console 😜

![https://img.shields.io/github/stars/pssgo/detect-console?style=social](https://img.shields.io/github/stars/pssgo/detect-console?style=social)
[![Build Status](https://www.travis-ci.org/pssgo/detect-console.svg?branch=master)](https://www.travis-ci.org/pssgo/detect-console)
![NPM](https://img.shields.io/npm/l/detect-console?q=3)
![npm](https://img.shields.io/npm/v/detect-console?q=5)

## Install

```shell
npm install detect-console
or
yarn add detect-console

```

## Usage

```js
// es6
import DetectConsole from 'detect-console'

new DetectConsole({
  onOpen() {
    console.log('console is opened')
  },
  onClose() {
    console.log('console is closed!')
  },
})
```

```js
// by script
<script src="detect-console.umd.js"></script>
<script>
  new DetectConsole({
    onOpen() {
      console.log('console is opened')
    },
    onClose() {
      console.log('console is closed!')
    }
  })
</script>
```

## Support

```js
> IE8
```

## License

[MIT](https://github.com/pssgo/detect-console/blob/main/LICENSE)
