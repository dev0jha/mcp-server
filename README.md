# AppWrite MCP Server

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8)](https://tailwindcss.com/)
[![Appwrite](https://img.shields.io/badge/Appwrite-17.0.0-ff385d)](https://appwrite.io/)
[![Model Context Protocol](https://img.shields.io/badge/MCP-1.12.1-green)](https://modelcontextprotocol.io/)

A powerful **Model Context Protocol (MCP) Server** that provides seamless integration with Appwrite database operations. This project combines a beautiful, modern web interface with a robust MCP server for database interactions, built with Next.js 15, React 19, and the latest web technologies.

![AppWrite MCP Server](./public/screenshot.png)

## 🌟 Features

- **🔥 MCP Server Integration**: Full Model Context Protocol server implementation
- **🗄️ Database Operations**: Complete CRUD operations for Appwrite databases
- **⚡ Lightning Fast**: Optimized for speed with Next.js 15 and Turbopack
- **🔒 Secure**: Built with security best practices and type-safe operations
- **🎨 Beautiful UI**: Modern, responsive interface with Tailwind CSS and Framer Motion
- **📱 Responsive Design**: Fully responsive across all devices
- **🌙 Modern Stack**: Next.js 15, React 19, TypeScript, and latest dependencies
- **🎯 Interactive Demo**: Live terminal-style demo showcasing MCP operations

### Available MCP Tools

The server provides 7 powerful database tools:

1. **`creatorInfo`** - Get detailed information about the creator
2. **`getDocument`** - Retrieve a document by its unique ID
3. **`listDocuments`** - List all documents from a collection
4. **`createDocument`** - Create new documents in the database
5. **`updateDocument`** - Update existing documents
6. **`deleteDocument`** - Delete documents from the database
7. **`upsertDocument`** - Create or update documents (upsert operation)

## 📸 Screenshots

### Hero Section
The landing page features an animated hero section with a live terminal demo showcasing MCP operations in real-time.

### Interactive Code Showcase
Browse through the complete codebase with syntax highlighting and easy copy-paste functionality.

### Live MCP Demo
Experience the MCP server in action with an interactive demonstration of database operations.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun
- An Appwrite account and project
- Appwrite database and collection setup

### 1. Clone the Repository

```bash
git clone https://github.com/dev0jha/mcp-server.git
cd mcp-server
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Using bun (recommended):
```bash
bun install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
APPWRITE_ENDPOINT=https://YOURID.cloud.appwrite.io/v1
APPWRITE_PROJECT_ID=YOUR-PROJECT-ID
APPWRITE_API_KEY=YOUR-API-KEY
DATABASE_ID=YOUR-DB-ID
```

Replace the placeholder values with your actual Appwrite credentials:

- **APPWRITE_ENDPOINT**: Your Appwrite instance endpoint
- **APPWRITE_PROJECT_ID**: Your Appwrite project ID
- **APPWRITE_API_KEY**: Your Appwrite API key (with database permissions)
- **DATABASE_ID**: Your Appwrite database ID

### 4. Run the Development Server

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📖 Usage

### Web Interface

The web application provides:

- **Hero Section**: Overview of the MCP server capabilities with animated terminal demo
- **Code Showcase**: Interactive code browser with syntax highlighting
- **MCP Demo**: Live demonstration of the server functionality
- **Video Showcase**: Visual guides and tutorials
- **Documentation Links**: Quick access to resources and GitHub repository

### MCP Server Endpoint

The MCP server is available at:
```
https://your-domain.com/mcp
```

You can use this endpoint with any MCP-compatible client to interact with your Appwrite database.

### Example MCP Usage

```javascript
// Connect to the MCP server
mcp.connect('https://mcp.devojha.in/mcp')

// List all documents
await mcp.listDocuments({ collectionId: 'company_names' })

// Create a new document
await mcp.createDocument({
  company_name: 'Example Corp',
  company_id: 12345
})

// Get a specific document
await mcp.getDocument({ documentId: 'doc_id_here' })

// Update a document
await mcp.updateDocument({
  documentId: 'doc_id_here',
  company_name: 'Updated Corp',
  company_id: 67890
})

// Delete a document
await mcp.deleteDocument({ documentId: 'doc_id_here' })
```

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.3.3** - React framework with App Router and Turbopack
- **React 19.0.0** - UI library with latest concurrent features
- **TypeScript 5** - Type safety and enhanced developer experience
- **Tailwind CSS 4** - Utility-first styling framework
- **Framer Motion** - Smooth animations and transitions
- **Radix UI** - Accessible, unstyled component primitives
- **Shadcn/ui** - Beautiful, reusable component library
- **Lucide React** - Modern icon library

### Backend & Database
- **Appwrite 17.0.0** - Backend-as-a-Service platform
- **@vercel/mcp-adapter** - Model Context Protocol server implementation
- **@modelcontextprotocol/sdk** - MCP SDK for building tools
- **Zod** - TypeScript-first schema validation

### Development Tools
- **ESLint** - Code linting and quality checks
- **PostCSS** - CSS processing and optimization
- **Bun** - Fast package manager and runtime (recommended)
- **Shiki** - Beautiful syntax highlighting

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── [transport]/
│   │   │   └── route.ts          # MCP server endpoint
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Homepage
│   │   └── globals.css           # Global styles
│   ├── components/
│   │   ├── ui/                   # Shadcn UI components
│   │   ├── magicui/              # Additional UI components
│   │   ├── hero-section.tsx      # Hero section with terminal demo
│   │   ├── code-showcase.tsx     # Code browser component
│   │   ├── mcp-demo.tsx          # MCP demonstration component
│   │   ├── video-showcase.tsx    # Video tutorials component
│   │   ├── link-and-info.tsx     # Footer and links component
│   │   ├── navbar.tsx            # Navigation component
│   │   └── copy-url-btn.tsx      # URL copy button component
│   ├── lib/
│   │   ├── utils.ts              # Utility functions
│   │   └── tools/
│   │       └── appwrite.ts       # Appwrite tools and handlers
│   └── hooks/
│       └── use-mobile.ts         # Mobile detection hook
├── public/                       # Static assets and images
├── .env                         # Environment variables
├── next.config.ts               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies and scripts
```

## 🔧 Configuration

### Appwrite Setup

1. Create an Appwrite project at [cloud.appwrite.io](https://cloud.appwrite.io)
2. Create a database
3. Create a collection (e.g., 'company_names')
4. Set up the following attributes in your collection:
   - `company_name` (string, required)
   - `company_id` (integer, required)
5. Generate an API key with database permissions:
   - Navigate to your project settings
   - Go to API Keys section
   - Create a new key with `databases.read` and `databases.write` scopes
6. Update your `.env` file with the credentials

### MCP Client Configuration

To use this server with an MCP client (like Claude Desktop), configure it with:

```json
{
  "mcpServers": {
    "appwrite": {
      "url": "https://mcp.devojha.in/mcp",
      "transport": "sse"
    }
  }
}
```

## 📝 Available Scripts

- `dev` - Start development server with Turbopack (fast refresh)
- `build` - Build the application for production
- `start` - Start the production server
- `lint` - Run ESLint for code quality checks

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dev0jha/mcp-server)

1. Click the "Deploy" button above
2. Add your environment variables in the Vercel dashboard
3. Deploy!

### Manual Deployment

```bash
# Build the project
npm run build

# Start the production server
npm start
```

Make sure to set up environment variables in your hosting platform.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Workflow

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Quality

- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Run `npm run lint` before committing

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Appwrite](https://appwrite.io/) - Excellent backend-as-a-service platform
- [Vercel](https://vercel.com/) - Amazing hosting and MCP adapter
- [Shadcn/ui](https://ui.shadcn.com/) - Beautiful UI component library
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- [Model Context Protocol](https://modelcontextprotocol.io/) - Revolutionary AI interaction standard

## 📞 Support

If you have any questions or need help, please:

- Open an issue on [GitHub](https://github.com/dev0jha/mcp-server/issues)
- Check the [documentation](https://modelcontextprotocol.io/)
- Contact the maintainer

## 🔗 Links

- **Live Demo**: [https://mcp.devojha.in](https://mcp.devojha.in)
- **Documentation**: [Model Context Protocol Docs](https://modelcontextprotocol.io/)
- **GitHub Repository**: [github.com/dev0jha/mcp-server](https://github.com/dev0jha/mcp-server)
- **Portfolio**: [devojha.in](https://devojha.in)

---

**Built with ❤️ by [Dev](https://devojha.in)**

Portfolio: [https://devojha.in](https://devojha.in) | GitHub: [@dev0jha](https://github.com/dev0jha)
