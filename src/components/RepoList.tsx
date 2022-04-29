import Repo from '../interfaces/RepoInterface';
import '../styles/components/RepoList.css';
import RepoDetail from './RepoDetail';


type RepoListProps = {
 reposList : Repo[];
}


const RepoList = ({reposList}: RepoListProps) => {
  const renderRepos = (repoList: Repo[]) => {
   return repoList.map((repo: Repo)=>{
     return (
       <li key={repo.id}>
         <RepoDetail repo={repo}></RepoDetail>
       </li>
     )
   })

  }
  return (
    <section>
      <ul>
       {renderRepos(reposList)}
      </ul>
    </section>
  )
}



export default RepoList