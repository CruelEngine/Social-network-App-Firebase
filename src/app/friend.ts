export class Friend {
  name: string;
  mobile: string;
  email: string;
  uid: string;
  time: string;
  image: string;

  constructor(
    name: string,
    mobile: string,
    email: string,
    uid: string,
    time: string,
    image: string
  ) {
    this.name = name;
    this.mobile = mobile;
    this.email = email;
    this.uid = uid;
    this.time = time;
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

  getImage() {
    return this.image;
  }

  getTime() {
    return this.time;
  }
}
