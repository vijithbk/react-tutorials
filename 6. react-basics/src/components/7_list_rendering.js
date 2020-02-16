import React from 'react'
import Person from './7_person'

function ListRendering() {
    const persons = [
        {
            id: 1,
            name: 'vijith',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'sam',
            age: 29,
            skill: 'Java'
        },
        {
            id: 3,
            name: 'Rho',
            age: 25,
            skill: 'Python'
        }
    ]

    const personsList = persons.map(person => <Person key={person.id} person={person} />)
    return <div>{personsList}</div>
}

export default ListRendering
