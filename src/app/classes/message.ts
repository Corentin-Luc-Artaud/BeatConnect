class Message {
  message: string;
  time: number;
  who: string;


  constructor(message: string, time: number, who: string) {
    this.message = message;
    this.time = time;
    this.who = who;
  }
}
