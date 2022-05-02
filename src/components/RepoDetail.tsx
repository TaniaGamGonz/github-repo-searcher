
import Repo from '../interfaces/RepoInterface';
import '../styles/components/RepoDetail.css';

type RepoDetailProps = {
  repo : Repo,
}



const RepoDetail = ({repo}: RepoDetailProps) => {
  const {name, url, description, homepage} = repo
  return (
   <article className='repo-detail'>
      <a className='link' href={url}>{name}</a>
      <p>{description}</p>
     {homepage ? <a className='link--secondary' href={homepage} target="_blank" rel='noreferrer'>Homepage</a>: <p>This project doesn't has a homepage</p> } 
   </article>
  )
}

export default RepoDetail;