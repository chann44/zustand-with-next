"use client";

import { Button } from "-/components/ui/button";
import {
  useBearPopulationCount,
  useBearStoreActions,
} from "-/store/bear-store";

export function BearCounter() {
  const bears = useBearPopulationCount();
  return <h1>{bears} around here...</h1>;
}

export function BearCounterControls() {
  const { incrementPopulation } = useBearStoreActions();
  return <Button onClick={incrementPopulation}>one up</Button>;
}
