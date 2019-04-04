import React from 'react'

const Persons = (props) => {
  return (
    <div>
      <table className="table table-striped"> 
          
          <tbody>
          <tr onClick={props.click}>
              <td> {props.name}</td>
              <td>{props.age}</td>
              
          </tr>
          </tbody>
        
      </table>
    </div>
  )
}
export default Persons
