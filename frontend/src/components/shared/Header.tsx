import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
    return (
        <>
            <header className="flex justify-between p-4 mx-auto w-full">
                <div>Logo</div>
                <ConnectButton />
            </header>
        </>
    )
}

export default Header;