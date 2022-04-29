import '../styles/components/UserDetail.css';
import User from '../interfaces/UserInterface';

type UserDetailProps = {
    user: User
}
const UserDetail = ({user}: UserDetailProps) => {
    const {name, img, email, bio, followers, location } = user;
    return (
     <article>
       <img src={img} alt={`${name}'s avatar`} />
       <h3>{name}</h3>
       <a href={`mailto:${email}`}>{email}</a>
       <span>{location}</span>
       <p>{bio}</p>
       <small>{followers}</small>
     </article>
    )
  }
export default UserDetail;