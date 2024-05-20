
const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd4c5eb12d4msh8c19ec4f710b798p1764b5jsndfc8eedd666f',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

const fetchMusicData = async(artist) =>{
    try {
        const response = await fetch(url + artist, options);
        const data = await response.json();
        const trackUrl = data.data[0].preview;
        const trackTitle = data.data[0].title;
        console.log(trackUrl);
        return ({trackTitle, trackUrl}); //NOTE: If we are returning data in JSON format in the route handler (res.json()), we can put the data in a jovascript object inside the function that does the fetching from the API - The variable holding the data becomes the property key and the value is the fetched value
    } catch (error) {
        console.error(error);
    }
};


// fetchMusicData("becky g");

module.exports = fetchMusicData;
