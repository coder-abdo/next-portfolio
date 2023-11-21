import React, { FC } from "react";
interface Props {
  children: React.ReactNode;
}
export const Heading: FC<Props> = ({ children }) => {
  return <h2 className="text-3xl font-medium mb-8 capitalize">{children}</h2>;
};
