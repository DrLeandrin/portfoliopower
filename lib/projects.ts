
export interface Project {
    id: string
    name: string
    tagline: string
    description: {
        short: string
        long: string
    }
    tags: string[]
    stack: string[]
    links: {
        demo?: string
        repo?: string
        video?: string
    }
    images: {
        cover: string
        gallery: string[]
    }
    metrics?: {
        label: string
        value: string
    }[]
    featured: boolean
    three: {
        color: string
    }
}

export const projects: Project[] = [
    {
        id: 'ai-saas-health-platform',
        name: 'AVELIS',
        tagline: 'Plataforma de saúde para médicos',
        description: {
            short: 'Plataforma de saúde para médicos que permite ao médico fazer TUDO com o poder da IA.',
            long: 'AVELIS é o projeto do coração! Uma plataforma desenvolvida em parceria com o gênio Jean Duarte. A ideia central é promover qualiade de vida aos médicos e segurança aos pacientes com o poder da IA.',
        },
        tags: ['Health', 'SaaS', 'Medical'],
        stack: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL'],
        links: {
            demo: 'https://avelis.com.br',
            repo: 'https://github.com/avelis/avelis',
        },
        images: {
            cover: '/images/avelis-cover.svg',
            gallery: ['/images/avelis-1.svg', '/images/avelis-2.svg'],
        },
        metrics: [
            { label: 'Users', value: '100k' },
            { label: 'Doctors', value: '100k' },
            { label: 'Patients', value: '100k' },
        ],
        featured: true,
        three: { color: '#8844ff' },
    },
    {
        id: 'health-track-app',
        name: 'Pulse',
        tagline: 'Real-time Patient Monitoring',
        description: {
            short: 'Connecting patients and doctors through seamless real-time data streams.',
            long: 'Pulse integrates with wearable devices to provide doctors with a live feed of patient vitals. Features include anomaly detection alerts, secure chat, and historical trend analysis.',
        },
        tags: ['Health', 'Mobile', 'Real-time'],
        stack: ['React Native', 'Node.js', 'Socket.io', 'Redis'],
        links: {
            demo: 'https://pulse.health',
        },
        images: {
            cover: '/images/pulse-cover.svg',
            gallery: ['/images/pulse-1.svg', '/images/pulse-2.svg'],
        },
        metrics: [
            { label: 'Active Users', value: '50k+' },
            { label: 'Uptime', value: '99.99%' },
        ],
        featured: true,
        three: { color: '#ff4444' },
    },
    {
        id: 'fintech-dashboard',
        name: 'Vault',
        tagline: 'Crypto Asset Management',
        description: {
            short: 'Secure, multi-chain wallet management and portfolio tracking.',
            long: 'Vault provides a unified interface for managing assets across 12 different blockchains. It features biological authentication, hardware wallet integration, and automated tax reporting.',
        },
        tags: ['FinTech', 'Web3', 'Security'],
        stack: ['Vue.js', 'Rust', 'Wasm', 'Solidity'],
        links: {
            repo: 'https://github.com/user/vault',
        },
        images: {
            cover: '/images/vault-cover.svg',
            gallery: ['/images/vault-1.svg'],
        },
        featured: true,
        three: { color: '#44ff88' },
    },
    {
        id: 'ecom-platform',
        name: 'Lumina',
        tagline: 'Headless E-commerce Solution',
        description: {
            short: 'A high-performance headless commerce engine built for speed.',
            long: 'Lumina decouples the frontend from the backend, allowing brands to build custom shopping experiences. It supports millions of SKUs and sub-second page loads globally.',
        },
        tags: ['E-commerce', 'Headless', 'API'],
        stack: ['Go', 'GraphQL', 'React', 'Docker'],
        links: {
            demo: 'https://lumina.store',
        },
        images: {
            cover: '/images/lumina-cover.svg',
            gallery: [],
        },
        featured: false,
        three: { color: '#ffcc00' },
    },
]
