import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const CreateAuthor = (props) => {

    const navigate = useNavigate();
    const [newAuthor, setNewAuthor] = useState({
        name: '',
    })

    const [errors, setErrors] = useState()


    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }, [])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/author`, newAuthor) 
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate('/');

            })
            .catch(err => console.log(err))
    }

    const onChangeHandler = (e) => {
        const newStateObject = {...newAuthor};
        newStateObject[e.target.name] = e.target.value;
        setNewAuthor();

    }


    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <h2>Add a New Author</h2>
                <Link to={'/'}>Home</Link>
                <br></br>
                <div>
                    <label>Name:</label><br></br>
                    <input name='name' value={newAuthor.name} onChange={onChangeHandler}/>
                </div>
                <input type='submit'/><button><Link to={'/'}>Cancel</Link></button>
                
            </form>
        </div>
    )
}

export default CreateAuthor;