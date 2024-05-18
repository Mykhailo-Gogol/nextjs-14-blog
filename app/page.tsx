import Hero from '@/app/components/Hero'
import Post from '@/app/components/Post'

export default function Home() {
  return (
    <div>
      <Hero />
      <ul className="grid md:grid-cols-2 gap-10 py-10 px-5">
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <li key={i + Math.random()}>
              <Post />
            </li>
          ))}
      </ul>
    </div>
  )
}
