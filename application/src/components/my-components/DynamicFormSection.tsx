"use client";
import { Plus, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface Field {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  helpText?: string;
}

interface DynamicFormSectionProps {
  title: string;
  fields: Field[];
  numberKey: string;
}

export default function DynamicFormSection({ 
  title, 
  fields,
  numberKey 
}: DynamicFormSectionProps) {
    const [items, setItems] = useState<Array<{[key: string]: number}>>([]);
    
    const handleAddNew = () => {
        setItems([...items, {
            [numberKey]: items.length + 1
        }]);
    };

    const handleDelete = (itemNumber: number) => {
        setItems(items.filter(item => item[numberKey] !== itemNumber));
    };

    return (
        <article>
            <article className="flex justify-between items-center">
                <h3 className="text-dullDark">Add {title}</h3>
                <Button 
                    onClick={handleAddNew} 
                    size="icon" 
                    className="transition duration-300 bg-gradient-to-r from-orange-500 to-orange-700 hover:from-purple-400 hover:to-blue-600"
                >
                    <Plus size={20} />
                </Button>
            </article>

            {items.length > 0 ? items.map((item) => (
                <article key={item[numberKey]} className="px-8 flex flex-col gap-4 py-2">
                    {fields.map((field) => (
                        <article key={field.name} className="flex gap-2 flex-col">
                            <Label htmlFor={`${field.name}_${item[numberKey]}`}>{field.label}</Label>
                            <Input
                                id={`${field.name}_${item[numberKey]}`}
                                name={`${field.name}_${item[numberKey]}`}
                                type={field.type}
                                placeholder={field.placeholder}
                                required={field.required}
                                aria-required={field.required}
                            />
                            {field.helpText && (
                                <p className="text-dullDark text-xs">{field.helpText}</p>
                            )}
                        </article>
                    ))}
                    <Button 
                        type="button"
                        onClick={() => handleDelete(item[numberKey])} 
                        className="bg-red-500 flex gap-2 items-center text-white transition duration-300 hover:bg-red-700"
                    >
                        <Trash size={16} />
                        Remove
                    </Button>
                </article>
            )) : (
                <p className="text-dullDark">No {title.toLowerCase()} yet</p>
            )}
        </article>
    );
} 