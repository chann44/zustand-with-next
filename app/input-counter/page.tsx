import { CategoryType } from "./_categoryTypes";
import { Category } from "./category";
import { CounterStoreProvider } from "./category-counter-store";

const data: CategoryType[] = [
  {
    name: "Label 1",
    maxVal: 100,
    parameters: [
      {
        label: "param1",
        defaultVal: 50,
        value: 0,
      },
      {
        label: "param2",
        defaultVal: 50,
        value: 0,
      },
    ],
  },
  {
    name: "Label 1",
    maxVal: 100,
    parameters: [
      {
        label: "param1",
        defaultVal: 50,
        value: 0,
      },
      {
        label: "param2",
        defaultVal: 50,
        value: 0,
      },
    ],
  },
];

export default function InputCounterPage() {
  return data?.map((category, index) => {
    return (
      <CounterStoreProvider
        maxValue={category.maxVal}
        key={`${category?.name}__${index}`}
        initialBears={0}
        parameters={category.parameters}
      >
        <Category {...category} />
      </CounterStoreProvider>
    );
  });
}
