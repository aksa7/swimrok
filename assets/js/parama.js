function setAmount(eur) {
  document.getElementById('donation-amount').value = eur;
}

function donate() {
  const amount = document.getElementById('donation-amount').value;
  if (!amount || amount <= 0) {
    alert("Įveskite teisingą sumą.");
    return;
  }
  alert("Ačiū už paramą! Paaukota suma: €" + amount);
}
