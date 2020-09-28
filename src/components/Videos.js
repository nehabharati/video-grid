import React, { useEffect, useRef } from 'react';
import shaka from 'shaka-player';

function Videos() {
    const videoComponent = useRef();
    const videoComponent2 = useRef();
    const videoComponent3 = useRef();
    const videoComponent4 = useRef();
    const videoComponent5 = useRef();
    const videoComponent6 = useRef();
    const videoComponent7 = useRef();
    const videoComponent8 = useRef();

    useEffect(() => {
        var manifestUri = 'https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8';
        var manifestUri2 = 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd'
        var manifestUri3 = 'https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8'
        var manifestUri4 = 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd'
        var manifestUri5 = 'https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8'
        var manifestUri6 = 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd'
        var manifestUri7 = 'https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8'
        var manifestUri8 = 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd'

        //Reference to our video component on DOM
        const video = videoComponent.current;
        const video2 = videoComponent2.current;
        const video3 = videoComponent3.current;
        const video4 = videoComponent4.current;
        const video5 = videoComponent5.current;
        const video6 = videoComponent6.current;
        const video7 = videoComponent7.current;
        const video8 = videoComponent8.current;

        //Initializing our shaka player
        var player = new shaka.Player(video);
        var player2 = new shaka.Player(video2);
        var player3 = new shaka.Player(video3);
        var player4 = new shaka.Player(video4);
        var player5 = new shaka.Player(video5);
        var player6 = new shaka.Player(video6);
        var player7 = new shaka.Player(video7);
        var player8 = new shaka.Player(video8);

        // Listen for error events.
        player.addEventListener('error', onErrorEvent);
        player2.addEventListener('error', onErrorEvent);
        player3.addEventListener('error', onErrorEvent);
        player4.addEventListener('error', onErrorEvent);
        player5.addEventListener('error', onErrorEvent);
        player6.addEventListener('error', onErrorEvent);
        player7.addEventListener('error', onErrorEvent);
        player8.addEventListener('error', onErrorEvent);

        player.load(manifestUri).then(function () {
            console.log('The video has now been loaded!');
        }).catch(onError);
        player2.load(manifestUri2).then(function () {
            console.log('The video has now been loaded!');
        }).catch(onError);
        player3.load(manifestUri3).then(function () {
            console.log('The video has now been loaded!');
        }).catch(onError);
        player4.load(manifestUri4).then(function () {
            console.log('The video has now been loaded!');
        }).catch(onError);
        player5.load(manifestUri5).then(function () {
            console.log('The video has now been loaded!');
        }).catch(onError);
        player6.load(manifestUri6).then(function () {
            console.log('The video has now been loaded!');
        }).catch(onError);
        player7.load(manifestUri7).then(function () {
            console.log('The video has now been loaded!');
        }).catch(onError);
        player8.load(manifestUri8).then(function () {
            console.log('The video has now been loaded!');
        }).catch(onError);
    }, [])

    function onErrorEvent(event) {
        onError(event.detail);
    }

    function onError(error) {
        console.error('Error code', error.code, 'object', error);
    }

    return (
        <div className="my-videos">
            <h1>Videos</h1>
            <div className="videos">
                <div className="video-card">
                    <video
                        width="640"
                        ref={videoComponent}
                        poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
                        controls
                    />
                    <div>
                        <p>Fantastic</p>
                        <p>Collection of films that amaze</p>
                    </div>
                </div>
                <div className="video-card">
                    <video
                        width="640"
                        ref={videoComponent2}
                        poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
                        controls
                    />
                    <div>
                        <p>Fantastic</p>
                        <p>Collection of films that amaze</p>
                    </div>
                </div>
                <div className="video-card">
                    <video
                        width="640"
                        ref={videoComponent3}
                        poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
                        controls
                    />
                    <div>
                        <p>Fantastic</p>
                        <p>Collection of films that amaze</p>
                    </div>
                </div>
                <div className="video-card">
                    <video
                        width="640"
                        ref={videoComponent4}
                        poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
                        controls
                    />
                    <div>
                        <p>Fantastic</p>
                        <p>Collection of films that amaze</p>
                    </div>
                </div>
                <div className="video-card">
                    <video
                        width="640"
                        ref={videoComponent5}
                        poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
                        controls
                    />
                    <div>
                        <p>Fantastic</p>
                        <p>Collection of films that amaze</p>
                    </div>
                </div>
                <div className="video-card">
                    <video
                        width="640"
                        ref={videoComponent6}
                        poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
                        controls
                    />
                    <div>
                        <p>Fantastic</p>
                        <p>Collection of films that amaze</p>
                    </div>
                </div>
                <div className="video-card">
                    <video
                        width="640"
                        ref={videoComponent7}
                        poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
                        controls
                    />
                    <div>
                        <p>Fantastic</p>
                        <p>Collection of films that amaze</p>
                    </div>
                </div>
                <div className="video-card">
                    <video
                        width="640"
                        ref={videoComponent8}
                        poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
                        controls
                    />
                    <div>
                        <p>Fantastic</p>
                        <p>Collection of films that amaze</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Videos;
