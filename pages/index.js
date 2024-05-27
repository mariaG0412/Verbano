import Head from 'next/head';
import MovieList from '@/components/MovieList';

export default function Home() {
  return (
    <div>
      <Head>
        <title>MovieMate</title>
        <meta name="description" content="Get movie recommendations with MovieMate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">Welcome to MovieMate</h1>
        <MovieList />
      </main>
    </div>
  );
}
