import moment from 'moment';

export const formatDateWithMoment = (date: Date): string => {
	const momentDate = moment(date);
	return momentDate.fromNow();
};
