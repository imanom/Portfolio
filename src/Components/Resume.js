import React, { Component } from 'react';

function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}

class Resume extends Component {

  groupBy = (data, key) => {
    return data.reduce(function(acc, item) {
      (acc[item[key]] = acc[item[key]] || []).push(item);
      return acc;
    }, {});
  };

 

  render() {

    if(this.props.data){

      var skillmessage = this.props.data.skillmessage;
      
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em>
        {gpa && <span>&bull;</span>} <em className="date">{education.gpa}</em></p>
        <p>{education.description}</p></div>
      })

      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            {/* <p className="newline">{work.description}</p> */}
            <NewlineText text={work.description} className="newline"/><br></br>
        </div>
      })


 
      const data = this.groupBy(this.props.data.skills, 'category');
   
      var skills = Object.keys(data).map(cat => (
        <div className="row">
          <div className="twelve columns">
          <p className="info"><span className="category">{cat}</span>
          {data[cat].map(skill => (
            <em className="date">   <span>&bull;</span> {skill.name}  </em>
          ))}
          </p>
          </div>
        </div>
      ))
      
      // var fskills = this.props.data.skills
      // .filter(skill => skill.category == "Front-end")
      // .map(function(skills){
      //   var className = 'bar-expand '+skills.name.toLowerCase();
      //   //var frontend = skills.find((skill) => skills.category === 'Front-end')
      //   return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      // })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>
         <div className="skill-list">
           {skills}
         </div>

				{/* <div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div> */}
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
