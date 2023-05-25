import './globals.scss';
import Head from 'next/head';
import Image from 'next/image';

function HomePage() {
  return (
    <div>
      <Head>
        <title>My Milad</title>
        <meta property="og:title" content="My Milad" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My Milad" key="title" />
      </Head>
      <h1 className="h1">COZYSHOP</h1>
      <Image
        className="div"
        src="/images/runnpep.jpg"
        width={700}
        height={350}
      />
      <h3 className="h3">Inspired by Milad</h3>
    </div>
  );
}

export default HomePage;
