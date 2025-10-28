"use client";

import Image from "next/image";
import { Star } from "lucide-react";

type Avatar = { src?: string; alt?: string; bg?: string };

export default function RatingStrip({
  avatars = [
    { src: "/assets/img/avatars/a1.jpg" },
    { src: "/assets/img/avatars/a2.jpg" },
    { src: "/assets/img/avatars/a3.jpg" },
    { src: "/assets/img/avatars/a4.jpg" },
  ] as Avatar[],
}) {
  return (
    <div className="rating-strip">
      {/* Avatars au-dessus */}
      <div className="rs-avatars">
        {avatars.slice(0, 5).map((a, i) => (
          <div key={i} className="rs-avatar" style={{ zIndex: 10 - i }}>
            {a.src ? (
              <Image
                src={a.src}
                alt={a.alt || "Client"}
                fill
                sizes="48px"
                className="rs-avatar-img"
              />
            ) : (
              <span className="rs-avatar-fallback" style={{ background: a.bg || "#E6EEF6" }} />
            )}
          </div>
        ))}
      </div>

      {/* Ligne unique : étoiles + texte (collés) */}
      <div className="rs-row">
        <div className="rs-stars">
          <Star size={18} className="rs-star" />
          <Star size={18} className="rs-star" />
          <Star size={18} className="rs-star" />
          <Star size={18} className="rs-star" />
          <Star size={18} className="rs-star" />
        </div>
        <span className="rs-label text-black">Déjà 2 clients satisfaits !</span>
      </div>
    </div>
  );
}
