import { networkSummary } from "../lib/stellar";
export default function Home(){return <main><p className="tag">STELLAR / SOROBAN</p><h1>PayBridge</h1><p>Merchant payment intents and checkout infrastructure.</p><section className="card"><h2>Network</h2><p>{networkSummary()}</p></section></main>}
