function deepCopy<T>(obj: T, visited = new WeakMap()): T {
    if (obj === null || typeof obj !== 'object') return obj;
    if (visited.has(obj)) return visited.get(obj);

    // ... (остальной код из примера выше)
}

export default deepCopy;
