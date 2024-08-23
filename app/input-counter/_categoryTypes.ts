export type Parameter = {
  label: string;
  defaultVal: number;
  value: number;
};

export type CategoryType = {
  name: string;
  maxVal: number;
  parameters: Parameter[];
};
