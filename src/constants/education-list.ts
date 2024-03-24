export type EducationDataType = { title: string; value: string };

export type EducationListType = {
  title: string;
  key: string;
  data: EducationDataType[];
};

export const EDUCATION_LISTS: EducationListType[] = [
  {
    title: "Pendidikan Pra Sekolah",
    key: "pre_school_education",
    data: [
      {
        title: "PAUD (Pendidikan Anak Usia Dini)",
        value: "paud",
      },
      {
        title: "TK (Taman Kanak-kanak)",
        value: "tk",
      },
      {
        title: "RA (Raudhatul Athfal)",
        value: "ra",
      },
    ],
  },
  {
    title: "Pendidikan Dasar",
    key: "basic_education",
    data: [
      {
        title: "SD (Sekolah Dasar)",
        value: "sd",
      },
      {
        title: "MI (Madrasah Ibtidaiyah)",
        value: "mi",
      },
      {
        title: "SMP (Sekolah Menengah Pertama)",
        value: "smp",
      },
      {
        title: "MTs (Madrasah Tsanawiyah)",
        value: "mts",
      },
    ],
  },
  {
    title: "Pendidikan Menengah",
    key: "middle_education",
    data: [
      {
        title: "SMA (Sekolah Menengah Atas)",
        value: "sma",
      },
      {
        title: "MA (Madrasah Aliyah)",
        value: "ma",
      },
      {
        title: "SMK (Sekolah Menengah Kejuruan",
        value: "smk",
      },
    ],
  },
  {
    title: "Pendidikan Tinggi",
    key: "higher_education",
    data: [
      {
        title: "D3 Diploma",
        value: "d3",
      },
      {
        title: "S1/D4 Sarjana",
        value: "s1/d4",
      },
      {
        title: "S2 Magister",
        value: "s2",
      },
      {
        title: "S3 Doktoral",
        value: "s3",
      },
    ],
  },
];
