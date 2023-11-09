import {
  RouteProp,
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

/**
 *
 */
export function pop() {
  if (navigationRef.isReady()) {
    if (navigationRef.canGoBack()) {
      navigationRef.dispatch(StackActions.pop());
    }
  }
}

/**
 *
 */
export function popToTop() {
  if (navigationRef.isReady()) {
    if (navigationRef.canGoBack()) {
      navigationRef.dispatch(StackActions.popToTop());
    }
  }
}

/**
 *
 * @param name
 * @param params
 */
export function push(name: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.current?.dispatch(StackActions.push(name, params));
  }
}

/**
 *
 * @param name
 * @param params
 */
export function replace(name: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
}

/**
 *
 * @param state
 */
export const getRoute = (state: any): RouteProp<any, any> => {
  const route = state.routes[state.index];
  return route.state ? getRoute(route.state) : route;
};

/**
 *
 */
export const getActiveRoute = () => {
  if (navigationRef.isReady()) {
    return getRoute(navigationRef.current?.getRootState());
  }
};

/**
 *
 */
export const getCurrentRoute = () => {
  if (navigationRef.isReady()) {
    return navigationRef.getCurrentRoute();
  }
};

export const useNavigation = () => navigationRef;
