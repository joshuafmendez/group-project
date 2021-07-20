export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3333"
    : "https://desolate-fortress-43961.herokuapp.com";
};