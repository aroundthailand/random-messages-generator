// This is a simple JavaScript code for generating random message each time script runs
class RandomMessageGenerator {
    constructor() {
        this.messages = [
            "You will be lucky today!",
            "Have a great day dude!",
            "The best time to start is NOW!",
            "The goal is unreachable until you set it.",
            "Don't give up! Keep doing it!",
            "You can!",
            "I love you!"
        ];
    }
    #randomValue() {
        return Math.floor(Math.random() * this.messages.length);
    }
    showMessage() {
        return this.messages[this.#randomValue()];
    }

}
let newMessage = new RandomMessageGenerator();
document.getElementById("my-message").innerHTML = newMessage.showMessage();
console.log(newMessage.showMessage());
