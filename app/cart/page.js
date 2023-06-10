import Image from 'next/image';
import Link from 'next/link';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import { getQuantity } from '../categorie/[categorieId]/actions';
import { categorie, getCategorieById } from '../database/shoe';

// const productQuantity = await getQuantity();
// const productInCart = await Promise.all(
//   productQuantity.map(async (item) => {
//     const matchingProduct = await getProductsById(Number(item.id));
//     return {
//       ...matchingProduct,
//       quantity: item.quantity,
//     };
//   }),
// );
export default function CartPage() {
  // This is what we want when using cookies
  const categorieCookie = getCookie('cart');

  const categorieCookieQuantity = !categorieCookie
    ? []
    : parseJson(categorieCookie);
  const categorieQuantity = categorie.map((categorie) => {
    const matchingCategorieFromCookie = categorieCookieQuantity.find(
      (categorieObject) => categorie.id === categorieObject.id,
    );
    console.log({ categorieCookieQuantity });
    return { ...categorie, quantity: matchingCategorieFromCookie?.quantity };
  });
  return (
    <div>
      {categorieQuantity.map((categorie) => {
        console.log(categorie);
        return (
          <div key={`categorie-${categorie.id}`}>
            <h1></h1>
            <h3>{categorie.price}</h3>
            {categorie.quantity}
            <Link href={`/categories/${categorie.id}`}>
              {categorie.shoeName}
            </Link>
            <br />
            <Image
              alt={categorie.shoeName}
              src={`/images/${categorie.name}.jpg`}
              width={150}
              height={150}
            />
          </div>
        );
      })}
    </div>
  );
}
