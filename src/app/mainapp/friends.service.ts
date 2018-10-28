import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";
import { Friend } from "../friend";
import { ApiPath } from "./../api-path.enum";

@Injectable({
  providedIn: "root"
})
export class FriendsService {
  /**
   * Constructor
   * @param _angularFireDatabase firedb provides functionality related to authentication
   */
  constructor(private _angularFireDatabase: AngularFireDatabase) {}

  getFirstPage(uid: string, pageSize: number): Observable<Friend[]> {
    return this._angularFireDatabase
      .list<Friend>(
        `${ApiPath.USERS_CHILD}/${ApiPath.FRIENDS_CHILD}/${uid}`,
        ref => ref.limitToFirst(pageSize + 1)
      )
      .valueChanges();
  }

  loadNextPage(uid: string, friendKey: string, pageSize: number) {
    return this._angularFireDatabase
      .list<Friend>(
        `${ApiPath.USERS_DETAILS_CHILD}/${ApiPath.FRIENDS_CHILD}/${uid}`,
        ref =>
          ref
            .orderByKey()
            .startAt(friendKey)
            .limitToFirst(pageSize + 1)
      )
      .valueChanges();
  }

  loadPreviousPage(uid: string, friendKey: string, pageSize: number) {
    return this._angularFireDatabase
      .list<Friend>(
        `${ApiPath.USERS_DETAILS_CHILD}/${ApiPath.USERS_DETAILS_CHILD}/${uid}`,
        ref =>
          ref
            .orderByKey()
            .startAt(friendKey)
            .limitToFirst(pageSize + 1)
      )
      .valueChanges();
  }
}
