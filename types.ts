
export interface GroundingChunk {
  web?: {
    uri?: string;
    title?: string;
  };
}

export interface AIResponse {
  text: string;
  sources: GroundingChunk[];
}

export interface NavItem {
  label: string;
  href: string;
}