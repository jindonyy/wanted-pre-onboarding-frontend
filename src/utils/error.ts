const hasFetchError = (statusCode: number) => statusCode >= 400 && statusCode < 600;

export { hasFetchError };
