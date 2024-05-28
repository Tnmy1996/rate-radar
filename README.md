# RateRadar

RateRadar is a Next.js web application that fetches and displays cryptocurrency exchange rates in real-time. It provides multi-language support, error handling, and can be deployed using Docker or Kubernetes.

## Features

-   **Real-Time Exchange Rates**: Fetches and displays cryptocurrency exchange rates from the Coinbase API.
-   **Multi-Language Support**: Supports multiple languages with easy language switching.
-   **Visual Representation**: Integrates cryptocurrency icons for a better visual representation of the exchange rates.
-   **Error Handling**: Gracefully handles API errors and displays appropriate messages.
-   **Deployment Options**: Can be deployed using Docker for easy and scalable deployment.

## Getting Started

### Prerequisites

Make sure you have the following installed:

-   [Node.js](https://nodejs.org/)
-   [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Tnmy1996/rate-radar.git
    cd rate-radar
    ```

2. Install dependencies:

    ```bash
    pnpm install
    ```

### Running the Application

#### Development

To start the development server, run:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### Production

To build and start the application in production mode:

1. Build the Next.js app:

    ```bash
    pnpm run build
    ```

2. Run the Next.js app:

    ```bash
    pnpm run start
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application running.

## Deployment

### Docker

To build and run the Docker container:

1. Build the Docker image:

    ```bash
    docker build -t rate-radar .
    ```

2. Run the Docker container:

    ```bash
    docker run -p 3000:3000 rate-radar
    ```

## Scripts

The following scripts are defined in the `package.json` file:

-   `dev`: Runs the development server.
-   `build`: Builds the application for production.
-   `start`: Starts the application in production mode.
-   `format`: Formats the code using Prettier.
-   `lint`: Lints the code using ESLint.
-   `lint-fix`: Fixes linting errors.

## Technologies Used

RateRadar utilizes the following technologies:

-   **Next.js**: React framework for server-side rendering and static site generation.
-   **Tailwind CSS**: Utility-first CSS framework for styling.
-   **Radix UI**: Unstyled, accessible components for building high-quality design systems and web apps.
-   **React Query**: Data fetching and state management for React.
-   **Tanstack Query**: TypeScript-first data fetching library for React applications.
-   **Tanstack Table**: Data table library for React applications.
-   **Shadcn UI**: UI library for React with beautiful and customizable components.
-   **Cryptocurrency Icons**: Icons for various cryptocurrencies.
-   **Zod**: TypeScript-first schema declaration and validation library.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.txt) file for more details.

---

For more information, visit the [RateRadar GitHub repository](https://github.com/Tnmy1996/rate-radar).
