import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getCategorieById } from '../../database/shoe';
import AddCart from './AddCart';
import styles from './pageshoe.Module.scss';

export const dynamic = 'force-dynamic';

export default function ShoePage({ params }) {
  const singleCategorie = getCategorieById(Number(params.categorieId)); // i need to convert the string into a number

  console.log({ singleCategorie });

  if (!singleCategorie) {
    notFound();
  }

  return (
    <main>
      <h1 className="h1">{singleCategorie.name}</h1>
      <Image
        className="image"
        src={`/images/${singleCategorie.name}.jpg`}
        width={150}
        height={150}
      />
      <AddCart />
      this is a {singleCategorie.type} new model of NB {singleCategorie.object}
    </main>
  );
}
