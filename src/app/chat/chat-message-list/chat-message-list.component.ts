import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ElementRef,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-chat-message-list",
  templateUrl: "./chat-message-list.component.html",
  styleUrls: ["./chat-message-list.component.scss"]
})
export class ChatMessageListComponent implements OnInit {
  @ViewChild("scrollContainer") private scrollContainer: ElementRef;
  constructor(private _cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewChecked() {
    this.scrollToBottom();
    this._cdr.detectChanges();
  }

  scrollToBottom() {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.log("Error Scrolling");
    }
  }
}
