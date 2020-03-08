const navLink = [
    {
        id: 1,
        text: 'create new post ',
        icon: 'fa fa-plus feature',
        link: '/admin/create-post'
    },
    {
        id: 2,
        text: ' posts list',
        icon: 'fa fa-list feature',
        link: '/admin/allposts'
    }
];
const getAdminNavLink = () => {
    return [...navLink];
};

export default getAdminNavLink;
