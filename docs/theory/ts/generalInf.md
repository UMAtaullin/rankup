## Шпаргалка по TypeScript

TypeScript — это строго типизированный надмножество JavaScript, которое добавляет статическую типизацию и другие возможности. Он позволяет разработчикам писать более надежный и поддерживаемый код. Ниже представлены основные концепции TypeScript с примерами.

### 1. Установка TypeScript

Для начала работы с TypeScript его необходимо установить. Сделать это можно с помощью npm:

```bash
npm install -g typescript
```

### 2. Основы типизации

#### Примитивные типы

TypeScript поддерживает несколько примитивных типов:

- **number**: для чисел.
- **string**: для строк.
- **boolean**: для логических значений.
- **null** и **undefined**: для отсутствующих значений.

```typescript
let age: number = 30;
let name: string = "Alice";
let isActive: boolean = true;
let notAssigned: null = null;
let uninitialized: undefined = undefined;
```

#### Массивы и кортежи

- **Массивы**:

```typescript
let numbers: number[] = [1, 2, 3];
let fruits: Array<string> = ["apple", "banana", "orange"];
```

- **Кортежи** (массивы фиксированной длины с разными типами):

```typescript
let tuple: [string, number] = ["Alice", 30];
```

### 3. Интерфейсы

Интерфейсы позволяют определять структуры объектов.

```typescript
interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: "Bob",
    age: 25
};
```

### 4. Классы

TypeScript поддерживает объектно-ориентированное программирование с классами.

```typescript
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak(): void {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Rex");
dog.speak(); // Rex barks.
```

### 5. Функции

TypeScript позволяет задавать типы параметров и возвращаемых значений функций.

```typescript
function add(x: number, y: number): number {
    return x + y;
}

const result = add(5, 10);
console.log(result); // 15
```

### 6. Объединения и пересечения типов

- **Объединения** (Union Types) позволяют переменной принимать несколько типов.

```typescript
let id: string | number;
id = "123"; // допустимо
id = 123;   // допустимо
```

- **Пересечения** (Intersection Types) позволяют комбинировать несколько типов в один.

```typescript
interface User {
    id: number;
}

interface Admin {
    role: string;
}

type AdminUser = User & Admin;

const adminUser: AdminUser = {
    id: 1,
    role: "admin"
};
```

### 7. Декларации типов

TypeScript позволяет создавать собственные типы с помощью `type`.

```typescript
type StringOrNumber = string | number;

let value: StringOrNumber;
value = "Hello"; // допустимо
value = 100;     // допустимо
```

### 8. Генерики

Генерики позволяют создавать компоненты, которые работают с любым типом.

```typescript
function identity<T>(arg: T): T {
    return arg;
}

const output = identity<string>("Hello");
const outputNumber = identity<number>(100);
```

### Заключение

TypeScript предоставляет мощные инструменты для разработки на JavaScript, улучшая читаемость и поддержку кода. Используйте статическую типизацию, интерфейсы, классы и другие возможности TypeScript для создания надежных приложений!