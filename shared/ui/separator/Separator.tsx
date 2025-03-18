interface SeparatorProps {
  className?: string;
}

export default function Separator({ className }: SeparatorProps) {
  return <div className={className} />;
}
