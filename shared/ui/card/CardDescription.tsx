interface CardDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardDescription = ({
  children,
  ...props
}: CardDescriptionProps) => {
  return <div {...props}>{children}</div>;
};
