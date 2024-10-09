import Link from "next/link";
import LogoClaudette from "../LogoClaudette";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="w-full pt-32 pb-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="flex-grow h-px bg-scarlet"></div>
          <div className="flex-shrink-0 px-4">
            <LogoClaudette className="fill-scarlet w-[194px] h-[72px] md:w-[256px] md:h-[95px] 2xl:w-[300px] 2xl:h-[111px]" />
          </div>
          <div className="flex-grow h-px bg-scarlet"></div>
        </div>

        <div className="flex flex-col items-center justify-center my-16 text-center">
          <p className="pb-8 text-lg">¡Sigue a Claudette!</p>
          <SocialIcons className="w-12 h-12" />
        </div>

        <div className="mt-8 text-center">
          <Link
            href="https://alemartir.com"
            target="_blank"
            className="text-sm text-grey uppercase hover:underline"
          >
            Claudette Vamp &copy; {new Date().getFullYear()} AM
          </Link>
        </div>
      </div>
    </footer>
  );
}
