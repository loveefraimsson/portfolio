const projects = [
    {
        title: 'Tenzies',
        description: 'Tenzies är ett spel som går ut på att man på så få slag som möjligt ska få samma siffra på tärningarna. Spelet är kopplat till en databas där poäng och hur lång tid man tog på sig kan sparas. Högsta poäng och snabbast tid visas även på skärmen.',
        imageURL: new URL('assets/tenzies.png', import.meta.url).href,
        imageAlt: 'Skärmklipp från Tenzies-hemsidan',
        tags: ['React', 'CSS', 'MongoDB', 'Express.js', 'Node'],
        linkWebsite: 'https://tenzies-frontend.vercel.app/',
        linkGithub: 'https://github.com/loveefraimsson/tenzies_frontend'
    },
    {
        title: 'WorkoutBase',
        description: 'Workoutbase är ett projekt som jag gjorde som examensarbete på min utbildning. Det är en sida där man kan logga in och söka bland olika träningsövningar. Man kan göra sina egna träningsprogram och favoritmarkera övningar som man vill kolla tillbaka på vid ett senare tillfälle. Det finns även en webshop där man kan lägga sina valda varor i kundkorgen. Inloggning till projektet finns på Github.',
        imageURL: new URL('assets/workoutbase.png', import.meta.url).href,
        imageAlt: 'Skärmklipp från WorkoutBase-hemsidan',
        tags: ['React', 'Sass', 'MongoDB', 'Express.js', 'Node'],
        linkWebsite: 'https://workoutbase-frontend.vercel.app/',
        linkGithub: 'https://github.com/loveefraimsson/workoutbase_frontend'
    }
]

export default projects;