import React from 'react'

const Login = () => {
  return (
    <div>
        <h1 className=''>Fill the Details</h1>
        <div>
          <form>
            Name: <input type="text" placeholder='Enter Name'/>
            <br />
            Email: <input type="email" placeholder='Enter Name'/>
            <br />
            Romm Number: <input type="text " />
            <br />
            Select Sharing 
            <label></label>
            <input type="radio" name="typeofsharing" value="1"/>
            <input type="radio" name="typeofsharing" value="2"/>
            <input type="radio" name="typeofsharing" value="3"/>
  
          </form>
        </div>
    </div>
  )
}

export default Login