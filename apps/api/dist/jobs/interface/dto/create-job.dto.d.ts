export declare enum EmploymentType {
    FULL_TIME = "FULL_TIME",
    PART_TIME = "PART_TIME",
    CONTRACT = "CONTRACT",
    INTERNSHIP = "INTERNSHIP"
}
export declare enum ExperienceLevel {
    JUNIOR = "JUNIOR",
    MID = "MID",
    SENIOR = "SENIOR",
    LEAD = "LEAD"
}
export declare class CreateJobDto {
    title: string;
    description: string;
    requirements: string[];
    responsibilities: string[];
    benefits?: string;
    location?: string;
    remoteWork: boolean;
    salaryMin?: number;
    salaryMax?: number;
    salaryCurrency?: string;
    employmentType: EmploymentType;
    experienceLevel: ExperienceLevel;
    deadline?: string;
    companyId: string;
}
