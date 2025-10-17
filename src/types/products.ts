interface Feature {
  count: number | null;
  text: string;
}

export interface Product {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  portions: Feature;
  gift: Feature;
  review?: string;
  weight: string;
  bottomText: string;
  disabled: boolean;
  hoverText: string;
  selectedText: string;
  disabledText: string;
}
