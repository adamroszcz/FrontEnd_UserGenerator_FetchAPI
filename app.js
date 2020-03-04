console.log("jestem");

const showUsers = results => {
  console.log(results);
  results.forEach(user => {
    const element = document.createElement("div");
    // console.log(element);
    element.className = "user";
    element.innerHTML = `<div class="user__info">${user.name.title} ${user.name.firs} ${user.name.last}</div>
    <img src="${user.picture.medium}"/>
    <div class="user__location">${user.location.city},<strong>${user.location.country}</strong></div>
    <div class="user_phone">${user.cell}</div>
    `;
    document.querySelector(".user-list").appendChild(element);
  });
};

const handleSubmit = e => {
  e.preventDefault();
  const howMany = document.querySelector(".form__inputNumber").value;
  const gender = document.querySelector(".form__select").value;
  const url = `https://randomuser.me/api?results=${howMany}&gender=${gender}`;
  fetch(url)
    .then(response => {
      if (response.status !== 200) {
        throw Error("not 200 status");
      } else {
        return response.json();
      }
    })
    .then(json => showUsers(json.results))
    .catch(err => console.log(err));
};

document.querySelector("form").addEventListener("submit", handleSubmit);
