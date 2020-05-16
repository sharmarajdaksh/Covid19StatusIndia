import { Pipe, PipeTransform } from '@angular/core';
import { StateDataModel } from '../stateData.model';

@Pipe({
  name: 'filterState'
})
export class FilterStatePipe implements PipeTransform {

  transform(items: StateDataModel[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    return items.filter(it=>{
      console.log((it.state).toLowerCase().includes(searchText))
      return (it.state).toLowerCase().includes(searchText)
    });
  }

}
