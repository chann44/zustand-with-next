import { BearCounter, BearCounterControls } from "./bear-counter";

function BearPage() {
  return (
    <main>
      <h2 className="text-xl text-center">Bears Store</h2>
      <BearCounter />
      <BearCounterControls />
    </main>
  );
}

export default BearPage;
