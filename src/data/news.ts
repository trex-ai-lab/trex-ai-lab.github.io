export interface NewsItem {
  id: string;
  tag_en: string;
  tag_tr: string;
  title_en: string;
  title_tr: string;
  href?: string;
  date: string;
  expires?: string; // ISO date string YYYY-MM-DD
}

export const news: NewsItem[] = [
  {
    id: "ubk2026-yigitcan",
    tag_en: "conference",
    tag_tr: "kongre",
    title_en:
      "Yiğitcan Yardımcı presented our study 'Investigating the Variability of Feature-Importance Explanations across Predictive Models and Explanation Methods in Survival Analysis' at the XXVII. National & X. International Biostatistics Congress (11–14 November 2026 · İzmir, Türkiye).",
    title_tr:
      "Yiğitcan Yardımcı, 'Sağkalım Analizinde Değişken Önemi Açıklamalarının Tahmin Modeli ve Açıklama Yöntemine Bağlı Değişkenliğinin İncelenmesi' başlıklı çalışmamızı XXVII. Ulusal ve X. Uluslararası Biyoistatistik Kongresi'nde sundu (11–14 Kasım 2026 · İzmir, Türkiye).",
    date: "2026-11-13",
    expires: "2026-12-31",
  },
];
