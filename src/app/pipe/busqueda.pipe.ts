import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class BusquedaPipe implements PipeTransform {

  transform(items: any, termino: any): any {

  	if(termino === undefined) return items;

  	return items.filter( (item)=>{
  		return item.name.toLowerCase().includes( termino.toLowerCase() );
  	});
  }

}
