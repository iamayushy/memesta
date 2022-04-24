import nav from '../Navbar/nav.module.css'
import  home from '../../assets/home.svg'
import  add from '../../assets/add.svg'
import  navigation from '../../assets/navigation.svg'
import  sign from '../../assets/user.svg'
const Navbar = () => {
    return(
        <div className={nav.nav}>
            <section className={nav.links}>
                <section>
                    <span>Memester</span>
                </section>
                <section className={nav.gate}>
                    <section className={nav.go}>
                        <a href="#"><img src={home} alt="home" /></a>
                    </section>
                    <section className={nav.go}>
                        <a href="#"><img src={navigation} alt="navigate" /></a>
                    </section>
                    <section className={nav.go}>
                        <a href="#"><img src={add} alt="add" /></a>
                    </section>
                    <section className={nav.go}>
                        <a href="#"><img src={sign} alt="" /></a>
                    </section>
                </section>
            </section>
        </div>
    )
}
export {Navbar}