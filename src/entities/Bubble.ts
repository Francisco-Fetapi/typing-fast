import { ILetter } from "./ILetter";

export class Bubble {
  public top: number = -20;
  public left: number = 0;
  public isOut: boolean = false;
  constructor(public letter: ILetter) {}
  goDown(): void {
    if (this.top === 100) {
      this.isOut = true;
      return;
    }
    this.top += 5;
  }
  update() {
    this.goDown();
  }
}
