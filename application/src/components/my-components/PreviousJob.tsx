import { Dispatch, SetStateAction } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";

export default function PreviousJob ({jobNumber, updateFunc, jobs}: {jobNumber: {jobNumber: number}, jobs: Array<{jobNumber: number}>, updateFunc: Dispatch<SetStateAction<{jobNumber: number}>>}) {
    const handleDelete = () => {
        // Remove the last job from the array
        const newJobs = jobs.filter((job) => job.jobNumber !== jobNumber.jobNumber);
        updateFunc(newJobs);
    }

    return (
        <article className="px-8 flex flex-col gap-4 py-2">
                            <article className="flex gap-2 flex-col">
                                <Label htmlFor={`previous_job_${jobNumber}_company`}>Company</Label>
                                <Input
                                    placeholder="Microsoft"
                                    required
                                    aria-required="true"
                                    name={`previous_job_${jobNumber}_company`}
                                    type="text"
                                />
                            </article>

                            <article className="flex gap-2 flex-col">
                                <Label htmlFor={`previous_job_${jobNumber}_position`}>Position</Label>
                                <Input
                                        placeholder="Senior Software Engineer"
                                        name={`previous_job_${jobNumber}_position`}
                                        type="text"
                                />
                            </article>

                            <article className="flex gap-2 flex-col">
                                <Label htmlFor={`previous_job_${jobNumber}_start_date`}>Start Date</Label>
                                <Input
                                        placeholder="12/11/22"
                                        name={`previous_job_${jobNumber}_start_date`}
                                        type="date"
                                />
                            </article>

                            <article className="flex gap-2 flex-col">
                                <Label htmlFor={`previous_job_${jobNumber}_end_date`}>end Date</Label>

                                <Input
                                        placeholder="12/11/22"
                                        name={`previous_job_${jobNumber}_end_date`}
                                        type="date"
                                />
                                <p className="text-dullDark text-xs">Leave blank if you're still working here</p>
                            </article>

                            <article className="flex gap-2 itemx-center">
                                    <p>Still working here ?</p>

                                    <input
                                        type="checkbox"
                                        name={`previous_job_${jobNumber}_pending`}
                                    />
                            </article>
                            <Button type="button" onClick={handleDelete} className="bg-red-500 flex gap-2 items-center text-white transition duration-300 hover:bg-red-700">
                                <Trash size={16} />
                                Remove
                            </Button>
        </article>
    )
}