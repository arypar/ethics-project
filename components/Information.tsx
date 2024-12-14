"use client"

import Calculator from "@/components/Calculator";

export function Information() {
    return (
      <main className="p-6 text-center">
        <h1 className="text-3xl font-bold">Environmental Impact of Blockchain</h1>
        <p className="mt-4">
         Blockchain technologies, especially proof-of-work mechanisms such as Bitcoin consume exorbitant amounts of energy. It is our responsibility as engineers to understand the ethical implications of this energy consumption and to take steps to mitigate it.
        </p>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold">Key Points</h2>
          <ul className="list-disc list-inside mt-2">
            <li className="text-center">
              Bitcoin consumes approximately 120 terawatt-hours (TWh) annually
            </li>
            <li className="text-center">
              Renewable energy sources can mitigate blockchain&apos;s carbon footprint.
            </li>
            <li className="text-center">
              Alternatives like proof-of-stake significantly reduce energy usage.
            </li>
          </ul>
        </section>
        <section className="mt-6">
        <h1 className="text-3xl font-bold">Analysis</h1>
        <p className="mt-4">
        <p>
            Blockchain technologies, particularly those employing <strong>proof-of-work (PoW)</strong> consensus mechanisms, are often criticized for their significant environmental impact. PoW systems require immense energy to operate, as computationally intensive mining activities involve solving complex cryptographic puzzles. For example, the Bitcoin network alone consumes approximately 120-150 TWh annually&mdash;comparable to the electricity usage of entire countries like Argentina or Norway. This energy consumption results in a carbon footprint exceeding 60 million tons of CO&sup2; annually, largely driven by reliance on fossil fuel-based electricity sources.
        </p>
        <p>
            In addition to high energy consumption, blockchain mining contributes to electronic waste (e-waste). Specialized hardware, such as Application-Specific Integrated Circuits (ASICs), often becomes obsolete within 1-2 years, leading to substantial disposal challenges. The Bitcoin network is estimated to generate around 30,000 metric tons of e-waste annually. Furthermore, the localized impact of mining on energy grids can lead to increased electricity prices for nearby communities and, in some cases, energy shortages, as seen in regions like Iran and Kazakhstan.
        </p>
        <p>
            While some blockchain projects are shifting to renewable energy sources, the environmental trade-offs remain complex. Mining operations in areas with abundant renewable energy, such as hydroelectric power in Sichuan, China, can utilize surplus energy, but this may divert renewable energy from other essential uses, indirectly increasing reliance on fossil fuels elsewhere.
        </p>
        <p>
            The blockchain industry is actively exploring solutions to mitigate these environmental impacts. The transition to <strong>proof-of-stake (PoS)</strong> consensus mechanisms, as demonstrated by Ethereum&apos;s shift in 2022, has significantly reduced energy consumption&mdash;by over 99% in Ethereum&rsquo;s case. Additional strategies include adopting layer 2 solutions like Polygon and Lightning Network, which reduce computational loads, and implementing green mining initiatives powered by renewable energy. Some projects also focus on carbon offsetting to neutralize emissions.
        </p>
        <p>
            Emerging innovations in blockchain technology further aim to minimize environmental costs. Energy-efficient consensus mechanisms, such as <em>proof-of-space-and-time</em> used by Chia and <em>proof-of-authority</em>, consume considerably less energy. Sustainable blockchain projects like Algorand and Tezos integrate eco-friendly designs and actively pursue carbon neutrality. These developments suggest a promising direction for reducing the environmental footprint of blockchain technologies.
        </p>
        <p>
            In conclusion, while blockchain technologies, particularly PoW systems, have a substantial environmental impact due to high energy demands, e-waste generation, and strain on energy grids, ongoing advancements show promise in addressing these challenges. The industry&rsquo;s focus on transitioning to sustainable practices and energy-efficient technologies is critical to balancing innovation with environmental responsibility as blockchain adoption continues to grow.
        </p>        
        </p>
        </section>
        <Calculator />
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Read More</h2>
          <a
            href="https://blog.bake.io/why-did-ethereum-switch-to-proof-of-stake/"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ethereum&apos;s sustainable transition to proof-of-stake
          </a>
          <br />
          <a
            href="https://www.eia.gov/todayinenergy/detail.php?id=61364"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cryptocurrency energy consumption analysis by U.S. Energy Information Administration
          </a>
          <br />
          <a
            href="https://www.bitwave.io/blog/explained-proof-of-work-vs-proof-of-stake-carbon-footprint#:~:text=As%20discussed%20above%2C%20proof%20of,work%20mechanism%20is%20environmentally%20sustainable."
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            What is proof of work and proof of stake - Carbon footprint explained
          </a>
        </div>
      </main>
    );
  }
export default Information;