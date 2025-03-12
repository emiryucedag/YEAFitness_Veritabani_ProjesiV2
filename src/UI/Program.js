import React, { useState } from 'react'


const Program = () => {
    const exercises=[{name:'Mekik',count:30},{name:'Şınav',count:30}]

    return(
        <div>
            <div className='blur-background-wrapper'></div>
            <div className="exercise-table-container">
                <table className="exercise-table">
                    <thead>
                    <tr>
                        <th>Egzersiz</th>
                        <th>Tekrar</th>
                    </tr>
                    </thead>
                    <tbody>
                    {exercises.map((exercise, index) => (
                        <tr key={index}>
                            <td>{exercise.name}</td>
                            <td>{exercise.count}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Program;