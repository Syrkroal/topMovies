export let url =
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
        ? " http://localhost:4000"
        : "https://topmovies-backend.herokuapp.com/";
