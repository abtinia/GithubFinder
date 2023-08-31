class Github {
    constructor() {
        this.client_id = '20ab8a60c5d4a8d0f1d4';
        this.client_secret = 'e5c9bb5e30c938cd0a2f4009c9d2f33b034caf7d';
        this.github_tokens = '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';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async get_user(user) {
        const profile_response = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        );

        const repo_response = await fetch(
            `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
        );

        const profile = await profile_response.json(profile_response);
        const repo = await repo_response.json(repo_response);

        return {
            profile,
            repo,
        };
    }
}
