import Link from "next/link";
import LogoCaidaAscenso from "../LogoCaidaAscenso";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cards = [
  {
    id: "1",
    title: "Reencarnación",
    description: "Libro I",
    url: "https://www.amazon.com/dp/B0BNZLP26R",
    target: "_blank",
  },
  {
    id: "2",
    title: "Descenso",
    description: "Libro II",
    url: "https://www.amazon.com/dp/B0CJ4M7R6G",
    target: "_blank",
  },
  {
    id: "3",
    title: "Reina y Princesa",
    description: "Libro III",
    url: "https://www.amazon.com/dp/B0CNBD75R1",
    target: "_blank",
  },
  // {
  //   id: "4",
  //   title: "Web Principal",
  //   description: "Entrar",
  //   url: "/inicio",
  //   target: "_self",
  // },
];

export default function WelcomeSection() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between -mt-24 md:-mt-32 pt-24 pb-8 md:pt-24 md:pb-8">
      <LogoCaidaAscenso className="fill-scarlet w-[350px] h-[172px] md:w-[500px] md:h-[246px] md:mt-8 lg:w-[700px] lg:h-[344px] 2xl:w-[850px] 2xl:h-[418px] 2xl:mt-16" />

      <div className="mb-12 mt-20 grid text-center gap-4 lg:max-w-7xl lg:w-full lg:mt-8 lg:mb-5 lg:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.id}
            href={card.url}
            target={card.target}
            rel="noopener"
            className="border border-black px-12 py-5 transition-colors hover:border-scarlet md:px-8"
          >
            <h3 className="font-LeMurmure text-scarlet mb-3 text-3xl">
              {card.title}
            </h3>
            <p className="text-grey text-sm uppercase font-bold">
              {card.description}
              {card.id === "4" && (
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4" />
              )}
            </p>
          </Link>
        ))}
      </div>

      <Link
        href="https://alemartir.com"
        target="_blank"
        className="text-sm text-grey uppercase hover:underline"
      >
        Claudette Vamp &copy; {new Date().getFullYear()} AM
      </Link>
    </section>
  );
}
