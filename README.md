# Getting Started for New Members


# 1. Clone the repository
git clone [<repository-link>](https://github.com/Btpehtp/btpehtp.git
)
cd <btpehtp>

# 2. Configure Git (first time only)
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"

# 3. Create a new branch to work on
git checkout -b my-feature-branch

# 4. Make changes in VS Code
# (Edit files, add new files, etc.)

# 5. Stage and commit changes
git add .
git commit -m "Describe your changes"

# 6. Push your branch to GitHub
git push origin my-feature-branch

# 7. Create a Pull Request on GitHub
# (Go to GitHub, compare & pull request, add description, submit)

# 8. Keep your local repository updated
git checkout main
git pull origin main
git checkout my-feature-branch
git merge main
