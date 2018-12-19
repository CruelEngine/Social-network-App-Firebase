import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";
import { UserService } from "src/app/user.service";

@Component({
  selector: "app-chat-message",
  templateUrl: "./chat-message.component.html",
  styleUrls: ["./chat-message.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatMessageComponent implements OnInit {
  @Input() message: Message;
  uid: string;
  constructor(private _userService: UserService) {}

  ngOnInit() {
    this.uid = this._userService.savedUserPublisher().getValue().uid;
  }

  isReciever(message: Message) {
    return this.uid === message.receiverUid;
  }

  isSender(message: Message) {
    return this.uid === message.senderUid;
  }
}
