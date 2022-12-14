import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";
import { fetchPokemons } from "../store/actions";

export default function Example({ pokemons }) {
  // console.log(pokemons.prevPage, "ok");
  const dispatch = useDispatch();

  const toNext = (e, page) => {
    e.preventDefault();
    dispatch(fetchPokemons(page));
  };
  const toPrev = (e, page) => {
    e.preventDefault();
    dispatch(fetchPokemons(page));
  };

  const totalPage = Math.ceil(Number(pokemons.totalPage) / 40);

  // console.log(totalPage);
  const page = (e, page) => {
    e.preventDefault();
    const currentPages = pokemons.count;
  };
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href=""
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href=""
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-cyan-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Total Pages <span className="font-medium">{totalPage}</span> |
            Content <span className="font-medium">40</span> of{" "}
            <span className="font-medium">{pokemons.totalPage}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href=""
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-blue-700 px-2 py-2 text-sm font-medium text-white hover:bg-blue-400 focus:z-20"
              onClick={(e) => toPrev(e, pokemons.prevPage)}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href=""
              className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-blue-700 px-2 py-2 text-sm font-medium text-white hover:bg-blue-400 focus:z-20"
              onClick={(e) => toNext(e, pokemons.nextPage)}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
