import { getMetadata } from "@/lib/getMetadata";
import BoxCard from "@/components/ui/BoxCard";
import HexagonCard from "@/components/hexagon/HexagonCard";
import DividerLogo from "@/components/ui/DividerLogo";
import Link from "next/link";

export async function generateMetadata() {
  return getMetadata({
    title: "Lorem — Claudette Vamp",
    description:
      "Claudette Vamp es una trilogía de novelas cortas de fantasía oscura y romance escritas por Alejandro Mártir.",
    url: `https://claudettevamp.com/personaje/`,
    image: `https://claudettevamp.com`,
    canonical: `https://claudettevamp.com/personaje/`,
  });
}

export default async function BookPage() {
  return (
    <div>
      <h1>Lorem Ipsum</h1>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8">
          <h2 className="font-LeMurmure text-scarlet text-6xl md:text-7xl mb-48 md:mb-32">
            Lorem Ipsum
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            volutpat sagittis elit, vitae tincidunt dui fermentum a. Mauris sit
            amet lectus placerat neque molestie luctus. Maecenas non erat in
            justo aliquet suscipit eu nec lacus. Sed fringilla ut nibh id
            aliquet. Donec at mi vel elit efficitur efficitur. Pellentesque eget
            lobortis nulla. Nullam non diam sed mauris venenatis dignissim.
            Aliquam erat volutpat. Ut vel tincidunt nisl. Suspendisse ac posuere
            est. Fusce sem leo, varius eu tincidunt interdum, sagittis a lacus.
            Morbi sit amet vestibulum tortor.
          </p>

          <DividerLogo className="py-12" />

          <h3 className="font-LeMurmure text-scarlet text-3xl mb-4">
            Personalidad
          </h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            volutpat sagittis elit, vitae tincidunt dui fermentum a. Mauris sit
            amet lectus placerat neque molestie luctus. Maecenas non erat in
            justo aliquet suscipit eu nec lacus. Sed fringilla ut nibh id
            aliquet. Donec at mi vel elit efficitur efficitur. Pellentesque eget
            lobortis nulla. Nullam non diam sed mauris venenatis dignissim.
            Aliquam erat volutpat. Ut vel tincidunt nisl. Suspendisse ac posuere
            est. Fusce sem leo, varius eu tincidunt interdum, sagittis a lacus.
            Morbi sit amet vestibulum tortor.
          </p>

          <DividerLogo className="py-12" />

          <h3 className="font-LeMurmure text-scarlet text-3xl mb-4">
            Datos curiosos
          </h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            volutpat sagittis elit, vitae tincidunt dui fermentum a. Mauris sit
            amet lectus placerat neque molestie luctus. Maecenas non erat in
            justo aliquet suscipit eu nec lacus. Sed fringilla ut nibh id
            aliquet. Donec at mi vel elit efficitur efficitur. Pellentesque eget
            lobortis nulla. Nullam non diam sed mauris venenatis dignissim.
            Aliquam erat volutpat. Ut vel tincidunt nisl. Suspendisse ac posuere
            est. Fusce sem leo, varius eu tincidunt interdum, sagittis a lacus.
            Morbi sit amet vestibulum tortor.
          </p>
        </div>

        {/* SIDEBAR */}
        <div className="col-span-12 md:col-span-4">
          <div className="relative w-full mt-16 md:mt-5">
            <BoxCard className="mt-16 md:mt-5">
              <HexagonCard
                source="/alejandro-martir.webp"
                alternative="alejandro-martir"
                className="mb-5"
              />

              <DividerLogo className="py-4" />

              <h3 className="font-LeMurmure text-scarlet text-xl mb-3">
                Nombre Completo (real)
              </h3>
              <ul>
                <li>
                  <span className="font-bold">Edad:</span> XX
                </li>
                <li>
                  <span className="font-bold">Género:</span> Lorem
                </li>
                <li>
                  <span className="font-bold">Especie:</span> Lorem
                </li>
                <li>
                  <span className="font-bold">Ocupación:</span> Lorem
                </li>
                <li>
                  <span className="font-bold">Nacimiento:</span> DD MMM YYYY
                  (Lorem Ipsum)
                </li>
                <li>
                  <span className="font-bold">Facción:</span> Lorem
                </li>
                <li>
                  <span className="font-bold">Relaciones:</span> Lorem
                </li>
              </ul>

              <DividerLogo className="py-4" />

              <h3 className="font-LeMurmure text-scarlet text-xl mb-3">
                Apariciones
              </h3>
              <ul>
                <li>
                  <Link
                    href="/libro/"
                    className="hover:text-scarlet hover:underline"
                  >
                    Lorem Ipsum
                  </Link>
                </li>
              </ul>
            </BoxCard>
          </div>
        </div>
      </section>
    </div>
  );
}
