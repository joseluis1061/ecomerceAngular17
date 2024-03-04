import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string): string {
    const currentValue = new Date();
    const oldDate = new Date(value);
    const timeAgo = formatDistance(oldDate, currentValue)
    return timeAgo;
  }

}
