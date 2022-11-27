import { Directive } from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

  constructor() {
    // console.log(Element);
    // Element.nativeElement.innerText="Text is changed by changeText Directive. ";
 }

}
