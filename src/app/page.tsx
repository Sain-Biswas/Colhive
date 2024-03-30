import getCurrentUser from "@/resources/actions/getCurrentUser";


export default async function Home() {
  const data = await getCurrentUser();
  return (
    <main >
      {JSON.stringify(data)}
    </main>
  );
}
