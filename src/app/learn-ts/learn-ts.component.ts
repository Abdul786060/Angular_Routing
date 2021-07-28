import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-ts',
  templateUrl: './learn-ts.component.html',
  styleUrls: ['./learn-ts.component.css']
})
export class LearnTsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newData:string | number='rafay';
obj:{name:string,phn:number} = {name:'rafay',phn:123};
arr:number[]=[1,2,3];
  getData(value:string)
  {
return value;
  }
  getValue()
  {
    this.getData('rafay');
  }
  title = "Hi";
// capitalize through function using pipes
capString(item:string){
  return item.toUpperCase();
}
}
