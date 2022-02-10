import MarsRover from "../marsRover";

export abstract class MarsRoverCommand {
    protected rover: MarsRover;

    protected constructor(rover: MarsRover) {
        this.rover = rover;
    }
    abstract execute() : void;
}


