# Deployment Guide

## Table of Contents
- [Useful Links](#links)
- [Extensions](#extensions)
- [Unit 1](#unit-1)
  - [Overview](#overview)
  - [Learning Teams: Connecting](#learning-teams-connecting)
  - [Career Connection](#career-connection)
  - [Creating a GitHub Account](#creating-a-github-account)
  - [Already Have a GitHub Account?](#already-have-a-github-account)
  - [Accept the GitHub Invitation](#accept-the-github-invitation)
  - [Submission](#submission)
  - [Extensions](#extensions)
  - [Criteria](#criteria)
  - [Discussion Prompt](#discussion-prompt)
  - [Lesson Overview](#lesson-overview)
  - [Learning Objectives](#learning-objectives)
  - [Guided Practice: Basic Terminal Commands](#guided-practice-basic-terminal-commands)

## Links

### Computing & Development Basics - Command Line 
(https://docs.google.com/document/d/1eu3rGjemw-64gtqmPK4FaKqPj3q-cMvER2-3XC5lxAs/edit?usp=sharing)

# Extensions

Do you prefer using the GUI or the terminal for managing your files? What about for writing code? As a software engineer, being proficient in both environments is essential!

If you’re confident in your ability to create, view, move, rename, and delete files and folders using both the GUI and the terminal, you may be interested in exploring some more advanced Command Line Interface (CLI) techniques. Note that these advanced techniques are not required for the bootcamp!

## Advanced CLI Techniques

### Connecting Commands with Pipes
Learn how to use pipes to connect commands in the terminal for enhanced productivity. [Read more](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line#connecting_commands_together_with_pipes)

### Automating Commands with `sh`
Discover how to automate repetitive tasks using shell scripts. [Read more](https://linux.die.net/man/1/sh)

### Learning Vim
Vim is a highly configurable text editor built for efficient text editing. Start mastering Vim today. [Read more](https://www.vim.org/)

### Learning Emacs
Emacs is an extensible, customizable text editor with a robust ecosystem. Explore its features and functionality. [Read more](https://www.gnu.org/software/emacs/)

## Unit 1

### Overview
In order to do software engineering tasks, your machine needs a specific set of tools, technologies, and settings in place. Collectively, these conditions are referred to as your **development environment**. An engineer may need different development environment setups depending on the tech stack they are using and the projects they are working on.

This module will guide you through the basic information and introduction to setting up your environment for full-stack JavaScript web development. The goal at this stage is not to gain a deep understanding of the technologies you are installing — you will learn about each in more depth as you work with them throughout the bootcamp.

### Learning Teams: Connecting
📝 **Our Team Goals**

Work with your team to review the high-level curriculum objectives for Unit 1. After completing Unit 1, you should demonstrate an understanding of:
- Operating system basics of file structure and permissions
- Command line interface and basic commands
- Installation and basic use of an integrated development environment (IDE)
- Git and GitHub fundamentals
- Frontend web development with HTML
- Frontend web development with CSS

You can review the calendar for your cohort for detailed topics to be covered in Unit 1. Work with your team to identify two or three goals for this unit. Remember to include:
- Curriculum-focused goals
- Work-ethic or professional goals
- Fun or team-building goals (e.g., learning everyone’s favorite food, determining if a hotdog is a sandwich)

### Career Connection
Your GitHub username will be part of your professional presence as an engineer. Choose a username wisely, as you'll include it on your resume to showcase portfolio projects for potential employers.

### Creating a GitHub Account
1. Select "Start Assignment" on the assignment page.
2. Open a second Canvas tab and go to **Account > Settings**.
3. Copy your email address from the "Ways To Connect" section.
4. Go to the [Join GitHub page](https://github.com/join).
5. Paste your email and complete the setup.
6. Verify your email via the confirmation email.
7. Log in to GitHub, go to **Settings > Emails**, and ensure your primary email matches your Canvas account.

### Already Have a GitHub Account?
1. Select "Start Assignment" on the assignment page.
2. Open a second Canvas tab and go to **Account > Settings**.
3. Copy your email from the "Ways To Connect" section.
4. Log in to GitHub and check **Settings > Emails**.
5. If your email matches, you're done; otherwise, add your Canvas email and verify it.

### Accept the GitHub Invitation
1. Complete the provided form.
2. Verify your email to accept the Fullstack Academy invitation.
3. Confirm access to the [Welcome repository](https://github.com/fullstackacademy/welcome).

### Submission
1. Open the Welcome GitHub Repo and take a screenshot of the README.md.
2. Upload the screenshot and select "Submit Assignment."

### Extensions
As a member of the open source community, consider contributing to projects. Use GitHub's search bar to find interesting projects to explore and share.

### Criteria
- **Screenshot**: Submit a screenshot of "Welcome to Fullstack Academy!" README.

### Discussion Prompt
As a team, discuss the following prompt: When have you (or have you ever) used a command line interface before?

### Lesson Overview
Today, we are diving deeper into the terminal. We will use it for basic file system operations and to install software for this cohort.

### Learning Objectives
- Explain the purpose and usage of "sudo"
- Identify the appropriate terminal/environment for a task
- Identify the appropriate file system for a task using Windows or WSL
- Describe the purpose of basic commands
- Read a command prompt to determine current location in the file system
- Identify parts of a command (e.g., flags)

### Guided Practice: Basic Terminal Commands
Learn some terminal commands before diving into the workshops. Follow along with your instructor:
- **Change Directory**: `cd [directory name]`
  ```bash
  cd myFolder
  cd ..
  cd ~
  ```

- **List Directory Contents**: `ls [directory name]`
  ```bash
  ls
  ls myFolder
  ls ..
  ls ~
  ```

- **Copy Files**: `cp [-optional flags] [source] [destination]`
  ```bash
  cp myFile.txt myFileCopy.txt
  cp -r myFolder myFolderCopy
  cp myFile.txt ..
  cp myFile.txt ~
  ```

- **Move Files**: `mv [source] [destination]`
  ```bash
  mv myFile.txt mySameFile.txt
  mv myFile.txt ..
  mv myFile.txt ~
  ```

- **Remove Files**: `rm [-optional flags] [target]`
  ```bash
  rm myFile.txt
  rm -r myFolder
  ```

- **Create a Directory**: `mkdir [-optional flags] [new directory location and name]`
  ```bash
  mkdir newDir
  mkdir ../newDir
  mkdir ~/newDir
  mkdir -p ~/newDir/newDir2
  ```

- **Create a File**: `touch [location and file name]`
  ```bash
  touch newFile.txt
  ```

- **List Root Directory**: `sudo [command]`
  ```bash
  sudo ls /root
  ```

Ensure you understand each command and its functionality as you prepare for upcoming assignments.