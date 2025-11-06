export const Loading = ({ name }) => {
  if (name) {
    console.log('Loading', name);
  }

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="h-32 w-32 animate-spin rounded-full border-b-4 border-t-4 border-indigo-600"></div>
      <p className="mt-4 text-gray-600 dark:text-gray-300">Loading...</p>
    </div>
  );
};
