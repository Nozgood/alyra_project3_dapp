'use client';

import RainbowKitAndWagmiProvider from "../providers/RainbowKitAndWagmiProvider";
import Footer from "./Footer";
import Header from "./Header";
import { useBlockNumber } from "wagmi";

const Layout = ({ children }: {children: React.ReactNode}) => {
    return (
    <>
         <Header />
            <main className="max-w-screen-2xl mx-auto sm: p-8 md:p-16">
                {children}
                <div>
                </div>
            </main>
            <Footer />
    </>
    )
}

export default Layout

