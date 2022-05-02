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
       <h3 className='user__name'>{name}</h3>
      {email ?  <a href={`mailto:${email}`}>{email}</a> : <p>The email of this user is not avaliable</p>}
       <span>{location}</span>
      { bio ?  <p>{bio}</p> : <p>This user hasn't a bio yet.</p> }
       <small>followers {followers}</small>
     </article>
    )
  }
export default UserDetail;