import type { LucideIcon } from "lucide-react";

export interface SiteMetaData {
  name: string;
  metaDescription: string;
}

export interface GenericData {
  title: string;
  description: string;
}

export interface SectionHeader {
  title: string;
  tagline: string;
}

export interface HeroSectionData extends SectionHeader{}

export interface FeatureCardData {
  icon: LucideIcon,
  title: string,
  description: string
}

export interface FeaturesSectionData extends SectionHeader {
  features: FeatureCardData[];
}

export interface HowItWorksSectionCardsData {
  step: string,
  title: string,
  description: string
}

export interface HowItWorksSectionData {
  title: string;
  howItWorksCards: HowItWorksSectionCardsData[];
}

export interface CTASectionData extends GenericData {}

export interface FooterSiteMetaData extends SiteMetaData {}

export interface NavLinkItem {
  label: string;
  path: string;
}

export interface NavGroupData {
  title: string;
  links: NavLinkItem[];
}
