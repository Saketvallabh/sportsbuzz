🏏 SportsBuzz

live url - https://sportsbuzz.vercel.app/matches

SportsBuzz is a full-stack IPL Dashboard built with Next.js (frontend) and Node.js + Express (backend).
It displays Matches, Points Table, Schedule, and Scorecards with a UI inspired by iplt20.com
.

🚀 Features

🔹 Frontend (Next.js + TypeScript + Tailwind)

    . Built with Next.js 15 + TypeScript
    . Responsive UI styled with Tailwind CSS
    . Navbar with Matches, Points Table, Schedule (center aligned, hover animations)

Matches Page:
    . Cards for each match (hover enlarge, clickable)
    . Redirects to full scorecard page

Scorecard Page:
    . Two collapsible sections (each team) with batting & bowling tables
    . Rounded tables, player names in blue, hover enlarge rows

Points Table Page: IPL-style standings

Schedule Page: Upcoming matches in card format

🔹 Backend (Node.js + Express)

APIs built using Express.js

Routes:
    GET /api/matches → List all matches
    GET /api/matches/:id/scorecard → Match scorecard
    GET /api/points-table → Points table
    GET /api/schedule → Match schedule

🔹 Scraping Logic & Fallback

Initially attempted scraping directly from iplt20.com
.

Issues:
    IPL site uses heavy client-side rendering + JS obfuscation
    cheerio & simple scrapers returned empty data
    Puppeteer (headless browser) was tried but still inconsistent on Render

✅ Solution:
    Added dummy fallback data for Matches, Points Table, Schedule, and 24 Scorecards.
    Ensures APIs always return usable responses during demos.
    Code is structured so scraping can be plugged in later without breaking APIs.

🗂️ Project Structure
Frontend (/frontend)

frontend/
 └── src/
     ├── app/
     │   ├── matches/
     │   │   ├── [matchId]/scorecard/page.tsx   # Scorecard Page
     │   │   └── page.tsx                       # Matches List
     │   ├── points-table/page.tsx              # Points Table Page
     │   ├── schedule/page.tsx                  # Schedule Page
     │   └── layout.tsx                         # Layout wrapper
     ├── components/
     │   ├── Navbar.tsx                         # Navbar
     │   ├── MatchCard.tsx                      # Match card
     │   ├── ScheduleCard.tsx                   # Schedule card
     │   └── ScoreCard.tsx                      # Scorecard table


Backend (/backend)

backend/
 └── src/
     ├── server.js          # Server entry
     ├── app.js             # Express app setup
     ├── routes/
     │   ├── matches.js     # Matches API
     │   ├── scorecard.js   # Scorecard API
     │   ├── schedule.js    # Schedule API
     │   └── pointsTable.js # Points Table API
     └── data/
         ├── matches.js     # Dummy matches
         ├── scorecards.js  # Dummy scorecards
         ├── schedule.js    # Dummy schedule
         └── pointsTable.js # Dummy points table

⚙️ Setup Instructions
🔹 Backend
    cd backend
    npm install
    npm run dev

Runs at: http://localhost:3001

APIs:
    GET /api/matches
    GET /api/matches/:matchId/scorecard
    GET /api/points-table
    GET /api/schedule

🔹 Frontend
    cd frontend
    npm install

Create .env.local:

NEXT_PUBLIC_API_URL=http://localhost:3001


Run frontend:
    npm run dev


Open: http://localhost:3000

🌐 Deployment

Frontend → Vercel
Backend → Render
Backend Deployment Notes
    On Render, sometimes auto-deploy doesn’t trigger.
    To pull latest commit:
    Go to service → Manual Deploy → Deploy Latest Commit.

Enable auto-deploy for main branch in Render settings.

📌 Notes for Reviewers

    The project fulfills frontend/backend integration, with APIs and UI.

    Scraping real-time IPL data was unreliable → replaced with robust dummy data.

    The design allows future replacement of dummy data with actual scraping or an official API without changing the frontend.

    Reviewers can test live deployment directly on the provided Vercel link.