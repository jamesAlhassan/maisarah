import axios from "axios";
const pixelaEndPoint = "https://pixe.la/v1/users";

const date = new Date();

let day = String(date.getDate()).padStart(2, "0");
let month = String(date.getMonth() + 1).padStart(2, "0");
let year = date.getFullYear();
let currentDate = `${year}${month}${day}`;

const pixelaNewUser = (username, tk, log) => {
  fetch("http://127.0.0.1:3000/api/v1/users")
    .then((res) => res.json())
    .then((data) => {
      let i;
      for (let a = 0; a < data.users.length; i++) {
        if (data.users[a].name !== username) {
          // push user to db
          console.log("pushing to db");
          axios({
            method: "post",
            url: "http://127.0.0.1:3000/api/v1/users",

            data: {
              name: username,
              log,
            },
          }).then((res) => {
            if (res.status === 201) {
              // then register on pixela
              console.log("registering on pixela");
              axios({
                method: "post",
                url: pixelaEndPoint,
                data: {
                  token: tk,
                  username,
                  agreeTermsOfService: "yes",
                  notMinor: "yes",
                },
              })
                .catch((err) => console.log(err))
                .then((res) => {
                  if (res.status === 200) {
                    console.log("creating graph");
                    axios({
                      // create graph on pixela
                      method: "post",
                      url: `https://pixe.la/v1/users/${username}/graphs`,
                      data: {
                        id: "graph1",
                        name: "Maisarah Attendance",
                        unit: "commit",
                        type: "int",
                        color: "ajisai",
                      },
                      headers: {
                        "X-USER-TOKEN": tk,
                      },
                    })
                      .catch((err) => console.log(err))
                      .then((res) => {
                        if (res.status === 200) {
                          console.log("new user logging on pixela");
                          axios({
                            // then log on pixela
                            method: "post",
                            url: `https://pixe.la/v1/users/${username}/graphs/graph1/`,
                            data: {
                              date: `${currentDate}`,
                              quantity: "50",
                            },
                            headers: {
                              "X-USER-TOKEN": tk,
                            },
                          })
                            .catch((err) => console.log(err))
                            .then((res) => {
                              if (res.status === 200) {
                                alert(`Attendance Successfully Logged!!!`);
                              }
                            });
                        }
                      });
                  }
                });
            }
          });
          break;
        }
      }
    });
};

const pixelaOldUser = (username, tk, log) => {
  console.log(`logging on pixela `);
  axios({
    method: "post",
    url: `https://pixe.la/v1/users/${username}/graphs/graph1/`,
    data: {
      date: `${currentDate}`,
      quantity: "50",
    },
    headers: {
      "X-USER-TOKEN": tk,
    },
  }).then((res) => {
    if (res.status === 200) {
      alert("Log submitted");
    }
  });
};
export { pixelaNewUser, pixelaOldUser };
