import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-quest-symbol',
  templateUrl: './quest-symbol.component.html',
  styleUrls: ['./quest-symbol.component.scss']
})
export class QuestSymbolComponent implements OnInit {

  @Input() symbol?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
