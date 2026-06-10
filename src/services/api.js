export async function fetchQuestions(category, difficulty) {
    const res = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
    );

    if (res.status === 429) {
        throw new Error("Too many requests. Please wait and try again.");
    }

    if (!res.ok) {
        throw new Error("Something went wrong while fetching questions.");
    }

    const data = await res.json();
    return data;
}


export async function fetchCategories(){
    const response = await fetch("https://opentdb.com/api_category.php");

    const data = await response.json();
    return data.trivia_categories;
}