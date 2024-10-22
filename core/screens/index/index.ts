import { Configs } from "../../configs"

export const homeScreenContent = async () => {
  return ` <div class="flex h-full">
        <!-- Sidebar -->
        <div class="sidebar bg-gray-800 text-white h-screen fixed left-0 overflow-y-auto">
            <div class="p-4">
                <select id="playlist-dropdown" class="w-full bg-gray-700 text-white p-2 rounded">
                    <option value="">Select Playlist</option>
                    <!-- Playlist options will be populated by JavaScript -->
                </select>
            </div>
            <div id="video-list" class="p-4 space-y-4">
                <!-- Video cards will be populated by JavaScript -->
            </div>
        </div>

        <!-- Main Content -->
        <div class="main-content p-8 w-full h-full">
            <div class="mb-8 space-x-4">
                <button id="start-live" class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Start Live Video</button>
                <button id="upload-video" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Upload Video</button>
            </div>
            <div id="video-player" class="aspect-video bg-gray-200 flex items-center justify-center text-2xl font-bold w-[80%]">
                Select a video to play
            </div>
        </div>
    </div>
    
    <script src="/javascripts/index.js"></script>
    `;
};
