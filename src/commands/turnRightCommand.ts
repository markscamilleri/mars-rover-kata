import MarsRover from "../marsRover";
import {MarsRoverCommand} from "./marsRoverCommand";

export class TurnRightCommand extends MarsRoverCommand {
    constructor(rover: MarsRover) {
        super(rover);
    }

    execute() {
        this.rover.turnRight()
    }
}