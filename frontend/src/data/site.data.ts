import type {
  CTASectionData,
  FeaturesSectionData,
  FooterSiteMetaData,
  HeroSectionData,
  HowItWorksSectionData,
  SiteMetaData,
} from "../types/siteContentTypes";

export const siteMetaData: SiteMetaData = {
  name: "TaskWise",
  metaDescription:
    "TaskWise helps you organize daily tasks, manage priorities, track progress, and stay productive. Plan your work, meet deadlines, and focus on what matters most.",
};



export const heroSectionData: HeroSectionData = {
  title: "Organize your day. Get things done.",
  description:
    "A simple and powerful todo manager to organize tasks, stay focused, and never miss a deadline.",
};



export const featuresSectionData: FeaturesSectionData = {
  title: "Everything you need",
  description: "Simple tools for a focused day.",
  featureCards: [
    {
      title: "Todo management",
      description:
        "Create, edit and complete tasks with priorities and statuses.",
    },

    {
      title: "Categories and tags",
      description: "Group tasks by category and label them with tags.",
    },

    {
      title: "Search and filters",
      description: "Find anything by text, status, priority or date.",
    },

    {
      title: "Calendar views",
      description: "See your tasks by month, week or day.",
    },

    {
      title: "Email reminders",
      description: "Get notified before deadlines and when tasks are overdue..",
    },

    {
      title: "Productivity stats",
      description: "Track completion rate and trends over time.",
    },
  ],
};



export const howItWorksSectionData: HowItWorksSectionData = {
  title: "How it works?",
  HowItWorksCards: [
    {
      title: "Create your account",
      description: "Register in seconds and verify your email.",
    },

    {
      title: "Add your tasks",
      description: "Set priorities, deadlines and reminders.",
    },

    {
      title: "Stay on track",
      description: "Follow your calendar and see your progress.",
    },
  ],
};



export const ctaSectionData: CTASectionData = {
  title: "Ready to get organized?",
  description: "Create your free account and plan your first day.",
};



export const footerSiteMetaData: FooterSiteMetaData = {
  name: "TaskWise",
  metaDescription: "Personal productivity app..",
};
