import BitcoinImpactCalculator from "@/components/BitcoinImpactCalculator";

export function Calculator() {
  return (
    <main className="p-6 text-center">
      <h1 className="text-3xl font-bold">Bitcoin Environmental Impact Calculator</h1>
      <p className="mt-4">
        Enter the number of Bitcoin transactions to estimate their environmental
        impact.
      </p>
      <BitcoinImpactCalculator />
    </main>
  );
}
export default Calculator;