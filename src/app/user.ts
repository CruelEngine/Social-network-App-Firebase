export class User {
    email : string ; 
    name : string ;
    mobile : string ;
    uid : string ;
    friendCount : string ; 
    image : string ;

    constructor(email , name , mobile , uid , friendCount , image){
        this.email = email ;
        this.name = name ;
        this.mobile = mobile;
        this.uid = uid;
        this.friendCount = friendCount;
        this.image = image;
    }
}
