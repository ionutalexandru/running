export interface FAQ {
  question: string;
  answer: string;
}

export interface Race {
  id: string;
  title: string;
  city: string;
  countryCode: string;
  latitude: number;
  longitude: number;
  startDate: string;
  endDate: string;
  distanceKm: number;
  tags: string[];
  isMunich: boolean;
  heroImage: string;
  spotifyUrl: string;
  liveMapUrl: string;
  faqs: FAQ[];
}
