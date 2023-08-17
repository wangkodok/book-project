export default function Image({ src, alt }) {
  return (
    <figure>
      <img src={src} alt={alt} />
    </figure>
  );
}
