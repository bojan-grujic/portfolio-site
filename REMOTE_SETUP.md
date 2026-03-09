# Remote Repository Setup

1. Go to your Git hosting service (GitHub/GitLab/Bitbucket) and create a **new repository**. Do not add a README or .gitignore since you've already committed locally.
2. Copy the remote URL (SSH or HTTPS).
3. In your project root run:
   ```bash
   git remote add origin <REMOTE_URL>
   git branch -M main           # if you want to use "main" as default branch
   git push -u origin main      # push the initial commit
   ```
   Replace `<REMOTE_URL>` with the URL you copied.
4. After this, future commits can be pushed with `git push`.

---

> **Tip:** If you use GitHub and want to automate this from command line, install the `gh` CLI and run
> ```bash
> gh repo create my-repo --public --source=. --remote=origin
> ```
> Otherwise, just use the web UI as described above.
