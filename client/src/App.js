import Form from './components/AllAuthors'
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllAuthors from './components/AllAuthors';
import CreateAuthor from './components/CreateAuthor';
import EditAuthor from './components/EditAuthor';
import axios from 'axios';


function App() {
  
  const [authors, setAuthors] = useState([])

  const removeAuthor = (authorIdFromBelow) => {
    axios.delete(`http://localhost:8000/api/author/${authorIdFromBelow}`)
      .then(res => {
        console.log(res)
        console.log(res.data)
        setAuthors(authors.filter(author => author._id !== authorIdFromBelow))
      })
      .catch(err => console.log(err))


  }
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element ={<AllAuthors authors={authors} setAuthors={setAuthors} removeAuthor={removeAuthor}/>} path='/'/>
          <Route element ={<EditAuthor/>} path='/author/edit/:id'/>
          <Route element ={<CreateAuthor authros={authors} setAuthors={setAuthors}/>} path='/new'/>
        </Routes>

      </div>
    
    </BrowserRouter>
  );
}

export default App;
