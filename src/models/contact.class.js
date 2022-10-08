import { STATUS } from "./status.enum";

export class Contact {
  name = "";
  surname = "";
  status = STATUS.DISCONNECTED;

  constructor(name, surname, status) {
    this.name = name;
    this.surname = surname;
    this.status = status;
  }
}
