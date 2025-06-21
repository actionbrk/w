import { DOMAttributes } from "react";

export function SearchBadge(
  props: {
    children: React.ReactNode;
    className?: string;
  } & DOMAttributes<HTMLSpanElement>
) {
  const { className, children } = props;
  return (
    <span
      {...props}
      className={
        "bg-primary-400 text-primary-900 rounded-2xl p-2 text-xs cursor-pointer hover:bg-primary-500 " +
        (className ?? "")
      }
    >
      {children}
    </span>
  );
}
