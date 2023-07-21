const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51NRCXrJzZm1rPy9jtqRzdMKBwBRJnSzFUAhFJnaA3XH40n9jjZVVF7ZI0LLsNJoKC6ajW8FNlkDDLPsGUbxf05tp000fVrz6p7"
);
router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});
module.exports = router;
