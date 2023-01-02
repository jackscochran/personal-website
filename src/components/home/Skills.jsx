import projects from '../../data/projects.json'

const Skills = () => {

    const style = {
        header: {
            textAlign: 'left',
        },
        body:{
            marginLeft: '10px',
            marginRight: '10px',
        }
    }

    function getSkills(){
        let skills = []
        projects.forEach(project => {
            project.technologies.forEach(tech => {
                if(!skills.includes(tech)){
                    skills.push(tech)
                }
            })
        })
        return skills
    }

    return (
        <div className="col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 responsive-margin ">
            <div style={style.body} >
                <h3 style={style.header}>Skills include but are not limited to:</h3>
                {getSkills().map((skill, index) => 
                    (
                        <div className="tag" key={index}>{skill}</div>
                    )
                )
                }
            </div>
        </div>
    )
}

export default Skills
