import MarsRover from "../marsRover";
import {Command} from "../types/command";
import {Position} from "../types/position";
import {TurnRightCommand} from "../commands/turnRightCommand";
import {TurnLeftCommand} from "../commands/turnLeftCommand";
import {UndoCommand} from "../commands/undoCommand";

export class MarsRoverExecutor {
    private readonly marsRover: MarsRover

    private readonly turnRightCommand: TurnRightCommand
    private readonly turnLeftCommand: TurnLeftCommand
    private readonly undoCommand: UndoCommand

    constructor(initialPosition: Position) {
        this.marsRover = new MarsRover(initialPosition);

        this.turnRightCommand = new TurnRightCommand(this.marsRover);
        this.turnLeftCommand = new TurnLeftCommand(this.marsRover);
        this.undoCommand = new UndoCommand(this.marsRover)
    }

    private executeCommand = (command: Command) => {
        const commands = {
            "R": this.turnRightCommand,
            "L": this.turnLeftCommand,
            "U": this.undoCommand,
        }

        commands[command].execute()
    }

    public executeAllCommands = (commandList: Command[]): Position => {
        commandList.forEach(this.executeCommand)
        return this.marsRover.currentPosition;
    }

}