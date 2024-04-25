const songList = document.querySelector('.song-list');

// Replace these with your actual songs and image URLs
const songs = [
  {
    title: "Upbeat Anthem",
    image: "path/to/image1.jpg"
  },
  {
    title: "Mellow Mood",
    image: "path/to/image2.jpg"
  },
  {
    title: "Energetic Groove",
    image: "path/to/image3.jpg"
  }
];

songs.forEach(song => {
  const listItem = document.createElement('li');
  const songImage = document.createElement('img');
  const songTitle = document.createElement('span');

  songImage.src = song.image;
  songTitle.textContent = song.title;

  listItem.appendChild(songImage);
  listItem.appendChild(songTitle);

  songList.appendChild(listItem);
});