import { cookies } from 'next/headers';
import Link from 'next/link';
import { shoes } from '../../database/shoe';

export default function ShoePage() {
  // this is what we want when using cookies
  const buttonColorCookie = cookies().get('buttonColor');

  console.log(buttonColorCookie.value);

  return <> </>;
}
