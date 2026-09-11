import { BOTTLE_IMAGE_SRC } from '../constants/config';

interface BottleVisualizerProps {
  count: number;
  imageSrc?: string;
  altText?: string;
}

export function BottleVisualizer({
  count,
  imageSrc = BOTTLE_IMAGE_SRC,
  altText = 'Jaloviina muovipullo',
}: BottleVisualizerProps) {
  if (count <= 0) {
    return null;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginTop: '10px',
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <img
          key={i}
          src={imageSrc}
          alt={altText}
          loading="lazy"
          style={{ width: '50px', height: 'auto' }}
        />
      ))}
    </div>
  );
}
