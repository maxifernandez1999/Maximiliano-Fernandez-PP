import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImage]'
})
export class ImageDirective {

  constructor(private el: ElementRef) { 
    console.log(this.el.nativeElement.src)

      this.el.nativeElement.src = "https://firebasestorage.googleapis.com/v0/b/maximiliano-fernandez-pp.appspot.com/o/not-found.jpeg?alt=media&token=270b7793-e446-4de2-9bf5-82e9977b209d";
    console.log(this.el.nativeElement)
  }

}
