const images = [
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', alt: 'Orlando theme parks' },
  { src: 'https://images.unsplash.com/photo-1530092285049-1c42085fd395', alt: 'Nordeste trip' },
  { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470', alt: 'Coming soon' },
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10" id="gallery">
      {images.map((img) => (
        <img
          key={img.alt}
          src={img.src}
          alt={img.alt}
          className="object-cover w-full h-48 transform hover:scale-105 transition"
        />
      ))}
    </div>
  );
}
