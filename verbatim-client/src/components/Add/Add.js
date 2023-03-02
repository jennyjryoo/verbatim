import React from 'react';

const Login = () => {

  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
  }
  
  return(
    <div className='addRequest-wrapper'>
    <h1>Create a Request</h1>
   
    <form onSubmit={handleSubmit}>
      
      <div>
      <label for="date">Date Needed</label><br></br>
        <input type="date" id="date" name="date"/>
      </div>

      <div>
      <label for="location">Location</label><br></br>
        <input type="text" list="location"/>
        <datalist id="location">
          <option>Remote only</option>
          <option>Enter Zip Code</option>
        </datalist>
      </div>

      <div>
      <label for="contact">Contact Email</label><br></br>
        <input type="email" id="email" name="email"/>
      </div>

      <div>
      <label for="language">Translation Needed</label><br></br>
        <select id="language" name="language">
          <option value="korean">Korean / English</option>
        </select>
      </div>
      
      <div>
      <label for="type">Translation Type</label><br></br>
        <select id="type" name="type">
          <option value="written">Written</option>
          <option value="verbal">Verbal</option>
        </select>
      </div>
        
    <div>
      <button type="submit">Submit</button>
    </div>

    </form>
    </div>
  )
  };
  
  export default Login;