const Card = ({ title, image }) => {
  return (
    <div className="w-100 h-40 relative bg-[rgb(20,26,31)] overflow-hidden flex items-center justify-center text-center group rounded-[10px] shadow-[2px_2px_10px_black,2px_2px_20px_black] transition-all duration-500 hover:shadow-[2px_2px_10px_rgb(87,195,219),2px_2px_20px_rgb(82,205,207)] cursor-pointer shrink-0">
      <h1 className="text-4xl font-bold bg-linear-to-r from-[rgb(66,180,205)] to-white bg-clip-text text-transparent">
       {title}
      </h1>

      <div
        className="
      absolute bottom-0 w-full h-full
      bg-linear-to-t
      from-[rgba(12,17,20,0.495)]
      to-[rgba(121,205,220,0.486)]
      translate-y-full
      transition-all duration-500
      flex items-center justify-center
      group-hover:translate-y-0
      backdrop-blur-[10px]
      "
      >
        <img className="w-[70%] h-[70%] object-contain" src={image} alt="" />
      </div>
    </div>
  );
};

export default Card;
