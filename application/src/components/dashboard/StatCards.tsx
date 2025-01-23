import { ArrowUp } from "lucide-react";
import Link from "next/link";

interface resource {
  title: string;
  count: number;
  percentage: number;
  color: string;
  link: string;
}

interface StatCardProps {
  resources: resource[];
}

function StatCard({ resource }: { resource: resource }) {
  return (
    <article className="mx-8 md:mx-0 w-full even:bg-primaryLight rounded-2xl p-4 text-white font-semibold bg-dullDark flex flex-col gap-4">
      <h2 className="text-xl">{resource.title}</h2>

      <h3 className="text-4xl">{resource.count}</h3>

      <article className="flex gap-2 justify-center items-center">
        <article
          className={`hover:cursor-pointer transition duration-400 hover:bg-primaryDark flex shadow shadow-xl items-center gap-2 ${resource.color} px-8 py-2 font-semibold rounded-full text-primaryDark text-center justify-center items-center`}
        >
          {resource.percentage}% <ArrowUp />
        </article>
        <Link
          className="bg-primaryDark rounded-full text-white py-2 px-4"
          href={`${resource.link}`}
        >
          Create New
        </Link>
      </article>
    </article>
  );
}

export default function StatCards({ resources }: { resources: resource[] }) {
  return (
    <article className="flex w-full px-4 md:px-0 my-4 flex-col md:flex-row gap-4 items-center">
      {resources.map((resource, index) => (
        <StatCard key={index} resource={resource} />
      ))}
    </article>
  );
}
