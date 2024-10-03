import React from "react";
import Link from "next/link";
import Image from "next/image";

const stores = [
  {
    id: "1",
    image: "/stores/amazon-com.svg",
    width: "150",
    height: "44",
    url: "https://www.amazon.com/dp/B0BNZMWXYT",
    target: "_blank",
  },
  {
    id: "2",
    image: "/stores/apple-books.svg",
    width: "150",
    height: "44",
    url: "https://books.apple.com/us/book-series/caída-y-ascenso/id1701697487",
    target: "_blank",
  },
  {
    id: "3",
    image: "/stores/goodreads.svg",
    width: "150",
    height: "44",
    url: "https://www.goodreads.com/series/378386-ca-da-y-ascenso",
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
          className="px-2 py-4 border border-darkGrey transition-colors hover:border-scarlet flex items-center justify-center"
        >
          <Image src={store.image} width={store.width} height={store.height} />
        </Link>
      ))}
    </div>
  );
}
