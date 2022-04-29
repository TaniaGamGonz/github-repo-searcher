


export const getRepos = (name: string) => {
     name = name || 'TaniaGamGonz';
    return fetch(`https://api.github.com/users/${name}/repos`)
    .then((response)=> response.json())
    .then((response): any => {
     const cleanedResponse  =  response.map( (repo: any):any =>{
            const repoInfo = {
                id: repo.id,
                name : repo.name,
                description : repo.description,
                url : repo.url,
        
                
            }
            return repoInfo;
        })
        return cleanedResponse;
        //Datos a mostrar : name, description, url, owner.login, owner.url, 
      
    })
};