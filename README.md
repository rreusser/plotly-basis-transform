# plotly-basis-transform

> Generate a linear- or log-space basis using plotly.js transforms

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

## Introduction

Highly experimental plotly.js transform to generate a linspace (or, eventually, logspace). See related [ploty-expression-transform](https://rreusser.github.io/plotly-expression-transform) example.

## Example

To overwrite a variable with a new array:

```javascript
var Plotly = require('plotly.js');

Plotly.register([require('plotly-basis-transform')]);

Plotly.plot('graph', [{
    x: [...],
    y: [...],
    transforms: {
        type: 'basis',
        variable: 'x',
        range: [0, 5],
        npoints: 101
    }
}]);
```

## To Do

Better conflict resolution when the trace size doesn't match the requested number of points.

## License

&copy; 2016 Ricky Reusser. MIT License.
