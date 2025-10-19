# EduVision — Student Performance Portal (Look & Feel)

A static prototype showcasing the interface and user experience of a student–course portal.  
This version demonstrates navigation, CRUD pages (demo only), a visualization dashboard (Chart.js), and an About section with a live ERD (Mermaid).

---

## Pages
- **Home** — Overview and purpose of the portal  
- **Data Visualization** — Interactive charts showing sample data  
- **About Us** — Team details and ERD model  
- **Create / Read / Update / Delete** — CRUD UI stubs (no backend yet)

---

## Data Model (Static Phase)
Two one-to-many relationships:
- **Student → Enrollment**  
- **Course → Enrollment**

**Attributes**
- Student: `id`, `name`, `major`, `age`, `gpa`  
- Course: `id`, `code`, `title`, `credits`, `dept`  
- Enrollment: `id`, `studentId`, `courseId`, `term`, `numeric_grade`

---

## Tech Stack
- HTML, CSS, JavaScript  
- Chart.js for visualizations  
- Mermaid for ERD diagrams  
- GitHub for version control and collaboration  

---

## Team & Roles
| Name | Role | Key Contributions |
|------|------|------------------|
| **Raj Karthik Manam** | CRUD & Data Flow | Set up repo and navigation; implemented Create/Read/Update/Delete UIs (demo only); wired sample data and helpers; authored About page and Mermaid ERD |
| **Ananya Gullapally** | Visualization & Design | Created the Data Visualization page using Chart.js; improved CSS (contrast, hover, layout); styled tables, nav, and added responsive chart cards; wrote README documentation |

---

## Run Locally
Open `index.html` using **VS Code Live Server** or any static server.

---

## Next Phase (Dynamic Project)
The next submission will include:
- MVC architecture  
- Database persistence (Azure SQL)  
- Free API integration (fetch-only)  
- Deployment on Azure App Service  
