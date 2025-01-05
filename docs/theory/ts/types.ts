let a: number = 4;
let b: string = "hello";
let c = true;

let d: string[] = ['word', 'only string'];

let e: any = 3;

function test(a: string): void {
  return 
}

const f: (x: number, y: number) => number = (x, y) => x + y;

const test2 = (a: number): number => {
  return a * 2;
}

d = d.map((x: string) => x.toLowerCase())

function countCoord(coord: {lat: number, long: number}) {
  return coord.lat ** 2 + coord.long
}

function printIt(id: number | string) {
  if (typeof id === 'number') {
    console.log('Number:', id);
  } else if (typeof id === 'string') {
    console.log('String:', id);
  }
}

function getSum(a: number | number[]) {
  if (Array.isArray(a)) {
    return a.reduce((acc, val) => acc + val, 0);
  } else {
    return a + a;
  }
}

const x: undefined = undefined
const y: null = null