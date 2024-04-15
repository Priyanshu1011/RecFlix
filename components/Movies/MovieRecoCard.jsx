const MovieRecoCard = ({ title, yearOfRelease, genre }) => {
  return (
    <div className="card_bg card_shadow flex flex-col justify-center items-center gap-y-10 w-[280px] h-[280px] px-4 py-6 rounded-md">
      {/* Title */}
      <h2 className="w-full text-3xl font-semibold primary_color text-center lg:text-center">
        {title}
      </h2>

      {/* Year of Release */}
      <p className="secondary_color text-center lg:text-left">
        {yearOfRelease}
      </p>

      {/* Genre */}
      <p className="secondary_color text-md text-center lg:text-left">
        <span className="font-bold">{genre}</span>
      </p>
    </div>
  );
};

export default MovieRecoCard;
