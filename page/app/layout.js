import './globals.css'

export const metadata = {
  title: 'Ganpati Sir Webpage',
  description: 'Research and Academic Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
