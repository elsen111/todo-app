import type {
  AuthFormHeaderData,
  AuthHeroData,
  CTASectionData,
  FeaturesSectionData,
  FooterSiteMetaData,
  HeroSectionData,
  HowItWorksSectionData,
  NavGroupData,
  SiteMetaData,
} from '../types/siteContentTypes';

import {
  Calendar,
  Calendars,
  ChartColumn,
  Check,
  ListTodo,
  MailClock,
  SearchSlash,
  Tags,
  Zap,
} from 'lucide-react';

export const siteMetaData: SiteMetaData = {
  name: 'TaskWise',
  metaDescription:
    'TaskWise helps you organize daily tasks, manage priorities, track progress, and stay productive. Plan your work, meet deadlines, and focus on what matters most.',
};

export const heroSectionData: HeroSectionData = {
  title: 'Organize your day. Get things done.',
  tagline:
    'A simple and powerful todo manager to organize tasks, stay focused, and never miss a deadline.',
};

export const featuresSectionData: FeaturesSectionData = {
  title: 'Everything you need',
  tagline: 'Simple tools for a focused day.',
  features: [
    {
      icon: ListTodo,
      title: 'Todo management',
      description:
        'Create, edit and complete tasks with priorities and statuses.',
    },

    {
      icon: Tags,
      title: 'Categories and tags',
      description: 'Group tasks by category and label them with tags.',
    },

    {
      icon: SearchSlash,
      title: 'Search and filters',
      description: 'Find anything by text, status, priority or date.',
    },

    {
      icon: Calendars,
      title: 'Calendar views',
      description: 'See your tasks by month, week or day.',
    },

    {
      icon: MailClock,
      title: 'Email reminders',
      description: 'Get notified before deadlines and when tasks are overdue..',
    },

    {
      icon: ChartColumn,
      title: 'Productivity stats',
      description: 'Track completion rate and trends over time.',
    },
  ],
};

export const howItWorksSectionData: HowItWorksSectionData = {
  title: 'How it works?',
  howItWorksCards: [
    {
      step: '1',
      title: 'Create your account',
      description: 'Register in seconds and verify your email.',
    },

    {
      step: '2',
      title: 'Add your tasks',
      description: 'Set priorities, deadlines and reminders.',
    },

    {
      step: '3',
      title: 'Stay on track',
      description: 'Follow your calendar and see your progress.',
    },
  ],
};

export const ctaSectionData: CTASectionData = {
  title: 'Ready to get organized?',
  description: 'Create your free account and plan your first day.',
};

export const footerSiteMetaData: FooterSiteMetaData = {
  name: 'TaskWise',
  metaDescription: 'Personal productivity app..',
};

export const brandTagline: string = 'A personal productivity app.';

export const footerNavData: NavGroupData[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', path: '#features' },
      { label: 'How it works', path: '#how-it-works' },
    ],
  },
  {
    title: 'Account',
    links: [
      { label: 'Login', path: '/login' },
      { label: 'Register', path: '/register' },
      { label: 'Forgot password', path: '/forgot-password' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', path: '/privacy' },
      { label: 'Terms', path: '/terms' },
    ],
  },
];

export const footerCopyright: string = `\u00A9 ${new Date().getFullYear()} ${siteMetaData.name}. All rights reserved`;

export const authHeroData: AuthHeroData = {
  titleTop: 'Small steps',
  titleBottom: 'big progress.',
  tagline:
    'Organize your days, get things done, and build better habits - one task at a time.',
  features: [
    {
      icon: Check,
      title: 'Stay organized',
      description: 'Keep your tasks in one place',
    },

    {
      icon: Zap,
      title: 'Be more productive',
      description: 'Focus on what matters',
    },

    {
      icon: Calendar,
      title: 'Build good habits',
      description: 'Make consistency easy',
    },
  ],
};

export const authFormHeaderData: AuthFormHeaderData = {
  heading: 'Welcome!',
  description: 'Log in to your account or create a new one to get started.',
};
