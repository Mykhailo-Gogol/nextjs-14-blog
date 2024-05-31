import Hero from '@/components/Hero'

export default function Home() {
  console.log('env', process.env.NODE_ENV)

  return (
    <div>
      <Hero />
    </div>
  )
}
