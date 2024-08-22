"use client";

import { Button } from "-/components/ui/button";
import { useBearStore } from "-/store/bear-store";

export function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} around here...</h1>;
}

export function BearCounterControls() {
  const incrementPopulation = useBearStore(
    (state) => state.incrementPopulation
  );
  return <Button onClick={incrementPopulation}>one up</Button>;
}
