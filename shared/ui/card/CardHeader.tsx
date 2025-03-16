interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardHeader = ({ children, ...props }: CardHeaderProps) => {
  return <div {...props}>{children}</div>;
};
