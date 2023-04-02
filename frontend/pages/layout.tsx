export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="blah">
      <body>{children}</body>
    </html>
  );
}
