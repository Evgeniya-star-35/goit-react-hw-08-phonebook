// import { Routes, Route, Link } from 'react-router-dom';
import Container from '../Container';
import Form from '../Form';
import Filter from '../Filter';
import ContactList from '../ContactsList';
import AppBar from '../AppBar';
import s from './App.module.css';

function App() {
  return (
    <Container>
      <AppBar />
      <h1 className={s.title}>Phonebook</h1>
      <Form />
      <Filter />
      <h2 className={s.contactTitle}>Contacts</h2>
      <ContactList />
    </Container>
    // <Routes>
    //   <Route path= "/" element={}/>
    //   </Routes>
  );
}

export default App;
