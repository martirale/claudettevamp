"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faSpotify,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const SocialIcon = ({ href, icon, label, className }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-scarlet transition-colors duration-300"
    aria-label={label}
  >
    <FontAwesomeIcon icon={icon} className={className} />
  </Link>
);

export default function SocialIcons({ className = "w-6 h-6" }) {
  return (
    <div className="flex space-x-4 md:space-x-6 justify-center md:justify-start">
      <SocialIcon
        href="https://www.instagram.com/claudettevamp"
        icon={faInstagram}
        label="Instagram"
        className={className}
      />
      <SocialIcon
        href="https://www.threads.net/claudettevamp"
        icon={faThreads}
        label="Threads"
        className={className}
      />
      <SocialIcon
        href="https://www.facebook.com/claudettevamp"
        icon={faFacebookF}
        label="Facebook"
        className={className}
      />
      <SocialIcon
        href="https://open.spotify.com/artist/7sYIWPBUhdqqSMgCKCd8LU"
        icon={faSpotify}
        label="Spotify"
        className={className}
      />
    </div>
  );
}
