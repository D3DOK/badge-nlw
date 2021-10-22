
const linksSocialMedia = {
  github: 'D3DOK',
  youtube: 'channel/UCrVFI_usiQXu4wfXa4ow5Lw',
  facebook: 'daniel.rodrigues.7121',
  instagram: 'dedok1993',
  twitter: 'D3DOK1993'
}

function changeSocialMediaLinks() {
  for(let li of socialLinks.children){
    const social = li.getAttribute('class')
   
    li.children[0].href= `https://${social}.com/${linksSocialMedia[social]}`    
        
    }

  } 
   
  changeSocialMediaLinks()

  function getGithubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
         
  }

  getGithubProfileInfos()


