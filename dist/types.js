"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = exports.UML = exports.Relationship = exports.Group = exports.Class = exports.Interface = exports.Enum = exports.MemberVariable = exports.Method = exports.UseCase = exports.Component = exports.Note = exports.Comment = void 0;
var Comment = /** @class */ (function () {
    function Comment(comment) {
        this.comment = comment;
        this.comment = comment || '';
    }
    return Comment;
}());
exports.Comment = Comment;
var Note = /** @class */ (function () {
    function Note(text, of) {
        if (of === void 0) { of = ''; }
        this.text = text;
        this.of = of;
        this.text = text || '';
        this.of = of || '';
    }
    return Note;
}());
exports.Note = Note;
var Component = /** @class */ (function () {
    function Component(name, title) {
        this.name = name;
        this.title = title;
    }
    return Component;
}());
exports.Component = Component;
var UseCase = /** @class */ (function () {
    function UseCase(name, title) {
        this.name = name;
        this.title = title;
    }
    return UseCase;
}());
exports.UseCase = UseCase;
var Method = /** @class */ (function () {
    function Method(name, isStatic, accessor, returnType, _arguments) {
        this.name = name;
        this.isStatic = isStatic;
        this.accessor = accessor;
        this.returnType = returnType;
        this._arguments = _arguments;
        this.isStatic = !!isStatic;
        this.accessor = accessor || '+';
        this.returnType = returnType || 'void';
        this._arguments = _arguments || '';
    }
    return Method;
}());
exports.Method = Method;
var MemberVariable = /** @class */ (function () {
    function MemberVariable(name, isStatic, accessor, type) {
        if (type === void 0) { type = ''; }
        this.name = name;
        this.isStatic = isStatic;
        this.accessor = accessor;
        this.type = type;
        this.isStatic = !!isStatic;
        this.accessor = accessor || '+';
        this.type = type || '';
    }
    return MemberVariable;
}());
exports.MemberVariable = MemberVariable;
var Enum = /** @class */ (function () {
    function Enum(name, title, members, extends_, implements_) {
        if (members === void 0) { members = []; }
        if (extends_ === void 0) { extends_ = []; }
        if (implements_ === void 0) { implements_ = []; }
        this.name = name;
        this.title = title;
        this.members = members;
        this.extends_ = extends_;
        this.implements_ = implements_;
        this.members = members || [];
        this.extends_ = extends_ || [];
        this.implements_ = implements_ || [];
    }
    return Enum;
}());
exports.Enum = Enum;
var Interface = /** @class */ (function () {
    function Interface(name, title, members, extends_, implements_) {
        if (members === void 0) { members = []; }
        if (extends_ === void 0) { extends_ = []; }
        if (implements_ === void 0) { implements_ = []; }
        this.name = name;
        this.title = title;
        this.members = members;
        this.extends_ = extends_;
        this.implements_ = implements_;
        this.members = members || [];
        this.extends_ = extends_ || [];
        this.implements_ = implements_ || [];
    }
    return Interface;
}());
exports.Interface = Interface;
var Class = /** @class */ (function () {
    function Class(name, title, isAbstract, members, extends_, implements_) {
        if (members === void 0) { members = []; }
        if (extends_ === void 0) { extends_ = []; }
        if (implements_ === void 0) { implements_ = []; }
        this.name = name;
        this.title = title;
        this.isAbstract = isAbstract;
        this.members = members;
        this.extends_ = extends_;
        this.implements_ = implements_;
        this.isAbstract = !!isAbstract;
        this.members = members || [];
        this.extends_ = extends_ || [];
        this.implements_ = implements_ || [];
    }
    return Class;
}());
exports.Class = Class;
var Group = /** @class */ (function () {
    function Group(name, title, type, elements) {
        this.name = name;
        this.title = title;
        this.type = type;
        this.elements = elements;
    }
    return Group;
}());
exports.Group = Group;
var Relationship = /** @class */ (function () {
    function Relationship(left, right, leftType, rightType, leftArrowHead, rightArrowHead, leftArrowBody, rightArrowBody, leftCardinality, rightCardinality, label, hidden) {
        this.left = left;
        this.right = right;
        this.leftType = leftType;
        this.rightType = rightType;
        this.leftArrowHead = leftArrowHead;
        this.rightArrowHead = rightArrowHead;
        this.leftArrowBody = leftArrowBody;
        this.rightArrowBody = rightArrowBody;
        this.leftCardinality = leftCardinality;
        this.rightCardinality = rightCardinality;
        this.label = label;
        this.hidden = hidden;
        this.leftType = leftType || '';
        this.rightType = rightType || '';
        this.leftArrowHead = leftArrowHead || '';
        this.rightArrowHead = rightArrowHead || '';
        this.leftArrowBody = leftArrowBody || '-';
        this.rightArrowBody = rightArrowBody || '-';
        this.leftCardinality = leftCardinality || '';
        this.rightCardinality = rightCardinality || '';
        this.label = label || '';
        this.hidden = !!hidden;
    }
    return Relationship;
}());
exports.Relationship = Relationship;
var UML = /** @class */ (function () {
    function UML(elements) {
        this.elements = elements;
    }
    return UML;
}());
exports.UML = UML;
var File = /** @class */ (function () {
    function File(name, diagrams) {
        this.name = name;
        this.diagrams = diagrams;
        this.diagrams = diagrams || [];
    }
    return File;
}());
exports.File = File;

//# sourceMappingURL=types.js.map
