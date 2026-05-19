import Image from 'next/image';

// Requires /public/covenir-icon.png and /public/covenir-logo.png
// Drop the official logo files into the public/ folder to activate.

export function CovenirIcon({ size = 36 }: { size?: number }) {
  return (
    <Image
      src="/covenir-icon.png"
      alt="Covenir"
      width={size}
      height={size}
      className="object-contain"
      priority
    />
  );
}

export function CovenirLogo({
  size = 'md',
}: {
  size?: 'sm' | 'md' | 'lg';
}) {
  const h = size === 'sm' ? 32 : size === 'lg' ? 52 : 40;
  // Width is ~3x height based on the horizontal logo proportions
  const w = Math.round(h * 3.2);

  return (
    <Image
      src="/covenir-logo.png"
      alt="Covenir — Better Process Outsourcing"
      width={w}
      height={h}
      className="object-contain"
      priority
    />
  );
}
