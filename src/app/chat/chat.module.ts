import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat/chat.component';
import { ChatMessageListComponent } from './chat-message-list/chat-message-list.component';
import { ChatMessageFormComponent } from './chat-message-form/chat-message-form.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule
  ],
  declarations: [ChatComponent, ChatMessageListComponent, ChatMessageFormComponent, ChatMessageComponent]
})
export class ChatModule { }
