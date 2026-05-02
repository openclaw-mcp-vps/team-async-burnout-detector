import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BurnoutRadar — Detect Remote Team Burnout Early',
  description: 'Analyzes Slack and Discord communication patterns to detect early signs of team burnout and suggest interventions before it is too late.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9f834d57-db43-4ff4-a16a-01cb4ac16bb7"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
