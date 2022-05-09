import React from 'react'
import "..Registration/Registration.css"


const Login = () => {
  return (
   
    
      <section className='register'>
        <h1 className='fresher-title'># Freshers 2022</h1>
        <div className='text-center form-container'>
          <div id='pic-container' className='item1'><div className='pic'></div></div>

            <div className='sigup-form item2'>
            
              <form className='register-form' id='register-form'>
                <h2 className='form-head font-bold text-3xl my-8'>Login here </h2>

                 <div className='form-group'>
                   <label htmlFor='email' >
                   <i className="zmdi zmdi-email"></i>
                   </label>
                   <input type='text' name='email' id='email' autoComplete='off' placeholder='Your Email'></input>
                 </div>

                 <div className='form-group'>
                   <label htmlFor='Rollnumber' >
                   <i className="zmdi zmdi-slideshow"></i>
                   </label>
                   <input type='text' name='Rollnumber' id='Rollnumber' autoComplete='off' placeholder='Your Roll number'></input>
                 </div>

                 <div className='form-group'>
                   <label htmlFor='password' >
                   <i className="zmdi zmdi-lock"></i>
                   </label>
                   <input type='password' name='password' id='password' autoComplete='off' placeholder='Your password'></input>
                 </div>

                 
                   <button className='form-submit' type='submit' id='submit-button' >Login</button>

                   <p className='login-line'>hadn't registered yet ? <a href="/registration">register</a>  </p>
              </form> 
            </div>

          
        </div>

      </section>
    
   

  );
}


export default Login