import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export const calculateReadingTime = (htmlContent) => {
	if (!htmlContent) return 0;
	// Remove HTML tags to get plain text
	const text = htmlContent.replace(/<[^>]*>/g, '');
	const wordsPerMinute = 200;
	const noOfWords = text.trim().split(/\s+/).length;
	return Math.ceil(noOfWords / wordsPerMinute);
};
