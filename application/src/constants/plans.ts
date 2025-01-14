export type Plan = {
    name: "Free" | "Premium" | "Ultimate";
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
        resumesGenerationsPerMonth: 2,
        coverLettersGenerationsPerMonth: 2,
        interviewQuestionsGenerationsPerMonth: 2,
        headshotsGenerationsPerMonth: 2
    },
    {
        name: "Premium",
        price: 29.99,
        resumesGenerationsPerMonth: 20,
        coverLettersGenerationsPerMonth: 20,
        interviewQuestionsGenerationsPerMonth: 20,
        headshotsGenerationsPerMonth: 10
    },
    {
        name: "Ultimate",
        price: 99.99,
        resumesGenerationsPerMonth: 99999,
        coverLettersGenerationsPerMonth: 99999,
        interviewQuestionsGenerationsPerMonth: 99999,
        headshotsGenerationsPerMonth: 99999
    }
]
