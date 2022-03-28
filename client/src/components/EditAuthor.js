import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';


const CreateAuthor = (props) => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setName(res.data.name);
            })
            .catch(err => console.log(err))
    }, [id])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const putUpdateData ={
            name,
        };
        axios.put(`http://localhost:8000/api/author/${id}`, putUpdateData) 
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate('/')

            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <h2>Edit Author</h2>
                <Link to={'/'}>Home</Link>
                <br></br>
                <div>
                    <label>Name:</label><br></br>                  
                    <input value={name} type='text' onChange={(e) => setName(e.target.value)}/>
                </div>
                <input type='submit'/>
                <button><Link to={'/'}>Cancel</Link></button>
            </form>
        </div>
    )
}

export default CreateAuthor;