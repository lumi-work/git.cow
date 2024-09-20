# Git Cow
- [Discord Community](https://discord.gg/busS7rtq45)
- [Overview](#overview)
- [Installation](#installation)
- [Installation](#contribute)
- [License](#license)

## Overview

Welcome to **git.cow**! Thank you for your interest in contributing!

We understand that tracking your GitHub activity and project metrics can be challenging and time-consuming. That's where **git.cow** comes in. Our goal is to help developers gain deeper insights into their coding habits and project progress, making it easier to focus on writing great code without the hassle of manual tracking.

Before you jump in, here's what you need to know about **git.cow**:

- **[What is git.cow?](https://git-cow.gitbook.io/git.cow-docs)**  
git.cow is a sophisticated web tool designed for developers who want a more efficient way to analyze their GitHub activity and project metrics. With features that help visualize your coding patterns and track performance, git.cow makes managing your development workflow more intuitive.

Key features include:
- Weekly and monthly breakdowns of time spent on projects (e.g., how many hours did you code?)
- Weekly and monthly analyses of your commits, PRs, and issue counts
- In-depth analyses with custom graphs and charts for your repositories
- Statistics on the most used npm packages in your GitHub projects for the month

Check out the docs and get familiar with how git.cow can work for you. Once you're comfortable, you'll be ready to start contributing and making the platform even better!

## Installation

### 1. Fork the Repository
Click the "Fork" button at the top right of this repository to create a copy of the project in your GitHub account.

### 2. Clone the Repository
After forking, clone the repository to your local machine by running the following command:
```bash
git clone https://github.com/lumi-work/git.cow.git
```

### 3. Navigate to the Project Directory
```bash
cd git.cow
```

### 4. Install Dependencies
Choose your preferred package manager to install the required dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 5. Set Up Supabase

1. Go to [Supabase](https://supabase.io) and create a project.
2. In your Supabase dashboard, navigate to `Settings` > `API` and copy the `API URL` and `anon public` key.
3. Create a `.env.local` file in the root of your project and add the following environment variables:
```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 6. Run the Development Server
You can now run the development server using one of the following commands:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Contribute

1. Fork the project.
2. Create a new branch for your feature or bug fix:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Add some feature"
    ```
4. Push your changes to your fork:
    ```bash
    git push origin feature/your-feature-name
    ```
5. Open a pull request on this repository.

## License
This project is open source and available under the [MIT License](LICENSE).
