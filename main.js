const LinksSocialMedia = {
  // objeto
  github: 'eoandrw',
  youtube: 'watch?v=dQw4w9WgXcQ',
  facebook: 'eoandrw',
  instagram: 'eoandrw',
  twitter: 'eoandrw'
}
function changeSocialMediaLinks() {
  // () = argumento (s)
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class') //variável de escopo

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}` //template string
  }
  // userName.textContent = 'Allan' // equivale a MESMA linha de baixo, porém a "id" acionada no html lá em cima torna esse processo mais simples
  // ou em extenso document.getElementById('userName').textContent = 'Andrew' //DOM
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url) // "fetch" busca o conteudo do link e o transforma em um "objetão{}"
    .then(response => response.json())
    .then(data => {
      // armazena a "response" acima em formato .json
      userName.textContent = data.name
      //userBio.textContent = data.bio
      userGithub.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })

  // "then" categoriza uma promisse que retorna o que vier do "fetch"
  // => arrow function (forma contraida de uma função/função anônima)
}

getGitHubProfileInfos()

// variáveis tipo let e const
// let, permite tornar variáveis mais "flexiveis", possibilitando alterar o conteúdo delas com o tempo
// const, em contrapartida, impede que possamos atribuir novos valores às variáveis;
