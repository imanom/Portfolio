import React, { Component } from 'react';
import $ from 'jquery';

class Portfolio extends Component {
  constructor(){
    super()
    this.scroll = this.scroll.bind(this)
  }
  scroll(direction){
      let width_x = $( window ).width();
      let far = width_x/2*direction;
      let pos = $('.project-container').scrollLeft() + far;
      $('.project-container').animate( { scrollLeft: pos }, 1000)
    } our

  render() {

    if(this.props.links)
    {
      var network= this.props.links.social.find(network => network.name==="github")
      var git = 
        <a href={network.url} target="_blank" rel="noopener noreferrer">GITHUB</a>
      
    }
    if(this.props.data){
      var heading = this.props.data.heading;
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                     <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>

        
      })
    }

    return (
      <section id="portfolio">

      <div>
            <h1>{heading} Check out some of my recent projects below. Visit my {git} for more!</h1>
            <div id="portfolio-wrapper">
            <button className="prev" onClick={this.scroll.bind(null,-1)}>&#10094;</button>
            <div className="project-container">
                {projects}
            </div>
            <button className="next" onClick={this.scroll.bind(null,1)}>&#10095;</button>
            </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;