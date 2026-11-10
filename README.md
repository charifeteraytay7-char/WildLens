# WildLens – Wildlife and Biodiversity Discovery Platform

**Explore Wildlife. Discover Nature. Protect Biodiversity.**

WildLens is a React-based wildlife and biodiversity discovery platform that allows users to explore wildlife observations from around the world using real data from the iNaturalist API.

The platform also features a dedicated Philippines exploration section where users can discover wildlife observations recorded in the country.

## Project Overview

WildLens aims to make wildlife and biodiversity information more accessible through an interactive and user-friendly web application.

Users will be able to discover different organisms, search for wildlife observations, filter and sort results, view observation details, and save their favorite observations.

This project is developed as an individual academic project for Web Systems and Technologies.

## Main Objectives

- Provide an accessible platform for discovering wildlife observations.
- Retrieve and display real data from an external REST API.
- Allow users to explore worldwide and Philippine biodiversity.
- Provide interactive search, filtering, sorting, and pagination.
- Allow users to save favorite observations using browser local storage.

## Main Features

The following features are planned for the application:

1. **Wildlife Search** – Search for wildlife observations and species.
2. **Category Filtering** – Explore different organism groups, such as birds, mammals, insects, reptiles, and plants.
3. **Location Filtering** – Switch between worldwide observations and observations from the Philippines.
4. **Sorting** – Organize observations using available attributes.
5. **Pagination** – Browse observation results in manageable pages.
6. **Observation Details** – View additional information about a selected observation.
7. **Favorites** – Save and remove favorite wildlife observations.
8. **Local Data Persistence** – Keep saved favorites using localStorage.
9. **Loading and Error Handling** – Display loading indicators, helpful error messages, and retry options.

## Technologies and Tools

- React
- Vite
- JavaScript
- HTML5
- CSS3
- React Router
- Fetch API
- Browser localStorage
- Git and GitHub

## External API

WildLens will use the iNaturalist API to retrieve public wildlife observation and biodiversity information.

- API Provider: https://www.inaturalist.org/
- API Base URL: https://api.inaturalist.org/v1
- API Documentation: https://api.inaturalist.org/v1/docs

The application will use public observation data, including available photographs and observation information.

WildLens will provide appropriate photographer attribution, photograph license information when available, and links to the original observation records.

API requests will follow iNaturalist usage guidelines.

## Application Pages

| Page | Route | Description |
|---|---|---|
| Explore | `/` | Discover worldwide and Philippine wildlife observations. |
| Observation Details | `/observation/:id` | View details about a selected observation. |
| Favorites | `/favorites` | View and manage saved observations. |

## Installation and Setup

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git
- Visual Studio Code

### 1. Clone the repository

```bash
git clone https://github.com/charifeteraytay7-char/WildLens.git
```

### 2. Enter the project directory

```bash
cd WildLens
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project's root directory.

Copy the contents of `.env.example` into `.env`.

```env
VITE_INATURALIST_API_BASE_URL=https://api.inaturalist.org/v1
```

This variable configures the base URL used for iNaturalist API requests.

Do not put private API keys, passwords, or secret credentials in Vite environment variables because client-side variables are exposed to the browser.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173/
```

## GitHub Repository and Version Control

Repository: https://github.com/charifeteraytay7-char/WildLens

WildLens follows a feature-branch development workflow.

- `main` – Stable project branch.
- `feature/*` – Branches for individual development tasks.
- Changes are committed with descriptive commit messages.
- Feature branches are uploaded to GitHub.
- Pull Requests are used to review and merge changes into `main`.

Direct commits to the `main` branch are avoided in accordance with the project instructions.

## Individual Project Contributions

This is an individually developed academic project.

The student developer is responsible for:

- Project planning and system design.
- User interface and frontend development.
- React component development.
- External API integration and data handling.
- Search, filtering, sorting, and pagination.
- React Router navigation.
- Favorites and localStorage implementation.
- Application testing and debugging.
- Git and GitHub version control.
- Project documentation and final preparation.

## Project Status

**Current status:** Initial React and Vite project setup completed. Main application features are planned and will be implemented during subsequent development stages.

---

Developed as an individual final project for **Web Systems and Technologies**.