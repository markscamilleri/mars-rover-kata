import { CLOCKWISE_ORDER } from "./direction";
import { Position } from "./position";
import { PositionHistory } from "./commands/positionHistory";

export default class MarsRover {
  private position: Position;
  private positionHistory = new PositionHistory();

  constructor(initialPosition: Position) {
    this.position = initialPosition;
    this.positionHistory.push(this.position);
  }

  get currentPosition(): Position {
    return this.position;
  }

  get history(): Position[] {
    return this.positionHistory.asArray();
  }

  turnLeft() {
    this.position = {
      ...this.position,
      direction:
        CLOCKWISE_ORDER[
          (((CLOCKWISE_ORDER.indexOf(this.position.direction) - 1) % 4) + 4) % 4
        ],
    };
    this.positionHistory.push(this.position);
  }

  turnRight() {
    this.position = {
      ...this.position,
      direction:
        CLOCKWISE_ORDER[
          (CLOCKWISE_ORDER.indexOf(this.position.direction) + 1) % 4
        ],
    };
    this.positionHistory.push(this.position);
  }

  move() {}

  undo() {
    this.positionHistory.pop();
    this.position = this.positionHistory.peek();
  }
}
