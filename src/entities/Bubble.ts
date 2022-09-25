import range from "../helpers/range";
import selectRandomElement from "../helpers/selectRandomElement";
import { ILetter, Letters } from "./ILetter";
import { v4 } from "uuid";

export class Bubble {
  public top: number = -20;
  public left: number = 0;
  public isInside: boolean = true;
  public bgcolor: string = "black";
  public color: string = "white";
  public secondsToFall: number = 0.5;
  public letter: ILetter;
  public id: string;
  constructor() {
    this.left = selectRandomElement(range(1, 98, 0.5));
    this.letter = selectRandomElement(Letters);
    this.id = v4();
  }
  goDown(): Bubble {
    if (this.top >= 110) {
      this.isInside = false;
      return this;
    }
    this.top += 2;
    return this;
  }
  update(): Bubble {
    this.goDown();
    return this;
  }
}
