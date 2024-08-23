"use client";
import { Button } from "-/components/ui/button";
import { useState } from "react";
import { CategoryType, Parameter as ParamType } from "./_categoryTypes";
import {
  useActions,
  useCount,
  useCounterStore,
  useParameterAction,
  useParameters,
  useValidToSave,
} from "./category-counter-store";

export function Category(props: CategoryType) {
  const count = useCount();
  const parameters: ParamType[] = useParameters();
  const isValidToSave = useValidToSave();
  return (
    <div className="border p-5 flex flex-col rounded-md bg-accent">
      <div className="flex items-center gap-5">
        <h2>{props.name}</h2>
        <p>{props.maxVal}</p>
        <p>{count}</p>
        <Button disabled={!isValidToSave} className="ml-auto">
          Save
        </Button>
      </div>
      <div className="flex flex-col gap-y-5">
        {parameters?.map((param, index) => {
          return <Parameter index={index} {...param} key={param?.label} />;
        })}
      </div>
    </div>
  );
}

function Parameter(
  props: ParamType & {
    index: number;
  }
) {
  const count = useCount();
  const setParameter = useParameterAction();
  const [localCount, setLocalCount] = useState(0);
  return (
    <div className="flex flex-col">
      <h2>{props.label}</h2>
      <input
        onChange={(e) => {
          let newValue = Number(e.target.value);
          if (isNaN(newValue)) {
            newValue = 0;
            setLocalCount(newValue);
            setParameter(props.index, newValue);
          } else {
            setLocalCount(newValue);
            setParameter(props.index, newValue);
          }
        }}
        className="border rounded-md w-[400px]"
        min={0}
      />
    </div>
  );
}
