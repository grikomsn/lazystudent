// https://sim.itats.ac.id/krs/mutu/kuesioner
document.querySelectorAll("div.radio").forEach((step) => {
  var rand = Math.random();
  var choice = rand < 0.3 ? "Sangat Baik" : rand < 0.6 ? "Baik" : "Cukup";
  step.querySelector(`input[type=radio][value='${choice}']`).click();
});
