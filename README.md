# node-lcs
[![Build Status](https://travis-ci.org/dinhoabreu/node-lcs.svg?branch=master)](https://travis-ci.org/dinhoabreu/node-lcs) [![Coverage Status](https://coveralls.io/repos/github/dinhoabreu/node-lcs/badge.svg?branch=master)](https://coveralls.io/github/dinhoabreu/node-lcs?branch=master)



Common dynamic programming implementations for the Longest Common Substring algorithm runs in O(nm) time.
Reference implementation at [WikiBooks](https://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Longest_common_substring#JavaScript)

## Installation

Add the latest version of `node-lcs` to your package.json:

```
npm install node-lcs
```

## Usage

```javascript
var lcs = require('node-lcs')

var result = lcs('Longest common substring', 'Compare with this common string')
console.log(result)
```

```javascript
{ length: 9, sequence: ' common s', offset: 7 }
```
