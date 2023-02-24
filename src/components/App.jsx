import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  addContact = (contact) => {
    const names = this.state.contacts.map(contact => contact.name.toLowerCase())
    if (names.includes(contact.name.toLowerCase())) {
      return alert(`${contact.name} is already in contacts`)
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  }
  
  onSearch = (inputData) => {
    this.setState({filter: inputData})
  }

  handleFilter = (inputData) => {
    const searchedName = inputData.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchedName)
    );
  }

  deleteContact = (contactId) => {
    this.setState(prevState => {
     return { contacts: prevState.contacts.filter(contact => contact.id !== contactId)} 
    })
  }

  render() {
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact}>
        </ContactForm>

        <h2>Contacts</h2>
        <Filter onSearch={this.onSearch}></Filter>
        <ContactList filteredContacts={this.handleFilter(this.state.filter)} onDelete={this.deleteContact}></ContactList>
        
        <GlobalStyle></GlobalStyle>
      </Layout>
    );
  }
}
