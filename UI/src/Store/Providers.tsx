"use client";

import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { NextUIProvider } from "@nextui-org/react";
import configureStore from "./store";

const store = configureStore();

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </Provider>
  );
}
