import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { CatService } from '../../services/api/cat.service';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterOutlet,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    FormsModule ,HttpClientModule,RouterLink ,RouterModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  constructor(private http:HttpClient,private router: Router,private service:CatService){}

  name:any="";
  email:any="";
  password:any="";
  type:any="use";
  
  
  
  
  
 async sign_up() {
   let bodyData = {
    "name" : this.name,
    "email" : this.email,
    "password" : this.password,
    "type" : this.type
   };
 const result = await this.service.signUp(bodyData);
console.log(result);


}

validateAndSignUp() {
  if (!(this.name && this.email && this.password)) {
      alert("Please fill in all fields before signing up.");
      this.router.navigate(['/signup']);
  } else {
      // Call your sign up function here
      this.sign_up();
  }
}
}
