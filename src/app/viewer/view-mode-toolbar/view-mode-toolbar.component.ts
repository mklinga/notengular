import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewMode } from '../../types';

@Component({
  selector: 'app-view-mode-toolbar',
  templateUrl: './view-mode-toolbar.component.html',
  styleUrls: ['./view-mode-toolbar.component.scss']
})
export class ViewModeToolbarComponent implements OnInit {

  @Input() viewMode: ViewMode;
  @Output() setViewMode = new EventEmitter<ViewMode>();

  viewModeOptions = ViewMode;

  constructor() { }

  ngOnInit(): void {}

  setMode(mode: 'view' | 'edit'): void {
    switch (mode) {
      case 'edit':
        this.setViewMode.emit(ViewMode.EDIT);
        break;
      case 'view':
      default:
        this.setViewMode.emit(ViewMode.VIEW);
        break;
    }
  }
}
