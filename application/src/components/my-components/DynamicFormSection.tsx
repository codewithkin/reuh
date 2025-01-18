"use client";
import { Plus, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

interface Field {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  helpText?: string;
  min?: number;
  max?: number;
}

interface DynamicFormSectionProps {
  title: string;
  fields: Field[];
  numberKey: string;
  onFieldChange?: (data: { [key: string]: string }) => void;
}

export default function DynamicFormSection({
  title,
  fields,
  numberKey,
  onFieldChange,
}: DynamicFormSectionProps) {
  const [items, setItems] = useState<Array<{ [key: string]: number }>>([]);
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

  const handleAddNew = () => {
    setItems([
      ...items,
      {
        [numberKey]: items.length + 1,
      },
    ]);
  };

  const handleDelete = (itemNumber: number) => {
    const newItems = items.filter((item) => item[numberKey] !== itemNumber);
    setItems(newItems);

    // Clean up form values for deleted item
    const newFormValues = { ...formValues };
    fields.forEach((field) => {
      delete newFormValues[`${field.name}_${itemNumber}`];
    });
    setFormValues(newFormValues);
    onFieldChange?.(newFormValues);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newValues = {
      ...formValues,
      [name]: value,
    };
    setFormValues(newValues);
    onFieldChange?.(newValues);
    console.log("Section Values:", newValues); // Debug log
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    const newValues = {
      ...formValues,
      [name]: checked ? "true" : "false",
    };
    setFormValues(newValues);
    onFieldChange?.(newValues);
  };

  return (
    <article>
      <article className="flex justify-between items-center">
        <h3 className="text-dullDark">Add {title}</h3>
        <Button
          onClick={handleAddNew}
          size="icon"
          type="button"
          className="transition duration-300 bg-gradient-to-r from-orange-500 to-orange-700 hover:from-purple-400 hover:to-blue-600"
        >
          <Plus size={20} />
        </Button>
      </article>

      {items.length > 0 ? (
        items.map((item) => (
          <article key={item[numberKey]} className="px-8 flex flex-col gap-4 py-2">
            {fields.map((field) => (
              <article key={field.name} className="flex gap-2 flex-col">
                {field.type === "checkbox" ? (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`${field.name}_${item[numberKey]}`}
                      name={`${field.name}_${item[numberKey]}`}
                      className="border-orange-500 data-[state=checked]:bg-orange-500"
                      onCheckedChange={(checked) => {
                        handleCheckboxChange(
                          `${field.name}_${item[numberKey]}`,
                          checked as boolean
                        );
                      }}
                    />
                    <Label htmlFor={`${field.name}_${item[numberKey]}`}>{field.label}</Label>
                  </div>
                ) : (
                  <>
                    <Label htmlFor={`${field.name}_${item[numberKey]}`}>{field.label}</Label>
                    <Input
                      id={`${field.name}_${item[numberKey]}`}
                      name={`${field.name}_${item[numberKey]}`}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      onChange={handleInputChange}
                      value={formValues[`${field.name}_${item[numberKey]}`] || ""}
                    />
                  </>
                )}
                {field.helpText && <p className="text-dullDark text-xs">{field.helpText}</p>}
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
        ))
      ) : (
        <p className="text-dullDark">No {title.toLowerCase()} yet</p>
      )}
    </article>
  );
}
