var Message = (function () {
    function Message(text) {
        this.text = text;
    }
    return Message;
}());
var MessageService = (function () {
    function MessageService() {
        this.dummyList = [new Message("Hi!"), new Message("Hello!")];
    }
    MessageService.prototype.getList = function (callback) {
        callback(this.dummyList);
    };
    return MessageService;
}());
var MessageController = (function () {
    function MessageController() {
        this.messageService = new MessageService();
    }
    MessageController.prototype.render = function () {
        var _this = this;
        this.messageService.getList(function (messageList) {
            messageList.forEach(function (message) {
                _this.renderMessage(message);
            });
        });
    };
    MessageController.prototype.renderMessage = function (message) {
        var pre = document.createElement("pre");
        pre.innerText = message.text;
        document.querySelector("body").appendChild(pre);
    };
    return MessageController;
}());
new MessageController().render();
