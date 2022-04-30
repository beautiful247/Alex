import { Component, OnInit } from '@angular/core';
import {Block} from "../../interface/block";

@Component({
  selector: 'app-blocks-board',
  templateUrl: './blocks-board.component.html',
  styleUrls: ['./blocks-board.component.css']
})
export class BlocksBoardComponent implements OnInit {

  block:Block = {
    id: 1,
    color: '#ffffff'
  }

  blocks:Block[] = [
    this.block
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
