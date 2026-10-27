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

export interface CardData {
  icon: LucideIcon | string,
  title: string,
  description: string
}

export interface FeaturesSectionData extends SectionHeader {
  features: CardData[];
}

export interface HowItWorksSectionData {
  title: string;
  HowItWorksCards: CardData[];
}

export interface CTASectionData extends GenericData {}

export interface FooterSiteMetaData extends SiteMetaData {}
