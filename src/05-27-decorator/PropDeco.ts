// 팩토리
function writable(isEditable: boolean) {
  return function(target: any, propName: string): any {
    return {
      writable: isEditable,
    };
  };
}

class PropDeco {
  @writable(false)
  name: string = 'Mark';

  constructor() {
    console.log('new Person()');
  }
}

const propDeco = new PropDeco();
console.log(propDeco.name);
