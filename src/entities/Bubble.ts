import { ILetter } from "./ILetter";

export class Bubble {
  public top: number = -20;
  public left: number = 0;
  public isOut: boolean = false;
  public bgcolor: string = "black";
  public color: string = "white";
  public secondsToFall: number = 0.5;
  constructor(public letter: ILetter) {}
  goDown(): Bubble {
    if (this.top === 100) {
      this.isOut = true;
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
