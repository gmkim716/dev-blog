interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "destructive";
  className?: string;
  children: React.ReactNode;
}

export const Badge = ({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) => {
  // variant에 따른 클래스 적용 로직 추가
  const variantClasses = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border border-input bg-background",
    destructive: "bg-destructive text-destructive-foreground",
  };

  return (
    <div
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
        variantClasses[variant]
      } ${className || ""}`}
      {...props}
    >
      {children}
    </div>
  );
};
