export async function fetchRecipes (filter){
    const {query, limit} = filter;
    console.log("query is", query);
    console.log("limit is", limit);
    
    const url = `https://api.edamam.com/search?q=${query}&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_API_KEY}&from=0&to=${limit}&`;


    const response = await fetch(url)

    const data = await response.json();
    console.log("data in fetch is :", data);
    return data?.hits;
}

export async function fetchRecipe(id){
const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_API_KEY}`

const response = await fetch(url)

const data = await response.json();

return data[0];
}