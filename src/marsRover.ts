import { CLOCKWISE_ORDER } from "./direction";
import { Position } from "./position";

export default class MarsRover {
  private position: Position;

  constructor(initialPosition: Position) {
    this.position = initialPosition;
  }

  get currentPosition(): Position {
    return this.position;
  }

  turnLeft() {
    this.position = {
      ...this.position,
      direction: CLOCKWISE_ORDER[(((CLOCKWISE_ORDER.indexOf(this.position.direction) - 1) % 4) + 4) % 4]
    };
  }

  turnRight() {
    this.position = {
      ...this.position,
      direction: CLOCKWISE_ORDER[(CLOCKWISE_ORDER.indexOf(this.position.direction) + 1) % 4]
    };
  }

  move() {}
}
