interface ResumePreviewProps {
    formData: FormData | null;
}

export default function ResumePreview({ formData }: ResumePreviewProps) {
    const isEmpty = !formData || Array.from(formData.entries()).length === 0;

    if (isEmpty) {
        return (
            <div className="bg-white p-6 rounded-lg shadow-sm min-h-[500px] flex items-center justify-center">
                <h3 className="text-dullDark text-lg">Please fill in your information</h3>
            </div>
        );
    }

    const sections = {
        personalInfo: {
            title: "Personal Information",
            fields: ["fullName", "email", "phone", "address", "city", "country", "summary", "linkedin", "website"]
        },
        education: {
            title: "Education",
            fields: ["degree", "institution", "fieldOfStudy", "startDate", "endDate", "gpa", "description", "location"]
        },
        experience: {
            title: "Work Experience",
            fields: ["company", "position", "location", "startDate", "endDate", "description", "technologies"]
        },
        skills: {
            title: "Skills",
            fields: ["name", "category", "proficiency"]
        },
        certifications: {
            title: "Certifications",
            fields: ["name", "issuingBody", "issueDate", "expiryDate", "credentialId", "url"]
        },
        references: {
            title: "References",
            fields: ["name", "position", "company", "email", "phone", "relationship"]
        }
    };

    const getFieldEntries = (prefix: string) => {
        return Array.from(formData.entries())
            .filter(([key]) => key.startsWith(`${prefix}_`))
            .reduce((acc: { [key: string]: string[] }, [key, value]) => {
                const fieldName = key.split(`${prefix}_`)[1];
                if (!acc[fieldName]) {
                    acc[fieldName] = [];
                }
                acc[fieldName].push(value.toString());
                return acc;
            }, {});
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm min-h-[500px] space-y-8">
            {Object.entries(sections).map(([sectionKey, section]) => {
                const entries = getFieldEntries(sectionKey);
                if (Object.keys(entries).length === 0) return null;

                return (
                    <div key={sectionKey} className="space-y-6">
                        <h2 className="text-2xl font-bold text-orange-500 border-b-2 border-orange-200 pb-2">
                            {section.title}
                        </h2>
                        <div className="grid gap-6">
                            {Object.entries(entries).map(([fieldName, values]) => (
                                <div key={fieldName} className="flex flex-col gap-2">
                                    <h3 className="text-lg font-semibold text-gray-800 capitalize">
                                        {fieldName.replace(/([A-Z])/g, ' $1').trim()}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 text-gray-600">
                                        {values.map((value, index) => (
                                            <span 
                                                key={index}
                                                className="bg-gray-50 px-3 py-1 rounded-md"
                                            >
                                                {value}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
} 