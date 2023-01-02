import {GoLinkExternal} from 'react-icons/go'
import resume from '../../documents/resume.pdf'

const Resume = () => {

    function onResumeClick() {
        window.open(resume);
      }

    return (
        <span onClick={onResumeClick} className="fancy-link"><GoLinkExternal/> Resume</span>
    )

}

export default Resume