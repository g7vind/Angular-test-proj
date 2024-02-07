import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BedroomComponent } from './components/bedroom/bedroom.component';
import { BathroomComponent } from './components/bathroom/bathroom.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { FormsModule } from '@angular/forms';
import { DiningHallComponent } from './components/dining-hall/dining-hall.component';
import { HallComponent } from './components/hall/hall.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BedroomComponent, BathroomComponent, KitchenComponent, DiningHallComponent,FormsModule,HallComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fisat';
  email :string = "";
  name:string = "Angular";
  test(){
   alert("hello");
  }
}
