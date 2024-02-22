import { Revenue } from './definitions';

export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'en-US',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const generateYAxis = (revenue: Revenue[]) => {
  // Calculate what labels we need to display on the y-axis
  // based on highest record and in 1000s
  const yAxisLabels = [];
  const highestRecord = Math.max(...revenue.map((month) => month.revenue));
  const topLabel = Math.ceil(highestRecord / 1000) * 1000;

  for (let i = topLabel; i >= 0; i -= 1000) {
    yAxisLabels.push(`$${i / 1000}K`);
  }

  return { yAxisLabels, topLabel };
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return new Array(totalPages).fill(null).map((_, i) => i + 1);
  }

  // If the current page is among the first 2 pages or the last 2 pages,
  // show the first 3, an ellipsis, and the last 3 pages.
  if (currentPage <= 2 || currentPage >= totalPages - 1) {
    return [1, 2, 3, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  const neighborPages = [currentPage - 1, currentPage, currentPage + 1];

  if (currentPage === 3) {
    return [1, ...neighborPages, '...', totalPages - 1, totalPages];
  } else if (currentPage === totalPages - 3) {
    return [1, '...', ...neighborPages, totalPages - 1, totalPages];
  } else if (currentPage === 4) {
    return [1, 2, ...neighborPages, '...', totalPages];
  } else if (currentPage === totalPages - 2) {
    return [1, 2, '...', ...neighborPages, totalPages];
  } else {
    return [1, '...', ...neighborPages, '...', totalPages];
  }
};
