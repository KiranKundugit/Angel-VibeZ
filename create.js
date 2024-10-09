document.getElementById('addSongBtn').addEventListener('click', function() {
    const songUrl = document.getElementById('songUrl').value;
    const message = document.getElementById('message');
    const songList = document.getElementById('songList');

    if (songUrl) {
        const listItem = document.createElement('li');

        // Create an audio element
        const audio = document.createElement('audio');
        audio.src = songUrl;
        audio.controls = true; // Show controls
        audio.style.display = 'block'; // Display audio controls

        // Append the audio element to the list item
        listItem.textContent = songUrl;
        listItem.appendChild(audio);

        // Append the song URL to the list
        songList.appendChild(listItem);

        // Clear the input field
        document.getElementById('songUrl').value = '';

        // Save to localStorage
        saveToLocalStorage(songUrl);

        message.textContent = "Song added successfully!";
    } else {
        message.textContent = "Please enter a valid song URL.";
    }

    // Clear the message after 3 seconds
    setTimeout(() => {
        message.textContent = '';
    }, 3000);
});

// Function to save the song to localStorage
function saveToLocalStorage(songUrl) {
    let songs = JSON.parse(localStorage.getItem('songs')) || [];
    songs.push(songUrl);
    localStorage.setItem('songs', JSON.stringify(songs));
}
