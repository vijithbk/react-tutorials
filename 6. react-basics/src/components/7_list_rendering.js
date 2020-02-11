import React from 'react'
import Person from './7_person'

function ListRendering() {
    const persons = [
        {
            name: 'vijith',
            age: 30,
            skill: 'React'
        },
        {
            name: 'sam',
            age: 29,
            skill: 'Java'
        },
        {
            name: 'Rho',
            age: 25,
            skill: 'Python'
        }
    ]

    const personsList = persons.map(person => <Person person={person} />)
    return <div>{personsList}</div>
}

export default ListRendering
