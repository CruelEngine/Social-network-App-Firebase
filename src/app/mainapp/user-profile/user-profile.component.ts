import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/user.service";
import { User } from "../../user";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"]
})
export class UserProfileComponent implements OnInit {
  user: User;
  userForm: FormGroup;
  profileImage: string =
    "https://material.angular.io/assets/img/examples/shiba2.jpg";

  constructor(private _userService: UserService, private _fb: FormBuilder) {
    this.user = this._userService.savedUserPublisher().getValue();

    // if(this.user == null){
    //   thi
    // }
  }

  ngOnInit() {
    if (this.user == null) {
      this.user = new User("", "", "", "", 0, "");
    }
    this.userForm = this._fb.group({
      name: [
        { value: this.user.name ? this.user.name : "", disabled: true },
        Validators.required
      ],
      email: [{ value: this.user.email, disabled: true }, Validators.required],
      mobile: [
        { value: this.user.mobile, disabled: true },
        Validators.required
      ],
      password: [{ value: "*******", disabled: true }, Validators.required]
    });
  }


  editProfilePicture(event){
    const selectedFiles : FileList = event.target.files;
  }
}
