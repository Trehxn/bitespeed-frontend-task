type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <button
      className="flex items-center justify-center rounded-lg border-2 border-blue-900 bg-white px-8 py-2 font-bold text-blue-900 hover:bg-blue-900 hover:text-white active:border-blue-700 active:bg-blue-700"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
