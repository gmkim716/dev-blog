interface LabelProps {
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
}

export default function Label({ children, className, htmlFor }: LabelProps) {
  return (
    <label className={className} htmlFor={htmlFor}>
      {children}
    </label>
  );
}
