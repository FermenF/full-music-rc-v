import React from 'react';
import { Link } from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Artist } from '../../../Interfaces/artist.interface';
import { colors } from '../../../Utils/gradientColors';

interface ArtistsGridProps {
    artists: Artist[];
}

const ArtistsGrid: React.FC<ArtistsGridProps> = ({ artists }) => {

    const getRandomGradient = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 500: 2, 700: 2, 1000: 3, 1400: 5 }} className='rounded-md p-1'>
            <Masonry columnsCount={5} gutter="6px">
                {
                    artists.map((artist: Artist, index: number) => {
                        return (
                            <Link to={`/dashboard/artists/${artist.id}/${artist.name.replace('/', '|')}`} key={ index }>
                                <div className='rounded-md relative' key={ index } style={{
                                    'height': index % 2 ? "300px" : "480px",
                                    'backgroundImage': `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url('${ artist.picture_big }')`,
                                    'backgroundSize': 'cover',
                                    'backgroundPosition': 'center center'
                                }}>
                                    <div className='absolute inset-0 p-10'>
                                        <span className="text-white text-2xl font-bold">{ artist.name }</span>
                                    </div>
                                    <div className={`absolute inset-0 bg-transparent hover:opacity-50 ${ getRandomGradient() } hover:bg-gradient-to-bl transition duration-1000`}></div>
                                </div>
                            </Link>
                        );
                    })
                }
            </Masonry>
        </ResponsiveMasonry>
    );
};

export default ArtistsGrid;
