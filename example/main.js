module('I.Am.An.Arbitrary.Namespace', function (global, parent) {});

console.log('\n~~~~ Warnings');
module('bad.practice', function (global, parent) {}); // generate non-capitalized warning

module('Foo.Bar.Baz', function (global, parent) {});  // generate conflict warning

console.log('\n~~~~ global scope');
console.log('Is x undefined? ' + (typeof x === 'undefined'));
console.log('this.x: ' + this.x);
console.log('this:', this);
console.log('Foo:', this.Foo);
console.log('Bar:', this.Foo.Bar);
console.log('Baz:', this.Foo.Bar.Baz);
console.log('I:', this.I);
console.log('Am:', this.I.Am);
console.log('An:', this.I.Am.An);
console.log('Arbitrary:', this.I.Am.An.Arbitrary);
console.log('Namespace:', this.I.Am.An.Arbitrary.Namespace);
console.log('bad:', this.bad);
console.log('practice:', this.bad.practice);