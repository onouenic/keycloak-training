import Nav from '@/components/nav'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthStatus from '@/components/authStatus'
import SessionProviderWrapper from '../../utils/sessionProviderWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Keycloak Login',
  description: 'User CRUD with keycloak',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProviderWrapper>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex flex-row text-white">
            <div className="w-4/5 p-3 h-screen bg-black">{children}</div>
            <div className="w-1/5 p-3 h-screen bg-gray-700">
              <h2 className="text-3xl">Keycloak - training</h2>
                <AuthStatus />
              <hr />
                <Nav />
            </div>
          </div>
        </body>
      </html>
    </SessionProviderWrapper>
  )
}
