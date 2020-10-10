"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatters = exports.parseFile = exports.parse = void 0;
var types = require("./types");
__exportStar(require("./types"), exports);
var default_1 = require("./formatters/default");
var graph_1 = require("./formatters/graph");
/* eslint-disable @typescript-eslint/no-var-requires */
//TODO : use import here
var conf = require('../conf');
var relative = require('path').relative;
var cwd = require('process').cwd;
var readFileSync = require('fs').readFileSync;
var map = require('async').map;
var EOL = require('os').EOL;
var Tracer = require('pegjs-backtrace');
var fastGlob = require('fast-glob');
var parse = require('./plantuml').parse;
var parseTrace = require('./plantuml-trace').parse;
function parseSync(src, options) {
    if (options === void 0) { options = {}; }
    options = options || {};
    if (options.verbose) {
        var tracer = new Tracer(src, options);
        try {
            var parsed = parseTrace(src, __assign(__assign({}, options), { tracer: tracer }));
            return parsed;
        }
        catch (e) {
            try {
                e.message = 'Line ' + e.location.start.line + ': ' + e.message;
                e.message += EOL;
                e.message += EOL;
                e.message += tracer.getBacktraceString();
                e.message += EOL;
            }
            catch (e) {
                // do nothing
            }
            throw e;
        }
    }
    return parse(src, options);
}
exports.parse = parseSync;
function parseFile(globPattern, options, cb) {
    if (options === void 0) { options = {}; }
    if (cb === void 0) { cb = null; }
    options = options || {};
    // callback given
    if (cb) {
        return map(fastGlob.sync(globPattern), function (file, cb) {
            var parseResult = null;
            try {
                parseResult = parseSync(readFileSync(file, conf.encoding), options);
            }
            catch (e) {
                return cb(e, null);
            }
            return cb(null, new types.File(relative(cwd(), file), parseResult));
        }, cb);
    }
    // no callback given
    return fastGlob.sync(globPattern).map(function (file) { return new types.File(relative(cwd(), file), parseSync(readFileSync(file, conf.encoding), options)); });
}
exports.parseFile = parseFile;
exports.formatters = {
    default: default_1.default,
    graph: graph_1.default,
};

//# sourceMappingURL=index.js.map
