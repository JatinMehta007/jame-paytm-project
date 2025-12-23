"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export function CardStackDemo({ children }: Props) {
  return (
    <div className="flex items-center justify-center w-full">
      {children}
    </div>
  );
}
