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
                        <h3 class={'text-m font-bold'}>{e.company}</h3>
                        <p class={"text-xs"}>{e.role}</p>

                        {e.bullets && (
                            <ul class={"list-disc pl-6"}>
                                {e.bullets.map(bullet => <li>{bullet}</li>)}
                            </ul>
                        )}

                        {e.subsections && e.subsections.map(sub => (
                            <div class={"pt-2"}>
                                <p class={"font-semibold"}>{sub.title}</p>
                                <p class={"text-xs text-white/60"}>{sub.role}</p>
                                <ul class={"list-disc pl-6"}>
                                    {sub.bullets.map(bullet => <li>{bullet}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default JobsContent