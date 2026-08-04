# Personal Portfolio

A modern personal portfolio website showcasing your school projects, courses/certificates, and an interactive resume with PDF export functionality.

## Features

- **School Projects Showcase**: Display your academic and personal projects with descriptions and technologies used
- **Courses & Certificates**: Highlight completed courses and certifications
- **Interactive Resume**: Professional resume with print and PDF export capabilities
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Build Tool**: Vite
- **PDF Generation**: jsPDF and html2canvas
- **No Framework Dependencies**: Pure vanilla JavaScript for maximum performance

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will open in your default browser at `http://localhost:5173`

### Build

Create an optimized production build:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
├── index.html                 # Main HTML entry point
├── src/
│   ├── main.js               # Application entry point
│   ├── style.css             # Global styles
│   ├── components/
│   │   ├── app.js            # Main app component
│   │   ├── projects.js       # Projects section component
│   │   ├── courses.js        # Courses section component
│   │   └── resume.js         # Resume section component
│   └── utils/
│       └── pdfGenerator.js   # PDF generation utility
├── vite.config.js            # Vite configuration
└── package.json              # Project dependencies
```

## Customization

### Adding Projects

Edit `src/components/projects.js` and modify the `projects` array:

```javascript
const projects = [
  {
    title: 'Your Project Title',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2']
  }
]
```

### Adding Courses

Edit `src/components/courses.js` and modify the `courses` array:

```javascript
const courses = [
  {
    title: 'Course Title',
    provider: 'Course Provider',
    date: 'Month Year',
    certificate: true
  }
]
```

### Updating Resume

Edit `src/components/resume.js` and update the `resume` object with your:
- Professional summary
- Work experience
- Skills
- Education

## Features

### Resume Export

- **Print**: Click "Print Resume" to print directly from your browser
- **PDF Download**: Click "Download as PDF" to save your resume as a PDF file

### Navigation

Use the navigation bar to switch between:
- Projects
- Courses & Certificates
- Resume

## Styling

The application uses a modern dark theme with vibrant accent colors (purple/blue gradient). To customize colors, edit the CSS variables in `src/style.css`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Future Enhancements

- Add contact form
- Integrate with social media
- Add dark/light theme toggle
- Blog section
- Project filtering and search
