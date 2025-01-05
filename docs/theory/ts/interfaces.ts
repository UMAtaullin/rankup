// type Point = {
//   x: number;
//   y: number;
// }

// type D3Point = Point & {
//   z: number;
// } но к типам недоступно добавление свойств

interface IPoint {
  x: number;
  y: number;
}
// один интерфейс может расширять другой
interface I3DPoint extends IPoint {
  z: number;
}

const c = (point: IPoint) => {
  const d: I3DPoint = point as I3DPoint;
}
// вот так делается каст к определенному типу
const myCanvas = document.getElementById('canvas') as HTMLCanvasElement

function print(coord: IPoint) {
  
}

// мы можем дополнять интерфейсы
interface ITest {
  a: number;
}

interface ITest {
  b: string;
}

// JSON для упражнения:
// рекомендуется разбивать на несколько интерфейсов, т.к. в будущем можно будет переиспользовать
interface Tag {
  name: string;
  value: number;
}

interface Info {
  desc: string;
  isActive: boolean;
}

interface IRoot {
  userId: number;
  id: number;
  title: string;
  info: Info;
  tags: Tag[];
}

const json: IRoot =
{
  "userId": 1,
  "id": 1,
  "title": "some words",
  "info": {
    "desc": "some words",
      "isActive": true
  },
  "tags": [
    {
      "name": "my name",
      "value": 1000
    }
  ]
}

