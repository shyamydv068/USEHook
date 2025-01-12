import React from 'react'
import ComputerS from './ComputerS';
import propTypes from 'prop-types';

const Student = ({name,age,college}) => {
 
  return (
    <div>
      <h1>Student {name} age is {age} college is {college} </h1>
      <ComputerS name={name } age={age} college={college} />
    </div>
  )
}
Student.propTypes = {
  name :propTypes.string,
  age :propTypes.number,
  college :propTypes.string

}

Student.defaultProps = {
  name :"Name",
  age:0,
  college:"College"
}

export default Student;
