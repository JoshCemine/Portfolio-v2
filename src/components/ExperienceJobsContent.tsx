import { jobs } from "../data/data"

const JobsContent = () => {
    return (
        <ul class={"ml-20 pt-5 border-l-2 border-white/50 pr-10"}>
            {jobs.map(e => (
                <li class={"relative pb-5"}>
                    <div class={"absolute -left-8.25 top-1 w-16 h-16 flex items-center justify-center rounded-full overflow-hidden bg-black/20 backdrop-blur-xl shadow-lg shadow-white/25  "}>
                        <div >
                            <img
                                src={e.picture}
                                loading={"lazy"}
                                alt={`${e.company} Logo`}
                            />
                        </div>
                    </div>
                    <div class={"ml-10 flex flex-1 flex-col justify-start gap-1"}>
                        <p class={'text-xs'}>{e.period}</p>
                        <h2 class={'text-m font-bold'}>{e.company}</h2>
                        <p class={"text-xs"}>{e.role}</p>
                        <p >{e.description} </p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default JobsContent