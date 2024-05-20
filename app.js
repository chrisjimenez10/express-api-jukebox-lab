const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=lil%20nas%20x";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd4c5eb12d4msh8c19ec4f710b798p1764b5jsndfc8eedd666f',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

const fetchMusicData = async() =>{
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        const trackUrl = data.data[0].preview;
        // console.log(trackUrl);
        return trackUrl;
    } catch (error) {
        console.error(error);
    }
};

fetchMusicData();

module.exports = fetchMusicData;
