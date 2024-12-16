import './globals.css'
import Navigation from '../components/navigation'
import SalesLayout from './about-us/company/jobs/sales/layout'
import Sales from './about-us/company/jobs/sales/page'
import AboutUsLayout from './about-us/layout'
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
