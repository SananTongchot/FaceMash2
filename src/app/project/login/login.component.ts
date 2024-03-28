import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes, Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { CatModel, UserModel } from '../../model';
import { CatService } from '../../services/api/cat.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    RouterModule,
    RouterLink,
    HttpClientModule,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit{


  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private service: CatService,
  
  ) {}

  name: any = '';
  password: any = '';
 user:UserModel[] =[];
cat:CatModel[]=[];

ngOnInit(): void {
}

async check(name: any, password: any) {
  const user = await this.service.checklogin(name, password);
  if (user) {
    this.service.setUserInLocalStorage(user); // เก็บข้อมูลผู้ใช้ใน Local Storage
    this.router.navigate(['/user']);
  } else {
    // Handle invalid login
  }
}

async  GetId() {
    this.cat = await this.service.get();
  }
}

