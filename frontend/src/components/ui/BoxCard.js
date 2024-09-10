export default function BoxCard({ children, className = "" }) {
  return (
    <div
      className={`border border-black p-8 transition-colors hover:border-scarlet ${className}`}
    >
      {children}
    </div>
  );
}
