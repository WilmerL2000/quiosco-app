import prismadb from '@/lib/prismadb';

export default async function Home() {
  const categories = await prismadb.category.findMany();
  console.log(categories);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
