import { ReactNode } from "react";
import { primaryFont } from "/app/fonts";

interface IProps {
  children: ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <html>
      <head>
        <title>Time Tracking Dashboard - Frontend Mentor - Tuan Nguyen</title>
      </head>
      <body className={primaryFont.className}>
        <main className="mx-auto max-w-sm xl:max-w-6xl">{children}</main>
      </body>
    </html>
  );
}
