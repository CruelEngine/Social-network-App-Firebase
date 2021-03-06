export class User {
  email: string;
  name: string;
  mobile: string;
  uid: string;
  friendCount: number;
  image: string;

  constructor(
    email: string,
    name: string,
    mobile: string,
    uid: string,
    friendCount: number,
    image: string
  ) {
    this.email = email;
    this.name = name;
    this.mobile = mobile;
    this.uid = uid;
    this.friendCount = friendCount;
    this.image = image;
  }

  getUserId() {
    return this.uid;
  }

  getEmail() {
    return this.email;
  }

  getName() {
    return this.name;
  }

  getMobile() {
    return this.mobile;
  }

  getFriendsCount() {
    return this.friendCount;
  }

  getImage() {
    return this.image;
  }
}
