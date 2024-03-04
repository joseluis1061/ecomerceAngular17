import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeQuotes',
  standalone: true
})
export class RemoveQuotesPipe implements PipeTransform {

  transform(value: string[]): string[] {
    if (!value || !Array.isArray(value)) {
      return value;
    }

    const modifiedArray = value.map(item => {
      // Eliminar comillas dobles
      let modifiedItem = item.replace(/"/g, '');

      // Eliminar corchetes si están presentes en el primer y último elemento
      if (value.indexOf(item) === 0 || value.indexOf(item) === value.length - 1) {
        modifiedItem = modifiedItem.replace(/\[/g, '').replace(/\]/g, '');
      }

      return modifiedItem;
    });

    return modifiedArray;
  }


}
