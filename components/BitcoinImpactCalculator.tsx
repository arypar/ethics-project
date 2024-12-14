"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export function BitcoinImpactCalculator() {
  const [transactions, setTransactions] = useState(0);
  const [metrics, setMetrics] = useState({
    totalEnergy: 0,
    gasGallons: 0,
    co2Emissions: 0,
    waterUsage: 0,
    electronicWaste: 0,
    householdEnergy: 0,
  });

  useEffect(() => {
    calculateImpact();
  }, [transactions]);

  const calculateImpact = () => {
    const transactionCount = parseInt(transactions.toString(), 10);
    if (isNaN(transactionCount) || transactionCount < 0) {
      return;
    }

    const energyPerTransaction = 851;
    const gasGallonsPerKWh = 0.029;
    const co2PerKWh = 0.5;
    const waterPerTransaction = 4200;
    const electronicWastePerTransaction = 0.272;
    const householdEnergyPerTransaction = 1.2;

    const totalEnergy = transactionCount * energyPerTransaction;
    const gasGallons = totalEnergy * gasGallonsPerKWh;
    const co2Emissions = totalEnergy * co2PerKWh;
    const waterUsage = transactionCount * waterPerTransaction;
    const electronicWaste = transactionCount * electronicWastePerTransaction;
    const householdEnergy = transactionCount * householdEnergyPerTransaction;
    setMetrics({
      totalEnergy: parseFloat(totalEnergy.toFixed(2)),
      gasGallons: parseFloat(gasGallons.toFixed(2)),
      co2Emissions: parseFloat(co2Emissions.toFixed(2)),
      waterUsage: parseFloat(waterUsage.toFixed(2)),
      electronicWaste: parseFloat(electronicWaste.toFixed(2)),
      householdEnergy: parseFloat(householdEnergy.toFixed(2)),
    });
  };

  return (
    <Card className="max-w-md mx-auto mt-10 p-5">
      <CardHeader>
        <h2 className="text-xl font-semibold">Bitcoin Environmental Impact</h2>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <label htmlFor="transactions" className="block mb-2 text-sm font-medium">
            Enter Number of Bitcoin Transactions:
          </label>
          <Input
            id="transactions"
            type="number"
            placeholder="e.g., 100"
            value={transactions === 0 ? '' : transactions}
            onChange={(e) => setTransactions(e.target.value === '' ? 0 : parseInt(e.target.value.replace(/[^0-9]/g, ''), 10) || 0)}
            className="w-full"
            min="0"
          />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="p-4 border rounded">
            <h3 className="text-lg font-semibold">Total Energy Used</h3>
            <p>{metrics.totalEnergy} kWh</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="text-lg font-semibold">Gasoline Burned</h3>
            <p>{metrics.gasGallons} gallons</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="text-lg font-semibold">CO2 Emissions</h3>
            <p>{metrics.co2Emissions} kg</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="text-lg font-semibold">Water Usage</h3>
            <p>{metrics.waterUsage} gallons</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="text-lg font-semibold">Electronic Waste</h3>
            <p>{metrics.electronicWaste} kg</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="text-lg font-semibold">Household Energy Consumption</h3>
            <p>{metrics.householdEnergy} months</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
export default BitcoinImpactCalculator;