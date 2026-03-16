import React from "react";
import { LayoutGrid, Calendar, Clock } from "lucide-react";
const HeroSection = () => {
  return (
    <div>
        <section className="gs-hero">
            {/* left */}
            <div className="gs-hero-left">
              <h1>Master AI Tools & Modern Tech Skills in Just 3 Hours</h1>

              <p>
                Join thousands of developers, creators, and professionals who
                are learning how to leverage AI tools, automation, and modern
                workflows to become 10x more productive and future-ready in the
                AI era.
              </p>
              <div className="gs-badges">
                <div className="gs-badge">
                 <LayoutGrid size={16} /> 3 HOURS
                </div>
                <div className="gs-badge">
                  <Calendar size={16} /> STARTS 16TH MAR
                </div>
                <div className="gs-badge">
                  <Clock size={16} /> 7PM TO 10PM
                </div>
              </div>
              <button className="gs-cta">Claim your spot</button>
            </div>

            {/* right – video thumbnail */}
            <div className="gs-hero-right">
              <div className="gs-thumb">
                <div className="gs-thumb-bg" />
                <div className="gs-thumb-person">🧑‍💻</div>
                <div className="gs-thumb-label">GROWTH SCHOOL</div>
                <button className="gs-play">
                  <svg viewBox="0 0 24 24" fill="#1b3a32">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </button>
              </div>
            </div>
          </section>
    </div>
  )
}

export default HeroSection
