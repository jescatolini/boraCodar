const apiUrl = 'https://api.github.com';


export default function fetchGitHubData(username){
    return fetch(`${apiUrl}/users/${username}`)
    .then(response =>  
        response.json())
    .then(data => {
      const name = data.name;
      const avatarUrl = data.avatar_url;
      const message = data.message;
      return { name, avatarUrl, message}
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
}

