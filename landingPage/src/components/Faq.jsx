import React, { useState } from 'react'
import { faqs } from '../data/faqs'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <>
      <style>{`
        .gs-faq-section {
          max-width: 720px;
          margin-top: 26px;
        }

        .gs-faq-item {
          border-bottom: 1px solid var(--border);
          overflow: hidden;
        }

        .gs-faq-item:first-child {
          border-top: 1px solid var(--border);
        }

        .gs-faq-trigger {
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          gap: 16px;
          text-align: left;
        }

        .gs-faq-trigger:hover .gs-faq-trigger-text {
          color: var(--green, #22c55e);
        }

        .gs-faq-trigger-text {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 0.97rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1.4;
          user-select: none;
          transition: color 0.2s ease;
        }

        .gs-faq-item.open .gs-faq-trigger-text {
          color: var(--green, #22c55e);
        }

        .gs-faq-icon {
          flex-shrink: 0;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 1.5px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.22s, border-color 0.22s, transform 0.28s cubic-bezier(.34,1.56,.64,1);
          color: var(--muted);
          font-size: 1.1rem;
          line-height: 1;
        }

        .gs-faq-item.open .gs-faq-icon {
          transform: rotate(45deg);
          background: var(--green, #22c55e);
          border-color: var(--green, #22c55e);
          color: #fff;
        }

        .gs-faq-body {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.32s ease;
        }

        .gs-faq-item.open .gs-faq-body {
          grid-template-rows: 1fr;
        }

        .gs-faq-body-inner {
          overflow: hidden;
        }

        .gs-faq-answer {
          font-size: 0.85rem;
          color: var(--muted);
          line-height: 1.75;
          padding-bottom: 20px;
          padding-right: 40px;
          margin: 0;
        }

        .gs-faq-footer {
          margin-top: 40px;
          padding-top: 28px;
          border-top: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .gs-faq-footer-text {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 0.85rem;
          color: var(--muted);
        }

        .gs-faq-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--green, #22c55e);
          background: none;
          border: 1.5px solid var(--green, #22c55e);
          padding: 8px 16px;
          border-radius: 999px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
          letter-spacing: 0.01em;
        }

        .gs-faq-cta:hover {
          background: var(--green, #22c55e);
          color: #fff;
        }
      `}</style>

      <section className="gs-sec">
        <div className="gs-kicker">FAQ</div>
        <div className="gs-heading">Common Questions</div>

        <div className="gs-faq-section">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className={`gs-faq-item${openIndex === i ? ' open' : ''}`}
            >
              <button
                className="gs-faq-trigger"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span className="gs-faq-trigger-text">{f.q}</span>
                <span className="gs-faq-icon">+</span>
              </button>

              <div className="gs-faq-body">
                <div className="gs-faq-body-inner">
                  <p className="gs-faq-answer">{f.a}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="gs-faq-footer">
            <p className="gs-faq-footer-text">Still have questions?</p>
            <a href="mailto:support@yoursite.com" className="gs-faq-cta">
              Contact Support →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Faq