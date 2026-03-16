import React from 'react'
import { tools } from '../data/tool'

const Tool = () => {
  return (
    <div>
         <section className="gs-sec">
            <div className="gs-kicker">Tools Covered</div>
            <div className="gs-heading">15+ AI Tools You'll Master</div>
            <div className="gs-tools">
              {tools.map((t) => (
                <div className="gs-tool" key={t}>
                  {t}
                </div>
              ))}
            </div>
          </section>
    </div>
  )
}

export default Tool
