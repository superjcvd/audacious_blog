# Audacious Blog

A personal Hugo blog focused on information security, featuring technical cheatsheets and a resume section.

## Features

- Custom "audacious" theme with Bootstrap 5
- Custom color scheme
- Responsive design
- Resume page with data-driven content
- Print-friendly styling

## Installation

No additional dependencies required! Bootstrap is loaded directly from CDN, making it easy to update by simply changing the version number in the template files.

To update Bootstrap, edit the version number in:
- `themes/audacious/layouts/partials/head/css.html` (Bootstrap CSS)
- `themes/audacious/layouts/partials/head/js.html` (Bootstrap JS)

Custom theme colors are defined in `themes/audacious/assets/css/theme.css`.

### Prerequisites

Make sure you have [Hugo](https://gohugo.io/installation/) installed. You can verify with:
```bash
hugo version
```

## Testing and Generating

### Local Development (Testing)

Start the Hugo development server with live reload:
```bash
hugo server
```

The site will be available at `http://localhost:1313`. The server will automatically reload when you make changes to content or templates.

For more verbose output and to see draft content:
```bash
hugo server -D
```

### Generate Static Site

Build the static website for production:
```bash
hugo
```

This generates all static files in the `public/` directory, ready for deployment.

To build with verbose output:
```bash
hugo -v
```

## Deployment

`sudo certbot certificates`
`sudo certbot certonly --standalone -d capysecurity.com`
`hugo && rsync -avz --delete public/ vps672637.ovh.net:~/audacious_blog`
