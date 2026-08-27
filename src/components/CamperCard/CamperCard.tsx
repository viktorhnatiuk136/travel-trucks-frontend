import type { Camper } from "@/types/Camper";
import Image from "next/image";
import Link from "next/link";

interface CamperCardProps {
  camper: Camper;
}

export default function CamperCard({ camper }: CamperCardProps) {
  return (
    <article>
      <Image
        src={camper.coverImage}
        alt={camper.name}
        width={219}
        height={240}
      />
      <div>
        <header>
          <h2>{camper.name}</h2> <p>€{camper.price}</p>
        </header>
        <div>
          <span>
            {camper.rating}({camper.totalReviews}Reviews)
          </span>
          <span>{camper.location}</span>
        </div>
        <p>{camper.description}</p>
        <ul>
          <li>{camper.engine}</li>
          <li>{camper.transmission}</li>
          <li>{camper.form}</li>
        </ul>
        <Link href={`/catalog/${camper.id}`}>Show more</Link>
      </div>
    </article>
  );
}
