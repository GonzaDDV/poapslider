export const shortenText = (text: string, length: number): string => {
	if (text.length > length) {
		return `${text.substring(0, length)}...`;
	}
	return text;
};
