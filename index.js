const getWomanUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=woman"
const apiLink = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"


// Get woman art IDs
fetch(`${getWomanUrl}`)  
  .then(response => response.json())
  .then(data => {
    // console.log('1:', data.objectIDs);
    return data;
  })
  .then(data => {
    let objectIDs = data.objectIDs; // Get ObjectIds
    let objectID = objectIDs[Math.floor(Math.random() * objectIDs.length)]; // Select a random Id
    console.log(objectID);

    fetch(`${apiLink}` + objectID) // Fetch url for the random selected artwork
      .then(resp => resp.json())
      .then(data => {
        console.log(data);

        // Output
        let title = document.querySelector(".title");
        title.innerHTML = `${data.title} `;

        let department = document.querySelector('.department');
        department.innerHTML = `Department: ${data.department} `

        if (`${data.culture}` === '') {
        } else {
          let culture = document.querySelector('.culture');
          culture.innerHTML = `Culture: ${data.culture} `
        }

        if (`${data.period}` === '') {
        } else {
          let period = document.querySelector('.period');
          period.innerHTML = `Period: ${data.period}`
        }

        let objectEndDate = document.querySelector('.objectEndDate');
        objectEndDate.innerHTML = `Date: ${data.objectEndDate} `

        let primaryImage = document.querySelector(".photo");
        primaryImage.innerHTML = `<img src="${data.primaryImage}" class="img-fluid" > `;

        let artistDisplayName = document.querySelector('.artistDisplayName');
        artistDisplayName.innerHTML = `${data.artistDisplayName} `

        let artistNationality = document.querySelector('.artistNationality');
        artistNationality.innerHTML = `${data.artistNationality} `

        let artistDisplayBio = document.querySelector('.artistDisplayBio');
        artistDisplayBio.innerHTML = `${data.artistDisplayBio} `

    })
    let button = document.getElementById('nextButton')
    button.addEventListener('click', () => {
        window.setTimeout(() => {
            window.location.reload(true)
        }, 200)
    })
      
  })