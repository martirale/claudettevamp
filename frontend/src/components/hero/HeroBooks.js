import StoresButtons from "../StoresButtons";
import LogoCaidaAscenso from "../LogoCaidaAscenso";
import Image from "next/image";

export default function HeroBooks() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="col-span-12 md:col-span-6 flex justify-center">
        <Image
          src="/books/claudette-caida-ascenso.png"
          width="688"
          height="600"
          className="w-full h-auto"
        />
      </div>

      <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
        <LogoCaidaAscenso className="w-full h-auto px-8 md:px-16 fill-scarlet" />

        <div>
          <p className="uppercase text-sm text-center mt-12 mb-4">
            Libros disponibles en:
          </p>
          <StoresButtons />
        </div>
      </div>
    </section>
  );
}
