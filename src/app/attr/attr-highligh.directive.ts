import { Directive, HostListener, HostBinding} from '@angular/core'

@Directive({
    selector: '[highlight]'
})

export class HighlightDirective{
    @HostListener ('onfocus') onfocus(){
        this.border = '3px solid red';
    }
    @HostListener ('onblur') onblur(){
        this.border = '1px solid black';
    }
    private border = '1px solid black';
     constructor(){}
}