import React from 'react'

const StatsSection = () => {
  return (
    <div>
              <div className="gs-stats">
            <div className="gs-stat s-beige">
              <div className="gs-stat-in">
                <h2>
                  10M+
                  <br />
                  <span style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                    Learners
                  </span>
                </h2>
                <p>have reaped benefits from our programs</p>
              </div>
            </div>
            <div className="gs-stat s-white">
              <div className="gs-stat-in gs-review-stack">
                <div className="gs-pill-row">
                  <div className="gs-pill">
                    <span className="gs-dot navy" />
                    LinkedIn
                  </div>
                  <div className="gs-pill">
                    <span className="gs-dot teal" />
                    Trustpilot
                  </div>
                </div>
                <div className="gs-pill-row">
                  <div className="gs-pill">
                    <span className="gs-dot blue" />
                    Google Reviews
                  </div>
                </div>
                <div>
                  <div className="gs-stars-g">★★★★★</div>
                  <div className="gs-rcount">4.8 · 12,000+ reviews</div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default StatsSection
