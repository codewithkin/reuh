"use client";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import Previousdegree from "./PreviousDegrees";

export default function AddNewPreviousdegree () {
    const [degrees, setdegrees] = useState<Array<{degreeNumber: number}>>([]);

    const handleAddnewdegree = async () => {
        setdegrees([...degrees, {
            degreeNumber: degrees.length + 1
        }])
    }

    return (
        <article>
            <article className="flex justify-between items-center">
                <h3 className="text-dullDark">Add previous degree</h3>

                <Button onClick={handleAddnewdegree} size="icon" className="transition duration-300 bg-gradient-to-r from-orange-500 to-orange-700 hover:from-purple-400 hover:to-blue-600">
                    <Plus size={20} />
                </Button>
            </article>

            {
                degrees.length > 0 ? degrees.map((jb: number) => (
                    <Previousdegree degrees={degrees} updateFunc={setdegrees} degreeNumber={jb} />
                )) :
                <p className="text-dullDark">No degrees added yet</p>
            }
        </article>
    )
}