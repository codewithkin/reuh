export type notification = {
  title: string;
  read: boolean;
  createdOn: Date;
  success: boolean;
  resource: "Resume" | "Cover Letter" | "Headshot";
};
