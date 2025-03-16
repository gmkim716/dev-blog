interface TabsTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  value: string;
}

export const TabsTrigger = ({
  children,
  value,
  ...props
}: TabsTriggerProps) => {
  return (
    <button {...props} value={value}>
      {children}
    </button>
  );
};
