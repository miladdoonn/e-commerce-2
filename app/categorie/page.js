import Image from 'next/image';
import Link from 'next/link';
import { categorie } from '../database/shoe';

export const metadata = {
  title: 'categorie page',
  description: 'all the contacts',
};

export default function CategoriePage() {
  return (
    <main>
      My new shoe Collections
      {categorie.map((shoe) => {
        return (
          <div className="shoe" key={`shoe-div-${shoe.id}`}>
            <br />

            <Link href={`/categorie/${shoe.id}`}>{shoe.name}</Link>
            <br />
            <Image src={`/images/${shoe.name}.jpg`} width={150} height={150} />
          </div>
        );
      })}
    </main>
  );
}
