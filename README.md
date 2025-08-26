# Chancellor's Scholars Website

## Folder Structure

- **/.github**
  - Hidden directory that contains a workflow run by GitHub whenever a new commit is pushed to production.  
  - This is basically a list of instructions that tells GitHub how to deploy and publish the website.

- **/docs**
  - Output directory for builds when Vite generates static production files by running `vite build`.  
  - Specifically used as the hosting folder for GitHub Pages (instead of the default `/dist`).

- **/public**
  - Folder outside the main source code (`/src`).  
  - Contains files that are downloaded from the server as-is and accessed directly without bundling/processing from Vite.  
  - Files placed here are available at the root of the website (e.g. `/favicon.ico`).  
  - Currently only contains legacy scripts.

- **/src**
  - Contains most of the source code for the website's contents.  
  - All React components are contained within this folder.

- **src/index.html**
  - The entrypoint to our website.  
  - The browser first looks for this as the file containing the website page.  
  - Also links to the bundled React code that starts the app.

- **src/app.tsx**
  - The main starting point for the rest of the React components.  
  - This file is called by the entrypoint, `index.html`, and renders the root of the website.

- **package.json and package-lock.json**
  - Contain project dependencies, scripts (e.g. `npm run dev`, `npm run preview`), and project information.  
  - `package-lock.json` details specific versions of project dependencies.  
  - Dependencies are downloaded locally as `node_modules` when you run `npm install`.

- **.gitignore**
  - A list of directories and filenames that will not be committed, and thus not pushed, to the repo.  
  - Contains files that are local-machine specific along with generated files and dependencies.  

### /src
- **/components**
  - Reusable components that are commmonly used in multiple pages.

- **/css**
  - Contains legacy stylesheets and the main stylesheet for the site (site-specific.css)

- **/img**
  - Self-explanatory, contains the assets used on the site.

- **/views**
  - Each file in this folder represents a main page of the site and is a React component in itself.


## Getting Started

- **Clone the repository**  
  ```
  git clone https://github.com/Chancellors-Scholars/Chancellors-Scholars.github.io.git
  cd Chancellors-Scholars.github.io
  npm install
  npm run dev
  ```
  \**For major changes, work on feature branches before pushing/merging to main*