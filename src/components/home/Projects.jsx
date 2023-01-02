import Project from './Project.jsx'
import projects from '../../data/projects.json'

const Projects = () => {

    const style = {
        projects: {
            textAlign: 'left',
            marginLeft: '10px',
            marginRight: '10px',
        },
        sectionTitle: {
            marginBottom: '40px',
        }
    }

    return (
        <div style={style.projects}>
            <div style={style.sectionTitle} className="col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <h1 className="primary-blue">Projects</h1>
            </div>
            <div className="col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <h2>2022</h2>
                <hr/>
                <div className="row" style={style.sectionTitle}>
                    {projects.filter(project => project.yearCreated === 2022).map((project, index) => {
                        return(
                            <Project {...project}/>
                        )
                    })}
                </div>

                <h2>2021</h2>
                <hr/>
                <div className="row" style={style.sectionTitle}>
                {projects.filter(project => project.yearCreated === 2021).map((project, index) => {
                        return(
                            <Project {...project}/>
                        )
                    })}
                </div>

                <h2>2020</h2>
                <hr/>
                <div className="row" style={style.sectionTitle} >
                {projects.filter(project => project.yearCreated === 2020).map((project, index) => {
                        return(
                            <Project {...project}/>
                        )
                    })}
                </div>
            </div>
        </div>    
    )
}

export default Projects