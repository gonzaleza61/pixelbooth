export default function HeroOverlay() {
  return (
    <div className="bg-transparent mix-blend-difference pointer-events-none">
    <div className="relative h-screen flex items-center justify-center pointer-events-none">
      <h1
        className="text-white text-4xl tracking-tight font-extrabold mix-blend-difference sm:text-5xl md:text-6xl"
        style={{ fontFamily: "Anton, sans-serif" }}
      >
        Houston
        <br />
        Pixel
        <br />
        Photobooth
      </h1>
    </div>
    </div>
  );
}
