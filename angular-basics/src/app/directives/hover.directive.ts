import { Directive, ElementRef ,Renderer2,Input, OnInit, OnChanges, SimpleChanges,HostListener} from "@angular/core";

@Directive({
    selector:'[hover]'
})
export class HoverDirective implements OnInit,OnChanges{

    @Input()
    hover:string='red';

    @Input()
    selectedStateColorValue:string="red";

    targetElement:ElementRef;


    //Dependency Injection
    constructor(targetElement:ElementRef,private domApi:Renderer2){

this.targetElement=targetElement;
        console.log("constructor",this.hover);
       
        

    }
    ngOnInit(): void {
        console.log("ngOnInit",this.hover,this.selectedStateColorValue); 
        this.domApi.setStyle(this.targetElement.nativeElement,"color",this.hover);
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log("ngOnChanges",this.hover,this.selectedStateColorValue);
        
    }

    @HostListener('mouseenter')
    onMouseEnter(){
        console.log("onHostMouseEnter",this.hover,this.selectedStateColorValue);
        
        this.domApi.setStyle(this.targetElement.nativeElement,"color",this.selectedStateColorValue);
    }

    @HostListener('mouseleave')
    onMouseLeave(){
        console.log("onHostMouseLeave",this.hover,this.selectedStateColorValue);
        
        this.domApi.setStyle(this.targetElement.nativeElement,"color",this.hover);
    }
}