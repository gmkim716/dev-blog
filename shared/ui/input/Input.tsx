interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = ({ className, ...props }: InputProps) => {
  return <input className={className} {...props} />;
};
