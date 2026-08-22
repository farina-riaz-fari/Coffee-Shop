import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

interface Notification {
  [key: string]: any;
}

interface NotificationsContextType {
  notifications: Notification[];
  addNotification: (notification: Notification) => Promise<void>;
}

const NotificationsContext = createContext<
  NotificationsContextType | undefined
>(undefined);

interface NotificationsProviderProps {
  children: ReactNode;
}

export const NotificationsProvider = ({
  children,
}: NotificationsProviderProps) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async user => {
      try {
        if (!user) {
          setNotifications([]);
          return;
        }

        const storageKey = `notifications_${user.uid}`;

        const storedNotifications =
          await AsyncStorage.getItem(storageKey);

        if (storedNotifications) {
          setNotifications(JSON.parse(storedNotifications));
        } else {
          setNotifications([]);
        }
      } catch (error) {
        console.error('Failed to load notifications:', error);
        setNotifications([]);
      }
    });

    return unsubscribe;
  }, []);

  const addNotification = async (
    notification: Notification,
  ) => {
    const user = auth().currentUser;

    if (!user) {
      return;
    }

    try {
      const updatedNotifications = [
        notification,
        ...notifications,
      ];

      setNotifications(updatedNotifications);

      const storageKey = `notifications_${user.uid}`;

      await AsyncStorage.setItem(
        storageKey,
        JSON.stringify(updatedNotifications),
      );
    } catch (error) {
      console.error('Failed to add notification:', error);
    }
  };
  // For remove notification...........
  // const removeNotification = async (timestamp) => {
  //   try {
  //     const updatedNotifications = notifications.filter(
  //       (notification) => notification.timestamp !== timestamp
  //     );
  //     console.log(updatedNotifications)
  //     setNotifications(updatedNotifications);
  //     await AsyncStorage.setItem('notifications', JSON.stringify(updatedNotifications));
  //   } catch (error) {
  //     console.error('Failed to remove notification:', error);
  //   }
  // };

  return (
    // <NotificationsContext.Provider value={{ notifications, addNotification, removeNotification }}>
    <NotificationsContext.Provider value={{notifications, addNotification}}>
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationsContext);

  if (!context) {
    throw new Error(
      'useNotifications must be used inside NotificationsProvider',
    );
  }

  return context;
};