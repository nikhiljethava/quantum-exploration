# Quantum Exploration

*Last Updated: March 18, 2026*

An educational application for exploring and understanding quantum algorithms. This project is designed to provide interactive demonstrations and implementations of fundamental quantum computing concepts and algorithms.

## Overview

Quantum Exploration is a comprehensive platform for learning and experimenting with quantum algorithms. Whether you're a student, researcher, or enthusiast, this application provides hands-on experience with quantum computing principles and implementations.

## Goals

- **Educate**: Provide clear explanations of quantum algorithms and their applications
- **Explore**: Offer interactive tools to visualize and simulate quantum computations
- **Implement**: Include working implementations of key quantum algorithms
- **Experiment**: Enable users to modify and test quantum algorithms in real-time

## Features

### 🌐 Interactive Web Application
- **Algorithm Explorer:** Browse and search through 10+ quantum algorithms
- **Detailed Descriptions:** Comprehensive information on each algorithm including:
  - Time complexity analysis
  - Key concepts and applications
  - Historical discovery information
- **Advanced Filtering:** Filter by difficulty level (Basic, Intermediate, Advanced)
- **Real-time Search:** Find algorithms by name, description, or discoverer
- **Modern UI:** Beautiful, responsive design with dark theme
- **No Installation Required:** Run directly in your browser

### 📚 Algorithm Coverage
- Deutsch Algorithm
- Deutsch-Jozsa Algorithm
- Grover's Search Algorithm
- Shor's Factorization Algorithm
- Quantum Fourier Transform
- Quantum Phase Estimation
- Quantum Walk Algorithm
- HHL Algorithm
- Variational Quantum Eigensolver (VQE)
- Quantum Approximate Optimization Algorithm (QAOA)

### 💻 Educational Resources
- Interactive algorithm demonstrations
- Step-by-step algorithm walkthroughs
- Visualization of quantum states and operations
- Implementation examples of major quantum algorithms
- Educational resources and documentation

## Quick Start ⚡

The simplest way to explore quantum algorithms is through our interactive web application!

### 30-Second Setup

```bash
# Clone the repository
git clone https://github.com/nikhiljethava/quantum-exploration.git
cd quantum-exploration

# Start the server
python3 serve.py
# Opens http://localhost:8000 automatically!
```

Or simply open `index.html` directly in your web browser.

## Getting Started

### Web Application

The interactive web application is the easiest way to learn about quantum algorithms:

1. **Open the application:**
   - Double-click `index.html` to open in your default browser
   - Or use a local server (recommended below)

2. **Using a Local Server:**
   ```bash
   # Option A: Use our Python server (easiest)
   python3 serve.py
   
   # Option B: Python's built-in server
   python3 -m http.server 8000
   
   # Option C: Node.js http-server
   npx http-server
   ```
   Then open `http://localhost:8000` in your browser.

### Features

**What You Can Do:**
- ✅ Search algorithms by name or discoverer
- ✅ Filter by difficulty level (Basic, Intermediate, Advanced)
- ✅ Click cards to read detailed descriptions
- ✅ Learn time complexity and applications
- ✅ Completely free and offline-capable

## Prerequisites

- **For Web Application:** Any modern web browser (Chrome, Firefox, Safari, Edge)
- **No additional installation required!**

### Advanced Usage

For quantum algorithm implementations (coming soon):
```bash
# Install quantum libraries
pip install qiskit cirq

# Run implementation examples
python -m examples.grover_algorithm
```

## Features & Documentation

For a detailed overview of all web application features, see [FEATURES.md](FEATURES.md)

## Project Structure

```
quantum-exploration/
├── index.html              # Main web application
├── styles.css              # Application styling
├── app.js                  # Application logic
├── algorithms.js           # Algorithm data and descriptions
├── src/                    # Main source code (implementations)
├── examples/               # Algorithm examples and demonstrations
├── tests/                  # Unit tests
├── docs/                   # Documentation
└── README.md              # This file
```

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues to suggest improvements.

## License

This project is open source and available under the MIT License.

## Resources

- [Qiskit Documentation](https://qiskit.org/documentation/)
- [Quantum Computing Basics](https://en.wikipedia.org/wiki/Quantum_computing)
- [IBM Quantum](https://quantum-computing.ibm.com/)

## Contact

For questions or feedback, please open an issue on GitHub.

---

**Happy Quantum Exploring!** 🚀