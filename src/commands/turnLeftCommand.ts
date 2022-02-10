import MarsRover from "../marsRover";
import {MarsRoverCommand} from "./marsRoverCommand";

export class TurnLeftCommand extends MarsRoverCommand {
    constructor(rover: MarsRover) {
        super(rover);
    }

    execute() {
        this.rover.turnLeft()
    }
}