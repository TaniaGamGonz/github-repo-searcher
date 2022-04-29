
import Repo from '../interfaces/RepoInterface';
import '../styles/components/RepoDetail.css';

type RepoDetailProps = {
  repo : Repo,
}



const RepoDetail = ({repo}: RepoDetailProps) => {
  const {name, url, description} = repo
  return (
   <article>
      <a href={url}>{name}</a>
      <p>{description}</p>
   </article>
  )
}



export default RepoDetail;