
import Repo from "../interfaces/RepoInterface";

 /**
  * Calls to the api, has a header added 
  * @param name name of the repo to search
  * @returns an array of repos with the data cleaned
  */
export const getReposByUser = (userName: string) => {
    const bearer = `token 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`;
     userName = userName || 'TaniaGamGonz';
    return fetch(`https://api.github.com/users/${userName}/repos`,{

        headers: {
          'Authorization': bearer,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
    })
    .then((response)=> response.json())
    .then((response) => {
     const cleanedResponse =  response.map( (repo: any)=>{
         console.log(repo);
            const repoInfo: Repo = {
                id: repo.id,
                name : repo.name,
                description : repo.description,
                url : repo.html_url,
                homepage: repo.homepage
                
            }
            return repoInfo;
        })
        return cleanedResponse;
      
    })
};