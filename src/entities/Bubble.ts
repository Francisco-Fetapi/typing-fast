import range from "../helpers/range";
import selectRandomElement from "../helpers/selectRandomElement";
import { ILetter, Letters } from "./ILetter";
import { v4 } from "uuid";
import { Color } from "../hooks/useMuiColors";

export class Bubble {
  public top: number = -20;
  public left: number = 0;
  public isInside: boolean = true;
  public bgcolor: string = "black";
  public color: string = "white";
  public secondsToFall: number = 0.5;
  public letter: ILetter;
  public id: string;
  static colors: Color[] = [];
  static availableLetters: ILetter[] = [];
  private topToDecrease: number = 2;

  constructor() {
    this.left = selectRandomElement(range(1, 90, 0.5));
    const lettersNotAvailable = Letters.filter(
      (letter) => !Bubble.availableLetters.includes(letter)
    );
    this.letter = selectRandomElement(lettersNotAvailable);
    this.id = v4();
    this.setColor();
  }
  goDown(): Bubble {
    if (this.top >= 110) {
      this.isInside = false;
      return this;
    }
    this.top += this.topToDecrease;
    return this;
  }
  increaseTopToDecrease(value: number) {
    this.topToDecrease = value;
  }
  update(): Bubble {
    this.goDown();
    return this;
  }
  private setColor() {
    const colors = selectRandomElement(Bubble.colors);
    this.bgcolor = colors.backgroundColor;
    this.color = colors.color; // textColor
  }
}
