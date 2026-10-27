import type {
  CTASectionData,
  FeaturesSectionData,
  FooterSiteMetaData,
  HeroSectionData,
  HowItWorksSectionData,
  SiteMetaData,
} from "../types/siteContentTypes";

import { Calendars, ChartColumn, ListTodo, MailClock, SearchSlash, Tags } from 'lucide-react';

export const siteMetaData: SiteMetaData = {
  name: "TaskWise",
  metaDescription:
    "TaskWise helps you organize daily tasks, manage priorities, track progress, and stay productive. Plan your work, meet deadlines, and focus on what matters most.",
};



export const heroSectionData: HeroSectionData = {
  title: "Organize your day. Get things done.",
  tagline:
    "A simple and powerful todo manager to organize tasks, stay focused, and never miss a deadline.",
};



export const featuresSectionData: FeaturesSectionData = {
  title: "Everything you need",
  tagline: "Simple tools for a focused day.",
  features: [
    {
      icon: ListTodo,
      title: "Todo management",
      description:
        "Create, edit and complete tasks with priorities and statuses.",
    },

    {
      icon: Tags,
      title: "Categories and tags",
      description: "Group tasks by category and label them with tags.",
    },

    {
      icon: SearchSlash ,
      title: "Search and filters",
      description: "Find anything by text, status, priority or date.",
    },

    {
      icon: Calendars,
      title: "Calendar views",
      description: "See your tasks by month, week or day.",
    },

    {
      icon: MailClock ,
      title: "Email reminders",
      description: "Get notified before deadlines and when tasks are overdue..",
    },

    {
      icon: ChartColumn,
      title: "Productivity stats",
      description: "Track completion rate and trends over time.",
    },
  ],
};



export const howItWorksSectionData: HowItWorksSectionData = {
  title: "How it works?",
  HowItWorksCards: [
    {
      icon: "1",
      title: "Create your account",
      description: "Register in seconds and verify your email.",
    },

    {
      icon: "2",
      title: "Add your tasks",
      description: "Set priorities, deadlines and reminders.",
    },

    {
      icon: "3",
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