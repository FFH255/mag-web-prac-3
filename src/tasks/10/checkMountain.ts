// Проверка массива на "горный" с линейным проходом
const isMountainArray = (arr: number[]): boolean => {
    const n = arr.length;
    if (n < 3) return false;

    let i = 0;
    // Подъём
    while (i + 1 < n && arr[i] < arr[i + 1]) i++;
    
    // Пик не может быть первым или последним
    if (i === 0 || i === n - 1) return false;

    // Спуск
    while (i + 1 < n && arr[i] > arr[i + 1]) i++;

    return i === n - 1;
};

// Бинарный поиск пика
const findPeakIndex = (arr: number[]): number => {
    let left = 0, right = arr.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] < arr[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};

// Главная функция
export const checkMountain = (arr: number[]): string => {
    if (!isMountainArray(arr)) return 'no';
    return `yes ${findPeakIndex(arr)}`;
};