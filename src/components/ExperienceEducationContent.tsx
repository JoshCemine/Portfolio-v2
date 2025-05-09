import { education } from "../data/data.ts";
import DynamicImage from "./DynamicImage.astro";



const EducationContent = () => {
    return (
        <ul class={"ml-20 pt-5 border-l-2 border-white/50"}>
            {education.map(e => (
                <li class={"relative pb-5"}>
                    <div class={"absolute -left-8.5 top-1 w-16 h-16 flex items-center justify-center rounded-full overflow-hidden bg-white/20 backdrop-blur-xl shadow-lg shadow-white/25  "}>
                        <img
                            src={e.picture}
                            loading={"lazy"}
                            alt={`${e.institution} Logo`}
                        />
                    </div>
                    <div class={"ml-10 flex flex-1 flex-col justify-start gap-1"}>
                        <p class={'text-xs'}>{e.period}</p>
                        <h2 class={'text-m font-bold'}>{e.institution}</h2>
                        <p class={"text-xs"}>{e.degree}</p>
                        <ul class={"list-disc pl-6"}>
                            {e.achievements.map(item => <li>{item}</li>)}
                        </ul>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default EducationContent