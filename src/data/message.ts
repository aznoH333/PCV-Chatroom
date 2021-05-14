export class Message {


  constructor(private content: string, private sender: string){}

  getContent(){
    return this.content;
  }

  getSender(){
    return this.sender;
  }

  editMessage(editedM : string){
    this.content = editedM;
  }
}
