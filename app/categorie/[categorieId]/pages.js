import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getCategorieById } from '../../database/shoe';

export const dynamic = 'force-dynamic';

export default function ShoePage({ params }) {
  const singleCategorie = getCategorieById(Number(params.shoeId)); // i need to convert the string into a number

  console.log(singleCategorie);

  if (!singleCategorie) {
    notFound();
  }

  return (
    <main>
      <h1>{params.name}</h1>
      <Image src={`/images/${singleCategorie}.webp`} width={150} height={150} />
      this is a {singleCategorie.type} new model of NB {singleCategorie.object}
    </main>
  );
}
