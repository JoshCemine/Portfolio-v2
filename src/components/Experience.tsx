import { useState } from "preact/hooks";
import JobsContent from "./ExperienceJobsContent";
import EducationContent from "./ExperienceEducationContent";

export default function Experience() {
    const [isJobsTabActive, setJobsTabActive] = useState(true)
    return (
        <div id={"experience-container"} className={"section-container"}>
            <h1 className={"section-header"}>EXPERIENCE</h1>
            <div className={"flex  items-center justify-center flex-col "}>
                <div className={'w-full '}>
                    {/* <!-- HEADER SECTION --> */}
                    <div className="rounded-t-lg gborder-black glass-black flex justify-evenly mb-2 font-bold relative">
                        {/* SLIDING INDICATOR */}
                        <div
                            className={`absolute bottom-0 h-1 bg-white/80 transition-all duration-200 ease-in-out ${isJobsTabActive ? 'left-0 w-1/2' : 'left-1/2 w-1/2'}`}
                        ></div>

                        {/* JOBS TAB */}
                        <div
                            className={`cursor-pointer flex justify-center w-1/2 rounded-tl-lg py-2 z-10 transition-colors duration-200 hover:bg-white/25 ${isJobsTabActive ? 'text-white ' : 'text-white/50 '}`}
                            onClick={() => setJobsTabActive(true)}
                        >
                            <p>JOBS</p>
                        </div>

                        {/* EDUCATION TAB */}
                        <div
                            className={`cursor-pointer flex justify-center w-1/2 rounded-tr-lg py-2 z-10 transition-colors duration-200 hover:bg-white/25 ${isJobsTabActive ? 'text-white/50' : 'text-white'}`}
                            onClick={() => setJobsTabActive(false)}
                        >
                            <span>EDUCATION</span>
                        </div>
                    </div>

                    {/* <!-- CONTENT SECTION --> */}
                    <div className={"rounded-b-lg gborder-white glass-white gshadow text-white  "}>
                        {isJobsTabActive ? <JobsContent /> : <EducationContent />}
                    </div>
                </div>
            </div>
        </div>
    );
}