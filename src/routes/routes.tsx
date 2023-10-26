import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Index from '../Pages/Home/Index'
import Layout from "../Pages/Components/Layout";
import Genre from "../Pages/Genre/Genre";
import IndexArtist from "../Pages/Artist/Index";

import { getGenres, getArtistsByGenre } from '../Services/genre.service';
import { getArtist } from "../Services/artist.service";
import Show from "../Pages/Artist/Show";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />
    },
    {
        path: "/dashboard",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Genre />,
                loader: getGenres
            },
            {
                path: "genre/:id/:name/artists",
                element: <IndexArtist />,
                loader: ({ params }) => getArtistsByGenre( params )
            },
            {
                path: "artists/:id/:name",
                element: <Show />,
                loader: ({ params }) => getArtist( params )
            }
        ]
    }
]);

export default router;