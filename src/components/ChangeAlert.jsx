import { useStorageListener } from "./useStorageListener";

export const ChangeAlert = ({ synchronizeTodos }) => {
  const { show, toggleShow } = useStorageListener(synchronizeTodos);
  if (show) {
    return (
      <div className="fixed top-0 right-0 left-0 bottom-0 bg-black/50 z-20">
        <div className="fixed bottom-[-10px] right-0 left-0 text-center p-9 bg-[#15151550] text-white text-base backdrop-filter backdrop-blur-3xl bg-texture border-t-2 border-white border-opacity-[0.03]">
          <p>Alert, it looks like the Todo's list has changed.</p>
          <p>Please refresh the app to sync.</p>
          <button
            className="mt-4 cursor-pointer border border-white hover:border-none text-center text-base text-white font-bold w-28 h-12 rounded-lg hover:bg-white/10 hover:text-white/80 transition duration-300"
            onClick={toggleShow}
          >
            Refresh
          </button>
        </div>
      </div>
    );
  }
};
