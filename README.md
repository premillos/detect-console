# fuck-console

prevent some bad guys from debugging code through the console 😜

![https://img.shields.io/github/stars/pssgo/fuck-console?style=social](https://img.shields.io/github/stars/pssgo/fuck-console?style=social)
![NPM](https://img.shields.io/npm/l/fuck-console)
![npm](https://img.shields.io/npm/dt/fuck-console)
![npm](https://img.shields.io/npm/v/fuck-console)

## Install

```shell
npm install fuck-console
or
yarn add fuck-console

```

## Usage

```js
// es6
import FuckConsole from "fuck-console";

FuckConsole({
  onOpen() {
    console.log("console is opened");
  },
  onClose() {
    console.log("console is closed!");
  },
});
```

```js
// by script
<script src="fuck-console.umd.js"></script>
<script>
  FuckConsole({
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

[MIT](https://github.com/pssgo/fuck-console/blob/main/LICENSE)
