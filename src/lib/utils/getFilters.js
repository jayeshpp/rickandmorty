export function getFilters(searchParams) {
    return Object.fromEntries([...searchParams]);
}