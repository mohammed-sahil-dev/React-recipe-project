import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import axios from 'axios';
import { Outlet } from 'react-router';
import useLoading from '../hooks/useLoading';
// import React from 'react';



function Home() {

    const [recipes, setrecipes] = useState([])
    const [total, setTotal] = useState([])
    const [errorMsg, setErrorMsg] = useState("");
    const [Searchquery, setSearchquery] = useState("")
    const { loading, startLoading, stopLoading } = useLoading()



    async function fetchrecipe(skipCount, query) {
        startLoading()
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
        stopLoading()
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
                <p className="text-accent text-center bg-accent/10 border border-accent/20 rounded-lg px-4 py-3 max-w-md mx-auto">{errorMsg}</p>
            </main>
        );
    }

    return (
        <main className="max-w-6xl mx-auto px-4 py-8">
            { }
            { }
            <section className="text-center mb-10">
                <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-text mb-3">
                    Find something good to cook
                </h1>
                <p className="text-muted max-w-xl mx-auto">
                    Browse recipes, check cooking time and difficulty, and open any dish for the full ingredients and steps.
                </p>
            </section>
            <form onSubmit={handleSearch} className="flex gap-2 max-w-xl mx-auto mb-10">
                <input
                    type="text"
                    name='query'
                    placeholder="Search recipes..."
                    className="flex-1 border border-border rounded-lg px-4 py-3 bg-card text-text shadow-sm placeholder:text-muted/70 outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/15"
                />
                <button type="sumbit" className="bg-accent hover:bg-accent-hover active:scale-95 text-white rounded-lg px-6 py-3 font-medium shadow-sm transition">
                    Search
                </button>



            </form>

            {loading && (
                <p className='flex items-center justify-center gap-3 py-8 text-muted'>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-border border-t-accent" />
                    Loading....
                </p>
            )}
            {!loading && recipes.length === 0 && (
                <p className='text-center py-10 text-muted bg-card border border-dashed border-border rounded-xl'>{`No recipes found for '${Searchquery}'`}</p>
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
                    className="bg-accent hover:bg-accent-hover active:scale-95 text-white rounded-lg px-8 py-3 font-medium shadow-sm transition"
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