const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey ='XXcqunca3hrdV6pT_JxtifCKir9ucoOonPjRUwu3LFQ';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes){
    for(const key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}

// Create elemets for links and photos and add to DOM
function displayPhotos(){
    // Run function for each object in Photos Array
    photosArray.forEach((photo)  => {
        // Create <a> to link to Unspalsh
        const item = document.createElement('a');
        setAttributes(item,{
            href:photo.links.html,
            target:'_blank',
        });
        // Create <img> for photo
        const img = document.createElement('img');
        setAttributes(img,{
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        //Put <img> inside <a> , then put both inside imageContainer element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}


// Get photos from unsplash API
async function getPhotos(){
    try{
        const response  = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    }catch(error){
        // Catch error here
    }
}

// On load
getPhotos();