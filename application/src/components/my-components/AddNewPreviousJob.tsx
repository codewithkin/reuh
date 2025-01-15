"use client";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import PreviousJob from "./PreviousJob";

export default function AddNewPreviousJob () {
    const [jobs, setJobs] = useState<Array<{jobNumber: number}>>([]);

    const handleAddnewJob = async () => {
        setJobs([...jobs, {
            jobNumber: jobs.length + 1
        }])
    }

    return (
        <article>
            <article className="flex justify-between items-center">
                <h3 className="text-dullDark">Add previous job</h3>

                <Button onClick={handleAddnewJob} size="icon" className="transition duration-300 bg-gradient-to-r from-orange-500 to-orange-700 hover:from-purple-400 hover:to-blue-600">
                    <Plus size={20} />
                </Button>
            </article>

            {
                jobs.length > 0 ? jobs.map((jb: number) => (
                    <PreviousJob jobs={jobs} updateFunc={setJobs} jobNumber={jb} />
                )) :
                <p className="text-dullDark">No jobs yet</p>
            }
        </article>
    )
}