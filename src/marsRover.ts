import { CLOCKWISE_ORDER } from "./types/direction";
import { Position } from "./types/position";
import { PositionHistory } from "./positionHistory";

export default class MarsRover {
  private positionHistory = new PositionHistory();

  constructor(initialPosition: Position) {
    this.positionHistory.push(initialPosition);
  }

  get currentPosition(): Position {
    return this.positionHistory.peek();
  }

  get history(): Position[] {
    return this.positionHistory.asArray();
  }

  turnLeft() {
    const lastPosition = this.positionHistory.peek()

    const position = {
      ...lastPosition,
      direction:
        CLOCKWISE_ORDER[
          (((CLOCKWISE_ORDER.indexOf(lastPosition.direction) - 1) % 4) + 4) % 4
        ],
    };
    this.positionHistory.push(position);
  }

  turnRight() {
    const lastPosition = this.positionHistory.peek()

    const position = {
      ...lastPosition,
      direction:
        CLOCKWISE_ORDER[
          (CLOCKWISE_ORDER.indexOf(lastPosition.direction) + 1) % 4
        ],
    };
    this.positionHistory.push(position);
  }

  move() {}

  undo() {
    this.positionHistory.pop();
  }
}
