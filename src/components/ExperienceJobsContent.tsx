import { jobs } from "../data/data"

const JobsContent = () => {
    return (
        <ul class={"ml-20 pt-5 border-l-2 border-white/50"}>
            {jobs.map(e => (
                <li class={"relative pb-5"}>
                    <div class={"absolute -left-8.5 top-1 w-16 h-16 flex items-center justify-center rounded-full overflow-hidden bg-white/20 backdrop-blur-xl shadow-lg shadow-white/25  "}>
                        <img
                            src={e.picture}
                            alt="A picture of the developer"
                            id="dev-image"
                        />
                    </div>
                    <div class={"ml-10 flex flex-1 flex-col justify-start gap-1"}>
                        <p class={'text-xs'}>{e.period}</p>
                        <h2 class={'text-m font-bold'}>{e.company}</h2>
                        <p class={"text-xs"}>{e.role}</p>
                        <p class={""}>{e.description} </p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default JobsContent