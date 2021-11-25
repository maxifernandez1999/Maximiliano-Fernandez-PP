import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(imagePath: string):string {
    if (imagePath === '') {
      return 'https://github.com/maxifernandez1999/Maximiliano-Fernandez-PP/blob/main/src/assets/not-found.jpeg';
    }else{
      return "";
    }
   
  }

}
