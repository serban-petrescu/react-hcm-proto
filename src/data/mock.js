export default {
    aoc: {
        "1": {
            id: 1,
            name: "Development",
            asTable: false,
            skill: {
                "1": {
                    id: 1,
                    name: "Programming"
                }, 
                "2": {
                    id: 2,
                    name: "Database"
                }, 
                "3": {
                    id: 3,
                    name: "Software Design"
                }
            }
        }, 
        "2": {
            id: 2,
            name: "Core",
            asTable: true,
            skill: {
                "4": {
                    id: 4,
                    name: "Communication"
                }, 
                "5": {
                    id: 5,
                    name: "Teamwork"
                },
                "6": {
                    id: 6,
                    name: "Presentation"
                }
            }
        }
    },
    profile: {
        "1": {
            id: 1,
            name: "Software Engineer",
            skill: { 
                "1": {
                    id: 1,
                    aoc: "Development",
                    name: "Programming",
                    level: 3
                }, 
                "2": {
                    id: 2,
                    aoc: "Development",
                    name: "Database",
                    level: 2
                }, 
                "3": {
                    id: 3,
                    aoc: "Development",
                    name: "Software Design",
                    level: 3
                }
            }
        }
    },
    candidates: {
        "1": {
            "id": 1,
        name: "Serban"
        }
    }
};