
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { User } from './user';

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>Hello</h1>
      <Link href="/users">Users</Link>
      <ProductCard/>
      <pre>{JSON.stringify(session)}</pre>
      <User />
    </main>
  )
}
