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
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../types");
/**
 * TODO: make this propertly typed
 */
function graphFormatter(parseResult) {
    var nodes = [];
    var edges = [];
    var fileName = '';
    function linkToFile(node) {
        if (fileName) {
            edges.push({
                from: fileName,
                to: node.name,
                name: 'contains',
                hidden: true,
            });
        }
    }
    (function extractNodes(node) {
        if (node instanceof types_1.File) {
            fileName = node.name;
            nodes.push(__assign(__assign({}, node), { id: node.name, type: node.constructor.name, hidden: true }));
            node.diagrams
                .filter(function (uml) { return uml instanceof types_1.UML; })
                .forEach(function (uml) { return uml.elements.forEach(function (element) { return extractNodes(element); }); });
        }
        else if (node instanceof types_1.Class || node instanceof types_1.Interface) {
            nodes.push(__assign(__assign({}, node), { id: node.name, type: node.constructor.name, hidden: true }));
            linkToFile(node);
            node.members
                .filter(function (attribute) { return attribute instanceof types_1.MemberVariable; })
                .forEach(function (attribute) {
                nodes.push(__assign(__assign({}, attribute), { id: attribute.name, type: 'Attribute', hidden: true }));
                edges.push({
                    from: node.name,
                    to: attribute.name,
                    name: 'has',
                    hidden: true,
                });
                linkToFile(attribute);
            });
        }
        else if (node instanceof types_1.Component) {
            nodes.push(__assign(__assign({}, node), { id: node.name, type: node.constructor.name, title: node.title, hidden: true }));
            edges.push({
                from: node.name,
                to: fileName,
                name: 'contains',
                hidden: true,
            });
            linkToFile(node);
        }
        else if (node instanceof Object) {
            Object.keys(node).map(function (k) { return extractNodes(node[k]); });
        }
    })(parseResult);
    (function extractEdges(node) {
        function getNodeByName(nodeName) {
            return nodes.filter(function (n) { return n.name === nodeName; })[0];
        }
        if (node instanceof types_1.Relationship) {
            var leftNode = getNodeByName(node.left);
            var rightNode = getNodeByName(node.right);
            if (leftNode === undefined || rightNode === undefined) {
                return;
            }
            if ((leftNode.type === 'Class' && rightNode.type === 'Class') || (leftNode.type === 'Class' && rightNode.type === 'Interface') || (leftNode.type === 'Interface' && rightNode.type === 'Class') || (leftNode.type === 'Interface' && rightNode.type === 'Interface')) {
                if (node.leftArrowHead === '' && node.leftArrowBody === '-' &&
                    node.rightArrowBody === '-' && node.rightArrowHead === '|>') {
                    edges.push({
                        from: node.left,
                        to: node.right,
                        name: 'extends',
                        hidden: true,
                    });
                }
                else if (node.leftArrowHead === '<|' && node.leftArrowBody === '-' &&
                    node.rightArrowBody === '-' && node.rightArrowHead === '') {
                    edges.push({
                        from: node.right,
                        to: node.left,
                        name: 'extends',
                        hidden: true,
                    });
                }
            }
            else if (leftNode.type === 'Component' && rightNode.type === 'Interface') {
                if (node.leftArrowHead === '' && node.leftArrowBody === '-' &&
                    node.rightArrowBody === '-' && node.rightArrowHead === '') {
                    // Component -- Interface
                    edges.push({
                        from: node.left,
                        to: node.right,
                        name: 'exposes',
                        type: node.label.split(',')[0],
                        availability: node.label.split(',')[1],
                        hidden: true,
                    });
                }
                else if (node.leftArrowHead === '' && node.leftArrowBody === '.' &&
                    node.rightArrowBody === '.' && node.rightArrowHead === '>') {
                    // Component ..> Interface
                    edges.push({
                        from: node.left,
                        to: node.right,
                        name: 'consumes',
                        direction: 'In',
                        method: node.label.split(',')[0],
                        frequency: node.label.split(',')[1],
                        serviceAccount: node.label.split(',')[2],
                        criticality: node.label.split(',')[3],
                        hidden: true,
                    });
                }
                else if (node.leftArrowHead === '<' && node.leftArrowBody === '.' &&
                    node.rightArrowBody === '.' && node.rightArrowHead === '') {
                    // Component <.. Interface
                    edges.push({
                        from: node.left,
                        to: node.right,
                        name: 'consumes',
                        direction: 'Out',
                        method: node.label.split(',')[0],
                        frequency: node.label.split(',')[1],
                        serviceAccount: node.label.split(',')[2],
                        criticality: node.label.split(',')[3],
                        hidden: true,
                    });
                }
            }
            else if (leftNode.type === 'Interface' && rightNode.type === 'Component') {
                if (node.leftArrowHead === '' && node.leftArrowBody === '-' &&
                    node.rightArrowBody === '-' && node.rightArrowHead === '') {
                    // Interface -- Component
                    edges.push({
                        from: node.right,
                        to: node.left,
                        name: 'exposes',
                        type: node.label.split(',')[0],
                        availability: node.label.split(',')[1],
                        hidden: true,
                    });
                }
                else if (node.leftArrowHead === '' && node.leftArrowBody === '.' &&
                    node.rightArrowBody === '.' && node.rightArrowHead === '>') {
                    // Interface ..> Component
                    edges.push({
                        from: node.right,
                        to: node.left,
                        name: 'consumes',
                        direction: 'Out',
                        method: node.label.split(',')[0],
                        frequency: node.label.split(',')[1],
                        serviceAccount: node.label.split(',')[2],
                        criticality: node.label.split(',')[3],
                        hidden: true,
                    });
                }
                else if (node.leftArrowHead === '<' && node.leftArrowBody === '.' &&
                    node.rightArrowBody === '.' && node.rightArrowHead === '') {
                    // Interface <.. Component
                    edges.push({
                        from: node.left,
                        to: node.right,
                        name: 'consumes',
                        direction: 'In',
                        method: node.label.split(',')[0],
                        frequency: node.label.split(',')[1],
                        serviceAccount: node.label.split(',')[2],
                        criticality: node.label.split(',')[3],
                        hidden: true,
                    });
                }
            }
        }
        else if (node instanceof Object) {
            Object.keys(node).map(function (k) { return extractEdges(node[k]); });
        }
    })(parseResult);
    return JSON.stringify({
        nodes: nodes,
        edges: edges,
    }, null, 2);
}
exports.default = graphFormatter;

//# sourceMappingURL=graph.js.map
