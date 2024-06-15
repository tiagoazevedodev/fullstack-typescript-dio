const conta = {
  login:  "tw7",
  password: "123",
  name: "Tiago Azevedo",
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 2000);
});