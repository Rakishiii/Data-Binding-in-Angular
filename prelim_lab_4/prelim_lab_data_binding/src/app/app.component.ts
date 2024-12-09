import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DataBindingDemoComponent } from './data-binding-demo/data-binding-demo.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { HomeComponent } from './admin/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DataBindingDemoComponent,DirectivesDemoComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prelim_lab_data_binding';
}
