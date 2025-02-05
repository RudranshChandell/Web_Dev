function handleEvent() {
    const loading = document.getElementById("loading");
    const loaderbutton = document.getElementById('loaderbutton');
    const speed_info = document.getElementsByClassName('speed_info')[0];
    loading.classList.remove('hidden');
    loaderbutton.classList.add('hidden');
    speed();
    setTimeout(function(){
        loading.classList.add('hidden');
        speed_info.classList.remove('hidden');
    }, 2500);
}

document.getElementById('loaderbutton').addEventListener('click', handleEvent);
document.getElementById('loaderbutton').addEventListener('touchstart', handleEvent);

function speed() {
    let userImageLink =
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200714180638/CIP_Launch-banner.png";
    let time_start, end_time;

    // The size in bytes
    let downloadSize = 5616998;
    let downloadImgSrc = new Image();

    downloadImgSrc.onload = function () {
        end_time = new Date().getTime();
        displaySpeed();
    };
    time_start = new Date().getTime();
    downloadImgSrc.src = userImageLink;

    function displaySpeed() {
        let timeDuration = (end_time - time_start) / 1000; // Convert milliseconds to seconds
        let loadedBits = downloadSize * 8; // Convert bytes to bits

        let bps = (loadedBits / timeDuration).toFixed(2); // Bits per second
        let speedInMbps = (bps / (1024 * 1024)).toFixed(2); // Convert to Megabits per second

        document.getElementById('download-value').textContent = speedInMbps;
        document.getElementById('upload-value').textContent = (speedInMbps / 2).toFixed(2); // Assuming upload speed is half of download speed
    }
}
