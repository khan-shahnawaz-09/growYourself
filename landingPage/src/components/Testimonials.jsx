import React from 'react'
import { testimonials } from '../data/testimonials'

const Testimonials = () => {
  return (
    <div>
       <section className="gs-sec">
            <div className="gs-kicker">Reviews</div>
            <div className="gs-heading">What Learners Are Saying</div>
            <p className="gs-sub">
              12,000+ verified reviews across LinkedIn, Google & Trustpilot.
            </p>
            <div className="gs-tgrid">
              {testimonials.map((t) => (
                <div className="gs-tcard" key={t.name}>
                  <div className="gs-tstars">★★★★★</div>
                  <p>{t.q}</p>
                  <div className="gs-tauthor">
                    <div className="gs-tav">{t.av}</div>
                    <div>
                      <div className="gs-tname">{t.name}</div>
                      <div className="gs-trole">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
    </div>
  )
}

export default Testimonials
