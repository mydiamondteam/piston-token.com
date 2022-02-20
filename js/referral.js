//let refNode = document.getElementById("referral"); //debug
let dAppButton = document.getElementById("dAppButton");

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

if (params.ref) {
//  refNode.innerText = "Referral: " + params.ref; //debug
  dAppButton.setAttribute("href", "https://piston-race.app/?ref=" + params.ref);
}
