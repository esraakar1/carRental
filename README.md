

# 🚗 Car Catalog - Modern Car Discovery Platform

A modern, responsive car catalog application built with React and TypeScript that helps users discover and filter through a comprehensive collection of vehicles.

![Car Catalog](public/hero.png)

## ✨ Features

- **🔍 Advanced Filtering**: Filter cars by make, model, and year
- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS
- **⚡ Real-time Search**: Instant search functionality with debounced input
- **📊 Pagination**: Efficient data loading with React Paginate
- **🎨 Modern UI**: Beautiful animations and smooth transitions using Framer Motion
- **🌐 External API Integration**: Fetches real car data from OpenDataSoft
- **📱 Progressive Web App**: Fast loading and smooth user experience

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Routing**: React Router DOM v7
- **Animations**: Framer Motion
- **State Management**: React Context API
- **HTTP Client**: Fetch API
- **Linting**: ESLint + TypeScript ESLint

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/car-catalog.git
cd car-catalog
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── button/         # Button component
│   ├── filter/         # Filter components (search, year)
│   ├── header/         # Navigation header
│   ├── hero/           # Hero section
│   ├── list/           # Car listing and pagination
│   ├── modal/          # Image modal
│   └── warning/        # Warning/error components
├── contexts/            # React Context for state management
├── pages/               # Page components
├── types/               # TypeScript type definitions
├── utils/               # Utility functions and API services
└── index.css            # Global styles and Tailwind config
```

## 🔧 Key Components

### Filter System
- **SearchBar**: Text-based search for car makes and models
- **Year Filter**: Dropdown selection for vehicle year
- **Active Filters**: Visual display of applied filters with clear option

### Car Listing
- **Card Component**: Displays car information with images
- **Pagination**: Handles large datasets efficiently
- **Loading States**: Smooth loading and error handling

### Data Management
- **FilterContext**: Centralized state management for filters
- **API Service**: External data fetching with error handling
- **Type Safety**: Full TypeScript coverage for data structures

## 🌐 API Integration

The application integrates with the [OpenDataSoft All Vehicles Dataset](https://public.opendatasoft.com/explore/dataset/all-vehicles-model/) to provide real car data including:

- Vehicle specifications
- Fuel efficiency data
- Environmental ratings
- Performance metrics

## 🎨 Design Features

- **Dark Theme**: Modern dark color scheme
- **Responsive Grid**: Adaptive layout for all screen sizes
- **Smooth Animations**: Framer Motion powered transitions
- **Custom Components**: Tailwind-based utility classes
- **Icon Integration**: SVG icons for enhanced UX

## 📱 Responsive Breakpoints

- **Mobile**: 1 column grid
- **Tablet**: 2 columns grid  
- **Desktop**: 3 columns grid
- **Large Desktop**: 4 columns grid

## 🚀 Performance Features

- **Lazy Loading**: Efficient data fetching with pagination
- **Debounced Search**: Optimized search performance
- **Image Optimization**: Responsive image handling
- **Bundle Optimization**: Vite-based build optimization

## 🔍 Search & Filtering

- **Make Filter**: Filter by vehicle manufacturer
- **Model Filter**: Search within specific models
- **Year Filter**: Filter by production year
- **Combined Filters**: Multiple filter combinations
- **Real-time Updates**: Instant filter results

## 📊 Data Display

Each car card displays:
- Vehicle make and model
- Production year
- Fuel type and efficiency
- Engine specifications
- Environmental ratings
- Cost information

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Code Quality

- **TypeScript**: Full type safety
- **ESLint**: Code quality enforcement
- **Prettier**: Code formatting
- **React Hooks**: Modern React patterns

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenDataSoft](https://public.opendatasoft.com/) for providing the vehicle dataset
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [React](https://react.dev/) team for the amazing framework

## 📞 Contact

- **Project Link**: [https://github.com/yourusername/car-catalog](https://github.com/yourusername/car-catalog)
- **Issues**: [GitHub Issues](https://github.com/yourusername/car-catalog/issues)

---

⭐ **Star this repository if you found it helpful!**
