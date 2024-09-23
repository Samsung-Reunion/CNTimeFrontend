import exampleImage from '../assets/testProfile.png';

const ActiveUser = ({
  userName,
  activeStatus,
}: {
  userName: string;
  activeStatus: boolean;
}) => {
  return (
    <div className="flex flex-col justify-center items-center w-12 h-fit">
      <div className="relative w-11 h-11 mb-2">
        <img
          src={exampleImage}
          alt="profileImage"
          width="44px"
          height="44px"
          style={{ borderRadius: '9999px' }}
        />
        {activeStatus && (
          <svg
            width="44px"
            height="44px"
            viewBox="0 0 44 44"
            className="absolute right-0 top-0"
          >
            <circle
              cx="39"
              cy="7"
              r="5.5"
              stroke="#101212"
              strokeWidth="2.2"
              fill="#04EB00"
            />
          </svg>
        )}
      </div>
      <span className="text-center w-full h-fit text-cntimer-lightgrey text-sm">
        {userName}
      </span>
    </div>
  );
};

export default ActiveUser;
