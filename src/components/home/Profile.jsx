import {BsGithub, BsLinkedin} from 'react-icons/bs'
import Resume from './Resume'

const Profile = () => {

    const style = {
        profile: {
            padding: '50px 0',
            textAlign: 'left',
            marginLeft: 0,
            marginRight: 0
        },
        headshot: {
            overflow: 'hidden',
            borderRadius: '5%',
            marginBottom: '50px'
        },
        bigText: {
            fontSize: '20px',
            fontWeight: 'bold'
        }
    }

    return (
        <div style={style.profile} className="row">
            <div className="col-sm-6 offset-sm-3 col-lg-4 offset-lg-2">
                <div style={style.headshot}>
                    <img className="image" src="images/headshot3.jpg" alt="Jack Cochran" />
                </div>
            </div>
            <div className="col-sm-12 col-md-10 offset-md-1 col-lg-4 offset-lg-0">
                <h4 className="">It's nice to meet you,</h4>
                <p>I am a software engineering and business administration student with experience in web development, database management, machine learning, and data analytics amoungst others.</p>
                <p><span className="primary-blue" style={style.bigText} >I am currently looking for oppurtunities to grow as a developer and software engineer</span></p>
                <p>I am skilled in a variety of programming languages and technologies and am motivated to deliver my best work. I am excited to continue learning as a software developer and to use my skills to create innovative solutions.</p>
                <Resume/>
                <a href="https://github.com/jackscochran" target="_blank"><BsGithub className="icon"/></a>
                <a href="https://www.linkedin.com/in/jackscochran/" target="_blank"><BsLinkedin className="icon"/></a>
            </div>
        </div>
    )

}

export default Profile