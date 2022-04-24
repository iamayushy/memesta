import log from '../Login/log.module.css'
import { auth } from '../../../firebase.config'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { useState } from 'react'
const Login = () => {
    const [userDetail, setUserDetail] = useState({
        email:'',
        password:''
    })
    function handleChange(event){
        const {name, value} = event.target;
        setUserDetail({
            ...userDetail,
            [name]:value
        })
    }
    let man =''
   function handleSubmit(event){
        event.preventDefault();
        const {email, password} = userDetail
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const muser = userCredential.user
            alert("New User ",muser)
            man = muser
        })
        .catch((error) => {
            signInWithEmailAndPassword(auth, email, password)
            .then((userCred) => {
                const luser = userCred.user
                alert('Welcome back')
                
            })
        })
    } 
    console.log(man);
    return(
        <div className={log.div} onSubmit={handleSubmit}>
           
          <form className={log.form}>
              <input onChange={handleChange} value={userDetail.email} placeholder='Email' className={log.inp} type="text" name='email'/>
              <input onChange={handleChange} value={userDetail.password} placeholder='Password' className={log.inp} type="text" name='password'/>
              <input className={log.btn} type="submit" value="LET'S GO"/>
          </form>
        </div>
    )
}
export {Login}