const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {

  const handleChangeShoe = () => {
    console.log("bigShoeImg:", bigShoeImg);
    console.log("imgURL.bigShoe:", imgURL.bigShoe);

    if (bigShoeImg === imgURL.bigShoe) return;

    changeBigShoeImage(imgURL.bigShoe);
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe ? `border-coral-red` : `border-transparent`
      } cursor-pointer max-sm:flex-1`}
      onClick={handleChangeShoe}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          className="object-contain"
          width={127}
          height={103}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
