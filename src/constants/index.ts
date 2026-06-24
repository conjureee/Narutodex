export interface NavLink {
    label: string;
    path: string;
}

export const navLinks: NavLink[] = [
    { label: 'Home', path: '/' },
    { label: 'Characters', path: '/characters' },
    { label: 'Clans', path: '/clans' },
    { label: 'Teams', path: '/teams' },
    { label: 'Jutsu', path: '/jutsus' }
];