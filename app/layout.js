import { VaultProvider } from "./_components/vaultContext"; 



import "./globals.css"

export const metadata = {
  title: "Savings App",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
      >
        <VaultProvider>
        <main>
        {children}
        </main>
      </VaultProvider> 
      </body>
    </html>
  );
}
