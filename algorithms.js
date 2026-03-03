const algorithms = [
    {
        id: 1,
        title: "Deutsch Algorithm",
        category: "basic",
        shortDescription: "Determines if a function is balanced or constant with a single query.",
        description: `
            <h3>Overview</h3>
            <p>The Deutsch algorithm is a fundamental quantum algorithm that demonstrates quantum speedup. It determines whether a binary function is "balanced" (produces outputs 0 and 1 equally) or "constant" (produces only 0 or only 1) with just a single function evaluation.</p>
            
            <h3>Key Concepts</h3>
            <ul>
                <li><strong>Classical approach:</strong> Requires 2 function evaluations</li>
                <li><strong>Quantum approach:</strong> Requires only 1 function evaluation</li>
                <li>Uses quantum superposition and interference</li>
            </ul>
            
            <h3>Time Complexity</h3>
            <span class="complexity-badge">O(1) - Constant Time</span>
            
            <h3>Applications</h3>
            <ul>
                <li>Educational foundation for quantum computing</li>
                <li>Demonstrates quantum advantage principle</li>
                <li>Building block for the Deutsch-Jozsa algorithm</li>
            </ul>
            
            <h3>Key Steps</h3>
            <ol>
                <li>Initialize quantum state with two qubits</li>
                <li>Apply Hadamard gates for superposition</li>
                <li>Apply the oracle function</li>
                <li>Apply final Hadamard gate</li>
                <li>Measure and determine function property</li>
            </ol>
        `,
        yearDiscovered: 1992,
        discoverer: "David Deutsch"
    },
    {
        id: 2,
        title: "Deutsch-Jozsa Algorithm",
        category: "basic",
        shortDescription: "Extension of Deutsch algorithm for functions with n-bit inputs.",
        description: `
            <h3>Overview</h3>
            <p>The Deutsch-Jozsa algorithm is a generalization of the Deutsch algorithm that works for functions with n-bit inputs and a single bit output. It determines if a function is balanced or constant with exponential speedup over classical algorithms.</p>
            
            <h3>Key Concepts</h3>
            <ul>
                <li>Handles n-bit input, 1-bit output functions</li>
                <li>Classical approach: O(2^(n-1)) queries</li>
                <li>Quantum approach: O(1) queries</li>
                <li>Promise problem: function is guaranteed to be either balanced or constant</li>
            </ul>
            
            <h3>Time Complexity</h3>
            <span class="complexity-badge">O(1) vs O(2^(n-1)) Classical</span>
            
            <h3>When to Use</h3>
            <ul>
                <li>Problems with promise structure</li>
                <li>Educational demonstrations of quantum parallelism</li>
                <li>Foundation for more complex algorithms</li>
            </ul>
            
            <h3>Requirements</h3>
            <ul>
                <li>n qubits for input</li>
                <li>1 qubit for output</li>
                <li>Quantum oracle implementation</li>
            </ul>
        `,
        yearDiscovered: 1992,
        discoverer: "David Deutsch & Richard Jozsa"
    },
    {
        id: 3,
        title: "Grover's Search Algorithm",
        category: "advanced",
        shortDescription: "Performs database search in O(√N) time with quadratic speedup.",
        description: `
            <h3>Overview</h3>
            <p>Grover's algorithm is a quantum algorithm for searching an unsorted database. It provides a quadratic speedup over classical search, achieving O(√N) time complexity compared to O(N) classically. This is one of the most important quantum algorithms with practical applications.</p>
            
            <h3>Key Concepts</h3>
            <ul>
                <li>Searches unstructured lists of N items</li>
                <li>Classical time: O(N)</li>
                <li>Quantum time: O(√N)</li>
                <li>Quadratic speedup - proven optimal</li>
                <li>Uses amplitude amplification technique</li>
            </ul>
            
            <h3>Time Complexity</h3>
            <span class="complexity-badge">O(√N) - Quadratic Speedup</span>
            
            <h3>How It Works</h3>
            <ol>
                <li>Initialize quantum superposition</li>
                <li>Apply oracle that marks solution states</li>
                <li>Apply diffusion operator (inversion about average)</li>
                <li>Repeat steps 2-3 approximately √N times</li>
                <li>Measure to find solution with high probability</li>
            </ol>
            
            <h3>Applications</h3>
            <ul>
                <li>Database search</li>
                <li>Polynomial equation solving</li>
                <li>Machine learning classification</li>
                <li>Optimization problems</li>
            </ul>
        `,
        yearDiscovered: 1996,
        discoverer: "Lov Grover"
    },
    {
        id: 4,
        title: "Shor's Factorization Algorithm",
        category: "advanced",
        shortDescription: "Factors large integers in polynomial time, breaking RSA encryption.",
        description: `
            <h3>Overview</h3>
            <p>Shor's algorithm is a polynomial-time quantum algorithm for factoring large integers. It can break widely-used RSA encryption, making it one of the most significant quantum algorithms with major cryptographic implications.</p>
            
            <h3>Key Concepts</h3>
            <ul>
                <li>Classical factoring: Exponential time O(e^(n^(1/3)))</li>
                <li>Quantum factoring: Polynomial time O(n^3)</li>
                <li>Based on order-finding problem</li>
                <li>Uses Quantum Fourier Transform (QFT)</li>
            </ul>
            
            <h3>Time Complexity</h3>
            <span class="complexity-badge">O(n^3 log n) - Polynomial Time</span>
            
            <h3>Algorithm Steps</h3>
            <ol>
                <li>Pick random number a < N</li>
                <li>Compute GCD(a,N) - if > 1, found factor</li>
                <li>Find order r of a modulo N (quantum part)</li>
                <li>If r is even: compute GCD(a^(r/2) ± 1, N)</li>
                <li>Factors are found with high probability</li>
            </ol>
            
            <h3>Impact</h3>
            <ul>
                <li>Breaks RSA cryptography</li>
                <li>Motivates post-quantum cryptography research</li>
                <li>Demonstrates quantum advantage</li>
            </ul>
        `,
        yearDiscovered: 1994,
        discoverer: "Peter Shor"
    },
    {
        id: 5,
        title: "Quantum Fourier Transform",
        category: "advanced",
        shortDescription: "Quantum version of DFT, fundamental building block for many algorithms.",
        description: `
            <h3>Overview</h3>
            <p>The Quantum Fourier Transform (QFT) is the quantum analogue of the classical Discrete Fourier Transform. It's a core subroutine in many quantum algorithms including Shor's algorithm and phase estimation.</p>
            
            <h3>Key Concepts</h3>
            <ul>
                <li>Maps |x⟩ to superposition of |y⟩</li>
                <li>Classical DFT: O(N log N) with FFT</li>
                <li>Quantum QFT: O(n^2) with n qubits (N=2^n)</li>
                <li>No direct measurement benefit, but enables other algorithms</li>
            </ul>
            
            <h3>Time Complexity</h3>
            <span class="complexity-badge">O(n^2) for n qubits</span>
            
            <h3>Mathematical Definition</h3>
            <p>QFT maps computational basis state |x⟩ to:</p>
            <p>|y⟩ = (1/√N) Σ e^(2πixy/N) |y⟩</p>
            
            <h3>Properties</h3>
            <ul>
                <li>Unitary operation</li>
                <li>Efficient for period finding</li>
                <li>Used in phase estimation</li>
                <li>Resource-efficient implementation</li>
            </ul>
            
            <h3>Used In</h3>
            <ul>
                <li>Shor's factoring algorithm</li>
                <li>Phase estimation algorithm</li>
                <li>Hidden subgroup problems</li>
            </ul>
        `,
        yearDiscovered: 1994,
        discoverer: "Multiple researchers"
    },
    {
        id: 6,
        title: "Quantum Phase Estimation",
        category: "advanced",
        shortDescription: "Estimates eigenvalues of unitary operators with quantum precision.",
        description: `
            <h3>Overview</h3>
            <p>Quantum Phase Estimation is a fundamental quantum algorithm that estimates the eigenvalues of a unitary operator. It's crucial for variational quantum algorithms and quantum simulation.</p>
            
            <h3>Key Concepts</h3>
            <ul>
                <li>Estimates eigenvalue phases of unitary operators</li>
                <li>Requires knowing eigenvector preparation</li>
                <li>Uses controlled unitary gates and QFT</li>
                <li>Achieves quantum precision</li>
            </ul>
            
            <h3>Time Complexity</h3>
            <span class="complexity-badge">O(T log(1/ε)) for precision ε</span>
            
            <h3>Key Applications</h3>
            <ul>
                <li>Variational Quantum Eigensolver (VQE)</li>
                <li>Quantum simulation</li>
                <li>Quantum chemistry calculations</li>
                <li>Ground state energy estimation</li>
            </ul>
            
            <h3>Algorithm Components</h3>
            <ol>
                <li>Prepare eigenstate of unitary U</li>
                <li>Apply controlled powers of U</li>
                <li>Apply inverse Quantum Fourier Transform</li>
                <li>Measure eigenvalue phase</li>
            </ol>
        `,
        yearDiscovered: 1995,
        discoverer: "Alexei Kitaev"
    },
    {
        id: 7,
        title: "Quantum Walk Algorithm",
        category: "intermediate",
        shortDescription: "Quantum analogue of classical random walks with exponential speedup.",
        description: `
            <h3>Overview</h3>
            <p>Quantum walks are quantum analogs of classical random walks on graphs. They can provide exponential speedup for certain problems and have applications in search and graph algorithms.</p>
            
            <h3>Key Concepts</h3>
            <ul>
                <li>Two types: continuous-time and discrete-time</li>
                <li>Exploit quantum superposition and interference</li>
                <li>Can achieve exponential speedup over classical walks</li>
                <li>Useful for spatial search problems</li>
            </ul>
            
            <h3>Types</h3>
            <ul>
                <li><strong>Continuous-time:</strong> Evolve with Hamiltonian</li>
                <li><strong>Discrete-time:</strong> Coin and shift operations</li>
            </ul>
            
            <h3>Applications</h3>
            <ul>
                <li>Graph isomorphism</li>
                <li>Spatial search</li>
                <li>Triangle finding</li>
                <li>Network analysis</li>
            </ul>
            
            <h3>Speedup</h3>
            <p>Can achieve quadratic to exponential speedup depending on problem structure.</p>
        `,
        yearDiscovered: 2002,
        discoverer: "Multiple researchers"
    },
    {
        id: 8,
        title: "HHL Algorithm",
        category: "advanced",
        shortDescription: "Solves systems of linear equations exponentially faster.",
        description: `
            <h3>Overview</h3>
            <p>The HHL algorithm (Harrow, Hassidim, Lloyd) solves systems of linear equations Ax = b exponentially faster than classical computers. It's one of the most important quantum algorithms for practical applications.</p>
            
            <h3>Key Concepts</h3>
            <ul>
                <li>Solves linear systems Ax = b</li>
                <li>Classical time: O(N^2.373)</li>
                <li>Quantum time: O(log(N)κ^2/ε)</li>
                <li>κ is condition number, ε is precision</li>
            </ul>
            
            <h3>Time Complexity</h3>
            <span class="complexity-badge">O(log(N)) - Exponential Speedup</span>
            
            <h3>Requirements</h3>
            <ul>
                <li>Efficient state preparation</li>
                <li>Quantum phase estimation</li>
                <li>Controlled unitary operations</li>
            </ul>
            
            <h3>Applications</h3>
            <ul>
                <li>Machine learning</li>
                <li>Physics simulations</li>
                <li>Optimization problems</li>
                <li>Financial modeling</li>
            </ul>
            
            <h3>Limitations</h3>
            <ul>
                <li>Requires well-conditioned matrices</li>
                <li>State preparation overhead</li>
                <li>Result extraction challenges</li>
            </ul>
        `,
        yearDiscovered: 2008,
        discoverer: "Harrow, Hassidim, Lloyd"
    },
    {
        id: 9,
        title: "Variational Quantum Eigensolver",
        category: "advanced",
        shortDescription: "Hybrid algorithm for finding ground states of quantum systems.",
        description: `
            <h3>Overview</h3>
            <p>VQE is a hybrid quantum-classical algorithm that uses parameterized quantum circuits to find ground states and eigenvalues of quantum systems. It's highly relevant for NISQ (Noisy Intermediate-Scale Quantum) devices.</p>
            
            <h3>Key Concepts</h3>
            <ul>
                <li>Hybrid quantum-classical approach</li>
                <li>Parameterized ansatz circuit</li>
                <li>Classical optimizer</li>
                <li>Suitable for near-term devices</li>
            </ul>
            
            <h3>Algorithm Flow</h3>
            <ol>
                <li>Prepare parameterized quantum circuit</li>
                <li>Measure expectation values</li>
                <li>Use classical optimizer to adjust parameters</li>
                <li>Repeat until convergence</li>
            </ol>
            
            <h3>Applications</h3>
            <ul>
                <li>Quantum chemistry calculations</li>
                <li>Materials science simulations</li>
                <li>Ground state energy estimation</li>
                <li>Molecular property prediction</li>
            </ul>
            
            <h3>Advantages</h3>
            <ul>
                <li>Works on current quantum hardware</li>
                <li>Relatively short circuits</li>
                <li>Flexible ansatz design</li>
            </ul>
        `,
        yearDiscovered: 2014,
        discoverer: "Peruzzo et al."
    },
    {
        id: 10,
        title: "QAOA Algorithm",
        category: "advanced",
        shortDescription: "Quantum Approximate Optimization Algorithm for combinatorial problems.",
        description: `
            <h3>Overview</h3>
            <p>QAOA is a quantum algorithm for solving combinatorial optimization problems. It approximates optimal solutions and is particularly suited for near-term quantum computers relative to other quantum algorithms.</p>
            
            <h3>Key Concepts</h3>
            <ul>
                <li>Solves MAX-CUT, graph coloring, etc.</li>
                <li>Uses alternating problem and mixer Hamiltonians</li>
                <li>Approximation algorithm with tunable parameters</li>
                <li>Hybrid classical-quantum</li>
            </ul>
            
            <h3>How It Works</h3>
            <ol>
                <li>Initialize superposition state</li>
                <li>Apply problem Hamiltonian</li>
                <li>Apply mixer Hamiltonian</li>
                <li>Measure and evaluate objective</li>
                <li>Classically optimize parameters</li>
            </ol>
            
            <h3>Applications</h3>
            <ul>
                <li>MAX-CUT problems</li>
                <li>Graph coloring</li>
                <li>Routing optimization</li>
                <li>Portfolio optimization</li>
            </ul>
            
            <h3>Advantages</h3>
            <ul>
                <li>Practical on NISQ devices</li>
                <li>Scalable circuit depth</li>
                <li>Proven approximation guarantees</li>
            </ul>
        `,
        yearDiscovered: 2014,
        discoverer: "Farhi, Goldstone, Gutmann"
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = algorithms;
}
