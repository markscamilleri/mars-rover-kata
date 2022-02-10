import { Position } from "./types/position";
import { Stack } from "./types/stack";

export class PositionHistory implements Stack<Position> {
  private positionHistory: Position[] = [];

  asArray(): Position[] {
    return this.positionHistory.map((position: Position) => ({ ...position }));
  }

  pop(): Position {
    if (this.positionHistory.length === 0) {
      return undefined;
    }
    return this.positionHistory.pop();
  }

  push(item: Position): void {
    this.positionHistory.push(item);
  }

  peek(): Position {
    if (this.positionHistory.length === 0) {
      return undefined;
    }
    return { ...this.positionHistory[this.positionHistory.length - 1] };
  }
}
