// App.js - Main application logic

class QuantumAlgorithmExplorer {
    constructor() {
        this.algorithms = algorithms;
        this.filteredAlgorithms = this.algorithms;
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderAlgorithms(this.algorithms);
    }

    setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });

        // Filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleFilter(e.target.dataset.filter);
                // Update active state
                filterButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });

        // Modal close
        const modal = document.getElementById('algorithmDetail');
        const closeBtn = document.querySelector('.close');
        closeBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
        });

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    }

    handleSearch(query) {
        const searchTerm = query.toLowerCase();
        this.filteredAlgorithms = this.algorithms.filter(algo => {
            const matchTitle = algo.title.toLowerCase().includes(searchTerm);
            const matchDescription = algo.shortDescription.toLowerCase().includes(searchTerm);
            const matchDiscoverer = algo.discoverer.toLowerCase().includes(searchTerm);
            
            // Also apply current category filter
            const matchCategory = this.currentFilter === 'all' || algo.category === this.currentFilter;
            
            return (matchTitle || matchDescription || matchDiscoverer) && matchCategory;
        });
        this.renderAlgorithms(this.filteredAlgorithms);
    }

    handleFilter(filter) {
        this.currentFilter = filter;
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        
        this.filteredAlgorithms = this.algorithms.filter(algo => {
            const matchCategory = filter === 'all' || algo.category === filter;
            
            if (searchTerm) {
                const matchSearch = algo.title.toLowerCase().includes(searchTerm) ||
                                  algo.shortDescription.toLowerCase().includes(searchTerm) ||
                                  algo.discoverer.toLowerCase().includes(searchTerm);
                return matchCategory && matchSearch;
            }
            
            return matchCategory;
        });
        
        this.renderAlgorithms(this.filteredAlgorithms);
    }

    renderAlgorithms(algorithmsToRender) {
        const algorithmsList = document.getElementById('algorithmsList');
        
        if (algorithmsToRender.length === 0) {
            algorithmsList.innerHTML = `
                <div class="no-results">
                    <h2>No algorithms found</h2>
                    <p>Try adjusting your search or filter criteria.</p>
                </div>
            `;
            return;
        }

        algorithmsList.innerHTML = algorithmsToRender.map(algo => `
            <div class="algorithm-card" onclick="explorer.showAlgorithmDetail(${algo.id})">
                <div class="algorithm-category">${this.getCategoryDisplay(algo.category)}</div>
                <h2 class="algorithm-title">${algo.title}</h2>
                <p class="algorithm-description">${algo.shortDescription}</p>
                <div class="algorithm-meta">
                    <div class="meta-item">
                        <span class="meta-label">Year:</span> ${algo.yearDiscovered}
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Discoverer:</span> ${algo.discoverer}
                    </div>
                </div>
                <div class="read-more">Learn More →</div>
            </div>
        `).join('');
    }

    getCategoryDisplay(category) {
        const categoryMap = {
            'basic': 'Basic',
            'intermediate': 'Intermediate',
            'advanced': 'Advanced'
        };
        return categoryMap[category] || category;
    }

    showAlgorithmDetail(algorithmId) {
        const algorithm = this.algorithms.find(algo => algo.id === algorithmId);
        if (!algorithm) return;

        const detailContent = document.getElementById('detailContent');
        detailContent.innerHTML = `
            <h2>${algorithm.title}</h2>
            <div class="complexity-badge">Category: ${this.getCategoryDisplay(algorithm.category)}</div>
            ${algorithm.description}
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--border-color);">
                <p style="font-size: 0.9rem; color: var(--text-secondary);">
                    <strong>Year Discovered:</strong> ${algorithm.yearDiscovered}<br>
                    <strong>Discoverer:</strong> ${algorithm.discoverer}
                </p>
            </div>
        `;

        const modal = document.getElementById('algorithmDetail');
        modal.classList.remove('hidden');
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.explorer = new QuantumAlgorithmExplorer();
});
