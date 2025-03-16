interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  value: string;
}

export const TabsContent = ({ children, ...props }: TabsContentProps) => {
  return <div {...props}>{children}</div>;
};
