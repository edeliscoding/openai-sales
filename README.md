# React + Vite

# Sales Data Visualization with OpenAI Integration

This project is a React application that visualizes sales data and uses OpenAI to answer queries about the data.

## Setup

1.  Clone the repository
2.  Install dependencies:
    ```
    npm install
    ```
3.  Copy `.env.example` to `.env` and fill in your OpenAI API key:
    ```
    cp .env.example .env
    ```
4.  Open `.env` and replace `your_openai_api_key_here` with your actual OpenAI API key

## Running the Application

To start the development server:

```
npm run dev
```

## Environment Variables

This project uses the following environment variables:

- `VITE_OPENAI_API_KEY`: Your OpenAI API key

Make sure to set these in your `.env` file before running the application.

## Security Note

Never commit your `.env` file or expose your API keys in your code. The `.env` file is included in `.gitignore` to prevent accidental commits.
