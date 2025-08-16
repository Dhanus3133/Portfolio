# Dynamic SvelteKit & Tailwind CSS Portfolio

Welcome to a sleek, modern, and fully customizable portfolio template built with SvelteKit and Tailwind CSS. The core philosophy of this project is to separate content from presentation, allowing you to update your entire portfolio just by editing a single JSON file, with no need to touch the Svelte components.

**Live Demo:** [dhanus.pages.dev](https://dhanus.pages.dev)

---

## ✨ Features

- **Fully Dynamic Content**: All text, projects, experiences, and links are powered by a single `src/lib/data.json` file.
- **Modern Tech Stack**: Built with SvelteKit 5, Vite, and Tailwind CSS for a fast, modern development experience.
- **Engaging UI/UX**:
  - Smooth scrolling for anchor links.
  - An interactive, animated navigation dock.
  - Elegant "spotlight" hover effects on project cards.
  - Subtle micro-interactions on skills and timeline elements.
- **Developer-Friendly**: Includes a "View JSON" toggle that displays the site's underlying data, making it a great showcase of how the portfolio is built.
- **Responsive Design**: Looks great on all devices, from mobile phones to desktops.
- **Easy to Customize & Deploy**: Get your own version up and running in minutes.

---

## 🚀 Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

You need to have [Node.js](https://nodejs.org/en/) (v18 or higher) and a package manager (npm, pnpm, or yarn) installed on your machine.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Dhanus3133/Portfolio.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd Portfolio
    ```

3. **Install the dependencies:**

    ```bash
    bun install
    # or pnpm install / yarn install
    ```

4. **Run the development server:**

    ```bash
    bun run dev
    ```

Your site is now running at `http://localhost:5173/`.

---

## 🎨 Customization Guide

The heart of this portfolio is the **`src/lib/data.json`** file. You can customize nearly everything by editing this file.

### 1. Update Your Personal Information

Open `src/lib/data.json` and start by editing the `personalDetails`, `about`, and `hobbies` sections with your own information.

```json
{
  "personalDetails": {
    "name": "Your Name",
    "title": "Your Title (e.g., Backend Developer)",
    "location": "Your City, Country"
  },
  "about": "A passionate developer...",
  "hobbies": [
    { "name": "A hobby", "link": "https://example.com" },
    { "name": "Another hobby" }
  ]
}
```

### 2. Add Your Experience, Achievements & Projects

Fill in the `workExperience`, `achievements`, and `projects` arrays. You can add or remove as many items as you like; the UI will adapt automatically.

- `description` is an array of strings, where each string is a bullet point.
- `tech` and `skills` are arrays of strings that will be rendered as tags.

```json
"workExperience": [
  {
    "role": "Software Engineer",
    "company": "Tech Corp",
    "duration": "Jan 2023 - Present",
    "description": [
      "Developed cool features.",
      "Fixed important bugs."
    ],
    "skills": ["React", "Node.js", "AWS"]
  }
],
"projects": [
  {
    "name": "My Awesome Project",
    "description": "A brief description of the project.",
    "tech": ["SvelteKit", "Tailwind CSS", "Firebase"],
    "link": "https://github.com/your-username/your-project"
  }
]
```

### 3. Update Skills

The `skills` object is grouped by category. You can rename categories or add/remove skills as needed.

```json
"skills": {
  "Languages": ["JavaScript", "TypeScript", "Python"],
  "Frameworks": ["SvelteKit", "Next.js", "Express.js"]
}
```

### 4. Change the Favicon

Place your new favicon (e.g., `icon.png`) inside the `/static` directory.

### 5. Add or Change Social Icons in the Dock

The contact icons in the navigation dock are also dynamic.

1. **Add the Icon Component**: If you are adding a new icon (e.g., for Instagram), you first need a Svelte component for it. Place it in `src/lib/components/icons/`.

2. **Import and Register the Icon**: Open `src/routes/+page.svelte` and:
    - Import your new icon component at the top:

        ```javascript
        import InstagramIcon from '$lib/components/icons/InstagramIcon.svelte';
        ```

    - Add it to the `icons` map:

        ```javascript
        const icons = {
          // ... other icons
          InstagramIcon // Add your new icon here
        };
        ```

3. **Update `data.json`**: Finally, add the new entry to the `navs.contact` array in `data.json`. The `icon` key must match the name you used in the `icons` map.

    ```json
    "contact": [
      // ... other contacts
      { "label": "Instagram", "icon": "InstagramIcon", "href": "https://instagram.com/your-profile" }
    ]
    ```

---

## 🌐 Deployment

This project is ready to deploy on any modern hosting platform that supports Node.js. I use Cloudflare pages.

1. **Log in** to your [Cloudflare dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. **Select your new GitHub repository** and click **Begin setup**.
4. In the build settings section, select **SvelteKit** as the **Framework preset**. Cloudflare should automatically fill in the correct build settings for you.
5. Click **Save and Deploy**.

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
