import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "friendsdate"
})
export class FriendsdatePipe implements PipeTransform {
  transform(dateInMilliSeconds: string): any {
    if (dateInMilliSeconds === "0" || dateInMilliSeconds === "-1") {
      return "Invalid Date";
    }

    let date = new Date(dateInMilliSeconds);

    let day = date.getUTCDate();
    let month = date.getUTCMonth();
    let year = date.getUTCFullYear();
    return day + "/" + month + "/" + year;
  }
}
