import { ClerkProvider, SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen bg-background text-foreground antialiased">
      <body className="min-h-screen bg-background antialiased">
        <ClerkProvider>
          <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter:blur(0)]
