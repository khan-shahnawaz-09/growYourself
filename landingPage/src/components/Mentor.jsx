import React from 'react'

const Mentor = () => {
  return (
    <div>
        <section className="gs-sec">
            <div className="gs-kicker">Your Instructor</div>
            <div className="gs-heading">Learn from the Best</div>
            <div className="gs-mentor">
              <div className="gs-mavatar">👨‍🏫</div>
              <div className="gs-minfo">
                <h3>Vaibhav Sisinty</h3>
                <div className="gs-mrole">
                  Ex-Airbnb · Growth Expert · Educator to 10M+ Professionals
                </div>
                <div className="gs-mtags">
                  {[
                    "🚀 Growth Hacking",
                    "🤖 AI & Automation",
                    "📈 Performance Marketing",
                    "💡 Product Thinking",
                  ].map((t) => (
                    <span className="gs-mtag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
    </div>
  )
}

export default Mentor
