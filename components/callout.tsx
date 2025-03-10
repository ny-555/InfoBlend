export default function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex items-center rounded-xl border border-l-8 p-4">
      <div>{children}</div>
    </div>
  );
}
