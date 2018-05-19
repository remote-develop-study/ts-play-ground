interface Filter<T> {
  unique(array: T[]): T[];
}

interface Person<T> {
  name: T;

  getName(): T;
}

interface Manager<T, S> extends Person<T> {
  department: S;
}

export {
  Filter,
  Person,
  Manager,
};
