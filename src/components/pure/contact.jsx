import React from "react";
import { Contact } from "../../models/contact.class";
import PropTypes from "prop-types";
import "../styles/contact.css";

const ContactComponent = ({ contact, remove, changeStatus }) => {
  function contactStatus() {
    if (contact.status === "connected") {
      return (
        <i onClick={() => changeStatus(contact)} className="btnconnet">
          {contact.status}
        </i>
      );
    } else {
      return (
        <i onClick={() => changeStatus(contact)} className="btnDisconnet">
          {contact.status}
        </i>
      );
    }
  }
  return (
    <tr>
      <td>
        <p>{contact.name}</p>
      </td>
      <td>
        <p>{contact.surname}</p>
      </td>
      <th>
        <i>{contactStatus()}</i>
      </th>
      <th>
        <i className="btonDelete" onClick={() => remove(contact)}>
          Delete
        </i>
      </th>
    </tr>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
};

export default ContactComponent;
