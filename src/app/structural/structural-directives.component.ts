import { Component } from '@angular/core'
import { StructuralService } from './structural.service'

@Component({
    moduleId: module.id,
    selector: 'structuralDir',
    templateUrl: 'structural-template.component.html',
    providers: [ StructuralService ]

})

export class StructuralComponent{
    structTitle= {
        title: "Structural Directives",
        ngforDir: "*ngFor Structural Directive",
        ngifDir: "*ngIf Structural Directive",
        ngSwitchDir: "ngSwitch Structural Directive"
    }
    structuresItems: string[];

    constructor(structuralService: StructuralService){
        this.structuresItems = structuralService.getStruct();
    }
    private turn = true;
    isClicked(){
        this.turn = !this.turn;
    }

}