import React from 'react';


const Header = ({name}) => {
    return <h2>{name}</h2>;
}

const Part = ({part}) => <p>{part.name} {part.exercises}</p>;


const Content = ({parts}) =>{
    const total = parts.reduce((sum, currentPart) => sum + currentPart.exercises, 0);
    return (
        <div>
            {parts.map(part => <Part part={part} key={part.id} />)}
            <p><strong>total of {total} exercises</strong></p>
        </div>
    );}


const Course = ({course}) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
        </div>
    );
};

export default Course;