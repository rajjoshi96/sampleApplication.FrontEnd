import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-to-do-app',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './to-do-app.component.html',
  styleUrl: './to-do-app.component.css'
})
export class ToDoAppComponent {



  AddItem() {
    console.log("Item Added");

  }

  RemoveItem() {
    console.log("Item Removed");

  }
}
