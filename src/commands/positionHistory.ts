import {Position} from "../position";
import {Stack} from "../utils/stack";

export class PositionHistory implements Stack<Position>{
    private positionHistory: Position[] = [];

    asArray(): Position[] {
        return this.positionHistory.map((position: Position) => ({...position}))
    }

    pop(): Position {
        if(this.positionHistory.length === 0){
            return undefined
        }
        return this.positionHistory.pop();
    }

    push(item: Position): void {
        this.positionHistory.push(item)
    }

}