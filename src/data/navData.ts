interface NavData {
  id: number;
  label: string;
  url?: string;
}

export const navData: NavData[] = [
  { id: 1, label: 'Blog', url: '/blog' },
  { id: 2, label: 'About me', url: '/me' },
  { id: 3, label: 'Projects', url: '/projects' },
];
