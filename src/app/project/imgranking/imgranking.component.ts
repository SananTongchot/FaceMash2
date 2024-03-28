import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-imgranking',
  standalone: true,
  imports: [RouterOutlet,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule],
  templateUrl: './imgranking.component.html',
  styleUrl: './imgranking.component.scss'
})
export class ImgrankingComponent {

}
