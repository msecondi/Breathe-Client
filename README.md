# Breathe
*Being human isn’t just biology. It’s a practice.*

## Overview

**Breathe** is a calming, human-centered platform that draws attention to the modern epidemic of loneliness and disconnection. It offers an interactive, reflective space for users to slow down, process their emotions, and reconnect with what it means to be human. Whether through anonymous emotional release, reflective journaling, or absorbing meaningful quotes and stories, the platform serves as a gentle reminder that humanity still exists—and we can still find it within ourselves and one another.

## Problem Space

In an ever-evolving world, modern life moves fast. In chasing efficiency, the nature of being human has been numbed. We're constantly being notified, stressing to hit deadlines, curating personas, striving for the next goal. It’s become normalized to get caught in survival or status mode, constantly comparing, reacting, and consuming.

We scroll more than we sit in silence. We talk more online than face to face. We value productivity over presence. This web app serves as a reminder to slow down, 'smell the roses', sit with our thoughts, and better attune ourselves to the human experience.

## User Profile

Who will use this app and how?
- Individuals seeking personal insight or emotional processing
- People experiencing isolation or disconnection
- Users looking for mental health resources and reflective tools

Considerations:
This app will be mindful of the sensitive nature of mental health. It will include resources for those seeking professional assistance and provide safe, anonymous spaces for reflection and emotional expression.

## Features

- **Landing Page**
  - Rotating hero banner with words like “Genuity,” “Feeling,” “Honesty,” “Connection”
  - Inspirational quotes
  - Blurb about being human
  - Prompt: “What does being human mean to you?” + public feed of responses

- **Establish Problem Area Page**
  - Display articles, videos, and general information about the epidemic of disconnection
  - Mental health resources and the danger of unchecked distractions

- **Introspective Page**
  - Symbolic fire for anonymous emotional releases
  - Submissions fuel the fire which grows daily/weekly

## Implementation

### Tech Stack

- HTML, CSS, JavaScript
- TailwindCSS (optional)
- React, Axios
- Node.js, Express
- MySQL, Knex.js

### APIs

- **Optional AI API** – for reflective, perspective-shifting responses
- **Optional Event API** – Eventbrite or VolunteerMatch for local connection

### Sitemap

- Landing Page
- Establish the Problem Page
- Introspective Page

### Mockups

_To be added during design phase._

### Data Structure

**QUOTES**
- id, author, content

**REFLECTIONS**
- id, name (optional), message, created_at, updated_at

**BURN COUNT**
- date(primary), count

**RESOURCES**
- id, article_id, video_id

**ARTICLES**
- id, title, content, likes, url

**VIDEOS**
- id, title, description, likes, url

### Endpoints

- `GET /reflections`
- `POST /reflections`
- `GET /resources`
- `GET /resources/help`
- `POST /fire-feed`
- `GET /fire-feed/count`

## Roadmap

### Phase 1 – MVP (Demo Day Ready)

**Backend**
- Set up Express server + MySQL via Knex
- Create/migrate tables: `quotes`, `reflections`, `burn_count`
- Endpoints:
  - `GET /quotes`
  - `GET/POST /reflections`
  - `POST /fire-feed`
  - `GET /fire-feed/count`

**Frontend**
- React setup with Axios
- Landing Page: hero banner, quotes, reflection form and feed
- Introspection Page: fire animation, anonymous input, real-time counter

### Phase 2 – Feature Enhancement

**Backend**
- Add tables: `articles`, `videos`, `resources`
- Additional endpoints:
  - `GET /resources`
  - `GET /resources/help`

**Frontend**
- Problem Page: curated articles, videos, support links
- Design: transitions, responsiveness, fire animation and sound

### Phase 3 – Stretch Goals / Future Implementations

- Quote of the Day feature
- AI-powered emotional reframing
- Mood-based immersive space: visuals, sounds, quotes
- Local event/volunteer integration (Eventbrite or VolunteerMatch)
- Kindness Stories page
- User authentication
- Data visualization: social media vs. isolation graphs
- Data visualization: daily 'burning' trends (user interactivity with fire-feed over time)
