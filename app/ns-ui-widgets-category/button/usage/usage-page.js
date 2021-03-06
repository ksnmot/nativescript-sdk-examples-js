const Observable = require("tns-core-modules/data/observable").Observable;
const vm = new Observable();

function onNavigatingTo(args) {
    const page = args.object;
    vm.set("counter", 0);
}
exports.onNavigatingTo = onNavigatingTo;

// >> button-tap-event
function onTap(args) {
    const button = args.object;
    // >> (hide)
    let count = vm.get("counter");
    vm.set("counter", ++count);
    // << (hide)
    alert(`Tapped ${count} times!`);
}
exports.onTap = onTap;
// << button-tap-event
