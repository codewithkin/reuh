import { Dispatch, SetStateAction } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";

export default function PreviousReference ({ReferenceNumber, updateFunc, References}: {ReferenceNumber: {ReferenceNumber: number}, References: Array<{ReferenceNumber: number}>, updateFunc: Dispatch<SetStateAction<{ReferenceNumber: number}>>}) {
    const handleDelete = () => {
        // Remove the last Reference from the array
        const newReferences = References.filter((Reference) => Reference.ReferenceNumber !== ReferenceNumber.ReferenceNumber);
        updateFunc(newReferences);
    }

    return (
        <article className="px-8 flex flex-col gap-4 py-2">
                            <article className="flex gap-2 flex-col">
                                <Label htmlFor="university_college1">University / College</Label>
                                <Input
                                    placeholder="Harvard University"
                                    required
                                    aria-required="true"
                                    name="university_college1"
                                    type="text"
                                />
                            </article>

                            <article className="flex gap-2 flex-col">
                                <Label htmlFor="university_college1_level">Course Level</Label>
                                <Input
                                        placeholder="Bachelors"
                                        name="university_college1_level"
                                        type="text"
                                />
                            </article>

                            <article className="flex gap-2 flex-col">
                                <Label htmlFor="university_college1_start_date">Start Date</Label>
                                <Input
                                        placeholder="12/11/22"
                                        name="university_college1_start_date"
                                        type="date"
                                />
                            </article>

                            <article className="flex gap-2 flex-col">
                                <Label htmlFor="university_college1_end_date">end Date</Label>

                                <Input
                                        placeholder="12/11/22"
                                        name="university_college1_end_date"
                                        type="date"
                                />
                            </article>

                            <article className="flex gap-2 itemx-center">
                                    <p>Still studying here ?</p>

                                    <input
                                        type="checkbox"
                                        name="university_college2_pending"
                                    />
                                </article>

                                <Button onClick={handleDelete} className="bg-red-500 flex gap-2 items-center text-white transition duration-300 hover:bg-red-700">
                                <Trash size={16} />
                                Remove
                            </Button>
                        </article>
    )
}