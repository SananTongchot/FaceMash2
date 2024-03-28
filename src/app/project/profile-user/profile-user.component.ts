import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CatService } from '../../services/api/cat.service';
@Component({
  selector: 'app-profile-user',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule,
    HttpClientModule,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss'],
})
export class ProfileUserComponent implements OnInit {
  img: any = [];
  user: any;
  constructor(
    private router: Router,
    private http: HttpClient,
    private service: CatService
  ) {}

  async ngOnInit(): Promise<void> {
    this.user = this.service.getUserFromLocalStorage(); // ดึงข้อมูลผู้ใช้จาก Local Storage
    await this.getimg(this.user[0].id); // เรียกใช้งาน getimg และส่งค่า ID จากข้อมูลผู้ใช้
  }

  uploadFile: File | null = null;
  selectedFile: File | null = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.uploadImage(this.user[0].id);
  }
  onFileUpdate(event: any, id: any): void {
    this.uploadFile = event.target.files[0];
    console.log('f1', id);
    this.changeImage(id);
    this.service.clearUserFromLocalStorage();
    this.service.setUserInLocalStorage(this.user);
  }
  async changeImage(id: any) {
    if (this.uploadFile) {
      const formData = new FormData();
      formData.append('file', this.uploadFile);
      formData.append('id', id);
      console.log('f2', id);
      try {
        await this.service.putimg(id, formData);
        console.log('Image upload successful');
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    } else {
      console.warn('No file selected.');
    }
  }

  async uploadImage(id: any) {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('userId',id);
      console.log(id);

      try {
        await this.service.uploadImage(formData);
        console.log('Image upload successful');
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    } else {
      console.warn('No file selected.');
    }
  }

  async getimg(id: any) {
    const queryParams = `?id=${encodeURIComponent(id)}`;
    const response = await this.service.get5img(queryParams);
    console.log(response);
    this.img = response;
    return this.img;
  }
}
