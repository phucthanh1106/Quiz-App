function MusicPlayer() {
  return (
    <iframe
      style={{ 
        position: "fixed", // positions it relative to the viewport
        top: "16px",       // distance from top
        right: "16px",     // distance from right
        border: "none",
      }}
      src="https://open.spotify.com/embed/track/6hGKzyc24gqnDBd5hiZZM5?utm_source=generator"
      width="20%"
      height="80"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title="Music"
    ></iframe>
  );
}

export default MusicPlayer