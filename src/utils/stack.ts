export interface Stack<T> {
  push: (item: T) => void;
  pop: () => T | undefined;
  asArray: () => T[];
  peek: () => T | undefined;
}
