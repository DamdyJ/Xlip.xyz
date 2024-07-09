Here's an updated and cleaned-up version of your `README.md` file for the xlip.xyz project, focusing on providing clear instructions on how to clone and set up the project locally, along with using environment variables from `.env.example`.

# xlip.xyz

![thumbnail](https://github.com/DamdyJ/Xlip.xyz/assets/152348339/d5e3b367-65b5-4592-add2-26f171528eac)

**xlip.xyz** is a simple and efficient URL shortener website that allows you to easily create short links by copying and pasting your long URLs. It features an AI-powered name suggestion tool and a minimalist random 4-character generator for your shortened links.
<div align="center">
    <img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FDamdyJ%2FXlip.xyz&countColor=%23263759"/>
</div>

## Features

- **Easy URL Shortening**: Copy and paste your long URL to create a short link.
- **AI Name Suggestions**: Get intelligent name suggestions for your links using AI.
- **Random Character Links**: Generate short links using random 4-character strings.
- **Custom Redirects**: Navigate to `/go/your-url-name` to be redirected to your destination URL.

## Technologies Used

- **Frontend**: Next.js
- **Backend**: Next.js API Routes
- **Database**: Prisma with CockroachDB

## Deployment

This project is deployed on Vercel. Access it at [xlip.xyz](https://xlip.xyz).

## Roadmap

1. **Completed**:
   - Landing page for entering long URLs
   - Two types of short links: AI-generated names and random 4 characters
   - Redirection feature via `/go/your-url-name`

2. **Upcoming**:
   - User authentication and link management dashboard
   - Analytics dashboard to track link performance
   - Customizable link expiration dates
   - Enhanced AI suggestions with user feedback integration
   - Browser extension for quick link shortening

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DamdyJ/Xlip.xyz.git
   cd xlip.xyz
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up your environment**:
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Update `.env` with your database connection string and any other necessary environment variables.

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to `http://localhost:3000` to view the landing page.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements.

## License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.

---

This README now reflects the Apache 2.0 license for the project.
