// Covenir pinwheel logo — replace src with /covenir-logo.png once added to /public
// Usage: <CovenirLogo /> for full logo, <CovenirIcon /> for icon only

export function CovenirIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Green — top-left large petal */}
      <path d="M50 50 L12 22 Q28 8 50 10 Z" fill="#8DC63F"/>
      {/* Pink — top small petal */}
      <path d="M50 50 L50 10 Q62 10 68 20 Z" fill="#EC008C"/>
      {/* Orange — top-right petal */}
      <path d="M50 50 L68 20 Q82 30 82 48 Z" fill="#F7941D"/>
      {/* Dark blue — right petal */}
      <path d="M50 50 L82 48 Q84 62 74 72 Z" fill="#003087"/>
      {/* Cyan — lower-right petal */}
      <path d="M50 50 L74 72 Q62 84 50 84 Z" fill="#00AEEF"/>
      {/* Light gray — bottom petal */}
      <path d="M50 50 L50 84 Q36 84 26 74 Z" fill="#BCBEC0"/>
      {/* Purple — bottom-left large petal */}
      <path d="M50 50 L26 74 Q10 60 12 22 Z" fill="#7B2D8B"/>
    </svg>
  );
}

export function CovenirLogo({
  size = 'md',
  theme = 'light',
}: {
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
}) {
  const iconSize = size === 'sm' ? 28 : size === 'lg' ? 52 : 38;
  const textClass =
    size === 'sm'
      ? 'text-lg font-bold tracking-tight'
      : size === 'lg'
      ? 'text-3xl font-bold tracking-tight'
      : 'text-2xl font-bold tracking-tight';
  const subtextClass = size === 'sm' ? 'text-[8px]' : size === 'lg' ? 'text-xs' : 'text-[10px]';
  const textColor = theme === 'dark' ? 'text-white' : 'text-covenir-text';
  const subColor = theme === 'dark' ? 'text-white/60' : 'text-covenir-gray';

  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      <CovenirIcon size={iconSize} />
      <span className="flex flex-col leading-none">
        <span className={`${textClass} ${textColor} font-extrabold lowercase`}>covenir</span>
        <span className={`${subtextClass} ${subColor} uppercase tracking-widest font-medium`}>
          Better Process Outsourcing
        </span>
      </span>
    </span>
  );
}
