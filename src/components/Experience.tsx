import { useState } from "preact/hooks";
import JobsContent from "./ExperienceJobsContent";
import EducationContent from "./ExperienceEducationContent";

export default function Experience() {
    const [isJobsTabActive, setJobsTabActive] = useState(true)
    return (
        <div class="flex  items-center justify-center flex-col p-15 m-20">
            <div class={'w-full  sm:bg-blue-900 md:w-full md:bg-red-600 lg:w-[50em] lg:bg-green-700'}>
                {/* <!-- HEADER SECTION --> */}
                <div class="border-4 rounded-t-lg border-black flex justify-evenly mb-2 bg-white font-bold">
                    {/* <!-- JOBS TAB --> */}
                    <div
                        className={`cursor-pointer flex justify-center w-1/2 ${isJobsTabActive ? 'experience-tab-active' : ''}`}
                        onClick={() => setJobsTabActive(true)}
                    >
                        <p className={`align-middle ${isJobsTabActive ? 'text-white' : 'text-black'}`}>JOBS</p>
                    </div>
                    {/* <!-- EDUCATION TAB --> */}
                    <div
                        className={`cursor-pointer flex justify-center w-1/2 ${isJobsTabActive ? '' : 'experience-tab-active'}`}
                        onClick={() => setJobsTabActive(false)}
                    >
                        <span className={`${isJobsTabActive ? 'text-black' : 'text-white'}`}>EDUCATION</span>
                    </div>
                </div>

                {/* <!-- CONTENT SECTION --> */}
                <div class="border-4 rounded-b-lg border-black">
                    {isJobsTabActive ? <JobsContent /> : <EducationContent />}
                </div>
            </div>
        </div>
    );
}