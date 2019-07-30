(async () => {
    const { writeFile } = require("fs")
    const { promisify } = require("util")

    const flatten = arr => 
        arr.reduce((flat, toFlatten) => 
            flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), [])
    
    const fetchers = ['./informator', './skillsmatter']

    const allNested = await Promise.all(fetchers.map(it => require(it)()))
    const allFlattened = flatten(allNested)

    const writeAsync = promisify(writeFile)
    console.log(`${allFlattened.length} courses fetched from ${fetchers}`)

    const coursesOut = "courses.json"
    await writeAsync(`../_data/${coursesOut}`, JSON.stringify(allFlattened))
    console.log(`Wrote courses to ${coursesOut}`)
})()