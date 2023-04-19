import { useEffect, useState } from "react";
import EventMore from "../components/main/EventMore";
import VisualSlider from "../components/main/VisualSlider";
import BookSearch from "../components/main/BookSearch";

function Apps({
  onChange,
  onKeyDown,
  query,
  onClick,
  save,
  bookData,
  addOnClick,
  convertPrice,
}) {
  console.log(bookData);
  return (
    <>
      <VisualSlider />
      <BookSearch
        onChange={onChange}
        onKeyDown={onKeyDown}
        query={query}
        onClick={onClick}
        save={save}
        bookData={bookData}
        addOnClick={addOnClick}
        convertPrice={convertPrice}
      />
      <EventMore />
    </>
  );
}

export default Apps;
