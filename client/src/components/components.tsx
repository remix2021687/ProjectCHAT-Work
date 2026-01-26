import type React from "react";
import { RootLayout } from "./Layout/RootLayout/RootLayout";
import { HomePage } from "./Main/HomePage/HomePage";


export const components: Record<string, React.ComponentType<any>> = {
    RootLayout,
    HomePage,
}