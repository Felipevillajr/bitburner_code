/** @param {NS} ns **/
export async function main(ns) {
  
  var target = ns.args[0];
  // imput target server
  
  var moneyThresh = ns.getServerMaxMoney(target) * 0.75;
  // calculates max possible bank
  
  var securityThresh = ns.GetServerMinSecurtyLevel(target) + 5;
  // tracks securty level 
  
  if (ns.fileExists("BruteSSH.exe", "home")) {
      ns.brutessh(target);
  }
  // this bit of code uses the first exe you get to crack the early servers you see in the game. Optionally this can be improved to include FTPcrack, HTTPWorm, and relaySMTP.
  
  ns.nuke(target);
  // gives the user admin permissions (only works if the miminum amount of ports are open;
  
  While(true) {
      if (ns.getServerSecurityLevel(target) > securityThresh) {
          await ns.weaken(target);
      } else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
          await ns.grow(target);
      } else {
          await ns.hack(target);
      }
  }
  // this portion of the code is really the most usefull and can be copied with the all the var(s) and runs a never ending loop to farm. I recommend using this in conjunction with
  // breakin.js to make and infinite loop to farm the smaller servers. n00dles is was probably my most profitable server in early game from a $/per/sec perspective. 
  // i cannot take credit for this one since i got it from a starter guide on steam called Scripting 101 by Suikoudan. Props to Suikoudan!
}
