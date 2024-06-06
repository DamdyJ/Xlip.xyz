# Xlip.xyz
![xlip](https://github.com/DamdyJ/Xlip.xyz/assets/152348339/6d6d9e3c-34f6-4df5-88d0-d39125260a32)

**xlip.xyz** is a simple and efficient URL shortener website that allows you to easily create short links by copying and pasting your long URLs. It also features an AI-powered name suggestion tool and a minimalist random 4-character generator for your shortened links.

## Features

- **Easy URL Shortening**: Just copy and paste your long URL to create a short link.
- **AI Name Suggestions**: Get intelligent name suggestions for your links using AI.
- **Random Character Links**: Generate short links using random 4-character strings.
- **Custom Redirects**: Users can navigate to `/go/your-url-name` to be redirected to their destination URL.

## Technologies Used

- **Frontend**: Next.js
- **API Routes**: Next.js API Routes
- **Database**: Prisma with CockroachDB

## Deployment

This project is deployed on Vercel. You can access it at [xlip.xyz](https://xlip.xyz).

## Roadmap

1. **Completed**:
    - Landing page for user input of long URLs
    - Two types of short links: AI-generated names and 4 random characters
    - Redirection feature via `/go/your-url-name`

2. **Upcoming**:
    - User authentication and link management dashboard
    - Analytics dashboard to track link performance
    - Customizable link expiration dates
    - Enhanced AI suggestions with user feedback integration
    - Browser extension for quick link shortening

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/DamdyJ/Xlip.xyz.git
   cd xlip.xyz
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your database with Prisma and CockroachDB. Update your `.env` file with your database connection string.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to see the landing page.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements.

## License
