export default async function ISRPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    next: { revalidate: 10 }, // Revalidate every 10 seconds
  });
  const post = await res.json();

  return (
    <div>
      <h1>Incremental Static Regeneration (ISR) in Next.js App Router</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}