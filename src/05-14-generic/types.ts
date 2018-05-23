interface Filter<T> {
  unique(array: Array<T>): Array<T>;
}

interface Person {
  name: string;
  getName(): string;
}

interface Manager extends Person {
  department: number;
}

export {
  Filter,
  Person,
  Manager
}