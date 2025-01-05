type actionType = 'up' | 'down'

function performAction1(action: actionType) {
  switch (action) {
    case 'up' // на выбор будет только up & down
  }
}

function performAction2(action: actionType): -1 | 1 {
  switch (action) {
    case 'down':
      return -1;
    case 'up':
      return 1;
  }
}

// могут быть скомбинированы с обычным интерфейсом
interface ComplexAction {
  s: string;
}

function performAction3(
  action: actionType | ComplexAction) {
  switch (action) {
    case 'down':
      return -1;
    case 'up':
      return 1;
  }
}