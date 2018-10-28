import { Friend } from "./../../friend";
import { UserService } from "./../../user.service";
import { User } from "./../../user";
import { Component, OnInit } from "@angular/core";
import { FriendsService } from "../friends.service";

@Component({
  selector: "app-user-friends",
  templateUrl: "./user-friends.component.html",
  styleUrls: ["./user-friends.component.scss"]
})
export class UserFriendsComponent implements OnInit {
  user: User;
  pageSize: number = 3;
  friends: Array<Friend> = [];
  currentCount: number = 0;
  previousCount: number = 0;
  isLeftVisible: boolean = false;
  isRightVisible: boolean = true;
  totalCount: number;

  constructor(
    private _userService: UserService,
    private _friendService: FriendsService
  ) {}

  ngOnInit() {
    this.user = this._userService.savedUserPublisher().getValue();
    this.totalCount = this.user.getFriendsCount();
    this._friendService
      .getFirstPage(this.user.getUserId(), this.pageSize)
      .subscribe(friends => {
        this.friends = friends;
        this.currentCount = this.friends.length;
        this.setArrowVisiblity();
      });
  }

  next() {
    this._friendService
      .loadNextPage(
        this.user.getUserId(),
        this.friends[this.friends.length - 1].getUserId(),
        this.pageSize
      )
      .subscribe(friends => {
        this.friends = friends;
        this.previousCount = this.friends.length - 1;
        this.currentCount += this.previousCount;
        this.setArrowVisiblity();
      });
  }

  previous() {
    this._friendService
      .loadPreviousPage(
        this.user.getUserId(),
        this.friends[0].getUserId(),
        this.pageSize
      )
      .subscribe(friends => {
        this.friends = friends;
        this.currentCount -= this.previousCount;
        this.setArrowVisiblity();
      });
  }

  leftArrowVisible(): void {
    this.isLeftVisible = this.currentCount > this.pageSize;
  }

  rightArrowVisible(): void {
    this.isRightVisible = this.totalCount > this.currentCount;
  }

  setArrowVisiblity() {
    this.leftArrowVisible();
    this.rightArrowVisible();
  }

  onLeft() {
    this.previous();
  }

  onRight() {
    this.next();
  }
}
