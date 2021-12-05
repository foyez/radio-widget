export const formatErrorMessage = (error: unknown): string => {
  if (typeof error === "string") {
    return error;
  } else if (error instanceof Error) {
    return error.message;
  }

  return "unknown error";
};

export const wait = (ms = 0) =>
  new Promise((resolve) => setTimeout(resolve, ms));
