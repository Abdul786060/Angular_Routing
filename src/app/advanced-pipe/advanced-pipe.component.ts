import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-pipe',
  templateUrl: './advanced-pipe.component.html',
  styleUrls: ['./advanced-pipe.component.css']
})
export class AdvancedPipeComponent implements OnInit {

  constructor() { }
title="Advanced Pipes Concept";
  ngOnInit(): void {
  }
  user = {
    name:"rafay",
    age :22,
  }

}
