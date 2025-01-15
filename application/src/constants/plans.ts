export interface Plan {
    name: string;
    price: number;
    resumesGenerationsPerMonth: number;
    coverLettersGenerationsPerMonth: number;
    interviewQuestionsGenerationsPerMonth: number;
    headshotsGenerationsPerMonth: number;
}

export const plans: Plan[] = [
    {
        name: "Free",
        price: 0,
        resumesGenerationsPerMonth: 1,
        coverLettersGenerationsPerMonth: 1,
        interviewQuestionsGenerationsPerMonth: 1,
        headshotsGenerationsPerMonth: 1,
    },
    {
        name: "Starter",
        price: 9.99,
        resumesGenerationsPerMonth: 5,
        coverLettersGenerationsPerMonth: 5,
        interviewQuestionsGenerationsPerMonth: 5,
        headshotsGenerationsPerMonth: 5,
    },
    {
        name: "Premium",
        price: 19.99,
        resumesGenerationsPerMonth: 10,
        coverLettersGenerationsPerMonth: 10,
        interviewQuestionsGenerationsPerMonth: 10,
        headshotsGenerationsPerMonth: 10,
    },
    {
        name: "Ultimate",
        price: 29.99,
        resumesGenerationsPerMonth: -1, // unlimited
        coverLettersGenerationsPerMonth: -1, // unlimited
        interviewQuestionsGenerationsPerMonth: -1, // unlimited
        headshotsGenerationsPerMonth: -1, // unlimited
    }
];
