import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FONT_OPT } from './font-opt';

@Component({
  selector: 'app-exercise1',
  imports: [RouterModule, FormsModule, CommonModule, UpperCasePipe ],
  templateUrl: './exercise1.component.html',
  styleUrl: './exercise1.component.css'
})
export class Exercise1Component {
  enteredName = '';
  //list of available font for firefox
  fontOpt = FONT_OPT;
  font: string = 'Arial';
  fontSize: number = 16;
  align = { left: false, center: false, right: false };

  //computed the style from setting to apply it to the result string
  getStyle() {
    let textAlign = 'left';
    if (this.align.center) textAlign = 'center';
    else if (this.align.right) textAlign = 'right';

    return {
      'font-family': this.font,
      'font-size.px': this.fontSize,
      'text-align': textAlign
    };
  }
}
