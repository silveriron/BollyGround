import React, {Suspense} from 'react';
import {ArticleItemProps} from '../ArticleItem/ArticleItem'
import {CarouselProps} from '../Carousel/Carousel'
import CircularProgress from '@mui/material/CircularProgress';

const AboutSection = React.lazy(() => import('../AboutSection/AboutSection'))
const GroundSection = React.lazy(() => import('../GroundSection/GroundSection'))
const StorySection = React.lazy(() => import('../StorySection/StorySection'))

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