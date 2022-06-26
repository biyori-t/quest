import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quest-reward',
  templateUrl: './quest-reward.component.html',
  styleUrls: ['./quest-reward.component.scss'],
})
export class QuestRewardComponent implements OnInit {
  @Input() reward = 0;

  constructor() {}

  ngOnInit(): void {}
}
