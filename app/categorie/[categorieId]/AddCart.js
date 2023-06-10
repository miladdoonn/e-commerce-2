'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createOrUpdateComment } from './actions';

// import styles from './ProductQuantityForm.module.scss';

// {id : number, comment: string}[]]

//type Props = {
//categorieId: number,
//};

export default function AddCart(props) {
  console.log(props.quantity);
  const [quantity, setQantity] = useState('1');
  const router = useRouter();

  return (
    <form>
      <input
        data-test-id="add-cart"
        type="number"
        min="1"
        value={quantity}
        onChange={(event) => {
          setQantity(event.currentTarget.value);
        }}
      />
      <br />
      <button
        data-test-id="product-add-to-cart"
        formAction={async () => {
          router.refresh();
          await createOrUpdateComment(props.categorieId, quantity);
        }}
      >
        Add to cart
      </button>
    </form>
  );
}
