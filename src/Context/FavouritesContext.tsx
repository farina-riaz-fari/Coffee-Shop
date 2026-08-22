import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

interface FavouriteItem {
  id: string | number;
  [key: string]: any;
}

interface FavouritesContextType {
  favourites: FavouriteItem[];
  toggleFavourite: (item: FavouriteItem) => Promise<void>;
}

const FavouritesContext = createContext<FavouritesContextType | undefined>(
  undefined,
);

interface FavouritesProviderProps {
  children: ReactNode;
}

export const FavouritesProvider = ({
  children,
}: FavouritesProviderProps) => {
  const [favourites, setFavourites] = useState<FavouriteItem[]>([]);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async user => {
      try {
        if (!user) {
          setFavourites([]);
          return;
        }

        const storageKey = `favourites_${user.uid}`;
        const storedFavourites = await AsyncStorage.getItem(storageKey);

        if (storedFavourites) {
          setFavourites(JSON.parse(storedFavourites));
        } else {
          setFavourites([]);
        }
      } catch (error) {
        console.error('Failed to load favourites:', error);
        setFavourites([]);
      }
    });

    return unsubscribe;
  }, []);

  const toggleFavourite = async (item: FavouriteItem) => {
    const user = auth().currentUser;

    if (!user) {
      return;
    }

    const isFavourite = favourites.some(
      fav => fav.id === item.id,
    );

    const updatedFavourites = isFavourite
      ? favourites.filter(fav => fav.id !== item.id)
      : [...favourites, item];

    setFavourites(updatedFavourites);

    try {
      const storageKey = `favourites_${user.uid}`;

      await AsyncStorage.setItem(
        storageKey,
        JSON.stringify(updatedFavourites),
      );
    } catch (error) {
      console.error('Failed to save favourites:', error);
    }
  };

  return (
    <FavouritesContext.Provider
      value={{favourites, toggleFavourite}}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => {
  const context = useContext(FavouritesContext);

  if (!context) {
    throw new Error(
      'useFavourites must be used inside FavouritesProvider',
    );
  }

  return context;
};