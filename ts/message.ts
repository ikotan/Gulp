class Message {
  text: string;

  constructor(text: string) {
    this.text = text;
  }
}

class MessageService {
  dummyList: Message[] = [new Message("Hi!"), new Message("Hello!")];

  getList(callback: (messageList: Message[]) => void): void {
    callback(this.dummyList);
  }
}

class MessageController {
  messageService = new MessageService();

  render(): void {
    this.messageService.getList(messageList => {
      messageList.forEach(message => {
        this.renderMessage(message);
      });
    });
  }

  renderMessage(message: Message): void {
    var pre = document.createElement("pre");
    pre.innerText = message.text;
    document.querySelector("body").appendChild(pre);
  }
}

new MessageController().render();
