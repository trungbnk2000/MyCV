export const DarkModeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <div className="absolute top-3 right-3">
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          checked={isDarkMode}
          onChange={(e) => onToggle(e.target.checked)}
          id="dark-mode-switch"
          type="checkbox"
          className="peer sr-only"
        />
        <span className="sr-only">Toggle dark mode</span>
        <div className="peer h-6 w-11 rounded-full border bg-slate-200 dark:border-none after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
      </label>
    </div>
  );
};
