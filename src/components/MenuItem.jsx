const MenuItem = ({ item }) => {
  return (
    <div className="mb-6 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 bg-[#f5f5f0] text-[#722f37] border border-border">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
        <h3 className="text-lg sm:text-xl font-semibold text-primary">{item.name}</h3>
        <span className="text-base sm:text-lg font-medium text-accent-foreground bg-accent px-3 py-1 rounded-full whitespace-nowrap">
          {Array.isArray(item.price) ? item.price.join(" / ") + " Dh" : item.price ? item.price + " Dh" : ""}
        </span>
      </div>

      {item.image && (
        <img src={item.image} alt={item.name} className="w-full sm:w-40 h-40 object-cover rounded-lg mb-4 sm:float-left sm:mr-4" />
      )}

      {item.options && (
        <p className="text-sm sm:text-base text-muted-foreground mb-2">
          <span className="font-medium">Options:</span> {item.options}
        </p>
      )}
      
      {item.ingredients && (
        <p className="text-xs sm:text-sm italic text-muted-foreground">
          <span className="font-medium">Ingredients:</span> {item.ingredients}
        </p>
      )}

      <div className="mt-4 pt-4 border-t border-border flex flex-wrap gap-2">
        
      </div>
    </div>
  );
};

export default MenuItem;
