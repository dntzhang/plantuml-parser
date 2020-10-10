export declare class Comment {
    comment: string;
    constructor(comment: string);
}
export declare class Note {
    text: string;
    of: string;
    constructor(text: string, of?: string);
}
export declare class Component {
    name: string;
    title: string;
    constructor(name: string, title: string);
}
export declare class UseCase {
    name: string;
    title: string;
    constructor(name: string, title: string);
}
export declare type Accessor = ('-' | '#' | '~' | '+');
export declare class Method {
    name: string;
    isStatic: boolean;
    accessor: Accessor;
    returnType: string;
    _arguments: string;
    constructor(name: string, isStatic: boolean, accessor: Accessor, returnType: string, _arguments: string);
}
export declare class MemberVariable {
    name: string;
    isStatic: boolean;
    accessor: Accessor;
    type: string;
    constructor(name: string, isStatic: boolean, accessor: Accessor, type?: string);
}
export declare type Member = (Method | MemberVariable);
export declare class Enum {
    name: string;
    title: string;
    members: Member[];
    extends_: string[];
    implements_: string[];
    constructor(name: string, title: string, members?: Member[], extends_?: string[], implements_?: string[]);
}
export declare class Interface {
    name: string;
    title: string;
    members: Member[];
    extends_: string[];
    implements_: string[];
    constructor(name: string, title: string, members?: Member[], extends_?: string[], implements_?: string[]);
}
export declare class Class {
    name: string;
    title: string;
    isAbstract: boolean;
    members: Member[];
    extends_: string[];
    implements_: string[];
    constructor(name: string, title: string, isAbstract: boolean, members?: Member[], extends_?: string[], implements_?: string[]);
}
export declare class Actor {
    name: string;
    title: string;
    type: string;
    constructor(name: string, title: string, type: string);
}
export declare class Boundary {
    name: string;
    title: string;
    type: string;
    constructor(name: string, title: string, type: string);
}
export declare class Control {
    name: string;
    title: string;
    type: string;
    constructor(name: string, title: string, type: string);
}
export declare class Entity {
    name: string;
    title: string;
    type: string;
    constructor(name: string, title: string, type: string);
}
export declare class Database {
    name: string;
    title: string;
    type: string;
    constructor(name: string, title: string, type: string);
}
export declare class Collections {
    name: string;
    title: string;
    type: string;
    constructor(name: string, title: string, type: string);
}
export declare type GroupType = ('package' | 'node' | 'folder' | 'frame' | 'cloud' | 'database');
export declare class Group {
    name: string;
    title: string;
    type: GroupType;
    elements: UMLElement[];
    constructor(name: string, title: string, type: GroupType, elements: UMLElement[]);
}
export declare type RelationshipArrowHead = ('' | '<|' | '|>' | '*' | 'o' | '<' | '>' | '#' | 'x' | '}' | '{' | '+' | '^' | '()' | '(' | ')');
export declare type RelationshipArrowBody = ('-' | '.');
export declare class Relationship {
    left: string;
    right: string;
    leftType: string;
    rightType: string;
    leftArrowHead: RelationshipArrowHead;
    rightArrowHead: RelationshipArrowHead;
    leftArrowBody: RelationshipArrowBody;
    rightArrowBody: RelationshipArrowBody;
    leftCardinality: string;
    rightCardinality: string;
    label: string;
    hidden: boolean;
    constructor(left: string, right: string, leftType: string, rightType: string, leftArrowHead: RelationshipArrowHead, rightArrowHead: RelationshipArrowHead, leftArrowBody: RelationshipArrowBody, rightArrowBody: RelationshipArrowBody, leftCardinality: string, rightCardinality: string, label: string, hidden: boolean);
}
export declare type UMLElement = (Note | Component | UseCase | Enum | Interface | Class | Group | Relationship);
export declare class UML {
    elements: UMLElement[];
    constructor(elements: UMLElement[]);
}
export declare class File {
    name: string;
    diagrams: UML[];
    constructor(name: string, diagrams: UML[]);
}
