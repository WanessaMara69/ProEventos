import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '../util/constants';

@Pipe({
  name: 'DateTimeFormat'
})
export class DateTimeFormatPipe extends DatePipe implements PipeTransform {
  override transform(value: any, args?: any): any {
    if (typeof value === 'string') {
      value = value.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1'); // Converte "DD/MM/YYYY" para "YYYY-MM-DD"
    }
    return super.transform(new Date(value), Constants.DATE_TIME_FMT, '-03:00');
  }
}