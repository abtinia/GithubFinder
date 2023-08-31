class UI {
  constructor() {
    this.profile = document.querySelector(".profile_container");
  }

  show_profile(data) {
    this.profile.innerHTML = `
    <div class="profile_container">
    <div class="profile">
      <div class="left_section">
        <div class="user_info">
          <div class="avatar">
            <img src="${data.avatar_url}" class="user_avatar" />
            <a href="${data.html_url}" target="_blank" class="view_profile">view profile</a>
          </div>
          <div class="info_detail">
            <div class="detail_blocks">
              <button class="public_repos">Public Repos: ${data.public_repos}</button>
              <button class="public_gists">Public Gists: ${data.public_gists}</button>
              <button class="followers">Followers: ${data.followers}</button>
              <button class="following">Following: ${data.following}</button>
            </div>
            <ul class="user_detail">
              <li class="user_detail_info">company: ${data.company}</li>
              <li class="user_detail_info">website/blog: ${data.blog}</li>
              <li class="user_detail_info">Location: ${data.location}</li>
              <li class="user_detail_info">
                member since: ${data.created_at}
              </li>
            </ul>
          </div>
        </div>
        <div class="commit_graph_container">
          <img src="https://ghchart.rshah.org/${data.login}" class="commit_graph" />
        </div>
      </div>

      <div class="right_section">
        <div class="latest_repos">Latest Repos</div>
        <div class="repos_container">
        </div>
      </div>
    </div>
  </div>
    `;
  }

  show_repos(data) {
    console.log(data);
    let output = "";
    data.forEach(function (repo) {
      output += `      
          
    <div class="repository">
      <div class="repository_content">
        <div class="repository_left">
          <div class="repository_title">${repo.name}</div>
        </div>
        <div class="repository_right">
          <button class="stars_btn">stars:${repo.stargazers_count}</button>
          <button class="watchers_btn">watchers:${repo.watchers_count}</button>
        </div>
      </div>
    </div>
          
      `;
    });
    document.querySelector(".repos_container").innerHTML = output;
  }

  show_alert() {
    this.clear_alert();
    const alert_block = document.querySelector(".alert_block");
    alert_block.innerHTML = `<div class="alert">User Not Found</div>`;

    setTimeout(() => {
      this.clear_alert();
    }, 3000);
  }

  clear_alert() {
    const current_alert = document.querySelector(".alert");

    if (current_alert) {
      current_alert.remove();
    }
  }

  clear_profile() {
    this.profile.innerHTML = "";
  }
}
