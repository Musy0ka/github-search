import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']    
})
export class ProfileComponent implements OnInit {

  profile: any;
  repos: any;
  username: string;

  //inject profileservice
  constructor(private profileService: ProfileService) { 
  }

  // Function for searching profile and updating
  findProfile(){
    this.profileService.updateProfile(this.username);
        // call function getprofileinfo and log profile
         this.profileService.getProfileInfo().subscribe(profile =>{
          this.profile = profile;
          console.log("profile")
        });
    
        //get repos info from github
        this.profileService.getProfileRepos().subscribe(repos => {
          console.log(repos);
          this.repos = repos;
        })
  }

  ngOnInit() {
  }
}
