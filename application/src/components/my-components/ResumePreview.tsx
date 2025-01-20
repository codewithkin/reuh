import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";

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
      fields: [
        "fullName",
        "email",
        "phone",
        "address",
        "city",
        "country",
        "summary",
        "linkedin",
        "website",
      ],
    },
    education: {
      title: "Education",
      fields: [
        "degree",
        "institution",
        "fieldOfStudy",
        "startDate",
        "endDate",
        "gpa",
        "description",
        "location",
      ],
    },
    experience: {
      title: "Work Experience",
      fields: [
        "company",
        "position",
        "location",
        "startDate",
        "endDate",
        "description",
        "technologies",
      ],
    },
    skills: {
      title: "Skills",
      fields: ["name", "category", "proficiency"],
    },
    certifications: {
      title: "Certifications",
      fields: ["name", "issuingBody", "issueDate", "expiryDate", "credentialId", "url"],
    },
    references: {
      title: "References",
      fields: ["name", "position", "company", "email", "phone", "relationship"],
    },
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

  const styles = StyleSheet.create({
    page: {
      margin: 5,
      padding: 5,
      flexDirection: "column",
    },
    title: {
      fontSize: 24,
    },
    heading: {
      fontSize: 22,
      color: "#9a9a9a",
      fontWeight: "bold",
    },
    paragraph: {
      fontSize: 14,
    },
    subheading: {
      fontSize: 18,
      fontWeight: "semibold",
      textTransform: "capitalize",
      color: "#008BF8",
    },
    para: {
      fontSize: 12,
      color: "darkGray",
      fontWeight: "semibold",
    },
    section: {
      paddingVertical: 20,
    },
  });

  return (
    <article className="grid gap-2">
      <Card className="bg-white border-double p-6 rounded-none shadow-sm min-h-[500px] space-y-8">
        <Document>
          <Page size="A4" style={styles.page}>
            <p className="text-gray-100 text-xs font-semibold px-4 py-2 bg-gray-600 rounded-full w-fit">
              - Created on https://reuh.pro -
            </p>
            <br />
            {Object.entries(sections).map(([sectionKey, section]) => {
              const entries = getFieldEntries(sectionKey);
              if (Object.keys(entries).length === 0) return null;

              return (
                <View style={styles.section} key={sectionKey}>
                  <Text style={styles.heading}>{section.title}</Text>
                  <div className="grid gap-4">
                    {Object.entries(entries).map(([fieldName, values]) => (
                      <div key={fieldName} className="flex flex-col gap-2">
                        <Text style={styles.subheading}>
                          {fieldName.replace(/([A-Z])/g, " $1").trim()}
                        </Text>
                        <div className="flex flex-wrap gap-2 text-gray-600">
                          {values.map((value, index) => (
                            <span key={index} className="bg-gray-50 px-3 py-1 rounded-md">
                              {value}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </View>
              );
            })}
          </Page>
        </Document>
      </Card>
    </article>
  );
}
