// Person.js
import React from 'react';
import { useParams } from 'react-router-dom';
import people from './people.json';
import './Person.css';

const Person = () => {
    const { id } = useParams();
    const person = people.find((p) => p.id === parseInt(id));
    

  if (!person) {
    return <div>Person not found</div>;
  }

  return (
    <main className="Person">
      <h1>{person.name}</h1>
      <label>ID:</label>
      <div className="Person-id">{id}</div>
      <label>Address:</label>
      <div className="Person-address">{person.address}</div>
      <label>Department:</label>
      <div className="Person-department">{person.department}</div>
    </main>
  );
};

export default Person;