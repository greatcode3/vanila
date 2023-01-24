// user
console.log(alert("Pilih gunting, kertas atau batu."));

const gunting = document.querySelector("#gunting");
const batu = document.querySelector("#batu");
const kertas = document.querySelector("#kertas");
const kolomUser = document.querySelector("#user");
const pic = ["✊", "✋", "✌️"];
let i = 0;

// computer
function getComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "✌️";
  if (comp >= 0.34 && comp < 0.67) return "✋";
  return "✊";
}

// hasil
function getHasil(kolomUser, comp) {
  // menentukan rules
  if (kolomUser == comp) return "SERI!";
  if (kolomUser == "✌️") return comp == "✋" ? "MENANG!" : "KALAH!";
  if (kolomUser == "✋") return comp == "✊" ? "MENANG!" : "KALAH!";
  if (kolomUser == "✊") return comp == "✌️" ? "MENANG!" : "KALAH!";
}

[batu, kertas, gunting].forEach((elm, idx) => {
  elm.addEventListener("click", () => {
    const interval = setInterval(() => {
      i++;
      if (i == pic.length) i = 0;
      kolomUser.innerHTML = pic[i];
    }, 500);

    setTimeout(() => {
      kolomUser.innerHTML = pic[idx];
      clearInterval(interval);
    }, 6000);

    kolomUser.innerHTML = elm.innerHTML;

    const computer = document.querySelector("#computer");
    const interval2 = setInterval(() => {
      i++;
      if (i == pic.length) i = 0;

      computer.innerHTML = pic[i];
    }, 500);

    setTimeout(() => {
      computer.innerHTML = pic[idx];
      clearInterval(interval2);
    }, 6000);
  });
});

//

gunting.addEventListener("click", function () {
  const pilihanComputer = getComputer();
  const pilihanUser = "✌️";
  const computer = document.querySelector("#computer");
  computer.innerHTML = pilihanComputer;

  const hasil = getHasil(pilihanUser, pilihanComputer);
  setTimeout(() => alert(`Kamu ${hasil}`), 6005);
  if (hasil == "MENANG!") {
    // document.location.href = "porto.html";
  }
});

kertas.addEventListener("click", function () {
  const pilihanComputer = getComputer();
  const pilihanUser = "✋";
  const computer = document.querySelector("#computer");
  computer.innerHTML = pilihanComputer;

  const hasil = getHasil(pilihanUser, pilihanComputer);
  setTimeout(() => alert(`Kamu ${hasil}`), 6005);
  if (hasil == "MENANG!") {
    // document.location.href = "porto.html";
  }
});

batu.addEventListener("click", function () {
  const pilihanComputer = getComputer();
  const pilihanUser = "✊";
  const computer = document.querySelector("#computer");
  computer.innerHTML = pilihanComputer;

  const hasil = getHasil(pilihanUser, pilihanComputer);
  setTimeout(() => alert(`Kamu ${hasil}`), 6005);
  if (hasil == "MENANG!") {
    // document.location.href = "porto.html";
  }
});
