import Image from 'next/image';
import { categorie } from '../../../database/categorie';

export default function ShoePage({ params }) {
  const singlecategorie = categorie.find(
    (categorie) => categorie.name === params.name,
  );
  console.log(singlecategorie);
  console.log(params);
  return (
    <main>
      <h1>{params.name}</h1>
      <Image src={`/images/${params.name}.webp`} width={150} height={150} />
      this is a new model of NB
    </main>
  );
}
