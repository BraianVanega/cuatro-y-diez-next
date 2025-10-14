import cn from "classnames";

export default function Wrapper({ children, className }) {
  return <div className={cn("max-w-[90%] m-auto", className)}>{children}</div>;
}
