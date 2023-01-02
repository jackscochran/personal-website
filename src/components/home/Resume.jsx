import {GoLinkExternal} from 'react-icons/go'
import resume from '../../documents/resume.pdf'

const Resume = () => {

    function onResumeClick() {
        window.open(resume);
      }

    return (
        <a onClick={onResumeClick} className="fancy-link"><GoLinkExternal/> Resume</a>
    )

}

export default Resume