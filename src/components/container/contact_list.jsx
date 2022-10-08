import React, { useState } from "react";
import { Contact } from "../../models/contact.class";
import { STATUS } from "../../models/status.enum";
import ContactComponent from "../pure/contact";
import ContactForm from "../pure/form/contactForm";
import "../styles/contact_list.css";

const ContactList = () => {
  const defaultContact1 = new Contact("Mr. Blue", "Gru", STATUS.CONNECTED);
  const defaultContact2 = new Contact("Boris", "Gru", STATUS.DISCONNECTED);

  const [contacts, setContacts] = useState([defaultContact1, defaultContact2]);

  function deleteContact(contact) {
    const index = contacts.indexOf(contact);
    const tempContact = [...contacts];
    tempContact.splice(index, 1);
    setContacts(tempContact);
  }

  function changeStatusC(contact) {
    const index = contacts.indexOf(contact);
    const tempContact = [...contacts];

    if (contact.status === STATUS.CONNECTED) {
      tempContact[index].status = STATUS.DISCONNECTED;
      setContacts(tempContact);
    } else {
      tempContact[index].status = STATUS.CONNECTED;
      setContacts(tempContact);
    }
  }

  function addNewContact(contact) {
    const tempContact = [...contacts];
    tempContact.push(contact);
    setContacts(tempContact);
  }

  return (
    <div className="divCont">
      <div className="formNewContac">
        <ContactForm addConta={addNewContact} />
      </div>
      {contacts.length ? (
        <div className="contactList">
          <h1>List of Contacts</h1>
          <table>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((cont, index) => {
                return (
                  <ContactComponent
                    key={index}
                    contact={cont}
                    remove={deleteContact}
                    changeStatus={changeStatusC}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="noContac">
          There are no contacts, create one to be able to see it in the list
        </h2>
      )}
    </div>
  );
};

export default ContactList;
