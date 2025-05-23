import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div
      className="border p-6 bg-white rounded-xl  "
    >
      <h1 className="text-xl border-b pb-2 text-[#6a51a6]  font-bold">
        {title}
      </h1>
      <p>{children}</p>
    </div>
  );
}