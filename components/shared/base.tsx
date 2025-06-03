import React, { useMemo, useRef } from "react";
import { FlatList, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { Path, Svg } from "react-native-svg";
import { cls } from "../../helpers";
import { THEME } from "../../colors";
import { useNavigation } from "@react-navigation/native";
import * as DropdownMenu from 'zeego/dropdown-menu'
import { useTranslation } from "react-i18next";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

type TIF = boolean | number | null | undefined
type TIFProps = {
  cond: TIF | (() => TIF),
  children: React.ReactNode
}
const IF = ({ cond, children }: TIFProps) => {
  // Get True and False components from children
  const childrenArray = React.Children.toArray(children);
  const trueComponent = childrenArray.find(
    child => React.isValidElement(child) && child.type === IF.True
  );
  const falseComponent = childrenArray.find(
    child => React.isValidElement(child) && child.type === IF.False
  );

  // Return the appropriate component based on cond
  if (typeof cond === "function") {
    cond = cond();
  }
  if (cond) {
    if (trueComponent) {
      return trueComponent;
    } else {
      return children;
    }
  } else if (falseComponent) {
    return falseComponent;
  }
  return <View />;
};

// True component
IF.True = ({ children }: { children: React.ReactNode }) => children;

// False component
IF.False = ({ children }: { children: React.ReactNode }) => children;

export default IF;

export const BackBottom = ({
  theme
}: { theme?: "transparent" | "default" }) => {
  const navigator = useNavigation()
  const handlePress = () => {
    if (navigator.canGoBack()) {
      navigator.goBack()
    }
  }
  return (
    <TouchableOpacity onPress={handlePress} className={cls("w-[40px] h-[40px] justify-center items-center rounded-full", theme == "transparent" ? "bg-[#000]/50" : "bg-gray-100")}>
      <Svg width="9" height="16" viewBox="0 0 9 16" fill="none" >
        <Path d="M7.50003 14.6L2.0667 9.16666C1.42503 8.52499 1.42503 7.47499 2.0667 6.83333L7.50003 1.39999" stroke={theme == "transparent" ? "white" : THEME.colors.dark.DEFAULT} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      </Svg>
    </TouchableOpacity>
  )
}


export const DropdownMenuRoot = DropdownMenu.Root
export const DropdownMenuTrigger = DropdownMenu.create(
  (props: React.ComponentProps<typeof DropdownMenu.Trigger>) => (
    <DropdownMenu.Trigger {...props} asChild>
      <View aria-role="button">{props.children}</View>
    </DropdownMenu.Trigger>
  ),
  'Trigger'
)
export const DropdownMenuContent = DropdownMenu.Content

export const DropdownMenuItem = DropdownMenu.create(
  (props: React.ComponentProps<typeof DropdownMenu.Item>) => (
    <DropdownMenu.Item {...props} style={{ height: 34 }} />
  ),
  'Item'
)

export const DropdownMenuItemTitle = DropdownMenu.create(
  (props: React.ComponentProps<typeof DropdownMenu.ItemTitle>) => (
    <DropdownMenu.ItemTitle {...props} />
  ),
  'ItemTitle'
)

export const DropdownMenuItemIcon = DropdownMenu.create(
  (props: React.ComponentProps<typeof DropdownMenu.ItemIcon>) => (
    <DropdownMenu.ItemIcon {...props} />
  ),
  'ItemIcon'
)

export const DropdownMenuItemImage = DropdownMenu.create(
  (props: React.ComponentProps<typeof DropdownMenu.ItemImage>) => (
    <DropdownMenu.ItemImage {...props} />
  ),
  'ItemImage'
)

export const DropdownMenuLabel = DropdownMenu.create(
  (props: React.ComponentProps<typeof DropdownMenu.Label>) => (
    <DropdownMenu.Label {...props} />
  ),
  'Label'
)

export const DropdownMenuSeparator = DropdownMenu.create(
  (props: React.ComponentProps<typeof DropdownMenu.Separator>) => (
    <DropdownMenu.Separator {...props} />
  ),
  'Separator'
)

export const DropdownMenuGroup = DropdownMenu.create(
  (props: React.ComponentProps<typeof DropdownMenu.Group>) => (
    <DropdownMenu.Group {...props} />
  ),
  'Group'
)

export const DropdownMenuCheckboxItem = DropdownMenu.create(
  (props: React.ComponentProps<typeof DropdownMenu.CheckboxItem>) => (
    <DropdownMenu.CheckboxItem
      {...props}
      style={{ ...props.style, display: 'flex', alignItems: 'center', gap: 8 }}
    >
      <DropdownMenu.ItemIndicator />
    </DropdownMenu.CheckboxItem>
  ),
  'CheckboxItem'
)

export const DropdownMenuSubTrigger = DropdownMenu.create(
  (props: React.ComponentProps<typeof DropdownMenu.SubTrigger>) => (
    <DropdownMenu.SubTrigger {...props} />
  ),
  'SubTrigger'
)

export const DropdownMenuSubContent = DropdownMenu.create(
  (props: React.ComponentProps<typeof DropdownMenu.SubContent>) => (
    <DropdownMenu.SubContent {...props} />
  ),
  'SubContent'
)

export const DropdownMenuSub = DropdownMenu.create(
  (props: React.ComponentProps<typeof DropdownMenu.Sub>) => (
    <DropdownMenu.Sub {...props} />
  ),
  'Sub'
)

export const DropdownMenuItemIndicator = DropdownMenu.create(
  (props: React.ComponentProps<typeof DropdownMenu.ItemIndicator>) => (
    <DropdownMenu.ItemIndicator {...props} />
  ),
  'ItemIndicator'
)

// export const DropdownMenuPreview = DropdownMenu.create(
//   (props: React.ComponentProps<typeof DropdownMenu.Preview>) => (
//     <DropdownMenu.Preview {...props} />
//   ),
//   'Preview'
// )

export const DropdownMenuArrow = DropdownMenu.create(
  (props: React.ComponentProps<typeof DropdownMenu.Arrow>) => (
    <DropdownMenu.Arrow {...props} />
  ),
  'Arrow'
)



export function SimpleHeader({ title, backButton = false, background = true, right }: { right?:any,background?: boolean | string, title: string, backButton?: boolean | React.ReactNode }) {
  const { t } = useTranslation()
  const { top } = useSafeAreaInsets()
  const backgroundColor = background ? (typeof background == "boolean" ? "#fff" : background) : "transparent"
  return (
    <View style={{ paddingTop: top, backgroundColor }}>


      <View className="flex-row py-3 px-2 items-center" >
        <View className="flex-1 flex-row space-x-4 items-center" style={{

        }}>
          {
            backButton && (
              <View>
                {backButton}
              </View>
            )
          }

          <View>
            <Text className="text-[19px] font-cabin-semibold">{t(title)}</Text>
          </View>
        </View>
        <View>
          {right}
        </View>
      </View>
    </View>

  )
}

export function SweapableLayout({
  header,
  children,
  maxContentLimit = 0.05,
  topCoverage = 0.3
}: {
  topCoverage?: number,
  children: React.ReactNode;
  maxContentLimit?: number;
  header?: React.ReactNode
}) {
  const { top: safeTop } = useSafeAreaInsets();
  const { height: fullHeight } = useWindowDimensions();

  const TOP_SECTION_BASE_COVERAGE = topCoverage;
  const topSectionBaseHeight = fullHeight * TOP_SECTION_BASE_COVERAGE;

  const minTopSectionHeight = Math.max(topSectionBaseHeight * maxContentLimit, 1);


  const offsetY = useSharedValue(0)
  const event = useAnimatedScrollHandler((event) => {
    offsetY.value = event.contentOffset.y;
  });
  const headerStyle = useAnimatedStyle(() => {
    const topHeight = topSectionBaseHeight - offsetY.value
    return ({
      height: topHeight > minTopSectionHeight ? withTiming(topHeight) : withTiming(minTopSectionHeight)
    })
  })

  const headerTitleStyle = useAnimatedStyle(() => {
    if (header) {
      const startShowingAt = topSectionBaseHeight - (1.5 * minTopSectionHeight)
      return ({
        opacity: withTiming(interpolate(offsetY.value, [startShowingAt, topSectionBaseHeight], [0, 1], 'clamp')),
        marginTop: offsetY.value > startShowingAt ? withTiming(-24 - safeTop) : 0,
        height: offsetY.value > startShowingAt ? withTiming(100 + safeTop) : 0,
        borderTopLeftRadius: offsetY.value > startShowingAt ? withTiming(0) : withTiming(24),
        borderTopRightRadius: offsetY.value > startShowingAt ? withTiming(0) : withTiming(24),
        paddingTop: offsetY.value > startShowingAt ? safeTop : 0
      })
    } else {
      return {}
    }

  })

  const topContent = useMemo(() => {
    return React.Children.toArray(children).find(
      (d) => React.isValidElement(d) && d.type === SweapableHeaderSection
    )
  }, [children])
  const bottomContent: any = useMemo(() => {
    return React.Children.toArray(children).find(
      (d) => React.isValidElement(d) && d.type === SweapableContent
    );
  }, [children])
  const childrenArr = useMemo(() => React.Children.toArray(React.cloneElement(bottomContent).props.children), [bottomContent])


  return (
    <Animated.FlatList
      data={childrenArr}
      keyExtractor={(_, i) => i.toString()}
      onScroll={event}
      scrollEventThrottle={16}
      ListHeaderComponent={
        <View>
          <Animated.View style={[{ overflow: "hidden" }, headerStyle]}>
            {topContent}
          </Animated.View>
          <View style={{
            backgroundColor: '#fff',
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            marginTop: -24,
            height: 24,
            zIndex: 10,
          }}></View>
          {
            header ? (
              <Animated.View style={[
                {
                  zIndex: 10,
                  overflow: "hidden"
                },
                headerTitleStyle
              ]}>
                {header}
              </Animated.View>
            ) : <></>
          }
        </View>
      }
      renderItem={({ item, index }) => <View key={index}>{item}</View>}
      stickyHeaderIndices={[0]}
    />
  );
}

export function SweapableHeaderSection({ children }: { children: React.ReactNode }) {
  return (
    <Animated.View className="flex-1 ">
      {children}
    </Animated.View>
  )
}


export function SweapableContent({ children, scrollRef, gesture }: { children: React.ReactNode, scrollRef?: any, gesture?: any }) {
  const nativeScrollGesture = Gesture.Native().withRef(scrollRef);

  return (
    <View />
  )
}





/*


export function SweapableLayout({
  children,
  maxContentLimit = 0.5,
}: {
  children: React.ReactNode;
  maxContentLimit?: number;
}) {
  const { top: safeTop } = useSafeAreaInsets();
  const { height: fullHeight } = useWindowDimensions();

  const TOP_SECTION_BASE_COVERAGE = 0.4;
  const topSectionBaseHeight = fullHeight * TOP_SECTION_BASE_COVERAGE;

  const minTopSectionHeight = topSectionBaseHeight * maxContentLimit;

  const paddingTop = useSharedValue(topSectionBaseHeight);

  const topContent = React.Children.toArray(children).find(
    (d) => React.isValidElement(d) && d.type === SweapableHeaderSection
  );
  const bottomContent: any = React.Children.toArray(children).find(
    (d) => {
      console.log(d.type)
      return React.isValidElement(d) && d.type === SweapableContent
    }
  );

  const scrollRef = useRef(null);

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      let currentValue = paddingTop.value + e.translationY;

      if (
        currentValue >= minTopSectionHeight &&
        currentValue <= topSectionBaseHeight
      ) {
        paddingTop.value = withSpring(currentValue, {
          damping: 10,
        });
      }
    })
    .onFinalize(() => {
      const snapPoint = (topSectionBaseHeight + minTopSectionHeight) / 2;

      if (paddingTop.value > snapPoint) {
        paddingTop.value = withTiming(topSectionBaseHeight);
      } else {
        paddingTop.value = withTiming(minTopSectionHeight);
      }
    }).simultaneousWithExternalGesture(scrollRef)

  const contentStyle = useAnimatedStyle(() => ({
    paddingTop: paddingTop.value,
  }));
  return (
    <View className="relative flex-1">
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[contentStyle]} className="flex-1 bg-red-400">
          {React.cloneElement(bottomContent, {
            scrollRef:scrollRef
          })}
        </Animated.View>
      </GestureDetector>
    </View>
  );
}

export function SweapableHeaderSection({ children }: { children: React.ReactNode }) {
  return (
    <Animated.View className="flex-1 bg-yellow-400">
      {children}
    </Animated.View>
  )
}


export function SweapableContent({ children, scrollRef, gesture }: { children: React.ReactNode, scrollRef?: any, gesture?: any }) {
  const nativeScrollGesture = Gesture.Native().withRef(scrollRef);

  return (
    <GestureDetector gesture={nativeScrollGesture}>
      <Animated.View className="flex-1 bg-white rounded-t-[30px]">
        <Animated.FlatList
          
          className="flex-1"
          ref={scrollRef}
          data={Array.from(new Array(50)).map((_, i) => i)}
          renderItem={() => (
            <View className="bg-gray-100 h-[30px] rounded-[]15px mb-6"></View>
          )}
          nestedScrollEnabled
        />
      </Animated.View>
    </GestureDetector>
  )
}
*/