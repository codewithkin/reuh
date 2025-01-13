export type plan = {
    title: string,
    description: string,
    price: number,
    features: string[],
    buttonText: string,
    actionUrl: string
}

export const plans: plan[] = [
    {
        title: "Basic",
        description: "For users who need the basics to get started with their job search",
        price: 9.99,
        features: [
            "40 Resume generations per month",
            "15 professional headshots per month",
            "Basic Interview Preparation",
            "50+ AI-generated questions",
            "Limited Access to interview feedback",
        ],
        buttonText: "Choose Plan",
        actionUrl: "https://app.reuh.pro/auth"
    },
    {
        title: "Premium",
        description: "For more advanced users who want to get more out of their job search",
        price: 29.99,
        features: [
            "100 Resume generations per month",
            "50 professional headshots per month",
            "Advanced Interview Preparation",
            "200+ AI-generated questions",
            "More flexible access to interview feedback",
            "Advanced ATS Optimization",
            "Priority customer support",
            "Mock Interviews",
            "Resume Review"
        ],
        buttonText: "Go Premium",
        actionUrl: "https://app.reuh.pro/auth"
    },
    {
        title: "Ultimate",
        description: "For users serious about their growth and their professional development",
        price: 99.99,
        features: [
            "Unlimited Resume generations per month",
            "Unlimited professional headshots per month",
            "Ultimate Interview Preparation",
            "500+ AI-generated questions",
            "Unlimited Access to interview feedback",
            "Ultimate ATS Optimization",
            "24 / 7 advanced customer support",
            "Advanced Mock Interviews with AI",
            "Resume Review",
        ],
        buttonText: "Upgrade to Ultimate",
        actionUrl: "https://app.reuh.pro/auth"
    },
]