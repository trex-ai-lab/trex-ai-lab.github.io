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
    tag_en: "CONFERENCE",
    tag_tr: "KONGRE",
    title_en:
      "Our researcher Yiğitcan Yardımcı presented our study 'Investigating the Variability of Feature-Importance Explanations across Predictive Models and Explanation Methods in Survival Analysis' at UBK 2026 (XXVII. National & X. International Biostatistics Congress, İzmir).",
    title_tr:
      "Araştırmacımız Yiğitcan Yardımcı, 'Sağkalım Analizinde Değişken Önemi Açıklamalarının Tahmin Modeli ve Açıklama Yöntemine Bağlı Değişkenliğinin İncelenmesi' başlıklı çalışmamızı UBK 2026 (27. Ulusal ve 10. Uluslararası Biyoistatistik Kongresi, İzmir)'de sundu.",
    date: "2026-11-13",
    expires: "2026-12-31",
  },
];
