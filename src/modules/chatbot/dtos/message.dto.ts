import { StringField } from '../../../decorators';

export class MessageDto {
  @StringField()
  text!: string;

  @StringField()
  sender!: string;

  constructor(message: string, sender: string) {
    this.text = message;
    this.sender = sender;
  }

}
