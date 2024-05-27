"use client";
import { FaTwitter, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ShareButtonSection = ({
  postUrl,
  title,
}: {
  postUrl: string;
  title: string;
}) => {
  return (
    <div className="mt-4 flex justify-center space-x-4">
      {title && (
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            postUrl
          )}&text=${encodeURIComponent(
            `Te invito a leer este interesante post: ${title}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter className="text-[#000000] hover:scale-125 " size={32} />
        </a>
      )}

      {title && (
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            postUrl
          )}&text=${encodeURIComponent(
            `Te invito a leer este interesante posteo: ${title}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-[#5285f5] hover:scale-125 " size={32} />
        </a>
      )}

      <a
        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
          postUrl
        )}&text=${encodeURIComponent(
          `Te invito a leer este interesante post: ${title}`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-[#069e5f] hover:scale-125 " size={32} />
      </a>

      {title && (
        <div
          className="fb-share-button"
          data-href={postUrl}
          data-layout="button_count"
        >
          <a
            target="_blank"
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              postUrl
            )}&text=${encodeURIComponent(
              `Te invito a leer este interesante post: ${title}`
            )}`}
            className="fb-xfbml-parse-ignore"
          >
            <FaFacebook size={32} className="text-[#284083] hover:scale-125 " />
          </a>
        </div>
      )}
    </div>
  );
};

export default ShareButtonSection;
