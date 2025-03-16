interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Tabs = ({ children, ...props }: TabsProps) => {
  return <div {...props}>{children}</div>;
};
