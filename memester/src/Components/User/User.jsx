import user from '../User/user.module.css'
import dubai from '../../assets/dub.jpg'
import { Post } from './Post'
const User = () => {
    return(
        <div>
            <section className={user.cont}>
            <section className={user.avatar}>
                <img  src='https://i.pravatar.cc/150?img=3' alt="user" />
                <br />
                <span className={user.bio}>
                    "Main Zhukega Nhi Saala"
                </span>
            </section>
            <section className={user.done}>
                <section className={user.work}>
                    <span>200</span>
                    <span>Followers</span>
                </section>
                <section className={user.work}>
                    <span>200</span>
                    <span>Likes</span>
                </section>
                <section className={user.work}>
                    <span>200</span>
                    <span>Posts</span>
                </section>
            </section>
            <section className={user.sand}>
                <span className={user.ref}>
                    POSTS
                </span>
                <span className={user.ref}>
                    TRENDING
                </span>
            </section>
            <section className={user.post}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </section>
            </section>
        </div>
    )
}

export {User}