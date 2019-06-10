import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { checkAndUpdatePureExpressionInline } from '@angular/core/src/view/pure_expression';
import { SimpleWebDriverClient } from 'blocking-proxy/built/lib/simple_webdriver_client';

@Component({
  selector: 'app-test',
  template: `<div>
                Welcome {{name}}
             </div>
             <div>
              {{5 * 4}}
             </div>
             <div>
              {{ "Interpolation " + name }}
             </div>
             <div>
               {{name.length}} 
             </div>
             <div>
               {{name.toUpperCase()}} 
             </div>
             <div>
               {{greetUser()}} 
             </div>
             <div>
                {{siteUrl}}
             </div>
             <input [id]="myID" type="text" value="Bhargav">
             <input bind-disabled="isDisabled" id="{{myID}}" type="text" value="Bhargav">

             <h2 class="text-sucess">Angular Code - Class Binding</h2>
             <h2 [class]="sucessClass">Angular Code - Class Binding</h2>
             <h2 [class]="sucessClass" class="text-special">Angular Code - Class Binding</h2>
             <h2 [class.text-danger]="hasError">Angular Code - Class Binding</h2>
             <h2 [ngClass]="messageClass">Angular Code - Class Binding</h2>

             <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>
             <h2 [style.color]="highlightColor">Style Binding 2</h2>
             <h2 [ngStyle]="titleStyle">Style Binding 3</h2>

             <button (click)="onClick($event)">Greet</button>
             {{greeting}}

             <input type="text" #myInput>
             <button (click)="logMessage(myInput.value.length)">Log</button>

             <input [(ngModel)]="twoWayBinding" type="text">
             {{twoWayBinding}}

             <div>
                <h3 *ngIf="ngIfCondition; else elseBlock">ngIf condition check</h3>
              <ng-template #elseBlock>
                <h3>Else condition</h3>
              </ng-template>
             </div>
              <div *ngIf="ngIfCondition; then thenBlock; else elseBlock"></div>
             <ng-template #thenBlock>
                <h3>then condition</h3>
              </ng-template>

              <ng-template #elseBlock>
                <h3>Else condition</h3>
              </ng-template>

              <div [ngSwitch]="ngSwitchCondition">
                <div *ngSwitchCase="'red'">You selected Red.</div>
                <div *ngSwitchCase="'blue'">You selected Blue.</div>
                <div *ngSwitchDefault>Pick color again.</div>
              </div>

              <div *ngFor="let color of colors; odd as o">
                <ul>
                  <li>{{o}} - {{color}}</li>
                </ul>
              </div>

              <div>{{"Hellllo " + parentData}}</div>

              <button (click)="fireEvent()">Send Event</button>
             `, 
  styles: [`
      .text-sucess{
        color: green;
      }
      .text-danger{
        color: red;
      }
      .text-special{
        font-style: italic;
      }
  `]
})
export class TestComponent implements OnInit {

  public name = "BhargavPandya";
  public siteUrl = window.location.href;
  public myID = "testID";
  public isDisabled = false;
  public sucessClass = "text-sucess";
  public hasError = true;
  public hasSpecial = true;
  public highlightColor = "orange";
  public greeting="";
  public twoWayBinding= "";
  public ngIfCondition= true;
  public ngSwitchCondition = "blue";
  public colors = ["red", "Blue", "Yellow", "White"];

  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();

  public messageClass = {
    "text-sucess" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.hasSpecial

  }
  public titleStyle = {
    color : "silver",
    fontStyle : "bold"
  }
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

  onClick(event){
    console.log(event);
    this.greeting = event.type;
  }

  logMessage(value){
    console.log(value);
  }

  fireEvent(){
    this.childEvent.emit('Hey Child component');
  }
}
