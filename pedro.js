function gerarTabuada() {
  let n = document.getElementById("numero").value;
  let r = "";
  for (let i = 1; i <= 10; i++) {
    r += n + " x " + i + " = " + (n * i) + "\n";
  }
  document.getElementById("resultado").value = r;
}
