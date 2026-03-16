import React from 'react'
import { curriculum } from '../data/curriculum'

const Curriculam = () => {
  return (
    <div>
         <section className="gs-sec">
            <div className="gs-kicker">Curriculum</div>
            <div className="gs-heading">What You'll Learn in 3 Hours</div>
            <p className="gs-sub">
              Practical, hands-on sessions you can apply from day one.
            </p>
            <div className="gs-curr">
              {curriculum.map((c) => (
                <div className="gs-ccard" key={c.title}>
                  <div className="gs-cnum">{c.n}</div>
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                  <span className="gs-ctag">{c.tag}</span>
                </div>
              ))}
            </div>
          </section>
    </div>
  )
}

export default Curriculam
