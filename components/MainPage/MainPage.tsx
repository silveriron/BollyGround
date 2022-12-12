import React, {Suspense} from 'react';
import dynamic from 'next/dynamic';
import { Post } from '../../constants/type';
import {CarouselProps} from '../Carousel/Carousel'
import CircularProgress from '@mui/material/CircularProgress';

const AboutSection = dynamic(() => import('../AboutSection/AboutSection'), {
  suspense: true
})
const GroundSection = dynamic(() => import('../GroundSection/GroundSection'), {
  suspense: true
})
const StorySection = dynamic(() => import('../StorySection/StorySection'), {
  suspense: true
})

interface MainPageProps extends CarouselProps {
    aboutData: {
        ttochi: {
          title: string;
          content: string;
        };
        bolly: {
          title: string;
          content: string;
        };
      },
    posts: Post[],
}

const MainPage:React.FC<MainPageProps> = ({aboutData, posts, items}) => {
    return (
        <>
        <main>
            <Suspense fallback={<CircularProgress />}>
            <AboutSection aboutData={aboutData} />
            <StorySection posts={posts} />
            <GroundSection items={items} />
            </Suspense>
        </main>
        </>
    );
};

export default MainPage;