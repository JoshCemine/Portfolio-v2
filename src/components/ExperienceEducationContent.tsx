import { jobs } from "../data/data"
const EducationContent = () => {

    return (
        <ul>
            {jobs.map(job => (
                <div>
                    <img
                        src={job.picture}
                        alt="A picture of the developer"
                        id="dev-image"
                    />
                    <span>{job.role}</span>
                    <span>{job.company}</span>
                    <span>{job.period}</span>
                </div>
            ))}
        </ul>
    )
}

export default EducationContent