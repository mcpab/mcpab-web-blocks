import { DrawerMenu } from './DrawerMenu';
import { MenuElement } from './types';

export const DrawerStory = () => {
  const elements: MenuElement = {
    name: 'menu',
    divider:true,
    children: [
      { name: 'home', children: [] , path: '/home' },
      { name: 'about-us', children: [] , path: '/about-us' },
      {
        name: 'services',
        children: [
          { name: 'consulting', children: [], path: '/services/consulting' },
          { name: 'development', children: [
                { name: 'web-development', children: [], path: '/services/development/web-development' },
                { name: 'mobile-development', children: [], path: '/services/development/mobile-development' },
                
          ], path: '/services/development' },
        ],
        path: '/services',
      },
    ],
    path: '/',
  };
  return <DrawerMenu anchor="left" elements={elements} />;
};

 
type keysOfGH<T extends readonly any[]> = T[number];

const kk = ["one", "two", 'lk', 1] as const;

type qlkj = typeof kk[number];

type lkj = keysOfGH<typeof kk>;

type arr<T extends readonly any[]> = Record<T[number], string>;

const jk: arr<typeof kk> ={
  one: "one",
  two: "two",
  lk: "lk",
  1: "1"
}