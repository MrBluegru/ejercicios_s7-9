import React, { useRef } from 'react';
import { Contact } from '../../../models/contact.class';
import { STATUS } from '../../../models/status.enum';
import "../../styles/contacForm.css"


const ContactForm = ({ addConta }) => {

    const nameRef = useRef("")
    const surnameRef = useRef("")
    const statusRef = useRef(STATUS.DISCONNECTED)

    function addContact(e) {
        e.preventDefault();
        const newcont = new Contact(
            nameRef.current.value,
            surnameRef.current.value,
            statusRef.current.value,
        );
        addConta(newcont);
    }

    return (
        <form className='formContac' onSubmit={(e) => addContact(e)}>
            <input
                ref={nameRef}
                placeholder='Name'
                type="text"
            />
            <input
                ref={surnameRef}
                placeholder='Surname'
                type="text"
            />
            <select 
                ref={statusRef}
                defaultValue={STATUS.DISCONNECTED}
            >
            <option value={STATUS.DISCONNECTED}>Disconnected</option>
            <option value={STATUS.CONNECTED}>Connected</option>
            </select>

            <button>Create</button>
            
        </form>
    );
}

export default ContactForm;
