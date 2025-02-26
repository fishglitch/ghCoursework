# Workshop: GitHub Workflow

"There is nothing permanent, except change."

## Table of Contents
- [Overview](#overview)
- [Review: Discussion Questions](#review-discussion-questions)
- [Repo Setup](#repo-setup)
  - [Student A](#student-a)
  - [Student B](#student-b)
  - [Both Students](#both-students)
- [Feature Branches](#feature-branches)
  - [Creating a Local Feature Branch](#creating-a-local-feature-branch)
  - [Working on Different Features](#working-on-different-features)
  - [Saving Your Work](#saving-your-work)
- [Pull Requests](#pull-requests)
  - [Creating a Pull Request](#creating-a-pull-request)
  - [Reviewing a Pull Request](#reviewing-a-pull-request)
- [Merge Conflicts](#merge-conflicts)
  - [Resolving the Merge Conflict](#resolving-the-merge-conflict)
  - [Approving the PR](#approving-the-pr)
- [Cleanup](#cleanup)
  - [Remote Branches](#remote-branches)
  - [Local Branches](#local-branches)
- [Workshop: GitHub Workflow Criteria](#workshop-github-workflow-criteria)

## Overview
In this workshop, you will practice using Git to version control your projects. You will also learn some best practices on how to collaborate with other developers on code using GitHub.

## Review: Discussion Questions
- Compare and contrast a computer's GUI and CLI. What is similar? What is different?
- What do you need more support on? Share your needs with your ITM.
- Check-in: As a team, check in on each other. Identify any common questions, themes, or confusion from today's lesson. Share with your instructional team member any extra support the team feels is needed.

## Repo Setup
For this section, you will need VS Code and GitHub.

### Student A
1. Create a repository on GitHub and name it `github-workflow`.
2. Make sure that the repo is initialized with a README!
3. Click the Settings button, and then navigate to the Collaborators page in the left sidebar.
4. Click the Add people button and add Student B via their GitHub username or email.

### Student B
Student A will be creating the repository. Watch your email for an invitation from GitHub to collaborate. The repo name should be `github-workflow`.

### Both Students
1. Once both students have access to the repo, go to the repo's main page.
2. Click on the highlighted Code button. A dropdown should appear.
3. Copy the SSH link - not the HTTPS link!
4. In your VSCode terminal, ensure that you are in your Unit 1 Block 4 directory.
5. Clone the repo by running `git clone <SSH link>` in your terminal. If prompted, enter your password.

## Feature Branches
For this section, you will be working only in VS Code. When developers work on a project, especially if working with others, they do not work directly on the main branch. Instead, they work on separate feature branches.

### Creating a Local Feature Branch
1. Open the newly-cloned `github-workflow` folder in VS Code. You should see only one file: `README.md`.
2. In your terminal, run the command: `git checkout -b feature-<A/B>`.
   - Student A should have a branch named `feature-A`.
   - Student B should have a branch named `feature-B`.
3. You should now see that you have switched from main to your corresponding feature branch. Confirm by running `git status` or `git branch`.

### Working on Different Features
1. Open `README.md` and edit as follows:
   - Student A should write "To improve is to change" on line 2.
   - Student B should write "There is nothing permanent, except change" on line 2.
2. Save your changes to the file.

### Saving Your Work
1. Run `git add .` to add the changes to the staging area.
2. Run `git commit -m "<message>"` to commit the changes. The commit message should explain how the code has been changed since the last commit. Use "Add feature <A/B>" as your message, depending on who you are.

## Pull Requests

### Creating a Pull Request
1. Run `git push -u origin feature-<A/B>` to push the changes to your remote feature branch.
2. Navigate to the main page of the repository on GitHub.
3. Go to the Pull Requests tab.
4. Click on the New pull request button.
5. In the base dropdown menu, select the branch into which the changes will be merged (choose main).
6. In the compare dropdown menu, select your feature branch (feature-<A/B>).
7. Click the Create pull request button.
8. Add a title and comment summarizing your work, e.g., "Completed feature <A/B>".
9. Click the Create pull request button.

### Reviewing a Pull Request
1. Once both students have finished, you should see both pull requests in the Pull Requests tab.
2. Review the other student's pull request by leaving comments, questions, or suggestions.
3. Student B should approve the PR by clicking the Merge Pull Request button (Student A should not do this).
4. Confirm that feature-A has been merged into main by navigating back to the repo's main page. The README should now include Student A's addition.

### Merge Conflicts
Merge conflicts can occur, and knowing how to resolve them is crucial for software engineers.

#### Resolving the Merge Conflict
1. Student B should run `git fetch origin main:main` to update the local main branch to match the remote main branch.
2. Ensure that you are still on the feature branch via `git status` or `git branch`.
3. Run `git merge main` to merge the changes from the main branch into the current branch. This will show a conflict.
4. Open `README.md`, find the merge conflict syntax, and resolve the conflicts using VS Code tooling (select "Accept Both Changes").
5. Save your changes to `README.md`.
6. Run `git add .`, then `git commit` without a message. An editor will appear with a default merge message.
7. Run `git push` to update the remote feature branch with your fixes.

### Approving the PR
1. Once Student B pushes their changes, Student A should review the pull request again on GitHub.
2. Student A should now be able to select Merge Pull Request.
3. Confirm that feature-B has also been merged into main. The README should now contain both lines added by each student!
4. Congrats! You've just resolved your first merge conflict!

## Cleanup
You’re almost done! The last thing left is to tidy up your local and remote environments.

### Remote Branches
1. Go to the repo's main page on GitHub.
2. Go to the branches page by clicking on the link that says "3 branches".
3. You should see your two feature branches; their status should be Merged.
4. Click the trash can icon to delete your remote feature branch.

### Local Branches
1. Return to the main branch by running `git switch main` (or `git checkout main`).
2. Run `git pull` to fetch the updates.
3. Run `git branch -d feature-<A/B>` to delete your local feature branch.

## Workshop: GitHub Workflow Criteria
- **README.md**: The README file includes the following quotes:
  - "To Improve is to change"
  - "There is nothing permanent, except change"
  
- **Main Branch**: The screenshot shows that the README file is in the main branch.  
  *Note to reviewer: The branch dropdown menu should say "main".*