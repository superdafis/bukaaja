import functions from "./functions.js";
document.addEventListener("DOMContentLoaded", () => {
  const audioConfetti = document.querySelector("#confettiSound");
  //seleksi id "confettiSound"
  const ready = functions.selector(".ready-container");
  const text = functions.selector(".ready h3");
  const buttonIya = functions.selectorAll(".ready button", 0);
  const buttonTidak = functions.selectorAll(".ready button", 1);
  const buttonKembali = functions.selectorAll(".ready button", 2);
  const hbd = functions.selector(".hbd-container");
  const buttonHbd = functions.selector(".hbd button");
  const pesanHBD = functions.selector(".pesanHBD-container");
  const btnPesanHBD = functions.selector('.pesanHBD-container button');
  const btnlihatGambar = functions.selectorAll('.hbd-container button', 1);
  const btnBack = functions.selector('.gallery-container .judul button');

  window.addEventListener("load", () => {
    functions.body().style.backgroundImage =
      "url('./img/background astronomi.png')";
    functions.body().style.backgroundImage =
      "url('./img/background astronomi.png')";

    const isUserReady = localStorage.getItem('isReady');


    // ready.style.display = "flex";
    // hbd.style.display = "none";
    // pesanHBD.style.display = "none";

    // functions.text(text, "Apakah Kamu Siap?");
    // buttonKembali.style.display = "none"; //button "kembali"

    if (isUserReady === 'true') {
      // Jika pengguna sudah pernah menekan "Iya", langsung tampilkan hbd
      ready.style.display = "none";
      hbd.style.display = "flex";
      pesanHBD.style.display = "none";
      // Opsional: putar audio confetti dan animasi jika ingin terulang setiap refresh
      // if (audioConfetti) {
      //   audioConfetti.currentTime = 0;
      //   audioConfetti.play();
      // }
      // if (ready) { // confetti code here if you want it to fire on refresh }
    } else {
      // Jika belum, tampilkan container ready seperti biasa
      ready.style.display = "flex";
      hbd.style.display = "none";
      pesanHBD.style.display = "none";
      functions.text(text, "Apakah Kamu Siap?");
      buttonKembali.style.display = "none"; // button "kembali"
    }

    buttonIya.addEventListener("click", () => {
      ready.style.display = "none";
      hbd.style.display = "flex";

      localStorage.setItem('isReady', 'true');
      
      if (audioConfetti) {
        audioConfetti.currentTime = 0;
        audioConfetti.play();
      }
      if (ready) {
        const count = 200,
          defaults = {
            origin: { y: 0.7 },
          };

        function fire(particleRatio, opts) {
          confetti(
            Object.assign({}, defaults, opts, {
              particleCount: Math.floor(count * particleRatio),
            })
          );
        }

        fire(0.25, {
          spread: 26,
          startVelocity: 55,
        });

        fire(0.2, {
          spread: 60,
        });

        fire(0.35, {
          spread: 100,
          decay: 0.91,
          scalar: 0.8,
        });

        fire(0.1, {
          spread: 120,
          startVelocity: 25,
          decay: 0.92,
          scalar: 1.2,
        });

        fire(0.1, {
          spread: 120,
          startVelocity: 45,
        });
      }
    });

    buttonTidak.addEventListener("click", () => {
      buttonIya.style.display = "none"; // button "iya"
      buttonTidak.style.display = "none"; // button "tidak"
      buttonKembali.style.display = "inline-block"; // button "kembali"

      functions.text(text, "Kembalilah saat kamu sudah siap");

      localStorage.removeItem('isReady');
    });

    buttonKembali.addEventListener("click", (tagText) => {
      functions.text(text, "Apakah Kamu Siap?");
      buttonIya.style.display = "inline-block"; // button "iya"
      buttonTidak.style.display = "inline-block"; // button "tidak"
      buttonKembali.style.display = "none"; // button "kembali"

      localStorage.removeItem('isReady');
    });

    buttonHbd.addEventListener("click", () => {
      hbd.style.display = "none";
      pesanHBD.style.display = "flex";
    });

    btnPesanHBD.addEventListener('click', ()=> {
      hbd.style.display='flex';
      pesanHBD.style.display = 'none';
    })
  });
});
