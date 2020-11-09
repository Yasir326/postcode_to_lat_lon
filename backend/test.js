const next = {
  if: {
    compare: "emailVerified",
    to: null,
    withOperator: "==",
  },
  then: {
    sendMail: {
      mail: "registrationVerification",
    },
  },
  type: "server",
};

const test = { ...next };

console.log(test);
