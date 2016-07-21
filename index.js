'use strict';

var Lib = require('plotly.js/src/lib');

exports.moduleType = 'transform';
exports.name = 'basis';

exports.attributes = {
    variable: {
        valType: 'string',
        dflt: 'x'
    },
    range: {
        valType: 'info_array',
        role: 'info',
        items: [
            {valType: 'number'},
            {valType: 'number'}
        ],
    },
    npoints: {
        valType: 'number',
    }
};

exports.supplyDefaults = function(transformIn, fullData, layout) {
    var transformOut = {};

    function coerce(attr, dflt) {
        return Lib.coerce(transformIn, transformOut, exports.attributes, attr, dflt);
    }

    coerce('variable');
    coerce('range');
    coerce('npoints');

    return transformOut;
};

exports.transform = function(data, state) {
    var i, j, ivars, ivar;
    var trace = state.fullTrace;
    var transform = state.transform;
    var variable = transform.variable;

    var npoints = transform.npoints;
    var min = transform.range[0];
    var max = transform.range[1];

    trace[variable] = [];
    var arr = trace[variable];
    var inc = (max - min) / (npoints - 1);

    for (i = 0; i < npoints; i++) {
        arr[i] = min + i * inc;
    }

    return data;
};
