
import Repo from "../interfaces/RepoInterface";

 /**
  * Calls to the api 
  * @param name name of the repo to search
  * @returns an array of repos with the data cleaned
  */
export const getRepos = (name: string) => {
     name = name || 'TaniaGamGonz';
    return fetch(`https://api.github.com/users/${name}/repos`)
    .then((response)=> response.json())
    .then((response) => {
     const cleanedResponse =  response.map( (repo: Repo)=>{
            const repoInfo: Repo = {
                id: repo.id,
                name : repo.name,
                description : repo.description,
                url : repo.url,
                
            }
            return repoInfo;
        })
        return cleanedResponse;
      
    })
};