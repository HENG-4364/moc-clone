import HighPotentialProductsScreen from "@/screen/Post";
import React, { Suspense } from "react";

export default function HighPotentialProducts() {
  return (
    <Suspense fallback={<></>}>
      <HighPotentialProductsScreen />
    </Suspense>
  );
}
