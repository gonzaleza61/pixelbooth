export default function HeroOverlay() {
  return (
    <div className="bg-transparent mix-blend-difference pointer-events-none">
      <div className="relative h-screen flex items-center justify-center pointer-events-none">
        <h1
          className="text-white text-4xl tracking-tight font-extrabold mix-blend-difference sm:text-5xl md:text-7xl"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          Houston
          <br />
          <span
            className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Pixel
          </span>
          <br />
          Photobooth
        </h1>
      </div>
    </div>
  );
}
