'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createOrUpdateComment(categorieId, quantity) {
  // 1. Get the current cookie from the Request Headers

  const stringCookie = getCookie('cart');
  console.log('stringCookie', stringCookie);
  // 2. Parse the cookie
  const parsedCookie = !stringCookie
    ? [] // 3. Create a new array with the AddCart
    : parseJson(stringCookie);
  // 4. Edit and get the object for the AddCart in cookies
  const cookieItemtoUpdate = parsedCookie.find((item) => {
    return item.id === categorieId;
  });
  // 5. Update the AddCart in cartPage
  if (cookieItemtoUpdate) {
    // 6. Update the quantity in the carPage by pushing add button
    cookieItemtoUpdate.quantity =
      Number(cookieItemtoUpdate.quantity) + Number(quantity);
  } else {
    // 7. Add the new value to current value in the cartPage
    parsedCookie.push({
      id: categorieId,
      quantity: Number(quantity),
    });
  }
  // 8. Override the cookie (set cookies to the response headers)
  await cookies().set('cart', JSON.stringify(parsedCookie));
}

export async function getCategorie() {
  // 1. Get the current cookie from the Request Headers

  const categroieQuantityCookie = await getCookie('cart');
  // 2. Parse the cookie
  const categorieQuantities = !categroieQuantityCookie
    ? [] // 3. Create a new array with the productQuantity
    : parseJson(categroieQuantityCookie);

  return categroieQuantityCookie;
}
