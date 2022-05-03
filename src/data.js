import data from './data.json'

const allCategories = data.map(obj => obj.category)

const cats = allCategories.reduce((acc, cat) => { 
  acc[cat] = 0 // {Toys: 0, Music: 0}
  return acc
}, {})

const uniqueCategories = Object.keys(cats)

const categoriesWithCounts = allCategories.reduce((acc, cat) => { 
  if (acc[cat] === undefined) {  
    acc[cat] = 1 
  } else { 
    acc[cat] += 1 
  }
  return acc
}, {}) 

const catsAndCounts = uniqueCategories.map(name => { 
  return {name, count: categoriesWithCounts[name] }
})

catsAndCounts.push({name: 'All', count: data.length})


export default data

export { 
  allCategories,
  uniqueCategories,
  categoriesWithCounts,
  catsAndCounts
}