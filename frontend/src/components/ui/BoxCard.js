export default function BoxCard({ children }) {
  return (
    <div className="border border-black px-8 py-5 transition-colors hover:border-scarlet">
      {children}
    </div>
  );
}
