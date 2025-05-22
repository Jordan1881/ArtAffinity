// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the header scroll behavior
    initHeaderScroll();
    
    // Initialize the artwork grid with sample data
    initArtworkGrid();
    
    // Initialize the artist showcase with sample data
    initArtistShowcase();
});

// Header scroll behavior
function initHeaderScroll() {
    const header = document.querySelector('.main-header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scrolling down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scrolling up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    });
}

// Sample artwork data
const sampleArtworks = [
    {
        id: 1,
        title: 'Abstract Harmony',
        artist: 'Sarah Chen',
        price: '$1,200',
        image: 'assets/Abstract Harmony.jpg ',
        category: 'Abstract'
    },
    {
        id: 2,
        title: 'Urban Reflections',
        artist: 'Marcus Johnson',
        price: '$850',
        image: 'assets/Urban Reflections.jpg',
        category: 'Photography'
    },
    {
        id: 3,
        title: 'Digital Dreams',
        artist: 'Luna Park',
        price: '$600',
        image: 'assets/Digital Dreams.jpg',
        category: 'Digital Art'
    }
];

// Initialize artwork grid with sample data
function initArtworkGrid() {
    const artworkGrid = document.querySelector('.artwork-grid');
    if (!artworkGrid) return;

    // Create artwork cards
    sampleArtworks.forEach(artwork => {
        const card = createArtworkCard(artwork);
        artworkGrid.appendChild(card);
    });
}

// Create an artwork card element
function createArtworkCard(artwork) {
    const card = document.createElement('div');
    card.className = 'artwork-card';
    card.innerHTML = `
        <div class="artwork-image">
            <img src="${artwork.image}" alt="${artwork.title}" loading="lazy">
        </div>
        <div class="artwork-info">
            <h3>${artwork.title}</h3>
            <p class="artist-name">by ${artwork.artist}</p>
            <p class="artwork-price">${artwork.price}</p>
            <button class="btn-secondary">View Details</button>
        </div>
    `;
    return card;
}

// Sample artist data
const sampleArtists = [
    {
        id: 1,
        name: 'Sarah Chen',
        location: 'New York, USA',
        image: 'assets/Sarah Chen.jpg',
        followers: '2.5k'
    },
    {
        id: 2,
        name: 'Marcus Johnson',
        location: 'London, UK',
        image: 'assets/Marcus Johnson.jpg',
        followers: '1.8k'
    },
    {
        id: 3,
        name: 'Luna Park',
        location: 'Tokyo, Japan',
        image: 'assets/Luna Park.jpg',
        followers: '3.2k'
    }
];

// Initialize artist showcase with sample data
function initArtistShowcase() {
    const artistGrid = document.querySelector('.artist-grid');
    if (!artistGrid) return;

    // Create artist cards
    sampleArtists.forEach(artist => {
        const card = createArtistCard(artist);
        artistGrid.appendChild(card);
    });
}

// Create an artist card element
function createArtistCard(artist) {
    const card = document.createElement('div');
    card.className = 'artist-card';
    card.innerHTML = `
        <div class="artist-image">
            <img src="${artist.image}" alt="${artist.name}" loading="lazy">
        </div>
        <div class="artist-info">
            <h3>${artist.name}</h3>
            <p class="artist-location">${artist.location}</p>
            <p class="artist-followers">${artist.followers} followers</p>
            <button class="btn-secondary">Follow</button>
        </div>
    `;
    return card;
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 