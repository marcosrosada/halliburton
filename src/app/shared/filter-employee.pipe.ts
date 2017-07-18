import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEmployee'
})
export class FilterEmployeePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value.length === 0 || args === undefined){
      return value;
    }

    let filter = args.toLocaleLowerCase();
    return value.filter(
      v => v.name.toLocaleLowerCase().includes(filter) || 
           v.func.toLocaleLowerCase().includes(filter) ||
           v.company.toLocaleLowerCase().includes(filter)
    );
  }

}
