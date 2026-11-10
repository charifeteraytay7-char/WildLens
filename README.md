# WildLens – Wildlife and Biodiversity Discovery Platform
**Explore Wildlife. Discover Nature. Protect Biodiversity.**

WildLens is a React-based wildlife and biodiversity discovery platform that allows users to explore public wildlife observations from around the world using the iNaturalist REST API.

The application will feature worldwide wildlife exploration and a dedicated Philippines section, allowing users to discover biodiversity recorded in the country.

This project is developed individually as a final project for Web Systems and Technologies.

## Project Objectives

- Provide an accessible platform for discovering wildlife observations.
- Retrieve and present data from an external public REST API.
- Allow users to explore worldwide and Philippine biodiversity.
- Provide interactive search, filtering, sorting, and pagination.
- Allow users to save favorite wildlife observations using localStorage.

## Planned Features

1. **Wildlife Search** – Search for wildlife observations and species.
2. **Category Filtering** – Explore organisms such as birds, mammals, insects, reptiles, and plants.
3. **Location Filtering** – Explore worldwide observations or observations from the Philippines.
4. **Sorting** – Organize observations using available attributes.
5. **Pagination** – Browse observations in manageable groups.
6. **Observation Details** – View additional information about selected observations.
7. **Favorites** – Save and remove favorite wildlife observations.
8. **Local Data Persistence** – Preserve saved favorites using browser localStorage.
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

WildLens will use the **iNaturalist API** to retrieve public wildlife observation and biodiversity information.

- API Provider: https://www.inaturalist.org/
- API Base URL: https://api.inaturalist.org/v1
- API Documentation: https://api.inaturalist.org/v1/docs

The application will retrieve public observation information and available photographs.

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

Install the following tools:

- Node.js
- npm
- Git
- Visual Studio Code

### 1. Clone the repository

```bash
git clone https://github.com/charifeteraytay7-char/WildLens.git
```

### 2. Open the project directory

```bash
cd WildLens
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

The project includes an `.env.example` file.

Create your local `.env` file by copying the example configuration.

For Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

The configuration should contain:

```env
VITE_INATURALIST_API_BASE_URL=https://api.inaturalist.org/v1
```

Do not place private passwords, tokens, or secret API credentials in Vite environment variables because client-side variables are exposed to the browser.

### 5. Run the development server

```bash
npm run dev
```

Open the local address displayed in your terminal, usually:

```text
http://localhost:5173/
```

## GitHub Repository and Version Control

Repository: https://github.com/charifeteraytay7-char/WildLens

The project follows a feature-branch development workflow.

- `main` – Stable project branch.
- `feature/*` – Branches for individual development tasks.
- Use descriptive commit messages with conventional prefixes.
- Upload changes through feature branches.
- Use Pull Requests to review and merge changes into `main`.

Direct commits to `main` are avoided in accordance with the project instructions.

## Individual Project Contributions

This is an individually developed academic project.

The individual student developer is responsible for:

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

**Current status:** Initial React and Vite project setup and GitHub documentation have been completed. The main application interface and required functionalities are planned for subsequent development stages.

---

Developed as an individual final project for **Web Systems and Technologies**.