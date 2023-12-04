import styles from './video.module.css'

const VideoPlayer = () => {

    return (
      <div className={styles.videoContainer}>
        <iframe
        width="640"
        height="360"
        src="https://www.youtube.com/embed/awwExVIackQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      </div>
    );
  };
  
export default VideoPlayer;