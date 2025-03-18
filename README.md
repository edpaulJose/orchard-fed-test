
# Project Setup

This project implements two interactive components based on the provided design using modern HTML5, SCSS, and JavaScript. Gulp is used as a task runner to compile SCSS, minify JavaScript, and enable live reloading. The decisions made in this project aim to ensure scalability, maintainability, and a smooth development experience.

## Installation & Setup

### Prerequisites

Ensure you have **Node.js** and **npm** installed. If not, download and install from [nodejs.org](https://nodejs.org/).

### Install Dependencies

Run the following command to install necessary dependencies:

```sh
npm install
```

### Project Structure

The project structure is organized for clarity and scalability, allowing for easy updates and management of components.

```
project-folder/
│── src/
│   ├── scss/
│   │   ├── component-one.scss   # SCSS file for the first component
│   │   ├── component-two.scss   # SCSS file for the second component
│   │   ├── modal.scss           # SCSS file for the modal styling
│   ├── scripts/
│   │   ├── main.js              # Main JavaScript file to handle interactivity
│   ├── index.html               # Main HTML file for the project
│── dist/                         # Compiled and minified assets
│── gulpfile.js                   # Gulp task runner configuration
│── package.json                  # npm package configuration
│── README.md                     # Project documentation
```

- **SCSS files** are organized by components to keep styles modular, allowing for easier maintenance and updates.
- **JavaScript** is separated into a single `main.js` file for simplicity, handling the interactivity (like logging anchor clicks and modal functionality).
- **HTML** is minimal and semantic, following best practices for accessibility and SEO.
- The **dist/** folder contains compiled assets, keeping the source and production files separate.

## Usage

### Start Development Server

To start a local development server with live reloading, run the following command:

```sh
gulp
```

This will initiate the Gulp task runner, watch for changes in your files, and automatically refresh your browser when updates are made. Live reloading is essential for faster development cycles.

### Build for Production

To generate minified assets for production, run:

```sh
gulp build
```

This command will optimize the SCSS and JavaScript files for better performance in production by reducing file sizes through minification.

## Features

- **SCSS Compilation** → Converts SCSS to minified CSS. This ensures the styles are organized, modular, and maintainable.
- **JavaScript Minification** → Bundles and minifies JS. This reduces the number of HTTP requests and file sizes, improving load time.
- **Live Reloading** → Updates the browser on file changes. This allows for a more efficient development workflow.
- **Responsive Design** → The layout is responsive down to 320px, ensuring the components work seamlessly on mobile devices.
- **Interactivity** → Logs anchor clicks and displays images in a modal. This feature enhances user experience by providing visual feedback and engaging interactions.
