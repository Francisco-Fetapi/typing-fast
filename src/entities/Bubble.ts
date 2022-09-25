import range from "../helpers/range";
import selectRandomElement from "../helpers/selectRandomElement";
import { ILetter, Letters } from "./ILetter";

export class Bubble {
  public top: number = -20;
  public left: number = 0;
  public isInside: boolean = true;
  public bgcolor: string = "black";
  public color: string = "white";
  public secondsToFall: number = 0.5;
  public letter: ILetter;
  constructor() {
    this.left = selectRandomElement(range(0, 100));
    this.letter = selectRandomElement(Letters);
  }
  goDown(): Bubble {
    if (this.top >= 100) {
      this.isInside = false;
      return this;
    }
    this.top += 5;
    return this;
  }
  update(): Bubble {
    this.goDown();
    return this;
  }
}
