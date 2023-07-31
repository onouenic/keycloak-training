'use client';

import { useSession } from "next-auth/react"

export default function Home() {

  const { data: session, status } = useSession();

  return (
    <main className="text-center">
      <h1 className="text-4xl">Home</h1>
      <h3 className="text-xl">Welcome</h3>
      <div>
        {session && <p>Session: {session.user?.email} || {session.user?.name}</p>}
        <p>Status: {status}</p>
      </div>
      <div>
        {status === "authenticated" ? <span>Logado</span> : <span>Deslogado</span>}
      </div>
    </main>
  )
}
