import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-even',
    templateUrl: './even.component.html',
    styles: ['./even.component.css']
})

export class EvenComponent{


    @Input() number: number;
    
}