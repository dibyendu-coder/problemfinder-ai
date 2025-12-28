"use server"

export async function generateProblems(data: any) {
    // Mock delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Mock response based on input
    // In a real app, this would call Gemini/OpenAI
    const problems = [
        // --- BEGINNER PROJECTS (20) ---
        {
            title: "Personal Budget Tracker",
            rationale: "People struggle to track daily expenses manually.",
            targetUser: "Students & Young Professionals",
            solution: "A simple visualization of income vs expenses with category breakdown.",
            techStack: "React, Chart.js, LocalStorage",
            features: ["Expense logging", "Category charts", "Monthly limits"],
            difficulty: "Beginner",
            realWorldImpact: "Helps users understand their spending habits.",
            validationStatus: "Validated"
        },
        {
            title: "Voice-Controlled To-Do List",
            rationale: "Typing tasks can be tedious while on the go.",
            targetUser: "Busy commuters",
            solution: "A task manager that accepts voice input to add items.",
            techStack: "Javascript, Web Speech API",
            features: ["Voice-to-text", "Task priority", "Local save"],
            difficulty: "Beginner",
            realWorldImpact: "Accessibility friendly task management.",
            validationStatus: "Validated"
        },
        {
            title: "Weather Outfit Suggestion",
            rationale: "Checking the weather isn't enough to know what to wear.",
            targetUser: "Fashion conscious individuals",
            solution: "App that recommends clothing layers based on temp and rain.",
            techStack: "React, OpenWeatherMap API",
            features: ["Location detect", "Outfit display", "Rain alerts"],
            difficulty: "Beginner",
            realWorldImpact: "Prevents users from under/overdressing.",
            validationStatus: "Validated"
        },
        {
            title: "Random Quote Generator",
            rationale: "People look for daily inspiration on social media.",
            targetUser: "Content Creators",
            solution: "Generates aesthetically pleasing quote cards for Instagram.",
            techStack: "HTML/CSS, Canvas API, API Ninja",
            features: ["Random fetch", "Background toggle", "Download as Image"],
            difficulty: "Beginner",
            realWorldImpact: "Speeds up content creation process.",
            validationStatus: "Unvalidated"
        },
        {
            title: "Flashcard Learning App",
            rationale: "Students need simple ways to memorize terms.",
            targetUser: "Students",
            solution: "Digital flashcards with flip animation and score tracking.",
            techStack: "Vue.js, Firebase Lite",
            features: ["Card creation", "Shuffle mode", "Progress bar"],
            difficulty: "Beginner",
            realWorldImpact: "Improves retention for exams.",
            validationStatus: "Validated"
        },
        {
            title: "Markdown Previewer",
            rationale: "Writing READMEs without a live preview is error-prone.",
            targetUser: "Developers",
            solution: "Split screen editor that renders markdown in real-time.",
            techStack: "React, react-markdown",
            features: ["Live preview", "Syntax highlight", "Copy HTML"],
            difficulty: "Beginner",
            realWorldImpact: "Improves documentation workflow.",
            validationStatus: "Validated"
        },
        {
            title: "Pomodoro Focus Timer",
            rationale: "Staying focused for long periods is difficult.",
            targetUser: "Remote Workers",
            solution: "Customizable timer with work/break intervals and alarm sounds.",
            techStack: "Javascript, Audio API",
            features: ["Timer logic", "Sound notifications", "Task labels"],
            difficulty: "Beginner",
            realWorldImpact: "Increases productivity and reduces burnout.",
            validationStatus: "Validated"
        },
        {
            title: "Ingredient-Based Recipe Finder",
            rationale: "Food waste happens when you don't know what to cook with leftovers.",
            targetUser: "Home Cooks",
            solution: "Search for meals based strictly on ingredients you have.",
            techStack: "React, TheMealDB API",
            features: ["Ingredient filter", "Recipe details", "Video links"],
            difficulty: "Beginner",
            realWorldImpact: "Reduces food waste.",
            validationStatus: "Validated"
        },
        {
            title: "Daily Mood Tracker",
            rationale: "Tracking mental health patterns is hard without data.",
            targetUser: "Wellness enthusiasts",
            solution: "Log daily mood with an emoji and short note.",
            techStack: "React, LocalStorage",
            features: ["Emoji picker", "Calendar view", "Trend graph"],
            difficulty: "Beginner",
            realWorldImpact: "Promotes self-awareness and mental health.",
            validationStatus: "Needs More Research"
        },
        {
            title: "Habit Streak Counter",
            rationale: "Visual progress motivates habit formation.",
            targetUser: "Self-improvement seekers",
            solution: "Simple counter that resets if you miss a day.",
            techStack: "Javascript, LocalStorage",
            features: ["Streak logic", "Reset warning", "Confetti reward"],
            difficulty: "Beginner",
            realWorldImpact: "Encourages consistency in new habits.",
            validationStatus: "Validated"
        },
        {
            title: "Currency Converter Plus",
            rationale: "Travelers struggle with mental math for prices.",
            targetUser: "Travelers",
            solution: "Offline-first currency converter with cached rates.",
            techStack: "React, ExchangeRate API, PWA",
            features: ["Multi-currency", "Offline mode", "Calculator input"],
            difficulty: "Beginner",
            realWorldImpact: "Helps travelers avoid financial mistakes.",
            validationStatus: "Validated"
        },
        {
            title: "Typing Speed Tester",
            rationale: "Job seekers need to practice typing speed.",
            targetUser: "Clerks & Devs",
            solution: "Game that measures WPM and accuracy over 1 minute.",
            techStack: "Javascript, DOM Manipulation",
            features: ["WPM calc", "Error highlighting", "Leaderboard (local)"],
            difficulty: "Beginner",
            realWorldImpact: "Improves professional efficiency.",
            validationStatus: "Validated"
        },
        {
            title: "Expense Splitter",
            rationale: "Roommates fight over shared bills.",
            targetUser: "Roommates",
            solution: "Input bills and output exactly who owes who.",
            techStack: "React, Logic algorithms",
            features: ["Add people", "Add expenses", "Simplify debts"],
            difficulty: "Beginner",
            realWorldImpact: "Reduces social friction over money.",
            validationStatus: "Validated"
        },
        {
            title: "Digital Clock & Alarm",
            rationale: "Web-based alarms are useful for desk workers.",
            targetUser: "Office Workers",
            solution: "A fullscreen aesthetic clock with alarm settings.",
            techStack: "Javascript, Date Object",
            features: ["Theme toggle", "Alarm sound", "Snooze"],
            difficulty: "Beginner",
            realWorldImpact: "Functional utility for workstations.",
            validationStatus: "Unvalidated"
        },
        {
            title: "Simple Calculator with History",
            rationale: "Standard calculators don't keep a log.",
            targetUser: "Students",
            solution: "Standard calculator that keeps a sidebar of recent calculations.",
            techStack: "React, CSS Grid",
            features: ["Math operations", "History Tape", "Copy result"],
            difficulty: "Beginner",
            realWorldImpact: "Useful for multi-step homework problems.",
            validationStatus: "Validated"
        },
        {
            title: "Image Gallery Search",
            rationale: "Finding free stock photos takes time.",
            targetUser: "Designers",
            solution: "Search Unsplash API and create collections.",
            techStack: "React, Unsplash API",
            features: ["Masonry layout", "Download button", "Favorites"],
            difficulty: "Beginner",
            realWorldImpact: "Aggregates resources for creatives.",
            validationStatus: "Validated"
        },
        {
            title: "Unit Converter Suite",
            rationale: "Cooking and Science require constant conversions.",
            targetUser: "Students & Cooks",
            solution: "Convert Length, Weight, Temperature, and Volume.",
            techStack: "Javascript, Forms",
            features: ["Category tabs", "Instant convert", "Formula display"],
            difficulty: "Beginner",
            realWorldImpact: "Educational and practical daily tool.",
            validationStatus: "Validated"
        },
        {
            title: "Tic-Tac-Toe vs AI",
            rationale: "Building game loops is a foundational skill.",
            targetUser: "Junior Devs",
            solution: "Classic game with an 'Unbeatable' Minimax AI opponent.",
            techStack: "React, Minimax Algorithm",
            features: ["2 Player", "vs AI", "Scoreboard"],
            difficulty: "Beginner",
            realWorldImpact: "Educational project for game logic.",
            validationStatus: "Unvalidated"
        },
        {
            title: "Developer Portfolio CLI",
            rationale: "Devs find GUI website builders tedious.",
            targetUser: "Backend Devs",
            solution: "Generate a static portfolio from a JSON config.",
            techStack: "Node.js, HTML Templates",
            features: ["Config parsing", "HTML generation", "Theme choice"],
            difficulty: "Beginner",
            realWorldImpact: "Helps devs showcase work.",
            validationStatus: "Validated"
        },
        {
            title: "Family Chore Gamification",
            rationale: "Parents struggle to get kids to do chores.",
            targetUser: "Families",
            solution: "App that turns chores into quests with rewards.",
            techStack: "React Native, Expo",
            features: ["Quest list", "Points system", "Avatar"],
            difficulty: "Beginner",
            realWorldImpact: "Teaches responsibility.",
            validationStatus: "Needs More Research"
        },

        // --- INTERMEDIATE PROJECTS (20) ---
        {
            title: "Smart Subscription Tracker",
            rationale: "Users lose money on forgotten subscriptions.",
            targetUser: "General Public",
            solution: "Dashboard to track recurring payments and alert dates.",
            techStack: "Next.js, PostgreSQL",
            features: ["Calendar view", "Email alerts", "Total cost analysis"],
            difficulty: "Intermediate",
            realWorldImpact: "Saves users money.",
            validationStatus: "Validated"
        },
        {
            title: "Micro-SaaS Idea Validator",
            rationale: "Devs build products nobody wants.",
            targetUser: "Indie Hackers",
            solution: "Landing page builder that tracks click-throughs.",
            techStack: "Next.js, Stripe, Analytics",
            features: ["Waitlist form", "Stripe Checkout", "Traffic graph"],
            difficulty: "Intermediate",
            realWorldImpact: "Prevents wasted dev time.",
            validationStatus: "Validated"
        },
        {
            title: "Personal Carbon Footprint",
            rationale: "Climate action starts with individual awareness.",
            targetUser: "Eco-conscious people",
            solution: "Calculate impact based on travel and diet.",
            techStack: "Flutter, Firebase",
            features: ["Questionnaire", "Impact visualization", "Tips"],
            difficulty: "Intermediate",
            realWorldImpact: "Promotes sustainability.",
            validationStatus: "Needs More Research"
        },
        {
            title: "AI Resume Tailor",
            rationale: "Generic resumes get rejected by ATS.",
            targetUser: "Job Seekers",
            solution: "AI rewrites resume bullets to match job descriptions.",
            techStack: "Python, OpenAI API, PDF Parse",
            features: ["PDF Upload", "Keyword match", "Export"],
            difficulty: "Intermediate",
            realWorldImpact: "Increases interview success rate.",
            validationStatus: "Validated"
        },
        {
            title: "Lost Pet Finder Network",
            rationale: "Flyers are inefficient for lost pets.",
            targetUser: "Pet Owners",
            solution: "Geo-fenced alerts to users near a lost pet.",
            techStack: "React Native, Maps API",
            features: ["Map view", "Push notifications", "Sighting report"],
            difficulty: "Intermediate",
            realWorldImpact: "Reunites families with pets.",
            validationStatus: "Unvalidated"
        },
        {
            title: "Pantry Chef AI",
            rationale: "Cooking with leftovers is hard.",
            targetUser: "Home Cooks",
            solution: "Suggest recipes based on pantry inventory.",
            techStack: "React, Spoonacular API, Supabase",
            features: ["Barcode scan", "Recipe gen", "Shopping list"],
            difficulty: "Intermediate",
            realWorldImpact: "Reduces food waste.",
            validationStatus: "Validated"
        },
        {
            title: "GitHub Portfolio Generator",
            rationale: "Devs have messy Github profiles.",
            targetUser: "Junior Devs",
            solution: "Auto-generate a website from public repos.",
            techStack: "Next.js, GitHub API",
            features: ["Repo fetch", "Readme rendering", "Theme toggle"],
            difficulty: "Intermediate",
            realWorldImpact: " Improves career prospects.",
            validationStatus: "Validated"
        },
        {
            title: "Used Textbook Marketplace",
            rationale: "College books are too expensive.",
            targetUser: "Students",
            solution: "Campus-specific marketplace for direct sales.",
            techStack: "React Native, Geolocation",
            features: ["ISBN scanner", "Chat", "Safety meetups"],
            difficulty: "Intermediate",
            realWorldImpact: " Saves students money.",
            validationStatus: "Validated"
        },
        {
            title: "Fitness Workout Planner",
            rationale: "Gym goers lack structured plans.",
            targetUser: "Fitness enthusiasts",
            solution: "Generate workout routines based on goals.",
            techStack: "React, Node.js",
            features: ["Exercise library", "Progress log", "Timer"],
            difficulty: "Intermediate",
            realWorldImpact: "Improves health outcomes.",
            validationStatus: "Validated"
        },
        {
            title: "Language Exchange Matcher",
            rationale: "Learning a language requires conversation.",
            targetUser: "Language Learners",
            solution: "Tinder-like match for language partners.",
            techStack: "Vue.js, Firebase Auth",
            features: ["Profile match", "Chat", "Video call"],
            difficulty: "Intermediate",
            realWorldImpact: "Fosters cultural exchange.",
            validationStatus: "Needs More Research"
        },
        {
            title: "Issue Tracker (Mini Jira)",
            rationale: "Jira is too complex for small teams.",
            targetUser: "Small Dev Teams",
            solution: "Simple Kanban board for tracking bugs.",
            techStack: "Next.js, DnD Kit, Prisma",
            features: ["Drag and drop", "Comments", "Tags"],
            difficulty: "Intermediate",
            realWorldImpact: "Improves team organization.",
            validationStatus: "Validated"
        },
        {
            title: "Podcast Player Web App",
            rationale: "Web-based podcast players are clunky.",
            targetUser: "Listeners",
            solution: "Clean player searching iTunes API.",
            techStack: "React, iTunes API",
            features: ["Search", "Subscriptions", "Audio persist"],
            difficulty: "Intermediate",
            realWorldImpact: "Better listening experience.",
            validationStatus: "Unvalidated"
        },
        {
            title: "Meme Generator",
            rationale: "Making memes requires expensive software.",
            targetUser: "Social Media Users",
            solution: "Canvas editor to add text to templates.",
            techStack: "React, Canvas API",
            features: ["Template select", "Text resize", "Export"],
            difficulty: "Intermediate",
            realWorldImpact: "Fun & Entertainment.",
            validationStatus: "Validated"
        },
        {
            title: "Flash Sale Aggregator",
            rationale: "Sales are scattered across usage sites.",
            targetUser: "Shoppers",
            solution: "Scrapes deals from tech sites.",
            techStack: "Node.js (Cheerio), React",
            features: ["Category sorting", "Deal alerts", "Price history"],
            difficulty: "Intermediate",
            realWorldImpact: "Saves money.",
            validationStatus: "Unvalidated"
        },
        {
            title: "Code Snippet Manager",
            rationale: "Devs forget useful functions.",
            targetUser: "Developers",
            solution: "Library to save and search code blocks.",
            techStack: "Electron, React",
            features: ["Syntax highlight", "Tagging", "Cloud sync"],
            difficulty: "Intermediate",
            realWorldImpact: "Increases coding speed.",
            validationStatus: "Validated"
        },
        {
            title: "Virtual Plant Care",
            rationale: "People kill their house plants.",
            targetUser: "Plant owners",
            solution: "Reminders for watering and sunlight.",
            techStack: "React Native, Notifications",
            features: ["Plant database", "Schedule gen", "Photo log"],
            difficulty: "Intermediate",
            realWorldImpact: "Saves plants.",
            validationStatus: "Validated"
        },
        {
            title: "Travel Itinerary Builder",
            rationale: "Group travel planning is messy.",
            targetUser: "Travelers",
            solution: "Collaborative schedule builder.",
            techStack: "React, Google Maps API",
            features: ["Map pins", "Time slots", "Voting"],
            difficulty: "Intermediate",
            realWorldImpact: "Smoother trips.",
            validationStatus: "Needs More Research"
        },
        {
            title: "Survey Builder",
            rationale: "Survey tools are expensive.",
            targetUser: "Researchers",
            solution: "Create forms and analyze results.",
            techStack: "Next.js, MongoDB",
            features: ["Form builder", "Link sharing", "Chart results"],
            difficulty: "Intermediate",
            realWorldImpact: "Democratizes data collection.",
            validationStatus: "Validated"
        },
        {
            title: "Quiz Platform",
            rationale: "Classroom engagement is low.",
            targetUser: "Teachers",
            solution: "Kahoot-style quiz game.",
            techStack: "Vue.js, Socket.io",
            features: ["Live join", "Leaderboard", "Creator tool"],
            difficulty: "Intermediate",
            realWorldImpact: "Makes learning fun.",
            validationStatus: "Validated"
        },
        {
            title: "Book Review Corp",
            rationale: "Amazon reviews are fake.",
            targetUser: "Readers",
            solution: "Community driven book reviews.",
            techStack: "Next.js, Google Books API",
            features: ["Star rating", "ISBN Search", "Lists"],
            difficulty: "Intermediate",
            realWorldImpact: " Better reading choices.",
            validationStatus: "Unvalidated"
        },

        // --- ADVANCED PROJECTS (20) ---
        {
            title: "Local Event Aggregator",
            rationale: "Events are hard to find in one place.",
            targetUser: "Locals",
            solution: "Scraper/Aggregator for local happenings.",
            techStack: "Node.js, Puppeteer, MongoDB",
            features: ["Map view", "Scraping engine", "User submission"],
            difficulty: "Advanced",
            realWorldImpact: "Connects communities.",
            validationStatus: "Unvalidated"
        },
        {
            title: "Real-time Code Collaborative Editor",
            rationale: "Remote pairing is hard.",
            targetUser: "Developers",
            solution: "Google docs for code.",
            techStack: "React, WebSockets (Socket.io), CRDTs",
            features: ["Multi-cursor", "Syntax highlight", "Execution"],
            difficulty: "Advanced",
            realWorldImpact: "Improves remote collaboration.",
            validationStatus: "Validated"
        },
        {
            title: "Blockchain Voting System",
            rationale: "Trust in voting is low.",
            targetUser: "Organizations",
            solution: "Tamper-proof voting on Ethereum.",
            techStack: "Solidity, Web3.js, React",
            features: ["Smart contract", "Wallet connect", "Results verif"],
            difficulty: "Advanced",
            realWorldImpact: "Increases democratic trust.",
            validationStatus: "Needs More Research"
        },
        {
            title: "Video Streaming Service",
            rationale: "Hosting video is technically complex.",
            targetUser: "Content Creators",
            solution: "Scalable video upload and playback.",
            techStack: "Go, FFmpeg, HLS, React",
            features: ["Transcoding", "Adaptive bitrate", "CDN delivery"],
            difficulty: "Advanced",
            realWorldImpact: "Democratizes media hosting.",
            validationStatus: "Validated"
        },
        {
            title: "AI-Powered Chatbot RAG",
            rationale: "LLMs hallucinate on private data.",
            targetUser: "Enterprises",
            solution: "Chat with your PDF documents.",
            techStack: "Python, LangChain, Pinecone, Next.js",
            features: ["Vector search", "PDF ingestion", "Context aware chat"],
            difficulty: "Advanced",
            realWorldImpact: "Unlocks knowledge management.",
            validationStatus: "Validated"
        },
        {
            title: "Decentralized Exchange (DEX)",
            rationale: "Centralized exchanges are risky.",
            targetUser: "Crypto traders",
            solution: "Swap tokens without a middleman.",
            techStack: "Solidity, Uniswap SDK, React",
            features: ["Liquidity pools", "Token swap", "Wallet auth"],
            difficulty: "Advanced",
            realWorldImpact: "Financial sovereignty.",
            validationStatus: "Validated"
        },
        {
            title: "Real-time Multiplayer Game",
            rationale: "Lag compensation is hard.",
            targetUser: "Gamers",
            solution: "Fast paced .io style web game.",
            techStack: "Phaser.js, Geckos.io (UDP), Node.js",
            features: ["Interpolation", "Physics engine", "Lobbies"],
            difficulty: "Advanced",
            realWorldImpact: "Entertainment.",
            validationStatus: "Unvalidated"
        },
        {
            title: "Automated Crypto Trading Bot",
            rationale: "24/7 markets are hard to trade manually.",
            targetUser: "Traders",
            solution: "Bot that executes strategies via API.",
            techStack: "Python, ccxt, Docker",
            features: ["Backtesting", "Strategy config", "Live execution"],
            difficulty: "Advanced",
            realWorldImpact: "Passive income potential.",
            validationStatus: "Needs More Research"
        },
        {
            title: "IoT Home Automation Hub",
            rationale: "Smart devices don't talk to each other.",
            targetUser: "Home Owners",
            solution: "Central dashboard for MQTT devices.",
            techStack: "Node-RED, MQTT, React",
            features: ["Device discovery", "Automation rules", "Dashboard"],
            difficulty: "Advanced",
            realWorldImpact: "Simplifies smart homes.",
            validationStatus: "Validated"
        },
        {
            title: "3D Product Configurator",
            rationale: "Static images don't sell custom products.",
            targetUser: "E-commerce",
            solution: "Web-based 3D model customizer.",
            techStack: "Three.js, React Three Fiber",
            features: ["Material change", "Part swap", "AR view"],
            difficulty: "Advanced",
            realWorldImpact: "Increases sales conversion.",
            validationStatus: "Validated"
        },
        {
            title: "P2P Video Conferencing",
            rationale: "Zoom is expensive and centralized.",
            targetUser: "Privacy advocates",
            solution: "Direct browser-to-browser calls.",
            techStack: "WebRTC, PeerJS, Next.js",
            features: ["Room codes", "Screen share", "Chat channel"],
            difficulty: "Advanced",
            realWorldImpact: "Privacy preserving comms.",
            validationStatus: "Validated"
        },
        {
            title: "Custom Programming Language",
            rationale: "Understanding compilers is a superpower.",
            targetUser: "CS Students",
            solution: "A language that compiles to JS or WASM.",
            techStack: "LLVM, Rust/C++, WebAssembly",
            features: ["Lexer/Parser", "AST Viz", "Browser runtime"],
            difficulty: "Advanced",
            realWorldImpact: "Educational mastery.",
            validationStatus: "Unvalidated"
        },
        {
            title: "Search Engine Crawler",
            rationale: "How Google works is a mystery.",
            targetUser: "Tech Curious",
            solution: "Web spider that indexes pages.",
            techStack: "Go, Elasticsearch, React",
            features: ["Parallel crawling", "Pagerank algo", "Search UI"],
            difficulty: "Advanced",
            realWorldImpact: "Information retrieval.",
            validationStatus: "Validated"
        },
        {
            title: "Social Network Graph",
            rationale: "Relational DBs struggle with friends of friends.",
            targetUser: "Data Scientists",
            solution: "Social app built on Neo4j.",
            techStack: "Neo4j, GraphQL, Apollo",
            features: ["Friend recommendation", "Graph viz", "Feed"],
            difficulty: "Advanced",
            realWorldImpact: "Efficient data modeling.",
            validationStatus: "Validated"
        },
        {
            title: "Project Management Gantt",
            rationale: "Visualizing timelines is complex.",
            targetUser: "Managers",
            solution: "Interactive Gantt chart with dependencies.",
            techStack: "React, SVG/D3.js",
            features: ["Task dependencies", "Critical path", "Resizing"],
            difficulty: "Advanced",
            realWorldImpact: "Better project planning.",
            validationStatus: "Validated"
        },
        {
            title: "Self-Hosted Analytics",
            rationale: "Google Analytics invades privacy.",
            targetUser: "Site Owners",
            solution: "Lightweight tracking script and dashboard.",
            techStack: "Go, ClickHouse, React",
            features: ["Session replay", "Heatmaps", "Privacy focus"],
            difficulty: "Advanced",
            realWorldImpact: "Data sovereignty.",
            validationStatus: "Validated"
        },
        {
            title: "Distributed Task Scheduler",
            rationale: "Cron jobs don't scale across servers.",
            targetUser: "DevOps",
            solution: "System to run jobs across a cluster.",
            techStack: "Redis, Node.js, Docker",
            features: ["Job queue", "Retries", "Worker nodes"],
            difficulty: "Advanced",
            realWorldImpact: "Reliable infrastructure.",
            validationStatus: "Validated"
        },
        {
            title: "Browser-Based OS",
            rationale: "Web apps are becoming desktop apps.",
            targetUser: "Experimenters",
            solution: "Desktop environment inside the browser.",
            techStack: "React, Windowing Lib",
            features: ["Window manager", "File system (IndexedDB)", "Apps"],
            difficulty: "Advanced",
            realWorldImpact: "Pushing web capabilities.",
            validationStatus: "Unvalidated"
        },
        {
            title: "AI Image Generator Wrapper",
            rationale: "Stable Diffusion API is raw.",
            targetUser: "Artists",
            solution: "SaaS for generative art.",
            techStack: "Next.js, Replicate API, S3",
            features: ["Prompt engineering", "Gallery", "Upscaling"],
            difficulty: "Advanced",
            realWorldImpact: "Creative tool accessibility.",
            validationStatus: "Validated"
        },
        {
            title: "CRM with Email Sync",
            rationale: "Sales data is siloed from email.",
            targetUser: "Sales Teams",
            solution: "CRM that pulls in email threads.",
            techStack: "Python, Gmail API, Postgres",
            features: ["Thread view", "Deal pipeline", "Auto-log"],
            difficulty: "Advanced",
            realWorldImpact: "Sales efficiency.",
            validationStatus: "Validated"
        }
    ]

    if (data.difficulty && data.difficulty !== "") {
        return problems.filter(p => p.difficulty === data.difficulty)
    }

    return problems
}
