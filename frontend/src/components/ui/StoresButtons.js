import Link from "next/link";
import Image from "next/image";

const stores = [
  {
    id: "1",
    image: "/favicon.png",
    url: "https://www.amazon.com/dp/B0BNZLP26R",
    target: "_blank",
  },
  {
    id: "2",
    image: "/favicon.png",
    url: "https://www.amazon.com/dp/B0CJ4M7R6G",
    target: "_blank",
  },
  {
    id: "3",
    image: "/favicon.png",
    url: "https://www.amazon.com/dp/B0CNBD75R1",
    target: "_blank",
  },
];

export default function StoresButtons() {
  return (
    <div className="grid text-center gap-4 md:grid-cols-3">
      {stores.map((store) => (
        <Link
          key={store.id}
          href={store.url}
          target={store.target}
          rel="noopener"
          className="border border-black px-8 py-5 transition-colors hover:border-scarlet"
        >
          <Image src={store.image} width={64} height={64} />
        </Link>
      ))}
    </div>
  );
}
