interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardContent = ({ children, ...props }: CardContentProps) => {
  return <div {...props}>{children}</div>;
};
