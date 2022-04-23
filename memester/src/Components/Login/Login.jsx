import log from '../Login/log.module.css'
const Login = () => {
 
    return(
        <div className={log.div}>
           
          <form className={log.form}>
              <input placeholder='Email' className={log.inp} type="text" />
              <input placeholder='Password' className={log.inp} type="text" />
              <input className={log.btn} type="submit" value="LET'S GO"/>
          </form>
        </div>
    )
}
export {Login}