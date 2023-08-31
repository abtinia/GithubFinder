const github = new Github();
const ui = new UI();

const search_bar = document.querySelector(".search_bar");

search_bar.addEventListener("keyup", (e) => {
  const search_content = e.target.value;

  if (search_content != "") {
    github.get_user(search_content).then((data) => {
      if (data.profile.message == "Not Found") {
        ui.show_alert();
      } else {
        ui.show_profile(data.profile);
        ui.show_repos(data.repo);
      }
    });
  } else {
    ui.clear_profile();
  }
});
