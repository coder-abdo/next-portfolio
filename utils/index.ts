export const validateInputs = (value: unknown, maxLenght: number) => {
  if (!value || typeof value !== "string" || value.length > maxLenght) {
    return false;
  }
  return true;
};

export const errorResponse = (error: unknown): string => {
  let message: string;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = `${error.message}`;
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }
  return message;
};
