import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const AllAuthors = (props) => {

    const {authors, setAuthors, removeAuthor} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => {
                console.log(res.body);
                setAuthors(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={'/new'}>Add an Author</Link>
            {
                authors.map((author, index) =>(
                    <div>
                        <p>{author.name}</p>
                        <button><Link to={`/author/edit/${author._id}`}>Edit</Link></button>
                        <button onClick={(e) => {removeAuthor(author._id)}}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default AllAuthors;
