import type { Metadata } from "next";
import {IBM_Plex_Sans} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
// import {
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton
// } from '@clerk/nextjs'

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400','500','600','700'],
  variable:'--font-IBM-plex'
});

export const metadata: Metadata = {
  title: "Pixel Perfect",
  description: "AI-Powered Image Restoration Using Cloudinary-AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables:{colorPrimary:'#624cf5'}
    }}
    >
      <html lang="en">
          <body className={cn("font-IBMPlex antialised",IBMPlex.variable)}>
          {/* <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}
            {children}
          </body>
      </html>
    </ClerkProvider>
  );
}
