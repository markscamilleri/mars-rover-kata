import MarsRover from "../marsRover";
import {MarsRoverCommand} from "./marsRoverCommand";

export class UndoCommand extends MarsRoverCommand {
    constructor(rover: MarsRover) {
        super(rover);
    }

    execute() {
        this.rover.undo()
    }
}