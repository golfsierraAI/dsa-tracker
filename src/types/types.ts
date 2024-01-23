import type { InitialEntry } from "@remix-run/router";

export type TopicsType = {
  id: string;
  tags: string | null;
  title: string;
  yt_link: string | null;
  post_link: string | null;
  p2_link: string | null;
  head_step_no: string;
  step_no: number;
  sl_no_in_step: number;
  p1_link: string | null;
};

export type CategoryType = {
  sl_no: number;
  title: string;
  topics: TopicsType[];
};

export type ApiType = {
  data: CategoryType[];
};

export type optionsType = {
  location: InitialEntry;
};

export type checkBoxProps = {
  id: string;
  onChange: () => void;
};
