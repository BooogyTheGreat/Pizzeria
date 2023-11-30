//its telling me i have an error on Event Listener but i cant find it.
document.getElementById("Btn").addEventListener("click", pizzaOrder);

function pizzaOrder() {
  let size = document.getElementById("size").value;
  let topping1 = document.getElementById("topping1").value;
  let topping2 = document.getElementById("topping2").value;

  //let outputOrder = `Your ${size} pizza with ${topping1} and ${topping2} will be ready in 20 minutes.`;
  //thats how you normally do it if you dont need a list.

  let outputOrder = `Your ${size} pizza with 
  <ul>
  <li>${topping1}
  <li>${topping2}
  <ul/>`;

  document.getElementById("Output").innerHTML = outputOrder;
  document.getElementById(
    "Pizza"
  ).innerHTML = `<img width="300px" id="Pizza-Pic" src="images/Pizza.jpg">`;
}
