// Mock data
const playlists = [
    { id: 1, name: "Favorites" },
    { id: 2, name: "Watch Later" },
    { id: 3, name: "Coding Tutorials" }
];

const videos = [
    { id: 1, title: "Introduction to HTML", thumbnail: "https://picsum.photos/200/112?random=1", duration: "10:30", views: "1.2K", playlistId: 3 },
    { id: 2, title: "CSS Flexbox Tutorial", thumbnail: "https://picsum.photos/200/112?random=2", duration: "15:45", views: "3.4K", playlistId: 3 },
    { id: 3, title: "JavaScript Basics", thumbnail: "https://picsum.photos/200/112?random=3", duration: "20:15", views: "5.6K", playlistId: 3 },
    { id: 4, title: "Funny Cat Video", thumbnail: "https://picsum.photos/200/112?random=4", duration: "3:45", views: "100K", playlistId: 1 },
    { id: 5, title: "Amazing Nature Documentary", thumbnail: "https://picsum.photos/200/112?random=5", duration: "45:00", views: "50K", playlistId: 2 }
];

// DOM elements
const playlistDropdown = document.getElementById('playlist-dropdown');
const videoList = document.getElementById('video-list');
const videoPlayer = document.getElementById('video-player');
const startLiveBtn = document.getElementById('start-live');
const uploadVideoBtn = document.getElementById('upload-video');

// Populate playlist dropdown
function populatePlaylistDropdown() {
    playlists.forEach(playlist => {
        const option = document.createElement('option');
        option.value = playlist.id;
        option.textContent = playlist.name;
        playlistDropdown.appendChild(option);
    });
}

// Display videos for selected playlist
function displayVideos(playlistId) {
    videoList.innerHTML = '';
    const filteredVideos = videos.filter(video => video.playlistId === parseInt(playlistId));
    filteredVideos.forEach(video => {
        const videoElement = ``
        const videoCard = document.createElement('div');
        videoCard.className = 'bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-600 cursor-pointer';
        videoCard.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}" class="w-full h-[80%] object-cover mb-2 rounded">
            <h3 class="font-semibold mb-1">${video.title}</h3>
            <p class="text-sm text-gray-400">${video.duration} | ${video.views} views</p>
        `;


        videoCard.addEventListener('click', () => playVideo(video));
        videoList.appendChild(videoCard);
    });
}

// Play selected video
function playVideo(video) {
    videoPlayer.innerHTML = `
        <div class=" text-white p-4 rounded w-[80%]">
            <h2 class="text-xl font-bold mb-2">${video.title}</h2>
            <img src="${video.thumbnail}" alt="${video.title}" class="w-full h-auto mb-2">
            <p>Duration: ${video.duration} | Views: ${video.views}</p>
        </div>
    `;
}

// Mock API calls
function mockApiCall(action) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Mocking API call for: ${action}`);
            resolve({ success: true, message: `${action} completed successfully` });
        }, 1000);
    });
}

// Event listeners
playlistDropdown.addEventListener('change', (e) => displayVideos(e.target.value));

startLiveBtn.addEventListener('click', async () => {
    startLiveBtn.disabled = true;
    startLiveBtn.textContent = 'Starting...';
    try {
        const result = await mockApiCall('Start Live Video');
        alert(result.message);
    } catch (error) {
        alert('Error starting live video');
    } finally {
        startLiveBtn.disabled = false;
        startLiveBtn.textContent = 'Start Live Video';
    }
});

uploadVideoBtn.addEventListener('click', async () => {
    uploadVideoBtn.disabled = true;
    uploadVideoBtn.textContent = 'Uploading...';
    try {
        const result = await mockApiCall('Upload Video');
        alert(result.message);
    } catch (error) {
        alert('Error uploading video');
    } finally {
        uploadVideoBtn.disabled = false;
        uploadVideoBtn.textContent = 'Upload Video';
    }
});

// Initialize the app
populatePlaylistDropdown();