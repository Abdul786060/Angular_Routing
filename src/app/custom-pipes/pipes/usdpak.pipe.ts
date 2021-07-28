import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdpak'
})
export class UsdpakPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [price]=args;
    return value*price;
  }

}
