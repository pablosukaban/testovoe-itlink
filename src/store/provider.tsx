import { store } from "@/store/store";
import { Provider } from "react-redux";
import React from "react";

export default function CustomProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
