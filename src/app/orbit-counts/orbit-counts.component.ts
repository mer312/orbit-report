import { Component, OnInit, Input } from '@angular/core';
// import { count } from 'console';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})

export class OrbitCountsComponent implements OnInit {
  
  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

satCounter(): number[] {
  let counter: number[]
  counter = [0,0,0,0,0,0,0];
  for(let i = 0; i < this.satellites.length; i++){
    if(this.satellites[i].type.toLowerCase() === 'space debris' ) {
      counter[0]+=1 
    }else if(this.satellites[i].type.toLowerCase() === 'communication' ){
      counter[1]+=1
    }else if(this.satellites[i].type.toLowerCase() === 'probe' ){
      counter[2]+=1
    }else if(this.satellites[i].type.toLowerCase() === 'positioning' ){
      counter[3]+=1
    }else if(this.satellites[i].type.toLowerCase() === 'space station' ){
      counter[4]+=1
    }else if(this.satellites[i].type.toLowerCase() === 'telescope' ){
      counter[5]+=1
    }else{
      counter[6]+=1;
    }
    
    } 
    return counter;
  }

// satCounter(type: string): number {
//   let counter: number = 0;
//   for(let i = 0; i < this.satellites.length; i++){
//     if(this.satellites[i].type.toLowerCase() === type.toLowerCase() ) {
//       counter +=1 
//     }
    
//     } 
//     return counter;
//   }

}