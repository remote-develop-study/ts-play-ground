interface Filter<T> {
  unique(array:T[]): T[];
}

interface Person<T> {
  name: T;
  getName(): T;
}

interface Manager<T, N> extends Person<T> {
  department: N;
}

export {
  Filter,
  Person,
  Manager
}