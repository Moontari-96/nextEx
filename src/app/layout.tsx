import '../../styles/globals.css'
import Navigation from '../components/navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: {
        template: '%s | Next Movies',
        default: 'Next Movies',
    },
    description: 'The best movies on the best framework',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ko">
            <body className="flex flex-col">
                <Navigation />
                {children}
            </body>
        </html>
    )
}
