import MonogramClaudette from "../MonogramClaudette";

export default function DividerLogo({ className = "" }) {
  return (
    <div className={`w-full ${className}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="flex-grow h-px bg-scarlet"></div>
          <div className="flex-shrink-0 px-4">
            <MonogramClaudette className="fill-scarlet w-[23px] h-[32px]" />
          </div>
          <div className="flex-grow h-px bg-scarlet"></div>
        </div>
      </div>
    </div>
  );
}
