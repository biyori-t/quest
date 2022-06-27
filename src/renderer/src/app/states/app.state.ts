import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { QuestState } from './quest.state';

export interface AppStateModel {}

@State<AppStateModel>({ name: 'app', defaults: {}, children: [QuestState] })
@Injectable()
export class AppState {}
