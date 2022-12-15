import React from 'react';

export default function AddBook() {
  return (
    <div>
      AddBook
      <form>
        <input placeholder="Insert title ..." />
        <input placeholder="Insert author ..." />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
