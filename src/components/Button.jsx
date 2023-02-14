import React from "react";

function Button() {
  return (
    <div className="container mx-auto">
      <div className="inline-block px-2 py-1 dark:text-stone-900 bg-stone-900 dark:bg-white font-semibold text-white bg-stone-900 rounded-md cursor-pointer">
        <a href="/assets/LucaDiDomenico.docx" download>
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Button;
