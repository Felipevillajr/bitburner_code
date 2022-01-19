/** @param {NS} ns **/
export async function main(ns) {
  let target = ns.args[0]
  ns.connect(target);
  ns.brutessh(target);
  ns.ftpcrack(target);
  ns.relaysmtp(target);
  ns.httpworm(target);
  }
  
  /** this code works with the required aumentations. **/
  /** auto hacks an exposes a network on the bitbunner game using N2 code **/
