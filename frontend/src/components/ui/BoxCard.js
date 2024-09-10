export default function BoxCard({ children, className = "" }) {
  return (
    <div
      className={`border border-black px-8 py-5 transition-colors hover:border-scarlet ${className}`}
    >
      {children}
    </div>
  );
}
