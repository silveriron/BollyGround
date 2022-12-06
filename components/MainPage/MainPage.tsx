import React from 'react';
import AboutSection from '../AboutSection/AboutSection';
import GroundSection from '../GroundSection/GroundSection';
import StorySection from '../StorySection/StorySection';
import {ArticleItemProps} from '../ArticleItem/ArticleItem'
import {CarouselProps} from '../Carousel/Carousel'
import NavBar from '../NavBar/NavBar';
 
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
            <AboutSection aboutData={aboutData} />
            <StorySection articles={articles} />
            <GroundSection items={items} />
        </main>
        </>
    );
};

export default MainPage;