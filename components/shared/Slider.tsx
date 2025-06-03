import React, {
    useState,
    useImperativeHandle,
    forwardRef,
    useRef,
    useEffect,
    ReactNode,
} from 'react';
import {
    Animated,
    Easing,
    EasingFunction, View, ScrollView, Dimensions, StyleSheet, NativeScrollEvent, NativeSyntheticEvent
} from 'react-native';

const { width } = Dimensions.get('window');
export interface IPageFun { goToPage: (page: number | string) => void }
const SliderNavigator = ({ children, initialPage = 0 }: { children: React.ReactNode, initialPage?: number }) => {
    const scrollViewRef = useRef<ScrollView>(null);
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [history, setHistory] = useState([initialPage]);
    const pageCount = React.Children.count(children);

    // Scroll to initial page on mount
    useEffect(() => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ x: initialPage * width, animated: false, y: 0 });
        }
    }, []);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const page = Math.round(offsetX / width);

        if (page !== currentPage) {
            setCurrentPage(page);
            // Only add to history if scrolling forward
            if (page > history[history.length - 1]) {
                setHistory([...history, page]);
            }
        }
    };

    const goToPage = (pageIndex: number | string) => {
        pageIndex = typeof pageIndex === "string" ? getChildIndexByName(pageIndex) : pageIndex
        if (pageIndex >= 0 && pageIndex < pageCount) {
            if (scrollViewRef.current) {
                scrollViewRef.current.scrollTo({ x: pageIndex * width, animated: true });
            }
            setHistory([...history, pageIndex]);
        }
    };

    const getChildIndexByName = (name: string) => {
        return React.Children.toArray(children).findIndex(child => (child as React.ReactElement).props.name === name);
    }



    return (
        <View style={styles.container}>
            <ScrollView
                scrollEnabled={false}
                ref={scrollViewRef}
                horizontal
                pagingEnabled

                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={handleScroll}
                contentContainerStyle={styles.scrollContent}
            >
                {React.Children.map(children, (child, index) => (
                    <View style={[styles.page, { width, opacity: index == currentPage ? 1 : 0 }]}>
                        {React.cloneElement(child as React.ReactElement, { goToPage, currentPage })}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

// Helper component for pages
SliderNavigator.Page = ({ children, goToPage, currentPage }: { children: React.ReactNode | Function, goToPage?: (page: number) => void, currentPage?: number, name?: string }) => {
    return (
        <View style={styles.pageContent}>
            {typeof children === 'function'
                ? children({ goToPage, currentPage })
                : children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        flexDirection: 'row',
    },
    page: {
        flex: 1,
    },
    pageContent: {
        flex: 1,
    },
});



export default SliderNavigator;




