interface ResumePreviewProps {
    formData: FormData | null;
}

export default function ResumePreview({ formData }: ResumePreviewProps) {
    // Check if formData is empty
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
            .filter(([key]) => key.startsWith(prefix))
            .reduce((acc: { [key: string]: string[] }, [key, value]) => {
                const fieldName = key.split('_')[0];
                if (!acc[fieldName]) {
                    acc[fieldName] = [];
                }
                acc[fieldName].push(value.toString());
                return acc;
            }, {});
    };

    // Find out what the current formData is
    console.log("Resume Preview formData", formData);

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm min-h-[500px]">
            {Object.entries(sections).map(([sectionKey, section]) => {
                const entries = getFieldEntries(sectionKey);
                if (Object.keys(entries).length === 0) return null;

                return (
                    <div key={sectionKey} className="mb-6">
                        <h3 className="text-lg font-semibold text-orange-500 mb-2">{section.title}</h3>
                        <div className="pl-4 border-l-2 border-orange-200">
                            {Object.entries(entries).map(([fieldName, values]) => (
                                <div key={fieldName} className="mb-2">
                                    <span className="font-medium">{fieldName}: </span>
                                    {values.map((value, index) => (
                                        <span key={index} className="text-gray-700">
                                            {value}
                                            {index < values.length - 1 ? ', ' : ''}
                                        </span>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
} 