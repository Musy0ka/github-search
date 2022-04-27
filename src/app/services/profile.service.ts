import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  // get info from githubApi
  private username: string;
  private clientid = 'Iv1.abe0361e91011dc5';
  private clientsecret = '835c95b4b3be91ee6cec02d1537483ac59f72720';

  constructor(private http:HttpClient) { 
    // Check is service is running
    console.log("service is ready!");

    //Define user name
    this.username = 'Musy0ka';
  }

  //Function to get data from GithubApi
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/"+this.username+"?client_id="+ this.clientid+"&client_secret=" + this.clientsecret)
    .pipe(map((res:any) => res));
  }

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/"+this.username+"/repos?client_id="+ this.clientid+"&client_secret=" + this.clientsecret)
    .pipe(map((res:any) => res));
  }

  updateProfile(username:string){
    this.username = username;
  }

}
