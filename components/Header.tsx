import Searchbar from './Searchbar';

const Dashboard = () => {
  return (
    <header className="w-full flex justify-between px-8 py-3 gap-x-1.5">
      <div className="w-[360px] h-5.5 flex gap-x-4 items-center">
        <h1 className="text-[15px]">Payments</h1>
        <div className="flex gap-x-1.5 items-center">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_8_246)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.77759 10.1807C7.77759 10.6101 7.42944 10.9583 6.99997 10.9583C6.57051 10.9583 6.22236 10.6101 6.22236 10.1807C6.22236 9.75119 6.57051 9.40304 6.99997 9.40304C7.42944 9.40304 7.77759 9.75119 7.77759 10.1807Z"
                fill="#4D4D4D"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.127 3.40752C6.54381 3.23487 7.00246 3.1897 7.44495 3.27772C7.88744 3.36573 8.29389 3.58299 8.61291 3.902C8.93193 4.22102 9.14918 4.62747 9.2372 5.06996C9.32521 5.51245 9.28004 5.9711 9.10739 6.38791C8.93474 6.80473 8.64237 7.16099 8.26724 7.41164C8.02314 7.57474 7.75114 7.68835 7.4666 7.74783V7.84781C7.4666 8.10554 7.25767 8.31448 6.99993 8.31448C6.7422 8.31448 6.53327 8.10554 6.53327 7.84781V7.3294C6.53327 7.20564 6.58243 7.08694 6.66995 6.99942C6.75747 6.9119 6.87617 6.86274 6.99993 6.86274C7.2665 6.86274 7.52707 6.78369 7.74871 6.6356C7.97035 6.4875 8.14309 6.27701 8.2451 6.03074C8.34711 5.78447 8.3738 5.51348 8.3218 5.25204C8.26979 4.9906 8.14143 4.75046 7.95294 4.56197C7.76446 4.37348 7.52431 4.24512 7.26287 4.19312C7.00143 4.14111 6.73044 4.1678 6.48417 4.26981C6.2379 4.37182 6.02741 4.54457 5.87931 4.7662C5.73122 4.98784 5.65217 5.24842 5.65217 5.51498C5.65217 5.77271 5.44324 5.98164 5.18551 5.98164C4.92778 5.98164 4.71884 5.77271 4.71884 5.51498C4.71884 5.06382 4.85263 4.62279 5.10327 4.24767C5.35392 3.87255 5.71018 3.58017 6.127 3.40752Z"
                fill="#4D4D4D"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.99995 1.63335C4.03602 1.63335 1.63328 4.03608 1.63328 7.00001C1.63328 9.96394 4.03602 12.3667 6.99995 12.3667C9.96388 12.3667 12.3666 9.96394 12.3666 7.00001C12.3666 4.03608 9.96388 1.63335 6.99995 1.63335ZM0.699951 7.00001C0.699951 3.52062 3.52056 0.700012 6.99995 0.700012C10.4793 0.700012 13.3 3.52062 13.3 7.00001C13.3 10.4794 10.4793 13.3 6.99995 13.3C3.52056 13.3 0.699951 10.4794 0.699951 7.00001Z"
                fill="#4D4D4D"
              />
            </g>
            <defs>
              <clipPath id="clip0_8_246">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="text-[#4D4D4D] text-[12px]">How it works</p>
        </div>
      </div>
      <Searchbar />
      <div className="w-[360px] flex justify-end gap-x-3">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_8_256)">
            <circle cx="20" cy="20" r="20" fill="#E6E6E6" />
            <path
              d="M28.4211 10.0237L11.1158 13.3823C10.4632 13.499 10 14.1287 10 14.8517V22.5019C10 23.225 10.4632 23.8547 11.1158 23.9713L12.8842 24.3212C13.6 25.6273 14.9474 27.8897 16.7579 29.7323C17.3684 30.362 18.3789 29.8022 18.2526 28.8693C18.0842 27.6331 18.1263 26.3037 18.1895 25.3707L28.4211 27.3766C29.2421 27.5398 30 26.8401 30 25.9072V11.4931C30 10.5602 29.2421 9.86046 28.4211 10.0237ZM16.4632 19.6331C16.4632 19.8897 16.2737 20.0996 16.0421 20.0996H14.3158C14.0842 20.0996 13.8947 19.8897 13.8947 19.6331V17.7206C13.8947 17.464 14.0842 17.2541 14.3158 17.2541H16.0421C16.2737 17.2541 16.4632 17.464 16.4632 17.7206V19.6331ZM21.2842 19.6331C21.2842 19.8897 21.0947 20.0996 20.8632 20.0996H19.1368C18.9053 20.0996 18.7158 19.8897 18.7158 19.6331V17.7206C18.7158 17.464 18.9053 17.2541 19.1368 17.2541H20.8632C21.0947 17.2541 21.2842 17.464 21.2842 17.7206V19.6331ZM26.1263 19.6331C26.1263 19.8897 25.9368 20.0996 25.7053 20.0996H23.9789C23.7474 20.0996 23.5579 19.8897 23.5579 19.6331V17.7206C23.5579 17.464 23.7474 17.2541 23.9789 17.2541H25.6842C25.9158 17.2541 26.1053 17.464 26.1053 17.7206V19.6331H26.1263Z"
              fill="#4D4D4D"
            />
          </g>
          <defs>
            <clipPath id="clip0_8_256">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_8_261)">
            <circle cx="20" cy="20" r="20" fill="#E6E6E6" />
            <path
              d="M21.1109 25.5026C20.5156 26.1587 19.4844 26.1587 18.8891 25.5026L13.6151 19.6895C12.7406 18.7256 13.4245 17.1816 14.726 17.1816L25.274 17.1816C26.5755 17.1816 27.2594 18.7256 26.3849 19.6895L21.1109 25.5026Z"
              fill="#4D4D4D"
            />
          </g>
          <defs>
            <clipPath id="clip0_8_261">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </header>
  );
};

export default Dashboard;
