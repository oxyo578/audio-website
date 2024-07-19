// Function to play audio
function playAudio() {
    var audio = document.getElementById('myAudio');
    audio.play();
}

// Function to check API and trigger audio playback
async function checkForAudioTrigger() {
    try {
        // Replace with your API endpoint
        const response = await fetch('https://your-api-endpoint.com/check-audio');
        
        if (response.ok) {
            const data = await response.json();
            if (data.triggerAudio) {
                playAudio();
            }
        } else {
            console.error('API response was not OK');
        }
    } catch (error) {
        console.error('Error fetching data from API:', error);
    }
}
