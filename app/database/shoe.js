// server side only run in server components
// import fs from 'node:fs';

// fs.readFile('../app/page.js', () => {});

export const categorie = [
  { id: 1, name: '550', type: 'cozy', object: 'cozybley' },
  { id: 2, name: '650', type: 'cozy', object: 'cozygo' },
  { id: 3, name: '500', type: 'cozy', object: 'cozyforent' },
  { id: 4, name: '600', type: 'cozy', object: 'cozylay' },
];

export function getCategorieById(id) {
  return categorie.find((shoe) => shoe.id === id);
}
