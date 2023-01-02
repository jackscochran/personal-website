import {BsCode} from 'react-icons/bs'
import {GoLinkExternal} from 'react-icons/go'


const Project = (project) => {

    const style = {
        column: {
            margin: "20px 0px"
        },
        project: {
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
            padding: '20px',
            borderRadius: '5px',
        },
        title: {
            marginTop: '15px',
            marginBottom: '10px',
        },
        description: {
            marginTop: '15px'
        },
        imgContainer: {
            height: '150px',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px'
        },
        img: {
            width: '300px',
        }
    }

    return (
        <div className={project.size} style={style.column}>
            <div style={style.project}>
                <div style={style.imgContainer}><img style={style.img} src={project.img} alt={project.name} /></div>
                <h5><small>{project.seasonCreated + " " + project.yearCreated}</small></h5>
                <hr/>
                <h3 style={style.title} className="">{project.name}</h3>
                <div className="wrapper">
                    {
                        project.technologies.map((tech, index) => {
                            return (
                                <div className="tag" key={index}>{tech}</div>
                            )
                        }
                    )}
                </div>
                <p style={style.description}>{project.description}</p>
                {project.github && <a href={project.github} target="_blank" className="fancy-link"><BsCode/> Code</a>}
                {project.link && <a href={project.link} target="_blank" className="fancy-link"><GoLinkExternal/> Demo</a>}
            </div>
        </div>
    )
}

export default Project