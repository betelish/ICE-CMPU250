let s: string = "hello, world";
//string != String; String is the class, string is the type (same w Number and number), it's the String/str Java distinction
//No implicit typecasting in typescript!

/* datatypes:
JS has implicit typing (or rather, no typesystem barring classes) with primitives & then container types (hashmap, set, etc) which have truthiness
TS lets us notate type with let s: string =..., but this is strictly annotative/shorthand, not new functionality
primitives : str, num, bool, null, undef
product types: can have thing with multiple types (typescript)
*/

//union type, satisfied by either of its members string or number
let sn: string | number = "hi!";
sn = 10; //redefined!

//function myFunction(arg1:type1, arg2:type2):returType(s) {body}
function stringOrNumber(): string | number {
  return 2;
}

const value = stringOrNumber(); //way to check type of variable :D
if (typeof value === "string") console.log(value.charAt(2));

/*-------------------------------------------------------------------------------------------------
Truthiness applies only to javascript types, *not* typescript types
Truthy values are true when in bool context, defined as all which are not falsy
Falsy vales: False, 0, -0, 0n (kinda like a long int), "", null, undefined, NaN, document.all

== or != is loose equality:
  generally if they're the same type, it's if they're the same reference, or the same value, or have the same ordering, depending on type
  specifics are a bit unintuitive tbh and i kinda don't really want to note all of them down
  has wierd rules for cross-type equality

=== or !== is strict equality
  considers values of different js types to be different
  then does naiive equality: primitives checks value, objects check reference
  equivalent to Java ==

typeof works on js type & returns:
  primitives as their primitive type
  everything else (and null) as object

For arrays, because they're so commonly used, can do instanceof:
  value instanceof Class (runtime)
*/

//define custom type as obj
type obj = {
  a: string;
  b: number;
  c?: boolean; // optional element
};

//define type as array
type arr = (string | number)[];

//define type as tuple
type tup = [string, number];

/*intersection type*/
type foo = {
  c: boolean;
};

type bar = {
  a: string;
  b?: number;
};

//only satisfied by a value which has member a, optionally b, and always c
type foobar = foo & bar;

type strumber = string & boolean; //type never because this will never be real

//-------------------------------------------------------------------------------------------
//interfaces behave like interfaces from Java!

interface XAxis {
  x: number;
}

interface Cube extends XAxis {
  s: number;
  // x: number; redundant due to extends kword
}

//generics are also very java, but a bit nicer!
function reflection<T extends XAxis>(arg: T): T | null {
  if (arg.x === 0) return null;

  arg.x = -arg.x;
  return arg;
}

const c: Cube = { s: 4, x: 2 };
const r = reflection(c);

//---------------------------------------------------------------------------------------------
//install package w bun: bun a pkgname
//sourcecontrol automatically tracks this when run from this terminal :D shit's local!

//import {exportName } from "pkg";
import { randomCatName } from "cat-names";
console.log(randomCatName());
