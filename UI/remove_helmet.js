const fs = require('fs');
const path = require('path');

function removeHelmet(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            removeHelmet(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/g, '');
            content = content.replace(/import\s+{\s*HelmetProvider\s*}\s+from\s+['"]react-helmet-async['"];/g, '');
            content = content.replace(/<HelmetProvider>[\s\S]*?<\/HelmetProvider>/g, '');
            content = content.replace(/import\s+{\s*Helmet\s*}\s+from\s+['"]react-helmet-async['"];/g, '');
            fs.writeFileSync(fullPath, content, 'utf8');
        }
    }
}

removeHelmet(path.join(__dirname, 'src'));
