import React, {Suspense} from 'react';
import dynamic from 'next/dynamic';
import {ArticleItemProps} from '../ArticleItem/ArticleItem'
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
    articles: ArticleItemProps[],
}

const MainPage:React.FC<MainPageProps> = ({aboutData, articles, items}) => {
    return (
        <>
        <main>
            <Suspense fallback={<CircularProgress />}>
            <AboutSection aboutData={aboutData} />
            <StorySection articles={articles} />
            <GroundSection items={items} />
            </Suspense>
        </main>
        </>
    );
};

export default MainPage;