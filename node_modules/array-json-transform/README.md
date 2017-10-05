## Array to JSON / JSON to Array

Convert JSON to Array in server and Reconvert converted array to JSON in Client to convserve bandwidth,

## Installation

```sh
$ npm install array-json-transform
```

or specify in package.json as dependency

## Usage

with express

```js


var aj = require('array-json-transform')

// Server
clientExpectedJSON = [{name:"Manjesh V"},{name:"Manoj"},{name:"Murali"},{name:"Nikkitha"},{name:"Sanjay"}]
responseOverHTTP = aj.json2array(clientExpectedJSON);

// client
clientExpectedJSON = aj.array2json(responseOverHTTP);



```

## License
(The MIT License)

Copyright (c) 2015 Manjesh V < [manjeshpv@gmail.com](mailto:manjeshpv@gmail.com) >

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
