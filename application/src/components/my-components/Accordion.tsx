"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ReactNode, useState } from "react";

export default function Accordion({
  children,
  title,
  icon,
  className,
}: {
  children: ReactNode;
  title: string;
  icon?: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <article className={`flex flex-col p-4 rounded-xl border border-dullDark ${className}`}>
      <article className="flex justify-between items-center">
        <article className="flex gap-2">
          <article className="w-8 h-8 rounded-md flex justify-center items-center border border-dullDark text-dullDark">
            {icon}
          </article>
          <h2 className="text-md text-dullDark font-semibold mb-2">{title}</h2>
        </article>

        {/* Open / Close Chevron */}
        {open ? (
          <ChevronUp className="text-dullDark" onClick={() => setOpen(!open)} size={16} />
        ) : (
          <ChevronDown className="text-dullDark" onClick={() => setOpen(!open)} size={16} />
        )}
      </article>

      {open && children}
    </article>
  );
}
