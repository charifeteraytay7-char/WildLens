
# WildLens – Wildlife and Biodiversity Discovery Platform

**Explore Wildlife. Discover Nature. Protect Biodiversity.**

## Project Overview

WildLens is a React-based wildlife and biodiversity discovery platform that allows users to explore public wildlife observations from around the world using the iNaturalist REST API.

The application provides worldwide wildlife exploration and a dedicated Philippines section, allowing users to discover biodiversity recorded in the country.

This project is developed individually as a final project for Web Systems and Technologies.

## Project Objectives

- Provide an accessible platform for discovering wildlife observations.
- Retrieve and display data from an external public REST API.
- Allow users to explore worldwide and Philippine biodiversity.
- Provide interactive search, category filtering, and pagination.
- Allow users to save favorite wildlife observations using browser localStorage.
- Present wildlife photographs with available attribution and license information.

## Implemented Features

1. **Wildlife Search** – Search wildlife observations using keywords.
2. **Category Filtering** – Filter observations by organism categories such as birds, mammals, insects, reptiles, and plants.
3. **Worldwide Exploration** – Browse public wildlife observations from around the world.
4. **Philippines Exploration** – Explore wildlife observations recorded in the Philippines.
5. **Pagination** – Browse wildlife observations in manageable pages.
6. **Favorites** – Save and remove favorite wildlife observations.
7. **Local Data Persistence** – Preserve saved favorites using browser localStorage, including after refreshing the page.
8. **Loading States** – Display loading indicators while retrieving observations.
9. **Error Handling and Retry** – Display helpful error messages and provide a retry option when API requests fail.
10. **Photo Attribution and Licensing** – Display available photographer attribution and photo license information.
11. **Original Observation Links** – Provide links to the corresponding iNaturalist observation records.
12. **Responsive Interface** – Provide a nature-inspired interface designed for different screen sizes.

## Technologies and Tools

- React
- Vite
- JavaScript
- HTML5
- CSS3
- React Router
- Fetch API
- Browser localStorage
- iNaturalist REST API
- Git and GitHub
- Visual Studio Code

## External API

WildLens uses the **iNaturalist API** to retrieve public wildlife observations and biodiversity information.

- API Provider: https://www.inaturalist.org/
- API Base URL: https://api.inaturalist.org/v1
- API Documentation: https://api.inaturalist.org/v1/docs

The application retrieves public observation information and available photographs.

Where provided by the API, WildLens displays photographer attribution and photo license information. It also provides links to original observation records.

API requests are made through the Fetch API, with asynchronous JavaScript functions and error handling.

## Application Pages and Routes

| Page | Route | Description |
|---|---|---|
| Worldwide Explore | `/` | Browse, search, and filter worldwide wildlife observations with pagination. |
| Philippines | `/philippines` | Explore wildlife observations recorded in the Philippines. |
| Favorites | `/favorites` | View and manage saved wildlife observations. |

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

Create a local `.env` file by copying the example configuration.

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

### 6. Create a production build

```bash
npm run build
```

### 7. Preview the production build

```bash
npm run preview
```

## GitHub Repository and Version Control

Repository: https://github.com/charifeteraytay7-char/WildLens

The project follows a feature-branch development workflow.

- `main` – Stable project branch.
- `feature/*` – Branches for individual development tasks.
- Use descriptive commit messages with conventional prefixes such as `feat:`, `fix:`, `style:`, and `docs:`.
- Upload changes through feature branches.
- Use Pull Requests to review and merge changes into `main`.

Direct commits to `main` are avoided in accordance with the project instructions.

## Individual Project Contributions

This is an individually developed academic project.

The individual student developer is responsible for:

- Project planning and system design.
- User interface and frontend development.
- Reusable React component development.
- External API integration and data handling.
- Search and category filtering.
- Pagination and navigation.
- Favorites and localStorage implementation.
- Loading states, error handling, and retry functionality.
- Application testing and debugging.
- Git and GitHub version control.
- Project documentation and final preparation.

## Testing and Verification

The following development checks have been completed:

- `npm run lint` – Passed without errors.
- `npm run build` – Production build completed successfully.
- `npm run preview` – Production website tested successfully.
- Manual testing – Worldwide Explore, Philippines, Favorites, search, category filtering, pagination, and favorite persistence tested.

## Project Status

**Current status:** The main WildLens application has been implemented and successfully merged into the GitHub `main` branch.

The application includes worldwide and Philippines wildlife exploration, interactive search and category filtering, pagination, favorites with localStorage persistence, API error handling, and a responsive user interface.

---

Developed as an individual final project for **Web Systems and Technologies**.
