import nav from '../Navbar/nav.module.css'
import  home from '../../assets/home.svg'
import  add from '../../assets/add.svg'
import  navigation from '../../assets/navigation.svg'
import  sign from '../../assets/user.svg'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return(
        <div className={nav.nav}>
            <section className={nav.links}>
                <section>
                    <span>Memester</span>
                </section>
                <section className={nav.gate}>
                    <section className={nav.go}>
                        <Link to='/'><img src={home} alt="home" /></Link>
                    </section>
                    <section className={nav.go}>
                        <Link to="/explore"><img src={navigation} alt="navigate" /></Link>
                    </section>
                    <section className={nav.go}>
                        <Link to="/add"><img src={add} alt="add" /></Link>
                    </section>
                    <section className={nav.go}>
                        <Link to="/user"><img src={sign} alt="" /></Link>
                    </section>
                </section>
            </section>
        </div>
    )
}
export {Navbar}