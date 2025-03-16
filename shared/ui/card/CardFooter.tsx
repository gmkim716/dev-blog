interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardFooter = ({ children, ...props }: CardFooterProps) => {
  return <div {...props}>{children}</div>;
};
