"use client";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import PreviousReference from "./PreviousReference";

export default function AddNewPreviousReference () {
    const [References, setReferences] = useState<Array<{ReferenceNumber: number}>>([]);

    const handleAddnewReference = async () => {
        setReferences([...References, {
            ReferenceNumber: References.length + 1
        }])
    }

    return (
        <article>
            <article className="flex justify-between items-center">
                <h3 className="text-dullDark">Add previous Reference</h3>

                <Button onClick={handleAddnewReference} size="icon" className="transition duration-300 bg-gradient-to-r from-orange-500 to-orange-700 hover:from-purple-400 hover:to-blue-600">
                    <Plus size={20} />
                </Button>
            </article>

            {
                References.length > 0 ? References.map((jb: number) => (
                    <PreviousReference References={References} updateFunc={setReferences} ReferenceNumber={jb} />
                )) :
                <p className="text-dullDark">No References yet</p>
            }
        </article>
    )
}