import { Component, OnInit } from '@angular/core';
import { Widget } from '../../../models/widget.model.client';
import { WidgetService } from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
	widgets: Widget[];
  constructor(private widgetService: WidgetService) { }

  ngOnInit() {
  	this.widgetService.findAllWidgets()
  		.subscribe((widgets) => {
  			this.widgets = widgets;
  		});
  }

}
