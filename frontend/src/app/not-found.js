import { getMetadata } from "@/lib/getMetadata";
import { faSkull } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata = getMetadata({
  title: "404 Not Found — Claudette Vamp",
  description:
    "Claudette Vamp es una trilogía de novelas cortas de fantasía oscura y romance escritas por Alejandro Mártir.",
});

export default function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>

      <h2 className="font-LeMurmure text-7xl mb-2 md:text-9xl">
        <span className="text-scarlet">404</span>{" "}
        <br aria-hidden="true" className="block md:hidden" />
        Not Found
      </h2>
      <p className="text-xl mb-12">
        Lo sentimos, la página que buscas no existe{" "}
        <FontAwesomeIcon icon={faSkull} className="w-5 h-5 align-baseline" />
      </p>
    </div>
  );
}
