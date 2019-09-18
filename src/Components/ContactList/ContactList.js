import React from 'react'

import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ ContactList }) => {
 
    const newItem = ContactList.map((item) =>{
      return <ContactListItem name={item.name} desc={item.desc} avatar={item.avatar}  gender={item.gender} />;
    })
  
    return (
      <div className="col-md-10 offset-md-1 row-block">
        <ul id="sortable">
          {newItem}
        </ul>
      </div>
    );
  };

export default ContactList
        
  
