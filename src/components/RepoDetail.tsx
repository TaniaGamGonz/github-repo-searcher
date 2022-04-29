
import Repo from '../interfaces/RepoInterface';
import '../styles/components/RepoDetail.css';

type RepoDetailProps = {
  repo: Repo
}

const RepoDetail = ({repo}: RepoDetailProps) => {
  return (
   <article>
      <h4>{repo.name}</h4>
   </article>
  )
}



export default RepoDetail;