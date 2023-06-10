import { getQuantity } from './categorie/[categorieId]/actions';

export default function TotalNumber() {
  async function showCategorieAmount() {
    const currentCategorie = await getQuantity();
    return currentCategorie.reduce((total, item) => total + item.quantity, 0);
  }
  return <p>{showCategorieAmount()}</p>;
}
