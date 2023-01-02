import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import CharacterCard from "../../components/character-card";
import ShimmerList from "../../components/character-card/shimmer";
import Pagination from "../../components/pagination";
import { setCharacters } from "./actions";
import { character } from "./selectors";

function CharacterList() {
  const [searchParams] = useSearchParams();
  const pageNumber = searchParams.get('page');
  const [page, setPage] = useState(() => pageNumber ? pageNumber : 0);
  const characters = useSelector(character.getCharacters);
  const totalRecords = useSelector(character.getInfo);
  const isLoading = useSelector(character.getLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onPagination = (page) => {
    setPage(page);
    navigate({
      search: `page=${page}`
    })
  };

  useEffect(() => {
    dispatch(setCharacters(page));
  }, [page]);

  if (!characters.length && !isLoading) {
    return <section className="container">No results found</section>;
  }

  return (
    <>
      <section className="container">
        {isLoading ? (
          //TODO: loading state can be improved with proper effect
          <ShimmerList />
        ) : (
          characters?.map((character) => (
            <CharacterCard key={character.id} {...character} />
          ))
        )}
      </section>
      <Pagination
        totalRecords={totalRecords.count}
        perPage={20}
        activePage={page}
        handlePagination={onPagination}
      />
    </>
  );
}

export default CharacterList;
