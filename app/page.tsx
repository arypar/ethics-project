import NavigationHeader from "@/components/NavigationHeader";
import BlockchainEthics from "@/components/BlockchainEthics";


export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen px-4 sm:px-1 font-[family-name:var(--font-geist-sans)]">
      <NavigationHeader />
      <main className="">
        <BlockchainEthics />   
      </main>
    </div>
  );
}
