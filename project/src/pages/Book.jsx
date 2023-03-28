import { useEffect, useState } from "react";
import EventMore from "../components/EventMore";
import MainVisualSlider from "../components/MainVisualSlider";
import BookSearch from "../components/BookSearch";

function Apps({
  onChange,
  onKeyDown,
  query,
  onClick,
  save,
  bookData,
  addButton,
  addOnClick,
}) {
  console.log(bookData);
  return (
    <>
      <MainVisualSlider />
      <BookSearch
        onChange={onChange}
        onKeyDown={onKeyDown}
        query={query}
        onClick={onClick}
        save={save}
        bookData={bookData}
        addButton={addButton}
        addOnClick={addOnClick}
      />
      <EventMore />
    </>
  );
}

export default Apps;
