import React from 'react'
import axios from 'axios'

const Home = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios.post('http://localhost:5656/authenticate',
      {username: value})
      .then(
        r => props.onAuth({ ...r.data, secret: value})
      )
      .catch(
        error => console.log("error", error)
      )
      props.onAuth({ username: value, secret: value });
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Welcome to our Messaging App project.  <br></br>
          By Сүхбат, Агваандорж, Буяка, Есүнгоо.👋</div>
  
          <div className="form-subtitle">Enter a username here:</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default Home;