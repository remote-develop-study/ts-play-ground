type MethodOption = {
  isEdit: boolean;
  isEnum: boolean;
};

// 팩토리
function methodOption({ isEdit, isEnum }: MethodOption) {
  return function(target: any, propName: string, desc: PropertyDescriptor) {
    desc.writable = isEdit;
    desc.enumerable = isEnum;
  };
}

class MethodDeco {
  constructor() {
    console.log('new Person()');
  }

  @methodOption({ isEdit: true, isEnum: false })
  hello() {
    return 'hello';
  }
}
