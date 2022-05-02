import Repo from '../interfaces/RepoInterface';
import '../styles/components/RepoList.css';
import RepoDetail from './RepoDetail';


type RepoListProps = {
 reposList : Repo[],
 userSearch?: string,
}


const RepoList = ({reposList, userSearch}: RepoListProps) => {
  const renderReposFilteredByName = (repoList: Repo[], repoName: string)=>{
    repoName = repoName.toLowerCase();
    return repoList
    .filter((repo : Repo) => repo.name.toLowerCase().includes(repoName))
    .map((repo: Repo)=>{
      return (
        <li key={repo.id}>
          <RepoDetail repo={repo}></RepoDetail>
        </li>
      )
    })   
  }

  /**
   * Render all repos
   * @param repoList List of github repos
   * @returns A li with a component that renders the repo
   */
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

       {userSearch ? renderReposFilteredByName(reposList, userSearch) : renderRepos(reposList) }
      </ul>
    </section>
  )
}



export default RepoList