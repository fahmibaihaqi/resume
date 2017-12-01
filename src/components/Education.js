import React from 'react';

const Education = (props) => {
  const myEducation = (
    <div>
      {props.education.map((edu) =>
        <div className='item' key={edu.degree}>
          <h3>{edu.degree} @ {edu.institution} </h3>
          <span>{edu.endDate}</span>
          <p>{edu.description}</p>
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-graduation-cap'></i>
      <h2>EDUCATION</h2>
      {myEducation}
    </div>
  )
};

export default Education;