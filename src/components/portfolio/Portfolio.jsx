import React from 'react'
import Portfolio01 from '../../assets/portfolio-01.jpg'
import Portfolio02 from '../../assets/portfolio-02.jpg'
import Portfolio03 from '../../assets/portfolio-03.jpg'
import Portfolio04 from '../../assets/portfolio-04.jpg'
import Portfolio05 from '../../assets/portfolio-05.jpg'
import Portfolio06 from '../../assets/portfolio-06.jpg'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__img">
            <img src={Portfolio01} alt="portfolio_01" />
          </div>
            <h3>3 Component Card Section - ReactJS</h3>
            <div className="portfolio__item-cta">
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="https://3-component-card.netlify.app/" className='btn btn-primary' target='_blank'>Preview</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__img">
            <img src={Portfolio02} alt="portfolio_02" />
          </div>
            <h3>Huddle Landing Page - ReactJS</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/ShakilAnsary9/huddle-landing-page" className='btn' target='_blank'>Github</a>
            <a href="https://huddle-landing-page-sh.netlify.app/" className='btn btn-primary' target='_blank'>Preview</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__img">
            <img src={Portfolio03} alt="portfolio_03" />
          </div>
            <h3>Four Card Feature - ReactJS</h3>
            <div className="portfolio__item-cta">
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="https://four-card-feature-sh.netlify.app/" className='btn btn-primary' target='_blank'>Preview</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__img">
            <img src={Portfolio04} alt="portfolio_04" />
          </div>
            <h3>Social Proof Landing Page - ReactJS</h3>
            <div className="portfolio__item-cta">
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="https://social-proof-sh.netlify.app/" className='btn btn-primary' target='_blank'>Preview</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__img">
            <img src={Portfolio05} alt="portfolio_04" />
          </div>
            <h3>Statics Preview - ReactJS</h3>
            <div className="portfolio__item-cta">
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="https://stats-preview-sa.netlify.app/" className='btn btn-primary' target='_blank'>Preview</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__img">
            <img src={Portfolio06} alt="portfolio_04" />
          </div>
            <h3>QR Code Component - ReactJS</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/ShakilAnsary9/qr-code-component-frontend-mentor" className='btn' target='_blank'>Github</a>
            <a href="https://qr-code-component-sh.netlify.app/" className='btn btn-primary' target='_blank'>Preview</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio