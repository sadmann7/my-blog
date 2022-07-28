interface NavData {
  id: number;
  title: string;
  link?: string;
}

export const navData: NavData[] = [
  { id: 1, title: 'Blog', link: '/blog' },
  { id: 2, title: 'About me', link: '/me' },
  { id: 3, title: 'Projects', link: '/projects' },
];
