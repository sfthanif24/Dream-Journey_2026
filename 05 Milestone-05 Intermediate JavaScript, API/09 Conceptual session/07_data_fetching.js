// const fetchUsers = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       throw new Error("Unknown Error!!");
//     })
//     .catch((e) => console.log("Catch block triggered"));
// };

// fetchUsers();

const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log("always trigger");
  }
};

fetchUsers();
