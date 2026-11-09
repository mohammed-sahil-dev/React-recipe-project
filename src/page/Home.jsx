import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import axios from 'axios';
import { Outlet } from 'react-router';
// import React from 'react';



function Home() {

    const [recipes, setrecipes] = useState([])
    const [total, setTotal] = useState([])
    const [loading, setloading] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");
    const [Searchquery, setSearchquery] = useState("")


    async function fetchrecipe(skipCount, query) {
        setloading(query);
        try {

            let url = `https://dummyjson.com/recipes?limit=6&skip=${skipCount}`
            if (query) {
                url = `https://dummyjson.com/recipes/search?limit=6&skip=${skipCount}&q=${query}`
            }
            const { data } = await axios.get(url)
            setrecipes((prev) =>
                skipCount === 0 ? data.recipes : [...prev, ...data.recipes]);
            setTotal(data.total)

        } catch (error) {
            setErrorMsg("please try again later.")

        }
        setloading(false)
    }

    useEffect(() => {
        fetchrecipe(0)

    }, [])


    function handleSearch(e) {
        e.preventDefault();

        const form = new FormData(e.target)
        let query = form.get("query").trim();
        setSearchquery(query)
        if (query) {
            fetchrecipe(0, query);

        }

    }



    if (errorMsg) {
        return (
            <main className="max-w-6xl mx-auto px-4 py-8">
                <p className="text-accent text-center">{errorMsg}</p>
            </main>
        );
    }

    return (
        <main className="max-w-6xl mx-auto px-4 py-8">
            { }
            { }
            <form onSubmit={handleSearch} className="flex gap-2 max-w-md mx-auto mb-8">
                <input
                    type="text"
                    name='query'
                    placeholder="Search recipes..."
                    className="flex-1 border border-border rounded px-3 py-2 bg-card text-text outline-none focus:border-accent"
                />
                <button type="sumbit" className="bg-accent hover:bg-accent-hover text-white rounded px-4 py-2 font-medium">
                    Search
                </button>



            </form>

            {loading && <p className='text-center py-6 text-muted'>Loading....</p>}
            {!loading && recipes.length === 0 && (
                <p className='text-center py-6 text-muted'>{`No recipes found for '${Searchquery}'`}</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>

            { }
            {recipes.length < total && <div className="text-center mt-8">
                <button
                    type="button"
                    onClick={() => fetchrecipe(recipes.length, Searchquery)}
                    className="bg-accent hover:bg-accent-hover text-white rounded px-6 py-2 font-medium"
                >
                    Load More
                </button>
            </div>}

            { }
            { }
            { }
            { }
            { }

            <Outlet />
        </main>


    );
}

export default Home;