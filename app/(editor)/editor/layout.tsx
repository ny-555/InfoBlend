export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container mx-auto p-8">{children}</div>;
}
