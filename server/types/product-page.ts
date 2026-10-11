export interface ProductPageSpecOption {
  value: string;
  label: string;
  price?: number | null;
  selected: boolean;
  hidden: boolean;
}

export interface ProductPageSpecGroup {
  id: string;
  label: string;
  name?: string | null;
  options: ProductPageSpecOption[];
}

export interface ProductPagePriceRow {
  qty: string;
  unit: string;
  price: string;
  subTotal: string;
  discount?: string | null;
  weight: string;
  leadTime: string;
}

export interface ProductPagePriceList {
  title?: string | null;
  rows: ProductPagePriceRow[];
}

export interface ProductPageGalleryItem {
  image: string;
  name: string;
  category?: string | null;
}

export interface ProductPageGallery {
  categories: Array<{ id: string; label: string }>;
  items: ProductPageGalleryItem[];
}

export interface ProductPageGuide {
  files: string[];
  faqs: Array<{ question: string; answer: string }>;
}

export interface ProductPage {
  slug: string;
  title: string;
  specs: ProductPageSpecGroup[];
  priceList: ProductPagePriceList;
  gallery: ProductPageGallery;
  guide: ProductPageGuide;
}