import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Index from '../Pages/Home/Index'
import Layout from "../Pages/Components/Layout";
import Genre from "../Pages/Genre/Genre";
import IndexArtist from "../Pages/Artist/Index";
import Search from '../Pages/Search/Search';
import Show from "../Pages/Artist/Show";

import { getGenres, getArtistsByGenre } from '../Services/genre.service';
import { getArtist } from "../Services/artist.service";
import { searchByQuery } from "../Services/search.service";
import AlbumShow from "../Pages/Album/AlbumShow";
import { getAlbum } from "../Services/album.service";
import { getPlatListAndTracks } from "../Services/playList.service";
import ShowPlayList from "../Pages/PlayList/ShowPlayList";

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
                loader: ({ params }) => getArtistsByGenre(params)
            },
            {
                path: "artists/:id/:name",
                element: <Show />,
                loader: ({ params }) => getArtist(params)
            },
            {
                path: "album/:id",
                element: <AlbumShow />,
                loader: ({ params }) => getAlbum(params)
            },
            {
                path: "search/:query",
                element: <Search />,
                loader: ({ params }) => searchByQuery(params)
            },
            {
                path: "playlist/:id/tracks",
                element: <ShowPlayList />,
                loader: ({ params }) => getPlatListAndTracks(params)
            }
        ]
    }
]);

export default router;