export interface SiteMetaData {
  name: string;
  metaDescription: string;
}

export interface GenericData {
  title: string;
  description: string;
}

export interface HeroSectionData extends GenericData {}

interface CardData extends GenericData {}

export interface FeaturesSectionData extends GenericData {
  featureCards: CardData[];
}

export interface HowItWorksSectionData {
  title: string;
  HowItWorksCards: CardData[];
}

export interface CTASectionData extends GenericData {}

export interface FooterSiteMetaData extends SiteMetaData {}
