import {MarsRoverExecutor} from "./marsRoverExecutor";
import {Direction} from "../types/direction";
import {Command} from "../types/command";

describe("Mars Rover Executor", () => {
    let marsRoverExecutor: MarsRoverExecutor;

    describe("When it is given an initial position", () => {
        const initialPosition = {
            x: 0,
            y: 0,
            direction: Direction.NORTH
        }
        beforeEach(() => {
            marsRoverExecutor = new MarsRoverExecutor(initialPosition)
        })

        describe("and it is given a list of commands to execute", () => {
            const commands: Command[] = ["R"]

            it("should execute them all and return the rover's last position", () => {
                expect(marsRoverExecutor.executeAllCommands(commands)).toEqual({x: 0, y: 0, direction: Direction.EAST})
            })
        })

    })
})