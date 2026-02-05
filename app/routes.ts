export const ROUTES = {
  LANDING: "/",
  LOGIN: "/giris",
  REGISTER_STUDENT: "/basvuru/ogrenci",
  REGISTER_TUTOR: "/basvuru/egitmen",
  // Anchors
  HOW_IT_WORKS: "#nasil-calisir",
  FEATURES: "#ozellikler",
  TESTIMONIALS: "#yorumlar",
  CONTACT: "#iletisim",
  TUTORS: "#egitmenler",
} as const;

export type Routes = typeof ROUTES;
