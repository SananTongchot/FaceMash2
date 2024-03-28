import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Router, RouterLink } from '@angular/router';
import { CatModel } from '../../model';
import { CatService } from '../../services/api/cat.service';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';

CommonModule
@Component({
  selector: 'app-editimg',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule,
    RouterLink,
    RouterOutlet, MatInputModule , MatFormFieldModule,MatListModule, FormsModule,HttpClientModule
  ],
  templateUrl: './editimg.component.html',
  styleUrl: './editimg.component.scss'
})
export class EditimgComponent implements OnInit {
  id: any;
cat:any;
name:any;
  constructor(private route: ActivatedRoute,private service: CatService,private http: HttpClient) { 
//     console.log(this.id);
//  this.getcat(this.id);

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id); // เลื่อน console.log ไปยังนี่
      this.getcat(this.id);

    });
  }
 // กำหนดค่า name เป็น this.cat[0].name

  async getcat(id:any){
 
    this.cat = await this.service.get1cat(id);
    console.log(this.cat[0].name);
    this.name = this.cat[0].name;
    
    return this.cat[0];
   }

   
  uploadFile: File | null = null;

  onFileUpdate(event: any, id: any): void {
    this.uploadFile = event.target.files[0];
    console.log('f1', id);
    // this.service.clearUserFromLocalStorage();
    // this.service.setUserInLocalStorage(this.id);
  }
  async changeImage(id: any) {
    if (this.uploadFile) {
      const formData = new FormData();
      formData.append('file', this.uploadFile);
      formData.append('id', id);
      formData.append('name', this.name);
      console.log('f2', id);
      try {
        await this.service.putimg(id, formData);
        console.log('Image upload successful');
        window.location.reload(); 
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    } else {
      console.warn('No file selected.');
    }
  }
}