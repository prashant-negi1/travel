const params = new URLSearchParams(window.location.search);
const note = params.get("note");

let amount = 5000; // ₹50
let file = "notes/cpp.pdf";

if (note === "cpp") {
  amount = 4000; // ₹40
  file = "notes/math.pdf";
}

const options = {
  key: "rzp_test_b85TUpnGxg36LM", // Replace with your Razorpay Test Key
  amount: amount,
  currency: "INR",
  name: "Notes Store",
  description: "Purchase Notes",
  handler: function (response) {
    window.location.href = "thank-you.html?file=" + encodeURIComponent(file);
  }
};

document.getElementById("rzp-button").onclick = function (e) {
  const rzp = new Razorpay(options);
  rzp.open();
  e.preventDefault();
};
