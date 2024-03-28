import { Injectable } from '@angular/core';
import { Constants } from '../../project/user/config/constants';
import { CatModel, UserModel } from '../../model';
import { lastValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  private readonly headers = new HttpHeaders().set(
    'Content-Type',
    'application/json'
  );


  constructor(private constants: Constants, private http: HttpClient) {}

  setUserInLocalStorage(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUserFromLocalStorage(): any {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  }

  clearUserFromLocalStorage() {
    localStorage.removeItem('user');
  }


  public async checklogin(name: string, password: string) {
    const url = `${this.constants.API_ENDPOINT}/?name=${encodeURIComponent(
      name
    )}&password=${encodeURIComponent(password)}`; // สร้าง URL พร้อมพารามิเตอร์คิวรี
    const response = await lastValueFrom(this.http.get(url));
    return response as UserModel[];
  }

  public async get() {
    const url = this.constants.API_ENDPOINT + '/random';
    const response = await lastValueFrom(this.http.get(url));
    return response as CatModel[];
  }

  public async SelectScore(id: number, options?: any) {
    const url =`${this.constants.API_ENDPOINT}/upscore/${id}`;
    const response = await lastValueFrom(this.http.get(url));
    return response as CatModel[];
  }

  public async put(id: number, newscore: number): Promise<void> {
    const url = `${this.constants.API_ENDPOINT}/upscore/${id}`;
    const data = {
      score: newscore,
    };

    await lastValueFrom(this.http.put(url, data, { headers: this.headers }));
  }

  public async updateScore(data: any): Promise<any> {
    const url = this.constants.API_ENDPOINT + '/upscore';
    const response = await lastValueFrom(this.http.post(url, data, { headers: this.headers }));
    return response;
  }

  public async RankToday() {
    const url = this.constants.API_ENDPOINT + '/rankold';
    const response = await lastValueFrom(this.http.get(url));
    return response as CatModel[];
  }

  public async putimg(id: number, formData: FormData): Promise<void> {
    try {
      await this.http.put<any>(`${this.constants.API_ENDPOINT}/upload/img2`, formData).toPromise();
    } catch (error) {
      throw new Error('Failed to upload image: ');
    }
  }

  public async uploadImage(formData: FormData): Promise<void> {
    try {
      await this.http.post<any>(`${this.constants.API_ENDPOINT}/upload/img`, formData).toPromise();
    } catch (error) {
      throw new Error('Failed to upload image: ');
    }
  }

  public async get5img(id: any) {
    const url =`${this.constants.API_ENDPOINT}/img${id}`;
    const response = await lastValueFrom(this.http.get(url));
    return response as CatModel[];
  }

  public async get1cat(id: any) {
    const url =`${this.constants.API_ENDPOINT}/1cat/${id}`;
    const response = await lastValueFrom(this.http.get(url));
    return response as CatModel[];
  }
  
  public async signUp(data: any): Promise<any> {
    const url = this.constants.API_ENDPOINT + '/register';
    const response = await lastValueFrom(this.http.post(url, data, { headers: this.headers }));
    return response;
  }

  public async putimgUser(id: number, formData: FormData): Promise<void> {
    try {
      await this.http.put<any>(`${this.constants.API_ENDPOINT}/upload/imgUser`, formData).toPromise();

    } catch (error) {
      throw new Error('Failed to upload image: ');
    }
  }
 
  public async  putDataUser(id: number, formData: FormData): Promise<void> {
    try {
      await this.http.put<any>(`${this.constants.API_ENDPOINT}/upload/imgUserData`, formData).toPromise();

    } catch (error) {
      throw new Error('Failed to upload image: ');
    }
  }
}
