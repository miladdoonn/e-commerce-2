import './globals.scss';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main>
      <br />
      <h1 className="h1">COZYSHOP</h1>
      <Image
        className="div"
        src="/images/runnpep.jpg"
        width={700}
        height={350}
      />
      <h3 className="h3">Inspired by Milad</h3>
    </main>
  );
}
