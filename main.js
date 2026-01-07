document.getElementById("calculate").addEventListener("click", () => {
  const selectedOptions = Array.from(document.getElementById("stockSelect").selectedOptions);
  const amount = parseInt(document.getElementById("amount").value);
  const resultDiv = document.getElementById("result");

  if (!amount || selectedOptions.length === 0) {
    resultDiv.innerHTML = "銘柄と金額を入力してください";
    return;
  }

  let output = "<h2>計算結果</h2>";
  const perStock = amount / selectedOptions.length;

  selectedOptions.forEach(option => {
    const stock = stocks[parseInt(option.value)];
    const shares = Math.floor(perStock / stock.price);
    output += `${stock.name}: ${shares}株<br>`;
  });

  resultDiv.innerHTML = output;
});
