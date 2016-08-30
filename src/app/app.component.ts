import { Component } from '@angular/core';
import { StructuralComponent } from './structural/structural-directives.component'
import { AttributeComponent } from './attr/attr.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ StructuralComponent, AttributeComponent ]
})
export class AppComponent {
  title = 'Directives Samples';
}
