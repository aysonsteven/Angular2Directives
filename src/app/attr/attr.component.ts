import { Component } from '@angular/core'
import { HighlightDirective} from './attr-highligh.directive'


@Component({
    moduleId: module.id,
    selector: 'attributeDir',
    templateUrl: 'att-template.component.html',
    styleUrls: ['attr.component.css'],
    directives: [ HighlightDirective ]
})

export class AttributeComponent{
    attrTitle= {
        title: "Attribute Directives",
        ngclassDir: "ngClass",
        ngstyleDir: "ngStyle"
    }
}