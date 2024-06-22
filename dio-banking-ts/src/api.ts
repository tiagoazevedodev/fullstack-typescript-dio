const conta = {
  login:  "tw7",
  password: "123",
  name: "Tiago Azevedo",
  balance: 7377.00,
  id: "7"
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 2000);
});