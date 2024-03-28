import { Routes } from '@angular/router';
import { LoginComponent } from './project/login/login.component';
import { SignupComponent } from './project/signup/signup.component';
import { MainComponent } from './project/main/main.component';
import { UserComponent } from './project/user/user.component';
import { ProfileUserComponent } from './project/profile-user/profile-user.component';
import { EditProfileuserComponent } from './project/edit-profileuser/edit-profileuser.component';
import { PagetopComponent } from './project/pagetop/pagetop.component';
import { EditimgComponent } from './project/editimg/editimg.component';
import { ImgrankingComponent } from './project/imgranking/imgranking.component';
import { PreimgrankComponent } from './project/preimgrank/preimgrank.component';

export const routes: Routes = [
    {path: 'login' , component : LoginComponent},
    {path: 'signup' , component : SignupComponent},
    {path: '' , component : MainComponent},
    {path: 'user', component : UserComponent},
    {path: 'profileuser', component : ProfileUserComponent},
    {path: 'editpro', component : EditProfileuserComponent},
    {path: 'top10' , component : PagetopComponent},
    {path: 'editimg' , component : EditimgComponent },
    {path: 'imgrank' , component : ImgrankingComponent },
    {path: 'preimg' , component : PreimgrankComponent }
];
