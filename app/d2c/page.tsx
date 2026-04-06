import Image from 'next/image'
import Link from 'next/link'
import './d2c.css'

export default function Home() {
  return (
    <div className="page">

      {/* NAV */}
      <nav className="navbar">
        <div className="logo">
          <Image src="/image/logo1.png" alt="SuperManager AGI Symbol" className="logo-symbol" width={36} height={36} />
          <Image src="/image/logo.png" alt="SuperManager AGI Logo" className="logo-text" width={160} height={50} style={{ height: '50px', width: 'auto' }} />
        </div>
        <span className="nav-badge">AI Super Autonomous Agent</span>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-bg"></div>
        <div className="hero-inner">
          <div className="hero-chip">
            <span className="chip-dot"></span>
            AI Super Autonomous Agent
          </div>
          <h1>One AI that runs<br />your <em>entire business.</em><br />Just ask.</h1>
          <p className="hero-sub">
            Connect every app you use — shipping, payments, WhatsApp, email, store, analytics.
            Tell SuperManager AGI what you need. It gets it done.
          </p>
          <div className="metrics">
            <div className="metric">
              <div className="metric-n">↓60%</div>
              <div className="metric-l">RTO Reduction</div>
            </div>
            <div className="metric">
              <div className="metric-n">+25%</div>
              <div className="metric-l">Prepaid Lift</div>
            </div>
            <div className="metric">
              <div className="metric-n">10×</div>
              <div className="metric-l">Ops Efficiency</div>
            </div>
            <div className="metric">
              <div className="metric-n">90 Days</div>
              <div className="metric-l">To Results</div>
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section>
        <div className="sec-chip">How It Works</div>
        <h2 className="sec-title">Connect. Prompt. <em>Done.</em></h2>
        <p className="sec-desc">SuperManager sits on top of your existing tools and lets one AI run everything — in plain language.</p>
        <div className="steps">
          <div className="step">
            <div className="step-num">01</div>
            <h3>Connect Your Apps</h3>
            <p>One-click integrations with Shiprocket, Delhivery, Razorpay, WhatsApp, email, Meta Ads, Shopify, and more. Your stack — now AI-powered.</p>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <h3>Type What You Need</h3>
            <p>Talk to SuperManager like a team member. &quot;Send delivery updates to delayed orders.&quot; &quot;Show me today&apos;s profit per SKU.&quot; It understands everything.</p>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <h3>AGI Executes It</h3>
            <p>SuperManager reads your live data, makes decisions, and runs workflows across all your tools at once. You get results, not tasks.</p>
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN DO */}
      <section>
        <div className="sec-chip">What You Can Do</div>
        <h2 className="sec-title">One AI. <em>Every job.</em></h2>
        <p className="sec-desc">From logistics to campaigns — all from a single prompt. No dashboards. No manual ops. No switching tabs.</p>
        <div className="use-grid">
          <div className="use-card">
            <div className="use-card-top">
              <div className="use-icon">📦</div>
              <h3>Order &amp; Delivery</h3>
            </div>
            <p>Auto-create shipments, pick the best courier, sync real-time tracking, and fix failed deliveries — all hands-free.</p>
            <div className="prompt">Show all orders stuck 3+ days and message customers</div>
          </div>
          <div className="use-card">
            <div className="use-card-top">
              <div className="use-icon">💳</div>
              <h3>Payments &amp; COD</h3>
            </div>
            <p>Score COD orders, nudge customers to prepay with Razorpay links, and block risky orders before they ship.</p>
            <div className="prompt">List high-risk COD orders above ₹3,000 with RTO history</div>
          </div>
          <div className="use-card">
            <div className="use-card-top">
              <div className="use-icon">📣</div>
              <h3>Marketing &amp; CRM</h3>
            </div>
            <p>Launch WhatsApp, email, and Meta Ads campaigns in seconds. AGI writes the copy, picks the channel, and fires it — all from one prompt.</p>
            <div className="prompt">Create a replenishment campaign for shampoo buyers</div>
          </div>
          <div className="use-card">
            <div className="use-card-top">
              <div className="use-icon">📊</div>
              <h3>Analytics &amp; Reports</h3>
            </div>
            <p>Ask anything in plain English. Revenue by courier, margin by SKU, RTO by pincode — instant charts, no analyst needed.</p>
            <div className="prompt">What&apos;s my real margin after returns and shipping?</div>
          </div>
          <div className="use-card">
            <div className="use-card-top">
              <div className="use-icon">↩️</div>
              <h3>Returns &amp; Refunds</h3>
            </div>
            <p>Automate return requests, reverse pickups, and Razorpay refunds. The entire post-return flow, handled automatically.</p>
            <div className="prompt">Initiate refunds for all returns received today</div>
          </div>
          <div className="use-card">
            <div className="use-card-top">
              <div className="use-icon">🧾</div>
              <h3>Finance &amp; GST</h3>
            </div>
            <p>Generate GST summaries, reconcile settlements, and get real profitability per order — fully automated every month.</p>
            <div className="prompt">Generate my GST summary combining Razorpay + shipping</div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section>
        <div className="sec-chip">Integrations</div>
        <h2 className="sec-title">Plugs into everything<br /><em>you already use.</em></h2>
        <p className="sec-desc">No replacing tools. No rebuilding workflows. And if you need a custom integration — we build it <strong>within 24 hours.</strong></p>
        <div className="int-grid">
          <div className="int-pill">🚚 Shiprocket</div>
          <div className="int-pill">🚛 Delhivery</div>
          <div className="int-pill">💳 Razorpay</div>
          <div className="int-pill">💬 WhatsApp Business</div>
          <div className="int-pill">📧 Email / Klaviyo</div>
          <div className="int-pill">🛍️ Shopify</div>
          <div className="int-pill">🛒 WooCommerce</div>
          <div className="int-pill">📘 Meta Ads</div>
          <div className="int-pill">📊 Google Analytics</div>
          <div className="int-pill">🤖 AI Agents &amp; Tools</div>
          <div className="int-pill">🗂️ Your CRM</div>
          <div className="int-pill int-special">⚡ Need something else? 24hr integration →</div>
        </div>
      </section>

      {/* BRANDS / TESTIMONIALS */}
      <section className="brands">
        <div className="container">
          <p className="tag">TRUSTED BY D2C BRANDS</p>
          <h2>Brands that <span>run on SuperManager.</span></h2>
          <p className="subtitle">
            From fashion to wellness — founders across India are using
            SuperManager AGI to automate operations and grow faster.
          </p>

          {/* BIG TESTIMONIAL */}
          <div className="testimonial big">
            <div className="stars">★★★★★</div>
            <p className="review">
              &quot;SuperManager completely changed the way we run operations at VedicVaibhav.
              Earlier our team spent hours tracking shipments, identifying COD risks and
              sending customer updates. Now everything happens automatically before we
              even start the day. Within the first month we saw a noticeable drop in RTO.
              Honestly, we can&apos;t imagine going back to the old way.&quot;
            </p>
            <div className="author">
              <div className="avatar">JS</div>
              <div>
                <h4>Jatin Saini</h4>
                <p>Founder, VedicVaibhav</p>
              </div>
              <span className="badge">VedicVaibhav</span>
            </div>
          </div>

          {/* TESTIMONIAL GRID */}
          <div className="grid">
            <div className="testimonial">
              <div className="stars">★★★★☆</div>
              <p className="review">
                &quot;We were drowning in Shiprocket NDRs and manual WhatsApp follow-ups
                every day. SuperManager took all of that off our plate and now our
                team focuses on actually growing the business.&quot;
              </p>
              <div className="author">
                <div className="avatar">RK</div>
                <div>
                  <h4>Rahul Khandelwal</h4>
                  <p>Co-Founder, Fashion D2C · Jaipur</p>
                </div>
                <span className="badge">Fashion D2C</span>
              </div>
            </div>

            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <p className="review">
                &quot;The analytics alone make SuperManager worth it.
                I simply type what I want to know and get the answer in seconds.&quot;
              </p>
              <div className="author">
                <div className="avatar">PA</div>
                <div>
                  <h4>Priya Agarwal</h4>
                  <p>CEO, Grooming &amp; Personal Care</p>
                </div>
                <span className="badge">Grooming D2C</span>
              </div>
            </div>

            <div className="testimonial">
              <div className="stars">★★★★☆</div>
              <p className="review">
                &quot;Setup was surprisingly fast — Razorpay and WhatsApp were connected
                in under an hour. In week one alone SuperManager flagged
                40+ risky COD orders.&quot;
              </p>
              <div className="author">
                <div className="avatar">AM</div>
                <div>
                  <h4>Arjun Mehta</h4>
                  <p>Head of Operations, Home &amp; kitchen</p>
                </div>
                <span className="badge">Home D2C</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXAMPLE PROMPTS */}
      <section>
        <div className="sec-chip">Real Prompts. Real Results.</div>
        <h2 className="sec-title">Just ask.<br /><em>SuperManager handles the rest.</em></h2>
        <p className="sec-desc">Type a prompt. SuperManager reads your live data, acts across all your tools, and reports back.</p>
        <div className="prompt-list">
          <div className="prompt-row">
            <div className="prompt-arrow">▸</div>
            <span>&quot;Every morning at 9am, send me revenue, RTO%, COD%, and delayed orders by courier&quot;</span>
          </div>
          <div className="prompt-row">
            <div className="prompt-arrow">▸</div>
            <span>&quot;Reduce my COD RTO by 30% in the next 90 days&quot;</span>
          </div>
          <div className="prompt-row">
            <div className="prompt-arrow">▸</div>
            <span>&quot;Launch a cart recovery campaign for today&apos;s abandoned checkouts on WhatsApp&quot;</span>
          </div>
          <div className="prompt-row">
            <div className="prompt-arrow">▸</div>
            <span>&quot;Tell me where I&apos;m losing the most money per order and fix it&quot;</span>
          </div>
          <div className="prompt-row">
            <div className="prompt-arrow">▸</div>
            <span>&quot;Show me top 20 pincodes with highest RTO last month and suggest fixes&quot;</span>
          </div>
          <div className="prompt-row">
            <div className="prompt-arrow">▸</div>
            <span>&quot;Run a Meta Ads + WhatsApp winback campaign for customers inactive 60+ days&quot;</span>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="quote-section">
        <div className="sec-chip">Our Mission</div>
        <p className="big-quote">
          &quot;Instead of 10 dashboards and 5 ops people —<br />
          founders just <em>prompt their business forward.</em><br />
          SuperManager orchestrates everything else.&quot;
        </p>
        <p className="quote-attr">SuperManager AGI</p>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="sec-chip">Get Started</div>
        <h2 className="sec-title">Ready to run your business<br />on <em>one AI?</em></h2>
        <p className="sec-desc">Book a free demo. See SuperManager in action on your actual data. Results in 30 days.</p>
        <div className="cta-btns">
          <Link href="https://calendly.com/nirmalsupermanageragi/60min?back=1&month=2026-03" className="btn-primary">
            Book a Free Demo →
          </Link>
          <Link href="mailto:support@supermanager.co" className="btn-outline">
            support@supermanager.co
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="f-logo">
          <Image src="/image/logo1.png" alt="SuperManager AGI Logo" className="footer-logo" width={28} height={28} style={{ height: '28px', width: 'auto' }} />
          <span>SuperManager AGI</span>
        </div>
        <div className="f-links">
          <Link href="https://supermanager.co">supermanager.co</Link>
          <Link href="mailto:support@supermanager.co">support@supermanager.co</Link>
          <Link href="tel:+919814343430">📞 +91 98143 43430</Link>
        </div>
        <div className="f-right">© 2026 SuperManager AGI</div>
      </footer>

    </div>
  )
}
