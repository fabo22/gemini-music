const songList = document.querySelector('.song-list');

// Replace these with your actual songs and image URLs
const songs = [
  {
    title: "Upbeat Anthem",
    image: "path/to/image1.jpg",
    alt: "Upbeat Anthem album cover" // Add alt text for each song
  },
  {
    title: "Mellow Mood",
    image: "path/to/image2.jpg",
    alt: "Mellow Mood album cover" // Add alt text for each song
  },
  {
    title: "Energetic Groove",
    image: "path/to/image3.jpg",
    alt: "Energetic Groove album cover" // Add alt text for each song
  }
];

songs.forEach(song => {
  const listItem = document.createElement('li');
  const songImage = document.createElement('img');
  const songTitle = document.createElement('span');

  songImage.src = song.image;
  songImage.alt = song.alt; // Set the alt text from the song object
  songTitle.textContent = song.title;

  listItem.appendChild(songImage);
  listItem.appendChild(songTitle);

  songList.appendChild(listItem);
});
