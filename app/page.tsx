import './globals.css';

export default function Home() {
  const videos = [
    { id: 1, title: 'Build a better morning', author: 'Maya Chen', views: '124K', duration: '0:28', kind: 'short' },
    { id: 2, title: 'Why cities feel alive', author: 'Atlas Stories', views: '82K', duration: '8:41', kind: 'long' },
    { id: 3, title: 'Three meals from one pan', author: 'Kitchen Lab', views: '310K', duration: '12:18', kind: 'long' },
  ];

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#">Vidora</a>
        <div className="tabs"><a className="active" href="#">Home</a><a href="#">Explore</a><a href="#">Following</a></div>
        <div className="navActions"><button aria-label="Search">⌕</button><button className="upload">Upload</button><div className="avatar">S</div></div>
      </nav>

      <section className="hero">
        <div>
          <span className="eyebrow">Community pick</span>
          <h1>Watch what moves you.</h1>
        </div>
        <button className="playHero">▶&nbsp; Watch now</button>
      </section>

      <section className="feed">
        <h2>For you</h2>
        <div className="grid">
          {videos.map((video, i) => (
            <article className="card" key={video.id}>
              <div className={`thumbnail thumbnail-${i + 1}`}>
                <button className="play" aria-label={`Play ${video.title}`}>▶</button>
                <span className="duration">{video.duration}</span>
              </div>
              <div className="meta">
                <div className="channel">{video.author.charAt(0)}</div>
                <div><h3>{video.title}</h3><p>{video.author} · {video.views} views</p></div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
