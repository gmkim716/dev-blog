interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline";
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ children, ...props }: CardProps) => {
  return <div {...props}>{children}</div>;
};
