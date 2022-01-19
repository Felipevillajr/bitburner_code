/** @param {NS} ns **/
export async function main(ns) {
  let target = ns.arg[0]
  let file = ns.args[1]
  // this treats any imput like an array and grabs from loc 0, and 1 of said array for its params. no type perf
  
  let threads = Math.floor(ns.getServerMaxRam(target) / 2.6);
  // sets the max thread count available for exec the specified file. for each gb uses 2.5gb for each thread.(not sure if this sentence makes sense to anyone other to me but there you have it)
  ns.alert(threads);
  // alerts the user of thread count used (optional)
  await ns.scp(file, target);
  // this does not require admin permissions on target server but is important to the following operation. Without a file it cannot run the exec() method on the server.
  ns.exec(file, target, threads);
  // this runs the choosen file(what scp copies over) at the specifiled server(target) and runs wit the the maximum allow threads.
}
