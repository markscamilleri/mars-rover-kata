export interface Stack<T> {
  asArray: () => T[];
  peek: () => T | undefined;
  pop: () => T | undefined;
  push: (item: T) => void;
}
