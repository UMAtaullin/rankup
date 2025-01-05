## Шпаргалка по Enums в TypeScript

**Enums** (перечисления) в TypeScript представляют собой специальный тип данных, позволяющий создавать именованные наборы числовых или строковых констант. Это делает код более читаемым и управляемым, особенно при работе с фиксированным набором значений.

### Основные типы Enums

1. **Числовые перечисления**
   - По умолчанию, числовые перечисления начинаются с 0 и увеличиваются на 1 для каждого следующего элемента.
   - Можно задать начальное значение.

   ```typescript
   enum Direction {
       Up = 1,
       Down,
       Left,
       Right
   }

   console.log(Direction.Up); // 1
   console.log(Direction.Down); // 2
   ```

2. **Строковые перечисления**
   - Каждый элемент перечисления должен быть инициализирован строковым значением.

   ```typescript
   enum Response {
       Yes = "YES",
       No = "NO"
   }

   console.log(Response.Yes); // "YES"
   ```

3. **Гибридные перечисления**
   - Можно комбинировать числовые и строковые значения.

   ```typescript
   enum Mixed {
       No = 0,
       Yes = "YES"
   }
   
   console.log(Mixed.No); // 0
   console.log(Mixed.Yes); // "YES"
   ```

### Примеры использования Enums

- **Использование в функциях**

```typescript
enum UserResponse {
    No = 0,
    Yes = 1
}

function respond(recipient: string, message: UserResponse): void {
    console.log(`Sending ${message} to ${recipient}`);
}

respond("Alice", UserResponse.Yes);
```

- **Определение интерфейсов с использованием Enums**

```typescript
enum ShapeKind {
    Circle,
    Square
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

let myShape: Circle = {
    kind: ShapeKind.Circle,
    radius: 10
};
```

### Особенности Enums

- **Компилируемый код**: Enums компилируются в объекты JavaScript, что позволяет использовать их как обычные объекты.

- **Объединение типов**: TypeScript понимает, что значения перечисления являются объединением всех его элементов, что помогает избежать ошибок при сравнении.

```typescript
enum Color {
    Red,
    Green,
    Blue
}

function getColorName(color: Color) {
    if (color === Color.Red) {
        return "Red";
    } else if (color === Color.Green) {
        return "Green";
    } else if (color === Color.Blue) {
        return "Blue";
    }
}
```

### Заключение

Enums в TypeScript являются мощным инструментом для работы с фиксированными наборами значений, улучшая читаемость и поддержку кода. Их использование помогает избежать "магических значений" и делает код более понятным.

Citations:
[1] https://scriptdev.ru/guide/015/
[2] https://purpleschool.ru/knowledge-base/article/enums
[3] https://purpleschool.ru/knowledge-base/article/types
[4] https://scriptdev.ru/book/types/enums/
[5] https://www.dev-notes.ru/articles/typescript/typescript-cheatsheet/
[6] https://my-js.org/docs/cheatsheet/ts/