// когда мы хотим ограничить область значений той ли иной переменной
enum Direction1 { // числовой enum
  Up = 1,
  Down,
  Left,
  Right,
  None
}

enum Direction2 { // строковый enum
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
  None = 'None'
}

enum Decision { // гетерогенный enum
  Yes = 1,
  No = 0,
  Maybe = 0.5
}

// рассчитываемые enum (только числовые)
function calcEnum() {
  return 2
}

enum CalculatedEnum {
  A = calcEnum(),
  B = 3
}

// получение строкового представления
enum Test {
  A
}

let tests = Test.A
let nameA = Test[tests] // A

// представлены в рантайме как функции
