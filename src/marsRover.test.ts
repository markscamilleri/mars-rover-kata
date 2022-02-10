import MarsRover from "./marsRover";
import {Position} from "./position";
import {Direction} from "./direction";

describe("Mars Rover", () => {

  describe.each([
      {startingPosition: {x: 0, y: 0, direction: Direction.NORTH}, left: Direction.WEST, right: Direction.EAST, movedPosition: {x: 0, y: 1, direction: Direction.NORTH}},
      {startingPosition: {x: 4, y: 0, direction: Direction.WEST}, left: Direction.SOUTH, right: Direction.NORTH, movedPosition: {x: 3, y: 0, direction: Direction.WEST}},
      {startingPosition: {x: 0, y: 4, direction: Direction.SOUTH}, left: Direction.EAST, right: Direction.WEST, movedPosition: {x: 0, y: 3, direction: Direction.SOUTH}},
      {startingPosition: {x: 0, y: 0, direction: Direction.EAST}, left: Direction.NORTH, right: Direction.SOUTH, movedPosition: {x: 1, y: 0, direction: Direction.EAST}},
  ])("When the Mars Rover is instantiated at the co-ordinates $startingPosition", ({startingPosition, left, right, movedPosition}) => {

      let rover: MarsRover;

      beforeEach(() => {
          rover = new MarsRover(startingPosition);
      });

      it("should have the correct initial position", () => {
          expect(rover.currentPosition).toEqual(startingPosition);
      });

      describe("And it is given the command to turn left", () => {
          beforeEach(() => {
              rover.turnLeft();
          });

          it(`should be facing ${left}`, () => {
              expect(rover.currentPosition).toEqual({
                  x: startingPosition.x,
                  y: startingPosition.y,
                  direction: left,
              });
          })

          it('should add the current position to the position history', () => {
              expect(rover.history).toEqual([
                  {
                      x: startingPosition.x,
                      y: startingPosition.y,
                      direction: startingPosition.direction,
                  },
                  {
                  x: startingPosition.x,
                  y: startingPosition.y,
                  direction: left,
              }])
          })
      });

      describe("And it is given the command to turn right", () => {
          beforeEach(() => {
              rover.turnRight();
          })

          it(`should be facing ${right}`, () => {
              expect(rover.currentPosition).toEqual({
                  x: startingPosition.x,
                  y: startingPosition.y,
                  direction: right,
              });
          })
      })

      describe.skip("And it is given the command to move", () => {
          beforeEach(() => {
              rover = new MarsRover(startingPosition);
              rover.move();
          });

          it(`should have moved 1 square ${startingPosition.direction}`, () => {
              expect(rover.currentPosition).toEqual(movedPosition)
          })
      })
  });
});
