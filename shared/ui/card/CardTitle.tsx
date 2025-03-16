interface CardTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardTitle = ({ children, ...props }: CardTitleProps) => {
  return <div {...props}>{children}</div>;
};
