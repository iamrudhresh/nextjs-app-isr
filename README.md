# **Next.js Incremental Static Regeneration (ISR) Guide**

This guide explains how to implement **Incremental Static Regeneration (ISR)** in Next.js using the **App Router (`app/` directory)**.

---

## **📌 Incremental Static Regeneration (ISR) in App Router (`app/` directory)**

### **How ISR Works:**
- Unlike Server-Side Rendering (SSR), ISR allows **statically generated pages to update after a set time**.
- It improves performance by reducing the number of server requests.
- Uses `next: { revalidate: time_in_seconds }` to re-fetch data periodically.

### **Step 1: Create an ISR Page in `app/isr/page.js`**

Create a new file **`app/isr/page.js`**:

```jsx
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
```

### **Step 2: Run the Project & Test ISR**

1. Start the server:
   ```bash
   npm run dev
   ```
2. Open **http://localhost:3000/isr** in your browser.
3. The first request will fetch data from the API and cache it.
4. If you refresh within **10 seconds**, you will see the same cached data.
5. If you refresh **after 10 seconds**, a new fetch request will be triggered.

---

## **🔍 Key Features of ISR**

| Feature | ISR (App Router) |
|---------|----------------------------|
| **Data Fetching** | Cached & updated after `revalidate` time |
| **Performance** | Faster (cached results) |
| **Best Use Case** | Content that updates periodically |

---

## **🎯 Conclusion**
✅ **Use ISR (`revalidate: time`) for content that updates occasionally.**
✅ **Use App Router for new projects (preferred method).**

Would you like an interactive example with ISR and client-side fetching together? 🚀

