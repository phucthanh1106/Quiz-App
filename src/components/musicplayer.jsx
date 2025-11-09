function MusicPlayer() {
  return (
    <iframe
      style={{ 
        borderRadius: "12px",
        position: "fixed", // positions it relative to the viewport
        top: "16px",       // distance from top
        right: "16px",     // distance from right
      }}
      src="https://open.spotify.com/embed/track/4i7C2rXy8zrKwPmUvpaSfb?utm_source=generator"
      width="20%"
      height="80"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title="Music"
    ></iframe>
  );
}

export default MusicPlayer