"use client"
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card"; 
import { Button } from "@/components/ui/button";
export function BlockchainEthics() {
  return (
    <main className="p-6 text-center">
      <h1 className="text-3xl font-bold">Ethics in Blockchain</h1>
   
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card className="p-4">
          <CardHeader>
            <h2 className="text-xl font-semibold">Environmental Impact</h2>
          </CardHeader>
          <CardContent>
            <p>Learn about the environmental implications of blockchain technology.</p>
            <Link href="/environment">
              <Button className="mt-2">Learn More</Button>
            </Link>
          </CardContent>
        </Card>
        <Card className="p-4">
          <CardHeader>
            <h2 className="text-xl font-semibold">Fraud and Criminal Activity</h2>
          </CardHeader>
          <CardContent>
            <p>Discover the ethical challenges related to fraud in blockchain.</p>
            <Link href="/fraud">
              <Button className="mt-2">Learn More</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
export default BlockchainEthics;