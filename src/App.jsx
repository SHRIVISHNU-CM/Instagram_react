import "./App.css"
import { useState } from "react"

export function Instagram(){
  const [data,setData] = useState('Login')
  return(
    <div className="container-wrapper">
        <div className="container">
          <h1 className="insta-logo">Instagram</h1>
          {data === 'Login'? <>
          <div>
            <input type="text" placeholder="Mobile or Email" />
          </div>
          <div>
            <input type="password" placeholder="Password" />
          </div>

        </> :<>
            <div>
              <input type="text" placeholder="Mobile or Email" />
            </div>
            <div>
              <input type="text" placeholder="Fullname" />
            </div>
            <div>
              <input type="text" placeholder="Phone number or Email" />
            </div>
            <div>
              <input type="password" placeholder="Password" />
            </div>
        </> 
              
        }
         
          
          
        <button className='Signup' onClick={() => setData('Signup')}>{data === 'Login'? 'Login': 'SignUp'}</button>
        {data === 'Login' ? <div className="bar">


          <div>
            <h4>Don't have an account?</h4>
          </div>
          <div><a onClick={()=>setData('SignUp')} >SignUp</a></div>
        </div> : <div className="bar">


          <div>
            <h4>Have an account?</h4>
          </div>
            <div><a onClick={() => setData('Login')}>Log in</a></div>
        </div>}
          
          {/* <button className="Signup">Sign up</button> */}
        </div>
    </div>
  )
}