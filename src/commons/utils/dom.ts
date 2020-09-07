export const setTitle = (context: any) => {
    if (typeof context === 'object') {
        document.title = context.$route.meta.title;
    } else {
        document.title = context;
    }
};
