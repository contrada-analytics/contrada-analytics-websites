import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Why I'm Building a CPG Automation Platform | DataArk Labs",
  description: "How 20 years of CPG experience revealed the same problems across companies—and why I'm building a platform to solve them.",
}

export default function CPGAutomationPlatformPost() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <header className="mb-12">
          <Link
            href="/blog"
            className="text-[#0F1B2D] hover:opacity-80 mb-6 inline-block"
          >
            ← Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F1B2D] mb-4">
            Why I'm Building a CPG Automation Platform (And What 20 Years Taught Me)
          </h1>
          <div className="text-gray-600">
            <p>By Jason Contrada | Founder, DataArk Labs</p>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-[#0F1B2D] mt-12 mb-4">Opening Hook</h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            In my mid-twenties, I transitioned from a sales and account management role—working on one of the UK's biggest customer accounts—to an internal 'retail marketing' position. That's when I noticed something odd.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            My new role required me to create and implement a '5P' strategy for one of our major healthcare categories. One of those P's was promotions. Simple enough, right? Except I needed to answer what seemed like straightforward questions: How many promotions did we run in the last two years? How many were we planning for the year ahead? What was the price, feature space, quality, and mechanic of each promotion? Which promotions were off-strategy?
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            The problem? Nobody could answer these questions without weeks of manual work. The data existed—scattered across retailer portals, spreadsheets, emails, and someone's memory. Getting to a single source of truth meant an analyst copying and pasting between systems for days on end.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            I remember thinking: "This can't be normal." But it was. And twenty years later, across multiple companies and countries, I'm still seeing the same problem.
          </p>

          <h2 className="text-3xl font-bold text-[#0F1B2D] mt-12 mb-4">The Pattern Recognition</h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Over the next two decades, I worked across multiple CPG companies in different countries. The names changed. The products changed. The markets changed. But the problems? They were eerily similar.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            <strong>Data silos everywhere.</strong> Sales data lived in one spreadsheet. Inventory data in another. Digital performance in a third. None of them talked to each other. Every weekly business review meant someone spent hours copying and pasting to create a single view of what was happening.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            <strong>Master data mapping nightmares.</strong> You couldn't join internal and external data because product codes didn't match. Customer hierarchies were inconsistent. What one retailer called "SKU-1234" was something completely different in your ERP system. These mapping issues didn't just slow down analysis—they made critical commercial process meetings throughout the year nearly impossible to run effectively.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            <strong>The dashboard delusion.</strong> Companies kept thinking that if they just built another dashboard, their analytics problems would disappear. But dashboards without proper data foundations are just expensive ways to visualize bad data. The real problem wasn't visualization—it was the mess underneath.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            <strong>Point solution addiction.</strong> Everyone wanted the quick fix. Build a tool for this specific problem. Create a workaround for that issue. But without data foundations, these point solutions just created more silos. More systems that didn't talk to each other. More technical debt.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            <strong>Key person risk.</strong> The analyst who built that complex spreadsheet everyone relies on for quarterly planning? They just left the company. Now nobody knows how it works or how to update it. I've seen multi-million dollar decisions delayed because the one person who understood the model was gone.
          </p>

          <h2 className="text-3xl font-bold text-[#0F1B2D] mt-12 mb-4">Why These Problems Persist</h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            If these problems are so common, why hasn't someone solved them? The answer is simple: the solutions that exist weren't built for mid-market CPG brands.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            <strong>Enterprise solutions are out of reach.</strong> The big platforms—SAP, Oracle, IBM—cost millions to implement and require armies of consultants to maintain. They're built for Unilever and P&G, not for brands doing $50-500M in revenue.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            <strong>Custom builds require teams you don't have.</strong> You could build it yourself, but that means hiring data engineers, maintaining infrastructure, and constantly updating integrations as retailers change their APIs. Most mid-market companies can't afford a full internal tech team just to solve data problems.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            <strong>Point solutions don't talk to each other.</strong> So you buy a tool for trade promotion analysis. Another for retailer data ingestion. Another for demand planning. Now you have five systems that don't integrate, and you're back to spreadsheets to tie it all together.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            <strong>The default becomes Excel.</strong> It's the universal glue. It's familiar. It's flexible. And it's killing your team's productivity. But what's the alternative when everything else is too expensive or too complicated?
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            The mid-market has been stuck between enterprise complexity and spreadsheet chaos. That gap is what I'm building to fill.
          </p>

          <h2 className="text-3xl font-bold text-[#0F1B2D] mt-12 mb-4">The Realization</h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            The turning point came when I moved to our Australian subsidiary.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Within weeks, the sales director pulled me into a meeting and described the problems they were facing. Data scattered across systems. Manual reconciliation taking days. Critical commercial decisions delayed because nobody could get a clear view of what was actually happening.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Then he asked: "Can you build us the same solution you rolled out in the UK?"
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            That question stopped me cold. Same problems. Different country. Different team. Different retailers. But underneath it all, identical challenges.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            That's when it hit me: <strong>I'd been solving the same problems over and over, just in slightly different packaging.</strong> Trade promotion reconciliation in the UK. Retailer data integration in Australia. Inventory planning in another market. The specifics varied, but 80% of what I was building was the same underlying infrastructure.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            I was treating symptoms, not the disease. Each engagement meant building custom solutions from scratch. But these problems didn't need custom solutions—they needed a platform. A foundation that could be deployed once and configured for each brand's specific needs.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Here's what I realized: <strong>only things that add significant strategic value should be built as custom solutions.</strong> Getting retailer data into a usable format? That's not strategic—it's infrastructure. Master data mapping? Infrastructure. Automated trade promotion reconciliation? Infrastructure.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            The strategic work—the analysis, the insights, the decisions—that's where commercial teams should spend their time. Not wrestling with data foundations.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            So I made a decision: build the platform. Make it reusable. Make it deployable behind a client's firewall for those concerned about data privacy. And most importantly, build it against real client problems, not theoretical ones.
          </p>

          <h2 className="text-3xl font-bold text-[#0F1B2D] mt-12 mb-4">What I'm Building</h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            A CPG automation platform that handles the 80% of work that's the same across every company, so your team can focus on the 20% that's actually strategic.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Here's what that looks like in practice:
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            <strong>Automated data ingestion.</strong> Retailer data flows in automatically—no more logging into 18 different portals, downloading CSVs, and hoping the file format hasn't changed. The platform handles the extraction, transformation, and loading.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            <strong>Master data mapping that actually works.</strong> Product codes, customer hierarchies, location taxonomies—all mapped and maintained in one place. When a retailer calls your product one thing and your ERP calls it another, the system reconciles it automatically.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            <strong>Trade promotion management end-to-end.</strong> From planning through reconciliation, the platform tracks promotions, monitors performance, flags conflicts, and handles the post-event analysis. What used to take weeks happens in minutes.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            <strong>Data foundations, not dashboards.</strong> A proper data warehouse where internal and external data can be joined cleanly. Where your commercial process meetings have reliable, consistent data. Where building a dashboard is trivial because the hard part—the data quality—is already solved.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            <strong>95% automation doesn't mean zero human oversight.</strong> It means your commercial team spends their day making decisions, not preparing data. It means your Monday morning meeting starts with insights, not "let me check the numbers and get back to you." It means your best analysts are analyzing, not copy-pasting.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            And because it can be deployed behind your firewall, you maintain complete control over your data. No concerns about leakage or privacy.
          </p>

          <h2 className="text-3xl font-bold text-[#0F1B2D] mt-12 mb-4">How I'm Building It</h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            This isn't vaporware or a theoretical framework. I'm building this platform through real client engagements, one proven module at a time.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Every project I take on now serves two purposes: it solves an immediate problem for the client, and it adds a validated, reusable component to the platform. When I build a retailer data integration for one client, that module becomes part of the core platform. When I solve master data mapping for another, that capability is captured and made reusable.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            My current clients are essentially design partners. They're working with real data, real business problems, and real constraints. If a solution doesn't work in production, I know immediately. If the automation breaks under real-world conditions, we fix it together.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            This approach has a major advantage: <strong>every component is battle-tested before it becomes part of the platform.</strong> I'm not building features based on what I think CPG brands need. I'm building based on what they're actually using and relying on every day.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            It also means the platform grows with clear priorities. The modules I build first are the ones solving the most common, most painful problems. The edge cases and nice-to-haves come later, if at all.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            This is the opposite of how most software is built. I'm not raising millions, hiring a team, and hoping the market wants what we create. I'm proving the need first, building the solution second, and letting real client value drive every decision.
          </p>

          <h2 className="text-3xl font-bold text-[#0F1B2D] mt-12 mb-4">Who This Is For</h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            This platform is built for mid-market CPG brands and retailers—companies doing $50-500M in revenue who are stuck in no-man's-land.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            You're too big to run everything in spreadsheets effectively. But you're too small to justify the $5M implementation of an enterprise system that requires a full-time IT team to maintain.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            You're competing against giants who have entire departments dedicated to data infrastructure. They have the resources to build custom solutions. They can afford the enterprise licenses. They have teams of data engineers.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            You don't. And you shouldn't have to.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            The giants can build this themselves. My mission is leveling the playing field for everyone else. Your brand shouldn't be at a structural disadvantage just because you don't have Unilever's IT budget.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            If you're a commercial leader who's tired of your team spending 80% of their time on data wrangling and 20% on actual analysis, this is for you. If you're frustrated watching talented analysts do work that should be automated, this is for you. If you know your data problems are solvable but can't afford the enterprise solution, this is for you.
          </p>

          <h2 className="text-3xl font-bold text-[#0F1B2D] mt-12 mb-4">Join the Journey</h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            I'm building this platform in public because I believe the CPG industry needs it—and I want to build it with the people who will use it.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            <strong>If you're ready to solve these problems now</strong>, working with me today means you're getting early access to the platform as it's being built. You'll influence what gets prioritized. You'll shape how features work. And you'll benefit from automation that's custom-fitted to your actual problems.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            <strong>If you want to follow along</strong>, connect with me on LinkedIn. I'm documenting this journey—the wins, the challenges, the lessons learned. You'll see what it actually takes to build a CPG automation platform from the ground up.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            <strong>If you're skeptical</strong>, good. You should be. The industry is full of people promising transformation and delivering PowerPoints. That's why I'm building with real clients solving real problems. Results speak louder than pitches.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            The mid-market CPG space doesn't need another dashboard vendor or another consultant selling reports. It needs infrastructure that works. It needs automation that actually saves time. It needs solutions that level the playing field.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            That's what I'm building. Come along for the ride.
          </p>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-gray-600 italic">
              Jason Contrada | Founder, DataArk Labs | <a href="https://linkedin.com/in/yourprofile" className="text-[#0F1B2D] hover:opacity-80">Connect on LinkedIn</a>
            </p>
          </div>

          <div className="mt-12">
            <Button
              asChild
              className="bg-[#0F1B2D] text-white hover:bg-[#2A3F5F] rounded-full font-semibold"
            >
              <Link href="/#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </article>
    </main>
  )
}
