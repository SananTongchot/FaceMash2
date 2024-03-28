import { Component,OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { RouterModule} from '@angular/router';
import { CatService } from '../../services/api/cat.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-edit-profileuser',
  standalone: true,
  imports: [RouterOutlet,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule,
    MatInputModule,HttpClientModule,CommonModule, MatInputModule , MatFormFieldModule,MatListModule, FormsModule,HttpClientModule],
  templateUrl: './edit-profileuser.component.html',
  styleUrl: './edit-profileuser.component.scss'
})
export class EditProfileuserComponent implements OnInit{
  constructor(
    private router: Router,   private http: HttpClient,   private service:CatService  ) { }

user:any;
uploadFile: File | null = null;
name:any;
password:any;
email:any;
avatar:any;


ngOnInit(): void {
    this.user = this.service.getUserFromLocalStorage(); // ดึงข้อมูลผู้ใช้จาก Local Storage
    this.name = this.user[0].name;
    this.password = this.user[0].password;
    this.email = this.user[0].email;
    return this.user;
  }

  onFileUpdate(event: any, id: any): void {
    this.uploadFile = event.target.files[0];
  }

  
  async changeImage(id: any) {
    console.log('user',id);
    if (this.uploadFile) {
      const formData = new FormData();
      formData.append('file', this.uploadFile);
      formData.append('id', id);
      formData.append('name', this.name);
      formData.append('email', this.email);
      formData.append('password', this.password);
      try {
      await this.service.putimgUser(id, formData);
        console.log('Image upload successful');
        // window.location.reload();
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    } else {
      const formData = new FormData();
      console.log(this.user[0].avatar);
      formData.append('avatar', this.user[0].avatar);
      formData.append('id', this.user[0].id);
      formData.append('name', this.name);
      formData.append('email', this.email);
      formData.append('password', this.password);
      try {
      await this.service.putDataUser(id, formData);
        console.log('Image upload successful ');
        // window.location.reload();
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  }
}
