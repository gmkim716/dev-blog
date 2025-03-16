interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const TabsList = ({ children, ...props }: TabsListProps) => {
  return <div {...props}>{children}</div>;
};
