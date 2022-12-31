"use client";

import { ReactNode } from "react";
import { primaryFont } from "/app/fonts";
import "/styles/globals.css";

interface IProps {
  children: ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <html>
      <head>
        <title>Time Tracking Dashboard - Frontend Mentor - Tuan Nguyen</title>
      </head>
      <body className={primaryFont.className + " bg-very-dark-blue"}>
        <main className="mx-auto max-w-sm xl:max-w-6xl">{children}</main>
      </body>
    </html>
  );
}
