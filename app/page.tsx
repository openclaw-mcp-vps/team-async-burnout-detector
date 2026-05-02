export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Remote Team Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Detect Burnout Before It<br />
          <span className="text-[#58a6ff]">Breaks Your Team</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          BurnoutRadar analyzes Slack and Discord message timing, response delays, and emoji patterns to surface early burnout signals — so you can intervene before it is too late.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start for $16/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg mx-auto text-center">
          <div>
            <div className="text-2xl font-bold text-white">94%</div>
            <div className="text-xs text-[#8b949e] mt-1">Detection accuracy</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">2 min</div>
            <div className="text-xs text-[#8b949e] mt-1">Setup time</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">3x</div>
            <div className="text-xs text-[#8b949e] mt-1">Faster intervention</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$16</div>
          <div className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Slack & Discord integration',
              'Real-time burnout risk dashboard',
              'Automated manager alerts',
              'Weekly team health reports',
              'Intervention playbooks',
              'Up to 50 team members',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started Now
          </a>
          <p className="text-xs text-[#8b949e] mt-4">No credit card required for trial. Powered by Lemon Squeezy.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does BurnoutRadar detect burnout?</h3>
            <p className="text-[#8b949e] text-sm">We analyze anonymized communication metadata — message timestamps, response latency, emoji sentiment, and activity gaps — to build a burnout risk score per team member. No message content is ever read or stored.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my team's data private?</h3>
            <p className="text-[#8b949e] text-sm">Absolutely. We only process metadata, never message content. All data is encrypted at rest and in transit. You can delete your data at any time from the dashboard.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which platforms are supported?</h3>
            <p className="text-[#8b949e] text-sm">BurnoutRadar currently supports Slack and Discord via webhook integration. Microsoft Teams support is on the roadmap for Q3 2025.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} BurnoutRadar. Built for remote-first teams.
      </footer>
    </main>
  )
}
