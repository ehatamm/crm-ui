interface Contact {
  description: string;
  done: boolean;
}

export class App {
  heading = "Contacts";
  contacts: Contact[] = [];
  contactDescription = '';

  addContact() {
    if (this.contactDescription) {
      this.contacts.push({
        description: this.contactDescription,
        done: false
      });
      this.contactDescription = '';
    }
  }

  removeContact(todo) {
    let index = this.contacts.indexOf(todo);
    if (index !== -1) {
      this.contacts.splice(index, 1);
    }
  }
}

